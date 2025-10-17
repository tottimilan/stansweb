import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos de Uso | STANS ABOGADOS',
  description: 'Términos y condiciones de uso del sitio web de STANS ABOGADOS. Condiciones generales de navegación y servicios.',
  keywords: 'términos uso, condiciones generales, términos servicios, condiciones navegación',
  openGraph: {
    title: 'Términos de Uso | STANS ABOGADOS',
    description: 'Términos y condiciones de uso del sitio web.',
    url: 'https://www.stansabogados.com/terminos',
    siteName: 'STANS ABOGADOS',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Términos de Uso | STANS ABOGADOS',
    description: 'Términos y condiciones de uso del sitio web.',
    creator: '@stansabogados',
  },
  alternates: {
    canonical: 'https://www.stansabogados.com/terminos',
    languages: {
      'es': 'https://www.stansabogados.com/terminos',
      'ar': 'https://www.stansabogados.com/terminos',
      'x-default': 'https://www.stansabogados.com/terminos'
    },
  },
  robots: {
    index: false, // No indexar páginas legales
    follow: true,
  },
};

export default function TerminosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

