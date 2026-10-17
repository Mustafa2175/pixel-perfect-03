CREATE TABLE public.inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  contact text NOT NULL,
  business_type text NOT NULL,
  solution text NOT NULL,
  description text NOT NULL,
  lang text NOT NULL DEFAULT 'ar'
);
GRANT ALL ON public.inquiries TO service_role;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;