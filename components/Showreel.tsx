"use client";

import { useEffect, useRef } from "react";

/* Autoplaying, looping showreel — deferred so it never competes with the
   first paint.

   The markup carries no autoPlay and preload="none", so the browser fetches
   nothing on load: the poster stands in until we ask for the video. Playback
   is only started once the page has finished loading, the panel is actually
   on screen, and the main thread is idle. Muted + playsInline satisfy the
   autoplay policies; the effect re-asserts muted because React omits the
   attribute from the SSR HTML.

   Sources are HEVC first, H.264 second — the browser takes the first it can
   decode, so HEVC-capable clients pull ~25% fewer bytes. Neither carries an
   audio track: the video is muted, so it was never audible.

   Reduced-motion, Save-Data and 2G visitors keep the poster and download no
   video at all. */
export default function Showreel() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // navigator.connection is Chromium-only; absent elsewhere, so opt in.
    const conn = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    if (conn?.saveData) return;
    if (conn?.effectiveType === "slow-2g" || conn?.effectiveType === "2g")
      return;

    let cancelled = false;

    const start = () => {
      if (cancelled) return;
      v.muted = true;
      // preload="none" means nothing has been fetched yet; play() kicks off
      // resource selection. A rejection (autoplay blocked) leaves the poster.
      v.play().catch(() => {});
    };

    // Idle callback keeps the fetch off the critical path on slower devices.
    const schedule = () => {
      if (cancelled) return;
      // requestIdleCallback is missing on older Safari; the timeout is the
      // equivalent nudge off the critical path.
      if (typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(start, { timeout: 2000 });
      } else {
        window.setTimeout(start, 200);
      }
    };

    // Only once the panel is on screen — /uwa is short, but this keeps the
    // component safe to reuse further down a page.
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        if (document.readyState === "complete") schedule();
        else window.addEventListener("load", schedule, { once: true });
      },
      { rootMargin: "200px" },
    );
    observer.observe(v);

    return () => {
      cancelled = true;
      observer.disconnect();
      window.removeEventListener("load", schedule);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      loop
      muted
      playsInline
      preload="none"
      poster="/showreel-poster.webp"
      aria-label="Showreel"
      tabIndex={-1}
      disablePictureInPicture
      disableRemotePlayback
    >
      <source src="/showreel.hevc.mp4" type='video/mp4; codecs="hvc1"' />
      <source src="/showreel.mp4" type="video/mp4" />
    </video>
  );
}
