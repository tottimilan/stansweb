import { useLanguage } from '@/contexts/LanguageContext';

// Mapeo de URLs traducidas
const urlMappings: Record<string, { es: string; ar: string }> = {
  // Este objeto se puede generar automáticamente desde el script de traducción
};

export function useTranslatedUrl(caseId: string) {
  const { language } = useLanguage();
  
  const getUrl = (): string => {
    const mapping = urlMappings[caseId];
    if (!mapping) {
      // Fallback a URL por defecto
      return language === 'ar' ? `/ar/casos/${caseId}` : `/casos/${caseId}`;
    }
    
    return mapping[language as 'es' | 'ar'] || mapping.es;
  };
  
  return getUrl();
}

export function generateTranslatedUrl(caseId: string, caseName: string, language: 'es' | 'ar'): string {
  if (language === 'es') {
    return `/casos/${caseId}`;
  }
  
  // Para árabe, crear URL con slug traducido
  const slug = caseName
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
  
  return `/ar/casos/${caseId}-${slug}`;
}
