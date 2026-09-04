"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./DuabaSerwaProposal.module.css";

export default function DuabaSerwaFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let disposed = false;

    const reportError = (error: DOMException) => {
      if (!disposed && error.name !== "NotAllowedError" && error.name !== "AbortError") setFailed(true);
    };
    const removeSoundListeners = () => {
      window.removeEventListener("pointerdown", enableSound, true);
      window.removeEventListener("keydown", enableSound, true);
    };
    const playWithSound = () => {
      video.defaultMuted = false;
      video.muted = false;
      video.volume = 1;
      video.play().then(() => {
        if (!video.muted) removeSoundListeners();
      }).catch((error: DOMException) => {
        if (disposed) return;
        if (error.name === "NotAllowedError") {
          // Browsers can block audible autoplay. Keep the film moving and
          // enable its original audio on the first permitted user gesture.
          video.muted = true;
          video.play().catch(reportError);
        } else reportError(error);
      });
    };
    function enableSound() {
      if (!video || reduceMotion || disposed) return;
      const rect = video.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) playWithSound();
    }

    if (reduceMotion) return;
    // Capture the earliest permitted interaction so mobile and desktop
    // browsers can lift their audible-autoplay restriction immediately.
    window.addEventListener("pointerdown", enableSound, true);
    window.addEventListener("keydown", enableSound, true);

    if (!("IntersectionObserver" in window)) {
      playWithSound();
      return () => { disposed = true; removeSoundListeners(); video.pause(); };
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) playWithSound();
      else video.pause();
    }, { threshold: 0.15 });
    observer.observe(video);
    return () => {
      disposed = true;
      observer.disconnect();
      removeSoundListeners();
      video.pause();
    };
  }, []);

  return (
    <div className={styles.filmPlayer}>
      <video
        ref={videoRef}
        loop
        playsInline
        preload="auto"
        poster="/duaba-serwa/opening-film-poster.webp"
        width={1920}
        height={1080}
        aria-label="Duaba Serwa film"
        onPlaying={() => setHasPlayed(true)}
        onError={() => setFailed(true)}
      >
        <source src="/duaba-serwa/opening-film.mp4" type="video/mp4" onError={() => setFailed(true)} />
      </video>
      {!hasPlayed && <img className={styles.filmPoster} src="/duaba-serwa/opening-film-poster.webp" alt="" width={1920} height={1080} fetchPriority="high" />}
      {failed && <p className={styles.filmError} role="status">The film couldn’t load. <a href="/duaba-serwa/opening-film.mp4">Open the video</a>.</p>}
      <noscript><p className={styles.filmError}><a href="/duaba-serwa/opening-film.mp4">Watch the film</a></p></noscript>
    </div>
  );
}
