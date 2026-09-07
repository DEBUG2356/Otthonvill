import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { Icon } from "./Icons";
import { site } from "@/lib/site";

const values = ["Gyorsaság", "Precizitás", "Biztonság"];

export default function About() {
  return (
    <section id="rolunk" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-40 top-20 h-[30rem] w-[30rem] rounded-full bg-brand-900/40 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* képek */}
          <div className="rv relative order-2 mx-auto w-full max-w-lg lg:order-1">
            <div className="relative aspect-4/5 sm:aspect-3/4">
              {/* hátsó: plakát */}
              <div className="edge absolute right-0 top-0 h-[78%] w-[62%] overflow-hidden rounded-2xl bg-ink-850 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] transition-transform duration-700 hover:-translate-y-2">
                <Image
                  src="/images/poster-01.jpg"
                  alt="BB OtthonVill szolgáltatásait bemutató szórólap"
                  width={1414}
                  height={2000}
                  sizes="(max-width: 1024px) 40vw, 300px"
                  className="h-full w-full object-cover object-top opacity-70 transition-opacity duration-700 hover:opacity-95"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink-950/85 via-ink-950/20 to-ink-950/25" />
              </div>

              {/* első: logó */}
              <div className="edge absolute bottom-0 left-0 h-[62%] w-[72%] overflow-hidden rounded-3xl bg-ink-850 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.95)]">
                <Image
                  src="/images/logo.jpg"
                  alt="BB OtthonVill logó"
                  width={897}
                  height={896}
                  sizes="(max-width: 1024px) 60vw, 380px"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* név-chip */}
              <div className="edge absolute -bottom-5 right-2 rounded-2xl bg-ink-900/95 px-5 py-3.5 backdrop-blur sm:right-6">
                <p className="text-[10.5px] uppercase tracking-[0.22em] text-brand-400">
                  A két B
                </p>
                <p className="mt-1 font-display text-[15px] font-bold text-mist-100">
                  {site.owners[0]} <span className="text-mist-600">és</span> {site.owners[1]}
                </p>
              </div>
            </div>
          </div>

          {/* szöveg */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Rólunk"
              title={
                <>
                  Két villanyszerelő,{" "}
                  <span className="text-brand-400">egy mérce</span>
                </>
              }
              lead="A BB OtthonVill mögött ketten állunk: Balogh Ádám és Bernáth Kornél. Innen a két B – és innen az is, hogy a helyszínen mindig azzal beszél, aki a munkát végzi."
            />

            <div className="rv mt-8 space-y-4 text-[15.5px] leading-relaxed text-mist-500">
              <p>
                Kecskeméti székhelyről dolgozunk, lakossági villanyszerelést és új épületek
                teljes villamosítását vállaljuk. Nálunk{" "}
                <span className="text-mist-100">nincs túl kicsi munka</span>: egy konnektorcserét
                ugyanúgy elvállalunk, mint egy teljes hálózatfelújítást – és mindkettőnél
                ugyanaz a sorrend: előbb a biztonság, aztán a látvány.
              </p>
              <p>
                Amit a fal mögé építünk, azt évtizedekig nem látja senki. Pont ezért nem
                spórolunk sem az anyagon, sem a méretezésen, sem az időn.
              </p>
            </div>

            <div className="rv mt-9 grid grid-cols-3 gap-3" style={{ transitionDelay: "160ms" }}>
              {values.map((v, i) => (
                <div
                  key={v}
                  className="edge spot group relative overflow-hidden rounded-2xl bg-ink-900/70 p-4 text-center transition-transform duration-500 hover:-translate-y-1"
                >
                  <span className="relative z-2 mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-ink-800 text-brand-400 transition-colors duration-500 group-hover:bg-brand-500 group-hover:text-ink-950">
                    <Icon name={["spark", "search", "shield"][i]} className="h-4.5 w-4.5" />
                  </span>
                  <p className="relative z-2 mt-3 font-display text-[13.5px] font-bold text-mist-100">
                    {v}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer noopener"
              className="rv mt-8 inline-flex items-center gap-2.5 rounded-full border border-ink-500 px-5 py-3 text-sm font-medium text-mist-300 transition-colors hover:border-brand-600 hover:text-mist-100"
              style={{ transitionDelay: "240ms" }}
            >
              <Icon name="facebook" className="h-4.5 w-4.5 text-brand-400" />
              Kövessen minket a Facebookon
              <Icon name="arrow" className="h-4 w-4 text-brand-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
