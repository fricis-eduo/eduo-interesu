"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Globe, Video, ArrowRight, CheckCircle } from "lucide-react";

const FEATURES = [
  {
    icon: BookOpen,
    tag: "Skolas priekšmeti",
    title: "Latvijas skolas — interaktīvi",
    description:
      "Matemātika, latviešu valoda, dabaszinības un citi — strukturēti kursi pa klasēm, skaidri un saprotami.",
    badge: "1.–12. klase",
    color: "text-eduo-blue",
    glow: "bg-eduo-blue/20",
  },
  {
    icon: Globe,
    tag: "Valodu kursi",
    title: "Mācies valodas savā tempā",
    description:
      "Angļu, vācu, franču un citas valodas — mini-kursi ar spēlēm, audio un reāliem dialogiem.",
    badge: "10+ valodas",
    color: "text-eduo-cyan",
    glow: "bg-eduo-cyan/20",
  },
  {
    icon: Video,
    tag: "1:1 Nodarbības",
    title: "Savs pedagogs tiešsaistē",
    description:
      "Rezervē nodarbību ar sertificētu pedagogu. Elastīgs laiks, individuāla pieeja, redzami rezultāti.",
    badge: "Tiešsaistē",
    color: "text-eduo-pink",
    glow: "bg-eduo-pink/20",
  },
];

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const handleNotify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, _honeypot: honeypot }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-slate-950 overflow-hidden py-24 px-4">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-eduo-blue/10 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full bg-eduo-pink/10 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-eduo-cyan/8 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 6 }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/60 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-eduo-cyan animate-pulse" />
            Drīzumā
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            Iepazīstieties ar{" "}
            <span className="text-eduo-blue">eduo.lv</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Pilnvērtīga izglītības platforma — skolas priekšmeti, valodas un
            tiešsaistes nodarbības vienā vietā.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.tag}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm hover:bg-white/8 transition-colors group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {/* Glow on hover */}
              <div className={`absolute inset-0 rounded-2xl ${f.glow} opacity-0 group-hover:opacity-100 transition-opacity blur-xl`} />

              <div className="relative">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-5 ${f.color}`}>
                  <f.icon size={24} />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-bold uppercase tracking-widest ${f.color}`}>
                    {f.tag}
                  </span>
                  <span className="text-xs text-white/30 font-medium bg-white/5 px-2 py-0.5 rounded-full">
                    {f.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  {f.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-14" />

        {/* Email capture */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-white/80 text-xl font-semibold mb-2">
            Esi pirmais, kas uzzina, kad platforma tiek palaista.
          </p>
          <p className="text-white/40 text-sm mb-8">
            Nevēlamais pasts — nekad. Tikai viena paziņojuma e-pasts.
          </p>

          {submitted ? (
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-7 py-4 rounded-full">
              <CheckCircle size={20} className="text-eduo-cyan" />
              <span className="font-semibold">Reģistrēts! Paziņosim, kad laiks.</span>
            </div>
          ) : (
            <form
              onSubmit={handleNotify}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              {/* Honeypot */}
              <input
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute opacity-0 pointer-events-none w-0 h-0"
              />

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tavs@epasts.lv"
                className="flex-1 px-5 py-4 rounded-full bg-white/10 border border-white/15 text-white placeholder:text-white/35 text-base focus:outline-none focus:ring-2 focus:ring-eduo-blue/60 focus:border-eduo-blue transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-eduo-blue text-white font-bold text-base rounded-full hover:bg-blue-500 disabled:opacity-60 transition-colors whitespace-nowrap"
              >
                {loading ? "Nosūta..." : (
                  <>Paziņot man <ArrowRight size={16} /></>
                )}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
