"use client";

import { useEffect, useRef, useState } from "react";
import ResponsivePicture from "./ResponsivePicture";

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

    let observer: IntersectionObserver | null = null;
    let idleId: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const start = () => {
      video.muted = true;
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) video.play().catch(() => {});
          else video.pause();
        },
        { threshold: 0.15 },
      );
      observer.observe(video);
    };

    const idleWindow = window as unknown as {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    if (idleWindow.requestIdleCallback) {
      idleId = idleWindow.requestIdleCallback(start, { timeout: 1500 });
    } else {
      timeoutId = globalThis.setTimeout(start, 600);
    }

    return () => {
      if (idleId !== null) idleWindow.cancelIdleCallback?.(idleId);
      if (timeoutId !== null) globalThis.clearTimeout(timeoutId);
      observer?.disconnect();
    };
  }, []);

  return (
    <div className="relative h-full w-full">
      <ResponsivePicture
        src="/alusi-hero-poster.webp?v=0901"
        alt=""
        width={1920}
        height={1080}
        widths={[640, 960, 1440]}
        sizes="(max-width: 767px) calc(100vw - 40px), min(50vw, 752px)"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        ariaHidden
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
