import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'STANS ABOGADOS - Defensa Penal 24/7'
export const contentType = 'image/png'
export const size = {
  width: 1200,
  height: 630,
}
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #191919 0%, #2C2C2C 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: '900',
              color: '#A56B37',
              margin: '0 0 30px 0',
              lineHeight: '1.1',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            }}
          >
            STANS ABOGADOS
          </h1>
          <h2
            style={{
              fontSize: '42px',
              fontWeight: '700',
              color: '#FFFFFF',
              margin: '0 0 40px 0',
              lineHeight: '1.2',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Defensa Penal 24/7
          </h2>
          <p
            style={{
              fontSize: '28px',
              color: '#E0E0E0',
              margin: '0 0 30px 0',
              maxWidth: '900px',
              lineHeight: '1.4',
            }}
          >
            Especialistas en Derecho Penal en Madrid y España
          </p>
          <div
            style={{
              display: 'flex',
              gap: '30px',
              marginTop: '40px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                background: '#A56B37',
                color: '#000000',
                padding: '16px 32px',
                borderRadius: '12px',
                fontSize: '20px',
                fontWeight: '700',
                boxShadow: '0 4px 12px rgba(165, 107, 55, 0.3)',
              }}
            >
              ⚡ Respuesta &lt; 15 min
            </div>
            <div
              style={{
                background: 'rgba(165, 107, 55, 0.1)',
                color: '#A56B37',
                padding: '16px 32px',
                borderRadius: '12px',
                fontSize: '20px',
                fontWeight: '700',
                border: '3px solid #A56B37',
                boxShadow: '0 4px 12px rgba(165, 107, 55, 0.2)',
              }}
            >
              🌍 Español–Árabe
            </div>
          </div>
          <div
            style={{
              marginTop: '40px',
              fontSize: '18px',
              color: '#F2D3AF',
              fontWeight: '600',
            }}
          >
            📞 +34 611 68 72 26 | 📧 info@stansabogados.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
