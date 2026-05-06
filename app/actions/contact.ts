"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_EMAIL ?? "info@amepra.cz";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "web@amepra.cz";

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const company = (formData.get("company") as string)?.trim();
  const subject = (formData.get("subject") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Vyplňte prosím povinná pole." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Zadejte platnou e-mailovou adresu." };
  }

  // If no API key is configured, skip actual sending in development
  if (!process.env.RESEND_API_KEY) {
    console.log("RESEND_API_KEY not set — skipping email send (dev mode)");
    return { status: "success" };
  }

  try {
    await resend.emails.send({
      from: `AMEPRA web <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Nová zpráva z webu: ${subject || "Kontaktní formulář"}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#0f172a">
          <div style="background:#0c1b33;padding:24px 32px;border-radius:12px 12px 0 0">
            <h1 style="color:white;margin:0;font-size:20px">Nová zpráva z webu AMEPRA</h1>
          </div>
          <div style="background:#f8fafc;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#64748b;font-size:13px;width:120px">Jméno</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#64748b;font-size:13px">E-mail</td><td style="padding:8px 0;font-weight:600"><a href="mailto:${email}" style="color:#1e73be">${email}</a></td></tr>
              ${phone ? `<tr><td style="padding:8px 0;color:#64748b;font-size:13px">Telefon</td><td style="padding:8px 0;font-weight:600">${phone}</td></tr>` : ""}
              ${company ? `<tr><td style="padding:8px 0;color:#64748b;font-size:13px">Společnost</td><td style="padding:8px 0;font-weight:600">${company}</td></tr>` : ""}
              ${subject ? `<tr><td style="padding:8px 0;color:#64748b;font-size:13px">Oblast</td><td style="padding:8px 0;font-weight:600">${subject}</td></tr>` : ""}
            </table>
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0"/>
            <p style="color:#64748b;font-size:13px;margin:0 0 8px">Zpráva</p>
            <p style="white-space:pre-wrap;margin:0;line-height:1.6">${message}</p>
          </div>
        </div>
      `,
    });

    // Send confirmation to the sender
    await resend.emails.send({
      from: `AMEPRA <${FROM_EMAIL}>`,
      to: email,
      subject: "Děkujeme za váši zprávu – AMEPRA",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#0f172a">
          <div style="background:#0c1b33;padding:24px 32px;border-radius:12px 12px 0 0">
            <h1 style="color:white;margin:0;font-size:20px">AMEPRA</h1>
          </div>
          <div style="background:#f8fafc;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0">
            <p>Dobrý den, <strong>${name}</strong>,</p>
            <p>děkujeme za vaši zprávu. Přijali jsme ji a ozveme se vám co nejdříve, zpravidla do 24 hodin v pracovní dny.</p>
            <p style="margin-top:24px">S pozdravem,<br/><strong>Tým AMEPRA</strong></p>
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0"/>
            <p style="color:#94a3b8;font-size:12px">AMEPRA s.r.o. · Španělská 1073/10, 120 00 Praha 2 · <a href="mailto:info@amepra.cz" style="color:#1e73be">info@amepra.cz</a> · +420 221 180 260</p>
          </div>
        </div>
      `,
    });

    return { status: "success" };
  } catch (err) {
    console.error("Email send error:", err);
    return {
      status: "error",
      message: "Nepodařilo se odeslat zprávu. Zkuste to prosím znovu nebo nás kontaktujte přímo.",
    };
  }
}
