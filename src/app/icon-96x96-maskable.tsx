import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'STANS ABOGADOS'
export const contentType = 'image/png'
export const size = {
  width: 96,
  height: 96,
}
 
export default async function Icon96x96Maskable() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#191919',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '12px',
          padding: '12px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            background: '#A56B37',
            borderRadius: '8px',
            padding: '12px',
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#000000',
              marginBottom: '2px',
              lineHeight: '1',
            }}
          >
            STANS
          </div>
          <div
            style={{
              fontSize: '9px',
              fontWeight: '600',
              color: '#000000',
              lineHeight: '1',
            }}
          >
            ABOGADOS
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
