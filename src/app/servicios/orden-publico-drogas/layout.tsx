import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Abogado Drogas Madrid | Orden Público Defensa | STANS',
  description: 'Abogados especialistas en delitos contra la salud pública, tráfico de drogas y orden público en Madrid. Defensa 24/7. Ejecución penal.',
  keywords: 'abogado drogas madrid, defensa tráfico estupefacientes, abogado salud pública, resistencia autoridad defensa, atentado agentes abogado, ejecución penal madrid, tercer grado abogado',
  alternates: {
    canonical: 'https://www.stansabogados.com/servicios/orden-publico-drogas',
  },
  openGraph: {
    title: 'Abogado Drogas y Orden Público | STANS ABOGADOS',
    description: 'Defensa especializada en tráfico de drogas, delitos contra la autoridad y ejecución penal. Abogados penalistas expertos en Madrid.',
    url: 'https://www.stansabogados.com/servicios/orden-publico-drogas',
    siteName: 'STANS ABOGADOS',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://www.stansabogados.com/images/servicios/orden-publico-drogas-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Abogados Drogas y Orden Público Madrid',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abogado Drogas y Orden Público | STANS',
    description: 'Defensa especializada en tráfico de drogas y delitos contra el orden público. Disponibles 24/7.',
    images: ['https://www.stansabogados.com/images/servicios/orden-publico-drogas-og.jpg'],
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

export default function OrdenPublicoDrogasLayout({
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
            "@id": "https://www.stansabogados.com/servicios/orden-publico-drogas#legal-service",
            "name": "Servicio de Defensa en Orden Público y Drogas",
            "description": "Defensa legal especializada en delitos contra la salud pública, tráfico de drogas, delitos contra la autoridad y ejecución penal en Madrid y España.",
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
              "Defensa en tráfico de drogas",
              "Delitos contra la salud pública",
              "Resistencia y atentado a la autoridad",
              "Ejecución penal",
              "Tercer grado y permisos",
              "Medidas cautelares"
            ],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.stansabogados.com/servicios/orden-publico-drogas",
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
