interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass} mb-12 md:mb-16`}>
      {eyebrow && (
        <p
          className="text-xs font-semibold uppercase tracking-[0.15em] mb-3"
          style={{ color: light ? "rgba(255,255,255,0.6)" : "#1e73be" }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance"
        style={{ color: light ? "#ffffff" : "#0c1b33" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: light ? "rgba(255,255,255,0.7)" : "#475569" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
