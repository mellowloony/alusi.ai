"use client";

import { useEffect, useRef } from "react";

/* Autoplaying, looping showreel. Muted + playsInline satisfy autoplay
   policies; the effect re-asserts muted and calls play() so it starts
   immediately even if React omits the muted attribute from the SSR HTML. */
export default function Showreel() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="/showreel-poster.jpg"
      aria-label="Showreel"
    >
      <source src="/showreel.mp4" type="video/mp4" />
    </video>
  );
}
