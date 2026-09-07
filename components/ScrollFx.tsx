"use client";

import { useEffect } from "react";

/**
 * Egyetlen kliens-komponens, ami az egész oldal apró effektjeit intézi:
 *  - .rv elemek feltűnése görgetéskor (IntersectionObserver)
 *  - .spot kártyák egérkövető fénye (CSS változóval)
 *  - data-counter elemek felszámlálása
 */
export default function ScrollFx() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---- feltűnés ---- */
    let cleanupIo: (() => void) | undefined;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".rv"));
    if (reduce) {
      targets.forEach((el) => (el.dataset.shown = "true"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              (e.target as HTMLElement).dataset.shown = "true";
              io.unobserve(e.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
      );
      targets.forEach((el) => io.observe(el));
      cleanupIo = () => io.disconnect();
    }

    /* ---- számlálók ---- */
    const counters = Array.from(
      document.querySelectorAll<HTMLElement>("[data-counter]"),
    );
    const runCount = (el: HTMLElement) => {
      const to = Number(el.dataset.counter ?? "0");
      const suffix = el.dataset.suffix ?? "";
      if (reduce) {
        el.textContent = to.toLocaleString("hu-HU") + suffix;
        return;
      }
      const dur = 1250;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(to * eased).toLocaleString("hu-HU") + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            runCount(e.target as HTMLElement);
            cio.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    counters.forEach((el) => cio.observe(el));

    /* ---- kártya-fény ---- */
    const onMove = (ev: PointerEvent) => {
      const card = (ev.target as HTMLElement | null)?.closest<HTMLElement>(".spot");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${ev.clientX - r.left}px`);
      card.style.setProperty("--my", `${ev.clientY - r.top}px`);
    };
    if (!reduce) window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      cleanupIo?.();
      cio.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return null;
}
