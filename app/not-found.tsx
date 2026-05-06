import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden noise-overlay" style={{ background: "linear-gradient(160deg, #06080E 0%, #0A1220 60%, #06080E 100%)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(200,169,110,0.05), transparent)" }} />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(200,169,110,0.8) 1px, transparent 0)", backgroundSize: "48px 48px" }} />
      <div className="relative z-10 text-center px-5">
        <p className="text-[160px] md:text-[220px] font-bold leading-none mb-0 select-none" style={{ color: "rgba(200,169,110,0.06)", fontFamily: "var(--font-playfair)" }}>
          404
        </p>
        <div className="-mt-8 md:-mt-12">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: "#F0EDE6" }}>Stránka nenalezena</h1>
          <p className="text-base mb-10" style={{ color: "rgba(240,237,230,0.45)" }}>
            Omlouváme se, tato stránka neexistuje nebo byla přesunuta.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold btn-gold">
            ← Zpět na úvodní stránku
          </Link>
        </div>
      </div>
    </section>
  );
}
