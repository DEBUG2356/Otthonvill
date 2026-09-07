import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { faq, site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const description =
  "Villanyszerelés Kecskeméten és 60 km-es körzetében. Teljes hálózatfelújítás, elosztószekrény csere, hibakeresés, új áramkörök és elektromosautó-töltő telepítés. Garanciával, számlaképesen.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – Villanyszerelés Kecskemét | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "villanyszerelő Kecskemét",
    "villanyszerelés",
    "elosztószekrény csere",
    "hálózatfelújítás",
    "hibakeresés",
    "wallbox telepítés",
    "elektromos autó töltő",
    "Lajosmizse",
    "Nagykőrös",
    "Szolnok",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: site.url,
    siteName: site.name,
    title: `${site.name} – Villanyszerelés Kecskemét`,
    description,
    images: [{ url: "/images/logo.jpg", width: 897, height: 896, alt: site.name }],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#050706",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: site.name,
  description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/images/logo.jpg`,
  slogan: site.tagline,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.zip,
    addressCountry: "HU",
  },
  areaServed: [
    "Kecskemét",
    "Lajosmizse",
    "Nagykőrös",
    "Kerekegyháza",
    "Helvécia",
    "Kiskunfélegyháza",
    "Szolnok",
  ].map((n) => ({ "@type": "City", name: n })),
  sameAs: [site.facebook],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        {children}
      </body>
    </html>
  );
}
