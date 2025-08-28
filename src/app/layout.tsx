import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STANS ABOGADOS — Defensa Penal 24/7 en Madrid y España",
  description: "Especialistas en Derecho Penal. Español–Árabe. Respuesta en menos de 15 minutos. Colegiados ICAM.",
  keywords: "abogado penal, defensa penal, Madrid, España, árabe, extradición, OEDE",
  authors: [{ name: "STANS ABOGADOS" }],
  openGraph: {
    title: "STANS ABOGADOS — Defensa Penal 24/7",
    description: "Especialistas en Derecho Penal. Español–Árabe. Respuesta en menos de 15 minutos.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
