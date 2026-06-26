"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const PLATFORM_ITEMS = [
  { label: "AI Valodu kursi", value: "B2", color: "text-yellow-400" },
  { label: "Matemātikas treņiņš", value: "94%", color: "text-yellow-400" },
  { label: "Skolas eksāmeni", value: "12", color: "text-yellow-400" },
];

export default function Platform() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 py-14 px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-eduo-blue/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              ✦ EDUO Ekosistēma
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
              Vairāk nekā tikai pulciņš.{" "}
              <span className="text-orange-400">Iepazīsti EDUO digitālo platformu.</span>
            </h2>

            <p className="text-white/70 text-base leading-relaxed mb-6 max-w-lg">
              Lielākiem bērniem un pieaugušajiem — AI platforma skolas priekšmetu
              un valodu apguvei, kā arī tiešsaistes nodarbības.
            </p>

            <a
              href="https://eduo.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-400 text-slate-900 font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Atklāt EDUO Platformu
              <ExternalLink size={16} />
            </a>
          </motion.div>

          {/* Right — mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl">
              {/* Window dots */}
              <div className="flex gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4">eduo.me</p>

              {/* List items */}
              <div className="space-y-3 mb-4">
                {PLATFORM_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3"
                  >
                    <span className="text-white text-sm font-medium">{item.label}</span>
                    <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="bg-white/15 rounded-xl px-4 py-3 flex items-center justify-between"
              >
                <span className="text-white text-sm font-medium">Privātstunda ar pasniedzēju</span>
                <div className="text-right">
                  <div className="bg-eduo-pink text-white text-xs font-bold px-2 py-0.5 rounded-full mb-0.5">
                    1:1 Session
                  </div>
                  <span className="text-white/50 text-xs">REZERVĒTA</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
