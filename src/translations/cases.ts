// Sistema de traducciones para casos individuales
import { casesES } from './cases-es';
import { casesAR } from './cases-ar';

export interface CaseTranslation {
  nombre: string;
  delito_principal: string;
  resultado: string;
  contenido: {
    resumen: string;
    hechos: string;
    estrategia: string;
    pruebas: string;
    resolucion: string;
    marco_legal: string;
  };
}

export interface CasesTranslations {
  [key: number]: CaseTranslation;
}

export const casesTranslations = {
  es: casesES as CasesTranslations,
  ar: casesAR as CasesTranslations
};

// Función helper para obtener la traducción de un caso
export function getCaseTranslation(caseId: number, language: 'es' | 'ar'): CaseTranslation | null {
  const translations = casesTranslations[language];
  return translations[caseId] || null;
}

// Función para obtener el campo traducido de un caso
export function getTranslatedCaseField(
  caseId: number, 
  field: keyof CaseTranslation | 'contenido.resumen' | 'contenido.hechos' | 'contenido.estrategia' | 'contenido.pruebas' | 'contenido.resolucion' | 'contenido.marco_legal',
  language: 'es' | 'ar',
  fallback?: string
): string {
  const translation = getCaseTranslation(caseId, language);
  
  if (!translation) {
    return fallback || '';
  }
  
  // Handle nested fields
  if (field.includes('.')) {
    const [parent, child] = field.split('.');
    if (parent === 'contenido' && translation.contenido) {
      return (translation.contenido as any)[child] || fallback || '';
    }
  }
  
  // Handle top-level fields
  return (translation as any)[field] || fallback || '';
}