import type { Metadata } from "next";
import "./globals.css";
import { ContactProvider } from "../contexts/ContactContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import CookieBanner from "../components/CookieBanner";
import WebsiteSchema from "../components/WebsiteSchema";
import LocalBusinessSchema from "../components/LocalBusinessSchema";
import { translations } from "../translations";

export const metadata: Metadata = {
  title: "Abogados Penalistas Madrid 24/7 | STANS ABOGADOS",
  description: "Especialistas en Derecho Penal en Madrid y España. Defensa penal 24/7, respuesta en menos de 1 hora. Abogados penalistas colegiados ICAM. Servicios en español, inglés y árabe. Extradiciones, OEDE, casos complejos.",
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
  authors: [{ name: "STANS ABOGADOS", url: "https://www.stansabogados.com" }],
  creator: "STANS ABOGADOS",
  publisher: "STANS ABOGADOS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.stansabogados.com'),
  alternates: {
    canonical: 'https://www.stansabogados.com/',
    languages: {
      'es': 'https://www.stansabogados.com/',
      'ar': 'https://www.stansabogados.com/',
      'x-default': 'https://www.stansabogados.com/'
    },
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
    title: "Abogados Penalistas Madrid 24/7 | STANS ABOGADOS",
    description: "Especialistas en Derecho Penal. Defensa penal 24/7, respuesta en menos de 15 minutos. Abogados penalistas colegiados ICAM. Español, inglés y árabe.",
    url: 'https://www.stansabogados.com',
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
    title: 'Abogados Penalistas Madrid 24/7 | STANS ABOGADOS',
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
            'DC.identifier': 'https://www.stansabogados.com',
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
        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17559381440"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17559381440');
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#191919" />
        <meta name="msapplication-TileColor" content="#191919" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect para mejorar performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        {/* Global Website Schema for better SEO */}
        <WebsiteSchema />
        <LocalBusinessSchema />
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
