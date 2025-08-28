import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'STANS ABOGADOS'
export const contentType = 'image/png'
export const size = {
  width: 128,
  height: 128,
}
 
export default async function Icon128x128() {
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
          <div
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#A56B37',
              marginBottom: '6px',
              lineHeight: '1',
            }}
          >
            STANS
          </div>
          <div
            style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#FFFFFF',
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
