import { Icon } from "./Icons";

const items = [
  "Hálózatfelújítás",
  "Elosztószekrény",
  "Fi-relé beépítés",
  "Hibakeresés",
  "Zárlat elhárítás",
  "Új áramkörök",
  "Wallbox telepítés",
  "Kültéri világítás",
  "Földkábelezés",
  "Klímakör",
  "Lámpa- és szerelvénycsere",
  "Új ház villamosítása",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-ink-700 bg-ink-900/60 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-ink-950 to-transparent" />
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <ul key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
            {items.map((it) => (
              <li key={it} className="flex items-center gap-5 whitespace-nowrap px-5">
                <span className="font-display text-sm font-medium uppercase tracking-[0.16em] text-mist-500">
                  {it}
                </span>
                <Icon name="bolt" className="h-3 w-3 text-brand-600" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
