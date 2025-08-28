import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// (Node runtime por compatibilidad con Resend)
export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const { email, mensaje = '', idioma = 'es', utm = '' } = await req.json();

    // Validación mínima
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return NextResponse.json({ ok: false, error: 'EMAIL_INVALIDO' }, { status: 400 });

    // (Opcional) rate-limit simple por IP
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || '0.0.0.0';

    // 1) Email interno a STANS
    await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.LEADS_TO!,
      subject: `Nuevo lead (${idioma}) — STANS ABOGADOS`,
      html: `
        <h2>Nuevo lead</h2>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mensaje:</b> ${mensaje || '-'}</p>
        <p><b>Idioma:</b> ${idioma}</p>
        <p><b>UTM:</b> ${utm || '-'}</p>
        <p><b>IP:</b> ${ip}</p>
      `,
    });

    // 2) Guardar en Sheets
    if (process.env.SHEETS_WEBHOOK_URL) {
      await fetch(process.env.SHEETS_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, mensaje, idioma, utm, ip }),
      });
    }

    // 3) (Opcional) Auto-respuesta al usuario
    // await resend.emails.send({
    //   from: process.env.FROM_EMAIL!,
    //   to: email,
    //   subject: idioma === 'ar' ? 'تم استلام رسالتك' : 'Hemos recibido tu consulta',
    //   html: idioma === 'ar'
    //     ? `<p>شكراً لتواصلك مع STANS ABOGADOS. سنرد خلال 15 دقيقة.</p>`
    //     : `<p>Gracias por escribir a STANS ABOGADOS. Te respondemos en &lt;15 minutos.</p>`,
    // });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: 'SERVER_ERROR' }, { status: 500 });
  }
}
