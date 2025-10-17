import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Casos de Éxito | STANS ABOGADOS',
  description: 'Casos reales resueltos por STANS ABOGADOS: absoluciones, sobreseimientos y recursos exitosos en terrorismo, criminalidad organizada, blanqueo de capitales y más.',
  keywords: 'casos éxito abogados, absoluciones penales, sobreseimientos, terrorismo Audiencia Nacional, blanqueo capitales, criminalidad organizada, abogados Madrid',
  openGraph: {
    title: 'Casos de Éxito | STANS ABOGADOS',
    description: 'Resultados favorables en casos complejos de derecho penal: terrorismo, extradiciones, criminalidad organizada y delitos económicos.',
    url: 'https://www.stansabogados.com/casos',
    siteName: 'STANS ABOGADOS',
    type: 'website',
    images: [
      {
        url: '/images/logos/logo-horizontal.png',
        width: 1200,
        height: 630,
        alt: 'STANS ABOGADOS - Casos de Éxito'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casos de Éxito | STANS ABOGADOS',
    description: 'Resultados favorables en casos complejos de derecho penal. Experiencia comprobada.',
    images: ['/images/logos/logo-horizontal.png'],
    creator: '@stansabogados',
  },
  alternates: {
    canonical: 'https://www.stansabogados.com/casos',
    languages: {
      'es': 'https://www.stansabogados.com/casos',
      'ar': 'https://www.stansabogados.com/casos',
      'x-default': 'https://www.stansabogados.com/casos'
    },
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

export default function CasosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

