import React from "react"

interface SchemaMarkupProps {
  type?: "LegalService" | "LawFirm" | "Attorney" | "Article"
  data?: any
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type = "LegalService", data }) => {
  const getSchemaData = () => {
    switch (type) {
      case "LegalService":
        return {
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "STANS ABOGADOS",
          description: "Especialistas en Derecho Penal en Madrid y España. Defensa penal 24/7.",
          url: "https://stansabogados.com",
          telephone: "+34-XXX-XXX-XXX",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Madrid",
            addressRegion: "Madrid", 
            addressCountry: "ES"
          },
          areaServed: {
            "@type": "Place",
            name: "España"
          },
          serviceType: [
            "Derecho Penal",
            "Defensa Criminal", 
            "Extradiciones",
            "Terrorismo"
          ],
          availableLanguage: ["es", "en", "ar"],
          openingHours: "24/7"
        }
      
      case "Article":
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: data?.title || "Caso Legal",
          description: data?.description || "",
          author: {
            "@type": "Organization",
            name: "STANS ABOGADOS"
          },
          publisher: {
            "@type": "Organization", 
            name: "STANS ABOGADOS"
          },
          datePublished: data?.date || new Date().toISOString(),
          keywords: data?.keywords || "derecho penal, abogado, Madrid"
        }
      
      default:
        return {}
    }
  }

  const schemaData = getSchemaData()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData, null, 2)
      }}
    />
  )
}

export default SchemaMarkup
