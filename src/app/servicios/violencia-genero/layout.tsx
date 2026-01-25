import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Abogado Violencia de Género Madrid | Defensa Especializada | STANS',
  description: 'Abogados especialistas en violencia de género y doméstica en Madrid. Defensa para víctimas e investigados. Órdenes de protección. Consulta confidencial 24/7.',
  keywords: 'abogado violencia género madrid, defensa penal género, abogado especialista violencia género, violencia doméstica abogado, orden alejamiento madrid, denuncia falsa violencia género, abogado víctimas violencia',
  alternates: {
    canonical: 'https://www.stansabogados.com/servicios/violencia-genero',
  },
  openGraph: {
    title: 'Abogado Violencia de Género | STANS ABOGADOS',
    description: 'Defensa especializada en violencia de género. Representación de víctimas e investigados. Órdenes de protección. Consulta confidencial.',
    url: 'https://www.stansabogados.com/servicios/violencia-genero',
    siteName: 'STANS ABOGADOS',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://www.stansabogados.com/images/servicios/violencia-genero-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Abogados Violencia de Género Madrid',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abogado Violencia de Género | STANS',
    description: 'Defensa especializada y sensible en casos de violencia de género. Disponibles 24/7.',
    images: ['https://www.stansabogados.com/images/servicios/violencia-genero-og.jpg'],
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

export default function ViolenciaGeneroLayout({
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
            "@id": "https://www.stansabogados.com/servicios/violencia-genero#legal-service",
            "name": "Servicio de Defensa en Violencia de Género",
            "description": "Defensa legal especializada en casos de violencia de género y doméstica. Representación de víctimas e investigados con sensibilidad y profesionalidad en Madrid.",
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
              "Defensa en violencia de género",
              "Representación de víctimas",
              "Órdenes de protección",
              "Defensa contra denuncias falsas",
              "Medidas cautelares",
              "Violencia doméstica"
            ],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.stansabogados.com/servicios/violencia-genero",
              "servicePhone": "+34611687226",
              "availableLanguage": ["es", "ar", "en"]
            },
            "offers": {
              "@type": "Offer",
              "name": "Primera consulta confidencial",
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
