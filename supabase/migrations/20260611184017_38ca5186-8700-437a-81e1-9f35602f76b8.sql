-- Revoke read/update/delete privileges from public-facing roles.
REVOKE SELECT, UPDATE, DELETE ON public.contacts FROM anon;
REVOKE SELECT, UPDATE, DELETE ON public.contacts FROM authenticated;

-- Ensure service_role retains full access (used by server-side code).
GRANT ALL ON public.contacts TO service_role;

-- Add explicit restrictive policies so intent is clear and any future GRANT
-- cannot accidentally expose data. Default-deny stays in effect.
DROP POLICY IF EXISTS "No public reads of contact submissions" ON public.contacts;
CREATE POLICY "No public reads of contact submissions"
  ON public.contacts
  FOR SELECT
  TO anon, authenticated
  USING (false);

DROP POLICY IF EXISTS "No public updates of contact submissions" ON public.contacts;
CREATE POLICY "No public updates of contact submissions"
  ON public.contacts
  FOR UPDATE
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

DROP POLICY IF EXISTS "No public deletes of contact submissions" ON public.contacts;
CREATE POLICY "No public deletes of contact submissions"
  ON public.contacts
  FOR DELETE
  TO anon, authenticated
  USING (false);