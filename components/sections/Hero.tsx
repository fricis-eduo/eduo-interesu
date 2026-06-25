"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const TRUST_BADGES = [
  "20+ partnerbērnudārzi",
  "Licencēta izglītības organizācija",
  "Bezmaksas konsultācija",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-eduo-blue flex flex-col overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-white/10"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-eduo-pink/20"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 2 }}
        />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-eduo-lime/10" />
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center max-w-6xl mx-auto px-6 w-full pt-28 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-block bg-white/20 text-white text-base font-semibold px-5 py-2 rounded-full mb-6 backdrop-blur-sm"
            >
              Angļu valodas nodarbības bērnudārzos
            </motion.span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Mācām ar prieku,{" "}
              <motion.span
                className="text-eduo-lime"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                spēlēm
              </motion.span>{" "}
              un{" "}
              <motion.span
                className="text-eduo-pink"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.5 }}
              >
                interesi!
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-white/90 text-xl sm:text-2xl leading-relaxed mb-10 max-w-lg"
            >
              Angļu valodas nodarbības —{" "}
              <strong className="text-white">tieši jūsu bērnudārzā.</strong>{" "}
              Mēs nākam pie jums ar visiem materiāliem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center px-10 py-4 bg-eduo-pink text-white font-bold text-lg rounded-full hover:bg-pink-700 hover:scale-105 transition-all shadow-lg"
              >
                Pieteikties!
              </a>
              <a
                href="#programs"
                className="inline-flex items-center px-10 py-4 bg-white/20 text-white font-bold text-lg rounded-full hover:bg-white/30 transition-all backdrop-blur-sm"
              >
                Uzzināt vairāk →
              </a>
            </motion.div>
          </motion.div>

          {/* Rocket column */}
          <div className="flex justify-center items-center relative">
            {/* Launch exhaust trail */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: [0, 0.6, 0], scaleY: [0, 1, 0] }}
              transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
              style={{ originY: 1 }}
            >
              <div className="w-6 h-24 rounded-full bg-gradient-to-t from-transparent via-orange-300/60 to-yellow-200/80 blur-sm" />
            </motion.div>

            {/* Rocket */}
            <motion.div
              initial={{ y: 500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 55,
                damping: 11,
                delay: 0.35,
              }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -28, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                  delay: 2.2,
                }}
              >
                <span
                  className="text-[200px] sm:text-[250px] lg:text-[320px] leading-none block select-none"
                  role="img"
                  aria-label="Rocket"
                >
                  🚀
                </span>
              </motion.div>

              {/* Floating stars around rocket */}
              <motion.span
                className="absolute top-6 -right-4 text-5xl"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
              >
                ⭐
              </motion.span>
              <motion.span
                className="absolute top-1/3 -left-10 text-4xl"
                animate={{ y: [0, -14, 0], scale: [1, 1.25, 1] }}
                transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
              >
                ✨
              </motion.span>
              <motion.span
                className="absolute bottom-10 right-0 text-3xl"
                animate={{ rotate: [-15, 15, -15] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              >
                🌟
              </motion.span>
              <motion.span
                className="absolute -bottom-2 -left-6 text-3xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
              >
                💫
              </motion.span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust ribbon */}
      <div className="bg-white/15 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center gap-8">
          {TRUST_BADGES.map((badge) => (
            <div key={badge} className="flex items-center gap-2.5 text-white">
              <div className="w-5 h-5 rounded-full bg-eduo-lime flex items-center justify-center flex-shrink-0">
                <Check size={11} className="text-gray-800" strokeWidth={3} />
              </div>
              <span className="text-base font-semibold">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
