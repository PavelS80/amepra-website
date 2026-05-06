import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number?: string;
  href?: string;
}

export default function ServiceCard({ icon, title, description, number, href = "/sluzby" }: ServiceCardProps) {
  return (
    <Link href={href} className="group relative flex flex-col p-7 glass-card rounded-2xl overflow-hidden">
      {/* Decorative number */}
      {number && (
        <span
          className="absolute top-4 right-5 font-display text-6xl font-bold select-none pointer-events-none transition-opacity duration-300 group-hover:opacity-70"
          style={{ color: "rgba(200,169,110,0.06)", lineHeight: 1 }}
        >
          {number}
        </span>
      )}

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: "rgba(200,169,110,0.1)", color: "#C8A96E" }}
      >
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-base font-bold mb-2" style={{ color: "#F0EDE6" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(240,237,230,0.5)" }}>
        {description}
      </p>

      {/* Arrow */}
      <div
        className="mt-5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 group-hover:gap-2.5"
        style={{ color: "#C8A96E" }}
      >
        Více
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>

      {/* Bottom gold accent line */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: "linear-gradient(90deg, #C8A96E, #E2C07C)" }}
      />
    </Link>
  );
}
