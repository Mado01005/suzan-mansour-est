import { CalendarClock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteIcon } from "@/components/ui/SiteIcon";
import { siteConfig } from "@/config/siteConfig";

export function Roadmap() {
  return (
    <section id="roadmap" className="bg-ink py-20 text-white sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="رحلتك من فهم المنهج إلى إتقان الامتحان"
          description="خطة واضحة تتحرك من بناء المفهوم إلى تدريب الامتحان، ثم مراجعة مركزة تغلق الثغرات."
          light
        />

        <div className="relative mt-14 grid gap-6 lg:grid-cols-3">
          <div
            className="absolute inset-x-[16%] top-12 hidden border-t border-dashed border-teal/70 lg:block"
            aria-hidden="true"
          />
          {siteConfig.roadmap.map((stage) => (
            <article
              key={stage.stage}
              className="relative rounded-card border border-white/15 bg-white/[0.04] p-6 sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="relative z-10 grid size-20 place-items-center rounded-full border-8 border-ink bg-white text-teal">
                  <SiteIcon name={stage.icon} className="size-8" />
                </span>
                <span className="text-5xl font-black text-white/10">
                  {stage.stage}
                </span>
              </div>
              <p className="mt-6 text-sm font-extrabold text-teal">
                المرحلة {stage.stage}
              </p>
              <h3 className="mt-2 text-2xl font-black">{stage.title}</h3>
              <p className="mt-1 font-extrabold text-amber">{stage.sessions}</p>
              <ul className="mt-6 space-y-3">
                {stage.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-7 text-slate-300"
                  >
                    <span
                      className="mt-2 size-2 shrink-0 rounded-full bg-teal"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-card border border-teal/60 bg-white/[0.03] px-6 py-7 sm:px-10">
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 text-center">
            <div>
              <strong className="block text-4xl font-black text-teal">
                ~{siteConfig.stats.explanationSessions}
              </strong>
              <span className="text-sm text-slate-300">حصة شرح وتدريب</span>
            </div>
            <span className="text-4xl font-light text-white">+</span>
            <div>
              <strong className="block text-4xl font-black text-amber">
                ~{siteConfig.stats.revisionSessions}
              </strong>
              <span className="text-sm text-slate-300">حصص مراجعة نهائية</span>
            </div>
            <span className="text-4xl font-light text-white">=</span>
            <div>
              <strong className="block text-4xl font-black text-emerald">
                ~{siteConfig.stats.approximateTotalSessions}
              </strong>
              <span className="text-sm text-slate-300">حصة إجمالًا</span>
            </div>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 border-t border-white/10 pt-5 text-center text-sm text-slate-300">
            <CalendarClock className="size-5 text-teal" aria-hidden="true" />
            العدد تقريبي ومرن حسب احتياج المجموعة.
          </p>
        </div>
      </div>
    </section>
  );
}
