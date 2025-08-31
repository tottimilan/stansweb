import { useLanguage } from '@/contexts/LanguageContext';
import { getCaseTranslation, getTranslatedField, CaseTranslation } from '@/translations/cases';

export function useCaseTranslation(caseId: string) {
  const { language } = useLanguage();
  
  const getTranslation = (): CaseTranslation | null => {
    return getCaseTranslation(caseId, language as 'es' | 'ar');
  };
  
  const getField = (field: keyof CaseTranslation): string => {
    return getTranslatedField(caseId, field, language as 'es' | 'ar');
  };
  
  const getContent = (section: string): string => {
    const translation = getTranslation();
    return translation?.contenido?.[section] || '';
  };
  
  return {
    getTranslation,
    getField,
    getContent,
    language
  };
}
