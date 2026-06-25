import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Eduo — Interešu izglītība bērnudārzos | Angļu valoda, STEAM",
  description:
    "Mācām ar prieku, spēlēm un interesi! Angļu valodas un STEAM nodarbības tieši jūsu bērnudārzā. Pieteikties →",
  openGraph: {
    title: "Eduo Interešu Izglītība",
    description:
      "Mācām ar prieku, spēlēm un interesi! Nodarbības tieši jūsu bērnudārzā.",
    url: "https://darzini.eduo.lv",
    locale: "lv_LV",
    type: "website",
  },
  alternates: {
    canonical: "https://darzini.eduo.lv",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lv" className={quicksand.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
