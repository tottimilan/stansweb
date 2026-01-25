import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Abogado Delitos Económicos Madrid | Blanqueo Estafa | STANS',
  description: 'Abogados especialistas en delitos económicos: blanqueo de capitales, estafa, delitos fiscales y societarios. Defensa técnica en Madrid.',
  keywords: 'abogado blanqueo capitales, defensa estafa madrid, abogado delitos económicos, delito fiscal abogado, apropiación indebida defensa, falsedad documental madrid, abogado penal económico',
  alternates: {
    canonical: 'https://www.stansabogados.com/servicios/delitos-economicos',
  },
  openGraph: {
    title: 'Abogado Delitos Económicos | Blanqueo y Estafa | STANS ABOGADOS',
    description: 'Defensa especializada en delitos económicos: blanqueo de capitales, estafa, delitos fiscales. Abogados penalistas expertos en Madrid.',
    url: 'https://www.stansabogados.com/servicios/delitos-economicos',
    siteName: 'STANS ABOGADOS',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://www.stansabogados.com/images/servicios/delitos-economicos-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Abogados Delitos Económicos Madrid',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abogado Delitos Económicos | STANS ABOGADOS',
    description: 'Defensa especializada en blanqueo de capitales, estafa y delitos fiscales. Disponibles 24/7.',
    images: ['https://www.stansabogados.com/images/servicios/delitos-economicos-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function DelitosEconomicosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "@id": "https://www.stansabogados.com/servicios/delitos-economicos#legal-service",
            "name": "Servicio de Defensa en Delitos Económicos",
            "description": "Defensa legal especializada en delitos económicos: estafa, blanqueo de capitales, delitos fiscales, societarios, falsedad documental e insolvencias punibles en Madrid y España.",
            "provider": {
              "@type": "LegalService",
              "@id": "https://www.stansabogados.com/#legal-service",
              "name": "STANS ABOGADOS",
              "url": "https://www.stansabogados.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "España"
            },
            "serviceType": [
              "Defensa en estafa y fraude",
              "Blanqueo de capitales",
              "Delitos fiscales",
              "Delitos societarios",
              "Falsedad documental",
              "Insolvencias punibles"
            ],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.stansabogados.com/servicios/delitos-economicos",
              "servicePhone": "+34611687226",
              "availableLanguage": ["es", "ar", "en"]
            },
            "offers": {
              "@type": "Offer",
              "name": "Consulta especializada",
              "price": "0",
              "priceCurrency": "EUR"
            }
          }),
        }}
      />
      {children}
    </>
  );
}
