"use client";

import { useEffect } from "react";
import { insertPublicRow } from "../lib/supabase/public-insert";

/* Logs one visit per browser session (sessionStorage guard so refreshes don't
   inflate the count) with a persistent anonymous visitor id (localStorage) so
   the admin can tell unique visitors from total visits. Fire-and-forget and
   fully guarded — it must never disrupt the page. Insert-only by RLS; the
   public cannot read what's written. */
export default function VisitLogger() {
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      try {
        if (sessionStorage.getItem("uwa-visit-logged")) return;
        sessionStorage.setItem("uwa-visit-logged", "1");

        let visitorId = localStorage.getItem("uwa-visitor-id");
        if (!visitorId) {
          visitorId = crypto.randomUUID();
          localStorage.setItem("uwa-visitor-id", visitorId);
        }

        void insertPublicRow(
          "visits",
          {
            visitor_id: visitorId,
            path: window.location.pathname,
            referrer: document.referrer || null,
          },
          { keepalive: true },
        ).catch(() => {});
      } catch {
        /* storage blocked, private mode, or env missing — skip silently */
      }
    }, 3500);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return null;
}
