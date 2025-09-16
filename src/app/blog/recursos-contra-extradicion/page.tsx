'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, Scale, Gavel, FileX } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Breadcrumb from '@/components/Breadcrumb';
import TableOfContents from '@/components/TableOfContents';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const recursosFAQ = [
  {
    question: "¿Cuántos recursos puedo interponer contra una extradición?",
    answer: "Puede interponer múltiples recursos: reforma (5 días) ante el mismo juez, apelación (5-10 días) ante Audiencia Provincial, y casación ante Tribunal Supremo en casos excepcionales. Cada recurso suspende la ejecución del anterior."
  },
  {
    question: "¿Qué ocurre durante la suspensión de la extradición?",
    answer: "La interposición de recursos suspende automáticamente la entrega hasta su resolución. Durante este tiempo, permanece en España bajo medidas cautelares que pueden flexibilizarse."
  },
  {
    question: "¿Puedo recurrir al Tribunal Europeo de Derechos Humanos?",
    answer: "Sí, una vez agotados los recursos internos españoles. El TEDH puede examinar vulneraciones del Convenio Europeo de Derechos Humanos, especialmente en casos de riesgo de tortura o procesos injustos."
  },
  {
    question: "¿Qué plazo tiene el TEDH para resolver?",
    answer: "El TEDH puede tardar 1-3 años en casos normales, o emitir medidas provisionales en 24-48 horas en casos urgentes de riesgo inminente de tortura o tratos inhumanos."
  },
  {
    question: "¿Puedo solicitar asilo político durante el proceso?",
    answer: "Sí, puede solicitar protección internacional en cualquier momento. Si se concede asilo, la extradición se deniega automáticamente por el principio de no devolución."
  },
  {
    question: "¿Qué pasa si gano el recurso en apelación?",
    answer: "Si la Audiencia Provincial estima el recurso, devuelve el caso al juez de primera instancia para nueva resolución. Si confirma la denegación, puede intentar casación ante el Supremo."
  },
  {
    question: "¿Puede el Tribunal Supremo cambiar la decisión?",
    answer: "Sí, el Supremo puede casar la resolución por infracción de ley, revocarla parcialmente, o confirmar la decisión anterior. Sus sentencias crean jurisprudencia vinculante."
  },
  {
    question: "¿Qué ocurre si pierdo todos los recursos?",
    answer: "Si se agotan todos los recursos ordinarios, se concede la extradición. Aún puede recurrir al TEDH o solicitar medidas cautelares internacionales para retrasar la entrega."
  }
];

const tiposRecursos = [
  {
    recurso: "Recurso de Reforma",
    organo: "Mismo juez que dictó resolución",
    plazo: "5 días desde notificación",
    efectos: "Suspende ejecución, decisión en 3 días",
    fundamentos: "Errores materiales, defectos formales"
  },
  {
    recurso: "Recurso de Apelación",
    organo: "Audiencia Provincial o Nacional",
    plazo: "5-10 días desde notificación",
    efectos: "Suspende ejecución, plazo de resolución variable",
    fundamentos: "Infracción de ley, valoración probatoria errónea"
  },
  {
    recurso: "Recurso de Casación",
    organo: "Tribunal Supremo",
    plazo: "Extraordinario - 20 días hábiles",
    efectos: "Suspende ejecución hasta resolución",
    fundamentos: "Infracción constitucional, jurisprudencia contradictoria"
  },
  {
    recurso: "Recurso de Amparo",
    organo: "Tribunal Constitucional",
    plazo: "20 días hábiles desde resolución firme",
    efectos: "No suspende ejecución automáticamente",
    fundamentos: "Vulneración de derechos constitucionales"
  }
];

const estrategiaRecursos = [
  {
    fase: "Inmediata a la Resolución",
    acciones: ["Analizar resolución detenidamente", "Identificar motivos de impugnación", "Preparar recurso de reforma", "Coordinar con abogado"],
    objetivo: "Suspender ejecución inmediata"
  },
  {
    fase: "Recurso de Apelación",
    acciones: ["Preparar alegaciones por escrito", "Documentar infracciones legales", "Presentar pruebas nuevas", "Solicitar testificales"],
    objetivo: "Obtener nueva valoración del caso"
  },
  {
    fase: "Recursos Extraordinarios",
    acciones: ["Evaluar vulneración constitucional", "Preparar recurso de amparo", "Considerar TEDH", "Solicitar medidas cautelares"],
    objetivo: "Proteger derechos fundamentales"
  },
  {
    fase: "Ejecución de la Extradición",
    acciones: ["Solicitar garantías adicionales", "Negociar condiciones", "Preparar defensa en país destino", "Coordinar con consulado"],
    objetivo: "Mitigar consecuencias"
  }
];

const medidasCautelaresRecursos = [
  {
    medida: "Suspensión Automática",
    descripcion: "Interposición de recurso suspende la entrega",
    aplicacion: "Todos los recursos ordinarios",
    duracion: "Hasta resolución del recurso"
  },
  {
    medida: "Flexibilización de Medidas",
    descripcion: "Modificación de prisión por libertad vigilada",
    aplicacion: "Durante tramitación de recursos",
    duracion: "Temporal, hasta resolución"
  },
  {
    medida: "Medidas Provisionales TEDH",
    descripcion: "Orden de no extraditar hasta examen del fondo",
    aplicacion: "Casos urgentes de riesgo grave",
    duracion: "Hasta resolución del TEDH"
  },
  {
    medida: "Autorización de Salida",
    descripcion: "Permiso para abandonar territorio español",
    aplicacion: "Excepcional, con garantías",
    duracion: "Hasta cumplimiento de extradición"
  }
];

const casosExitososRecursos = [
  {
    titulo: "Caso de Riesgo de Tortura",
    descripcion: "Recurso de apelación estima vulneración de derechos humanos",
    resultado: "Extradición denegada",
    tiempo: "8 meses"
  },
  {
    titulo: "Defecto Formal Grave",
    descripcion: "Recurso de reforma por falta de traducción oficial",
    resultado: "Procedimiento anulado",
    tiempo: "15 días"
  },
  {
    titulo: "Prescripción del Delito",
    descripcion: "Audiencia Provincial confirma prescripción según ley española",
    resultado: "Libertad definitiva",
    tiempo: "4 meses"
  },
  {
    titulo: "Amparo Constitucional",
    descripcion: "Tribunal Constitucional declara vulneración del derecho de defensa",
    resultado: "Nuevo proceso desde cero",
    tiempo: "1 año"
  }
];

const relatedArticles = [
  {
    title: 'Tipos de Extradición en España',
    slug: 'tipos-extradicion-espana',
    category: 'Procedimiento Penal'
  },
  {
    title: 'Audiencia de Extradición en España',
    slug: 'audiencia-extradicion-espana',
    category: 'Procedimiento Penal'
  },
  {
    title: 'Derechos del Extraditado',
    slug: 'derechos-extraditado',
    category: 'Derechos Humanos'
  }
];

export default function RecursosExtradicionPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // Traducciones específicas del blog
  const blogTranslations = language === 'ar' ? {
    hero: {
      backLink: 'العودة إلى مركز إجراءات التسليم',
      title: 'الموارد ضد التسليم',
      subtitle: 'استراتيجيات قانونية للطعن في قرارات التسليم',
      description: 'دليل شامل للموارد القانونية ضد التسليم. كيفية تقديم الطعون، استراتيجيات الدفاع، والموارد الدولية المتاحة.'
    },
    sections: {
      tiposRecursos: 'أنواع الموارد ضد التسليم',
      estrategiaRecursos: 'استراتيجية الموارد حسب المراحل',
      medidasCautelares: 'التدابير الاحتياطية أثناء الموارد',
      casosExito: 'قضايا ناجحة بالموارد',
      recursosInternacionales: 'الموارد الدولية',
      preguntasFrecuentes: 'الأسئلة الشائعة حول الموارد ضد التسليم',
      legislacion: 'التشريع والمراجع',
      conclusion: 'الخاتمة'
    }
  } : {
    hero: {
      backLink: 'Volver al hub de Procedimientos de Extradición',
      title: 'Recursos Contra la Extradición',
      subtitle: 'Estrategias Legales para Impugnar Decisiones de Extradición',
      description: 'Guía completa de recursos legales contra la extradición. Cómo interponer apelaciones, estrategias de defensa y recursos internacionales disponibles.'
    },
    sections: {
      tiposRecursos: 'Tipos de Recursos contra la Extradición',
      estrategiaRecursos: 'Estrategia de Recursos por Fases',
      medidasCautelares: 'Medidas Cautelares durante Recursos',
      casosExito: 'Casos de Éxito con Recursos',
      recursosInternacionales: 'Recursos Internacionales',
      preguntasFrecuentes: 'Preguntas Frecuentes sobre Recursos contra Extradición',
      legislacion: 'Legislación y Referencias',
      conclusion: 'Conclusión'
    }
  };

  // Traducciones del contenido del artículo
  const contentTranslations = language === 'ar' ? {
    introduccion: {
      parrafo1: 'تشكل الموارد ضد قرارات التسليم أحد أهم الآليات لحماية حقوق المطلوب. تنظم القانون العضوي 3/2003 والقانون 29/1998 نظاماً شاملاً من الموارد يسمح بالطعن في كل من القرارات القضائية والأعمال الإدارية المتعلقة بإجراء التسليم.',
      parrafo2: 'يشرح هذا الدليل الأنواع المختلفة من الموارد المتاحة، مواعيدها وأسسها، واستراتيجيات الدفاع الأكثر فعالية، والتدابير الاحتياطية التي يمكن تطبيقها أثناء معالجة الموارد، بناءً على قضاء المحكمة العليا، المحكمة الدستورية، والمحكمة الأوروبية لحقوق الإنسان.'
    },
    tiposRecursos: {
      titulo: 'أنواع الموارد ضد التسليم'
    }
  } : {
    introduccion: {
      parrafo1: 'Los recursos contra decisiones de extradición constituyen uno de los mecanismos más importantes para proteger los derechos del reclamado. La <strong>Ley Orgánica 3/2003</strong> y la <strong>Ley 29/1998</strong> regulan un sistema completo de recursos que permite impugnar tanto las resoluciones judiciales como los actos administrativos relacionados con el procedimiento de extradición.',
      parrafo2: 'Esta guía explica los diferentes tipos de recursos disponibles, sus plazos y fundamentos, las estrategias de defensa más efectivas, y las medidas cautelares que pueden aplicarse durante la tramitación de los recursos, basándose en la jurisprudencia del <strong>Tribunal Supremo</strong>, <strong>Tribunal Constitucional</strong> y <strong>Tribunal Europeo de Derechos Humanos</strong>.'
    },
    tiposRecursos: {
      titulo: 'Tipos de Recursos contra la Extradición'
    }
  };

  const breadcrumbItems = [
    { label: t.breadcrumb.blog, href: '/blog' },
    { label: language === 'ar' ? 'إجراءات التسليم' : 'Procedimientos de Extradición', href: '/blog/procedimientos-extradicion' },
    { label: blogTranslations.hero.title }
  ];

  const tocItems = [
    { id: 'tipos-de-recursos-contra-la-extradicion', title: blogTranslations.sections.tiposRecursos, level: 2 },
    { id: 'estrategia-de-recursos-por-fases', title: blogTranslations.sections.estrategiaRecursos, level: 2 },
    { id: 'medidas-cautelares-durante-recursos', title: blogTranslations.sections.medidasCautelares, level: 2 },
    { id: 'casos-de-exito-con-recursos', title: blogTranslations.sections.casosExito, level: 2 },
    { id: 'recursos-internacionales', title: blogTranslations.sections.recursosInternacionales, level: 2 },
    { id: 'preguntas-frecuentes-sobre-recursos-contra-extradicion', title: blogTranslations.sections.preguntasFrecuentes, level: 2 },
    { id: 'legislacion-y-referencias', title: blogTranslations.sections.legislacion, level: 2 },
    { id: 'conclusion', title: blogTranslations.sections.conclusion, level: 2 }
  ];

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />
      <main className="bg-black pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-charleston text-offwhite py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/blog/procedimientos-extradicion"
                className="inline-flex items-center gap-2 text-gold hover:text-white transition mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                {blogTranslations.hero.backLink}
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">
                  {language === 'ar' ? 'إجراءات التسليم' : 'Procedimientos de Extradición'}
                </span>
                <div className="flex items-center gap-1 text-sm text-white/70">
                  <Clock className="h-4 w-4" />
                  14 {t.blog.minLectura}
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gold mb-6 leading-tight">
                {blogTranslations.hero.title}
              </h1>

              <h2 className="text-xl sm:text-2xl font-semibold text-white/90 mb-4">
                {blogTranslations.hero.subtitle}
              </h2>

              <p className="text-lg text-white/80 mb-6" dangerouslySetInnerHTML={{ __html: blogTranslations.hero.description }} />

              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Equipo STANS Abogados
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  03 ene 2025
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <article className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {/* Introduction */}
              <div className="text-black/80 leading-relaxed mb-12 text-lg">
                <p dangerouslySetInnerHTML={{ __html: contentTranslations.introduccion.parrafo1 }} />
                <p dangerouslySetInnerHTML={{ __html: contentTranslations.introduccion.parrafo2 }} />
              </div>

              {/* Tipos de Recursos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="tipos-de-recursos-contra-la-extradicion" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  {contentTranslations.tiposRecursos.titulo}
                </h2>

                <div className="space-y-6">
                  {tiposRecursos.map((recurso, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-charleston text-white rounded-2xl p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gold mb-1">
                            {recurso.recurso}
                          </h3>
                          <p className="text-white/80 text-sm">
                            Órgano: {recurso.organo}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-sm bg-gold/20 text-gold px-3 py-1 rounded-full mb-1 block">
                            Plazo: {recurso.plazo}
                          </span>
                          <span className="text-xs text-white/70">
                            {recurso.efectos}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gold mb-2">Fundamentos habituales:</h4>
                        <p className="text-white/90 text-sm" dangerouslySetInnerHTML={{ __html: recurso.fundamentos }} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Estrategia de Recursos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="estrategia-de-recursos-por-fases" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Estrategia de Recursos por Fases
                </h2>

                <div className="space-y-6">
                  {estrategiaRecursos.map((fase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-blue-50 border border-blue-200 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-black mb-1">
                            {fase.fase}
                          </h3>
                          <p className="text-black/80 text-sm italic" dangerouslySetInnerHTML={{ __html: fase.objetivo }} />
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-black mb-2">Acciones estratégicas:</h4>
                        <ul className="space-y-1">
                          {fase.acciones.map((accion, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-black/80 text-sm">
                              <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                              {accion}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Medidas Cautelares durante Recursos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="medidas-cautelares-durante-recursos" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Medidas Cautelares durante Recursos
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {medidasCautelaresRecursos.map((medida, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-green-50 border border-green-200 rounded-lg p-6"
                    >
                      <h4 className="font-semibold text-black mb-2">{medida.medida}</h4>
                      <p className="text-black/80 text-sm mb-3" dangerouslySetInnerHTML={{ __html: medida.descripcion }} />
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            Aplicación: {medida.aplicacion}
                          </span>
                        </div>
                        <div className="text-xs text-black/60">
                          Duración: {medida.duracion}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Casos Exitosos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="casos-de-exito-con-recursos" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Casos de Éxito con Recursos
                </h2>

                <div className="space-y-6">
                  {casosExitososRecursos.map((caso, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-green-50 border border-green-200 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-black mb-1">
                            {caso.titulo}
                          </h3>
                          <p className="text-black/80 text-sm" dangerouslySetInnerHTML={{ __html: caso.descripcion }} />
                        </div>
                        <div className="text-right">
                          <div className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-medium mb-1">
                            {caso.resultado}
                          </div>
                          <div className="text-black/60 text-xs">
                            En {caso.tiempo}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Lecciones de estos Casos</h3>
                  <ul className="space-y-2 text-black/80">
                    <li>• Los defectos formales pueden anular todo el procedimiento</li>
                    <li>• Los riesgos de vulneración de derechos son tomados muy en serio</li>
                    <li>• La jurisprudencia española es favorable a la protección de derechos fundamentales</li>
                    <li>• Los recursos extraordinarios pueden lograr resultados sorprendentes</li>
                  </ul>
                </div>
              </motion.div>

              {/* Recursos Internacionales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="recursos-internacionales" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Recursos Internacionales
                </h2>

                <div className="bg-purple-50 border-l-4 border-purple-600 p-8">
                  <div className="flex items-start gap-3 mb-6">
                    <Shield className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Tribunal Europeo de Derechos Humanos</h3>
                      <p className="text-black/80">
                        Una vez agotados los recursos internos españoles, puede recurrir al TEDH
                        si considera vulnerados sus derechos del Convenio Europeo de Derechos Humanos.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-3">✅ Medidas Provisionales TEDH</h4>
                      <ul className="text-sm text-black/80 space-y-2">
                        <li>• Solicitud de suspensión de extradición</li>
                        <li>• Plazo: 24-48 horas para respuesta</li>
                        <li>• Efectos: Suspensión inmediata</li>
                        <li>• Duración: Hasta examen de fondo</li>
                        <li>• Requisito: Riesgo grave e inminente</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-3">🌍 Otros Mecanismos Internacionales</h4>
                      <ul className="text-sm text-black/80 space-y-2">
                        <li>• Comité de Derechos Humanos (ONU)</li>
                        <li>• Comisión Interamericana de Derechos Humanos</li>
                        <li>• Mecanismos de protección diplomática</li>
                        <li>• Acciones ante organismos internacionales</li>
                        <li>• Coordinación con consulados</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="preguntas-frecuentes-sobre-recursos-contra-extradicion" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preguntas Frecuentes sobre Recursos contra Extradición
                </h2>

                <div className="space-y-6">
                  {recursosFAQ.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 border border-gray-200 rounded-lg p-6"
                    >
                      <h3 className="text-lg font-semibold text-black mb-3 flex items-start gap-2">
                        <span className="bg-gold text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          ?
                        </span>
                        {faq.question}
                      </h3>
                      <p className="text-black/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Referencias */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="legislacion-y-referencias" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Legislación y Referencias
                </h2>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">Normativa Española</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Ley Orgánica 3/2003</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2003-13319" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículos 23-27 (recursos contra extradición)
                      </a>
                    </li>
                    <li>
                      <strong>Ley 29/1998</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1998-24055" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Jurisdicción contencioso-administrativa
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica 2/1979</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1979-304" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Tribunal Constitucional
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Derecho Internacional</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Convenio Europeo de Derechos Humanos</strong> -
                      <a href="https://www.echr.coe.int/Documents/Convention_SPA.pdf" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Protocolo 11 (Tribunal Europeo de Derechos Humanos)
                      </a>
                    </li>
                    <li>
                      <strong>Convención contra la Tortura</strong> -
                      <a href="https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-against-torture-and-other-cruel-inhuman-or-degrading-treatment-or-punishment" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Prohibición absoluta de devolución
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Relevante</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STC 91/2000</strong> - Límites constitucionales de la extradición
                    </li>
                    <li>
                      <strong>STS 47/2018</strong> - Recursos contra decisiones de extradición
                    </li>
                    <li>
                      <strong>STEDH Caso Soering vs Reino Unido</strong> - Pena de muerte y extradición
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 id="conclusion" className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  Los recursos contra la extradición constituyen un sistema completo de protección
                  jurídica que permite impugnar decisiones injustas o irregulares. Desde los recursos
                  ordinarios más rápidos hasta los extraordinarios ante tribunales internacionales,
                  existen múltiples vías para defender los derechos fundamentales del reclamado.
                </p>
                <p className="text-white/90 leading-relaxed">
                  La interposición oportuna de recursos no solo puede lograr la suspensión inmediata
                  de la extradición, sino también conseguir su denegación definitiva cuando concurren
                  causas legales suficientes. La coordinación con abogados especializados es fundamental
                  para maximizar las posibilidades de éxito en cada fase del procedimiento.
                </p>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-gold/20">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-black/70 hover:text-gold transition">
                    <Share2 className="h-4 w-4" />
                    {t.blog.compartirArticulo}
                  </button>

                </div>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hola, necesito impugnar una decisión de extradición`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Recursos contra Extradición
                </a>
              </div>
            </motion.div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="bg-charleston py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gold mb-4">
                {t.blog.articulosRelacionados}
              </h2>
              <p className="text-white/80">
                Más información sobre procedimientos de extradición
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/blog/${article.slug}`}>
                    <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gold/20 hover:border-gold/50 h-full">
                      <div className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full w-fit mb-3">
                        {article.category}
                      </div>
                      <h3 className="text-lg font-semibold text-black mb-3 hover:text-gold transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center text-gold">
                        <span className="text-sm font-medium">Leer artículo</span>
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton whatsapp={WHATSAPP} />
      </main>
    </>
  );
}
