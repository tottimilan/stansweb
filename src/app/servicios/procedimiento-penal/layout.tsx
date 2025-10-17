import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Abogado Penal Urgente Madrid | Habeas Corpus | STANS',
  description: 'Abogados penalistas 24/7 en Madrid. Defensa urgente, habeas corpus, recursos penales y medidas cautelares. Respuesta inmediata. Primera consulta gratuita.',
  keywords: 'abogado penal urgente madrid, defensa 24 horas, habeas corpus abogado, recurso apelación penal, medidas cautelares madrid, abogado penalista urgente, defensa detención urgente',
  alternates: {
    canonical: 'https://www.stansabogados.com/servicios/procedimiento-penal',
  },
  openGraph: {
    title: 'Abogado Procedimiento Penal y Recursos | STANS ABOGADOS',
    description: 'Defensa penal urgente 24/7. Habeas corpus, medidas cautelares y recursos. Abogados penalistas expertos en todas las fases procesales.',
    url: 'https://www.stansabogados.com/servicios/procedimiento-penal',
    siteName: 'STANS ABOGADOS',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://www.stansabogados.com/images/servicios/procedimiento-penal-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Abogados Procedimiento Penal Madrid',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abogado Penal Urgente 24/7 | STANS',
    description: 'Defensa penal urgente, habeas corpus y recursos. Disponibles 24/7.',
    images: ['https://www.stansabogados.com/images/servicios/procedimiento-penal-og.jpg'],
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

export default function ProcedimientoPenalLayout({
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
            "@id": "https://www.stansabogados.com/servicios/procedimiento-penal#legal-service",
            "name": "Servicio de Defensa en Procedimiento Penal y Recursos",
            "description": "Defensa legal especializada en todas las fases del procedimiento penal: detención, habeas corpus, medidas cautelares, juicio oral y recursos en Madrid.",
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
              "Defensa penal urgente 24/7",
              "Habeas corpus",
              "Medidas cautelares",
              "Recursos de apelación",
              "Recursos de casación",
              "Recurso de amparo",
              "Libertad provisional"
            ],
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.stansabogados.com/servicios/procedimiento-penal",
              "servicePhone": "+34611687226",
              "availableLanguage": ["es", "ar", "en"]
            },
            "offers": {
              "@type": "Offer",
              "name": "Primera consulta gratuita - Respuesta inmediata 24/7",
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
