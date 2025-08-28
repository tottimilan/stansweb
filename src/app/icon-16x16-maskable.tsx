import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'STANS ABOGADOS'
export const contentType = 'image/png'
export const size = {
  width: 16,
  height: 16,
}
 
export default async function Icon16x16Maskable() {
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
          borderRadius: '2px',
          padding: '2px',
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
            borderRadius: '1px',
            padding: '2px',
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              fontSize: '4px',
              fontWeight: 'bold',
              color: '#000000',
              marginBottom: '0px',
              lineHeight: '1',
            }}
          >
            SA
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
