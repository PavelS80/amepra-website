"use client";

import { useActionState } from "react";
import { sendContactEmail, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);

  if (state.status === "success") {
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
          Děkujeme za váš zájem. Ozveme se vám co nejdříve — zpravidla do 24 hodin v pracovní dny.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 bg-white disabled:opacity-60";

  return (
    <form action={formAction} className="space-y-5" noValidate>
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
            disabled={isPending}
            placeholder="Jan Novák"
            className={inputClass}
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
            disabled={isPending}
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
            disabled={isPending}
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
            disabled={isPending}
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
          disabled={isPending}
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
          disabled={isPending}
          placeholder="Popište nám váš projekt nebo dotaz..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {state.status === "error" && (
        <div
          className="flex items-start gap-3 px-4 py-3 rounded-xl text-sm"
          style={{ backgroundColor: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca" }}
        >
          <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-4 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        style={{ backgroundColor: "#0c1b33" }}
      >
        {isPending ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Odesílám...
          </>
        ) : (
          "Odeslat zprávu"
        )}
      </button>

      <p className="text-xs text-center" style={{ color: "#94a3b8" }}>
        Odesláním souhlasíte se{" "}
        <span style={{ color: "#64748b" }}>zpracováním osobních údajů</span>{" "}
        za účelem odpovědi na váš dotaz.
      </p>
    </form>
  );
}
