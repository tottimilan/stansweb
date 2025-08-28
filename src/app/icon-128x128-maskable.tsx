import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'STANS ABOGADOS'
export const contentType = 'image/png'
export const size = {
  width: 128,
  height: 128,
}
 
export default async function Icon128x128Maskable() {
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
          borderRadius: '16px',
          padding: '16px',
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
            borderRadius: '12px',
            padding: '16px',
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#000000',
              marginBottom: '4px',
              lineHeight: '1',
            }}
          >
            STANS
          </div>
          <div
            style={{
              fontSize: '12px',
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
