import React from "react"
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

interface SchemaMarkupProps {
  type?: "LegalService" | "LawFirm" | "Attorney" | "Article" | "BlogPosting" | "WebPage" | "FAQPage" | "Person" | "Review"
  data?: any
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type = "LegalService", data }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const getSchemaData = () => {
    switch (type) {
      case "LegalService":
        return {
          "@context": "https://schema.org",
          "@type": "LegalService",
          "@id": "https://www.stansabogados.com/#organization",
          name: (t as any).metadata?.schema?.name || "STANS ABOGADOS",
          alternateName: "STANS Abogados Penalistas",
          description: (t as any).metadata?.schema?.description || "Especialistas en Derecho Penal en Madrid y España. Defensa penal 24/7.",
          url: "https://www.stansabogados.com",
          logo: {
            "@type": "ImageObject",
            url: "https://www.stansabogados.com/images/logos/logo-horizontal.png",
            width: 1200,
            height: 630
          },
          image: [
            "https://www.stansabogados.com/images/logos/logo-horizontal.png",
            "https://www.stansabogados.com/images/Equipo-optimized/Ruben1.webp",
            "https://www.stansabogados.com/images/Equipo-optimized/Mounir1.webp",
            "https://www.stansabogados.com/images/Equipo-optimized/Diego1.webp"
          ],
          telephone: "+34611687226",
          email: "info@stansabogados.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Madrid",
            addressRegion: "Madrid", 
            addressCountry: "ES",
            postalCode: "28001"
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 40.4168,
            longitude: -3.7038
          },
          areaServed: [
            {
              "@type": "City",
              name: "Madrid"
            },
            {
              "@type": "Country",
              name: "España"
            }
          ],
          knowsLanguage: ["es", "en", "ar"],
          openingHours: "Mo-Su 00:00-23:59",
          priceRange: "€€€",
          paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
          currenciesAccepted: "EUR",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Servicios de Defensa Penal",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Asistencia 24/7 en Detenciones",
                  description: "Asistencia legal inmediata las 24 horas del día"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Procedimientos de Extradición",
                  description: "Defensa en procedimientos de extradición entre España y Marruecos"
                }
              }
            ]
          },
          sameAs: [
            "https://www.linkedin.com/company/stans-abogados",
            "https://twitter.com/stansabogados"
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "150",
            bestRating: "5",
            worstRating: "1"
          }
        }
      
      case "Article":
      case "BlogPosting":
        return {
          "@context": "https://schema.org",
          "@type": type === "BlogPosting" ? "BlogPosting" : "Article",
          "@id": data?.url ? `https://www.stansabogados.com${data.url}#article` : undefined,
          headline: data?.title || "Artículo Legal",
          alternativeHeadline: data?.subtitle,
          description: data?.description || "",
          image: data?.image || "https://www.stansabogados.com/images/logos/logo-horizontal.png",
          author: {
            "@type": "Organization",
            name: "STANS ABOGADOS",
            url: "https://www.stansabogados.com"
          },
          publisher: {
            "@type": "Organization", 
            name: "STANS ABOGADOS",
            logo: {
              "@type": "ImageObject",
              url: "https://www.stansabogados.com/images/logos/logo-horizontal.png"
            }
          },
          datePublished: data?.datePublished || new Date().toISOString(),
          dateModified: data?.dateModified || data?.datePublished || new Date().toISOString(),
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": data?.url ? `https://www.stansabogados.com${data.url}` : "https://www.stansabogados.com"
          },
          keywords: data?.keywords || "derecho penal, abogado penalista, Madrid, defensa penal",
          articleSection: data?.section || "Blog Jurídico",
          inLanguage: language === "ar" ? "ar" : "es",
          potentialAction: {
            "@type": "ReadAction",
            target: data?.url ? `https://www.stansabogados.com${data.url}` : "https://www.stansabogados.com"
          }
        }
      
      case "WebPage":
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": data?.url ? `https://www.stansabogados.com${data.url}` : "https://www.stansabogados.com",
          name: data?.title || "STANS ABOGADOS",
          description: data?.description || "Página de STANS ABOGADOS",
          url: data?.url ? `https://www.stansabogados.com${data.url}` : "https://www.stansabogados.com",
          isPartOf: {
            "@type": "WebSite",
            "@id": "https://www.stansabogados.com/#website",
            name: "STANS ABOGADOS",
            url: "https://www.stansabogados.com"
          },
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: data?.image || "https://www.stansabogados.com/images/logos/logo-horizontal.png"
          },
          breadcrumb: data?.breadcrumb,
          inLanguage: language === "ar" ? "ar" : "es"
        }
        
      case "FAQPage":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data?.questions?.map((q: any) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: q.answer
            }
          })) || []
        }
        
      case "Person":
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          name: data?.name,
          jobTitle: data?.jobTitle || "Abogado Penalista",
          worksFor: {
            "@type": "Organization",
            name: "STANS ABOGADOS"
          },
          description: data?.description,
          image: data?.image,
          sameAs: data?.socialLinks || []
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
