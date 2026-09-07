"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/siteConfig";

export function EconomicsConcepts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeConcept = siteConfig.economicsConcepts[activeIndex];

  return (
    <section id="concepts" className="overflow-x-hidden bg-mist py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              <span dir="ltr">Economics</span> مش مجرد مادة… دي طريقة تفهم بيها
              العالم
            </>
          }
          description="ليه الأسعار بتزيد؟ ليه سعر العملة بيتغير؟ إزاي قرار البنك المركزي ممكن يؤثر على أسرتك؟ وليه منتج معين سعره يرتفع فجأة عندما يزيد الطلب عليه؟"
        />

        <div className="mt-12 grid gap-7 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex min-h-[24rem] flex-col justify-between overflow-hidden rounded-[2rem] bg-ink p-7 text-white sm:p-9">
            <div>
              <span
                className="grid size-14 place-items-center rounded-full bg-teal text-2xl font-black"
                aria-hidden="true"
              >
                {activeConcept.symbol}
              </span>
              <p
                className="mt-8 text-sm font-extrabold uppercase tracking-[0.16em] text-teal"
                dir="ltr"
              >
                {activeConcept.english}
              </p>
              <h3 className="mt-2 text-3xl font-black sm:text-4xl">
                {activeConcept.arabic}
              </h3>
              <p className="mt-5 text-pretty text-lg leading-9 text-slate-200">
                {activeConcept.scenario}
              </p>
            </div>
            <svg
              viewBox="0 0 420 85"
              className="mt-8 h-auto w-full"
              role="img"
              aria-label="خط بياني زخرفي للمفهوم الاقتصادي المختار"
            >
              <path
                d="M5 67L73 47L140 59L210 24L280 42L350 12L415 22"
                fill="none"
                stroke="#14B8A6"
                strokeWidth="3"
              />
              {[
                "5,67",
                "73,47",
                "140,59",
                "210,24",
                "280,42",
                "350,12",
                "415,22",
              ].map((point) => {
                const [cx, cy] = point.split(",");
                return (
                  <circle key={point} cx={cx} cy={cy} r="5" fill="#F59E0B" />
                );
              })}
            </svg>
          </div>

          <div
            className="grid gap-3 sm:grid-cols-2"
            role="list"
            aria-label="مفاهيم اقتصادية من الحياة اليومية"
          >
            {siteConfig.economicsConcepts.map((concept, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  type="button"
                  key={concept.english}
                  onClick={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={`group min-h-36 rounded-2xl border p-5 text-start transition-all ${
                    isActive
                      ? "border-teal bg-white shadow-card"
                      : "border-slate-200 bg-transparent hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <span className="flex items-start justify-between gap-4">
                    <span>
                      <span
                        className={`block text-xs font-black ${isActive ? "text-teal" : "text-slate-500"}`}
                        dir="ltr"
                      >
                        {concept.english}
                      </span>
                      <strong className="mt-1 block text-lg font-black text-ink">
                        {concept.arabic}
                      </strong>
                    </span>
                    <span
                      className={`grid size-10 shrink-0 place-items-center rounded-full text-lg font-black ${isActive ? "bg-teal text-white" : "bg-white text-slate-400"}`}
                    >
                      {concept.symbol}
                    </span>
                  </span>
                  <span className="mt-3 line-clamp-2 block text-sm leading-6 text-slate-500">
                    {concept.scenario}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-4xl text-center text-xl font-extrabold leading-9 text-ink sm:text-2xl">
          لما تفهم{" "}
          <span dir="ltr" className="text-teal">
            Economics
          </span>
          ، الأخبار مش هتكون مجرد أرقام ومصطلحات… هتعرف إيه اللي بيحصل، وليه
          بيحصل، وإزاي ممكن يؤثر عليك.
        </p>
      </div>
    </section>
  );
}
