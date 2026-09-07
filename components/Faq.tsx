"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Icon } from "./Icons";
import { faq, site } from "@/lib/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="gyik" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-ink-500 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Gyakori kérdések"
              title={
                <>
                  Amit a legtöbben{" "}
                  <span className="text-brand-400">megkérdeznek</span>
                </>
              }
              lead="Ha a válasz nincs itt, egy telefon és megbeszéljük."
            />
            <a
              href={site.phoneHref}
              className="rv mt-7 inline-flex items-center gap-2.5 rounded-full border border-ink-500 px-5 py-3 text-sm font-medium text-mist-300 transition-colors hover:border-brand-600 hover:text-mist-100"
              style={{ transitionDelay: "180ms" }}
            >
              <Icon name="phone" className="h-4 w-4 text-brand-400" />
              {site.phone}
            </a>
          </div>

          <ul className="space-y-3">
            {faq.map((f, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={f.q}
                  className="rv edge overflow-hidden rounded-2xl bg-ink-900/70"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-300 hover:bg-ink-850"
                  >
                    <span
                      className={`font-display text-[16.5px] font-bold leading-snug transition-colors duration-300 ${
                        isOpen ? "text-brand-400" : "text-mist-100"
                      }`}
                    >
                      {f.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-400 ${
                        isOpen
                          ? "rotate-45 border-brand-500 bg-brand-500 text-ink-950"
                          : "border-ink-500 text-mist-500"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[14.5px] leading-relaxed text-mist-500">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
