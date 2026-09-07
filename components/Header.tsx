"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Icon } from "./Icons";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, y / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis) setActive(vis.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.6] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled || open
            ? "border-b border-ink-600/70 bg-ink-950/90 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="#top" className="group shrink-0" aria-label={site.name}>
            <Logo compact className="transition-transform duration-300 group-hover:scale-[1.03]" />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => {
              const isActive = active === n.href.slice(1);
              return (
                <a
                  key={n.href}
                  href={n.href}
                  className={`relative rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors duration-300 ${
                    isActive ? "text-mist-100" : "text-mist-500 hover:text-mist-100"
                  }`}
                >
                  {n.label}
                  <span
                    className={`pointer-events-none absolute inset-x-3.5 -bottom-px h-px origin-center bg-linear-to-r from-transparent via-brand-400 to-transparent transition-transform duration-400 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={site.phoneHref}
              className="sheen group hidden items-center gap-2 rounded-full bg-brand-500 px-4.5 py-2.5 text-[13.5px] font-semibold text-ink-950 shadow-[0_6px_28px_-8px_var(--color-brand-500)] transition-all duration-300 hover:bg-brand-400 hover:shadow-[0_10px_36px_-8px_var(--color-brand-400)] sm:inline-flex"
            >
              <span className="sheen-bar" />
              <Icon name="phone" className="h-4 w-4" />
              {site.phone}
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
              aria-expanded={open}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-ink-500 bg-ink-850/70 text-mist-100 transition-colors hover:border-brand-600 lg:hidden"
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          className="h-px origin-left bg-linear-to-r from-brand-600 via-brand-400 to-volt-400 transition-[transform] duration-150"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* mobil menü */}
      <div
        className={`fixed inset-0 top-[73px] z-40 overflow-hidden bg-ink-950/97 backdrop-blur-xl transition-all duration-400 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col gap-1 px-6 pt-8">
          {nav.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${80 + i * 55}ms` : "0ms" }}
              className={`flex items-center justify-between border-b border-ink-700 py-4 font-display text-2xl font-semibold transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {n.label}
              <Icon name="arrow" className="h-5 w-5 text-brand-500" />
            </a>
          ))}
          <div
            style={{ transitionDelay: open ? "440ms" : "0ms" }}
            className={`mt-8 flex flex-col gap-3 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <a
              href={site.phoneHref}
              className="flex items-center justify-center gap-2 rounded-2xl bg-brand-500 px-5 py-4 font-semibold text-ink-950"
            >
              <Icon name="phone" className="h-5 w-5" />
              {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="flex items-center justify-center gap-2 rounded-2xl border border-ink-500 px-5 py-4 font-medium text-mist-300"
            >
              <Icon name="mail" className="h-5 w-5" />
              {site.email}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
