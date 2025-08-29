import { NextResponse } from 'next/server';

// (Node runtime por compatibilidad)
export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const { email, mensaje = '', idioma = 'es', utm = '', nombre = '', telefono = '' } = await req.json();

    // Validación mínima
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return NextResponse.json({ ok: false, error: 'EMAIL_INVALIDO' }, { status: 400 });

    // (Opcional) rate-limit simple por IP
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || '0.0.0.0';

    // Log del lead recibido
    console.log('Lead recibido:', { nombre, email, telefono, mensaje, idioma, utm, ip });

    // 2) Guardar en Sheets
    if (process.env.SHEETS_WEBHOOK_URL) {
      try {
        // Enviar como JSON (como espera tu Google Apps Script)
        const sheetsResponse = await fetch(process.env.SHEETS_WEBHOOK_URL, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            nombre: nombre || '', 
            email, 
            telefono: telefono || '', 
            mensaje: mensaje || '', 
            idioma: idioma || 'es', 
            utm: utm || '', 
            ip 
          }),
        });
        
        if (!sheetsResponse.ok) {
          const errorText = await sheetsResponse.text();
          console.error('Error en Google Sheets:', errorText);
          console.error('Status:', sheetsResponse.status);
          console.error('Status Text:', sheetsResponse.statusText);
        } else {
          console.log('Lead enviado exitosamente a Google Sheets');
        }
      } catch (sheetsError) {
        console.error('Error enviando a Google Sheets:', sheetsError);
        // Continuamos aunque falle Google Sheets
      }
    } else {
      console.warn('SHEETS_WEBHOOK_URL no configurado');
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Error en API /api/lead:', err);
    return NextResponse.json({ ok: false, error: 'SERVER_ERROR' }, { status: 500 });
  }
}
