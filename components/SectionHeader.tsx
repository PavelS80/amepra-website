interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleItalic?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ eyebrow, title, titleItalic, subtitle, align = "center" }: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass} mb-14 md:mb-20`}>
      {eyebrow && (
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-4"
          style={{ color: "#C8A96E" }}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.1]" style={{ color: "#F0EDE6" }}>
        {title}
        {titleItalic && (
          <>
            {" "}
            <em className="not-italic shimmer-gold">{titleItalic}</em>
          </>
        )}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(240,237,230,0.5)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
