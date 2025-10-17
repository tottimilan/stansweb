import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios de Defensa Penal | STANS ABOGADOS - Especialistas en Derecho Penal',
  description: 'Servicios especializados en defensa penal: libertad de expresión, terrorismo, delitos económicos, robos, orden público y más. Abogados penalistas en Madrid con experiencia en Audiencia Nacional.',
  keywords: 'servicios derecho penal, abogados penalistas Madrid, defensa penal España, terrorismo Audiencia Nacional, delitos económicos, extradiciones, OEDE, asistencia letrada 24/7',
  openGraph: {
    title: 'Servicios de Defensa Penal | STANS ABOGADOS',
    description: 'Especialistas en todas las ramas del derecho penal. Defensa integral desde el primer momento. Disponibilidad 24/7.',
    url: 'https://stansabogados.com/servicios',
    siteName: 'STANS ABOGADOS',
    type: 'website',
    images: [
      {
        url: '/images/logos/logo-horizontal.png',
        width: 1200,
        height: 630,
        alt: 'STANS ABOGADOS - Servicios de Defensa Penal'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios de Defensa Penal | STANS ABOGADOS',
    description: 'Especialistas en todas las ramas del derecho penal. Defensa integral desde el primer momento.',
    images: ['/images/logos/logo-horizontal.png'],
    creator: '@stansabogados',
  },
  alternates: {
    canonical: '/servicios',
    languages: {
      'es-ES': '/servicios',
      'ar': '/servicios',
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

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

