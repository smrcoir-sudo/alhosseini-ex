// Connects the page to Supabase and exposes the small `window.claude` interface that app.js uses
// (user + db), plus `window.AUTH` for sign-in. If config.js is not filled in, the site runs with sample rates.
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const cfg = window.APP_CONFIG || {};
const ok = cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY && !/^YOUR_/.test(cfg.SUPABASE_URL) && !/^YOUR_/.test(cfg.SUPABASE_ANON_KEY);

if (ok) {
  const needPassword = /type=(invite|recovery)/.test(location.hash);
  const signedUp = /type=signup/.test(location.hash);
  const sb = createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
  });

  let session = null, profile = null;
  const ready = (async () => {
    try {
      const { data } = await sb.auth.getSession();
      session = data.session;
      if (session) {
        const r = await sb.from('profiles').select('id,name,role').eq('id', session.user.id).maybeSingle();
        profile = r.data;
      }
    } catch (e) { /* stay a guest */ }
  })();

  const isAdmin = async () => { await ready; return !!profile && profile.role === 'admin'; };
  const user = {
    isOwner: isAdmin,
    canEdit: isAdmin,
    can: async (n) => { await ready; return n === 'data.write' ? !!session : null; },
    id: async () => { await ready; return session ? session.user.id : null; },
    me: async () => { await ready; return { id: session ? session.user.id : null, name: (profile && profile.name) || '' }; },
    profiles: async (ids) => {
      await ready;
      const out = {};
      (ids || []).forEach((i) => { out[i] = { name: '' }; });
      if (!session || !ids || !ids.length) return out;
      const { data } = await sb.from('profiles').select('id,name').in('id', ids);
      (data || []).forEach((r) => { out[r.id] = { name: r.name || '' }; });
      return out;
    }
  };

  const copy = (v) => JSON.parse(JSON.stringify(v == null ? {} : v));
  const snapOf = (rows) => {
    const docs = rows.map((r) => ({ id: r.id, data: () => copy(r.data) }));
    return { empty: docs.length === 0, docs };
  };
  const sortLimit = (rows, order, limit) => {
    let r = rows.slice();
    if (order) {
      const k = order.f, d = order.dir === 'desc' ? -1 : 1;
      r.sort((a, b) => { const x = (a.data || {})[k], y = (b.data || {})[k]; return x === y ? 0 : (x > y ? 1 : -1) * d; });
    }
    return limit ? r.slice(0, limit) : r;
  };
  const listen = (name, load, cb, err) => {
    let dead = false, timer = null;
    const run = async () => { try { const s = await load(); if (!dead) cb(s); } catch (e) { if (!dead && err) err(e); } };
    run();
    const ch = sb.channel('docs:' + name + ':' + Math.random().toString(36).slice(2))
      .on('postgres_changes', { event: '*', schema: 'public', table: 'docs', filter: 'collection=eq.' + name },
        () => { clearTimeout(timer); timer = setTimeout(run, 150); })
      .subscribe();
    return () => { dead = true; sb.removeChannel(ch); };
  };

  const collection = (name) => {
    const fetchAll = async () => {
      const { data, error } = await sb.from('docs').select('id,data').eq('collection', name);
      if (error) throw error;
      return data || [];
    };
    const query = (order, limit) => ({
      orderBy: (f, dir) => query({ f, dir }, limit),
      limit: (n) => query(order, n),
      get: async () => snapOf(sortLimit(await fetchAll(), order, limit)),
      onSnapshot: (cb, err) => listen(name, async () => snapOf(sortLimit(await fetchAll(), order, limit)), cb, err)
    });
    const doc = (id) => {
      const ref = {
        id,
        get: async () => {
          const { data, error } = await sb.from('docs').select('data').eq('collection', name).eq('id', id).maybeSingle();
          if (error) throw error;
          return { exists: !!data, data: () => (data ? copy(data.data) : undefined) };
        },
        set: async (d) => {
          const { error } = await sb.from('docs').upsert({ collection: name, id, data: d, updated_at: new Date().toISOString() });
          if (error) throw error;
        },
        update: async (p) => { const cur = await ref.get(); return ref.set(Object.assign({}, cur.data() || {}, p)); },
        delete: async () => {
          const { error } = await sb.from('docs').delete().eq('collection', name).eq('id', id);
          if (error) throw error;
        }
      };
      return ref;
    };
    return Object.assign(query(null, null), {
      doc,
      add: async (d) => { const ref = doc(crypto.randomUUID()); await ref.set(d); return ref; }
    });
  };

  window.claude = {
    use: async (name) => {
      if (name === 'user') return user;
      if (name === 'db') return { collection, doc: (p) => { const i = p.lastIndexOf('/'); return collection(p.slice(0, i)).doc(p.slice(i + 1)); } };
      return null;
    }
  };

  window.AUTH = {
    needPassword: needPassword,
    signedUp: signedUp,
    signIn: async (email, password) => { const { error } = await sb.auth.signInWithPassword({ email, password }); if (error) throw error; },
    signUp: async (email, password, meta) => { const { data, error } = await sb.auth.signUp({ email, password, options: { emailRedirectTo: location.origin, data: meta || {} } }); if (error) throw error; return !!data.session; },
    signOut: () => sb.auth.signOut(),
    reset: async (email) => { const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: location.origin }); if (error) throw error; },
    setPassword: async (password) => { const { error } = await sb.auth.updateUser({ password }); if (error) throw error; },
    invite: async (email, role) => {
      const { data } = await sb.auth.getSession();
      if (!data.session) throw new Error('Not signed in');
      const r = await fetch('/api/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + data.session.access_token },
        body: JSON.stringify({ email, role })
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.error || 'HTTP ' + r.status);
      return j;
    }
  };
}
