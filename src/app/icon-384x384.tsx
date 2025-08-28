import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'STANS ABOGADOS'
export const contentType = 'image/png'
export const size = {
  width: 384,
  height: 384,
}
 
export default async function Icon384x384() {
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
          borderRadius: '48px',
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
              fontSize: '96px',
              fontWeight: 'bold',
              color: '#A56B37',
              marginBottom: '18px',
              lineHeight: '1',
            }}
          >
            STANS
          </div>
          <div
            style={{
              fontSize: '48px',
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
