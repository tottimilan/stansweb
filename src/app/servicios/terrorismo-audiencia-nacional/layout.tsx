import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Abogado Terrorismo Audiencia Nacional Madrid | STANS ABOGADOS',
  description: 'Abogados especialistas en terrorismo ante la Audiencia Nacional. Defensa en enaltecimiento, captación yihadista y financiación. Disponibles 24/7. Primera consulta gratuita.',
  keywords: 'abogado terrorismo audiencia nacional, defensa enaltecimiento terrorismo, abogado penal terrorismo madrid, captación yihadista abogado, financiación terrorismo defensa, abogado audiencia nacional, terrorismo redes sociales',
  alternates: {
    canonical: 'https://www.stansabogados.com/servicios/terrorismo-audiencia-nacional',
  },
  openGraph: {
    title: 'Abogado Terrorismo y Audiencia Nacional | STANS ABOGADOS',
    description: 'Defensa especializada en casos de terrorismo ante la Audiencia Nacional. Enaltecimiento, captación, financiación. Abogados penalistas expertos.',
    url: 'https://www.stansabogados.com/servicios/terrorismo-audiencia-nacional',
    siteName: 'STANS ABOGADOS',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://www.stansabogados.com/images/servicios/terrorismo-audiencia-nacional-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Abogados Terrorismo Audiencia Nacional Madrid',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abogado Terrorismo Audiencia Nacional | STANS',
    description: 'Defensa especializada en terrorismo ante la Audiencia Nacional. Disponibles 24/7.',
    images: ['https://www.stansabogados.com/images/servicios/terrorismo-audiencia-nacional-og.jpg'],
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

export default function TerrorismoAudienciaNacionalLayout({
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
            "@id": "https://www.stansabogados.com/servicios/terrorismo-audiencia-nacional#legal-service",
            "name": "Servicio de Defensa en Terrorismo ante la Audiencia Nacional",
            "description": "Defensa legal especializada en casos de terrorismo ante la Audiencia Nacional. Enaltecimiento, captación, adoctrinamiento, financiación y pertenencia a organizaciones terroristas.",
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
              "Defensa en enaltecimiento del terrorismo",
              "Casos de captación y adoctrinamiento",
              "Financiación del terrorismo",
              "Pertenencia a organización terrorista",
              "Procedimientos ante la Audiencia Nacional"
            ],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.stansabogados.com/servicios/terrorismo-audiencia-nacional",
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
