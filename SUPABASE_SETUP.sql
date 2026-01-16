-- 1. Create the blogues table
CREATE TABLE public.blogues (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  content TEXT, -- Markdown content
  image_url TEXT,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  author TEXT DEFAULT 'Baptiste'
);

-- 2. Enable Row Level Security (RLS)
-- This is important security practice in Supabase
ALTER TABLE public.blogues ENABLE ROW LEVEL SECURITY;

-- 3. Create a policy to allow EVERYONE to READ the blogues
-- This is necessary for your public website to display the articles
CREATE POLICY "Enable read access for all users" 
ON public.blogues FOR SELECT 
USING (true);

-- 4. Create a policy to allow only authenticated users to INSERT/UPDATE/DELETE
-- (In your case, you will manage this from the Supabase Dashboard, so this is just a safety)
CREATE POLICY "Enable write access for authenticated users only" 
ON public.blogues FOR ALL 
USING (auth.role() = 'authenticated');
