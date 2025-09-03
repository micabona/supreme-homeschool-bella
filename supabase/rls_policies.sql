-- Example RLS policies for Supabase
-- Enable row level security on the tasks table
-- This is only a placeholder file; adapt the policies to your own tables.

alter table if exists tasks enable row level security;

create policy "Allow user access to own tasks"
on tasks for all
using (auth.uid() = user_id);
