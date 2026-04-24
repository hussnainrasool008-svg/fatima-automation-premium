import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) => {
  return (
    <div
      className={`max-w-3xl mb-14 ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 bg-primary/60" />
          {eyebrow}
          <span className="h-px w-8 bg-primary/60" />
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
