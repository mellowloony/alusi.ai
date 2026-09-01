"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroFilm() {
  const ref = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
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
      { threshold: 0.15 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative h-full w-full">
      <img
        src="/alusi-hero-poster.avif?v=0829"
        alt=""
        width={1920}
        height={1080}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        aria-hidden="true"
        className={`absolute inset-0 z-10 h-full w-full object-cover transition-opacity duration-500 motion-reduce:transition-none ${isPlaying ? "opacity-0" : "opacity-100"}`}
      />
      <video
        ref={ref}
        className="h-full w-full object-cover"
        loop
        muted
        playsInline
        preload="none"
        onPlaying={() => setIsPlaying(true)}
        aria-hidden="true"
        tabIndex={-1}
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src="/alusi-hero.mp4?v=0829" type="video/mp4" />
      </video>
    </div>
  );
}
