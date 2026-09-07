import { About } from "@/components/landing/About";
import { Audience } from "@/components/landing/Audience";
import { Deliverables } from "@/components/landing/Deliverables";
import { EconomicsConcepts } from "@/components/landing/EconomicsConcepts";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Methodology } from "@/components/landing/Methodology";
import { MobileStickyCta } from "@/components/landing/MobileStickyCta";
import { Registration } from "@/components/landing/Registration";
import { Roadmap } from "@/components/landing/Roadmap";
import { SmallGroups } from "@/components/landing/SmallGroups";
import { Testimonials } from "@/components/landing/Testimonials";
import { faqItems, siteConfig } from "@/config/siteConfig";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "EST Economics Educator",
    description:
      "مدرّسة متخصصة في EST Economics لطلاب الأردن منذ يوليو 2023، بخلفية أكاديمية في المحاسبة وإدارة الأعمال والتربية.",
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Alexandria University" },
      {
        "@type": "CollegeOrUniversity",
        name: "Arab Academy for Science, Technology and Maritime Transport",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${siteConfig.courseName} لطلاب الأردن`,
    description: siteConfig.description,
    inLanguage: ["ar", "en"],
    provider: {
      "@type": "Person",
      name: siteConfig.name,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      location: {
        "@type": "VirtualLocation",
        name: "Online — Jordan time",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Escaping '<' prevents user agents from interpreting JSON content as markup. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <About />
        <EconomicsConcepts />
        <Roadmap />
        <Deliverables />
        <SmallGroups />
        <Methodology />
        <Testimonials />
        <Audience />
        <Faq />
        <Registration />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
