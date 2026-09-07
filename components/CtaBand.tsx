import CircuitBg from "./CircuitBg";
import { Icon } from "./Icons";
import { site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="relative px-5 pb-8 sm:px-8">
      <div className="noise edge relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink-900 px-7 py-14 sm:px-14 sm:py-20">
        <CircuitBg className="opacity-40" />
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-600/25 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-28 -right-16 h-72 w-72 rounded-full bg-volt-500/15 blur-[110px]" />

        <div className="relative z-2 mx-auto max-w-3xl text-center">
          <p className="rv font-display text-xs font-semibold uppercase tracking-[0.28em] text-brand-400">
            {site.motto}
          </p>
          <h2
            className="rv mt-5 font-display text-3xl font-extrabold leading-[1.1] sm:text-5xl"
            style={{ transitionDelay: "80ms" }}
          >
            Ha percegő hangot hall a falból,
            <br className="hidden sm:block" /> akkor nem a ház beszél.
          </h2>
          <p
            className="rv mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-mist-500"
            style={{ transitionDelay: "150ms" }}
          >
            Melegedő konnektor, leoldó biztosíték, égett szag – mind ugyanazt jelenti.
            Hívjon minket, mielőtt komolyabb baj lesz belőle.
          </p>

          <div
            className="rv mt-9 flex flex-wrap items-center justify-center gap-3.5"
            style={{ transitionDelay: "220ms" }}
          >
            <a
              href={site.phoneHref}
              className="sheen group inline-flex items-center gap-2.5 rounded-full bg-brand-500 px-8 py-4 font-semibold text-ink-950 shadow-[0_16px_46px_-14px_var(--color-brand-500)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-400"
            >
              <span className="sheen-bar" />
              <Icon name="phone" className="h-[18px] w-[18px]" />
              {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="inline-flex items-center gap-2.5 rounded-full border border-ink-500 bg-ink-950/50 px-8 py-4 font-medium text-mist-100 backdrop-blur transition-colors duration-300 hover:border-brand-600"
            >
              <Icon name="mail" className="h-[18px] w-[18px] text-brand-400" />
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
