import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { Icon } from "./Icons";
import { site } from "@/lib/site";

const facts = [
  {
    icon: "bolt",
    title: "Gyors",
    text: "3 fázison 11–22 kW, így akár 4–8 óra alatt tele az autó – a konnektoros idő töredéke.",
    badge: "11–22 kW",
  },
  {
    icon: "shield",
    title: "Biztonságos",
    text: "Beépített DC szivárgóáram-védelem, saját méretezett áramkör: kizárva a túlterhelés és a tűzveszély.",
    badge: "DC védelem",
  },
  {
    icon: "car",
    title: "Univerzális",
    text: "Szabványos Type 2 csatlakozó – szinte minden modern elektromos és plug-in hibrid autóhoz passzol.",
    badge: "Type 2",
  },
];

export default function Wallbox() {
  return (
    <section id="etoltok" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[30rem] w-[30rem] rounded-full bg-volt-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* kép */}
          <div className="rv relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute -inset-5 rounded-[2.4rem] bg-linear-to-b from-volt-500/20 to-brand-600/20 blur-2xl" />
            <div className="edge relative overflow-hidden rounded-[1.8rem] bg-ink-850">
              <Image
                src="/images/wallbox-01.jpg"
                alt="Falra szerelt Wallbox elektromosautó-töltő üzembe helyezve"
                width={928}
                height={2040}
                sizes="(max-width: 1024px) 80vw, 420px"
                className="h-[26rem] w-full object-cover object-center sm:h-[32rem]"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink-950/85 via-transparent to-ink-950/25" />
              <div className="absolute inset-x-5 bottom-5">
                <div className="flex items-center gap-2.5 rounded-2xl border border-ink-500/80 bg-ink-950/70 px-4 py-3 backdrop-blur-md">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 animate-pulse-ring" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-500" />
                  </span>
                  <p className="text-[13px] text-mist-300">
                    Üzembe helyezve · <span className="text-mist-100">Wallbox fali okostöltő</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* szöveg */}
          <div>
            <SectionHeading
              eyebrow="E-mobilitás"
              title={
                <>
                  Elektromos autó?{" "}
                  <span className="text-brand-400">A konnektor nem elég.</span>
                </>
              }
              lead="A hagyományos aljzatokat nem napi 8–10 órás, folyamatos, maximális terhelésre tervezték. Megfelelő védelem nélkül a hálózat túlmelegedhet, a szerelvény pedig megolvadhat. A fali okostöltő (Wallbox) ezt kiváltja."
            />

            <div className="mt-9 space-y-3.5">
              {facts.map((f, i) => (
                <div
                  key={f.title}
                  className="rv edge spot group flex items-start gap-4 rounded-2xl bg-ink-900/70 p-5 transition-colors duration-400 hover:bg-ink-850"
                  style={{ transitionDelay: `${100 + i * 90}ms` }}
                >
                  <span className="relative z-2 mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-700/50 bg-brand-900/40 text-brand-400 transition-colors duration-400 group-hover:bg-brand-500 group-hover:text-ink-950">
                    <Icon name={f.icon} className="h-5 w-5" />
                  </span>
                  <div className="relative z-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-display text-lg font-bold">{f.title}</h3>
                      <span className="rounded-full border border-volt-500/30 bg-volt-500/10 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-volt-400">
                        {f.badge}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-mist-500">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="rv mt-8 flex flex-col gap-4 rounded-2xl border border-brand-700/40 bg-brand-900/20 p-6 sm:flex-row sm:items-center sm:justify-between"
              style={{ transitionDelay: "380ms" }}
            >
              <p className="max-w-md text-[14.5px] text-mist-300">
                Ne bízza a biztonságát és az autója élettartamát félmegoldásokra – nézzük meg,
                mire képes a meglévő hálózata.
              </p>
              <a
                href={site.emailHref}
                className="sheen inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-brand-400"
              >
                <span className="sheen-bar" />
                Töltő-ajánlatot kérek
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
