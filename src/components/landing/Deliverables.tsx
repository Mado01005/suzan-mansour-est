import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteIcon } from "@/components/ui/SiteIcon";
import { siteConfig } from "@/config/siteConfig";

export function Deliverables() {
  return (
    <section id="deliverables" className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="بعد كل حصة… كل شيء جاهز للمذاكرة والتطبيق"
          description="ما بعد الحصة جزء من نظام التعلم، مش مسؤولية الطالب إنه يرتّب الرحلة لوحده."
        />

        <div className="mt-12 grid items-stretch gap-7 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-3">
            {siteConfig.deliverables.map((item, index) => (
              <article
                key={item.title}
                className="group flex min-h-24 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:border-teal hover:bg-mist sm:p-5"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-teal text-white">
                  <SiteIcon name={item.icon} className="size-6" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-extrabold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
                <span className="text-sm font-black text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>

          <blockquote className="relative flex min-h-96 flex-col justify-between overflow-hidden rounded-[2rem] border border-teal/40 bg-mist p-7 sm:p-10">
            <Quote
              className="size-14 text-teal"
              aria-hidden="true"
              strokeWidth={1.4}
            />
            <p className="mt-10 text-pretty text-2xl font-black leading-[1.75] text-ink sm:text-3xl">
              الطالب مش هيخرج من الحصة فاهم الدرس فقط؛ هيكون عارف يذاكره إزاي،
              والأسئلة ممكن تيجي عليه بأي شكل في الامتحان.
            </p>
            <footer className="mt-10 flex items-center gap-3 border-t border-slate-200 pt-5 text-sm font-bold text-slate-500">
              <span
                className="size-2 rounded-full bg-amber"
                aria-hidden="true"
              />
              نظام تعلم متكامل بعد كل حصة
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
