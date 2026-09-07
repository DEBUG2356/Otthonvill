export const site = {
  name: "BB OtthonVill",
  legalName: "BB OtthonVill",
  tagline: "A biztonságos otthonért",
  motto: "Gyorsaság. Precizitás. Biztonság.",
  category: "Villanyszerelés",
  phone: "+36 30 556 3142",
  phoneHref: "tel:+36305563142",
  email: "bb.otthonvill@gmail.com",
  emailHref: "mailto:bb.otthonvill@gmail.com",
  address: {
    street: "Újvilág utca",
    city: "Kecskemét",
    zip: "6000",
    country: "Magyarország",
  },
  facebook: "https://www.facebook.com/profile.php?id=61552261951332",
  owners: ["Balogh Ádám", "Bernáth Kornél"],
  surveyFee: "15 000 Ft",
  url: "https://bbotthonvill.hu",
} as const;

export type Service = {
  id: string;
  title: string;
  short: string;
  body: string;
  icon: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "halozatfelujitas",
    title: "Teljes hálózatfelújítás",
    short: "Régi, elavult vezetékek cseréje a mai szabványra.",
    body: "Az alumíniumvezeték, a kopott szigetelés és a túlterhelt régi hálózat a lakástüzek leggyakoribb okai. A teljes felújítás során új nyomvonalat, új vezetékeket és korszerű védelmet kap az ingatlan.",
    icon: "network",
    points: [
      "Alumíniumvezeték kiváltása rézre",
      "Új nyomvonal, süllyesztett vagy falon kívüli",
      "Szakaszos ütemezés lakott ingatlanban is",
    ],
  },
  {
    id: "elosztoszekreny",
    title: "Elosztószekrény csere, bővítés",
    short: "Kismegszakítók, Fi-relé, túlfeszültség-védelem.",
    body: "A régi olvadóbiztosítós tábla nem véd sem áramütés, sem tűz ellen. Új szekrénybe rendezett áramkörök, Fi-relé és jelölt sorkapcsok kerülnek – átlátható, bővíthető, ellenőrizhető.",
    icon: "panel",
    points: [
      "Fi-relé (áram-védőkapcsoló) beépítés",
      "Áramkörök szétválasztása, feliratozás",
      "Almérő és melléképületi szekrények",
    ],
  },
  {
    id: "hibakereses",
    title: "Hibakeresés, zárlat elhárítás",
    short: "Leold a biztosíték? Megkeressük az okát.",
    body: "Nem tippelünk: műszeres méréssel szűkítjük a hibát, majd tartós megoldást építünk be – nem ideiglenes toldást. A furcsa szag, a meleg konnektor és a percegő hang mind figyelmeztető jel.",
    icon: "search",
    points: [
      "Műszeres bemérés, szigetelésvizsgálat",
      "Leoldó Fi-relé okának feltárása",
      "Melegedő kötések, konnektorok javítása",
    ],
  },
  {
    id: "aramkorok",
    title: "Új áramkörök kiépítése",
    short: "Dedikált kör a nagy fogyasztóknak.",
    body: "Klíma, indukciós főzőlap, bojler, medence, műhelygép vagy elektromos autó – mindegyik saját, megfelelően méretezett és védett áramkört kíván. Ezt építjük ki a meglévő hálózat tehermentesítésével.",
    icon: "circuit",
    points: [
      "Klíma-, bojler- és főzőlapkör",
      "Kültéri és garázs áramkörök",
      "Földkábeles kiállás melléképülethez",
    ],
  },
  {
    id: "szerelvenyek",
    title: "Konnektorok, kapcsolók, lámpák",
    short: "Csere, bővítés, okos szerelvények.",
    body: "A legkisebb munkát is ugyanolyan gondosan végezzük: kötésdobozos, szabványos bekötés, tiszta falfelület, működés-ellenőrzés átadás előtt. Nincs túl kicsi feladat.",
    icon: "socket",
    points: [
      "Szerelvények cseréje, bővítés",
      "Csillár, spot, LED-szalag felszerelése",
      "Mozgásérzékelő és kültéri világítás",
    ],
  },
  {
    id: "kivitelezes",
    title: "Lakás- és családi ház kivitelezés",
    short: "Új épület teljes villamos kivitelezése.",
    body: "Az első nyomvonaltól a mérőhely kialakításán át a bekapcsolásig. Egyeztetünk az építésszel és a többi szakággal, hogy a határidő és a nyomvonal is stimmeljen.",
    icon: "house",
    points: [
      "Nyomvonal-kialakítás, csövezés, húzás",
      "Mérőhely és főelosztó kiépítése",
      "Átadás dokumentálva, számlával",
    ],
  },
];

export const guarantees = [
  {
    title: "Szakszerű, igényes munkavégzés",
    text: "Szabvány szerinti kötések, méretezett vezetékek, rendezett szekrény – nem gyorsmegoldás.",
    icon: "shield",
  },
  {
    title: "Pontos érkezés, korrekt kommunikáció",
    text: "Amit megbeszélünk, az úgy is lesz. Ha csúszunk, azt előre jelezzük.",
    icon: "clock",
  },
  {
    title: "Számlaképes munkavégzés",
    text: "Minden elvégzett munkáról hivatalos számlát adunk.",
    icon: "receipt",
  },
  {
    title: "Garanciavállalás",
    text: "Az elvégzett munkára garanciát vállalunk – írásban, utólag is elérhetők vagyunk.",
    icon: "badge",
  },
  {
    title: "Rendezett, tiszta munkaterület",
    text: "Letakarunk, összesöprünk. Úgy hagyjuk ott, ahogy mi is szeretnénk megtalálni.",
    icon: "broom",
  },
  {
    title: "Nincs túl kicsi munka",
    text: "Egy konnektorcserét ugyanúgy elvállalunk, mint egy teljes házfelújítást.",
    icon: "spark",
  },
];

export const steps = [
  {
    n: "01",
    title: "Kapcsolatfelvétel",
    text: "Hívjon vagy írjon – elmondja, mi a feladat, mi pedig megmondjuk, kell-e hozzá helyszíni felmérés.",
  },
  {
    n: "02",
    title: "Helyszíni felmérés",
    text: "Megnézzük a meglévő hálózatot, felmérjük a nyomvonalat és egyeztetjük az igényeket.",
  },
  {
    n: "03",
    title: "Árajánlat",
    text: "Tételes, érthető ajánlatot adunk. Megrendelés esetén a felmérés díját levonjuk a végösszegből.",
  },
  {
    n: "04",
    title: "Kivitelezés",
    text: "Egyeztetett időpontban érkezünk, letakart, rendezett munkaterületen dolgozunk.",
  },
  {
    n: "05",
    title: "Átadás és garancia",
    text: "Végigmérünk, bemutatjuk a beépített védelmeket, számlát adunk és garanciát vállalunk.",
  },
];

export const gallery: {
  src: string;
  alt: string;
  title: string;
  text: string;
  tag: string;
  span: string;
}[] = [
  {
    span: "lg:col-span-2 lg:row-span-2",
    src: "/images/work-06.jpg",
    alt: "Új elosztószekrény Noark kismegszakítókkal és Fi-relével",
    title: "Új elosztószekrény",
    text: "Kismegszakítók és 25 A-es Fi-relé rendezett bekötése, jelölt sorkapcsokkal.",
    tag: "Elosztószekrény",
  },
  {
    span: "",
    src: "/images/wallbox-01.jpg",
    alt: "Falra szerelt Wallbox elektromosautó-töltő",
    title: "Wallbox okostöltő",
    text: "Fali elektromosautó-töltő üzembe helyezése, saját védett áramkörről.",
    tag: "E-mobilitás",
  },
  {
    span: "",
    src: "/images/work-05.jpg",
    alt: "Kültéri elosztódoboz szakszerű kábelbevezetéssel",
    title: "Kültéri kötésdoboz",
    text: "IP-védett doboz, tömszelencés bevezetés, sorkapcsos leágazások.",
    tag: "Kültér",
  },
  {
    span: "",
    src: "/images/work-03.jpg",
    alt: "Melléképület villamosítása, falra szerelt szekrénnyel",
    title: "Melléképület árama",
    text: "Kerti tároló önálló, védett áramkörről – szekrénnyel és kapcsolással.",
    tag: "Melléképület",
  },
  {
    span: "",
    src: "/images/work-02.jpg",
    alt: "Védőcsöves kábelbevezetés a ház falán",
    title: "Kábelbevezetés",
    text: "Védőcsőben vezetett kábelek, előkészített fali kiállásokkal.",
    tag: "Földkábel",
  },
  {
    span: "lg:col-span-2",
    src: "/images/work-01.jpg",
    alt: "Földkábel fektetése árokban az épület mellett",
    title: "Földkábel fektetés",
    text: "Homokágyas, szabványos mélységű nyomvonal az épület mellett.",
    tag: "Földkábel",
  },
  {
    span: "lg:col-span-2",
    src: "/images/work-04.jpg",
    alt: "Földkábel nyomvonala a telekhatár mentén",
    title: "Nyomvonal a telken",
    text: "Hosszú kültéri szakasz kiépítése a kerítés mentén, jelzőszalaggal.",
    tag: "Földkábel",
  },
];

export const areas = [
  "Kecskemét",
  "Lajosmizse",
  "Nagykőrös",
  "Kerekegyháza",
  "Helvécia",
  "Kiskunfélegyháza",
  "Szolnok",
  "Bács-Kiskun megye",
  "Jász-Nagykun-Szolnok megye",
];

export const nav = [
  { href: "#szolgaltatasok", label: "Szolgáltatások" },
  { href: "#etoltok", label: "E-autó töltő" },
  { href: "#munkaink", label: "Munkáink" },
  { href: "#folyamat", label: "Hogyan dolgozunk" },
  { href: "#rolunk", label: "Rólunk" },
  { href: "#kapcsolat", label: "Kapcsolat" },
];

export const footerNav = [
  ...nav.slice(0, 5),
  { href: "#gyik", label: "Gyakori kérdések" },
  { href: "#kapcsolat", label: "Kapcsolat" },
];

export const faq = [
  {
    q: "Mennyibe kerül a helyszíni felmérés?",
    a: `A helyszíni felmérés díja ${site.surveyFee}. Ha nálunk rendeli meg a munkát, ezt a teljes összeget levonjuk a végösszegből – így a felmérés gyakorlatilag díjmentes.`,
  },
  {
    q: "Hova mennek ki dolgozni?",
    a: "Kecskeméten és 60 km-es körzetében vállalunk munkát. Rendszeresen dolgozunk Szolnokon, Lajosmizsén, Nagykőrösön, Kerekegyházán, Helvécián és Kiskunfélegyházán is. Ha bizonytalan, hogy a címe belefér-e, kérdezzen rá nyugodtan.",
  },
  {
    q: "Kap számlát és garanciát a munkára?",
    a: "Igen, mindkettőt. Számlaképesen dolgozunk, minden elvégzett munkáról hivatalos számlát adunk, és garanciát vállalunk az elvégzett munkára.",
  },
  {
    q: "Elvállalnak kisebb munkákat is?",
    a: "Nincs túl kicsi munka. Egy konnektor- vagy lámpacserét ugyanolyan gondosan végzünk el, mint egy teljes hálózatfelújítást – minden feladatnál a biztonság és a precizitás az első.",
  },
  {
    q: "Honnan tudom, hogy ideje felújítani a hálózatot?",
    a: "A jellegzetes figyelmeztető jelek: alumíniumvezeték a falban, gyakran leoldó biztosíték, melegedő konnektor vagy kapcsoló, percegő hang és égett szag a régi elosztószekrény környékén. Ha ezek közül bármelyiket tapasztalja, ne várjon vele.",
  },
  {
    q: "Telepítenek elektromosautó-töltőt?",
    a: "Igen. Fali okostöltőt (Wallbox) helyezünk üzembe saját, megfelelően méretezett és védett áramkörről. Három fázison 11–22 kW-tal tölt, beépített DC szivárgóáram-védelemmel, szabványos Type 2 csatlakozóval.",
  },
];
