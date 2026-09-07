import { Mail, MessageCircle } from "lucide-react";
import { createEmailUrl, createWhatsAppUrl } from "@/config/siteConfig";

export function FinalCta() {
  return (
    <section id="contact" className="border-y border-teal/25 bg-white py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:text-start lg:px-8">
        <div>
          <h2 className="text-2xl font-black text-ink sm:text-3xl">
            مستعد تبدأ رحلتك في <span dir="ltr">EST Economics</span>؟
          </h2>
          <p className="mt-2 leading-7 text-slate-600">
            تواصل معنا الآن للاستفسار أو لتأكيد إرسال طلب التسجيل.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-emerald px-6 font-extrabold text-white hover:bg-teal"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            تواصل على WhatsApp الآن
          </a>
          <a
            href={createEmailUrl("استفسار عن كورس EST Economics")}
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-ink bg-white px-6 font-extrabold text-ink hover:bg-mist"
          >
            <Mail className="size-5" aria-hidden="true" />
            أرسل بريدًا إلكترونيًا
          </a>
        </div>
      </div>
    </section>
  );
}
