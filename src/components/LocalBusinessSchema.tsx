export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://www.stansabogados.com/#legal-service",
    "name": "STANS ABOGADOS",
    "alternateName": "STANS Abogados Penalistas Madrid",
    "description": "Despacho de abogados penalistas especializado en defensa penal, terrorismo, extradiciones y derechos fundamentales. Atención 24/7 en español, inglés y árabe.",
    "url": "https://www.stansabogados.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.stansabogados.com/images/logos/logo-horizontal.png",
      "width": 1200,
      "height": 630
    },
    "image": [
      "https://www.stansabogados.com/images/logos/logo-horizontal.png",
      "https://www.stansabogados.com/images/logos/logo-vertical.png"
    ],
    
    // Contacto
    "telephone": "+34611687226",
    "email": "info@stansabogados.com",
    
    // Dirección física completa
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle de Abtao, 44, Oficina 7",
      "addressLocality": "Madrid",
      "addressRegion": "Comunidad de Madrid",
      "postalCode": "28007",
      "addressCountry": "ES"
    },
    
    // Geolocalización (Retiro, Madrid)
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.4168,
      "longitude": -3.7038
    },
    
    // Horario de apertura (especificación Schema.org)
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    
    // Horario adicional para emergencias
    "additionalProperty": {
      "@type": "PropertyValue",
      "name": "Atención de Urgencias",
      "value": "24/7 disponible para emergencias penales"
    },
    
    // Área de servicio
    "areaServed": [
      {
        "@type": "City",
        "name": "Madrid"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Comunidad de Madrid"
      },
      {
        "@type": "Country",
        "name": "España"
      },
      {
        "@type": "Country",
        "name": "Marruecos",
        "description": "Extradiciones España-Marruecos"
      }
    ],
    
    // Idiomas que habla el equipo (formato correcto Schema.org)
    "knowsLanguage": ["es", "en", "ar"],
    
    // Año de fundación
    "foundingDate": "2024",
    
    // Número de empleados
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 3
    },
    
    // Servicios ofrecidos
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Defensa Penal",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Defensa Penal 24/7",
            "description": "Asistencia legal penal inmediata las 24 horas del día, 7 días a la semana"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Terrorismo ante Audiencia Nacional",
            "description": "Defensa especializada en delitos de terrorismo, enaltecimiento, captación yihadista"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Extradiciones España-Marruecos",
            "description": "Procedimientos de extradición entre España y Marruecos, OEDE"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Derecho Penal Económico",
            "description": "Blanqueo de capitales, estafa, delitos societarios"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Derechos Fundamentales",
            "description": "Recursos ante Tribunal Constitucional y TEDH"
          }
        }
      ]
    },
    
    // Equipo de abogados
    "employee": [
      {
        "@type": "Person",
        "@id": "https://www.stansabogados.com/equipo/ruben-vaquero-arribas",
        "name": "Rubén Vaquero Arribas",
        "jobTitle": "Socio Director",
        "description": "Especialista en Derecho Penal Económico y Derechos Fundamentales",
        "knowsLanguage": ["es", "en"],
        "url": "https://www.stansabogados.com/equipo/ruben-vaquero-arribas"
      },
      {
        "@type": "Person",
        "@id": "https://www.stansabogados.com/equipo/mounir-elyemlahy-chouati",
        "name": "Mounir Elyemlahy Chouati",
        "jobTitle": "Socio Abogado",
        "description": "Especialista en Terrorismo, Derecho Marroquí y Extradiciones",
        "knowsLanguage": ["es", "en", "ar"],
        "url": "https://www.stansabogados.com/equipo/mounir-elyemlahy-chouati"
      },
      {
        "@type": "Person",
        "@id": "https://www.stansabogados.com/equipo/diego-cardona-valero",
        "name": "Diego Cardona Valero",
        "jobTitle": "Socio Abogado",
        "description": "Especialista en Derecho Procesal Penal y Criminalidad Organizada",
        "knowsLanguage": ["es"],
        "url": "https://www.stansabogados.com/equipo/diego-cardona-valero"
      }
    ],
    
    // Calificaciones (ajusta según tus datos reales)
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "85",
      "bestRating": "5",
      "worstRating": "1"
    },
    
    // Redes sociales
    "sameAs": [
      "https://www.linkedin.com/company/stans-abogados",
      "https://twitter.com/stansabogados",
      "https://wa.me/34611687226"
    ],
    
    // Tipo de negocio
    "priceRange": "€€",
    "paymentAccepted": "Efectivo, Transferencia, Tarjeta",
    "currenciesAccepted": "EUR",
    
    // Características especiales
    "knowsAbout": [
      "Derecho Penal",
      "Terrorismo",
      "Audiencia Nacional",
      "Extradiciones",
      "OEDE",
      "Derecho Penal Económico",
      "Blanqueo de Capitales",
      "Derechos Fundamentales",
      "Derecho Marroquí"
    ],
    
    // Área específica
    "servesCuisine": "N/A",
    "smokingAllowed": false,
    "isAccessibleForFree": false,
    
    // Identificador único
    "taxID": "N/A",
    "vatID": "N/A",
    
    // Membresía
    "memberOf": {
      "@type": "Organization",
      "name": "Ilustre Colegio de Abogados de Madrid",
      "alternateName": "ICAM"
    }
  };

  return (
    <script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

