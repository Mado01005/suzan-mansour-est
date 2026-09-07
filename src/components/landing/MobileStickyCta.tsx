import { CalendarCheck2, MessageCircle } from "lucide-react";
import { createWhatsAppUrl, siteConfig } from "@/config/siteConfig";

export function MobileStickyCta() {
  return (
    <aside
      className="fixed inset-x-3 bottom-3 z-50 md:hidden"
      aria-label="تواصل سريع"
    >
      <div className="grid grid-cols-2 gap-2 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-[0_12px_36px_rgba(15,41,66,0.2)] backdrop-blur-md">
        <a
          href={siteConfig.links.register}
          className="flex min-h-14 items-center justify-center gap-2 rounded-xl bg-teal px-3 text-center text-[13px] font-extrabold text-white"
        >
          <CalendarCheck2 className="size-5 shrink-0" aria-hidden="true" />
          احجز مكانك
        </a>
        <a
          href={createWhatsAppUrl()}
          target="_blank"
          rel="noreferrer noopener"
          className="flex min-h-14 items-center justify-center gap-2 rounded-xl bg-emerald px-3 text-center text-[13px] font-extrabold text-white"
        >
          <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
          <span dir="ltr">WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
