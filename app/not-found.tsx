import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lapa nav atrasta — EDUO",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl font-bold text-eduo-blue mb-4">404</div>
      <h1 className="text-2xl font-bold text-gray-900 mb-3">Lapa nav atrasta</h1>
      <p className="text-gray-500 mb-8 max-w-sm">
        Šāda lapa neeksistē. Iespējams, tā ir pārvietota vai dzēsta.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-eduo-pink text-white font-bold rounded-full hover:bg-pink-700 transition-colors"
      >
        Atpakaļ uz sākumlapu
      </Link>
    </div>
  );
}
