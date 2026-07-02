import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EDUO Veikals — Drīzumā",
  robots: { index: false, follow: false },
};

export default function VeikalsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16 text-center">
      <Image
        src="/assets/EDUO_LOGO_pllats_zils.png"
        alt="EDUO"
        width={140}
        height={47}
        className="h-11 w-auto mb-12"
        priority
      />
      <div className="w-20 h-20 rounded-3xl bg-eduo-pink/10 flex items-center justify-center text-4xl mb-8">
        🎨
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">EDUO Veikals</h1>
      <p className="text-gray-500 text-lg max-w-md leading-relaxed mb-10">
        Krāsojamās lapas un angļu valodas mācību materiāli bērniem — drīzumā!
      </p>
      <Link
        href="/"
        className="text-eduo-blue font-semibold hover:text-eduo-pink transition-colors"
      >
        ← Atpakaļ uz sākumlapu
      </Link>
    </main>
  );
}
