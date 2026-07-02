"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle, Loader2 } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  role: "director" | "parent";
  kindergarten: string;
  message: string;
  privacy: boolean;
  _honeypot?: string;
};

const INPUT =
  "w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-eduo-blue/50 focus:border-eduo-blue transition-colors text-base text-gray-900 placeholder:text-gray-400";

const LABEL = "block text-base font-semibold text-gray-800 mb-1.5";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: { role: "parent" } });

  const role = watch("role");

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-eduo-blue">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Pieteikties!
          </h2>
          <p className="text-white/85 text-xl max-w-xl mx-auto leading-relaxed">
            Aizpildiet formu un mēs sazināsimies ar jums 24 stundu laikā.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-10 shadow-2xl">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle size={64} className="text-green-500 mx-auto mb-5" />
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Paldies!</h3>
              <p className="text-gray-600 text-lg">
                Mēs sazināsimies ar jums 24 stundu laikā.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              {/* Honeypot — invisible to humans, bots fill it */}
              <input
                {...register("_honeypot")}
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute opacity-0 pointer-events-none w-0 h-0"
              />

              {/* Name */}
              <div>
                <label className={LABEL}>
                  Vārds, Uzvārds <span className="text-eduo-pink">*</span>
                </label>
                <input
                  {...register("name", { required: "Lūdzu, ievadiet vārdu" })}
                  type="text"
                  placeholder="Jānis Bērziņš"
                  className={INPUT}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className={LABEL}>
                  E-pasts <span className="text-eduo-pink">*</span>
                </label>
                <input
                  {...register("email", {
                    required: "Lūdzu, ievadiet e-pastu",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Lūdzu, ievadiet derīgu e-pastu",
                    },
                  })}
                  type="email"
                  placeholder="janis@example.lv"
                  className={INPUT}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className={LABEL}>Telefons</label>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="+371-00-000-000"
                  className={INPUT}
                />
              </div>

              {/* Role */}
              <div>
                <label className={LABEL}>Jūs esat</label>
                <div className="flex flex-wrap gap-4">
                  {[
                    { value: "parent", label: "Vecāks" },
                    { value: "director", label: "Bērnudārza vadītājs/a" },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className="flex items-center gap-2.5 cursor-pointer"
                    >
                      <input
                        {...register("role")}
                        type="radio"
                        value={opt.value}
                        className="accent-eduo-blue w-4 h-4"
                      />
                      <span className="text-base text-gray-700">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Kindergarten — shown for directors */}
              {role === "director" && (
                <div>
                  <label className={LABEL}>Bērnudārza nosaukums</label>
                  <input
                    {...register("kindergarten")}
                    type="text"
                    placeholder="PII Zvaigznīte"
                    className={INPUT}
                  />
                </div>
              )}

              {/* Message */}
              <div>
                <label className={LABEL}>
                  Ziņa <span className="text-eduo-pink">*</span>
                </label>
                <textarea
                  {...register("message", { required: "Lūdzu, ievadiet ziņu" })}
                  rows={4}
                  placeholder="Lūgums ziņojumā norādīt tēmu (izglītības iestāde un adrese)"
                  className={`${INPUT} resize-none`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Privacy consent */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    {...register("privacy", { required: "Lūdzu, apstipriniet privātuma politiku" })}
                    type="checkbox"
                    className="mt-1 w-4 h-4 accent-eduo-blue shrink-0"
                  />
                  <span className="text-sm text-gray-600 leading-relaxed">
                    Esmu iepazinies/-usies ar{" "}
                    <a href="/interesu/privatuma-politika" target="_blank" className="text-eduo-blue underline hover:text-eduo-pink">
                      privātuma politiku
                    </a>{" "}
                    un piekrītu savu personas datu apstrādei.
                  </span>
                </label>
                {errors.privacy && (
                  <p className="text-red-500 text-sm mt-1">{errors.privacy.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-5 bg-eduo-pink text-white font-bold text-lg rounded-full hover:bg-pink-700 disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Nosūta...
                  </>
                ) : (
                  "Nosūtīt pieteikumu"
                )}
              </button>

              <p className="text-center text-sm text-gray-400 leading-relaxed">
                Jūsu dati tiek apstrādāti saskaņā ar mūsu Privātuma politiku un
                netiek nodoti trešajām pusēm.
              </p>
            </form>
          )}
        </div>

        {/* Contact info below */}
        <div className="text-center mt-10 flex flex-wrap justify-center gap-6 text-white/80 text-base">
          <a href="mailto:interesu@eduo.me" className="hover:text-white transition-colors">
            📧 interesu@eduo.me
          </a>
          <a href="https://www.eduo.lv" className="hover:text-white transition-colors">
            🌐 www.eduo.lv
          </a>
        </div>
      </div>
    </section>
  );
}
