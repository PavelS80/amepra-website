import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Kontakt – AMEPRA",
  description: "Kontaktujte agenturu AMEPRA. Španělská 1073/10, Praha 2. Tel: +420 221 180 260. E-mail: info@amepra.cz.",
};

const contactItems = [
  {
    label: "Telefon",
    value: "+420 221 180 260",
    href: "tel:+420221180260",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>,
  },
  {
    label: "E-mail",
    value: "info@amepra.cz",
    href: "mailto:info@amepra.cz",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
  },
  {
    label: "Adresa",
    value: "Španělská 1073/10\n120 00 Praha 2",
    href: "https://maps.google.com/?q=Španělská+1073/10+Praha+2",
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
  },
  {
    label: "Pracovní doba",
    value: "Po – Pá: 9:00 – 18:00",
    href: null,
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-36 pb-24 overflow-hidden noise-overlay" style={{ background: "linear-gradient(160deg, #06080E 0%, #0A1220 60%, #06080E 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at 50% 80%, rgba(200,169,110,0.05), transparent)" }} />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#C8A96E" }}>Jsme tu pro vás</p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-6" style={{ color: "#F0EDE6" }}>Kontakt</h1>
            <p className="text-lg max-w-2xl" style={{ color: "rgba(240,237,230,0.5)" }}>Napište nám nebo zavolejte. Rádi si vyslechneme váš projekt a navrhneme optimální řešení.</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32" style={{ backgroundColor: "#090D1A" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Info */}
            <div>
              <FadeIn>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-3" style={{ color: "#C8A96E" }}>Kontaktní informace</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6" style={{ color: "#F0EDE6" }}>
                  Spojte se<br /><em className="not-italic shimmer-gold">s námi</em>
                </h2>
                <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(240,237,230,0.5)" }}>
                  Dostupní v pracovní dny od 9:00 do 18:00. Pro urgentní záležitosti volejte přímo.
                </p>
              </FadeIn>

              <div className="space-y-4">
                {contactItems.map((item, i) => (
                  <FadeIn key={item.label} delay={i * 0.08}>
                    <div
                      className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300"
                      style={{ backgroundColor: "#0C1120", border: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(200,169,110,0.1)", color: "#C8A96E" }}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: "rgba(200,169,110,0.5)" }}>{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-base font-semibold transition-colors hover:text-yellow-300 whitespace-pre-line" style={{ color: "#F0EDE6" }}>
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-base font-semibold whitespace-pre-line" style={{ color: "#F0EDE6" }}>{item.value}</p>
                        )}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* Map placeholder */}
              <FadeIn delay={0.4}>
                <div
                  className="mt-6 rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{ height: 180, backgroundColor: "#0C1120", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="text-center">
                    <svg className="w-7 h-7 mx-auto mb-2" style={{ color: "#C8A96E" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                    <p className="text-xs font-medium mb-1" style={{ color: "rgba(240,237,230,0.4)" }}>Španělská 1073/10, Praha 2</p>
                    <a href="https://maps.google.com/?q=Španělská+1073/10,+Praha+2" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold hover:underline" style={{ color: "#C8A96E" }}>
                      Otevřít v Google Maps →
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Form */}
            <FadeIn direction="left" delay={0.15}>
              <div className="p-8 md:p-10 rounded-3xl" style={{ backgroundColor: "#0C1120", border: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-3" style={{ color: "#C8A96E" }}>Napište nám</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-2" style={{ color: "#F0EDE6" }}>Pošlete zprávu</h2>
                <p className="text-sm mb-8" style={{ color: "rgba(240,237,230,0.45)" }}>Ozveme se do 24 hodin v pracovní dny.</p>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
