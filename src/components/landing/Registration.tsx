"use client";

import { type FormEvent, useRef, useState } from "react";
import {
  CheckCircle2,
  Clock3,
  MessageCircle,
  Send,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { createWhatsAppUrl, siteConfig } from "@/config/siteConfig";

type SubmitStatus = "idle" | "submitting" | "ready";

const fieldClassName =
  "mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-ink placeholder:text-slate-400 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20";

function getString(formData: FormData, name: string): string {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function buildRegistrationMessage(formData: FormData): string {
  // Keep the payload human-readable: the user reviews it inside WhatsApp before sending.
  const lines = [
    "مرحبًا Prof. Suzan، أريد التسجيل في كورس EST Economics.",
    "",
    `اسم الطالب: ${getString(formData, "studentName")}`,
    `رقم WhatsApp: ${getString(formData, "countryCode")} ${getString(formData, "whatsappNumber")}`,
    `البريد الإلكتروني: ${getString(formData, "email")}`,
    `الصف الدراسي: ${getString(formData, "gradeLevel")}`,
    `موعد امتحان EST المستهدف: ${getString(formData, "examDate")}`,
    `درست Economics من قبل: ${getString(formData, "priorStudy")}`,
    `المستوى الحالي / آخر علامة: ${getString(formData, "currentLevel") || "غير محدد"}`,
    `أضعف موضوع: ${getString(formData, "weakestTopic")}`,
    `الوقت المفضل: ${getString(formData, "preferredTime")}`,
    `طريقة التواصل المفضلة: ${getString(formData, "preferredContact")}`,
    `ملاحظات: ${getString(formData, "notes") || "لا توجد"}`,
  ];

  return lines.join("\n");
}

export function Registration() {
  const formRef = useRef<HTMLFormElement>(null);
  const submissionLock = useRef(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] =
    useState(createWhatsAppUrl());

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // A ref-based lock closes the same-tick double-tap window without creating parallel UI state.
    if (submissionLock.current) return;

    submissionLock.current = true;
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    setPreparedWhatsAppUrl(
      createWhatsAppUrl(buildRegistrationMessage(formData)),
    );
    setStatus("ready");
    submissionLock.current = false;

    requestAnimationFrame(() => {
      document.getElementById("registration-success")?.focus();
    });
  };

  const resetForm = () => {
    formRef.current?.reset();
    setPreparedWhatsAppUrl(createWhatsAppUrl());
    setStatus("idle");
  };

  return (
    <section id="register" className="bg-mist py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_22rem]">
          <div>
            <h2 className="text-balance text-3xl font-black leading-[1.4] text-ink sm:text-4xl lg:text-5xl">
              جاهز تبدأ <span dir="ltr">EST Economics</span> بثقة؟
            </h2>
            <span
              className="mt-5 block h-1 w-16 rounded-full bg-teal"
              aria-hidden="true"
            />
            <p className="mt-5 max-w-3xl text-pretty text-base leading-8 text-slate-600 sm:text-lg">
              الأماكن محدودة لأن عدد الطلاب في كل مجموعة لا يتجاوز 10 طلاب. سجّل
              بياناتك، وسنتواصل معك لتحديد المجموعة المناسبة.
            </p>

            {status === "ready" ? (
              <div
                id="registration-success"
                tabIndex={-1}
                role="status"
                aria-live="polite"
                className="mt-9 rounded-[2rem] border border-emerald/40 bg-white p-7 shadow-card sm:p-10"
              >
                <CheckCircle2
                  className="size-14 text-emerald"
                  aria-hidden="true"
                  strokeWidth={1.7}
                />
                <h3 className="mt-5 text-2xl font-black text-ink">
                  تم تجهيز بياناتك بنجاح
                </h3>
                <p className="mt-3 max-w-2xl leading-8 text-slate-600">
                  حفاظًا على بياناتك، لم يتم تخزينها على الموقع. اضغط الزر
                  التالي لإرسال الطلب مباشرة عبر WhatsApp وإتمام التسجيل.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={preparedWhatsAppUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-emerald px-6 text-center font-extrabold text-white hover:bg-teal"
                  >
                    <MessageCircle className="size-5" aria-hidden="true" />
                    أرسل طلبي الآن عبر WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="min-h-14 rounded-2xl border border-slate-300 bg-white px-6 font-extrabold text-ink hover:bg-slatefill"
                  >
                    تعديل البيانات
                  </button>
                </div>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-9 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-card sm:p-8"
                noValidate={false}
              >
                <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
                  <label className="block text-sm font-extrabold text-ink">
                    اسم الطالب الكامل
                    <input
                      className={fieldClassName}
                      type="text"
                      name="studentName"
                      autoComplete="name"
                      placeholder="اكتب اسمك الكامل"
                      required
                      maxLength={100}
                    />
                  </label>

                  <fieldset>
                    <legend className="text-sm font-extrabold text-ink">
                      رقم WhatsApp مع كود الدولة
                    </legend>
                    <div
                      className="mt-2 grid grid-cols-[5.5rem_1fr] gap-2"
                      dir="ltr"
                    >
                      <input
                        className="min-h-12 rounded-xl border border-slate-300 bg-white px-3 text-center text-sm text-ink focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                        type="text"
                        name="countryCode"
                        defaultValue="+962"
                        inputMode="tel"
                        aria-label="كود الدولة"
                        required
                        maxLength={6}
                        pattern="\+[0-9]{1,4}"
                      />
                      <input
                        className="min-h-12 rounded-xl border border-slate-300 bg-white px-4 text-sm text-ink placeholder:text-slate-400 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                        type="tel"
                        name="whatsappNumber"
                        autoComplete="tel-national"
                        placeholder="7XXXXXXXX"
                        aria-label="رقم WhatsApp"
                        required
                        minLength={7}
                        maxLength={15}
                        pattern="[0-9 ]{7,15}"
                      />
                    </div>
                  </fieldset>

                  <label className="block text-sm font-extrabold text-ink">
                    البريد الإلكتروني
                    <input
                      className={fieldClassName}
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="name@example.com"
                      dir="ltr"
                      required
                      maxLength={160}
                    />
                  </label>

                  <label className="block text-sm font-extrabold text-ink">
                    الصف الدراسي
                    <select
                      className={fieldClassName}
                      name="gradeLevel"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        اختر الصف
                      </option>
                      {siteConfig.gradeLevels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block text-sm font-extrabold text-ink">
                    التاريخ المستهدف لامتحان EST
                    <input
                      className={fieldClassName}
                      type="date"
                      name="examDate"
                      required
                    />
                  </label>

                  <fieldset>
                    <legend className="text-sm font-extrabold text-ink">
                      هل درست Economics سابقًا؟
                    </legend>
                    <div className="mt-2 grid min-h-12 grid-cols-2 overflow-hidden rounded-xl border border-slate-300">
                      <label className="flex cursor-pointer items-center justify-center gap-2 border-e border-slate-300 px-3 text-sm font-bold text-ink has-[:checked]:bg-teal has-[:checked]:text-white">
                        <input
                          className="sr-only"
                          type="radio"
                          name="priorStudy"
                          value="نعم"
                          required
                        />
                        نعم
                      </label>
                      <label className="flex cursor-pointer items-center justify-center gap-2 px-3 text-sm font-bold text-ink has-[:checked]:bg-teal has-[:checked]:text-white">
                        <input
                          className="sr-only"
                          type="radio"
                          name="priorStudy"
                          value="لا"
                          required
                        />
                        لا
                      </label>
                    </div>
                  </fieldset>

                  <label className="block text-sm font-extrabold text-ink">
                    مستواك الحالي أو آخر علامة حصلت عليها
                    <input
                      className={fieldClassName}
                      type="text"
                      name="currentLevel"
                      placeholder="مثال: مبتدئ / 70 / لا توجد علامة"
                      maxLength={120}
                    />
                  </label>

                  <label className="block text-sm font-extrabold text-ink">
                    أضعف موضوع لديك
                    <select
                      className={fieldClassName}
                      name="weakestTopic"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        اختر موضوعًا
                      </option>
                      {siteConfig.weakTopics.map((topic) => (
                        <option key={topic} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block text-sm font-extrabold text-ink">
                    الفترة الزمنية المفضلة
                    <select
                      className={fieldClassName}
                      name="preferredTime"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        اختر الفترة
                      </option>
                      {siteConfig.preferredTimes.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    <span className="mt-1 block text-xs font-medium text-slate-500">
                      {siteConfig.schedule.label}
                    </span>
                  </label>

                  <label className="block text-sm font-extrabold text-ink">
                    طريقة التواصل المفضلة
                    <select
                      className={fieldClassName}
                      name="preferredContact"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        اختر الطريقة
                      </option>
                      {siteConfig.contactMethods.map((method) => (
                        <option key={method} value={method}>
                          {method}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block text-sm font-extrabold text-ink sm:col-span-2">
                    ملاحظات (إن وجدت)
                    <textarea
                      className={`${fieldClassName} min-h-28 resize-y py-3`}
                      name="notes"
                      placeholder="اكتب أي معلومة تساعدنا في اختيار المجموعة المناسبة…"
                      maxLength={700}
                    />
                  </label>
                </div>

                <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-xl bg-mist p-4 text-sm font-medium leading-6 text-slate-700">
                  <input
                    className="mt-1 size-5 shrink-0 accent-teal"
                    type="checkbox"
                    name="privacyConsent"
                    required
                  />
                  <span>
                    أوافق على استخدام بياناتي فقط للتواصل بخصوص برنامج EST
                    Economics وتحديد المجموعة المناسبة. قرأت{" "}
                    <a
                      href={siteConfig.links.privacy}
                      className="inline-flex min-h-11 items-center font-extrabold text-teal underline underline-offset-4"
                    >
                      سياسة الخصوصية
                    </a>
                    .
                  </span>
                </label>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex min-h-14 flex-1 items-center justify-center gap-2 rounded-2xl bg-teal px-6 font-extrabold text-white hover:bg-emerald disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Send className="size-5" aria-hidden="true" />
                    {status === "submitting"
                      ? "جارٍ تجهيز الطلب…"
                      : "جهّز طلب التسجيل"}
                  </button>
                  <a
                    href={createWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-teal bg-white px-6 text-center font-extrabold text-teal hover:bg-mist"
                  >
                    <MessageCircle className="size-5" aria-hidden="true" />
                    تواصل سريع عبر WhatsApp
                  </a>
                </div>
                <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs leading-5 text-slate-500">
                  <ShieldCheck className="size-4 shrink-0" aria-hidden="true" />
                  بياناتك لا تُرسل أو تُخزّن حتى تضغط الإرسال داخل WhatsApp.
                </p>
              </form>
            )}
          </div>

          <aside className="rounded-[2rem] border border-teal/30 bg-white p-7 shadow-card lg:sticky lg:top-28">
            <h3 className="text-2xl font-black text-ink">ماذا يحدث بعد ذلك؟</h3>
            <ul className="mt-7 space-y-6">
              <li className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-teal text-white">
                  <MessageCircle className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <strong className="block text-ink">مراجعة سريعة</strong>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    نراجع بياناتك وموعد امتحانك.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ink text-white">
                  <Clock3 className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <strong className="block text-ink">موعد مناسب</strong>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    نقترح المجموعة الأقرب لمستواك ووقتك.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-amber text-ink">
                  <UsersRound className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <strong className="block text-ink">مجموعة صغيرة</strong>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    بحد أقصى {siteConfig.stats.maxGroupSize} طلاب في المجموعة.
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="text-sm font-extrabold text-slate-500">الرسوم</p>
              <p className="mt-1 font-black leading-7 text-ink">
                {siteConfig.pricing.display}
              </p>
              <p className="mt-5 text-sm font-extrabold text-slate-500">
                المواعيد
              </p>
              <p className="mt-1 font-black leading-7 text-ink">
                {siteConfig.schedule.display}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
