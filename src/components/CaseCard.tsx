'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Shield, Clock, Award, FileText, Scale } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

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

const getCaseUrl = (caso: Case) => {
  // Usar el ID del caso para la URL
  return `/casos/${caso.id}`;
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
const getTranslatedResult = (resultado: string, t: any) => {
  // Mapeo de resultados comunes
  const resultMap: { [key: string]: string } = {
    'Sobreseimiento': t.casos.resultadosCasos.sobreseimiento,
    'Absolución': t.casos.resultadosCasos.absolucion,
    'Condena': t.casos.resultadosCasos.condena,
    'Archivo de Diligencias': t.casos.resultadosCasos.archivoDiligencias,
    'Auto de Sobreseimiento': t.casos.resultadosCasos.autoSobreseimiento,
    'Sentencia Absolutoria': t.casos.resultadosCasos.sentenciaAbsolutoria,
    'Sentencia Condenatoria': t.casos.resultadosCasos.sentenciaCondenatoria,
    'La Audiencia Provincial decreta el Sobreseimiento': t.casos.resultadosCasos.audienciaProvincialSobreseimiento
  };
  
  return resultMap[resultado] || resultado;
};

// Traducir tipos de resolución
const getTranslatedResolutionType = (tipo: string, t: any) => {
  const typeMap: { [key: string]: string } = {
    'Sobreseimiento': t.casos.tiposResolucion.sobreseimiento,
    'Sentencia': t.casos.tiposResolucion.sentencia,
    'Auto': t.casos.tiposResolucion.auto,
    'Diligencias': t.casos.tiposResolucion.diligencias,
    'Archivo': t.casos.tiposResolucion.archivo
  };

  return typeMap[tipo] || tipo;
};

// Traducir órganos judiciales
const getTranslatedOrgano = (organo: string, language: string) => {
  if (language === 'es') return organo;

  const organoMap: { [key: string]: string } = {
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
    'Juzgado de Instrucción (por determinar)': 'محكمة التحقيق (قيد التحديد)'
  };

  return organoMap[organo] || organo;
};

// Traducir localidades
const getTranslatedLocalidad = (localidad: string, language: string) => {
  if (language === 'es') return localidad;

  const localidadMap: { [key: string]: string } = {
    'Madrid': 'مدريد',
    'Jaén': 'خاين',
    'San Roque (Cádiz)': 'سان روكي (قادس)',
    'Pozuelo de Alarcón (Madrid)': 'بوزويلو دي ألاركون (مدريد)',
    'Getafe (Madrid)': 'خيتافي (مدريد)',
    'Torrejón de Ardoz (Madrid)': 'توريخون دي أردوز (مدريد)',
    'Alcorcón': 'ألكوركون',
    'Por confirmar': 'قيد التأكيد'
  };

  return localidadMap[localidad] || localidad;
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

export default function CaseCard({ caso }: Props) {
  const { language } = useLanguage();
  const t = translations[language];

  // Limitar el resumen a una longitud razonable
  const summary = caso.contenido.resumen.length > 120
    ? caso.contenido.resumen.substring(0, 120) + '...'
    : caso.contenido.resumen;

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
          caso.favorabilidad === 'Neutro'
            ? 'bg-blue-600 text-blue-100'
            : 'bg-emerald-700 text-emerald-100'
        }`}>
          {caso.favorabilidad === 'Neutro' ? t.casosDestacados.enCurso : t.casosDestacados.favorable}
        </span>
      </div>

      {/* Categoría */}
      <div className="text-xs text-gold/70 uppercase tracking-wide mb-2">
        {getTranslatedCategory(caso.categoria, language, t)}
      </div>

      {/* Título del caso */}
      <h3 className="text-lg font-semibold group-hover:text-gold transition-colors mb-3 leading-tight">
        {caso.nombre.replace(/^CASO\s*-?\s*/, '')}
      </h3>

      {/* Información del caso */}
      <div className="space-y-2 mb-4 flex-grow">
        <div className="text-sm text-black/70">
          <span className="font-medium text-black">{t.casosDestacados.resultado}</span> {getTranslatedResult(caso.resultado, t)}
        </div>
        <div className="text-sm text-black/70">
          <span className="font-medium text-black">{t.casosDestacados.organo}</span> {getTranslatedOrgano(caso.organo, language)}
        </div>
        <div className="text-sm text-black/70">
          <span className="font-medium text-black">{t.casosDestacados.tipo}</span> {getTranslatedResolutionType(caso.tipo_resolucion, t)}
        </div>
      </div>

      {/* Resumen */}
      <p className="text-black/70 text-sm leading-relaxed mb-4 flex-grow">
        {summary}
      </p>

      {/* Botón de acción */}
      <Link
        href={getCaseUrl(caso)}
        className="inline-flex items-center mt-auto text-sm text-black bg-gold px-4 py-2 rounded-lg hover:opacity-90 transition group"
      >
        {t.casosDestacados.verCasoCompleto}
        <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
