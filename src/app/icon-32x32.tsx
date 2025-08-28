import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'STANS ABOGADOS'
export const contentType = 'image/png'
export const size = {
  width: 32,
  height: 32,
}
 
export default async function Icon32x32() {
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
          borderRadius: '4px',
        }}
      >
        <div
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#A56B37',
            textAlign: 'center',
            lineHeight: '1',
          }}
        >
          SA
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
