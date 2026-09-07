import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteIcon } from "@/components/ui/SiteIcon";
import { siteConfig } from "@/config/siteConfig";

export function Methodology() {
  return (
    <section id="method" className="bg-ink py-20 text-white sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="نفهم أولًا… ثم نتدرب حتى نصل للعلامة المستهدفة"
          light
        />
        <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute inset-x-[12%] top-12 hidden border-t-2 border-teal lg:block"
            aria-hidden="true"
          />
          {siteConfig.methodology.map((step) => (
            <article
              key={step.step}
              className="relative rounded-card border border-white/15 bg-white/[0.04] p-6 text-center"
            >
              <span className="relative z-10 mx-auto grid size-20 place-items-center rounded-full border-8 border-ink bg-white text-teal">
                <SiteIcon name={step.icon} className="size-8" />
              </span>
              <p
                className="mt-5 text-xs font-black tracking-[0.2em] text-teal"
                dir="ltr"
              >
                {step.english}
              </p>
              <h3 className="mt-1 text-2xl font-black">{step.arabic}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-4xl rounded-2xl border border-teal/70 px-6 py-5 text-center text-lg font-bold leading-8 text-slate-200">
          <span className="font-black text-teal">الفلسفة الأساسية:</span> الهدف
          فهم طريقة التفكير وليس حفظ الإجابات؛ حتى تعرف تتعامل مع السؤال مهما
          تغيّر شكله في الامتحان.
        </p>
      </div>
    </section>
  );
}
