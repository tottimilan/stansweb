import { CaseTranslation } from '@/translations/cases';

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogType: string;
  ogUrl: string;
  twitterCard: string;
  twitterTitle: string;
  twitterDescription: string;
  canonicalUrl: string;
}

export function generateCaseSEO(
  caseId: string,
  caseData: any,
  translation: CaseTranslation | null,
  language: 'es' | 'ar'
): SEOMetadata {
  const baseUrl = 'https://www.stansabogados.com';
  
  // Usar traducción si está disponible, sino usar datos originales
  const nombre = translation?.nombre || caseData.nombre;
  const delitoPrincipal = translation?.delito_principal || caseData.delito_principal;
  const resultado = translation?.resultado || caseData.resultado;
  const categoria = caseData.categoria;
  
  const title = language === 'es' 
    ? `${nombre} - STANS ABOGADOS`
    : `${nombre} - ستانس أبودادوس`;
  
  const description = language === 'es'
    ? `Caso ${nombre} resuelto por STANS ABOGADOS. ${resultado}. Especialistas en ${delitoPrincipal}.`
    : `قضية ${nombre} تم حلها بواسطة ستانس أبودادوس. ${resultado}. متخصصون في ${delitoPrincipal}.`;
  
  const keywords = language === 'es'
    ? `${delitoPrincipal}, ${categoria}, abogados penalistas, STANS ABOGADOS, Madrid`
    : `${delitoPrincipal}, ${categoria}, محامون جنائيون, ستانس أبودادوس, مدريد`;
  
  const url = language === 'es'
    ? `${baseUrl}/casos/${caseId}`
    : `${baseUrl}/ar/casos/${caseId}`;
  
  return {
    title,
    description,
    keywords,
    ogTitle: title,
    ogDescription: description,
    ogType: 'article',
    ogUrl: url,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    canonicalUrl: url
  };
}

export function generateCasesListSEO(language: 'es' | 'ar'): SEOMetadata {
  const baseUrl = 'https://www.stansabogados.com';
  
  const title = language === 'es'
    ? 'Casos y Resultados - STANS ABOGADOS'
    : 'القضايا والنتائج - ستانس أبودادوس';
  
  const description = language === 'es'
    ? 'Descubre algunos de nuestros casos más destacados y los resultados obtenidos para nuestros clientes. Especialistas en derecho penal en Madrid.'
    : 'اكتشف بعض من أبرز قضايانا والنتائج التي حصلنا عليها لعملائنا. متخصصون في القانون الجنائي في مدريد.';
  
  const keywords = language === 'es'
    ? 'casos penales, resultados, abogados penalistas, STANS ABOGADOS, Madrid, defensa penal'
    : 'قضايا جنائية, نتائج, محامون جنائيون, ستانس أبودادوس, مدريد, دفاع جنائي';
  
  const url = language === 'es'
    ? `${baseUrl}/casos`
    : `${baseUrl}/ar/casos`;
  
  return {
    title,
    description,
    keywords,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogUrl: url,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    canonicalUrl: url
  };
}
