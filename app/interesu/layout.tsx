import type { Metadata } from "next";

export const metadata: Metadata = {
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
    url: "https://eduo.lv/interesu",
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
    canonical: "https://eduo.lv/interesu",
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
  name: "EDUO Interešu izglītība",
  description:
    "Licencēta interešu izglītības organizācija. Angļu valodas nodarbības bērniem no 3 gadiem līdz 2. klasei tieši bērnudārzos un skolās.",
  url: "https://eduo.lv/interesu",
  logo: "https://eduo.lv/assets/EDUO_LOGO_pllats_zils.png",
  email: "interesu@eduo.me",
  address: {
    "@type": "PostalAddress",
    addressCountry: "LV",
  },
  areaServed: {
    "@type": "Country",
    name: "Latvia",
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: "Children aged 3–8",
  },
};

export default function InteresuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
