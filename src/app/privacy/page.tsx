import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: `سياسة الخصوصية | ${siteConfig.name}`,
  description:
    "كيف نتعامل مع بيانات طلبات التسجيل والتواصل في كورس EST Economics.",
};

export default function PrivacyPage() {
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
        <ShieldCheck
          className="mt-8 size-12 text-teal"
          aria-hidden="true"
          strokeWidth={1.5}
        />
        <h1 className="mt-5 text-3xl font-black text-ink sm:text-4xl">
          سياسة الخصوصية
        </h1>
        <div className="mt-8 space-y-7 text-base leading-8 text-slate-600">
          <section>
            <h2 className="text-xl font-black text-ink">
              البيانات التي يجهزها النموذج
            </h2>
            <p className="mt-2">
              يطلب النموذج بيانات تساعد في اختيار المجموعة المناسبة، مثل اسم
              الطالب ووسيلة التواصل والصف الدراسي وموعد الامتحان والمستوى
              الحالي.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-black text-ink">كيف تُرسل البيانات</h2>
            <p className="mt-2">
              النموذج الحالي لا يخزّن البيانات في قاعدة بيانات. يتم تجهيز رسالة
              داخل متصفحك، ولا تُرسل إلا عندما تختار فتح WhatsApp ثم تضغط
              الإرسال بنفسك.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-black text-ink">الغرض من الاستخدام</h2>
            <p className="mt-2">
              تُستخدم البيانات التي ترسلها فقط للرد على استفسارك، تقييم المجموعة
              المناسبة، ومتابعة طلب التسجيل. لا ينبغي مشاركة بيانات حساسة لا
              يحتاجها هذا الغرض.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-black text-ink">خدمات الطرف الثالث</h2>
            <p className="mt-2">
              عند الانتقال إلى WhatsApp أو البريد الإلكتروني، تنطبق سياسات
              الخصوصية الخاصة بالخدمة التي اخترتها.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
