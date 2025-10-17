import { Lawyer } from '@/data/lawyers';

interface LawyerSchemaProps {
  lawyer: Lawyer;
}

export default function LawyerSchema({ lawyer }: LawyerSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": lawyer.name,
    "jobTitle": lawyer.role,
    "worksFor": {
      "@type": "LegalService",
      "name": "STANS ABOGADOS",
      "url": "https://www.stansabogados.com",
      "telephone": "+34611687226",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Madrid",
        "addressRegion": "Madrid",
        "addressCountry": "ES"
      }
    },
    "description": lawyer.summary,
    "knowsAbout": lawyer.specializations,
    "knowsLanguage": lawyer.languageLabels.map(lang => ({
      "@type": "Language",
      "name": lang
    })),
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Abogado Penalista",
      "occupationalCategory": "Legal Services",
      "responsibilities": lawyer.practiceAreas.join(', ')
    },
    "alumniOf": lawyer.education.map(edu => ({
      "@type": "EducationalOrganization",
      "name": edu
    })),
    "image": `https://www.stansabogados.com${lawyer.image}`,
    "url": `https://www.stansabogados.com/equipo/${lawyer.slug}`,
    "sameAs": lawyer.linkedin ? [lawyer.linkedin] : [],
    ...(lawyer.email && { "email": lawyer.email }),
    ...(lawyer.phone && { "telephone": lawyer.phone }),
    "memberOf": {
      "@type": "Organization",
      "name": "Ilustre Colegio de Abogados de Madrid",
      "alternateName": "ICAM"
    },
    "award": lawyer.achievements,
    "seeks": "Justicia y defensa de derechos fundamentales"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

