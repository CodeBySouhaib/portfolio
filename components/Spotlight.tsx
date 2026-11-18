"use client";

import { useEffect } from "react";

/**
 * Feeds the pointer position into the hovered `.box-hover` card as
 * --mx / --my so its spotlight and glowing border follow the cursor.
 * One passive listener for the whole page, throttled to one update per frame.
 * Skipped on touch-only devices.
 */
export default function Spotlight() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    let last: PointerEvent | null = null;

    const update = () => {
      frame = 0;
      if (!last) return;
      const target = (last.target as Element | null)?.closest?.(".box-hover") as HTMLElement | null;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${last.clientX - rect.left}px`);
      target.style.setProperty("--my", `${last.clientY - rect.top}px`);
    };

    const onMove = (e: PointerEvent) => {
      last = e;
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
