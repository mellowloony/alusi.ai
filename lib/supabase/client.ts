import { createBrowserClient } from "@supabase/ssr";

/* This site is a static export (`output: "export"`), so there is no server —
   Supabase is reached directly from the browser. Both env vars are public
   (NEXT_PUBLIC_*) and safe to ship in the bundle: the publishable key uses the
   anon role and access is governed by row-level security on the database.

   The env check lives INSIDE createClient (not at module top level) so that
   static prerendering, which evaluates this module at build time, does not
   throw when the vars are absent. It only fails at call time — in the browser
   when a user actually submits — where Waitlist catches it and shows an error. */

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabasePublishableKey) {
    throw new Error(
      "Missing Supabase env vars. Set NEXT_PUBLIC_SUPABASE_URL and " +
        "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY (see .env.example).",
    );
  }

  return createBrowserClient(supabaseUrl, supabasePublishableKey);
}
