import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter =
  process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD
    ? nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      })
    : null;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body._honeypot) {
      return NextResponse.json({ ok: true });
    }

    const { name, email, phone, role, kindergarten, message } = body;
    const roleLabel =
      role === "director" ? "Bērnudārza vadītājs/a" : "Vecāks";

    if (transporter) {
      await transporter.sendMail({
        from: `"EDUO mājaslapa" <${process.env.GMAIL_USER}>`,
        to: "interesu@eduo.me",
        replyTo: email,
        subject: `Jauns pieteikums — ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;color:#1a202c">
            <h2 style="color:#00AEEF;margin-bottom:24px">
              Jauns pieteikums — eduo.lv
            </h2>
            <table style="border-collapse:collapse;width:100%;font-size:15px">
              <tr>
                <td style="padding:10px 12px;font-weight:600;color:#6b7280;width:150px">Vārds</td>
                <td style="padding:10px 12px">${name}</td>
              </tr>
              <tr style="background:#f9fafb">
                <td style="padding:10px 12px;font-weight:600;color:#6b7280">E-pasts</td>
                <td style="padding:10px 12px">
                  <a href="mailto:${email}" style="color:#00AEEF">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding:10px 12px;font-weight:600;color:#6b7280">Telefons</td>
                <td style="padding:10px 12px">${phone}</td>
              </tr>` : ""}
              <tr style="background:#f9fafb">
                <td style="padding:10px 12px;font-weight:600;color:#6b7280">Loma</td>
                <td style="padding:10px 12px">${roleLabel}</td>
              </tr>
              ${kindergarten ? `
              <tr>
                <td style="padding:10px 12px;font-weight:600;color:#6b7280">Bērnudārzs</td>
                <td style="padding:10px 12px">${kindergarten}</td>
              </tr>` : ""}
              <tr style="background:#f9fafb">
                <td style="padding:10px 12px;font-weight:600;color:#6b7280;vertical-align:top">Ziņa</td>
                <td style="padding:10px 12px">${message}</td>
              </tr>
            </table>
          </div>
        `,
      });
    } else {
      console.log("[CONTACT FORM]", new Date().toISOString(), {
        name, email, phone, role, kindergarten, message,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[CONTACT FORM ERROR]", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
