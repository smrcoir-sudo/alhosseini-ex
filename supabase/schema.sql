-- Run this whole file once in Supabase: SQL Editor -> New query -> Run.

-- 1) People and roles --------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  name text,
  role text not null default 'user' check (role in ('admin','user')),
  created_at timestamptz not null default now()
);
alter table public.profiles enable row level security;

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'admin');
$$;

alter table public.profiles add column if not exists first_name text, add column if not exists last_name text, add column if not exists phone text;

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
declare fn text := left(nullif(trim(new.raw_user_meta_data->>'first_name'),''),80);
        ln text := left(nullif(trim(new.raw_user_meta_data->>'last_name'),''),80);
        ph text := left(nullif(trim(new.raw_user_meta_data->>'phone'),''),30);
begin
  insert into public.profiles (id, email, name, first_name, last_name, phone)
  values (new.id, new.email,
          coalesce(nullif(trim(coalesce(fn,'')||' '||coalesce(ln,'')),''), nullif(new.raw_user_meta_data->>'name',''), split_part(new.email,'@',1)),
          fn, ln, ph)
  on conflict (id) do nothing;
  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

drop policy if exists profiles_read on public.profiles;
create policy profiles_read on public.profiles for select to authenticated
  using (id = auth.uid() or public.is_admin());
drop policy if exists profiles_admin on public.profiles;
create policy profiles_admin on public.profiles for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

-- 2) Document store used by the site -----------------------------------
-- collections: currencies, history, settings (public read, admin write)
--              invites (own row), invadmin, invstatus (admin only)
--              data/users/<uid>/invites (private to that user)
create table if not exists public.docs (
  collection text not null,
  id text not null,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (collection, id)
);
alter table public.docs enable row level security;

drop policy if exists docs_public_read on public.docs;
create policy docs_public_read on public.docs for select to anon, authenticated
  using (collection in ('currencies','history','settings'));

drop policy if exists docs_admin_all on public.docs;
create policy docs_admin_all on public.docs for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

drop policy if exists docs_invites_select on public.docs;
create policy docs_invites_select on public.docs for select to authenticated
  using (collection = 'invites' and id = auth.uid()::text);
drop policy if exists docs_invites_insert on public.docs;
create policy docs_invites_insert on public.docs for insert to authenticated
  with check (collection = 'invites' and id = auth.uid()::text);
drop policy if exists docs_invites_update on public.docs;
create policy docs_invites_update on public.docs for update to authenticated
  using (collection = 'invites' and id = auth.uid()::text)
  with check (collection = 'invites' and id = auth.uid()::text);

drop policy if exists docs_private_all on public.docs;
create policy docs_private_all on public.docs for all to authenticated
  using (collection like 'data/users/' || auth.uid()::text || '/%')
  with check (collection like 'data/users/' || auth.uid()::text || '/%');

-- 3) Live updates ------------------------------------------------------
do $$ begin
  alter publication supabase_realtime add table public.docs;
exception when duplicate_object then null;
end $$;
