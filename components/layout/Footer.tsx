import Image from "next/image";
import { Share2, Users, Music2 } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/assets/EDUO_LOGO_pllats_zils.png"
              alt="EDUO"
              width={120}
              height={40}
              className="h-9 w-auto brightness-0 invert mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Mācām ar prieku, spēlēm un interesi!
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-4">
              Navigācija
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-eduo-cyan text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-4">
              Kontakti
            </h4>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li>
                <a href="mailto:interesu@eduo.me" className="hover:text-eduo-cyan transition-colors">
                  interesu@eduo.me
                </a>
              </li>
              <li>
                <a href="https://www.eduo.lv" className="hover:text-eduo-cyan transition-colors">
                  www.eduo.lv
                </a>
              </li>
            </ul>
            <div className="flex gap-3">
              {[
                { Icon: Share2, label: "Instagram", href: "https://www.instagram.com/eduo_me/" },
                { Icon: Users, label: "Facebook", href: "https://www.facebook.com/eduolatvija" },
                { Icon: Music2, label: "TikTok", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-eduo-blue transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© 2026 SIA EDUO. Visas tiesības aizsargātas.</span>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Privātuma politika
          </a>
        </div>
      </div>
    </footer>
  );
}
