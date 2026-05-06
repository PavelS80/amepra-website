import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #060d1a 0%, #0c1b33 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative z-10 text-center px-4">
        <p
          className="text-8xl md:text-9xl font-bold mb-4"
          style={{ color: "rgba(255,255,255,0.08)" }}
        >
          404
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 -mt-10">
          Stránka nenalezena
        </h1>
        <p className="mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
          Omlouváme se, tato stránka neexistuje nebo byla přesunuta.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
          style={{ backgroundColor: "#1e73be" }}
        >
          ← Zpět na úvodní stránku
        </Link>
      </div>
    </section>
  );
}
