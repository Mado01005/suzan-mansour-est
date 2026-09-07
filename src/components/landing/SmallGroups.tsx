import { UsersRound } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteIcon } from "@/components/ui/SiteIcon";
import { siteConfig } from "@/config/siteConfig";

export function SmallGroups() {
  return (
    <section id="small-groups" className="bg-mist py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              title="مجموعة صغيرة… اهتمام أكبر بكل طالب"
              align="start"
            />
            <div
              className="mt-8 flex items-end gap-4"
              aria-label="الحد الأقصى عشرة طلاب"
            >
              <strong className="text-[7.5rem] font-black leading-none text-teal sm:text-[10rem]">
                {siteConfig.stats.maxGroupSize}
              </strong>
              <div className="pb-4">
                <UsersRound
                  className="mb-2 size-9 text-ink"
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
                <span className="block text-xl font-black leading-tight text-ink">
                  طلاب
                  <br />
                  كحد أقصى
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {siteConfig.smallGroupBenefits.map((item) => (
              <article
                key={item.title}
                className="flex min-h-28 items-center gap-4 border-b border-slate-200 py-4"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-teal shadow-sm">
                  <SiteIcon name={item.icon} className="size-6" />
                </span>
                <div>
                  <h3 className="font-extrabold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
