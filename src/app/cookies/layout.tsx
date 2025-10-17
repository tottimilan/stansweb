import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies | STANS ABOGADOS',
  description: 'Información sobre el uso de cookies en www.stansabogados.com. Política de cookies conforme a la LSSI y RGPD.',
  keywords: 'política cookies, LSSI, RGPD, protección datos, cookies técnicas, cookies analíticas',
  openGraph: {
    title: 'Política de Cookies | STANS ABOGADOS',
    description: 'Información sobre el uso de cookies en nuestro sitio web.',
    url: 'https://www.stansabogados.com/cookies',
    siteName: 'STANS ABOGADOS',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Política de Cookies | STANS ABOGADOS',
    description: 'Información sobre el uso de cookies en nuestro sitio web.',
    creator: '@stansabogados',
  },
  alternates: {
    canonical: 'https://www.stansabogados.com/cookies',
    languages: {
      'es': 'https://www.stansabogados.com/cookies',
      'ar': 'https://www.stansabogados.com/cookies',
      'x-default': 'https://www.stansabogados.com/cookies'
    },
  },
  robots: {
    index: false, // No indexar páginas legales
    follow: true,
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

