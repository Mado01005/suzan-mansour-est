"use client";

import { useState } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { BookOpenCheck, Minus, Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createWhatsAppUrl, faqItems } from "@/config/siteConfig";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="كل ما تحتاج معرفته قبل التسجيل" />

        <div className="mt-12 grid items-start gap-7 lg:grid-cols-[18rem_1fr]">
          <aside className="rounded-card bg-ink p-6 text-white lg:sticky lg:top-28">
            <BookOpenCheck
              className="size-12 text-teal"
              aria-hidden="true"
              strokeWidth={1.5}
            />
            <h3 className="mt-6 text-2xl font-black">
              <span dir="ltr">EST Economics</span>
              <br />
              ببساطة وعمق
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              برنامج منظم، مجموعة صغيرة، شرح مبسّط، Past Papers، ومتابعة تساعدك
              تعرف خطوتك التالية.
            </p>
            <ul className="mt-6 space-y-3 border-t border-white/15 pt-6 text-sm font-bold text-slate-200">
              <li>• بحد أقصى 10 طلاب</li>
              <li>• فهم وتطبيق، مش حفظ</li>
              <li>• مواعيد بتوقيت الأردن</li>
            </ul>
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-7 flex min-h-12 items-center justify-center rounded-xl bg-teal px-4 text-center font-extrabold text-white hover:bg-emerald"
            >
              عندك سؤال آخر؟ تواصل معنا
            </a>
          </aside>

          <LazyMotion features={domAnimation}>
            <div className="grid gap-3 md:grid-cols-2" role="list">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                const panelId = `faq-panel-${index}`;
                const buttonId = `faq-button-${index}`;

                return (
                  <article
                    key={item.question}
                    className="self-start overflow-hidden rounded-2xl border border-slate-200 bg-white"
                    role="listitem"
                  >
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() =>
                          setOpenIndex((current) =>
                            current === index ? null : index,
                          )
                        }
                        className="flex min-h-16 w-full items-center gap-4 px-5 py-4 text-start text-sm font-extrabold leading-6 text-ink transition-colors hover:bg-mist"
                      >
                        <span className="font-black text-teal">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 flex-1">{item.question}</span>
                        <span
                          className={`grid size-8 shrink-0 place-items-center rounded-full ${isOpen ? "bg-teal text-white" : "border border-slate-300 text-ink"}`}
                        >
                          {isOpen ? (
                            <Minus className="size-4" aria-hidden="true" />
                          ) : (
                            <Plus className="size-4" aria-hidden="true" />
                          )}
                        </span>
                      </button>
                    </h3>
                    {isOpen ? (
                      <m.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={
                          shouldReduceMotion ? false : { opacity: 0, height: 0 }
                        }
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                      >
                        <p className="border-t border-slate-100 px-5 py-5 text-sm leading-7 text-slate-600">
                          {item.answer}
                        </p>
                      </m.div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </LazyMotion>
        </div>
      </div>
    </section>
  );
}
