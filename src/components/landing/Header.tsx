"use client";

import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { createWhatsAppUrl, siteConfig } from "@/config/siteConfig";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/90 bg-white/95 shadow-nav backdrop-blur-md">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href={siteConfig.links.home}
          className="group flex min-h-11 items-center gap-3"
          aria-label="العودة إلى بداية الصفحة"
        >
          <span className="grid size-11 place-items-center rounded-2xl bg-ink text-white transition-transform group-hover:-rotate-3">
            <GraduationCap
              className="size-6"
              aria-hidden="true"
              strokeWidth={1.8}
            />
          </span>
          <span className="leading-tight">
            <strong
              className="block text-sm font-extrabold text-ink sm:text-base"
              dir="ltr"
            >
              Prof. Suzan Mansour
            </strong>
            <span className="block text-xs font-bold text-teal" dir="ltr">
              EST Economics
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="التنقل الرئيسي"
        >
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex min-h-11 items-center rounded-xl px-4 text-sm font-bold text-slate-600 transition-colors hover:bg-slate-100 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={siteConfig.links.register}
          className="hidden min-h-11 items-center justify-center rounded-xl bg-teal px-5 text-sm font-extrabold text-white shadow-sm transition-colors hover:bg-emerald lg:inline-flex"
        >
          احجز مكانك في المجموعة
        </a>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-xl border border-slate-200 text-ink lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="التنقل على الهاتف"
        className={`${isOpen ? "grid" : "hidden"} border-t border-slate-200 bg-white px-4 pb-5 pt-3 lg:hidden`}
      >
        {siteConfig.navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            className="flex min-h-12 items-center border-b border-slate-100 px-2 font-bold text-slate-700 last:border-0"
          >
            {item.label}
          </a>
        ))}
        <a
          href={createWhatsAppUrl()}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-3 flex min-h-12 items-center justify-center rounded-xl bg-emerald px-5 text-center font-extrabold text-white"
        >
          اسأل على WhatsApp
        </a>
      </nav>
    </header>
  );
}
