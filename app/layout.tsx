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
  title: "EDUO",
  description: "EDUO — mācīšanās ar prieku, spēlēm un interesi.",
  verification: {
    google: "xKBSf_X-sPr6N267AE1GVpyyfGVGTq2KPNSaChTwkKI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lv" className={quicksand.variable}>
      <body className="font-sans antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
