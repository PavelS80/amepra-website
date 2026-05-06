import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt – AMEPRA",
  description:
    "Kontaktujte agenturu AMEPRA. Španělská 1073/10, Praha 2. Tel: +420 221 180 260. E-mail: info@amepra.cz.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #060d1a 0%, #0c1b33 60%, #1a3358 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.15em] mb-4"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Jsme tu pro vás
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Kontakt
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Napište nám nebo zavolejte. Rádi si vyslechneme váš projekt a
            navrhneme optimální řešení.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info column */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.15em] mb-3"
                style={{ color: "#1e73be" }}
              >
                Kontaktní informace
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#0c1b33" }}>
                Spojte se s námi
              </h2>
              <p
                className="text-base leading-relaxed mb-10"
                style={{ color: "#475569" }}
              >
                Jsme dostupní v pracovní dny od 9:00 do 18:00. Pro urgentní
                záležitosti volejte přímo na telefon.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#eff6ff" }}
                  >
                    <svg className="w-5 h-5" style={{ color: "#1e73be" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#94a3b8" }}>
                      Telefon
                    </p>
                    <a
                      href="tel:+420221180260"
                      className="text-base font-semibold hover:underline"
                      style={{ color: "#0c1b33" }}
                    >
                      +420 221 180 260
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#eff6ff" }}
                  >
                    <svg className="w-5 h-5" style={{ color: "#1e73be" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#94a3b8" }}>
                      E-mail
                    </p>
                    <a
                      href="mailto:info@amepra.cz"
                      className="text-base font-semibold hover:underline"
                      style={{ color: "#0c1b33" }}
                    >
                      info@amepra.cz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#eff6ff" }}
                  >
                    <svg className="w-5 h-5" style={{ color: "#1e73be" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#94a3b8" }}>
                      Adresa
                    </p>
                    <p className="text-base font-semibold" style={{ color: "#0c1b33" }}>
                      Španělská 1073/10
                      <br />
                      120 00 Praha 2
                      <br />
                      <span className="font-normal text-sm" style={{ color: "#64748b" }}>
                        Česká republika
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#eff6ff" }}
                  >
                    <svg className="w-5 h-5" style={{ color: "#1e73be" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#94a3b8" }}>
                      Pracovní doba
                    </p>
                    <p className="text-base font-semibold" style={{ color: "#0c1b33" }}>
                      Po – Pá: 9:00 – 18:00
                      <br />
                      <span className="font-normal text-sm" style={{ color: "#64748b" }}>
                        So – Ne: zavřeno
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div
                className="mt-10 rounded-2xl overflow-hidden border border-slate-100"
                style={{ height: "220px", backgroundColor: "#f1f5f9" }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-8 h-8 mx-auto mb-2" style={{ color: "#94a3b8" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                    <p className="text-sm font-medium" style={{ color: "#94a3b8" }}>
                      Španělská 1073/10, Praha 2
                    </p>
                    <a
                      href="https://maps.google.com/?q=Španělská+1073/10,+Praha+2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold mt-1 inline-block hover:underline"
                      style={{ color: "#1e73be" }}
                    >
                      Otevřít v Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form column */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.15em] mb-3"
                style={{ color: "#1e73be" }}
              >
                Napište nám
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#0c1b33" }}>
                Pošlete nám zprávu
              </h2>
              <p className="text-base mb-8" style={{ color: "#475569" }}>
                Vyplňte formulář a ozveme se vám do 24 hodin v pracovní dny.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
