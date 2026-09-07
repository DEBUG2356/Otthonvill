"use client";

import { useMemo, useState } from "react";
import SectionHeading from "./SectionHeading";
import { Icon } from "./Icons";
import { services, site } from "@/lib/site";

const topics = [
  "Hibakeresés / sürgős",
  ...services.map((s) => s.title),
  "Egyéb",
];

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");
  const [topic, setTopic] = useState(topics[0]);
  const [message, setMessage] = useState("");

  const mailto = useMemo(() => {
    const subject = `Ajánlatkérés – ${topic}`;
    const body = [
      `Név: ${name || "-"}`,
      `Telefon: ${phone || "-"}`,
      `Munkavégzés helye: ${place || "-"}`,
      `Téma: ${topic}`,
      "",
      "Leírás:",
      message || "-",
    ].join("\n");
    return `${site.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }, [name, phone, place, topic, message]);

  const field =
    "w-full rounded-xl border border-ink-600 bg-ink-950/60 px-4 py-3 text-[14.5px] text-mist-100 outline-none transition-colors duration-300 placeholder:text-mist-600 focus:border-brand-600 focus:bg-ink-900";

  return (
    <section id="kapcsolat" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-ink-500 to-transparent" />
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[28rem] w-[28rem] rounded-full bg-brand-900/45 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Kapcsolat"
          title={
            <>
              Mondja el, mi a feladat –{" "}
              <span className="text-brand-400">mi megmondjuk, mi a megoldás</span>
            </>
          }
          lead="Telefonon reagálunk a leggyorsabban. Ha inkább írna, töltse ki az űrlapot: a gomb megnyitja a levelezőjét a már kitöltött üzenettel."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* elérhetőségek */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: "phone",
                label: "Telefon",
                value: site.phone,
                href: site.phoneHref,
                note: "Hívjon bizalommal – ha nem vesszük fel, visszahívjuk.",
                primary: true,
              },
              {
                icon: "mail",
                label: "E-mail",
                value: site.email,
                href: site.emailHref,
                note: "Fotókkal együtt küldve gyorsabb az ajánlat.",
              },
              {
                icon: "facebook",
                label: "Facebook",
                value: "BB OtthonVill",
                href: site.facebook,
                note: "Friss munkák, videók és elérhetőségek.",
              },
              {
                icon: "pin",
                label: "Székhely",
                value: `${site.address.zip} ${site.address.city}, ${site.address.street}`,
                note: "Kiszállás Kecskemét 60 km-es körzetében.",
              },
            ].map((c, i) => {
              const Inner = (
                <>
                  <span
                    className={`relative z-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-400 ${
                      c.primary
                        ? "bg-brand-500 text-ink-950"
                        : "bg-ink-800 text-brand-400 group-hover:bg-brand-500 group-hover:text-ink-950"
                    }`}
                  >
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <span className="relative z-2 min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-mist-600">
                      {c.label}
                    </span>
                    <span className="mt-1 block break-words font-display text-[16.5px] font-bold text-mist-100">
                      {c.value}
                    </span>
                    <span className="mt-1 block text-[13px] leading-snug text-mist-500">
                      {c.note}
                    </span>
                  </span>
                </>
              );

              const cls =
                "rv edge spot group relative flex items-start gap-4 overflow-hidden rounded-2xl bg-ink-900/75 p-5 transition-all duration-400 hover:-translate-y-1 hover:bg-ink-850";

              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noreferrer noopener" : undefined}
                  className={cls}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {Inner}
                </a>
              ) : (
                <div key={c.label} className={cls} style={{ transitionDelay: `${i * 80}ms` }}>
                  {Inner}
                </div>
              );
            })}
          </div>

          {/* űrlap */}
          <form
            className="rv edge relative overflow-hidden rounded-3xl bg-ink-900/80 p-7 sm:p-9"
            style={{ transitionDelay: "120ms" }}
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto;
            }}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-600/12 blur-3xl" />

            <div className="relative z-2 grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-[12.5px] font-medium text-mist-500">Név</span>
                <input
                  className={field}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Kovács Anna"
                  autoComplete="name"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[12.5px] font-medium text-mist-500">Telefonszám</span>
                <input
                  className={field}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+36 30 123 4567"
                  inputMode="tel"
                  autoComplete="tel"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[12.5px] font-medium text-mist-500">
                  Munkavégzés helye
                </span>
                <input
                  className={field}
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  placeholder="Kecskemét"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[12.5px] font-medium text-mist-500">Miben segíthetünk?</span>
                <select
                  className={`${field} appearance-none`}
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                >
                  {topics.map((t) => (
                    <option key={t} value={t} className="bg-ink-900">
                      {t}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-[12.5px] font-medium text-mist-500">
                  Rövid leírás
                </span>
                <textarea
                  className={`${field} min-h-32 resize-y`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Pl. 1980-as építésű családi ház, gyakran leold a biztosíték, régi alumíniumvezetékek…"
                />
              </label>
            </div>

            <div className="relative z-2 mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[22rem] text-[12.5px] leading-snug text-mist-600">
                A gomb a levelezőprogramját nyitja meg a kitöltött üzenettel – így semmilyen
                adata nem tárolódik ezen az oldalon.
              </p>
              <button
                type="submit"
                className="sheen inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-4 text-sm font-semibold text-ink-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-[0_16px_40px_-14px_var(--color-brand-400)]"
              >
                <span className="sheen-bar" />
                Üzenet küldése
                <Icon name="arrow" className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
