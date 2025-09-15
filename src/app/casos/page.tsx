'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { ChevronDown, Filter, Award, Users, Clock, Shield, FileText, Scale, MapPin, Calendar, ArrowRight, ExternalLink } from 'lucide-react'

// Importar casos reales
import casosData from '../../../public/casos/casos-procesados.json';
import seoInfo from '../../../public/casos/seo-info.json';

// Función para obtener categorías traducidas
const getCategorias = (t: any) => [
  t.casos.filtros.todos,
  t.casos.categorias.delitosOdio,
  t.casos.categorias.terrorismo,
  t.casos.categorias.robosViolencia,
  t.casos.categorias.delitosPersonas,
  t.casos.categorias.delitosEconomicos,
  t.casos.categorias.ordenPublico,
  t.casos.categorias.delitosSaludPublica,
  t.casos.categorias.delitosAutoridad,
  t.casos.categorias.delitosPatrimoniales,
  t.casos.categorias.delitosLibertad,
  t.casos.categorias.delitosTrabajadores,
  t.casos.categorias.ejecucionPenal,
  t.casos.categorias.delitosVida,
  t.casos.categorias.organizacionCriminal,
  t.casos.categorias.delitosIntegridad
];

// Funciones de traducción para casos
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
  'Juzgado de Instrucción (por determinar)': 'محكمة التحقيق (قيد التحديد)',
  'Juzgado de lo Penal nº 3 de Jaén': 'محكمة الجنايات رقم 3 في خاين',
  'Juzgado de lo Penal nº 22 de Madrid': 'محكمة الجنايات رقم 22 في مدريد',
  'Juzgado de Instrucción nº 13 de Madrid': 'محكمة التحقيق رقم 13 في مدريد',
  'Juzgado de 1ª Instancia e Instrucción nº 5 de Valdemoro': 'محكمة الدرجة الأولى والتحقيق رقم 5 في فالديمورو',
  'Juzgado de Instrucción nº 1 de Móstoles': 'محكمة التحقيق رقم 1 في موستوليس',
  'Juzgado de 1ª Instancia e Instrucción nº 1 de Navalcarnero': 'محكمة الدرجة الأولى والتحقيق رقم 1 في نافالكارنيرو',
  'Juzgado Central de Instrucción nº 2 – Audiencia Nacional': 'محكمة التحقيق المركزية رقم 2 - المحكمة الوطنية',
  'Juzgado de Instrucción nº 1 de San Roque (Cádiz)': 'محكمة التحقيق رقم 1 في سان روكي (قادس)'
};

const resultMap: { [key: string]: string } = {
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
};

const tipoMap: { [key: string]: string } = {
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
};

// Función para traducir títulos de casos
const getTranslatedCaseName = (caseId: number, originalName: string, language: string) => {
  if (language === 'es') return originalName;

  const casesTranslations = {
    1: "قضية كيكي - محامون مسيحيون - إغلاق الدعوى",
    2: "قضية نوردين وورك أوت",
    3: "قضية ألفارو غارسيا",
    4: "قضية لا مانتشا",
    5: "قضية خورخي سانشيز",
    6: "قضية ماريا خيسوس",
    7: "قضية أنطونيو لوبيز",
    8: "قضية كارلوس مارتينيز",
    9: "قضية آنا غوميز",
    10: "قضية بيدرو رودريغيز",
    11: "قضية لويس فيرنانديز",
    12: "قضية كارمن دياز",
    13: "قضية ميغيل هيرنانديز",
    14: "قضية إيزابيل راموس",
    15: "قضية ديفيد مورينو",
    16: "قضية صوفيا نافارو",
    17: "قضية رافائيل خيل",
    18: "قضية إيلينا كاسترو",
    19: "قضية عبد الرحيم عكوش - شرطة توريخون المحلية",
    20: "عملية بوب"
  };

  return casesTranslations[caseId as keyof typeof casesTranslations] || originalName;
};

// Función para traducir categorías
const getTranslatedCategory = (categoria: string, language: string, t: any) => {
  if (language === 'es') return categoria;

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

export default function CasosPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const categorias = getCategorias(t);
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>(t.casos.filtros.todos);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  // Cerrar filtro al hacer clic fuera de él
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    }

    if (isFilterOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFilterOpen]);

  // Mapa de categorías usando IDs constantes independientes del idioma
  const categoriaIds: Record<string, string> = {
    'todos': 'Todos',
    'delitos-odio': 'Delitos de odio y libertad de expresión',
    'terrorismo': 'Terrorismo y Audiencia Nacional',
    'robos-violencia': 'Robos con violencia y grupo criminal',
    'delitos-personas': 'Delitos contra las personas',
    'delitos-economicos': 'Delitos económicos y contra el patrimonio',
    'orden-publico': 'Delitos contra el orden público, drogas y ejecución penal',
    'delitos-salud-publica': 'Delitos contra la salud pública',
    'delitos-autoridad': 'Delitos contra la autoridad',
    'delitos-patrimoniales': 'Delitos patrimoniales',
    'delitos-libertad': 'Delitos contra la libertad',
    'delitos-trabajadores': 'Delitos contra los derechos de los trabajadores',
    'ejecucion-penal': 'Ejecución penal',
    'delitos-vida': 'Delitos contra la vida',
    'organizacion-criminal': 'Pertenencia a organización criminal',
    'delitos-integridad': 'Delitos contra la integridad física'
  };

  // Mapa inverso para obtener el ID desde el nombre traducido
  const getCategoriaId = (categoriaTraducida: string): string => {
    if (categoriaTraducida === t.casos.filtros.todos) return 'todos';
    if (categoriaTraducida === t.casos.categorias.delitosOdio) return 'delitos-odio';
    if (categoriaTraducida === t.casos.categorias.terrorismo) return 'terrorismo';
    if (categoriaTraducida === t.casos.categorias.robosViolencia) return 'robos-violencia';
    if (categoriaTraducida === t.casos.categorias.delitosPersonas) return 'delitos-personas';
    if (categoriaTraducida === t.casos.categorias.delitosEconomicos) return 'delitos-economicos';
    if (categoriaTraducida === t.casos.categorias.ordenPublico) return 'orden-publico';
    if (categoriaTraducida === t.casos.categorias.delitosSaludPublica) return 'delitos-salud-publica';
    if (categoriaTraducida === t.casos.categorias.delitosAutoridad) return 'delitos-autoridad';
    if (categoriaTraducida === t.casos.categorias.delitosPatrimoniales) return 'delitos-patrimoniales';
    if (categoriaTraducida === t.casos.categorias.delitosLibertad) return 'delitos-libertad';
    if (categoriaTraducida === t.casos.categorias.delitosTrabajadores) return 'delitos-trabajadores';
    if (categoriaTraducida === t.casos.categorias.ejecucionPenal) return 'ejecucion-penal';
    if (categoriaTraducida === t.casos.categorias.delitosVida) return 'delitos-vida';
    if (categoriaTraducida === t.casos.categorias.organizacionCriminal) return 'organizacion-criminal';
    if (categoriaTraducida === t.casos.categorias.delitosIntegridad) return 'delitos-integridad';
    return 'todos';
  };

  const casosFiltrados = useMemo(() => {
    const categoriaId = getCategoriaId(categoriaFiltro);
    const categoriaOriginal = categoriaIds[categoriaId];
    if (categoriaId === 'todos' || !categoriaOriginal) {
      return casosData;
    }
    return casosData.filter(caso => caso.categoria === categoriaOriginal);
  }, [categoriaFiltro]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

     return (
     <div className="min-h-screen bg-charleston text-offwhite">
       <Navigation />
       <ScrollProgress />
       <div className="pt-20">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-charleston via-black/50 to-charleston py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-apricot/5" />
        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
                         <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gold to-apricot bg-clip-text text-transparent mb-6">
               {t.casos.title}
             </h1>
             <p className="text-xl lg:text-2xl text-offwhite/80 max-w-3xl mx-auto mb-8">
               {t.casos.subtitle}
             </p>
                         <div className="flex flex-wrap justify-center gap-6 text-sm lg:text-base">
               <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-gold/20 rounded-full px-4 py-2">
                 <Award className="w-5 h-5 text-gold" />
                 <span className="text-gold">{t.casos.stats.casosExitosos}</span>
               </div>
               <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-gold/20 rounded-full px-4 py-2">
                 <Users className="w-5 h-5 text-gold" />
                 <span className="text-gold">{t.casos.stats.anosExperiencia}</span>
               </div>
               <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-gold/20 rounded-full px-4 py-2">
                 <Shield className="w-5 h-5 text-gold" />
                 <span className="text-gold">{t.casos.stats.defensaEspecializada}</span>
               </div>
             </div>
          </motion.div>
        </div>
      </section>

             {/* Filtros */}
       <section className="bg-white/5 backdrop-blur-sm border-b border-gold/20 py-6 sm:py-8 relative" style={{ zIndex: 99999 }}>
         <div className="mx-auto max-w-6xl px-4 sm:px-6">
           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
             <div className="flex items-center gap-3 w-full sm:w-auto">
               <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0" />
               <span className="text-offwhite font-medium text-sm sm:text-base">
                 {t.casos.filtros.title}
               </span>
             </div>
             
             <div className="relative w-full sm:w-auto" ref={filterRef}>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center justify-between w-full sm:w-auto gap-2 bg-black/50 hover:bg-black/70 border border-gold/30 hover:border-apricot/50 px-4 py-3 sm:px-4 sm:py-2 rounded-lg transition-all duration-300"
              >
                <span className="text-offwhite">
                  {categoriaFiltro === t.casos.filtros.todos 
                    ? t.casos.filtros.todasCategorias
                    : categoriaFiltro
                  }
                 </span>
                <ChevronDown className={`w-4 h-4 text-gold transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 right-0 sm:right-0 left-0 sm:left-auto bg-charleston border border-gold/30 rounded-lg shadow-xl z-[99999] min-w-[250px] w-full sm:w-auto"
                  style={{ zIndex: 99999 }}
                >
                  <div className="py-2">
                                         <button
                       onClick={() => {
                         setCategoriaFiltro(t.casos.filtros.todos);
                         setIsFilterOpen(false);
                       }}
                       className={`w-full text-left px-4 py-2 hover:bg-black/30 transition-colors ${
                         categoriaFiltro === t.casos.filtros.todos ? 'text-gold bg-black/20' : 'text-offwhite'
                       }`}
                     >
                       {t.casos.filtros.todasCategorias}
                     </button>
                    {categorias.slice(1).map((categoria) => (
                      <button
                        key={categoria}
                        onClick={() => {
                          setCategoriaFiltro(categoria);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-black/30 transition-colors ${
                          categoriaFiltro === categoria ? 'text-gold bg-black/20' : 'text-offwhite'
                        }`}
                      >
                        {categoria}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Casos Grid */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {casosFiltrados.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
                             <p className="text-xl text-offwhite/60">
                 {t.casos.filtros.noEncontrados}
               </p>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
            >
              {casosFiltrados.map((caso) => (
                                 <motion.article
                   key={caso.id}
                   variants={itemVariants}
                   className="group rounded-2xl border border-gold/30 bg-white/5 backdrop-blur-sm p-6 sm:p-8 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/20 transition-all duration-300 cursor-pointer relative"
                   onClick={() => window.location.href = (seoInfo as any)[caso.id]?.url || `/casos/${caso.id}`}
                 >
                                       {/* Badge FAVORABLE en la parte superior */}
                    {caso.favorabilidad === 'Favorable' && (
                      <div className="absolute -top-2 left-3 sm:left-4 bg-emerald-700 text-emerald-100 px-2 sm:px-3 py-1 rounded-lg text-xs font-bold shadow-lg border border-emerald-600/30">
                        FAVORABLE
                      </div>
                    )}
                   
                   {/* Header con icono y badge popular */}
                   <div className="flex items-center justify-between mb-4 sm:mb-6">
                                         <div className="text-gold group-hover:text-apricot transition-colors">
                       <FileText className="w-6 h-6 sm:w-8 sm:h-8" />
                     </div>
                                         {caso.caso_popular === 'Sí' && (
                       <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gold/20 text-gold border border-gold/30">
                         <Award className="w-3 h-3 mr-1" />
                         {t.casos.casos.casoPopular}
                       </span>
                     )}
                  </div>

                  {/* Título y categoría */}
                  <div className="mb-4 sm:mb-6">
                    <span className="inline-block bg-gold/10 text-gold text-xs font-medium px-3 py-1 rounded-full mb-3 border border-gold/20">
                      {caso.delito_principal}
                    </span>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-offwhite group-hover:text-gold transition-colors mb-2 line-clamp-2">
                      {getTranslatedCaseName(caso.id, caso.nombre, language)}
                    </h3>
                    <p className="text-offwhite/60 text-sm">
                      {getTranslatedCategory(caso.categoria, language, t)}
                    </p>
                  </div>

                  {/* Observaciones */}
                  {caso.observaciones && (
                    <p className="text-offwhite/80 text-sm leading-relaxed mb-6 line-clamp-3">
                      {caso.observaciones}
                    </p>
                  )}

                  {/* Información clave */}
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                                         <div className="flex items-center gap-3">
                       <div className={`w-2 h-2 rounded-full ${
                         caso.favorabilidad === 'Favorable' ? 'bg-emerald-600' : 
                         caso.favorabilidad === 'Desfavorable' ? 'bg-red-500' : 
                         'bg-gold'
                       }`}></div>
                                             <span className="text-sm text-offwhite/80">
                         <strong className="text-gold">{t.casos.casos.resultado}</strong> {language === 'es' ? caso.resultado : (resultMap[caso.resultado] || caso.resultado)}
                       </span>
                    </div>
                                         <div className="flex items-center gap-3">
                       <div className="w-2 h-2 bg-gold rounded-full"></div>
                       <span className="text-sm text-offwhite/80">
                         <strong className="text-gold">{t.casos.casos.organo}</strong> {language === 'es' ? caso.organo : (organoMap[caso.organo] || caso.organo)}
                       </span>
                     </div>
                     <div className="flex items-center gap-3">
                       <div className="w-2 h-2 bg-apricot rounded-full"></div>
                       <span className="text-sm text-offwhite/80">
                         <strong className="text-gold">{t.casos.casos.tipo}</strong> {language === 'es' ? caso.tipo_resolucion : (tipoMap[caso.tipo_resolucion] || caso.tipo_resolucion)}
                       </span>
                     </div>
                  </div>

                  {/* Footer con fecha y botón */}
                  <div className="flex items-center justify-between pt-4 border-t border-gold/20">
                    <div className="flex items-center gap-2 text-xs text-offwhite/60">
                      <Calendar className="w-4 h-4" />
                      <span>{caso.fecha || caso.año}</span>
                    </div>
                                         <div className="flex items-center gap-2 text-gold group-hover:text-apricot transition-colors">
                       <span className="text-sm font-medium">{t.casos.casos.verDetalles}</span>
                       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-charleston to-black py-12 sm:py-16 lg:py-24 border-t border-gold/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
                         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold mb-4 sm:mb-6">
               {t.casos.cta.title}
             </h2>
             <p className="text-lg sm:text-xl text-offwhite/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
               {t.casos.cta.description}
             </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                             <a
                 href="#contacto"
                 className="bg-gold hover:bg-gold/90 text-charleston font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
               >
                 {t.casos.cta.consultarCaso}
               </a>
               <a
                 href="tel:+34611687226"
                 className="border border-gold text-gold hover:bg-gold hover:text-charleston font-semibold px-8 py-3 rounded-lg transition-all duration-300"
               >
                 {t.casos.cta.llamarAhora}
               </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nota de Privacidad */}
      <section className="bg-white/5 backdrop-blur-sm border-t border-gold/20 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
                         <div className="flex items-center justify-center mb-4">
               <Shield className="w-8 h-8 text-gold mr-3" />
               <h3 className="text-xl font-semibold text-gold">
                 {t.casos.privacidad.title}
               </h3>
             </div>
             <p className="text-offwhite/80 text-lg leading-relaxed max-w-3xl mx-auto">
               {t.casos.privacidad.description}
             </p>
             <div className="mt-6">
               <a
                 href="#contacto"
                 className="inline-flex items-center gap-2 bg-gold text-charleston px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors font-medium"
               >
                 <ExternalLink className="w-4 h-4" />
                 {t.casos.privacidad.consultarEquipo}
               </a>
             </div>
          </motion.div>
        </div>
      </section>

             </div>
       <Footer />
       <WhatsAppButton />
     </div>
   );
 }
