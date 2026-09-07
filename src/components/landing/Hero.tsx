import { ArrowDown, CalendarCheck2, MessageCircle, ShieldCheck } from "lucide-react";
import { EconomicsNotebook } from "./EconomicsNotebook";
import { SiteIcon } from "@/components/ui/SiteIcon";
import { createWhatsAppUrl, siteConfig } from "@/config/siteConfig";

export function Hero() {
  return (
    <section
      id="home"
      className="relative border-b border-slate-200 bg-white pt-8 sm:pt-12 lg:pt-16"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-2 text-sm font-extrabold leading-6 text-teal">
            <ShieldCheck className="size-5 shrink-0" aria-hidden="true" />
            {siteConfig.heroBadge}
          </p>
          <h1
            className="text-balance text-4xl font-black leading-[1.35] text-ink sm:text-5xl lg:text-[3.45rem]"
            dir="rtl"
          >
            <span className="block font-black" dir="ltr">
              EST Economics…
            </span>
            افهم الاقتصاد، أتقن الامتحان، وادخل بثقة
          </h1>
          <span
            className="mt-6 block h-1 w-20 rounded-full bg-teal"
            aria-hidden="true"
          />
          <p className="mt-6 max-w-xl text-pretty text-base font-medium leading-8 text-slate-600 sm:text-lg sm:leading-9">
            مع{" "}
            <span className="font-extrabold text-ink" dir="ltr">
              Prof. Suzan Mansour
            </span>
            ، الاقتصاد مش مادة للحفظ؛ هتفهم المفاهيم من خلال أمثلة من حياتك،
            وتتدرب على أسئلة الامتحانات السابقة، وتدخل امتحانك وأنت عارف شكل
            الأسئلة وطريقة التعامل معها.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href={siteConfig.links.register}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-teal px-5 text-center text-base font-extrabold text-white shadow-sm transition-colors hover:bg-emerald"
            >
              <CalendarCheck2 className="size-5" aria-hidden="true" />
              احجز مكانك في المجموعة
            </a>
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 border-teal bg-white px-5 text-center text-base font-extrabold text-teal transition-colors hover:bg-teal hover:text-white"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              اسأل عن الكورس على WhatsApp
            </a>
          </div>
          <a
            href={siteConfig.links.roadmap}
            className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-ink underline decoration-teal decoration-2 underline-offset-8 transition-colors hover:text-teal"
          >
            تعرّف على نظام الكورس
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </div>

        <EconomicsNotebook />
      </div>

      <div className="mx-auto mt-10 w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14">
        <div className="grid overflow-hidden rounded-card border border-slate-200 bg-white shadow-card sm:grid-cols-2 lg:grid-cols-5">
          {siteConfig.heroHighlights.map((item, index) => (
            <article
              key={item.title}
              className={`group flex gap-3 border-slate-200 p-5 transition-colors hover:bg-slatefill lg:block lg:text-center ${index < siteConfig.heroHighlights.length - 1 ? "border-b sm:border-s sm:border-b-0 lg:border-s" : ""}`}
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-slatefill text-teal transition-colors group-hover:bg-teal group-hover:text-white lg:mx-auto">
                <SiteIcon name={item.icon} className="size-6" />
              </span>
              <div>
                <h2 className="mt-0 text-sm font-extrabold leading-6 text-ink lg:mt-4">
                  {item.title}
                </h2>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
