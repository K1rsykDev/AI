-- Profiles
create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  username text unique,
  avatar_url text,
  created_at timestamptz default now()
);

-- Projects
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null,
  title text not null,
  status text default 'draft',
  visibility text default 'private',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.project_files (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects on delete cascade,
  path text not null,
  content text,
  created_at timestamptz default now()
);

create table if not exists public.project_messages (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects on delete cascade,
  role text not null,
  content text,
  created_at timestamptz default now()
);

create table if not exists public.templates (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  category text,
  seed_files jsonb default '[]'::jsonb,
  is_featured boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.permissions (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects on delete cascade,
  user_id uuid not null,
  role text default 'viewer',
  created_at timestamptz default now()
);

create table if not exists public.billing_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  amount numeric,
  status text default 'pending',
  receipt_url text,
  created_at timestamptz default now()
);

create table if not exists public.credits_ledger (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  delta integer not null,
  reason text,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;
alter table public.projects enable row level security;
alter table public.project_files enable row level security;
alter table public.project_messages enable row level security;
alter table public.templates enable row level security;
alter table public.permissions enable row level security;
alter table public.billing_requests enable row level security;
alter table public.credits_ledger enable row level security;

create policy "Profiles are viewable by owner" on public.profiles
  for select using (auth.uid() = user_id);

create policy "Projects accessible by owner" on public.projects
  for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

create policy "Shared access" on public.permissions
  for select using (auth.uid() = user_id);

create policy "Project files by owner" on public.project_files
  for all using (
    auth.uid() = (select owner_id from public.projects where id = project_id)
  ) with check (
    auth.uid() = (select owner_id from public.projects where id = project_id)
  );

create policy "Project messages by owner" on public.project_messages
  for all using (
    auth.uid() = (select owner_id from public.projects where id = project_id)
  ) with check (
    auth.uid() = (select owner_id from public.projects where id = project_id)
  );

create policy "Templates are readable" on public.templates
  for select using (true);

create policy "Billing requests by owner" on public.billing_requests
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Credits ledger by owner" on public.credits_ledger
  for select using (auth.uid() = user_id);
