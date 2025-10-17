import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Derecho Penal | STANS ABOGADOS',
  description: 'Blog especializado en derecho penal: terrorismo, extradiciones, derechos de detenidos, defensa urgente y más. Artículos escritos por abogados penalistas expertos.',
  keywords: 'blog derecho penal, artículos jurídicos, terrorismo España, extradiciones, derechos detenidos, defensa penal, abogados penalistas Madrid',
  openGraph: {
    title: 'Blog Jurídico | STANS ABOGADOS',
    description: 'Artículos especializados en derecho penal: terrorismo, extradiciones, derechos fundamentales y defensa penal urgente.',
    url: 'https://www.stansabogados.com/blog',
    siteName: 'STANS ABOGADOS',
    type: 'website',
    images: [
      {
        url: '/images/logos/logo-horizontal.png',
        width: 1200,
        height: 630,
        alt: 'STANS ABOGADOS - Blog Jurídico'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Jurídico | STANS ABOGADOS',
    description: 'Artículos especializados en derecho penal escritos por abogados expertos.',
    images: ['/images/logos/logo-horizontal.png'],
    creator: '@stansabogados',
  },
  alternates: {
    canonical: 'https://www.stansabogados.com/blog',
    languages: {
      'es': 'https://www.stansabogados.com/blog',
      'ar': 'https://www.stansabogados.com/blog',
      'x-default': 'https://www.stansabogados.com/blog'
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

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

