import { useLanguage } from '@/contexts/LanguageContext';
import { getCaseTranslation, getTranslatedCaseField, CaseTranslation } from '@/translations/cases';

export function useCaseTranslation(caseId: string) {
  const { language } = useLanguage();
  
  const getTranslation = (): CaseTranslation | null => {
    return getCaseTranslation(parseInt(caseId), language as 'es' | 'ar');
  };
  
  const getField = (field: keyof CaseTranslation): string => {
    return getTranslatedCaseField(parseInt(caseId), field, language as 'es' | 'ar');
  };
  
  const getContent = (section: keyof CaseTranslation['contenido']): string => {
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
