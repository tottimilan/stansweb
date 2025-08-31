// Traducciones de casos generadas automáticamente
export const caseTranslations: CaseTranslations = {
  "es": {},
  "ar": {}
};

// Estructura para traducciones de casos individuales
export interface CaseTranslation {
  nombre: string;
  delito_principal: string;
  resultado: string;
  tipo_resolucion: string;
  organo: string;
  seccion: string;
  localidad: string;
  parte: string;
  medidas_cautelares?: string;
  observaciones?: string;
  noticias?: string;
  links?: string;
  contenido?: Record<string, string>;
}

export interface CaseTranslations {
  es: Record<string, CaseTranslation>;
  ar: Record<string, CaseTranslation>;
}

// Función helper para obtener traducción de un caso
export function getCaseTranslation(caseId: string, language: 'es' | 'ar'): CaseTranslation | null {
  return caseTranslations[language][caseId] || null;
}

// Función helper para obtener campo traducido
export function getTranslatedField(caseId: string, field: keyof CaseTranslation, language: 'es' | 'ar'): string {
  const translation = getCaseTranslation(caseId, language);
  const value = translation?.[field];
  return typeof value === 'string' ? value : '';
}
