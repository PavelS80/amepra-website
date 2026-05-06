import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "O nás – AMEPRA",
  description: "Marketingová a produkční agentura specializující se na zdravotnický sektor od roku 2008. Exkluzivní zaměření, inovace a přes 16 let zkušeností.",
};

const whyReasons = [
  { title: "Exkluzivní působnost ve zdravotnictví", body: "Nepracujeme pro nikoho jiného. Výhradní zaměření na zdravotnický sektor nám dává hloubku znalostí, kterou generalisté nemohou dosáhnout." },
  { title: "Inovace a moderní technologie", body: "Webináře, VR aplikace, live broadcasting, interaktivní hlasování — jsme mezi prvními, kdo přinesl tyto technologie do medicínského prostředí." },
  { title: "Přes 16 let zkušeností", body: "Od roku 2008 nepřetržitě a výhradně v zdravotnickém sektoru. Každý projekt obohacen o zkušenosti z desítek předchozích realizací." },
  { title: "Akademické zaměření", body: "Rozumíme vědecké a odborné rovině zdravotnické komunikace. Spolupracujeme s předními lékaři a akademiky." },
  { title: "Perfektní znalost trhu", body: "Známe českou i slovenskou zdravotnickou komunitu, farmaceutický trh a jeho specifika do hloubky." },
  { title: "Komplexní kongresové služby", body: "Od výběru místa konání přes vědecký program, registraci, ubytování, catering až po závěrečné vyhodnocení — vše pod jednou střechou." },
  { title: "Kvalifikovaní pracovníci", body: "Náš tým tvoří specialisté s hlubokými znalostmi zdravotnického sektoru, marketingu, event managementu a digitálních technologií." },
  { title: "Individuální přístup", body: "Každou zakázku zajišťuje jeden konkrétní projektový manažer — vaše jediná kontaktní osoba po celou dobu projektu." },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO — photo background */}
      <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-mic.jpg" alt="AMEPRA" fill className="object-cover object-center" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(6,8,14,0.6) 0%, rgba(6,8,14,0.75) 40%, rgba(6,8,14,0.97) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-24 pt-48 w-full">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-6" style={{ color: "#C8A96E" }}>O společnosti</p>
            <h1 className="font-display font-bold leading-[0.95] mb-8" style={{ fontSize: "clamp(52px, 8vw, 112px)", color: "#F0EDE6" }}>
              Zdravotnictví<br />je náš svět.<br /><em className="not-italic shimmer-gold">Od roku 2008.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-lg max-w-2xl" style={{ color: "rgba(240,237,230,0.65)" }}>
              AMEPRA je marketingová a produkční agentura specializující se na poskytování služeb pro farmaceutický průmysl, odborné lékařské společnosti, státní instituce a neziskový sektor v oblasti zdravotnictví.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="flex flex-wrap gap-10 mt-14 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              {[
                { to: 16, suffix: "+", label: "let na trhu" },
                { to: 100, suffix: "+", label: "kongresů" },
                { to: 50, suffix: "+", label: "klientů" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-4xl font-bold gradient-text mb-1"><Counter to={s.to} suffix={s.suffix} /></div>
                  <p className="text-sm" style={{ color: "rgba(240,237,230,0.4)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MISSION TEXT */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#090D1A" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#C8A96E" }}>Naše poslání</p>
                <h2 className="font-display font-bold leading-[1.05]" style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "#F0EDE6" }}>
                  Specializace,<br />která přináší<br /><em className="not-italic shimmer-gold">výsledky.</em>
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-7 space-y-6">
              {[
                "AMEPRA je marketingová a produkční agentura, která od svého vzniku v roce 2008 působí výhradně v zdravotnickém sektoru. Tato exkluzivní specializace nám umožňuje nabídnout hlubší znalosti a výsledky, které generalisté jednoduše nemohou dosáhnout.",
                "Spolupracujeme s farmaceutickými společnostmi, odbornými lékařskými společnostmi, státními institucemi a zdravotnickými neziskovými organizacemi. Náš přístup ke každému klientovi, každému produktu či akci je naprosto jedinečný, etický a profesionální.",
                "Jsme moderní agentura řadící se mezi TOP společnosti na českém a slovenském trhu. Za více než 16 let jsme realizovali přes 100 kongresů a konferencí — každý s maximálním nasazením a individuálním přístupem.",
              ].map((text, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <p className="text-base leading-relaxed" style={{ color: "rgba(240,237,230,0.6)" }}>{text}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROČ AMEPRA — full list */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#06080E" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-4" style={{ color: "#C8A96E" }}>Důvody ke spolupráci</p>
            <h2 className="font-display font-bold mb-16" style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "#F0EDE6" }}>
              Proč AMEPRA?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyReasons.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.06}>
                <div className="group p-7 rounded-2xl h-full transition-all duration-300" style={{ backgroundColor: "#0C1120", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="flex items-start gap-4">
                    <span className="font-display text-2xl font-bold flex-shrink-0 mt-0.5 w-8" style={{ color: "rgba(200,169,110,0.25)" }}>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-base font-bold mb-2" style={{ color: "#F0EDE6" }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,230,0.5)" }}>{item.body}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #080C18, #0C1525)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(200,169,110,0.06), transparent)" }} />
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <FadeIn>
            <h2 className="font-display font-bold mb-6" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", color: "#F0EDE6", lineHeight: 1.1 }}>
              Chcete s námi<br /><em className="not-italic shimmer-gold">spolupracovat?</em>
            </h2>
            <p className="text-lg mb-10" style={{ color: "rgba(240,237,230,0.5)" }}>Ozvěte se nám a probereme vaše potřeby.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/kontakt" className="px-8 py-4 rounded-xl text-sm font-semibold btn-gold">Kontaktovat nás</Link>
              <Link href="/sluzby" className="px-8 py-4 rounded-xl text-sm font-medium btn-outline">Naše služby</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
