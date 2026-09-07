import SectionHeading from "./SectionHeading";
import { Icon } from "./Icons";
import { services, site } from "@/lib/site";

export default function Services() {
  return (
    <section id="szolgaltatasok" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-linear-to-r from-transparent via-ink-500 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-40 h-[26rem] w-[26rem] rounded-full bg-brand-900/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Szolgáltatások"
            title={
              <>
                Amiben otthon vagyunk –{" "}
                <span className="text-brand-400">szó szerint</span>
              </>
            }
            lead="Lakossági villanyszerelést és új épületek teljes villamosítását vállaljuk. Nincs túl kicsi munka: minden feladatnál a biztonság és a precizitás az első."
          />
          <a
            href="#kapcsolat"
            className="rv group inline-flex w-fit items-center gap-2 rounded-full border border-ink-500 px-5 py-3 text-sm font-medium text-mist-300 transition-colors hover:border-brand-600 hover:text-mist-100"
          >
            Nem találja, amit keres? Kérdezzen
            <Icon
              name="arrow"
              className="h-4 w-4 text-brand-400 transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.id}
              className="rv edge spot group relative flex flex-col overflow-hidden rounded-3xl bg-ink-900/80 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:bg-ink-850"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <div className="relative z-2 flex h-13 w-13 items-center justify-center rounded-2xl border border-brand-700/50 bg-brand-900/40 text-brand-400 transition-all duration-500 group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-ink-950">
                <Icon name={s.icon} className="h-6 w-6" />
              </div>

              <h3 className="relative z-2 mt-6 font-display text-xl font-bold leading-snug">
                {s.title}
              </h3>
              <p className="relative z-2 mt-2 text-[14px] font-medium text-brand-400/90">
                {s.short}
              </p>
              <p className="relative z-2 mt-3.5 text-[14.5px] leading-relaxed text-mist-500">
                {s.body}
              </p>

              <ul className="relative z-2 mt-5 space-y-2 border-t border-ink-600 pt-5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[13.5px] text-mist-300">
                    <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-brand-900/80 text-brand-400">
                      <Icon name="check" className="h-2.5 w-2.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <span className="pointer-events-none absolute -right-8 -top-8 font-display text-[7rem] font-black leading-none text-mist-100/[0.025] transition-all duration-500 group-hover:text-brand-400/[0.06]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>

        <p className="rv mt-10 text-center text-sm text-mist-600">
          Nem szerepel a listán a feladata? Hívjon a{" "}
          <a href={site.phoneHref} className="font-medium text-brand-400 hover:underline">
            {site.phone}
          </a>{" "}
          számon – megmondjuk, meg tudjuk-e oldani.
        </p>
      </div>
    </section>
  );
}
