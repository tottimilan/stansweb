import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | STANS ABOGADOS',
  description: 'Política de privacidad y protección de datos de STANS ABOGADOS. Cumplimiento del RGPD y LOPDGDD.',
  keywords: 'política privacidad, protección datos, RGPD, LOPDGDD, datos personales, privacidad',
  openGraph: {
    title: 'Política de Privacidad | STANS ABOGADOS',
    description: 'Información sobre protección de datos y privacidad.',
    url: 'https://www.stansabogados.com/privacidad',
    siteName: 'STANS ABOGADOS',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Política de Privacidad | STANS ABOGADOS',
    description: 'Información sobre protección de datos y privacidad.',
    creator: '@stansabogados',
  },
  alternates: {
    canonical: 'https://www.stansabogados.com/privacidad',
    languages: {
      'es': 'https://www.stansabogados.com/privacidad',
      'ar': 'https://www.stansabogados.com/privacidad',
      'x-default': 'https://www.stansabogados.com/privacidad'
    },
  },
  robots: {
    index: false, // No indexar páginas legales
    follow: true,
  },
};

export default function PrivacidadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

