import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
  preload: true,
});

export const metadata: Metadata = {
  title: "Prof. Suzan Mansour | كورس EST Economics لطلاب الأردن",
  description: "تعلّم EST Economics بالفهم والتطبيق مع Prof. Suzan Mansour...",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  keywords: [
    "EST Economics",
    "Economics Jordan",
    "اقتصاد EST",
    "طلاب الأردن",
    "Past Papers",
    "Prof. Suzan Mansour",
  ],
  openGraph: {
    type: "website",
    locale: "ar_JO",
    title: "Prof. Suzan Mansour | كورس EST Economics لطلاب الأردن",
    description:
      "تعلّم EST Economics بالفهم والتطبيق مع Prof. Suzan Mansour...",
    siteName: `${siteConfig.name} — ${siteConfig.courseName}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Prof. Suzan Mansour | كورس EST Economics لطلاب الأردن",
    description:
      "تعلّم EST Economics بالفهم والتطبيق مع Prof. Suzan Mansour...",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F2942",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-[family-name:var(--font-cairo)]">{children}</body>
    </html>
  );
}
