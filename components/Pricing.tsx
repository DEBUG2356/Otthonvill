import SectionHeading from "./SectionHeading";
import { Icon } from "./Icons";
import { areas, site } from "@/lib/site";

export default function Pricing() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-ink-500 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* felmérés */}
          <div className="rv edge spot relative overflow-hidden rounded-3xl bg-ink-900/80 p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-600/15 blur-3xl" />

            <div className="relative z-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-850/70 px-3.5 py-1.5">
                <Icon name="bolt" className="h-3 w-3 text-brand-500" />
                <span className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-mist-500">
                  Felmérés
                </span>
              </div>

              <div className="mt-7 flex flex-wrap items-end gap-x-4 gap-y-2">
                <span className="font-display text-5xl font-extrabold tracking-tight text-mist-100 sm:text-6xl">
                  {site.surveyFee}
                </span>
                <span className="pb-2 text-sm text-mist-500">/ helyszíni felmérés</span>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  "Megrendelés esetén a teljes összeg levonásra kerül a végösszegből.",
                  "Így a felmérés gyakorlatilag díjmentes.",
                  "Tételes, érthető árajánlatot adunk – nem hasraütésre.",
                ].map((t, i) => (
                  <p key={t} className="flex items-start gap-3 text-[15px] text-mist-300">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        i === 1
                          ? "bg-brand-500 text-ink-950"
                          : "bg-brand-900/80 text-brand-400"
                      }`}
                    >
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    {t}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.phoneHref}
                  className="sheen inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-400"
                >
                  <span className="sheen-bar" />
                  <Icon name="phone" className="h-4 w-4" />
                  Időpontot kérek
                </a>
                <a
                  href="#kapcsolat"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-500 px-6 py-3.5 text-sm font-medium text-mist-300 transition-colors hover:border-brand-600 hover:text-mist-100"
                >
                  Írok inkább
                  <Icon name="arrow" className="h-4 w-4 text-brand-400" />
                </a>
              </div>
            </div>
          </div>

          {/* terület */}
          <div className="rv edge relative overflow-hidden rounded-3xl bg-ink-900/80 p-8 sm:p-10" style={{ transitionDelay: "120ms" }}>
            <div className="pointer-events-none absolute inset-0 grid-fade opacity-45" />
            <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-volt-500/10 blur-3xl" />

            <div className="relative z-2">
              <SectionHeading
                eyebrow="Hol dolgozunk"
                title={
                  <>
                    Kecskemét és{" "}
                    <span className="text-brand-400">60 km-es körzete</span>
                  </>
                }
              />
              <p className="rv mt-4 text-[15px] leading-relaxed text-mist-500">
                Rendszeresen elérhetők vagyunk a környező városokban is. Ha bizonytalan,
                hogy a címe belefér-e, kérdezzen rá – megmondjuk őszintén.
              </p>

              <ul className="mt-7 flex flex-wrap gap-2">
                {areas.map((a, i) => (
                  <li
                    key={a}
                    className="rv group flex items-center gap-1.5 rounded-full border border-ink-600 bg-ink-850/70 px-3.5 py-2 text-[13px] text-mist-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-600 hover:text-mist-100"
                    style={{ transitionDelay: `${100 + i * 45}ms` }}
                  >
                    <Icon
                      name="pin"
                      className="h-3.5 w-3.5 text-mist-600 transition-colors group-hover:text-brand-400"
                    />
                    {a}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-ink-600 bg-ink-850/60 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-800 text-brand-400">
                  <Icon name="pin" className="h-5 w-5" />
                </span>
                <p className="text-[13.5px] leading-snug text-mist-500">
                  Székhely:{" "}
                  <span className="text-mist-100">
                    {site.address.zip} {site.address.city}, {site.address.street}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
