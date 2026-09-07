import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: `الشروط والأحكام | ${siteConfig.name}`,
  description: "الشروط العامة للمعلومات والتسجيل في كورس EST Economics.",
};

export default function TermsPage() {
  return (
    <main className="min-h-dvh bg-mist px-4 py-10 sm:px-6 sm:py-16">
      <article className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card sm:p-10">
        <Link
          href={siteConfig.links.root}
          className="inline-flex min-h-11 items-center gap-2 font-extrabold text-teal"
        >
          <ArrowRight className="size-5" aria-hidden="true" />
          العودة إلى الصفحة الرئيسية
        </Link>
        <Scale
          className="mt-8 size-12 text-teal"
          aria-hidden="true"
          strokeWidth={1.5}
        />
        <h1 className="mt-5 text-3xl font-black text-ink sm:text-4xl">
          الشروط والأحكام
        </h1>
        <div className="mt-8 space-y-7 text-base leading-8 text-slate-600">
          <section>
            <h2 className="text-xl font-black text-ink">طبيعة الموقع</h2>
            <p className="mt-2">
              هذا الموقع تعريفي بخدمات {siteConfig.name} التعليمية في{" "}
              {siteConfig.courseName}. إرسال نموذج أو رسالة استفسار لا يعني
              تأكيد الحجز حتى يتم الاتفاق على المجموعة والرسوم وطريقة الدفع.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-black text-ink">المواعيد والرسوم</h2>
            <p className="mt-2">
              تُوضح المواعيد والرسوم وخيارات الدفع وقت التواصل وفق المجموعة
              المتاحة. جميع المواعيد المشار إليها تُفهم بتوقيت الأردن ما لم
              يُذكر غير ذلك بوضوح.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-black text-ink">النتائج الأكاديمية</h2>
            <p className="mt-2">
              لا يضمن البرنامج علامة محددة. النتيجة تعتمد على الشرح والتدريب
              والمتابعة إلى جانب التزام الطالب وحضوره ومذاكرته وأدائه يوم
              الامتحان.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-black text-ink">الملكية والعلامات</h2>
            <p className="mt-2">
              جميع العلامات والأسماء التجارية المذكورة تخص أصحابها، وهذا الموقع
              تعريفي بخدمات Prof. Suzan Mansour التعليمية.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
