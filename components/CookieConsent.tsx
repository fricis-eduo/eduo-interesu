"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = "G-M32T4L98Z4";
const STORAGE_KEY = "eduo_cookie_consent";

export default function CookieConsent() {
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || stored === "declined") {
      setConsent(stored as "accepted" | "declined");
    } else {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setConsent("declined");
    setVisible(false);
  };

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {visible && (
        <div
          role="dialog"
          aria-label="Sīkdatņu paziņojums"
          className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 px-4 py-4 sm:py-5"
        >
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm text-gray-300 leading-relaxed flex-1">
              Mēs izmantojam Google Analytics sīkdatnes, lai uzlabotu vietnes
              pieredzi. Jūs varat piekrist vai atteikties.{" "}
              <a
                href="/privatuma-politika"
                className="underline text-eduo-cyan hover:text-white transition-colors"
              >
                Uzzināt vairāk
              </a>
              .
            </p>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={decline}
                className="px-4 py-2 text-sm font-semibold text-gray-300 border border-gray-600 rounded-full hover:border-gray-400 transition-colors"
              >
                Noraidīt
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 text-sm font-bold bg-eduo-blue text-white rounded-full hover:opacity-90 transition-opacity"
              >
                Piekrist
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
