"use client";

import { motion } from "framer-motion";
import { Globe, BookOpen, MessageCircle, GraduationCap } from "lucide-react";
import { PROGRAMS } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Globe,
  BookOpen,
  MessageCircle,
  GraduationCap,
};

export default function Programs() {
  return (
    <section id="programs" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block bg-eduo-blue/10 text-eduo-blue text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            Mūsu programma
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-5">
            Ko mēs mācām?
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Angļu valoda caur spēlēm, dziesmām un radošām aktivitātēm.
            Katrs vecumposms — sava pieeja, savs temps, savi panākumi.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PROGRAMS.map((p, index) => {
            const Icon = ICON_MAP[p.icon] ?? Globe;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 ${p.color}`}
                >
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {p.name}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-5">
                  {p.description}
                </p>
                <span className="inline-block bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-1.5 rounded-full">
                  {p.age}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.p
          className="text-center mt-14 text-gray-600 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Neatrodat atbildi uz savu jautājumu?{" "}
          <a
            href="#contact"
            className="text-eduo-blue font-bold hover:text-eduo-pink transition-colors"
          >
            Rakstiet mums!
          </a>
        </motion.p>
      </div>
    </section>
  );
}
