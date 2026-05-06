"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate async submit — replace with real API call
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl p-10 text-center border border-slate-100 bg-slate-50">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: "#dcfce7" }}
        >
          <svg className="w-7 h-7" style={{ color: "#16a34a" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2" style={{ color: "#0c1b33" }}>
          Zpráva odeslána
        </h3>
        <p className="text-sm" style={{ color: "#64748b" }}>
          Děkujeme za váš zájem. Ozveme se vám co nejdříve.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:border-transparent bg-white";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
            Jméno a příjmení *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jan Novák"
            className={inputClass}
            style={{ "--tw-ring-color": "#1e73be" } as React.CSSProperties}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
            E-mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jan@spolecnost.cz"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+420 000 000 000"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
            Společnost
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Název společnosti"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
          Oblast zájmu
        </label>
        <select
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Vyberte oblast</option>
          <option>Kongresy a konference</option>
          <option>Produkce akce</option>
          <option>Digitální komunikace</option>
          <option>Reklama a creative</option>
          <option>Výstavnictví</option>
          <option>Jiné</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
          Zpráva *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Popište nám váš projekt nebo dotaz..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 rounded-xl text-sm font-semibold text-white transition-all duration-200 disabled:opacity-70 hover:opacity-90"
        style={{ backgroundColor: "#0c1b33" }}
      >
        {status === "sending" ? "Odesílám..." : "Odeslat zprávu"}
      </button>

      <p className="text-xs text-center" style={{ color: "#94a3b8" }}>
        Odesláním souhlasíte se zpracováním osobních údajů.
      </p>
    </form>
  );
}
