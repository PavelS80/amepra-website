"use client";

import { useActionState } from "react";
import { sendContactEmail, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle" };

const labelClass = "block text-[10px] font-semibold uppercase tracking-[0.18em] mb-2";
const labelStyle = { color: "rgba(200,169,110,0.6)" };
const inputStyle = {
  backgroundColor: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#F0EDE6",
};
const inputFocusClass =
  "w-full px-4 py-3 rounded-xl text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(200,169,110,0.3)] focus:border-[rgba(200,169,110,0.4)] disabled:opacity-50 placeholder:text-[rgba(240,237,230,0.2)]";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: "rgba(200,169,110,0.06)", border: "1px solid rgba(200,169,110,0.2)" }}>
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, #A08040, #C8A96E)" }}>
          <svg className="w-7 h-7" style={{ color: "#06080E" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-bold mb-2" style={{ color: "#F0EDE6" }}>Zpráva odeslána</h3>
        <p className="text-sm" style={{ color: "rgba(240,237,230,0.5)" }}>
          Děkujeme za váš zájem. Ozveme se vám co nejdříve — zpravidla do 24 hodin v pracovní dny.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass} style={labelStyle}>Jméno a příjmení *</label>
          <input id="name" name="name" type="text" required disabled={isPending} placeholder="Jan Novák" className={inputFocusClass} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass} style={labelStyle}>E-mail *</label>
          <input id="email" name="email" type="email" required disabled={isPending} placeholder="jan@spolecnost.cz" className={inputFocusClass} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass} style={labelStyle}>Telefon</label>
          <input id="phone" name="phone" type="tel" disabled={isPending} placeholder="+420 000 000 000" className={inputFocusClass} style={inputStyle} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass} style={labelStyle}>Společnost</label>
          <input id="company" name="company" type="text" disabled={isPending} placeholder="Název společnosti" className={inputFocusClass} style={inputStyle} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClass} style={labelStyle}>Oblast zájmu</label>
        <select id="subject" name="subject" disabled={isPending} className={inputFocusClass} style={{ ...inputStyle, appearance: "none" } as React.CSSProperties}>
          <option value="" style={{ backgroundColor: "#0C1120" }}>Vyberte oblast</option>
          <option style={{ backgroundColor: "#0C1120" }}>Kongresy a konference</option>
          <option style={{ backgroundColor: "#0C1120" }}>Produkce akce</option>
          <option style={{ backgroundColor: "#0C1120" }}>Digitální komunikace</option>
          <option style={{ backgroundColor: "#0C1120" }}>Reklama a creative</option>
          <option style={{ backgroundColor: "#0C1120" }}>Výstavnictví</option>
          <option style={{ backgroundColor: "#0C1120" }}>Jiné</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass} style={labelStyle}>Zpráva *</label>
        <textarea id="message" name="message" required rows={5} disabled={isPending} placeholder="Popište nám váš projekt nebo dotaz..." className={`${inputFocusClass} resize-none`} style={inputStyle} />
      </div>

      {state.status === "error" && (
        <div className="flex items-start gap-3 px-4 py-3 rounded-xl text-sm" style={{ backgroundColor: "rgba(220,38,38,0.1)", color: "#f87171", border: "1px solid rgba(220,38,38,0.2)" }}>
          <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-4 rounded-xl text-sm font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 btn-gold"
      >
        {isPending ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Odesílám...
          </>
        ) : "Odeslat zprávu"}
      </button>

      <p className="text-xs text-center" style={{ color: "rgba(240,237,230,0.3)" }}>
        Odesláním souhlasíte se zpracováním osobních údajů za účelem odpovědi na váš dotaz.
      </p>
    </form>
  );
}
