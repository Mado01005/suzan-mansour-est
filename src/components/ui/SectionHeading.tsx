import type { ReactNode } from "react";

interface SectionHeadingProps {
  readonly title: ReactNode;
  readonly description?: ReactNode;
  readonly align?: "center" | "start";
  readonly light?: boolean;
}

export function SectionHeading({
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-start";
  const textColor = light ? "text-white" : "text-ink";
  const descriptionColor = light ? "text-slate-300" : "text-slate-600";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <h2
        className={`text-balance text-3xl font-extrabold leading-[1.35] sm:text-4xl lg:text-5xl ${textColor}`}
      >
        {title}
      </h2>
      <span
        className="mt-5 block h-1 w-16 rounded-full bg-teal"
        aria-hidden="true"
      />
      {description ? (
        <p
          className={`mt-5 text-pretty text-base leading-8 sm:text-lg ${descriptionColor}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
