import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ icon, title, description, href = "/sluzby" }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col p-6 md:p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
        style={{ backgroundColor: "#f1f5f9", color: "#1e73be" }}
      >
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2" style={{ color: "#0c1b33" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed flex-1" style={{ color: "#64748b" }}>
        {description}
      </p>
      <div className="mt-4 flex items-center gap-1 text-sm font-semibold transition-all duration-200 group-hover:gap-2" style={{ color: "#1e73be" }}>
        Více informací
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
      {/* Subtle border highlight on hover */}
      <div
        className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ borderColor: "#1e73be" }}
      />
    </Link>
  );
}
