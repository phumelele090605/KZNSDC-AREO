/*
# Create interest signups table

1. Plain-English Summary
   This adds a way for site visitors to leave their email address so KZNsdc can
   notify them when applications for the 2027 KwaZulu-Natal Space Design
   Competition open. This is a public, no-login site, so anyone can submit
   their email, but no one (other than the project owner via the dashboard)
   can read the list back through the app.

2. New Table: interest_signups
   - `id` (uuid, primary key) - unique identifier for the signup
   - `email` (text, required) - the visitor's email address
   - `created_at` (timestamptz, default now()) - when they signed up

3. Security
   - Row Level Security is enabled on `interest_signups`.
   - A public INSERT policy allows anonymous visitors to submit their email
     (this site has no accounts/sign-in).
   - No SELECT/UPDATE/DELETE policies are added, so submitted emails cannot be
     read, changed, or removed through the public app - only via the
     project's Supabase dashboard.

4. Notes
   - No `user_id` column: this app has no authentication, so signups aren't
     tied to a user account.
*/

CREATE TABLE IF NOT EXISTS interest_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE interest_signups ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_interest_signups" ON interest_signups;
CREATE POLICY "anon_insert_interest_signups" ON interest_signups FOR INSERT
  TO anon, authenticated WITH CHECK (true);
