import SectionHeading from "./SectionHeading";
import { Icon } from "./Icons";
import { guarantees, site } from "@/lib/site";

export default function Guarantees() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Amit garantálunk"
              title={
                <>
                  Nem ígéret.{" "}
                  <span className="text-brand-400">Munkamódszer.</span>
                </>
              }
              lead="Egy villanyszerelőnél nem a szórólap dönt, hanem az, hogy mi marad a fal mögött. Ezek azok a pontok, amikre bármikor visszahivatkozhat."
            />

            <div className="rv mt-8 edge relative overflow-hidden rounded-3xl bg-ink-900/70 p-7">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-600/20 blur-2xl" />
              <p className="relative font-display text-xl font-bold leading-snug text-mist-100">
                „Szerintem épp időben érkeztünk.”
              </p>
              <p className="relative mt-3 text-[14.5px] leading-relaxed text-mist-500">
                Kiégett alumíniumvezetékek és furcsa hangok a régi elosztószekrényben jelezték,
                hogy baj van. Ha ismerősek a jelek, ne várjon vele.
              </p>
              <a
                href={site.phoneHref}
                className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 transition-colors hover:text-brand-200"
              >
                <Icon name="phone" className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {guarantees.map((g, i) => (
              <li
                key={g.title}
                className="rv edge spot group relative overflow-hidden rounded-2xl bg-ink-900/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-ink-850"
                style={{ transitionDelay: `${(i % 2) * 90}ms` }}
              >
                <span className="relative z-2 flex h-11 w-11 items-center justify-center rounded-xl bg-ink-800 text-brand-400 transition-all duration-500 group-hover:bg-brand-500 group-hover:text-ink-950">
                  <Icon name={g.icon} className="h-5 w-5" />
                </span>
                <h3 className="relative z-2 mt-4 font-display text-[16.5px] font-bold leading-snug">
                  {g.title}
                </h3>
                <p className="relative z-2 mt-2 text-[13.5px] leading-relaxed text-mist-500">
                  {g.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
