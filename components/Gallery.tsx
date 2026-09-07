"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import SectionHeading from "./SectionHeading";
import { Icon } from "./Icons";
import { gallery } from "@/lib/site";

export default function Gallery() {
  const tags = useMemo(
    () => ["Mind", ...Array.from(new Set(gallery.map((g) => g.tag)))],
    [],
  );
  const [tag, setTag] = useState("Mind");
  const [idx, setIdx] = useState<number | null>(null);

  const shown = useMemo(
    () => (tag === "Mind" ? gallery : gallery.filter((g) => g.tag === tag)),
    [tag],
  );

  const close = useCallback(() => setIdx(null), []);
  const step = useCallback(
    (d: number) =>
      setIdx((i) => (i === null ? i : (i + d + shown.length) % shown.length)),
    [shown.length],
  );

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [idx, close, step]);

  const current = idx === null ? null : shown[idx];

  return (
    <section id="munkaink" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-ink-500 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Munkáink"
          title={
            <>
              Nem rendereken dolgozunk –{" "}
              <span className="text-brand-400">valódi helyszíneken</span>
            </>
          }
          lead="Néhány kép a legutóbbi munkáinkról: elosztószekrények, földkábeles nyomvonalak, kültéri kiállások és egy fali okostöltő."
          align="center"
        />

        <div className="rv mt-10 flex flex-wrap justify-center gap-2">
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTag(t)}
              className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
                tag === t
                  ? "border-brand-500 bg-brand-500 text-ink-950"
                  : "border-ink-600 bg-ink-900/60 text-mist-500 hover:border-ink-500 hover:text-mist-100"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-10 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[240px] lg:grid-cols-4">
          {shown.map((g, i) => (
            <button
              key={g.src}
              type="button"
              onClick={() => setIdx(i)}
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
              className={`rv edge group relative overflow-hidden rounded-2xl bg-ink-850 text-left ${
                tag === "Mind" ? g.span : ""
              }`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink-950 via-ink-950/25 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="inline-block rounded-full border border-brand-600/50 bg-brand-900/60 px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-widest text-brand-200 backdrop-blur">
                  {g.tag}
                </span>
                <p className="mt-2 font-display text-[15px] font-bold leading-tight text-mist-100">
                  {g.title}
                </p>
                <p className="mt-1 max-h-0 overflow-hidden text-[12.5px] leading-snug text-mist-300 opacity-0 transition-all duration-500 group-hover:max-h-16 group-hover:opacity-100">
                  {g.text}
                </p>
              </div>
              <span className="absolute right-3 top-3 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full border border-ink-500 bg-ink-950/70 text-mist-100 opacity-0 backdrop-blur transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 10V4h6M20 14v6h-6M4 4l6.5 6.5M20 20l-6.5-6.5" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* nagyító */}
      {current && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink-950/93 p-4 backdrop-blur-md sm:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Bezárás"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-ink-500 bg-ink-900/80 text-mist-100 transition-colors hover:border-brand-500 sm:right-8 sm:top-8"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Előző kép"
            className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-ink-500 bg-ink-900/80 text-mist-100 transition-colors hover:border-brand-500 sm:left-8"
          >
            <Icon name="arrow" className="h-5 w-5 rotate-180" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Következő kép"
            className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-ink-500 bg-ink-900/80 text-mist-100 transition-colors hover:border-brand-500 sm:right-8"
          >
            <Icon name="arrow" className="h-5 w-5" />
          </button>

          <figure
            className="relative flex max-h-full w-full max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="edge relative w-auto max-w-full overflow-hidden rounded-2xl bg-ink-900">
              <Image
                src={current.src}
                alt={current.alt}
                width={1400}
                height={1000}
                sizes="(max-width: 1024px) 92vw, 900px"
                className="mx-auto max-h-[68vh] w-auto object-contain"
              />
            </div>
            <figcaption className="mt-4 max-w-xl text-center">
              <p className="font-display text-lg font-bold text-mist-100">{current.title}</p>
              <p className="mt-1 text-[14px] text-mist-500">{current.text}</p>
              <p className="mt-3 text-[12px] text-mist-600">
                {(idx ?? 0) + 1} / {shown.length}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
