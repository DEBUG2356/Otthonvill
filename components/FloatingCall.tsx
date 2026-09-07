"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icons";
import { site } from "@/lib/site";

export default function FloatingCall() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Vissza a tetejére"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-500 bg-ink-900/85 text-mist-300 backdrop-blur transition-colors hover:border-brand-600 hover:text-brand-400"
      >
        <Icon name="arrow" className="h-4.5 w-4.5 -rotate-90" />
      </button>

      <a
        href={site.phoneHref}
        className="group relative flex items-center gap-2.5 rounded-full bg-brand-500 py-3.5 pl-4 pr-5 font-semibold text-ink-950 shadow-[0_14px_40px_-12px_var(--color-brand-500)] transition-transform duration-300 hover:scale-[1.03]"
      >
        <span className="absolute inset-0 rounded-full bg-brand-500 animate-pulse-ring" />
        <Icon name="phone" className="relative h-[18px] w-[18px]" />
        <span className="relative hidden text-sm sm:inline">Hívjon most</span>
        <span className="relative text-sm sm:hidden">Hívás</span>
      </a>
    </div>
  );
}
