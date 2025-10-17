import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Abogado Extradición España | OEDE Defensa | STANS',
  description: 'Abogados especialistas en extradiciones y OEDE. Defensa contra órdenes europeas de detención y extradición internacional. Disponibles 24/7. Primera consulta gratuita.',
  keywords: 'abogado extradición españa, defensa OEDE, abogado extradición internacional, orden europea detención, extradición marruecos españa, abogado audiencia nacional extradición, euroorden defensa',
  alternates: {
    canonical: 'https://www.stansabogados.com/servicios/extradiciones',
  },
  openGraph: {
    title: 'Abogado Extradiciones y OEDE | STANS ABOGADOS',
    description: 'Defensa especializada en extradiciones internacionales y órdenes europeas de detención. Abogados expertos en cooperación judicial internacional.',
    url: 'https://www.stansabogados.com/servicios/extradiciones',
    siteName: 'STANS ABOGADOS',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://www.stansabogados.com/images/servicios/extradiciones-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Abogados Extradiciones OEDE Madrid',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abogado Extradiciones OEDE | STANS',
    description: 'Defensa especializada en extradiciones y órdenes europeas. Disponibles 24/7.',
    images: ['https://www.stansabogados.com/images/servicios/extradiciones-og.jpg'],
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

export default function ExtradicionesLayout({
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
            "@id": "https://www.stansabogados.com/servicios/extradiciones#legal-service",
            "name": "Servicio de Defensa en Extradiciones y OEDE",
            "description": "Defensa legal especializada en extradiciones internacionales, Órdenes Europeas de Detención y Entrega (OEDE) y cooperación judicial internacional en Madrid y España.",
            "provider": {
              "@type": "LegalService",
              "@id": "https://www.stansabogados.com/#legal-service",
              "name": "STANS ABOGADOS",
              "url": "https://www.stansabogados.com"
            },
            "areaServed": [
              {
                "@type": "Country",
                "name": "España"
              },
              {
                "@type": "Place",
                "name": "Unión Europea"
              },
              {
                "@type": "Place",
                "name": "Internacional"
              }
            ],
            "serviceType": [
              "Defensa contra OEDE",
              "Extradiciones internacionales",
              "Cooperación judicial internacional",
              "Recursos contra extradición",
              "Protección derechos fundamentales",
              "Medidas cautelares extradición"
            ],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.stansabogados.com/servicios/extradiciones",
              "servicePhone": "+34611687226",
              "availableLanguage": ["es", "ar", "en"]
            },
            "offers": {
              "@type": "Offer",
              "name": "Primera consulta gratuita",
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
