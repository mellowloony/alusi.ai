"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./DuabaSerwaProposal.module.css";
import ResponsivePicture from "./ResponsivePicture";

export default function DuabaSerwaFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let disposed = false;
    let isVisible = true;
    let soundEnabled = !video.paused && !video.muted && video.volume > 0;

    const reportError = (error: DOMException) => {
      if (!disposed && error.name !== "NotAllowedError" && error.name !== "AbortError") setFailed(true);
    };
    const removeSoundListeners = () => {
      window.removeEventListener("pointerdown", enableSound, true);
      window.removeEventListener("keydown", enableSound, true);
    };
    const playMuted = () => {
      video.muted = true;
      video.play().catch(reportError);
    };
    const tryInitialPlayback = () => {
      video.defaultMuted = false;
      video.muted = false;
      video.volume = 1;
      video.play().then(() => {
        soundEnabled = !video.muted;
        if (soundEnabled) removeSoundListeners();
      }).catch((error: DOMException) => {
        if (disposed) return;
        if (error.name === "NotAllowedError") {
          playMuted();
        } else reportError(error);
      });
    };
    function enableSound() {
      if (!video || reduceMotion || disposed || !isVisible || soundEnabled) return;

      // This runs synchronously inside the visitor's gesture. That matters on
      // Safari and Chrome, which reject unmuting after the gesture has ended.
      soundEnabled = true;
      video.defaultMuted = false;
      video.muted = false;
      video.volume = 1;
      video.play().then(removeSoundListeners).catch((error: DOMException) => {
        soundEnabled = false;
        if (error.name === "NotAllowedError") playMuted();
        else reportError(error);
      });
    }

    if (reduceMotion) {
      video.pause();
      return;
    }
    // Capture the earliest permitted interaction so mobile and desktop
    // browsers can lift their audible-autoplay restriction immediately.
    window.addEventListener("pointerdown", enableSound, true);
    window.addEventListener("keydown", enableSound, true);

    if (!("IntersectionObserver" in window)) {
      tryInitialPlayback();
      return () => { disposed = true; removeSoundListeners(); video.pause(); };
    }
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        if (soundEnabled) video.play().catch(reportError);
        else if (video.currentTime === 0 && video.paused) tryInitialPlayback();
        else playMuted();
      } else video.pause();
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
        autoPlay
        loop
        playsInline
        preload="metadata"
        width={1920}
        height={1080}
        aria-label="Duaba Serwa film"
        onPlaying={() => setHasPlayed(true)}
        onError={() => setFailed(true)}
      >
        <source media="(max-width: 767px)" src="/duaba-serwa/opening-film-mobile.mp4" type="video/mp4" />
        <source src="/duaba-serwa/opening-film.mp4" type="video/mp4" onError={() => setFailed(true)} />
      </video>
      {!hasPlayed && (
        <ResponsivePicture
          className={styles.filmPoster}
          src="/duaba-serwa/opening-film-poster.webp"
          alt=""
          width={1920}
          height={1080}
          widths={[640, 960, 1440]}
          sizes="(max-width: 900px) calc(100vw - 40px), min(50vw, 752px)"
          loading="eager"
          fetchPriority="high"
          ariaHidden
        />
      )}
      {failed && <p className={styles.filmError} role="status">The film couldn’t load. <a href="/duaba-serwa/opening-film.mp4">Open the video</a>.</p>}
      <noscript><p className={styles.filmError}><a href="/duaba-serwa/opening-film.mp4">Watch the film</a></p></noscript>
    </div>
  );
}
