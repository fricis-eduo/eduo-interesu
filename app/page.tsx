import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16">
      {/* Logo */}
      <div className="mb-14">
        <Image
          src="/assets/EDUO_LOGO_pllats_zils.png"
          alt="EDUO"
          width={180}
          height={60}
          className="h-14 w-auto"
          priority
        />
      </div>

      {/* Tagline */}
      <p className="text-gray-500 text-lg text-center mb-16 max-w-md leading-relaxed">
        Izvēlieties, kur doties tālāk
      </p>

      {/* Choice cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        {/* Interešu izglītība */}
        <Link
          href="/interesu"
          className="group relative overflow-hidden rounded-3xl border-2 border-eduo-blue/20 hover:border-eduo-blue bg-white p-8 flex flex-col gap-4 transition-all hover:shadow-xl hover:-translate-y-1"
        >
          <div className="w-14 h-14 rounded-2xl bg-eduo-blue/10 flex items-center justify-center text-3xl">
            🚀
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-eduo-blue transition-colors">
              Interešu izglītība
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Angļu valodas nodarbības bērniem bērnudārzos un sākumskolās
            </p>
          </div>
          <span className="text-eduo-blue font-semibold text-sm mt-auto group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Uzzināt vairāk →
          </span>
          <div className="absolute inset-0 bg-eduo-blue/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
        </Link>

        {/* Veikals — coming soon */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-gray-100 bg-gray-50 p-8 flex flex-col gap-4 opacity-70">
          <div className="w-14 h-14 rounded-2xl bg-eduo-pink/10 flex items-center justify-center text-3xl">
            🎨
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              EDUO Veikals
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Krāsojamās lapas un mācību materiāli bērniem
            </p>
          </div>
          <span className="inline-flex items-center gap-2 mt-auto">
            <span className="bg-eduo-pink/15 text-eduo-pink text-xs font-bold px-3 py-1 rounded-full">
              Drīzumā
            </span>
          </span>
        </div>
      </div>

      {/* Footer note */}
      <p className="mt-16 text-gray-400 text-sm text-center">
        © 2026 SIA EDUO
      </p>
    </main>
  );
}
