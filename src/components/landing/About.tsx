import { ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteIcon } from "@/components/ui/SiteIcon";
import { siteConfig } from "@/config/siteConfig";

export function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.06fr_0.94fr]">
          <div>
            <SectionHeading
              title={
                <>
                  مين هي <span dir="ltr">Prof. Suzan Mansour</span>؟
                </>
              }
              align="start"
            />
            <p className="mt-7 text-pretty text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              متخصصة في تدريس{" "}
              <span dir="ltr" className="font-bold text-ink">
                EST Economics
              </span>{" "}
              للطلاب الأردنيين منذ انطلاق الامتحانات في يوليو 2023. خريجة كلية
              التجارة وإدارة الأعمال – قسم المحاسبة بجامعة الإسكندرية، وحاصلة
              على دبلوم إدارة أعمال من الأكاديمية العربية للعلوم والتكنولوجيا
              والنقل البحري، ودبلوم تربوي من جامعة الإسكندرية.
            </p>
            <p className="mt-4 text-pretty text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              ساعدت عشرات الطلاب على الوصول إلى علامات مرتفعة، وبلغت نسبة النجاح
              بين الطلاب المسجلين لديها 100% وفق النتائج المتاحة لديها. وتعتمد
              في التدريس على الفهم العميق للمفاهيم، وربطها بالحياة الواقعية،
              والتدريب المكثف على Past Papers.
            </p>
          </div>

          <div className="relative min-h-72 overflow-hidden rounded-[2rem] bg-ink p-7 text-white sm:p-9">
            <div
              className="absolute end-7 top-7 grid size-20 place-items-center rounded-full border border-white/20 text-teal"
              aria-hidden="true"
            >
              <ShieldCheck className="size-11" strokeWidth={1.5} />
            </div>
            <div className="relative flex h-full min-h-60 flex-col justify-end">
              <p className="max-w-xs text-3xl font-black leading-tight sm:text-4xl">
                علم أكاديمي وخبرة تربوية
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 border-t border-white/15 pt-6">
                <div>
                  <strong
                    className="block text-3xl font-black text-teal"
                    dir="ltr"
                  >
                    {siteConfig.stats.teachingSince}
                  </strong>
                  <span className="text-sm text-slate-300">
                    بداية تدريس EST
                  </span>
                </div>
                <div>
                  <strong
                    className="block text-3xl font-black text-amber"
                    dir="ltr"
                  >
                    {siteConfig.stats.passRate}
                  </strong>
                  <span className="text-sm text-slate-300">
                    نجاح بين طلابها المسجلين
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex items-center gap-3">
          <ShieldCheck className="size-6 text-teal" aria-hidden="true" />
          <h3 className="text-xl font-black text-ink sm:text-2xl">
            مؤهلات وخبرات موثّقة
          </h3>
        </div>
        <div className="mt-6 grid overflow-hidden rounded-card border border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.credentials.map((credential, index) => (
            <article
              key={credential.title}
              className={`group min-h-56 bg-white p-6 transition-colors hover:bg-slatefill ${index !== siteConfig.credentials.length - 1 ? "border-b border-slate-200 sm:border-s lg:border-b-0" : ""}`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-slatefill text-teal group-hover:bg-white">
                  <SiteIcon name={credential.icon} className="size-6" />
                </span>
                <span className="text-sm font-black text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h4 className="mt-6 text-base font-extrabold leading-7 text-ink">
                {credential.title}
              </h4>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {credential.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
