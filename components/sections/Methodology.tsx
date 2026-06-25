"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Star } from "lucide-react";
import { METHODOLOGY_STEPS } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Phone,
  MapPin,
  Star,
};

export default function Methodology() {
  return (
    <section id="methodology" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-eduo-pink/10 text-eduo-pink text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            Kā tas darbojas?
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-5">
            3 soļi uz panākumiem
          </h2>
          <p className="text-gray-600 text-xl max-w-xl mx-auto leading-relaxed">
            Mēs nākam pie jums. Jūsu uzdevums — tikai atvērt durvis.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-eduo-blue/20" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {METHODOLOGY_STEPS.map((step, index) => {
              const Icon = ICON_MAP[step.icon] ?? Phone;
              return (
                <motion.div
                  key={step.number}
                  className="flex flex-col items-center text-center relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-eduo-blue/10 flex items-center justify-center">
                      <Icon size={32} className="text-eduo-blue" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-eduo-pink flex items-center justify-center text-white text-sm font-bold">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Sub-note */}
        <motion.div
          className="mt-14 bg-eduo-blue/5 border border-eduo-blue/20 rounded-2xl p-7 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-600 text-base leading-relaxed">
            <strong className="text-gray-900">Piedāvājam elastīgu grafiku,</strong>{" "}
            kas netraucē bērnudārza dienas kārtību. Minimālais grupas lielums —
            6 bērni. Nodarbības sagatavo bērnus angļu valodas stundām skolā un
            liek pamatus tās programmai.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
