"use client";

import { useEffect, useRef } from "react";

/* A decorative ring that trails the pointer with easing and swells over
   interactive targets. The native cursor stays for precision; this is
   additive. Disabled on touch and when reduced motion is requested. */
export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ring.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || still) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let scale = 1;
    let hovering = false;
    let shown = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!shown) {
        shown = true;
        el.style.opacity = "1";
      }
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      hovering = !!t?.closest("a, button, input, [data-cursor]");
    };
    const onLeave = () => {
      shown = false;
      el.style.opacity = "0";
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      scale += ((hovering ? 1.8 : 1) - scale) * 0.2;
      el.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) scale(${scale})`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ring}
      aria-hidden="true"
      className="border-ivory pointer-events-none fixed top-0 left-0 z-[200] h-8 w-8 rounded-full border opacity-0 mix-blend-difference"
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
}
