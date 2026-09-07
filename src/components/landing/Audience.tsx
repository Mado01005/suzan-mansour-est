import { AlertTriangle, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/siteConfig";

export function Audience() {
  return (
    <section id="audience" className="bg-mist py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="هل هذا الكورس مناسب لك؟"
          description="راجع القائمة بهدوء؛ الكورس مناسب للطالب المستعد للفهم والتدريب المنتظم، مهما كانت نقطة بدايته."
        />

        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-card border border-slate-200 bg-white shadow-card">
          <ul className="grid sm:grid-cols-2">
            {siteConfig.audienceProfiles.map((profile) => (
              <li
                key={profile}
                className="flex min-h-20 items-center gap-3 border-b border-slate-200 p-5 sm:border-s"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-teal text-white">
                  <Check
                    className="size-5"
                    aria-hidden="true"
                    strokeWidth={2.5}
                  />
                </span>
                <span className="font-bold leading-7 text-ink">{profile}</span>
              </li>
            ))}
          </ul>
          <aside className="m-4 rounded-2xl border border-amber/60 bg-amber/10 p-5 sm:m-6 sm:p-7">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-amber text-ink">
                <AlertTriangle className="size-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-black text-ink">
                  هل بدأت متأخرًا؟ لا تقلق.
                </h3>
                <p className="mt-2 text-pretty leading-8 text-slate-700">
                  تواصل معنا وحدد الأجزاء التي درستها وموعد امتحانك، وسنخبرك
                  بوضوح إذا كانت المجموعة الحالية مناسبة لك أو إذا كنت تحتاج إلى
                  خطة أخرى.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
