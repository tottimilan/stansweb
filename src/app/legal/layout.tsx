import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviso Legal | STANS ABOGADOS',
  description: 'Aviso legal de STANS ABOGADOS. Información sobre la titularidad, datos de contacto y condiciones de uso del sitio web.',
  keywords: 'aviso legal, información legal, ICAM, abogados Madrid, datos contacto',
  openGraph: {
    title: 'Aviso Legal | STANS ABOGADOS',
    description: 'Aviso legal e información sobre la titularidad del sitio web.',
    url: 'https://www.stansabogados.com/legal',
    siteName: 'STANS ABOGADOS',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Aviso Legal | STANS ABOGADOS',
    description: 'Aviso legal e información sobre la titularidad del sitio web.',
    creator: '@stansabogados',
  },
  alternates: {
    canonical: 'https://www.stansabogados.com/legal',
    languages: {
      'es': 'https://www.stansabogados.com/legal',
      'ar': 'https://www.stansabogados.com/legal',
      'x-default': 'https://www.stansabogados.com/legal'
    },
  },
  robots: {
    index: false, // No indexar páginas legales
    follow: true,
  },
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

