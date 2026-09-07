# BB OtthonVill – weboldal

Egyoldalas (one-page) bemutatkozó oldal a kecskeméti **BB OtthonVill** villanyszerelő
vállalkozásnak. A teljes tartalom és az összes kép a cég Facebook-oldaláról származik:
<https://www.facebook.com/profile.php?id=61552261951332>

## Technológia

- Next.js 16 (App Router, Turbopack) + React 19
- Tailwind CSS v4 (`app/globals.css`-ben definiált design tokenek)
- next/font: Outfit (címsorok) + Inter (szöveg), `latin-ext` subsettel
- Nincs külső animációs könyvtár – minden effekt CSS + IntersectionObserver

## Indítás

```bash
npm run dev
```

```bash
npm run build
```

## Szerkezet

| Fájl | Mit tartalmaz |
| --- | --- |
| `lib/site.ts` | **Minden szöveges tartalom**: elérhetőség, szolgáltatások, garanciák, folyamat, galéria-feliratok, szolgáltatási terület, GYIK |
| `app/layout.tsx` | metaadatok, Open Graph, `Electrician` + `FAQPage` JSON-LD |
| `app/page.tsx` | a szekciók sorrendje |
| `components/` | szekciónkénti komponensek + `Icons.tsx` (saját SVG ikonkészlet), `Logo.tsx` (SVG védjegy) |
| `components/ScrollFx.tsx` | görgetésre feltűnő elemek (`.rv`), számlálók, kártya-fényeffekt |
| `public/images/` | a Facebookról letöltött eredeti képek |

Tartalmat módosítani szinte mindig elég a `lib/site.ts`-ben.

## Adatforrás

A Facebook-oldalról kinyert tények:

- Cégnév: BB OtthonVill · szlogen: „A biztonságos otthonért” · mottó: „Gyorsaság. Precizitás. Biztonság.”
- Tulajdonosok: Balogh Ádám és Bernáth Kornél (innen a két „B”)
- Telefon: +36 30 556 3142 · e-mail: bb.otthonvill@gmail.com
- Székhely: 6000 Kecskemét, Újvilág utca
- Szolgáltatási terület: Kecskemét és 60 km-es körzete (Szolnok, Lajosmizse, Nagykőrös,
  Kerekegyháza, Helvécia, Kiskunfélegyháza)
- Szolgáltatások és a 15 000 Ft-os, megrendelésnél jóváírt helyszíni felmérés a cég
  szórólapjáról (`public/images/poster-01.jpg`)
- A Wallbox-szekció szövege a 2026. június 29-i Facebook-bejegyzésből

## Élesítés előtt

1. `lib/site.ts` → `url`: cseréld a végleges domainre (`https://bbotthonvill.hu` most csak
   helykitöltő). Ez adja a canonical URL-t, az OG-képet, a `robots.txt`-t és a `sitemap.xml`-t.
2. A kapcsolati űrlap **nem küld szervernek adatot**: a gomb a látogató levelezőjét nyitja meg
   előre kitöltött `mailto:` linkkel. Ha valódi űrlapküldés kell, a `components/Contact.tsx`
   `onSubmit`-jét kell egy API route-ra vagy külső szolgáltatásra (pl. Formspree, Resend)
   átkötni – és akkor adatkezelési tájékoztató is kell mellé.
3. Nyitvatartás: a Facebook-oldal kijelentkezve nem mutatja a pontos időpontokat, ezért az
   oldalon nincs feltüntetve. Ha van fix nyitvatartás, érdemes felvenni a JSON-LD-be
   (`openingHoursSpecification`) és a kapcsolat szekcióba.
