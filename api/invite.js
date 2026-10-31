// Vercel serverless function: an admin invites a person by email.
// The service-role key stays on the server (environment variable), never in the browser.
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return res.status(500).json({ error: 'Server is not configured' });

  const token = String(req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!token) return res.status(401).json({ error: 'Sign in first' });

  const admin = createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
  const { data: u, error: ue } = await admin.auth.getUser(token);
  if (ue || !u || !u.user) return res.status(401).json({ error: 'Invalid session' });

  const { data: me } = await admin.from('profiles').select('role').eq('id', u.user.id).maybeSingle();
  const isOwner = String(u.user.email || '').toLowerCase() === (process.env.OWNER_EMAIL || 'smr.co.ir@gmail.com').toLowerCase();
  if (!me || me.role !== 'admin') return res.status(403).json({ error: 'Admins only' });

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = {}; } }
  body = body || {};
  const email = String(body.email || '').trim().toLowerCase();
  const role = body.role === 'admin' ? 'admin' : 'user';
  if (role === 'admin' && !isOwner) return res.status(403).json({ error: 'Only the owner can invite admins' });
  if (email.length > 200 || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  const site = process.env.SITE_URL || ('https://' + req.headers.host);
  const { data, error } = await admin.auth.admin.inviteUserByEmail(email, { redirectTo: site });
  if (error) return res.status(400).json({ error: error.message });

  // The profile row is created by a database trigger; set the chosen role.
  const { error: pe } = await admin.from('profiles').update({ role, email }).eq('id', data.user.id);
  if (pe) return res.status(500).json({ error: pe.message });

  return res.status(200).json({ ok: true });
}
