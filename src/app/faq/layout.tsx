import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | STANS ABOGADOS - Dudas Legales Resueltas',
  description: 'Respuestas a tus preguntas sobre defensa penal, terrorismo, extradiciones, detenidos y derechos. Más de 25 FAQs de abogados especializados en Madrid. Encuentra tu respuesta ahora.',
  keywords: 'preguntas frecuentes abogado, FAQ derecho penal, qué hacer si me detienen, abogado terrorismo preguntas, dudas legales Madrid, consulta abogado gratis, preguntas penalista',
  openGraph: {
    title: 'Preguntas Frecuentes | STANS ABOGADOS',
    description: 'Más de 25 preguntas frecuentes sobre defensa penal, terrorismo, extradiciones y derechos. Respuestas de abogados especializados.',
    url: 'https://www.stansabogados.com/faq',
    siteName: 'STANS ABOGADOS',
    type: 'website',
    images: [
      {
        url: '/images/logos/logo-horizontal.png',
        width: 1200,
        height: 630,
        alt: 'STANS ABOGADOS - Preguntas Frecuentes'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preguntas Frecuentes | STANS ABOGADOS',
    description: 'Respuestas a tus dudas legales sobre defensa penal, terrorismo, extradiciones y más.',
    images: ['/images/logos/logo-horizontal.png'],
    creator: '@stansabogados',
  },
  alternates: {
    canonical: 'https://www.stansabogados.com/faq',
    languages: {
      'es': 'https://www.stansabogados.com/faq',
      'ar': 'https://www.stansabogados.com/faq',
      'x-default': 'https://www.stansabogados.com/faq'
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

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

