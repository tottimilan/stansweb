import type { Metadata } from "next";
import "./globals.css";
import { ContactProvider } from "../contexts/ContactContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import CookieBanner from "../components/CookieBanner";

export const metadata: Metadata = {
  title: "STANS ABOGADOS — Defensa Penal 24/7 en Madrid y España | Abogados Penalistas",
  description: "Especialistas en Derecho Penal en Madrid y España. Defensa penal 24/7, respuesta en menos de 15 minutos. Abogados penalistas colegiados ICAM. Servicios en español, inglés y árabe. Extradiciones, OEDE, casos complejos.",
  keywords: [
    "abogado penal Madrid",
    "defensa penal España", 
    "abogado penalista",
    "derecho penal",
    "extradición España Marruecos",
    "OEDE",
    "defensa 24/7",
    "abogado árabe Madrid",
    "penal económico",
    "derechos fundamentales",
    "criminalidad organizada",
    "terrorismo",
    "robos hurtos",
    "tráfico drogas",
    "violencia género",
    "alcoholemia tráfico",
    "falsedad documental",
    "delitos informáticos"
  ].join(", "),
  authors: [{ name: "STANS ABOGADOS", url: "https://stansabogados.com" }],
  creator: "STANS ABOGADOS",
  publisher: "STANS ABOGADOS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://stansabogados.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
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
  openGraph: {
    title: "STANS ABOGADOS — Defensa Penal 24/7 en Madrid y España",
    description: "Especialistas en Derecho Penal. Defensa penal 24/7, respuesta en menos de 15 minutos. Abogados penalistas colegiados ICAM. Español, inglés y árabe.",
    url: 'https://stansabogados.com',
    siteName: 'STANS ABOGADOS',
    images: [
      {
        url: '/images/logos/logo-horizontal.png',
        width: 1200,
        height: 630,
        alt: 'STANS ABOGADOS - Defensa Penal 24/7',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STANS ABOGADOS — Defensa Penal 24/7 en Madrid y España',
    description: 'Especialistas en Derecho Penal. Defensa penal 24/7, respuesta en menos de 15 minutos. Abogados penalistas colegiados ICAM.',
    images: ['/images/logos/logo-horizontal.png'],
    creator: '@stansabogados',
  },
  verification: {
    google: 'tu-codigo-de-verificacion-google',
    yandex: 'tu-codigo-de-verificacion-yandex',
    yahoo: 'tu-codigo-de-verificacion-yahoo',
  },
  category: 'legal services',
  classification: 'law firm',
  other: {
    'geo.region': 'ES-MD',
    'geo.placename': 'Madrid',
    'geo.position': '40.4168;-3.7038',
    'ICBM': '40.4168, -3.7038',
    'DC.title': 'STANS ABOGADOS - Defensa Penal 24/7',
    'DC.creator': 'STANS ABOGADOS',
    'DC.subject': 'Derecho Penal, Abogados Penalistas, Madrid, España',
    'DC.description': 'Especialistas en Derecho Penal en Madrid y España. Defensa penal 24/7.',
    'DC.publisher': 'STANS ABOGADOS',
    'DC.contributor': 'STANS ABOGADOS',
    'DC.date': '2024',
    'DC.type': 'Text',
    'DC.format': 'text/html',
    'DC.identifier': 'https://stansabogados.com',
    'DC.language': 'es',
    'DC.coverage': 'Madrid, España',
    'DC.rights': '© 2024 STANS ABOGADOS. Todos los derechos reservados.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#191919" />
        <meta name="msapplication-TileColor" content="#191919" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect para mejorar performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "STANS ABOGADOS",
              "description": "Especialistas en Derecho Penal en Madrid y España. Defensa penal 24/7, respuesta en menos de 15 minutos.",
              "url": "https://stansabogados.com",
              "logo": "https://stansabogados.com/images/logos/logo-horizontal.png",
              "image": "https://stansabogados.com/images/logos/logo-horizontal.png",
              "telephone": "+34611687226",
              "email": "info@stansabogados.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Madrid",
                "addressRegion": "Madrid",
                "addressCountry": "ES"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.4168,
                "longitude": -3.7038
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "€€",
              "serviceType": "Derecho Penal",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Madrid"
                },
                {
                  "@type": "Country",
                  "name": "España"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios de Defensa Penal",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Defensa Penal 24/7",
                      "description": "Asistencia legal penal inmediata las 24 horas del día"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Extradiciones España-Marruecos",
                      "description": "Procedimientos de extradición entre España y Marruecos"
                    }
                  }
                ]
              },
              "employee": [
                {
                  "@type": "Person",
                  "name": "Rubén Vaquero Arribas",
                  "jobTitle": "Socio Director",
                  "description": "Penal y penal económico, derechos fundamentales, OEDE y extradiciones"
                },
                {
                  "@type": "Person", 
                  "name": "Mounir Elyemlahy Chouati",
                  "jobTitle": "Abogado Penalista",
                  "description": "Penal y administrativo. Especialista en derecho marroquí y extradiciones"
                },
                {
                  "@type": "Person",
                  "name": "Diego Cardona Valero", 
                  "jobTitle": "Abogado Penalista",
                  "description": "Defensa en causas complejas: criminalidad organizada, terrorismo"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              },
              "sameAs": [
                "https://www.linkedin.com/company/stans-abogados",
                "https://twitter.com/stansabogados"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <ContactProvider>
            {children}
            <CookieBanner />
            <SpeedInsights />
            <Analytics />
          </ContactProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
