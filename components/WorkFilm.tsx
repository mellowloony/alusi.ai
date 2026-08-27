"use client";

import { useEffect, useRef } from "react";

export default function WorkFilm({
  src,
  poster,
  preload = "metadata",
}: {
  src: string;
  poster: string;
  preload?: "auto" | "metadata";
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    const slowConnection =
      connection?.saveData ||
      connection?.effectiveType === "slow-2g" ||
      connection?.effectiveType === "2g";

    if (reduceMotion || slowConnection) return;

    video.muted = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      loop
      muted
      playsInline
      preload={preload}
      poster={poster}
      aria-hidden="true"
      tabIndex={-1}
      disablePictureInPicture
      disableRemotePlayback
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
