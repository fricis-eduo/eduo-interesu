import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: NextRequest) {
  try {
    const { email, _honeypot } = await req.json();

    if (_honeypot) return NextResponse.json({ ok: true });

    if (resend) {
      await resend.emails.send({
        from: "EDUO mājaslapa <noreply@eduo.me>",
        to: ["interesu@eduo.me"],
        replyTo: email,
        subject: `eduo.lv — jauns agrīnās piekļuves pieprasījums`,
        html: `
          <div style="font-family:sans-serif;max-width:500px;color:#1a202c">
            <h2 style="color:#00AEEF">eduo.lv — Agrīnā piekļuve</h2>
            <p>Jauns e-pasts reģistrēts:</p>
            <p style="font-size:18px;font-weight:600">${email.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
          </div>
        `,
      });
    } else {
      console.log("[NOTIFY]", new Date().toISOString(), email);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[NOTIFY ERROR]", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
