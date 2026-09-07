const stats = [
  {
    value: 60,
    suffix: " km",
    label: "Körzet Kecskeméttől",
    note: "Szolnok, Lajosmizse, Nagykőrös, Kiskunfélegyháza",
  },
  {
    value: 2,
    suffix: "",
    label: "Szakember, egy csapat",
    note: "Balogh Ádám és Bernáth Kornél",
  },
  {
    value: 15000,
    suffix: " Ft",
    label: "Helyszíni felmérés",
    note: "Megrendelés esetén levonjuk a végösszegből",
  },
  {
    value: 100,
    suffix: "%",
    label: "Számlaképes munka",
    note: "Garanciavállalással, dokumentáltan",
  },
];

export default function Stats() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="edge grid overflow-hidden rounded-3xl bg-ink-900/70 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="rv spot relative border-b border-ink-700 p-7 last:border-b-0 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:odd:border-r"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <p className="relative z-2 font-display text-4xl font-extrabold tracking-tight text-mist-100 sm:text-[2.75rem]">
                <span data-counter={s.value} data-suffix={s.suffix}>
                  0{s.suffix}
                </span>
              </p>
              <p className="relative z-2 mt-2 text-sm font-semibold text-brand-400">{s.label}</p>
              <p className="relative z-2 mt-1.5 text-[13px] leading-snug text-mist-600">
                {s.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
