import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Abogado Robos y Delitos Patrimoniales Madrid | STANS ABOGADOS',
  description: 'Abogados especialistas en robos con violencia, hurtos, organización criminal y receptación en Madrid. Defensa penal 24/7.',
  keywords: 'abogado robos madrid, defensa hurtos, abogado robo violencia, organización criminal abogado, receptación defensa, delitos patrimonio madrid, abogado penal robos',
  alternates: {
    canonical: 'https://www.stansabogados.com/servicios/robos-patrimonio',
  },
  openGraph: {
    title: 'Abogado Robos y Delitos Patrimoniales | STANS ABOGADOS',
    description: 'Defensa especializada en robos, hurtos, organización criminal y delitos patrimoniales. Abogados penalistas expertos en Madrid.',
    url: 'https://www.stansabogados.com/servicios/robos-patrimonio',
    siteName: 'STANS ABOGADOS',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://www.stansabogados.com/images/servicios/robos-patrimonio-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Abogados Robos y Delitos Patrimoniales Madrid',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abogado Robos y Delitos Patrimoniales | STANS',
    description: 'Defensa especializada en robos con violencia, hurtos y organización criminal. Disponibles 24/7.',
    images: ['https://www.stansabogados.com/images/servicios/robos-patrimonio-og.jpg'],
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

export default function RobosPatrimonioLayout({
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
            "@id": "https://www.stansabogados.com/servicios/robos-patrimonio#legal-service",
            "name": "Servicio de Defensa en Robos y Delitos Patrimoniales",
            "description": "Defensa legal especializada en robos con violencia, hurtos, pertenencia a organización criminal, receptación y delitos contra el patrimonio en Madrid y España.",
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
              "Defensa en robos con violencia",
              "Robos con fuerza",
              "Hurtos",
              "Organización criminal",
              "Receptación",
              "Delitos patrimoniales"
            ],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.stansabogados.com/servicios/robos-patrimonio",
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
