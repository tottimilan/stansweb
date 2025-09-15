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

const procesalesFAQ = [
  {
    question: "¿Qué recursos puedo interponer contra una decisión judicial?",
    answer: "Puedes interponer recurso de reforma (5 días) ante el mismo juez, apelación (5-10 días) ante Audiencia Provincial, y casación ante Tribunal Supremo en casos excepcionales. También cabe recurso de amparo constitucional."
  },
  {
    question: "¿Cuánto tiempo tengo para preparar mi defensa?",
    answer: "Tienes derecho a tiempo suficiente para preparar tu defensa. Si has sido detenido, tienes derecho a 3-5 días para preparar alegaciones antes de la audiencia judicial, según la complejidad del caso."
  },
  {
    question: "¿Puedo recusar al juez si creo que no es imparcial?",
    answer: "Sí, tienes derecho a recusar al juez por motivos legales tasados: parentesco, amistad íntima, enemistad manifiesta, interés directo, etc. La recusación se tramita ante el mismo juzgado."
  },
  {
    question: "¿Qué ocurre si no entiendo el proceso judicial?",
    answer: "Tienes derecho a que se te explique el proceso de forma clara y comprensible. Puedes solicitar aclaraciones al juez, abogado o incluso un intérprete si es necesario."
  },
  {
    question: "¿Puedo cambiar de abogado durante el proceso?",
    answer: "Sí, puedes designar un nuevo abogado en cualquier momento. El cambio debe comunicarse al juzgado y al abogado anterior. Si no puedes costearlo, se designará uno de oficio."
  },
  {
    question: "¿Qué derechos tengo durante la investigación policial?",
    answer: "Derecho a conocer los hechos que se te imputan, acceso a las actuaciones (con limitaciones), derecho a aportar pruebas, derecho a no declarar, y derecho a asistencia letrada en todas las diligencias."
  },
  {
    question: "¿Puedo impugnar las pruebas obtenidas ilegalmente?",
    answer: "Sí, cualquier prueba obtenida vulnerando derechos constitucionales debe excluirse del proceso (prueba ilícita). Esto incluye registros sin orden judicial, declaraciones sin abogado, etc."
  },
  {
    question: "¿Qué ocurre si el juez no respeta los plazos procesales?",
    answer: "Los plazos procesales son de orden público y su incumplimiento puede dar lugar a nulidades. Si se supera el plazo máximo de detención (72 horas) sin resolución judicial, debes ser puesto en libertad."
  }
];

const derechosInvestigacion = [
  {
    derecho: "Derecho a Ser Informado",
    descripcion: "Conocimiento detallado de los hechos imputados",
    procedimiento: "Comunicación por escrito de la imputación",
    momento: "Inicio de las investigaciones"
  },
  {
    derecho: "Derecho a la Defensa",
    descripcion: "Asistencia letrada en todas las fases",
    procedimiento: "Presencia obligatoria en diligencias",
    momento: "Desde la imputación formal"
  },
  {
    derecho: "Derecho a Probar",
    descripcion: "Aportar pruebas en tu favor",
    procedimiento: "Propuesta de pruebas al juzgado",
    momento: "Fase de instrucción"
  },
  {
    derecho: "Derecho de Acceso",
    descripcion: "Examen de las actuaciones del caso",
    procedimiento: "Consulta en secretaría judicial",
    momento: "Después de personación"
  },
  {
    derecho: "Derecho al Silencio",
    descripcion: "No obligación de declarar contra ti mismo",
    procedimiento: "Información expresa del derecho",
    momento: "Antes de cualquier declaración"
  },
  {
    derecho: "Derecho a Recursos",
    descripcion: "Impugnación de decisiones judiciales",
    procedimiento: "Recursos ordinarios y extraordinarios",
    momento: "Contra resoluciones judiciales"
  },
];

const tiposRecursos = [
  {
    recurso: "Recurso de Reforma",
    contra: "Auto del juez de instrucción",
    plazo: "5 días desde notificación",
    organo: "Mismo juez que dictó la resolución",
    efectos: "Suspende parcialmente la resolución"
  },
  {
    recurso: "Recurso de Apelación",
    contra: "Sentencias y autos definitivos",
    plazo: "5-10 días según tipo",
    organo: "Audiencia Provincial o Nacional",
    efectos: "Suspende la ejecución si se solicita"
  },
  {
    recurso: "Recurso de Casación",
    contra: "Sentencias de Audiencia Provincial",
    plazo: "Extraordinario - 20 días hábiles",
    organo: "Tribunal Supremo",
    efectos: "Suspende la ejecución"
  },
  {
    recurso: "Recurso de Amparo",
    contra: "Vulneración derechos constitucionales",
    plazo: "20 días hábiles desde firmeza",
    organo: "Tribunal Constitucional",
    efectos: "No suspende ejecución automáticamente"
  },
  {
    recurso: "Recurso de Revisión",
    contra: "Sentencias firmes por nuevos hechos",
    plazo: "Sin plazo específico",
    organo: "Audiencia Provincial",
    efectos: "Suspende ejecución hasta resolución"
  },
  {
    recurso: "Habeas Corpus",
    contra: "Detenciones ilegales o irregulares",
    plazo: "Sin límite temporal",
    organo: "Audiencia Nacional",
    efectos: "Liberación inmediata si prospera"
  },
];

const garantiasAudiencia = [
  {
    garantia: "Derecho a Estar Presente",
    descripcion: "Presencia obligatoria en la audiencia",
    procedimiento: "Citación personal con antelación",
    evidencia: "Artículo 24.2 CE"
  },
  {
    garantia: "Derecho a Ser Oído",
    descripcion: "Posibilidad de intervenir en el juicio",
    procedimiento: "Turno de última palabra",
    evidencia: "Artículo 24.2 CE"
  },
  {
    garantia: "Derecho a la Contradicción",
    descripcion: "Impugnación de pruebas de cargo",
    procedimiento: "Intervención en el juicio oral",
    evidencia: "Artículo 24.2 CE"
  },
  {
    garantia: "Derecho a Prueba",
    descripcion: "Práctica de pruebas propuestas",
    procedimiento: "Propuesta y práctica en juicio",
    evidencia: "Artículo 24.2 CE"
  },
  {
    garantia: "Derecho a la Imparcialidad",
    descripcion: "Tribunal independiente y neutral",
    procedimiento: "Recusación si hay dudas",
    evidencia: "Artículo 24.2 CE"
  },
  {
    garantia: "Derecho a la Publicidad",
    descripcion: "Juicio público salvo excepciones",
    procedimiento: "Acceso público a la sala",
    evidencia: "Artículo 24.2 CE"
  },
];

const medidasCautelares = [
  {
    medida: "Libertad Provisional",
    descripcion: "Puesta en libertad con medidas cautelares",
    requisitos: ["Arraigo en España", "Sin antecedentes", "Delito no grave"],
    alternativas: ["Firma semanal", "Prohibición salida", "Depósito económico"]
  },
  {
    medida: "Prisión Preventiva",
    descripcion: "Detención provisional hasta juicio",
    requisitos: ["Riesgo de fuga", "Peligro para investigación", "Delito grave"],
    alternativas: ["Arraigo familiar", "Control telemático", "Presentación diaria"]
  },
  {
    medida: "Libertad bajo Fianza",
    descripcion: "Liberación mediante depósito económico",
    requisitos: ["Capacidad económica", "Arraigo suficiente", "Confianza judicial"],
    alternativas: ["Aval bancario", "Hipoteca", "Fianza personal"]
  },
  {
    medida: "Libertad Vigilada",
    descripcion: "Libertad con control policial",
    requisitos: ["Domicilio fijo", "Aceptación medidas", "No reincidencia"],
    alternativas: ["Control telefónico", "Limitación geográfica", "Horario restringido"]
  },
];

const estrategiasDefensa = [
  {
    fase: "Fase de Instrucción",
    objetivos: ["Conocer las pruebas de cargo", "Preparar estrategia defensiva", "Solicitar pruebas exculpatorias", "Impugnar diligencias irregulares"],
    acciones: ["Personación en el procedimiento", "Examen exhaustivo del sumario", "Propuesta de diligencias", "Preparación de escritos de defensa"]
  },
  {
    fase: "Audiencia Preliminar",
    objetivos: ["Valorar la viabilidad del juicio", "Negociar conformidad", "Preparar estrategia procesal", "Evaluar medidas cautelares"],
    acciones: ["Análisis de pruebas", "Negociación con fiscalía", "Preparación de cuestiones previas", "Solicitud de medidas"]
  },
  {
    fase: "Juicio Oral",
    objetivos: ["Practicar todas las pruebas", "Interrogar a testigos", "Exponer alegaciones finales", "Conseguir absolución"],
    acciones: ["Preparación de interrogatorios", "Organización de pruebas", "Redacción de informes", "Estrategia de conclusiones"]
  },
  {
    fase: "Recursos",
    objetivos: ["Impugnar errores judiciales", "Conseguir nueva valoración", "Proteger derechos constitucionales", "Evitar consecuencias penales"],
    acciones: ["Preparación técnica de recursos", "Fundamentación jurídica", "Presentación en plazo", "Seguimiento de resoluciones"]
  },
];

const relatedArticles = [
  {
    title: 'Derechos Constitucionales del Detenido',
    slug: 'derechos-constitucionales-detenido',
    category: 'Derechos Fundamentales'
  },
  {
    title: 'Derecho a la Asistencia Letrada del Detenido',
    slug: 'derecho-asistencia-letrada-detenido',
    category: 'Asistencia Legal'
  },
  {
    title: 'Derechos en Dependencias Policiales',
    slug: 'derechos-dependencias-policiales',
    category: 'Derechos en Detención'
  },
];

export default function DerechosProcesalesPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // Traducciones específicas del blog
  const blogTranslations = language === 'ar' ? {
    hero: {
      backLink: 'العودة إلى مركز حقوق المعتقلين',
      title: 'الحقوق الإجرائية والموارد للمعتقل',
      subtitle: 'الحقوق أثناء التحقيق والجلسة القضائية والتدابير الاحتياطية',
      description: 'الحقوق أثناء التحقيق، الجلسة القضائية والتدابير الاحتياطية. الموارد ضد القرارات القضائية واستراتيجيات الدفاع.'
    },
    sections: {
      derechosInvestigacion: 'الحقوق أثناء التحقيق',
      sistemaRecursos: 'نظام الموارد ضد القرارات القضائية',
      garantiasAudiencia: 'الضمانات في الجلسة القضائية',
      medidasCautelares: 'التدابير الاحتياطية أثناء الإجراء',
      estrategiasDefensa: 'استراتيجيات الدفاع حسب مراحل الإجراء',
      proteccionDilaciones: 'الحماية ضد التأخيرات غير المبررة',
      preguntasFrecuentes: 'الأسئلة الشائعة حول الحقوق الإجرائية',
      legislacion: 'التشريع والمراجع',
      conclusion: 'الخاتمة'
    }
  } : {
    hero: {
      backLink: 'Volver al hub de Derechos de Detenidos',
      title: 'Derechos Procesales y Recursos del Detenido',
      subtitle: 'Derechos durante la Investigación, Audiencia Judicial y Medidas Cautelares',
      description: 'Derechos durante la investigación, audiencia judicial y medidas cautelares. Recursos contra decisiones judiciales y estrategias de defensa.'
    },
    sections: {
      derechosInvestigacion: 'Derechos durante la Investigación',
      sistemaRecursos: 'Sistema de Recursos contra Decisiones Judiciales',
      garantiasAudiencia: 'Garantías en la Audiencia Judicial',
      medidasCautelares: 'Medidas Cautelares durante el Proceso',
      estrategiasDefensa: 'Estrategias de Defensa por Fases Procesales',
      proteccionDilaciones: 'Protección contra Dilaciones Indebidas',
      preguntasFrecuentes: 'Preguntas Frecuentes sobre Derechos Procesales',
      legislacion: 'Legislación y Referencias',
      conclusion: 'Conclusión'
    }
  };

  // Traducciones del contenido del artículo
  const contentTranslations = language === 'ar' ? {
    introduccion: {
      parrafo1: 'الحقوق الإجرائية للمعتقل تشكل مجموعة الضمانات التي تحمي شرعية الإجراء الجنائي وضمان إجراء عادل. منصوص عليها في الدستور الإسباني (المادة 24) ومطورة في قانون الإجراءات الجنائية، تمتد هذه الحقوق من الحق في الإخطار بالاتهام إلى الحق في الطعن في القرارات القضائية.',
      parrafo2: 'توضح هذه الدليل الشامل جميع الحقوق الإجرائية أثناء التحقيق، الضمانات في الجلسة القضائية، أنواع التدابير الاحتياطية، ونظام الموارد الكامل ضد القرارات القضائية، بناءً على قضاء المحكمة العليا والمحكمة الدستورية والمحكمة الأوروبية لحقوق الإنسان.'
    },
    derechosInvestigacion: {
      titulo: 'الحقوق أثناء التحقيق'
    }
  } : {
    introduccion: {
      parrafo1: 'Los <strong>derechos procesales del detenido</strong> constituyen el conjunto de garantías que protegen la legalidad del procedimiento penal y aseguran un proceso justo. Recogidos en la <strong>Constitución Española</strong> (artículo 24) y desarrollados en la <strong>Ley de Enjuiciamiento Criminal</strong>, estos derechos van desde el derecho a ser informado de la acusación hasta el derecho a impugnar las decisiones judiciales.',
      parrafo2: 'Esta guía exhaustiva explica todos los derechos procesales durante la investigación, las garantías en la audiencia judicial, los tipos de medidas cautelares, y el sistema completo de recursos contra decisiones judiciales, basándose en la jurisprudencia del <strong>Tribunal Supremo</strong>, <strong>Tribunal Constitucional</strong> y <strong>Tribunal Europeo de Derechos Humanos</strong>.'
    },
    derechosInvestigacion: {
      titulo: 'Derechos durante la Investigación'
    }
  };

  const breadcrumbItems = [
    { label: t.breadcrumb.blog, href: '/blog' },
    { label: language === 'ar' ? 'حقوق المعتقلين' : 'Derechos de Detenidos', href: '/blog/derechos-detenidos' },
    { label: blogTranslations.hero.title }
  ];

  const tocItems = [
    { id: 'derechos-durante-la-investigacion', title: blogTranslations.sections.derechosInvestigacion, level: 2 },
    { id: 'sistema-de-recursos-contra-decisiones-judiciales', title: blogTranslations.sections.sistemaRecursos, level: 2 },
    { id: 'garantias-en-la-audiencia-judicial', title: blogTranslations.sections.garantiasAudiencia, level: 2 },
    { id: 'medidas-cautelares-durante-el-proceso', title: blogTranslations.sections.medidasCautelares, level: 2 },
    { id: 'estrategias-de-defensa-por-fases-procesales', title: blogTranslations.sections.estrategiasDefensa, level: 2 },
    { id: 'proteccion-contra-dilaciones-indebidas', title: blogTranslations.sections.proteccionDilaciones, level: 2 },
    { id: 'preguntas-frecuentes-sobre-derechos-procesales', title: blogTranslations.sections.preguntasFrecuentes, level: 2 },
    { id: 'legislacion-y-referencias', title: blogTranslations.sections.legislacion, level: 2 },
    { id: 'conclusion', title: blogTranslations.sections.conclusion, level: 2 }
  ];

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />
      <main className="bg-black">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 to-charleston text-offwhite py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            {/* Table of Contents */}
            <TableOfContents items={tocItems} />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/blog/derechos-detenidos"
                className="inline-flex items-center gap-2 text-gold hover:text-white transition mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                {blogTranslations.hero.backLink}
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">
                  {language === 'ar' ? 'حقوق المعتقلين' : 'Derechos de Detenidos'}
                </span>
                <div className="flex items-center gap-1 text-sm text-white/70">
                  <Clock className="h-4 w-4" />
                  16 {t.blog.minLectura}
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
                  12 ene 2025
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

              {/* Derechos en Investigación */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="derechos-durante-la-investigacion" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  {contentTranslations.derechosInvestigacion.titulo}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {derechosInvestigacion.map((derecho, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-blue-50 border border-blue-200 rounded-lg p-6"
                    >
                      <h4 className="font-semibold text-black mb-2">{derecho.derecho}</h4>
                      <p className="text-black/80 text-sm mb-3" dangerouslySetInnerHTML={{ __html: derecho.descripcion }} />
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {derecho.procedimiento}
                          </span>
                        </div>
                        <div className="text-xs text-black/60 italic">
                          Momento: {derecho.momento}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Tipos de Recursos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="sistema-de-recursos-contra-decisiones-judiciales" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Sistema de Recursos contra Decisiones Judiciales
                </h2>

                <div className="space-y-6">
                  {tiposRecursos.map((recurso, index) => (
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
                            {recurso.recurso}
                          </h3>
                          <p className="text-black/80 text-sm">
                            Contra: {recurso.contra}
                          </p>
                        </div>
                        <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded">
                          Plazo: {recurso.plazo}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded mb-2 block">
                            Órgano: {recurso.organo}
                          </span>
                        </div>
                        <div>
                          <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded mb-2 block">
                            Efectos: {recurso.efectos}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Garantías en Audiencia */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="garantias-en-la-audiencia-judicial" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Garantías en la Audiencia Judicial
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {garantiasAudiencia.map((garantia, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"
                    >
                      <h4 className="font-semibold text-black mb-2">{garantia.garantia}</h4>
                      <p className="text-black/80 text-sm mb-3" dangerouslySetInnerHTML={{ __html: garantia.descripcion }} />
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                            {garantia.procedimiento}
                          </span>
                        </div>
                        <div className="text-xs text-black/60">
                          {garantia.evidencia}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Medidas Cautelares */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="medidas-cautelares-durante-el-proceso" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Medidas Cautelares durante el Proceso
                </h2>

                <div className="space-y-6">
                  {medidasCautelares.map((medida, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-purple-50 border border-purple-200 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-black mb-1">
                            {medida.medida}
                          </h3>
                          <p className="text-black/80 text-sm" dangerouslySetInnerHTML={{ __html: medida.descripcion }} />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-black mb-2">Requisitos:</h4>
                          <ul className="text-sm text-black/80 space-y-1">
                            {medida.requisitos.map((requisito, idx) => (
                              <li key={idx}>• {requisito}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-2">Alternativas:</h4>
                          <ul className="text-sm text-black/80 space-y-1">
                            {medida.alternativas.map((alternativa, idx) => (
                              <li key={idx}>• {alternativa}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Estrategias de Defensa */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="estrategias-de-defensa-por-fases-procesales" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Estrategias de Defensa por Fases Procesales
                </h2>

                <div className="space-y-6">
                  {estrategiasDefensa.map((fase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-red-50 border border-red-200 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-black mb-1">
                            {fase.fase}
                          </h3>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-black mb-2">Objetivos:</h4>
                          <ul className="text-sm text-black/80 space-y-1">
                            {fase.objetivos.map((objetivo, idx) => (
                              <li key={idx}>• {objetivo}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-2">Acciones:</h4>
                          <ul className="text-sm text-black/80 space-y-1">
                            {fase.acciones.map((accion, idx) => (
                              <li key={idx}>• {accion}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Protección contra Dilaciones */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="proteccion-contra-dilaciones-indebidas" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Protección contra Dilaciones Indebidas
                </h2>

                <div className="bg-orange-50 border-l-4 border-orange-600 p-8">
                  <div className="flex items-start gap-3 mb-6">
                    <Clock className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Derecho a un Proceso sin Dilaciones</h3>
                      <p className="text-black/80">
                        El derecho a que el proceso penal se desarrolle sin dilaciones indebidas
                        está garantizado constitucionalmente. Las dilaciones excesivas pueden
                        dar lugar a la absolución o reducción de pena.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">Plazos Máximos</h4>
                      <ul className="text-sm text-black/80 space-y-1">
                        <li>• Instrucción: 6 meses</li>
                        <li>• Audiencia: 3 meses</li>
                        <li>• Recursos: 2 meses</li>
                        <li>• Ejecución: 1 mes</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">Consecuencias</h4>
                      <ul className="text-sm text-black/80 space-y-1">
                        <li>• Absolución por dilaciones</li>
                        <li>• Reducción de pena</li>
                        <li>• Indemnización</li>
                        <li>• Archivo del procedimiento</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">Recursos</h4>
                      <ul className="text-sm text-black/80 space-y-1">
                        <li>• Queja por dilaciones</li>
                        <li>• Recurso de amparo</li>
                        <li>• Demanda civil</li>
                        <li>• Tribunal Europeo</li>
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
                <h2 id="preguntas-frecuentes-sobre-derechos-procesales" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preguntas Frecuentes sobre Derechos Procesales
                </h2>

                <div className="space-y-6">
                  {procesalesFAQ.map((faq, index) => (
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
                  <h3 className="text-lg font-semibold text-black mb-4">Normativa Procesal Española</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Constitución Española (1978)</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículo 24 (derechos procesales)
                      </a>
                    </li>
                    <li>
                      <strong>Ley de Enjuiciamiento Criminal</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1882-6039" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Libro I (derechos y garantías)
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica 6/1985</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1985-12666" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Poder Judicial (recursos)
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Derecho Internacional</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Convenio Europeo de Derechos Humanos</strong> -
                      <a href="https://www.echr.coe.int/Documents/Convention_SPA.pdf" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículos 5, 6 (libertad y proceso justo)
                      </a>
                    </li>
                    <li>
                      <strong>Pacto Internacional de Derechos Civiles y Políticos</strong> -
                      <a href="https://www.ohchr.org/sp/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículos 9, 14 (derechos procesales)
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Destacada</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STC 159/2018</strong> - Límites temporales de la prisión preventiva
                    </li>
                    <li>
                      <strong>STS 47/2018</strong> - Derechos durante la investigación policial
                    </li>
                    <li>
                      <strong>STEDH Caso Mammadov</strong> - Condiciones de detención y proceso justo
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 id="conclusion" className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  Los derechos procesales del detenido constituyen el núcleo del Estado de Derecho
                  y garantizan que cualquier acusación penal se resuelva mediante un procedimiento
                  justo y respetuoso con las garantías constitucionales. Desde el derecho a ser
                  informado de la acusación hasta el derecho a impugnar las decisiones judiciales,
                  estos derechos aseguran que la justicia penal se administre con imparcialidad
                  y respeto a la dignidad humana.
                </p>
                <p className="text-white/90 leading-relaxed">
                  El sistema de recursos contra decisiones judiciales proporciona múltiples vías
                  para corregir errores o vulneraciones, desde los recursos ordinarios más rápidos
                  hasta el recurso de amparo constitucional. Las medidas cautelares permiten
                  equilibrar las necesidades de la investigación con la protección de derechos
                  fundamentales. En STANS Abogados defendemos activamente estos derechos en
                  todas las fases del procedimiento penal.
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
                  href={`https://wa.me/${WHATSAPP}?text=Hola, necesito asesoramiento sobre mis derechos procesales durante un procedimiento penal`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Consulta Derechos Procesales
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
                Más información sobre derechos de detenidos
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