'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Shield, Clock, Award, FileText, Scale } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { casesTranslations } from '@/translations/cases-translations';

type Case = {
  id: number;
  categoria: string;
  nombre: string;
  delito_principal: string;
  resultado: string;
  tipo_resolucion: string;
  favorabilidad: string;
  organo: string;
  localidad: string;
  año: string;
  contenido: {
    resumen: string;
  };
  url?: string;
  imagen?: string;
  caso_en_curso?: boolean;
};

type Props = {
  caso: Case;
};

const getIcon = (categoria: string) => {
  const cat = categoria.toLowerCase();
  if (cat.includes('terrorismo') || cat.includes('yihadista')) return <Shield className="h-6 w-6" />;
  if (cat.includes('odio') || cat.includes('expresión')) return <FileText className="h-6 w-6" />;
  if (cat.includes('robo') || cat.includes('hurto')) return <Clock className="h-6 w-6" />;
  if (cat.includes('violencia') || cat.includes('persona')) return <Scale className="h-6 w-6" />;
  return <Award className="h-6 w-6" />;
};

// Mapeo de IDs a slugs SEO
const caseIdToSlug: { [key: number]: string } = {
  1: 'sobreseimiento-queque-abogados-cristianos',
  2: 'sobreseimiento-nordin-workout',
  3: 'operacion-luco-banda-rolex',
  4: 'caso-dominican-dont-play-ddp',
  5: 'caso-academia-yihad',
  6: 'caso-lesiones-getafe',
  7: 'caso-estafa-blanqueo-jaen',
  8: 'absolucion-resistencia-autoridad',
  9: 'caso-robo-violencia-absolucion',
  10: 'absolucion-blanqueo-imprudencia',
  11: 'absolucion-robo-violencia-juzgado-22',
  12: 'sobreseimiento-amenazas-coacciones-extorsion',
  13: 'sobreseimiento-delito-salud-publica',
  14: 'caso-robo-violencia-pozuelo',
  15: 'sobreseimiento-derechos-trabajadores',
  16: 'sobreseimiento-robo-fuerza-mostoles',
  17: 'sobreseimiento-robo-fuerza-navalcarnero',
  18: 'ejecuciones-penales-revocacion-requisitorias',
  19: 'abderrahim-akkouh-homicidio-torrejon',
  20: 'operacion-bop-trafico-drogas'
};

const getCaseUrl = (caso: Case) => {
  // Usar el slug SEO si existe, sino usar el ID como fallback
  const slug = caseIdToSlug[caso.id];
  return slug ? `/casos/${slug}` : `/casos/${caso.id}`;
};

// Traducir categorías
const getTranslatedCategory = (categoria: string, language: string, t: any) => {
  const categoryMap: { [key: string]: string } = {
    'Delitos de odio y libertad de expresión': t.casos.categorias.delitosOdio,
    'Terrorismo y Audiencia Nacional': t.casos.categorias.terrorismo,
    'Robos con violencia y grupo criminal': t.casos.categorias.robosViolencia,
    'Delitos contra las personas': t.casos.categorias.delitosPersonas,
    'Delitos económicos y contra el patrimonio': t.casos.categorias.delitosEconomicos,
    'Delitos contra el orden público, drogas y ejecución penal': t.casos.categorias.ordenPublico,
    'Delitos contra la salud pública': t.casos.categorias.delitosSaludPublica,
    'Delitos contra la autoridad': t.casos.categorias.delitosAutoridad,
    'Delitos patrimoniales': t.casos.categorias.delitosPatrimoniales,
    'Delitos contra la libertad': t.casos.categorias.delitosLibertad,
    'Delitos contra los derechos de los trabajadores': t.casos.categorias.delitosTrabajadores,
    'Ejecución penal': t.casos.categorias.ejecucionPenal,
    'Delitos contra la vida': t.casos.categorias.delitosVida,
    'Pertenencia a organización criminal': t.casos.categorias.organizacionCriminal,
    'Delitos contra la integridad física': t.casos.categorias.delitosIntegridad
  };

  return categoryMap[categoria] || categoria;
};

// Traducir resultados
const getTranslatedResult = (resultado: string, language: string, t: any) => {
  if (language === 'es') return resultado;

  const resultMaps: { [lang: string]: { [key: string]: string } } = {
    ar: {
      'Sobreseimiento': 'إغلاق الدعوى',
      'Absolución': 'البراءة',
      'Condena': 'الإدانة',
      'Archivo de Diligencias': 'حفظ الإجراءات',
      'Auto de Sobreseimiento': 'قرار إغلاق الدعوى',
      'Sentencia Absolutoria': 'حكم بالبراءة',
      'Sentencia Condenatoria': 'حكم بالإدانة',
      'La Audiencia Provincial decreta el Sobreseimiento': 'تصدر محكمة الاستئناف قرار إغلاق الدعوى',
      'Sobreseimiento sólo para nuestro cliente': 'إغلاق الدعوى لعميلنا فقط',
      'Absolución con todos los pronunciamientos favorables': 'البراءة مع جميع الأحكام المواتية',
      'Modificación de prisión provisional a libertad provisional sin fianza': 'تعديل السجن المؤقت إلى الحرية المؤقتة بدون كفالة',
      'Auto de sobreseimiento provisional': 'قرار إغلاق الدعوى المؤقت',
      'Audiencia Provincial estima recurso y archiva la causa': 'تقبل محكمة الاستئناف الاستئناف وتحفظ القضية',
      'Auto de sobreseimiento y archivo': 'قرار إغلاق الدعوى وحفظها',
      'Revocación de orden de búsqueda y captura': 'إلغاء أمر البحث والقبض',
      'Investigación en curso': 'التحقيق جارٍ',
      'Auto concediendo libertad provisional': 'قرار منح الحرية المؤقتة'
    },
    en: {
      'Sobreseimiento': 'Dismissal',
      'Absolución': 'Acquittal',
      'Condena': 'Conviction',
      'Archivo de Diligencias': 'Case Filed',
      'Auto de Sobreseimiento': 'Dismissal Order',
      'Sentencia Absolutoria': 'Acquittal Judgment',
      'Sentencia Condenatoria': 'Conviction Judgment',
      'La Audiencia Provincial decreta el Sobreseimiento': 'Provincial Court Orders Dismissal',
      'Sobreseimiento sólo para nuestro cliente': 'Dismissal for Our Client Only',
      'Absolución con todos los pronunciamientos favorables': 'Full Acquittal with All Favorable Rulings',
      'Modificación de prisión provisional a libertad provisional sin fianza': 'Pretrial Detention Modified to Release Without Bail',
      'Auto de sobreseimiento provisional': 'Provisional Dismissal Order',
      'Audiencia Provincial estima recurso y archiva la causa': 'Provincial Court Grants Appeal and Archives Case',
      'Auto de sobreseimiento y archivo': 'Dismissal and Archiving Order',
      'Revocación de orden de búsqueda y captura': 'Revocation of Arrest Warrant',
      'Investigación en curso': 'Investigation Ongoing',
      'Auto concediendo libertad provisional': 'Order Granting Provisional Release'
    },
    fr: {
      'Sobreseimiento': 'Non-lieu',
      'Absolución': 'Acquittement',
      'Condena': 'Condamnation',
      'Archivo de Diligencias': 'Classement sans suite',
      'Auto de Sobreseimiento': 'Ordonnance de non-lieu',
      'Sentencia Absolutoria': 'Jugement d\'acquittement',
      'Sentencia Condenatoria': 'Jugement de condamnation',
      'La Audiencia Provincial decreta el Sobreseimiento': 'La Cour Provinciale ordonne le non-lieu',
      'Sobreseimiento sólo para nuestro cliente': 'Non-lieu uniquement pour notre client',
      'Absolución con todos los pronunciamientos favorables': 'Acquittement total avec toutes les décisions favorables',
      'Modificación de prisión provisional a libertad provisional sin fianza': 'Modification de la détention provisoire en liberté sans caution',
      'Auto de sobreseimiento provisional': 'Ordonnance de non-lieu provisoire',
      'Audiencia Provincial estima recurso y archiva la causa': 'La Cour Provinciale accepte le recours et classe l\'affaire',
      'Auto de sobreseimiento y archivo': 'Ordonnance de non-lieu et classement',
      'Revocación de orden de búsqueda y captura': 'Révocation du mandat d\'arrêt',
      'Investigación en curso': 'Enquête en cours',
      'Auto concediendo libertad provisional': 'Ordonnance accordant la liberté provisoire'
    }
  };

  const langMap = resultMaps[language];
  return langMap?.[resultado] || resultado;
};

// Traducir tipos de resolución
const getTranslatedResolutionType = (tipo: string, language: string, t: any) => {
  if (language === 'es') return tipo;

  const typeMaps: { [lang: string]: { [key: string]: string } } = {
    ar: {
      'Sobreseimiento': 'إغلاق الدعوى',
      'Sentencia': 'حكم',
      'Auto': 'قرار',
      'Diligencias': 'إجراءات',
      'Archivo': 'حفظ',
      'Libertad provisional': 'الحرية المؤقتة',
      'Investigación en curso': 'التحقيق جارٍ',
      'Pendiente': 'معلق',
      'Absolución': 'البراءة',
      'Sustitución de prisión por libertad provisional': 'استبدال السجن بالحرية المؤقتة',
      'Sobreseimiento provisional': 'إغلاق الدعوى المؤقت',
      'Revocación / Archivo': 'إلغاء / حفظ',
      'Revocación': 'إلغاء'
    },
    en: {
      'Sobreseimiento': 'Dismissal',
      'Sentencia': 'Judgment',
      'Auto': 'Court Order',
      'Diligencias': 'Proceedings',
      'Archivo': 'Filing',
      'Libertad provisional': 'Provisional Release',
      'Investigación en curso': 'Ongoing Investigation',
      'Pendiente': 'Pending',
      'Absolución': 'Acquittal',
      'Sustitución de prisión por libertad provisional': 'Prison Substituted by Provisional Release',
      'Sobreseimiento provisional': 'Provisional Dismissal',
      'Revocación / Archivo': 'Revocation / Filing',
      'Revocación': 'Revocation'
    },
    fr: {
      'Sobreseimiento': 'Non-lieu',
      'Sentencia': 'Jugement',
      'Auto': 'Ordonnance',
      'Diligencias': 'Procédures',
      'Archivo': 'Classement',
      'Libertad provisional': 'Liberté provisoire',
      'Investigación en curso': 'Enquête en cours',
      'Pendiente': 'En attente',
      'Absolución': 'Acquittement',
      'Sustitución de prisión por libertad provisional': 'Substitution de prison par liberté provisoire',
      'Sobreseimiento provisional': 'Non-lieu provisoire',
      'Revocación / Archivo': 'Révocation / Classement',
      'Revocación': 'Révocation'
    }
  };

  const langMap = typeMaps[language];
  return langMap?.[tipo] || tipo;
};

// Traducir órganos judiciales
const getTranslatedOrgano = (organo: string, language: string) => {
  if (language === 'es') return organo;

  const organoMaps: { [lang: string]: { [key: string]: string } } = {
    ar: {
      'Juzgado de Instrucción nº 38 de Madrid': 'محكمة التحقيق رقم 38 في مدريد',
      'Audiencia Provincial de Madrid': 'محكمة الاستئناف في مدريد',
      'Juzgado de lo Penal nº 21 de Madrid': 'محكمة الجنايات رقم 21 في مدريد',
      'Juzgado Central de Instrucción nº 2': 'محكمة التحقيق المركزية رقم 2',
      'Juzgado de Instrucción nº 30 de Madrid': 'محكمة التحقيق رقم 30 في مدريد',
      'Juzgado de lo Penal nº 25 de Madrid': 'محكمة الجنايات رقم 25 في مدريد',
      'Juzgado de lo Penal nº 3 de Madrid': 'محكمة الجنايات رقم 3 في مدريد',
      'Audiencia Provincial de Jaén': 'محكمة الاستئناف في خاين',
      'Juzgado de Instrucción nº 1 de Jaén': 'محكمة التحقيق رقم 1 في خاين',
      'Juzgado de Instrucción nº 12 de Madrid': 'محكمة التحقيق رقم 12 في مدريد',
      'Juzgado de Instrucción nº 15 de Madrid': 'محكمة التحقيق رقم 15 في مدريد',
      'Juzgado de lo Penal nº 4 de Madrid': 'محكمة الجنايات رقم 4 في مدريد',
      'Juzgado de Instrucción nº 8 de Madrid': 'محكمة التحقيق رقم 8 في مدريد',
      'Juzgado de 1ª Instancia e Instrucción nº 6 de Getafe': 'محكمة الدرجة الأولى والتحقيق رقم 6 في خيتافي',
      'Juzgado Central de Instrucción nº 6 (Audiencia Nacional)': 'محكمة التحقيق المركزية رقم 6 (المحكمة الوطنية)',
      'Juzgado de Instrucción nº 4 de Pozuelo de Alarcón': 'محكمة التحقيق رقم 4 في بوزويلو دي ألاركون',
      'Sección 30 de la Audiencia Provincial de Madrid': 'الدائرة 30 من محكمة الاستئناف في مدريد',
      'Juzgado de Instrucción (por determinar)': 'محكمة التحقيق (قيد التحديد)',
      'Juzgado de lo Penal nº 3 de Jaén': 'محكمة الجنايات رقم 3 في خاين',
      'Juzgado de lo Penal nº 22 de Madrid': 'محكمة الجنايات رقم 22 في مدريد',
      'Juzgado de Instrucción nº 13 de Madrid': 'محكمة التحقيق رقم 13 في مدريد',
      'Juzgado de 1ª Instancia e Instrucción nº 5 de Valdemoro': 'محكمة الدرجة الأولى والتحقيق رقم 5 في فالديمورو',
      'Juzgado de Instrucción nº 1 de Móstoles': 'محكمة التحقيق رقم 1 في موستوليس',
      'Juzgado de 1ª Instancia e Instrucción nº 1 de Navalcarnero': 'محكمة الدرجة الأولى والتحقيق رقم 1 في نافالكارنيرو',
      'Juzgado Central de Instrucción nº 2 – Audiencia Nacional': 'محكمة التحقيق المركزية رقم 2 - المحكمة الوطنية',
      'Juzgado de Instrucción nº 1 de San Roque (Cádiz)': 'محكمة التحقيق رقم 1 في سان روكي (قادس)'
    },
    en: {
      'Juzgado de Instrucción nº 38 de Madrid': 'Investigation Court No. 38 of Madrid',
      'Audiencia Provincial de Madrid': 'Madrid Provincial Court',
      'Juzgado de lo Penal nº 21 de Madrid': 'Criminal Court No. 21 of Madrid',
      'Juzgado Central de Instrucción nº 2': 'Central Investigation Court No. 2',
      'Juzgado de Instrucción nº 30 de Madrid': 'Investigation Court No. 30 of Madrid',
      'Juzgado de lo Penal nº 25 de Madrid': 'Criminal Court No. 25 of Madrid',
      'Juzgado de lo Penal nº 3 de Madrid': 'Criminal Court No. 3 of Madrid',
      'Audiencia Provincial de Jaén': 'Jaén Provincial Court',
      'Juzgado de Instrucción nº 1 de Jaén': 'Investigation Court No. 1 of Jaén',
      'Juzgado de Instrucción nº 12 de Madrid': 'Investigation Court No. 12 of Madrid',
      'Juzgado de Instrucción nº 15 de Madrid': 'Investigation Court No. 15 of Madrid',
      'Juzgado de lo Penal nº 4 de Madrid': 'Criminal Court No. 4 of Madrid',
      'Juzgado de Instrucción nº 8 de Madrid': 'Investigation Court No. 8 of Madrid',
      'Juzgado de 1ª Instancia e Instrucción nº 6 de Getafe': 'Court of First Instance and Investigation No. 6 of Getafe',
      'Juzgado Central de Instrucción nº 6 (Audiencia Nacional)': 'Central Investigation Court No. 6 (National Court)',
      'Juzgado de Instrucción nº 4 de Pozuelo de Alarcón': 'Investigation Court No. 4 of Pozuelo de Alarcón',
      'Sección 30 de la Audiencia Provincial de Madrid': 'Section 30 of the Madrid Provincial Court',
      'Juzgado de Instrucción (por determinar)': 'Investigation Court (to be determined)',
      'Juzgado de lo Penal nº 3 de Jaén': 'Criminal Court No. 3 of Jaén',
      'Juzgado de lo Penal nº 22 de Madrid': 'Criminal Court No. 22 of Madrid',
      'Juzgado de Instrucción nº 13 de Madrid': 'Investigation Court No. 13 of Madrid',
      'Juzgado de 1ª Instancia e Instrucción nº 5 de Valdemoro': 'Court of First Instance and Investigation No. 5 of Valdemoro',
      'Juzgado de Instrucción nº 1 de Móstoles': 'Investigation Court No. 1 of Móstoles',
      'Juzgado de 1ª Instancia e Instrucción nº 1 de Navalcarnero': 'Court of First Instance and Investigation No. 1 of Navalcarnero',
      'Juzgado Central de Instrucción nº 2 – Audiencia Nacional': 'Central Investigation Court No. 2 – National Court',
      'Juzgado de Instrucción nº 1 de San Roque (Cádiz)': 'Investigation Court No. 1 of San Roque (Cádiz)'
    },
    fr: {
      'Juzgado de Instrucción nº 38 de Madrid': 'Tribunal d\'instruction nº 38 de Madrid',
      'Audiencia Provincial de Madrid': 'Cour provinciale de Madrid',
      'Juzgado de lo Penal nº 21 de Madrid': 'Tribunal pénal nº 21 de Madrid',
      'Juzgado Central de Instrucción nº 2': 'Tribunal central d\'instruction nº 2',
      'Juzgado de Instrucción nº 30 de Madrid': 'Tribunal d\'instruction nº 30 de Madrid',
      'Juzgado de lo Penal nº 25 de Madrid': 'Tribunal pénal nº 25 de Madrid',
      'Juzgado de lo Penal nº 3 de Madrid': 'Tribunal pénal nº 3 de Madrid',
      'Audiencia Provincial de Jaén': 'Cour provinciale de Jaén',
      'Juzgado de Instrucción nº 1 de Jaén': 'Tribunal d\'instruction nº 1 de Jaén',
      'Juzgado de Instrucción nº 12 de Madrid': 'Tribunal d\'instruction nº 12 de Madrid',
      'Juzgado de Instrucción nº 15 de Madrid': 'Tribunal d\'instruction nº 15 de Madrid',
      'Juzgado de lo Penal nº 4 de Madrid': 'Tribunal pénal nº 4 de Madrid',
      'Juzgado de Instrucción nº 8 de Madrid': 'Tribunal d\'instruction nº 8 de Madrid',
      'Juzgado de 1ª Instancia e Instrucción nº 6 de Getafe': 'Tribunal de première instance et d\'instruction nº 6 de Getafe',
      'Juzgado Central de Instrucción nº 6 (Audiencia Nacional)': 'Tribunal central d\'instruction nº 6 (Cour nationale)',
      'Juzgado de Instrucción nº 4 de Pozuelo de Alarcón': 'Tribunal d\'instruction nº 4 de Pozuelo de Alarcón',
      'Sección 30 de la Audiencia Provincial de Madrid': 'Section 30 de la Cour provinciale de Madrid',
      'Juzgado de Instrucción (por determinar)': 'Tribunal d\'instruction (à déterminer)',
      'Juzgado de lo Penal nº 3 de Jaén': 'Tribunal pénal nº 3 de Jaén',
      'Juzgado de lo Penal nº 22 de Madrid': 'Tribunal pénal nº 22 de Madrid',
      'Juzgado de Instrucción nº 13 de Madrid': 'Tribunal d\'instruction nº 13 de Madrid',
      'Juzgado de 1ª Instancia e Instrucción nº 5 de Valdemoro': 'Tribunal de première instance et d\'instruction nº 5 de Valdemoro',
      'Juzgado de Instrucción nº 1 de Móstoles': 'Tribunal d\'instruction nº 1 de Móstoles',
      'Juzgado de 1ª Instancia e Instrucción nº 1 de Navalcarnero': 'Tribunal de première instance et d\'instruction nº 1 de Navalcarnero',
      'Juzgado Central de Instrucción nº 2 – Audiencia Nacional': 'Tribunal central d\'instruction nº 2 – Cour nationale',
      'Juzgado de Instrucción nº 1 de San Roque (Cádiz)': 'Tribunal d\'instruction nº 1 de San Roque (Cadix)'
    }
  };

  const langMap = organoMaps[language];
  return langMap?.[organo] || organo;
};

// Traducir localidades
const getTranslatedLocalidad = (localidad: string, language: string) => {
  if (language === 'es') return localidad;

  const localidadMaps: { [lang: string]: { [key: string]: string } } = {
    ar: {
      'Madrid': 'مدريد',
      'Jaén': 'خاين',
      'San Roque (Cádiz)': 'سان روكي (قادس)',
      'Pozuelo de Alarcón (Madrid)': 'بوزويلو دي ألاركون (مدريد)',
      'Getafe (Madrid)': 'خيتافي (مدريد)',
      'Torrejón de Ardoz (Madrid)': 'توريخون دي أردوز (مدريد)',
      'Alcorcón': 'ألكوركون',
      'Madrid / Alcorcón (Madrid)': 'مدريد / ألكوركون (مدريد)',
      'Valdemoro (Madrid)': 'فالديمورو (مدريد)',
      'Móstoles (Madrid)': 'موستوليس (مدريد)',
      'Navalcarnero (Madrid)': 'نافالكارنيرو (مدريد)',
      'Por confirmar': 'قيد التأكيد'
    },
    en: {
      'Por confirmar': 'To be confirmed'
    },
    fr: {
      'Por confirmar': 'À confirmer'
    }
  };

  const langMap = localidadMaps[language];
  return langMap?.[localidad] || localidad;
};

// Traducir etiquetas comunes
const getTranslatedLabel = (label: string, language: string, t: any) => {
  if (language === 'es') return label;

  const labelMap: { [key: string]: string } = {
    'Caso Popular': t.caso.casoPopular,
    'Resultado:': t.casosDestacados.resultado,
    'Órgano:': t.casosDestacados.organo,
    'Tipo:': t.casosDestacados.tipo,
    'Ver caso completo': t.casosDestacados.verCasoCompleto
  };

  return labelMap[label] || label;
};

// Función para convertir texto en mayúsculas a formato título normal
const toTitleCase = (text: string): string => {
  // Remover prefijo "CASO" o "CASO -" si existe
  text = text.replace(/^CASO\s*-?\s*/i, '');
  
  // Convertir a minúsculas y luego capitalizar cada palabra
  return text.toLowerCase().split(' ').map((word, index) => {
    // Palabras que deben permanecer en minúsculas (excepto si son la primera palabra)
    const minusculas = ['de', 'del', 'la', 'el', 'en', 'por', 'a', 'con', 'y', 'o', 'para', 'ante'];
    if (index > 0 && minusculas.includes(word)) {
      return word;
    }
    // Capitalizar primera letra
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
};

// Traducir título del caso
const getTranslatedCaseName = (caseId: number, originalName: string, language: string) => {
  if (language === 'es') return toTitleCase(originalName);

  // Obtener traducciones del idioma correcto
  const langTranslations = casesTranslations[language as keyof typeof casesTranslations];
  if (!langTranslations) return toTitleCase(originalName);
  
  const caseTranslation = langTranslations.cases[caseId as keyof typeof langTranslations.cases];
  const translatedName = caseTranslation?.nombre || originalName;
  
  // Para árabe, no aplicar toTitleCase ya que tiene su propia estructura
  if (language === 'ar') return translatedName;
  return toTitleCase(translatedName);
};

// Traducir resumen del caso
const getTranslatedCaseSummary = (caseId: number, originalSummary: string, language: string) => {
  if (language === 'es') return originalSummary;

  // Obtener traducciones del idioma correcto
  const langTranslations = casesTranslations[language as keyof typeof casesTranslations];
  if (!langTranslations) return originalSummary;
  
  const caseTranslation = langTranslations.cases[caseId as keyof typeof langTranslations.cases];
  return caseTranslation?.resumen || originalSummary;
};

export default function CaseCard({ caso }: Props) {
  const { language } = useLanguage();
  const t = translations[language];

  // Verificar si es un caso en curso
  const isOngoingCase = caso.caso_en_curso;
  
  // Traducir y limitar el resumen a una longitud razonable
  const translatedSummary = isOngoingCase 
    ? t.casosDestacados.informacionProtegida
    : getTranslatedCaseSummary(caso.id, caso.contenido.resumen, language);
  const summary = !isOngoingCase && translatedSummary.length > 120
    ? translatedSummary.substring(0, 120) + '...'
    : translatedSummary;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group rounded-2xl border border-gold/30 bg-white p-6 text-black shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-gold/20 hover:border-gold/50 h-full flex flex-col"
    >
      {/* Header con icono y badge de favorable */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-gold group-hover:text-apricot transition-colors">
          {getIcon(caso.categoria)}
        </div>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
          isOngoingCase
            ? 'bg-yellow-600/80 text-yellow-100 border border-yellow-500/30'
            : caso.favorabilidad === 'Neutro'
            ? 'bg-blue-600 text-blue-100'
            : 'bg-emerald-700 text-emerald-100'
        }`}>
          {isOngoingCase 
            ? t.casosDestacados.verCasoEnCurso 
            : caso.favorabilidad === 'Neutro' 
            ? t.casosDestacados.enCurso 
            : t.casosDestacados.favorable}
        </span>
      </div>

      {/* Categoría */}
      <div className="text-xs text-gold/70 uppercase tracking-wide mb-2">
        {getTranslatedCategory(caso.categoria, language, t)}
      </div>

      {/* Título del caso - Clickeable */}
      <Link href={getCaseUrl(caso)}>
        <h3 className="text-lg font-semibold group-hover:text-gold transition-colors mb-3 leading-tight cursor-pointer">
          {getTranslatedCaseName(caso.id, caso.nombre.replace(/^CASO\s*-?\s*/, ''), language)}
        </h3>
      </Link>

      {/* Información del caso */}
      <div className="space-y-2 mb-4 flex-grow">
        {isOngoingCase ? (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-center">
            <div className="text-sm font-semibold text-orange-800 mb-1">
              🔒 {t.casosDestacados.casoEnInvestigacion}
            </div>
            <div className="text-xs text-orange-700">
              {t.casosDestacados.informacionProtegida}
            </div>
          </div>
        ) : (
          <>
            <div className="text-sm text-black/70">
              <span className="font-medium text-black">{t.casosDestacados.resultado}</span> {getTranslatedResult(caso.resultado, language, t)}
            </div>
            <div className="text-sm text-black/70">
              <span className="font-medium text-black">{t.casosDestacados.organo}</span> {getTranslatedOrgano(caso.organo, language)}
            </div>
            <div className="text-sm text-black/70">
              <span className="font-medium text-black">{t.casosDestacados.tipo}</span> {getTranslatedResolutionType(caso.tipo_resolucion, language, t)}
            </div>
          </>
        )}
      </div>

      {/* Resumen */}
      <p className="text-black/70 text-sm leading-relaxed mb-4 flex-grow">
        {summary}
      </p>

      {/* Botón de acción */}
      <Link
        href={getCaseUrl(caso)}
        className={`inline-flex items-center mt-auto text-sm px-4 py-2 rounded-lg hover:opacity-90 transition group ${
          isOngoingCase 
            ? 'text-black bg-yellow-600/80 border border-yellow-500/50 hover:bg-yellow-600' 
            : 'text-black bg-gold'
        }`}
      >
        {isOngoingCase && (
          <div className="w-2 h-2 bg-yellow-200 rounded-full animate-pulse mr-2"></div>
        )}
        {isOngoingCase ? t.casosDestacados.verCasoEnCurso : t.casosDestacados.verCasoCompleto}
        <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
