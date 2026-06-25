"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-eduo-cyan/20 text-teal-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            Biežāk uzdotie jautājumi
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-5">
            Jums ir jautājumi?
          </h2>
          <p className="text-gray-600 text-xl max-w-xl mx-auto leading-relaxed">
            Atbildam uz visbiežāk uzdotajiem jautājumiem. Ja neatrodat atbildi —
            sazinieties ar mums!
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              className="border border-gray-200 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-base sm:text-lg">
                  {item.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={22} className="flex-shrink-0 text-eduo-blue" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-gray-600 text-base leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-600 mb-5 text-lg">Vēl nav atbildes uz jūsu jautājumu?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-10 py-4 bg-eduo-blue text-white font-bold text-lg rounded-full hover:bg-blue-600 transition-colors"
          >
            Sazinieties ar mums
          </a>
        </div>
      </div>
    </section>
  );
}
