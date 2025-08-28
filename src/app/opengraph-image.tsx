import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'STANS ABOGADOS - Defensa Penal 24/7 en Madrid y España'
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
          background: 'linear-gradient(to bottom, #191919, #2C2C2C)',
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
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#A56B37',
              margin: '0 0 20px 0',
              lineHeight: '1.2',
            }}
          >
            STANS ABOGADOS
          </h1>
          <h2
            style={{
              fontSize: '36px',
              fontWeight: '600',
              color: '#FFFFFF',
              margin: '0 0 30px 0',
              lineHeight: '1.3',
            }}
          >
            Defensa Penal 24/7
          </h2>
          <p
            style={{
              fontSize: '24px',
              color: '#E0E0E0',
              margin: '0 0 20px 0',
              maxWidth: '800px',
            }}
          >
            Especialistas en Derecho Penal en Madrid y España
          </p>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginTop: '30px',
            }}
          >
            <div
              style={{
                background: '#A56B37',
                color: '#000000',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: '600',
              }}
            >
              Respuesta &lt; 15 min
            </div>
            <div
              style={{
                background: 'rgba(165, 107, 55, 0.1)',
                color: '#A56B37',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: '600',
                border: '2px solid #A56B37',
              }}
            >
              Español–Árabe
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
