import {
  Camera,
  GraduationCap,
  Mail,
  MessageCircle,
  Tv,
  Users,
} from "lucide-react";
import {
  createEmailUrl,
  createWhatsAppUrl,
  siteConfig,
} from "@/config/siteConfig";

const socialIcons = {
  Instagram: Camera,
  YouTube: Tv,
  Facebook: Users,
} as const;

export function Footer() {
  return (
    <footer className="bg-ink pb-28 pt-14 text-white md:pb-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-2xl bg-teal text-white">
                <GraduationCap
                  className="size-7"
                  aria-hidden="true"
                  strokeWidth={1.7}
                />
              </span>
              <div>
                <strong className="block text-lg font-black" dir="ltr">
                  Prof. Suzan Mansour
                </strong>
                <span className="text-sm font-bold text-teal" dir="ltr">
                  EST Economics
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              شرح مبسّط، فهم عميق، وتدريب حقيقي يساعدك تدخل الامتحان بخطة واضحة.
            </p>
          </div>

          <nav aria-label="روابط سريعة">
            <h2 className="font-black">روابط سريعة</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {siteConfig.navigation.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <a
                    className="inline-flex min-h-11 items-center hover:text-teal"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  className="inline-flex min-h-11 items-center hover:text-teal"
                  href={siteConfig.links.register}
                >
                  التسجيل
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-black">تواصل معنا</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-11 items-center gap-3 hover:text-teal"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={createEmailUrl("استفسار عن كورس EST Economics")}
                  className="inline-flex min-h-11 items-center gap-3 hover:text-teal"
                >
                  <Mail className="size-5" aria-hidden="true" />
                  البريد الإلكتروني
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-black">الحسابات الاجتماعية</h2>
            <div className="mt-5 flex gap-3">
              {siteConfig.socialProfiles.map((profile) => {
                const Icon = socialIcons[profile.label];
                return profile.href ? (
                  <a
                    key={profile.label}
                    href={profile.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={profile.label}
                    className="grid size-11 place-items-center rounded-full border border-white/20 text-white hover:border-teal hover:text-teal"
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </a>
                ) : (
                  <span
                    key={profile.label}
                    role="img"
                    aria-label={`${profile.label}: ${profile.handle}`}
                    className="grid size-11 place-items-center rounded-full border border-white/15 text-slate-500"
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                );
              })}
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-400">
              تُضاف الروابط الرسمية بعد التحقق منها.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 py-7 text-xs leading-6 text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. جميع الحقوق محفوظة.
          </p>
          <nav
            className="flex flex-wrap gap-x-5 gap-y-2"
            aria-label="السياسات القانونية"
          >
            <a href={siteConfig.links.privacy} className="min-h-11 hover:text-white">
              سياسة الخصوصية
            </a>
            <a href={siteConfig.links.terms} className="min-h-11 hover:text-white">
              الشروط والأحكام
            </a>
          </nav>
        </div>

        <p className="border-t border-white/10 pt-6 text-center text-xs leading-6 text-slate-400">
          جميع العلامات والأسماء التجارية المذكورة تخص أصحابها، وهذا الموقع
          تعريفي بخدمات Prof. Suzan Mansour التعليمية.
        </p>
      </div>
    </footer>
  );
}
