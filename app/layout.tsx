import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eduo.lv"),
  title: "EDUO — Angļu valoda bērnudārzos Latvijā | Interešu izglītība",
  description:
    "Licencēta interešu izglītība bērniem no 3 gadiem līdz 4. klasei. Angļu valodas nodarbības tieši jūsu bērnudārzā vai skolā. 5+ gadi pieredzē, 1000+ bērni, 10+ partneriestādes.",
  keywords: [
    "angļu valoda bērnudārzā",
    "interešu izglītība",
    "bērnu angļu valoda",
    "valodas nodarbības bērniem",
    "EDUO",
    "bērnudārzs angļu",
    "pirmsskola angļu valoda",
  ],
  openGraph: {
    title: "EDUO — Angļu valoda bērnudārzos",
    description:
      "Mācām ar prieku, spēlēm un interesi! Nodarbības tieši jūsu bērnudārzā. 5+ gadi pieredzē.",
    url: "https://eduo.lv",
    siteName: "EDUO",
    locale: "lv_LV",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDUO — Angļu valoda bērnudārzos",
    description:
      "Mācām ar prieku, spēlēm un interesi! Nodarbības tieši jūsu bērnudārzā.",
  },
  alternates: {
    canonical: "https://eduo.lv",
  },
  verification: {
    google: "xKBSf_X-sPr6N267AE1GVpyyfGVGTq2KPNSaChTwkKI",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EDUO",
  description:
    "Licencēta interešu izglītības organizācija. Angļu valodas nodarbības bērniem no 3 gadiem līdz 2. klasei tieši bērnudārzos un skolās.",
  url: "https://eduo.lv",
  logo: "https://eduo.lv/assets/EDUO_LOGO_pllats_zils.png",
  email: "interesu@eduo.me",
  address: { "@type": "PostalAddress", addressCountry: "LV" },
  areaServed: { "@type": "Country", name: "Latvia" },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: "Children aged 3–8",
  },
  sameAs: ["https://www.eduo.lv"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lv" className={quicksand.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
