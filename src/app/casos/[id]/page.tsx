'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/translations'
import { getTranslatedCaseField } from '@/translations/cases'
import { motion } from 'framer-motion'

// Función para traducir categorías
const categoriaMap: { [key: string]: string } = {
  'Delitos de odio y libertad de expresión': 'جرائم الكراهية وحرية التعبير',
  'Terrorismo y Audiencia Nacional': 'الإرهاب والمحكمة الوطنية',
  'Robos con violencia y grupo criminal': 'السرقة بالعنف والجماعة الإجرامية',
  'Delitos contra las personas': 'الجرائم ضد الأشخاص',
  'Delitos económicos y contra el patrimonio': 'الجرائم الاقتصادية وضد الممتلكات',
  'Delitos contra el orden público, drogas y ejecución penal': 'الجرائم ضد النظام العام والمخدرات والتنفيذ الجنائي',
  'Delitos contra la salud pública': 'الجرائم ضد الصحة العامة',
  'Delitos contra la autoridad': 'الجرائم ضد السلطة',
  'Delitos patrimoniales': 'الجرائم المالية',
  'Delitos contra la libertad': 'الجرائم ضد الحرية',
  'Delitos contra los derechos de los trabajadores': 'الجرائم ضد حقوق العمال',
  'Ejecución penal': 'التنفيذ الجنائي',
  'Delitos contra la vida': 'الجرائم ضد الحياة',
  'Pertenencia a organización criminal': 'الانتماء لمنظمة إجرامية',
  'Delitos contra la integridad física': 'الجرائم ضد السلامة الجسدية'
};

// Función para traducir tipos de resolución
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

// Función para traducir medidas cautelares
const medidasMap: { [key: string]: string } = {
  'Ninguna': 'لا توجد',
  'Libertad provisional con medidas cautelares': 'الحرية المؤقتة مع إجراءات احترازية',
  'Prisión provisional para investigado': 'السجن الاحتياطي للمتهم',
  'Libertad provisional, retirada de pasaporte, comparecencias semanales': 'الحرية المؤقتة، سحب جواز السفر، حضور أسبوعي',
  'Libertad provisional con fianza': 'الحرية المؤقتة مع كفالة'
};

// Función para traducir observaciones
const observacionesMap: { [key: string]: string } = {
  'Se sobresee por libertad de expresión en programa satírico': 'يتم إغلاق الدعوى بحرية التعبير في برنامج ساخر',
  'Investigación mediática de más de una docena de robos; nuestro cliente es el único en libertad': 'تحقيق إعلامي لأكثر من عشرة حوادث سرقة؛ عميلنا هو الوحيد في الحرية',
  'Se ejerce acusación particular en nombre de la familia; investigación por muerte tras intervención policial': 'يتم ممارسة الاتهام الخاص باسم العائلة؛ تحقيق في الوفاة بعد التدخل الشرطي'
};

// Función para traducir localidades
const localidadMap: { [key: string]: string } = {
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
};

// Función para traducir órganos judiciales
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

import { ArrowLeft, Calendar, MapPin, FileText, Shield, Gavel, Scale, LinkIcon, CheckCircle, AlertTriangle, ImageIcon, ExternalLink, Clock, Award, Users, Globe, ChevronDown } from 'lucide-react'
import Navigation from '@/components/Navigation'
import casosData from '../../../../public/casos/casos-procesados.json'
import seoInfo from '../../../../public/casos/seo-info.json'
import Head from 'next/head'
import Image from 'next/image'

interface CasoContent {
  ficha_rapida?: string
  resumen?: string
  hechos?: string
  estrategia?: string
  pruebas?: string
  resolucion?: string
  marco_legal?: string
  imagenes?: string
  enlaces?: string
}

interface CasoDetails {
  categoría?: string
  delito_principal?: string
  parte?: string
  órgano?: string
  sección?: string
  localidad?: string
  tipo_de_resolución?: string
  favorabilidad?: string
  fecha?: string
  año?: string
  medidas_cautelares?: string
  popularidad?: string
}

interface Caso {
  id: number
  categoria: string
  nombre: string
  delito_principal: string
  resultado: string
  tipo_resolucion: string
  favorabilidad: string
  organo: string
  organo_nivel: string
  seccion: string
  localidad: string
  fecha: string
  año: string
  parte: string
  medidas_cautelares: string
  observaciones: string
  noticias: string
  links: string
  caso_popular: string
  caso_en_curso?: boolean
  imagen?: string
  contenido?: CasoContent
  ficha_detalle?: CasoDetails
}

interface SEOInfo {
  url: string
  title: string
  description: string
  keywords: string
  anchors: string
  tags: string
}

export default function CasoDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { language } = useLanguage()
  const t = translations[language]
  const [caso, setCaso] = useState<Caso | null>(null)
  const [seoData, setSeoData] = useState<SEOInfo | null>(null)
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    resumen: true,
    hechos: true,
    estrategia: true,
    pruebas: true,
    resolucion: true,
    marco_legal: true,
    imagenes: true,
    enlaces: true
  })
  const [allExpanded, setAllExpanded] = useState(true)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    const urlParam = params.id as string
    
    // Primero intentar buscar por ID numérico
    const casoId = parseInt(urlParam)
    let foundCaso = casosData.find((c: any) => c.id === casoId)
    
    // Si no se encuentra por ID, buscar por URL SEO
    if (!foundCaso) {
      // Crear un mapeo de URLs SEO a IDs
      const urlToIdMap: { [key: string]: number } = {}
      Object.entries(seoInfo as any).forEach(([id, info]: [string, any]) => {
        if (info.url) {
          // Extraer la parte final de la URL (después del último /)
          const urlPath = info.url.split('/').pop()
          if (urlPath) {
            urlToIdMap[urlPath] = parseInt(id)
          }
        }
      })
      
      // Buscar el caso por URL
      const mappedId = urlToIdMap[urlParam]
      if (mappedId) {
        foundCaso = casosData.find((c: any) => c.id === mappedId)
      }
    }
    
    if (foundCaso) {
      // No redirigir casos en curso, permitir acceso limitado
      setCaso(foundCaso as Caso)
      
      // Obtener información SEO
      const casoSeoInfo = (seoInfo as any)[foundCaso.id]
      if (casoSeoInfo) {
        setSeoData(casoSeoInfo)
      }
    }
  }, [params.id])

  if (!caso) {
    return (
      <div className="min-h-screen bg-charleston flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8"
          >
            <Shield className="h-16 w-16 text-gold mx-auto mb-4" />
                         <h1 className="text-2xl font-bold text-offwhite mb-4">
               {t.caso.casoNoEncontrado}
             </h1>
             <button
               onClick={() => router.push('/casos')}
               className="inline-flex items-center gap-2 bg-gold text-charleston px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors"
             >
               <ArrowLeft className="w-5 h-5" />
               {t.caso.volverCasos}
             </button>
          </motion.div>
        </div>
      </div>
    )
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  // Generar metadatos SEO
  const pageTitle = seoData?.title || `${caso.nombre} - STANS ABOGADOS`
  const pageDescription = seoData?.description || `Caso ${caso.nombre} resuelto por STANS ABOGADOS. ${caso.resultado}`
  const pageKeywords = seoData?.keywords || `${caso.delito_principal}, ${caso.categoria}, abogados penalistas, STANS ABOGADOS`
  const pageTags = seoData?.tags || ''

     return (
     <>
       <Head>
         <title>{pageTitle}</title>
         <meta name="description" content={pageDescription} />
         <meta name="keywords" content={pageKeywords} />
         <meta property="og:title" content={pageTitle} />
         <meta property="og:description" content={pageDescription} />
         <meta property="og:type" content="article" />
         <meta property="og:url" content={`https://stansabogados.com${seoData?.url || `/casos/${caso.id}`}`} />
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:title" content={pageTitle} />
         <meta name="twitter:description" content={pageDescription} />
         {pageTags && <meta name="tags" content={pageTags} />}
       </Head>

       <div className="min-h-screen bg-charleston">
         <Navigation />
         <div className="pt-20">
                 {/* Header */}
         <div className="bg-white/5 backdrop-blur-sm border-b border-gold/20">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <button
              onClick={() => router.push('/casos')}
              className="inline-flex items-center gap-2 text-gold hover:text-apricot transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
                             <span>{t.caso.volverCasos}</span>
            </button>
          </div>
        </div>

                 {/* Hero Section */}
         <section className="relative bg-gradient-to-br from-charleston via-black/50 to-charleston text-offwhite py-12 sm:py-16">
           <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-apricot/5" />
           <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {caso.caso_popular && (
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gold/20 text-gold border border-gold/30 mb-6"
                >
                  <Award className="w-4 h-4 mr-2" />
                                     {t.caso.casoPopular}
                </motion.span>
              )}
                             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gold to-apricot bg-clip-text text-transparent">
                {getTranslatedCaseField(caso.id, 'nombre', language, caso.nombre)}
              </h1>
                             <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
                                 <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-gold/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                   <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                   <span>{language === 'es' ? caso.localidad : (localidadMap[caso.localidad] || caso.localidad)}</span>
                 </div>
                 <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-gold/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                   <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                   <span>{caso.fecha || caso.año}</span>
                 </div>
                 <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-gold/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                   <Gavel className="w-3 h-3 sm:w-4 sm:h-4 text-gold" />
                   <span>{language === 'es' ? caso.organo : (organoMap[caso.organo] || caso.organo)}</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </section>

                                   {/* Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                                   {/* Botón global para expandir/comprimir todas las secciones */}
            <div className="mb-8">
                             {/* Botones de control */}
               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4">
                 {/* Botón para ir a ficha rápida (solo móvil) */}
                 <motion.button
                   onClick={() => {
                     const fichaRapida = document.getElementById('ficha-rapida');
                     if (fichaRapida) {
                       fichaRapida.scrollIntoView({ behavior: 'smooth' });
                     }
                   }}
                   className="lg:hidden inline-flex items-center gap-2 bg-gold/10 hover:bg-gold/20 text-gold border border-gold/30 hover:border-gold/50 px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm w-full sm:w-auto justify-center"
                 >
                   <Shield className="w-4 h-4 text-gold" />
                   {t.caso.botones.fichaRapida}
                 </motion.button>
                 
                 {/* Botón de expandir/comprimir */}
                 <motion.button
                   onClick={() => {
                     const newState = !allExpanded
                     setAllExpanded(newState)
                     setExpandedSections({
                       resumen: newState,
                       hechos: newState,
                       estrategia: newState,
                       pruebas: newState,
                       resolucion: newState,
                       marco_legal: newState,
                       imagenes: newState,
                       enlaces: newState
                     })
                   }}
                   className="inline-flex items-center gap-2 bg-gold/10 hover:bg-gold/20 text-gold border border-gold/30 hover:border-gold/50 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 font-medium text-sm sm:text-base w-full sm:w-auto justify-center"
                 >
                   <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${allExpanded ? 'rotate-180' : ''}`} />
                   {allExpanded ? t.caso.botones.comprimirTodas : t.caso.botones.expandirTodas}
                 </motion.button>
               </div>
              
              {/* Badge FAVORABLE (solo móvil) */}
              {caso.favorabilidad === 'Favorable' && (
                <div className="lg:hidden flex justify-start">
                  <div className="bg-emerald-700 text-emerald-100 px-4 py-2 rounded-lg font-bold shadow-lg border border-emerald-600/30">
                    FAVORABLE
                  </div>
                </div>
              )}
            </div>
           
          {/* Advertencia para casos en curso */}
          {caso.caso_en_curso && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-orange-100/10 border border-orange-400/30 rounded-2xl p-6 text-center text-offwhite"
              >
                <div className="flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-orange-400 mr-3" />
                  <h2 className="text-xl font-bold text-orange-400">
                    {language === 'ar' ? 'قضية قيد التحقيق' : 'CASO EN INVESTIGACIÓN'}
                  </h2>
                </div>
                <p className="text-offwhite/80 mb-4 max-w-2xl mx-auto">
                  {language === 'ar' 
                    ? 'بسبب طبيعة التحقيق الجاري، يمكن فقط عرض الملخص والأخبار ذات الصلة. تفاصيل أخرى محمية بسرية التحقيق.'
                    : 'Debido a la naturaleza del proceso en curso, solo se pueden mostrar el resumen y las noticias relacionadas. Los demás detalles están protegidos por el secreto de sumario.'
                  }
                </p>
                <div className="text-sm text-orange-400/80">
                  {language === 'ar' 
                    ? 'الأقسام المتاحة: الملخص • الأخبار ذات الصلة'
                    : 'Secciones disponibles: Resumen • Noticias relacionadas'
                  }
                </div>
              </motion.div>
            </div>
          )}

                       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                                                   {/* Main Content */}
                            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
               
               {/* Resumen */}
               {caso.contenido?.resumen && (
                                 <motion.div
                   variants={sectionVariants}
                   initial="hidden"
                   animate="visible"
                   transition={{ delay: 0.1 }}
                   className="group rounded-2xl border border-gold/30 bg-white/5 backdrop-blur-sm p-3 sm:p-4 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/20 transition-all duration-300"
                   id="resumen"
                 >
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                                         <div className="flex items-center gap-3">
                       <div className="text-gold group-hover:text-apricot transition-colors">
                         <FileText className="w-6 h-6 sm:w-8 sm:h-8" />
                       </div>
                                               <h2 className="text-base sm:text-lg font-bold text-offwhite group-hover:text-gold transition-colors">
                          Resumen
                        </h2>
                     </div>
                    <button
                      onClick={() => setExpandedSections(prev => ({ ...prev, resumen: !prev.resumen }))}
                      className="text-gold hover:text-apricot transition-colors"
                    >
                      <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${expandedSections.resumen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                                     <div className={`prose prose-invert max-w-none overflow-hidden transition-all duration-300 ${expandedSections.resumen ? 'max-h-none' : 'max-h-0'}`}>
                     {getTranslatedCaseField(caso.id, 'contenido.resumen', language, caso.contenido.resumen).split('\n').map((paragraph, index) => (
                       <p key={index} className="mb-4 text-offwhite/80 leading-relaxed">
                         {paragraph}
                       </p>
                     ))}
                   </div>
                </motion.div>
              )}

              {/* Hechos - Solo mostrar si NO es caso en curso */}
              {caso.contenido?.hechos && !caso.caso_en_curso && (
                                 <motion.div
                   variants={sectionVariants}
                   initial="hidden"
                   animate="visible"
                   transition={{ delay: 0.2 }}
                   className="group rounded-2xl border border-gold/30 bg-white/5 backdrop-blur-sm p-3 sm:p-4 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/20 transition-all duration-300"
                   id="hechos"
                 >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="text-gold group-hover:text-apricot transition-colors">
                        <Users className="w-8 h-8" />
                      </div>
                                             <h2 className="text-base sm:text-lg font-bold text-offwhite group-hover:text-gold transition-colors">
                         Hechos
                       </h2>
                    </div>
                    <button
                      onClick={() => setExpandedSections(prev => ({ ...prev, hechos: !prev.hechos }))}
                      className="text-gold hover:text-apricot transition-colors"
                    >
                      <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${expandedSections.hechos ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                                     <div className={`prose prose-invert max-w-none overflow-hidden transition-all duration-300 ${expandedSections.hechos ? 'max-h-none' : 'max-h-0'}`}>
                     {getTranslatedCaseField(caso.id, 'contenido.hechos', language, caso.contenido.hechos).split('\n').map((paragraph, index) => (
                       <p key={index} className="mb-4 text-offwhite/80 leading-relaxed">
                         {paragraph}
                       </p>
                     ))}
                   </div>
                </motion.div>
              )}

              {/* Estrategia de Defensa - Solo mostrar si NO es caso en curso */}
              {caso.contenido?.estrategia && !caso.caso_en_curso && (
                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3 }}
                  className="group rounded-2xl border border-gold/30 bg-white/5 backdrop-blur-sm p-3 sm:p-4 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/20 transition-all duration-300"
                  id="estrategia"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="text-gold group-hover:text-apricot transition-colors">
                        <Shield className="w-8 h-8" />
                      </div>
                      <h2 className="text-base sm:text-lg font-bold text-offwhite group-hover:text-gold transition-colors">
                        Estrategia de Defensa
                      </h2>
                    </div>
                    <button
                      onClick={() => setExpandedSections(prev => ({ ...prev, estrategia: !prev.estrategia }))}
                      className="text-gold hover:text-apricot transition-colors"
                    >
                      <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${expandedSections.estrategia ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                                     <div className={`prose prose-invert max-w-none overflow-hidden transition-all duration-300 ${expandedSections.estrategia ? 'max-h-none' : 'max-h-0'}`}>
                     {getTranslatedCaseField(caso.id, 'contenido.estrategia', language, caso.contenido.estrategia).split('\n').map((paragraph, index) => (
                       <p key={index} className="mb-4 text-offwhite/80 leading-relaxed">
                         {paragraph}
                       </p>
                     ))}
                   </div>
                </motion.div>
              )}

              {/* Pruebas Clave - Solo mostrar si NO es caso en curso */}
              {caso.contenido?.pruebas && !caso.caso_en_curso && (
                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                  className="group rounded-2xl border border-gold/30 bg-white/5 backdrop-blur-sm p-3 sm:p-4 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/20 transition-all duration-300"
                  id="pruebas"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="text-gold group-hover:text-apricot transition-colors">
                        <FileText className="w-8 h-8" />
                      </div>
                      <h2 className="text-base sm:text-lg font-bold text-offwhite group-hover:text-gold transition-colors">
                        Pruebas Clave
                      </h2>
                    </div>
                    <button
                      onClick={() => setExpandedSections(prev => ({ ...prev, pruebas: !prev.pruebas }))}
                      className="text-gold hover:text-apricot transition-colors"
                    >
                      <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${expandedSections.pruebas ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                                     <div className={`prose prose-invert max-w-none overflow-hidden transition-all duration-300 ${expandedSections.pruebas ? 'max-h-none' : 'max-h-0'}`}>
                     {getTranslatedCaseField(caso.id, 'contenido.pruebas', language, caso.contenido.pruebas).split('\n').map((paragraph, index) => (
                       <p key={index} className="mb-4 text-offwhite/80 leading-relaxed">
                         {paragraph}
                       </p>
                     ))}
                   </div>
                </motion.div>
              )}

              {/* Resolución - Solo mostrar si NO es caso en curso */}
              {caso.contenido?.resolucion && !caso.caso_en_curso && (
                                 <motion.div
                   variants={sectionVariants}
                   initial="hidden"
                   animate="visible"
                   transition={{ delay: 0.5 }}
                   className="group rounded-2xl border border-emerald-600/30 bg-emerald-700/5 backdrop-blur-sm p-3 sm:p-4 hover:border-emerald-600/50 hover:shadow-xl hover:shadow-emerald-700/20 transition-all duration-300"
                   id="resolucion"
                 >
                                     <div className="flex items-center gap-3 mb-6">
                     <div className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
                       <Scale className="w-8 h-8" />
                     </div>
                                           <h2 className="text-base sm:text-lg font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                        Resolución
                      </h2>
                   </div>
                                     <div className="prose prose-invert max-w-none">
                     {getTranslatedCaseField(caso.id, 'contenido.resolucion', language, caso.contenido.resolucion).split('\n').map((paragraph, index) => (
                       <p key={index} className="mb-4 text-offwhite/80 leading-relaxed">
                         {paragraph}
                       </p>
                     ))}
                   </div>
                </motion.div>
              )}

              {/* Marco Legal - Solo mostrar si NO es caso en curso */}
              {caso.contenido?.marco_legal && !caso.caso_en_curso && (
                                 <motion.div
                   variants={sectionVariants}
                   initial="hidden"
                   animate="visible"
                   transition={{ delay: 0.6 }}
                   className="group rounded-2xl border border-gold/30 bg-white/5 backdrop-blur-sm p-3 sm:p-4 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/20 transition-all duration-300"
                   id="marco-legal"
                 >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="text-gold group-hover:text-apricot transition-colors">
                        <Gavel className="w-8 h-8" />
                      </div>
                                             <h2 className="text-base sm:text-lg font-bold text-offwhite group-hover:text-gold transition-colors">
                         Marco Legal
                       </h2>
                    </div>
                    <button
                      onClick={() => setExpandedSections(prev => ({ ...prev, marco_legal: !prev.marco_legal }))}
                      className="text-gold hover:text-apricot transition-colors"
                    >
                      <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${expandedSections.marco_legal ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                                     <div className={`prose prose-invert max-w-none overflow-hidden transition-all duration-300 ${expandedSections.marco_legal ? 'max-h-none' : 'max-h-0'}`}>
                     {getTranslatedCaseField(caso.id, 'contenido.marco_legal', language, caso.contenido.marco_legal).split('\n').map((paragraph, index) => (
                       <p key={index} className="mb-4 text-offwhite/80 leading-relaxed">
                         {paragraph}
                       </p>
                     ))}
                   </div>
                </motion.div>
              )}

              {/* Imágenes */}
              {caso.contenido?.imagenes && (
                                 <motion.div
                   variants={sectionVariants}
                   initial="hidden"
                   animate="visible"
                   transition={{ delay: 0.7 }}
                   className="group rounded-2xl border border-gold/30 bg-white/5 backdrop-blur-sm p-3 sm:p-4 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/20 transition-all duration-300"
                   id="imagenes"
                 >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="text-gold group-hover:text-apricot transition-colors">
                        <ImageIcon className="w-8 h-8" />
                      </div>
                                             <h2 className="text-base sm:text-lg font-bold text-offwhite group-hover:text-gold transition-colors">
                         Imágenes del Expediente
                       </h2>
                    </div>
                    <button
                      onClick={() => setExpandedSections(prev => ({ ...prev, imagenes: !prev.imagenes }))}
                      className="text-gold hover:text-apricot transition-colors"
                    >
                      <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${expandedSections.imagenes ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                                     <div className={`prose prose-invert max-w-none overflow-hidden transition-all duration-300 ${expandedSections.imagenes ? 'max-h-none' : 'max-h-0'}`}>
                     {caso.contenido.imagenes.split('\n').map((paragraph, index) => (
                       <p key={index} className="mb-4 text-offwhite/80 leading-relaxed">
                         {paragraph}
                       </p>
                     ))}
                   </div>
                                       {caso.imagen && (
                      <div className={`mt-6 overflow-hidden transition-all duration-300 ${expandedSections.imagenes ? 'max-h-none' : 'max-h-0'}`}>
                        <div 
                          className="relative w-full h-64 rounded-xl overflow-hidden border border-gold/20 cursor-pointer hover:border-gold/50 transition-colors"
                                                     onClick={() => setSelectedImage(caso.imagen || null)}
                        >
                          <Image
                            src={caso.imagen}
                            alt={`Imagen del caso ${caso.nombre}`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
                              <ImageIcon className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                </motion.div>
              )}

              {/* Enlaces y Notas */}
              {(caso.links || caso.noticias || caso.contenido?.enlaces) && (
                                 <motion.div
                   variants={sectionVariants}
                   initial="hidden"
                   animate="visible"
                   transition={{ delay: 0.8 }}
                   className="group rounded-2xl border border-gold/30 bg-white/5 backdrop-blur-sm p-3 sm:p-4 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/20 transition-all duration-300"
                   id="enlaces"
                 >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="text-gold group-hover:text-apricot transition-colors">
                        <ExternalLink className="w-8 h-8" />
                      </div>
                                             <h2 className="text-base sm:text-lg font-bold text-offwhite group-hover:text-gold transition-colors">
                         Enlaces y Notas
                       </h2>
                    </div>
                    <button
                      onClick={() => setExpandedSections(prev => ({ ...prev, enlaces: !prev.enlaces }))}
                      className="text-gold hover:text-apricot transition-colors"
                    >
                      <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${expandedSections.enlaces ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                                     <div className={`space-y-6 overflow-hidden transition-all duration-300 ${expandedSections.enlaces ? 'max-h-none' : 'max-h-0'}`}>
                     {/* Mostrar noticias del Excel si existen */}
                     {caso.noticias && (
                       <div>
                         <h3 className="text-lg font-semibold text-gold mb-3">
                           Noticias relacionadas:
                         </h3>
                         <p className="text-offwhite/80">
                           {caso.noticias}
                         </p>
                       </div>
                     )}
                     
                                           {/* Mostrar enlaces del Excel si existen */}
                      {caso.links && (
                        <div>
                          <h3 className="text-lg font-semibold text-gold mb-3">
                            Enlaces oficiales:
                          </h3>
                          <div className="space-y-2">
                            {caso.links.split('\n').map((link, index) => (
                              <a
                                key={index}
                                href={link.trim()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gold hover:text-apricot hover:underline transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                                Ver noticia {index + 1}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                     
                     
                   </div>
                </motion.div>
              )}
            </div>

                                                   {/* Sidebar */}
              <div className="space-y-4 sm:space-y-6">
               {/* Badge FAVORABLE (solo desktop) */}
               {caso.favorabilidad === 'Favorable' && (
                 <div className="hidden lg:flex justify-start">
                   <div className="bg-emerald-700 text-emerald-100 px-4 py-2 rounded-lg font-bold shadow-lg border border-emerald-600/30">
                     FAVORABLE
                   </div>
                 </div>
               )}
               
               {/* Ficha Rápida */}
                              <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                  id="ficha-rapida"
                  className="group rounded-2xl border border-gold/30 bg-white/5 backdrop-blur-sm p-4 sm:p-6 sticky top-20 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/20 transition-all duration-300"
                >
                                 <div className="flex items-center gap-3 mb-4 sm:mb-6">
                   <div className="text-gold group-hover:text-apricot transition-colors">
                     <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                   </div>
                   <h3 className="text-lg sm:text-xl font-bold text-offwhite group-hover:text-gold transition-colors">
                     {language === 'ar' ? 'البطاقة السريعة' : 'Ficha Rápida'}
                   </h3>
                 </div>
                                 <dl className="space-y-3 sm:space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gold mb-1">{t.casos.camposCasos.categoria}</dt>
                    <dd className="text-sm text-offwhite/80">{language === 'es' ? caso.categoria : (categoriaMap[caso.categoria] || caso.categoria)}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gold mb-1">{t.casos.camposCasos.delitoPrincipal}</dt>
                    <dd className="text-sm text-offwhite/80">{getTranslatedCaseField(caso.id, 'delito_principal', language, caso.delito_principal)}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-bold text-gold mb-1">{t.casos.camposCasos.resultado}</dt>
                    <dd className="text-sm">
                                             <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                         caso.favorabilidad === 'Favorable' 
                           ? 'bg-emerald-700/20 text-emerald-300 border border-emerald-600/30'
                           : caso.favorabilidad === 'Desfavorable'
                           ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                           : 'bg-gold/20 text-gold border border-gold/30'
                       }`}>
                        {getTranslatedCaseField(caso.id, 'resultado', language, caso.resultado)}
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gold mb-1">{t.casos.camposCasos.tipoResolucion}</dt>
                    <dd className="text-sm text-offwhite/80">{language === 'es' ? caso.tipo_resolucion : (tipoMap[caso.tipo_resolucion] || caso.tipo_resolucion)}</dd>
                  </div>
                  {caso.medidas_cautelares && (
                    <div>
                      <dt className="text-sm font-medium text-gold mb-1">{t.casos.camposCasos.medidasCautelares}</dt>
                      <dd className="text-sm text-offwhite/80">{language === 'es' ? caso.medidas_cautelares : (medidasMap[caso.medidas_cautelares] || caso.medidas_cautelares)}</dd>
                    </div>
                  )}
                  {caso.observaciones && (
                    <div>
                      <dt className="text-sm font-medium text-gold mb-1">{t.casos.camposCasos.observaciones}</dt>
                      <dd className="text-sm text-offwhite/80">{language === 'es' ? caso.observaciones : (observacionesMap[caso.observaciones] || caso.observaciones)}</dd>
                    </div>
                  )}
                </dl>

                {/* Tags SEO */}
                {pageTags && (
                  <div className="mt-6 pt-6 border-t border-gold/20">
                    <h4 className="text-sm font-medium text-gold mb-3">
                      Etiquetas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {pageTags.split(', ').map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gold/10 text-gold border border-gold/20 rounded-full px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>

                 {/* Nota de Privacidad */}
         <section className="bg-white/5 backdrop-blur-sm border-t border-gold/20 py-8 sm:py-12">
           <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
                             <div className="flex items-center justify-center mb-4">
                 <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-gold mr-2 sm:mr-3" />
                 <h3 className="text-lg sm:text-xl font-semibold text-gold">
                   Nota de Privacidad
                 </h3>
               </div>
                             <p className="text-offwhite/80 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                Por motivos de confidencialidad y protección de datos, solo se muestran en esta web una selección representativa de nuestros casos. 
                Si necesitas más ejemplos específicos o tienes un caso similar, no dudes en consultarlo directamente con nuestro equipo.
              </p>
              <div className="mt-6">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 bg-gold text-charleston px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Consultar con nuestro equipo
                </a>
              </div>
            </motion.div>
          </div>
        </section>
                   </div>
        </div>

        {/* Modal para mostrar imagen */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gold transition-colors z-10"
              >
                <div className="bg-black/50 rounded-full p-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </button>
              <div 
                className="relative w-full h-auto max-h-[80vh] rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Imagen ampliada"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
