import Image from "next/image";
import CircuitBg from "./CircuitBg";
import { Icon } from "./Icons";
import { site } from "@/lib/site";

const trust = [
  "Garanciával",
  "Számlaképesen",
  "Pontos érkezés",
  "Tiszta munkaterület",
];

export default function Hero() {
  return (
    <section id="top" className="noise relative overflow-hidden pt-[72px]">
      {/* háttérrétegek */}
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-70" />
      <CircuitBg className="opacity-[0.55]" />
      <div className="pointer-events-none absolute -left-40 top-[-10rem] h-[38rem] w-[38rem] rounded-full bg-brand-700/25 blur-[130px]" />
      <div className="pointer-events-none absolute -right-52 top-24 h-[34rem] w-[34rem] rounded-full bg-volt-500/12 blur-[140px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-linear-to-b from-transparent to-ink-950" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-32 lg:pt-24">
        {/* szöveg */}
        <div>
          <div className="rv inline-flex items-center gap-2.5 rounded-full border border-brand-700/60 bg-brand-900/30 py-1.5 pl-1.5 pr-4 backdrop-blur">
            <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-ink-950">
              <span className="absolute inset-0 rounded-full bg-brand-500 animate-pulse-ring" />
              <Icon name="bolt" className="relative h-3.5 w-3.5" />
            </span>
            <span className="text-[12.5px] font-medium tracking-wide text-brand-200">
              Kecskemét és 60 km-es körzete
            </span>
          </div>

          <h1
            className="rv mt-6 font-display text-[2.6rem] font-extrabold leading-[1.03] sm:text-6xl lg:text-[4.15rem]"
            style={{ transitionDelay: "80ms" }}
          >
            Villanyszerelés,
            <br />
            ami után
            <span className="relative ml-3 inline-block">
              <span className="bg-linear-to-br from-brand-200 via-brand-400 to-volt-400 bg-clip-text text-transparent">
                nyugodtan
              </span>
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full text-brand-500/70"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 8.5c40-5 78-6.5 116-5.5S180 6 198 4"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            alszik éjjel.
          </h1>

          <p
            className="rv mt-7 max-w-xl text-[16.5px] leading-relaxed text-mist-300"
            style={{ transitionDelay: "160ms" }}
          >
            A <strong className="font-semibold text-mist-100">{site.name}</strong> lakossági
            villanyszerelést és új épületek teljes villamosítását vállalja. Elavult hálózat,
            leoldó biztosíték, melegedő konnektor, vagy egy vadonatúj ház első áramköre –
            mindegyikhez ugyanaz a mérce:{" "}
            <span className="text-brand-400">a biztonság és a precizitás.</span>
          </p>

          <div
            className="rv mt-9 flex flex-wrap items-center gap-3.5"
            style={{ transitionDelay: "240ms" }}
          >
            <a
              href={site.phoneHref}
              className="sheen group inline-flex items-center gap-2.5 rounded-full bg-brand-500 px-7 py-4 font-semibold text-ink-950 shadow-[0_14px_44px_-14px_var(--color-brand-500)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-[0_20px_54px_-14px_var(--color-brand-400)]"
            >
              <span className="sheen-bar" />
              <Icon name="phone" className="h-[18px] w-[18px]" />
              {site.phone}
            </a>
            <a
              href="#kapcsolat"
              className="group inline-flex items-center gap-2.5 rounded-full border border-ink-500 bg-ink-850/60 px-7 py-4 font-medium text-mist-100 backdrop-blur transition-all duration-300 hover:border-brand-600 hover:bg-ink-800"
            >
              Ajánlatot kérek
              <Icon
                name="arrow"
                className="h-4 w-4 text-brand-400 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          <ul
            className="rv mt-9 flex flex-wrap gap-x-6 gap-y-3"
            style={{ transitionDelay: "320ms" }}
          >
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-[13.5px] text-mist-500">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-900/70 text-brand-400">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* vizuál */}
        <div className="rv relative mx-auto w-full max-w-[520px]" style={{ transitionDelay: "180ms" }}>
          <div className="relative animate-float-slow">
            <div className="absolute -inset-6 rounded-[2.6rem] bg-linear-to-br from-brand-500/25 via-transparent to-volt-500/20 blur-2xl" />

            <div className="edge spot relative overflow-hidden rounded-[2rem] bg-ink-850 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.9)]">
              <Image
                src="/images/logo.jpg"
                alt="BB OtthonVill logó – villanyszerelés, a biztonságos otthonért"
                width={897}
                height={896}
                priority
                sizes="(max-width: 1024px) 90vw, 520px"
                className="h-auto w-full"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink-950/75 via-transparent to-transparent" />
            </div>

            {/* lebegő fotókártya */}
            <div className="edge absolute -bottom-10 -left-1 w-40 overflow-hidden rounded-2xl bg-ink-850 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.95)] sm:-left-10 sm:w-52">
              <Image
                src="/images/work-06.jpg"
                alt="Új elosztószekrény kismegszakítókkal és Fi-relével"
                width={640}
                height={480}
                sizes="220px"
                className="h-28 w-full object-cover sm:h-32"
              />
              <div className="px-3.5 py-2.5">
                <p className="text-[11px] uppercase tracking-widest text-brand-400">Legutóbb</p>
                <p className="text-[12.5px] font-medium text-mist-100">
                  Elosztószekrény + Fi-relé
                </p>
              </div>
            </div>

            {/* lebegő ár-chip */}
            <div className="edge absolute -right-3 top-8 hidden rounded-2xl bg-ink-850/95 px-4 py-3 backdrop-blur sm:block lg:-right-8">
              <p className="font-display text-lg font-bold text-mist-100">{site.surveyFee}</p>
              <p className="text-[11px] leading-tight text-mist-500">
                helyszíni felmérés
                <br />
                <span className="text-brand-400">megrendelésnél jóváírjuk</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
