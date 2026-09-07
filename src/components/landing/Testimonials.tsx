"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  LockKeyhole,
  MessageSquareQuote,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/siteConfig";

const evidenceSlots = [
  { label: "لقطة رأي طالب", detail: "تُضاف بعد موافقة صاحب الرسالة" },
  { label: "تجربة طالب مع الشرح", detail: "تُعرض بصياغتها الأصلية بعد التحقق" },
  { label: "نتيجة موثّقة", detail: "تُخفى البيانات الشخصية قبل النشر" },
] as const;

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = evidenceSlots[activeIndex];

  const goNext = () =>
    setActiveIndex((current) => (current + 1) % evidenceSlots.length);
  const goPrevious = () =>
    setActiveIndex(
      (current) => (current - 1 + evidenceSlots.length) % evidenceSlots.length,
    );

  return (
    <section id="testimonials" className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              ماذا يقول طلاب <span dir="ltr">Prof. Suzan</span>؟
            </>
          }
          description="هذا القسم محجوز فقط لآراء حقيقية موثّقة؛ لا نستخدم اقتباسات مصطنعة أو أسماء وهمية."
        />

        <div className="mt-12 grid items-stretch gap-7 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-mist p-6 sm:p-9">
            <div className="mx-auto max-w-md rounded-[1.75rem] border border-slate-300 bg-white p-5 shadow-card">
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-slatefill text-teal">
                    <MessageSquareQuote className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <strong className="block text-sm text-ink">
                      {activeItem.label}
                    </strong>
                    <span className="text-xs text-slate-400">
                      هوية الطالب مخفية
                    </span>
                  </div>
                </div>
                <LockKeyhole
                  className="size-5 text-slate-400"
                  aria-label="محتوى يحمي خصوصية الطالب"
                />
              </div>
              <div className="space-y-3 py-8" aria-hidden="true">
                <span className="block h-3 w-11/12 rounded-full bg-slate-200" />
                <span className="block h-3 w-4/5 rounded-full bg-slate-200" />
                <span className="block h-3 w-10/12 rounded-full bg-slate-200" />
                <span className="block h-3 w-3/5 rounded-full bg-slate-200" />
              </div>
              <p className="rounded-xl bg-slatefill p-4 text-center text-sm font-bold leading-6 text-slate-600">
                {activeItem.detail}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={goPrevious}
                className="grid size-11 place-items-center rounded-full border border-slate-300 bg-white text-ink hover:border-teal"
                aria-label="الرأي السابق"
              >
                <ArrowRight className="size-5" aria-hidden="true" />
              </button>
              <div
                className="flex gap-2"
                role="tablist"
                aria-label="اختيار نموذج رأي"
              >
                {evidenceSlots.map((item, index) => (
                  <button
                    key={item.label}
                    type="button"
                    role="tab"
                    aria-selected={index === activeIndex}
                    aria-label={`عرض ${item.label}`}
                    onClick={() => setActiveIndex(index)}
                    className="grid size-11 place-items-center rounded-full"
                  >
                    <span
                      className={`size-3 rounded-full ${index === activeIndex ? "bg-teal" : "bg-slate-300"}`}
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={goNext}
                className="grid size-11 place-items-center rounded-full border border-slate-300 bg-white text-ink hover:border-teal"
                aria-label="الرأي التالي"
              >
                <ArrowLeft className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-[2rem] bg-ink p-7 text-white sm:p-10">
            <LockKeyhole
              className="size-11 text-teal"
              aria-hidden="true"
              strokeWidth={1.5}
            />
            <h3 className="mt-7 text-3xl font-black leading-tight">
              ثقة تُبنى بالدليل، لا بالكلام
            </h3>
            <p className="mt-5 text-base leading-8 text-slate-300">
              سيتم نشر لقطات وآراء الطلاب بعد التحقق منها والحصول على موافقة
              واضحة، مع إخفاء الاسم والصورة وأي بيانات شخصية.
            </p>
            <a
              href={siteConfig.links.register}
              className="mt-8 inline-flex min-h-14 items-center justify-center rounded-2xl bg-teal px-5 text-center font-extrabold text-white hover:bg-emerald"
            >
              شاهد آراء الطلاب ثم احجز مكانك في المجموعة القادمة
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
