import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Abogado Delitos de Odio Madrid | Libertad de Expresión | STANS',
  description: 'Abogados especialistas en delitos de odio, libertad de expresión, injurias y calumnias en Madrid. Defensa 24/7. Primera consulta gratuita. Experiencia en Audiencia Nacional.',
  keywords: 'abogado delitos odio madrid, defensa libertad expresión, injurias calumnias abogado, delitos odio españa, abogado sentimientos religiosos, defensa redes sociales, abogado penal expresión',
  alternates: {
    canonical: 'https://www.stansabogados.com/servicios/libertad-expresion',
  },
  openGraph: {
    title: 'Abogado Delitos de Odio y Libertad de Expresión | STANS ABOGADOS',
    description: 'Defensa especializada en delitos de odio, libertad de expresión, injurias y calumnias. Abogados penalistas en Madrid con experiencia en casos mediáticos.',
    url: 'https://www.stansabogados.com/servicios/libertad-expresion',
    siteName: 'STANS ABOGADOS',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://www.stansabogados.com/images/servicios/libertad-expresion-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Abogados Libertad de Expresión Madrid',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abogado Delitos de Odio Madrid | Libertad de Expresión',
    description: 'Defensa especializada en delitos de odio y libertad de expresión. Disponibles 24/7.',
    images: ['https://www.stansabogados.com/images/servicios/libertad-expresion-og.jpg'],
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

export default function LibertadExpresionLayout({
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
            "@id": "https://www.stansabogados.com/servicios/libertad-expresion#legal-service",
            "name": "Servicio de Defensa en Delitos de Odio y Libertad de Expresión",
            "description": "Defensa legal especializada en delitos de odio, libertad de expresión, injurias, calumnias y delitos contra los sentimientos religiosos en Madrid y toda España.",
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
              "Defensa en delitos de odio",
              "Libertad de expresión",
              "Injurias y calumnias",
              "Delitos contra sentimientos religiosos",
              "Defensa en redes sociales"
            ],
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.stansabogados.com/servicios/libertad-expresion",
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
