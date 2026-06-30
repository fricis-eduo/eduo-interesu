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

// Simple in-memory rate limiter: max 3 submissions per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const LIMIT = 3;
const WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= LIMIT) return true;
  entry.count++;
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many requests" },
        { status: 429 }
      );
    }

    const body = await req.json();

    if (body._honeypot) {
      return NextResponse.json({ ok: true });
    }

    const { name, email, phone, role, kindergarten, message } = body;

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const roleLabel =
      role === "director" ? "Bērnudārza vadītājs/a" : "Vecāks";

    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safePhone = phone ? escapeHtml(String(phone)) : null;
    const safeKindergarten = kindergarten ? escapeHtml(String(kindergarten)) : null;
    const safeMessage = escapeHtml(String(message)).replace(/\n/g, "<br>");

    if (transporter) {
      await transporter.sendMail({
        from: `"EDUO mājaslapa" <${process.env.GMAIL_USER}>`,
        to: "interesu@eduo.me",
        replyTo: safeEmail,
        subject: `Jauns pieteikums — ${safeName}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;color:#1a202c">
            <h2 style="color:#00AEEF;margin-bottom:24px">
              Jauns pieteikums — eduo.lv
            </h2>
            <table style="border-collapse:collapse;width:100%;font-size:15px">
              <tr>
                <td style="padding:10px 12px;font-weight:600;color:#6b7280;width:150px">Vārds</td>
                <td style="padding:10px 12px">${safeName}</td>
              </tr>
              <tr style="background:#f9fafb">
                <td style="padding:10px 12px;font-weight:600;color:#6b7280">E-pasts</td>
                <td style="padding:10px 12px">
                  <a href="mailto:${safeEmail}" style="color:#00AEEF">${safeEmail}</a>
                </td>
              </tr>
              ${safePhone ? `
              <tr>
                <td style="padding:10px 12px;font-weight:600;color:#6b7280">Telefons</td>
                <td style="padding:10px 12px">${safePhone}</td>
              </tr>` : ""}
              <tr style="background:#f9fafb">
                <td style="padding:10px 12px;font-weight:600;color:#6b7280">Loma</td>
                <td style="padding:10px 12px">${roleLabel}</td>
              </tr>
              ${safeKindergarten ? `
              <tr>
                <td style="padding:10px 12px;font-weight:600;color:#6b7280">Iestāde</td>
                <td style="padding:10px 12px">${safeKindergarten}</td>
              </tr>` : ""}
              <tr style="background:#f9fafb">
                <td style="padding:10px 12px;font-weight:600;color:#6b7280;vertical-align:top">Ziņa</td>
                <td style="padding:10px 12px">${safeMessage}</td>
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
