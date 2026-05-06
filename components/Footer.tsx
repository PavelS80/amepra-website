import Link from "next/link";

const services = [
  "Produkce",
  "Kongresy a konference",
  "Reklama a creative",
  "Digitální komunikace",
  "Kongresová sympozia",
  "Výstavnictví",
  "Technické zajištění akcí",
];

const navLinks = [
  { href: "/", label: "Úvod" },
  { href: "/o-nas", label: "O nás" },
  { href: "/sluzby", label: "Služby" },
  { href: "/akce", label: "Akce" },
  { href: "/reference", label: "Reference" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#030508" }}>
      {/* Top gold line */}
      <div className="divider-gold" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main grid */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-6">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{ background: "linear-gradient(135deg, #A08040, #C8A96E)", color: "#06080E" }}
              >
                A
              </div>
              <span className="text-lg font-bold tracking-tight text-white">AMEPRA</span>
            </div>
            <p className="text-sm leading-relaxed mb-7" style={{ color: "rgba(240,237,230,0.45)" }}>
              Marketingová a produkční agentura exkluzivně zaměřená na zdravotnický sektor. Více než 16 let zkušeností.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+420221180260"
                className="flex items-center gap-2.5 text-sm transition-colors hover:text-white"
                style={{ color: "rgba(240,237,230,0.55)" }}
              >
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#C8A96E" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +420 221 180 260
              </a>
              <a
                href="mailto:info@amepra.cz"
                className="flex items-center gap-2.5 text-sm transition-colors hover:text-white"
                style={{ color: "rgba(240,237,230,0.55)" }}
              >
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#C8A96E" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                info@amepra.cz
              </a>
              <p className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(240,237,230,0.55)" }}>
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#C8A96E" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Španělská 1073/10,<br />120 00 Praha 2
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-5" style={{ color: "rgba(200,169,110,0.5)" }}>
              Navigace
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(240,237,230,0.5)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-5" style={{ color: "rgba(200,169,110,0.5)" }}>
              Naše služby
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/sluzby"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "rgba(240,237,230,0.5)" }}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "rgba(240,237,230,0.25)" }}>
            © {new Date().getFullYear()} AMEPRA s.r.o. Všechna práva vyhrazena.
          </p>
          <p className="text-xs" style={{ color: "rgba(240,237,230,0.25)" }}>
            Španělská 1073/10, 120 00 Praha 2
          </p>
        </div>
      </div>
    </footer>
  );
}
