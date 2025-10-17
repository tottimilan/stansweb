import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Abogado Delitos contra las Personas Madrid | STANS ABOGADOS',
  description: 'Abogados especialistas en delitos contra las personas: homicidio, lesiones, amenazas, violencia de género. Defensa penal 24/7 en Madrid. Primera consulta gratuita.',
  keywords: 'abogado violencia madrid, defensa penal lesiones, abogado homicidio, amenazas coacciones abogado, violencia género madrid, detención ilegal defensa, abogado penal personas',
  alternates: {
    canonical: 'https://www.stansabogados.com/servicios/delitos-personas',
  },
  openGraph: {
    title: 'Abogado Delitos contra las Personas | STANS ABOGADOS',
    description: 'Defensa especializada en delitos contra las personas: homicidio, lesiones, amenazas, violencia de género. Abogados penalistas expertos en Madrid.',
    url: 'https://www.stansabogados.com/servicios/delitos-personas',
    siteName: 'STANS ABOGADOS',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://www.stansabogados.com/images/servicios/delitos-personas-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Abogados Delitos contra las Personas Madrid',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abogado Delitos contra las Personas | STANS',
    description: 'Defensa especializada en homicidio, lesiones, amenazas y violencia de género. Disponibles 24/7.',
    images: ['https://www.stansabogados.com/images/servicios/delitos-personas-og.jpg'],
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

export default function DelitosPersonasLayout({
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
            "@id": "https://www.stansabogados.com/servicios/delitos-personas#legal-service",
            "name": "Servicio de Defensa en Delitos contra las Personas",
            "description": "Defensa legal especializada en delitos contra las personas: homicidio, lesiones, amenazas, coacciones, detención ilegal y violencia de género en Madrid y España.",
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
              "Defensa en homicidio y asesinato",
              "Delitos de lesiones",
              "Amenazas y coacciones",
              "Detención ilegal",
              "Violencia de género",
              "Violencia doméstica"
            ],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.stansabogados.com/servicios/delitos-personas",
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
