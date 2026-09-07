"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { BarChart3, Calculator, CircleDollarSign } from "lucide-react";

export function EconomicsNotebook() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="relative mx-auto w-full max-w-xl px-2 pb-5 pt-2 sm:px-5"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
      >
        <div
          className="absolute start-0 top-16 hidden space-y-3 lg:block"
          aria-hidden="true"
        >
          {["JD", "$", "€"].map((currency, index) => (
            <m.span
              key={currency}
              className="grid size-12 place-items-center rounded-full border border-slate-200 bg-white text-sm font-black text-teal shadow-card"
              animate={
                shouldReduceMotion
                  ? undefined
                  : { y: [0, index % 2 === 0 ? -5 : 5, 0] }
              }
              transition={{
                duration: 3.2 + index,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {currency}
            </m.span>
          ))}
        </div>

        <div className="notebook-grid relative overflow-hidden rounded-[1.75rem] border border-slate-300 bg-white p-5 shadow-card sm:p-7">
          <div
            className="absolute inset-y-0 start-5 border-s-2 border-dashed border-slate-300"
            aria-hidden="true"
          />
          <div className="mb-5 flex items-center justify-between gap-3 border-b border-slate-200 pb-4 ps-5">
            <div>
              <p className="text-sm font-black text-ink">دفتر فهم الاقتصاد</p>
              <p className="text-xs font-bold text-teal">
                Concept → Question → Mastery
              </p>
            </div>
            <CircleDollarSign
              className="size-8 text-teal"
              aria-hidden="true"
              strokeWidth={1.7}
            />
          </div>

          <div className="grid gap-4 ps-5 sm:grid-cols-[1fr_8.5rem]">
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="text-xs font-extrabold text-slate-500">
                  النمو الاقتصادي
                </span>
                <BarChart3 className="size-5 text-teal" aria-hidden="true" />
              </div>
              <svg
                viewBox="0 0 280 128"
                className="h-auto w-full"
                role="img"
                aria-label="منحنى يوضح اتجاه نمو اقتصادي صاعد"
              >
                <path
                  d="M22 104H265M26 108V12"
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                  fill="none"
                />
                <m.path
                  d="M28 99 C72 96, 109 84, 142 68 C190 45, 225 25, 256 12"
                  fill="none"
                  stroke="#0D9488"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={shouldReduceMotion ? false : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                />
                <path
                  d="M245 13L257 12L253 24"
                  fill="none"
                  stroke="#0D9488"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <ol className="grid gap-2" aria-label="خطوات الدرس">
              {["افهم", "اربط", "طبّق", "أتقن"].map((step, index) => (
                <li
                  key={step}
                  className="flex min-h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-xs font-extrabold text-ink"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-ink text-[10px] text-white">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-4 grid gap-4 ps-5 sm:grid-cols-[1fr_auto]">
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="text-xs font-extrabold text-slate-500">
                  Supply & Demand
                </span>
                <span className="text-xs font-black text-amber">P*</span>
              </div>
              <svg
                viewBox="0 0 280 112"
                className="h-auto w-full"
                role="img"
                aria-label="تقاطع منحنيي العرض والطلب"
              >
                <path
                  d="M22 96H265M26 100V9"
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M38 88L222 18"
                  stroke="#0D9488"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M42 18L226 88"
                  stroke="#F59E0B"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="133" cy="53" r="6" fill="#0F2942" />
                <path
                  d="M133 53V96M26 53H133"
                  stroke="#0F2942"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                />
              </svg>
            </div>
            <div
              className="flex items-center gap-3 rounded-2xl bg-slatefill px-4 py-3 text-ink sm:flex-col sm:justify-center"
              aria-hidden="true"
            >
              <Calculator className="size-7 text-teal" strokeWidth={1.6} />
              <span className="text-center text-xs font-extrabold">
                مسألة + منطق
              </span>
            </div>
          </div>
        </div>
      </m.div>
    </LazyMotion>
  );
}
