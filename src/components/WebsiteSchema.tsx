
import React from 'react';

export default function WebsiteSchema() {
  // Por defecto en español para el Schema markup global
  
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://stansabogados.com/#website",
        "url": "https://stansabogados.com",
        "name": "STANS ABOGADOS",
        "description": "Especialistas en Derecho Penal en Madrid y España. Defensa penal 24/7",
        "publisher": {
          "@id": "https://stansabogados.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://stansabogados.com/buscar?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": ["es", "ar", "en"]
      },
      {
        "@type": "Organization",
        "@id": "https://stansabogados.com/#organization",
        "name": "STANS ABOGADOS",
        "alternateName": "STANS Abogados Penalistas",
        "url": "https://stansabogados.com",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://stansabogados.com/#logo",
          "url": "https://stansabogados.com/images/logos/logo-horizontal.png",
          "contentUrl": "https://stansabogados.com/images/logos/logo-horizontal.png",
          "width": 1200,
          "height": 630,
          "caption": "STANS ABOGADOS Logo"
        },
        "image": {
          "@id": "https://stansabogados.com/#logo"
        },
        "sameAs": [
          "https://www.linkedin.com/company/stans-abogados",
          "https://twitter.com/stansabogados",
          "https://wa.me/34611687226"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+34-611-687-226",
            "contactType": "Emergencia Legal 24/7",
            "contactOption": ["TollFree", "HearingImpairedSupported"],
            "areaServed": ["ES", "MA"],
            "availableLanguage": ["Spanish", "English", "Arabic"]
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData)
      }}
    />
  );
}
