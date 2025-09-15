import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://stansabogados.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/admin/',
          '/*.json$',
          '/*?*',  // URLs con parámetros de consulta
          '/*/embed',
          '/_next/',
          '/static/'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/casos/',
          '/blog/',
          '/*.css$',
          '/*.js$',
          '/*.webp$',
          '/*.png$',
          '/*.jpg$',
          '/*.jpeg$'
        ],
        disallow: [
          '/api/',
          '/private/',
          '/admin/'
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: [
          '/*.webp$',
          '/*.png$',
          '/*.jpg$',
          '/*.jpeg$',
          '/images/'
        ],
        disallow: []
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  }
}
