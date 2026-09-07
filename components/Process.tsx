import SectionHeading from "./SectionHeading";
import { steps } from "@/lib/site";

export default function Process() {
  return (
    <section id="folyamat" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-10 h-[24rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-900/35 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Hogyan dolgozunk"
          title={
            <>
              Az első hívástól a{" "}
              <span className="text-brand-400">bekapcsolásig</span>
            </>
          }
          lead="Öt lépés, kiszámítható tempóban. Nincs meglepetésszámla és nincs „majd valamikor jövünk”."
          align="center"
        />

        <ol className="relative mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* összekötő vonal nagy képernyőn */}
          <div className="pointer-events-none absolute inset-x-0 top-7 hidden lg:block">
            <svg viewBox="0 0 1000 4" className="h-1 w-full" preserveAspectRatio="none" aria-hidden="true">
              <line x1="0" y1="2" x2="1000" y2="2" stroke="#1e2723" strokeWidth="2" />
              <line
                x1="0"
                y1="2"
                x2="1000"
                y2="2"
                stroke="#2fbf4a"
                strokeWidth="2"
                strokeDasharray="12 180"
                className="flow-line"
              />
            </svg>
          </div>

          {steps.map((s, i) => (
            <li
              key={s.n}
              className="rv relative"
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-ink-500 bg-ink-900 font-display text-base font-extrabold text-brand-400 shadow-[0_10px_30px_-14px_rgba(47,191,74,0.5)]">
                {s.n}
                <span className="absolute -inset-1 -z-10 rounded-2xl bg-brand-500/10 blur-md" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-mist-500">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
