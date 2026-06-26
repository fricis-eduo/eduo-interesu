"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <Image
            src="/assets/EDUO_LOGO_pllats_zils.png"
            alt="EDUO"
            width={120}
            height={40}
            sizes="120px"
            className={`h-9 w-auto transition-all duration-300 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-eduo-pink ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 bg-eduo-pink text-white text-sm font-bold rounded-full hover:bg-pink-700 transition-colors"
        >
          Pieteikties!
        </a>

        {/* Hamburger */}
        <button
          className={`md:hidden p-2 transition-colors ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col p-4 gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 px-4 text-gray-700 font-semibold hover:text-eduo-blue hover:bg-blue-50 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-4 bg-eduo-pink text-white text-center font-bold rounded-full hover:bg-pink-700 transition-colors"
              >
                Pieteikties!
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
