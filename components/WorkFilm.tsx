"use client";

import { useEffect, useRef, useState } from "react";

export default function WorkFilm({
  src,
  poster,
  className,
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

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

    // Keep the lightweight poster for visitors who have asked the browser to
    // reduce motion or data usage.
    if (reduceMotion || slowConnection) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoadVideo(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      const isNearViewport = Boolean(entry?.isIntersecting);
      setShouldLoadVideo(isNearViewport);
      if (!isNearViewport) setIsPlaying(false);
    }, { rootMargin: "240px 0px" });

    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoadVideo) return;

    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) video.play().catch(() => {});
        else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.55 },
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [shouldLoadVideo]);

  return (
    <div ref={hostRef} className={className}>
      <img
        src={poster}
        alt=""
        loading="lazy"
        decoding="async"
        aria-hidden="true"
        className={`z-10 transition-opacity duration-300 motion-reduce:transition-none ${isPlaying ? "opacity-0" : "opacity-100"}`}
      />
      {shouldLoadVideo && (
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="metadata"
          poster={poster}
          onPlaying={() => setIsPlaying(true)}
          onWaiting={() => setIsPlaying(false)}
          aria-hidden="true"
          tabIndex={-1}
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
