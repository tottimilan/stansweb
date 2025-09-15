'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, Scale, Users, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Breadcrumb from '@/components/Breadcrumb';
import TableOfContents from '@/components/TableOfContents';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const vulnerablesFAQ = [
  {
    question: "¿Qué derechos especiales tienen los menores detenidos?",
    answer: "Los menores tienen derecho a: presencia obligatoria de representante legal, abogado especializado en menores, consideración del interés superior del menor, prohibición de incomunicación, y trato diferenciado en todas las fases del procedimiento."
  },
  {
    question: "¿Cómo se protegen los derechos de los extranjeros detenidos?",
    answer: "Los extranjeros tienen derecho a: traducción oficial gratuita, comunicación consular inmediata, información en su idioma, asistencia jurídica especializada en extranjería, y protección contra deportación hasta resolución del proceso penal."
  },
  {
    question: "¿Qué garantías tienen las personas con discapacidad durante la detención?",
    answer: "Tienen derecho a: adaptaciones razonables en todas las instalaciones, apoyo especializado durante interrogatorios, abogado con conocimientos específicos, evaluaciones médicas especializadas, y medidas alternativas a la detención cuando sea posible."
  },
  {
    question: "¿Cómo se protegen los derechos de las víctimas de violencia de género detenidas?",
    answer: "Las víctimas tienen derecho a: protección especial contra agresores, medidas de alejamiento, apoyo psicológico especializado, coordinación con servicios sociales, y consideración de su situación de vulnerabilidad en todas las decisiones judiciales."
  },
  {
    question: "¿Qué ocurre con las personas mayores durante la detención?",
    answer: "Tienen derecho a: evaluación médica inmediata de su estado de salud, consideración de su edad en medidas cautelares, facilidades para comunicación familiar, protección especial contra maltratos, y medidas alternativas a la prisión preventiva cuando sea posible."
  },
  {
    question: "¿Cómo se garantiza la protección de menores extranjeros no acompañados?",
    answer: "Tienen derecho a: nombramiento inmediato de tutor legal, abogado especializado, protección internacional como menores, evaluación de su interés superior, y prohibición absoluta de deportación sin garantías de protección en el país de origen."
  },
  {
    question: "¿Qué derechos tienen las personas en situación de sinhogarismo?",
    answer: "Tienen derecho a: información especial sobre sus derechos, acceso a servicios sociales durante la detención, consideración de su situación en medidas cautelares, protección contra discriminación, y apoyo para acceder a recursos básicos tras la liberación."
  },
  {
    question: "¿Cómo se protegen los derechos de las personas con problemas de salud mental?",
    answer: "Tienen derecho a: evaluación psiquiátrica inmediata, tratamiento médico continuado, protección contra estigmatización, medidas terapéuticas alternativas a la detención, y coordinación con servicios de salud mental especializados."
  }
];

const proteccionesGrupos = [
  {
    grupo: "Menores de Edad",
    derechosEspeciales: [
      "Presencia obligatoria de representante legal",
      "Abogado especializado en derecho de menores",
      "Audiencia adaptada a su edad y madurez",
      "Prohibición de incomunicación",
      "Consideración del interés superior del menor",
      "Acceso a educación durante la detención",
      "Protección contra estigmatización social"
    ],
    autoridadCompetente: "Fiscalía de Menores",
    legislacionEspecifica: "Ley Orgánica 5/2000 de responsabilidad penal de menores"
  },
  {
    grupo: "Extranjeros",
    derechosEspeciales: [
      "Traducción oficial gratuita e inmediata",
      "Comunicación consular en 24 horas",
      "Información en idioma nativo",
      "Abogado con conocimientos de extranjería",
      "Protección contra deportación durante proceso",
      "Acceso a servicios de su embajada",
      "Derecho a asistencia consular"
    ],
    autoridadCompetente: "Oficina de Asilo y Refugio",
    legislacionEspecifica: "Ley Orgánica 4/2000 de derechos de extranjeros"
  },
  {
    grupo: "Personas con Discapacidad",
    derechosEspeciales: [
      "Adaptaciones arquitectónicas razonables",
      "Apoyo durante interrogatorios",
      "Abogado con conocimientos específicos",
      "Evaluación médica especializada",
      "Medios de comunicación accesibles",
      "Apoyo técnico necesario",
      "Medidas alternativas a la detención"
    ],
    autoridadCompetente: "Instituto Nacional de Servicios Sociales",
    legislacionEspecifica: "Ley 39/2006 de promoción autonomía personal"
  },
  {
    grupo: "Víctimas de Violencia de Género",
    derechosEspeciales: [
      "Protección especial contra agresores",
      "Medidas de alejamiento automático",
      "Apoyo psicológico especializado",
      "Coordinación con servicios sociales",
      "Consideración en custodia de hijos",
      "Protección contra revictimización",
      "Acceso a órdenes de protección"
    ],
    autoridadCompetente: "Fiscalía contra Violencia de Género",
    legislacionEspecifica: "Ley Orgánica 1/2004 de medidas protección víctimas"
  }
];

const protocolosEspeciales = [
  {
    situacion: "Menor Extranjero No Acompañado",
    protocolo: [
      "Designación inmediata de tutor legal",
      "Evaluación de edad por médico forense",
      "Traducción especializada",
      "Abogado de menores con conocimientos migratorios",
      "Protección internacional como menor",
      "Evaluación de riesgo en país de origen",
      "Prohibición de deportación sin garantías"
    ],
    tiempoRespuesta: "24-48 horas",
    coordinacion: "Fiscalía de Menores + Servicios Sociales"
  },
  {
    situacion: "Persona con Discapacidad Intelectual",
    protocolo: [
      "Evaluación de capacidad procesal",
      "Abogado con conocimientos específicos",
      "Comunicación simplificada y accesible",
      "Presencia de familiar o apoyo",
      "Evaluación psicológica especializada",
      "Medidas cautelares adaptadas",
      "Seguimiento post-detención"
    ],
    tiempoRespuesta: "Inmediato",
    coordinacion: "Abogado + Psicólogo forense"
  },
  {
    situacion: "Víctima de Trata de Personas",
    protocolo: [
      "Protección inmediata como víctima",
      "Confidencialidad absoluta",
      "Abogado especializado en trata",
      "Apoyo psicológico especializado",
      "Evaluación de riesgo de revictimización",
      "Medidas de protección integral",
      "Coordinación con ONG especializadas"
    ],
    tiempoRespuesta: "Inmediato",
    coordinacion: "Policía + Fiscalía + Servicios Sociales"
  },
  {
    situacion: "Persona con Problemas de Salud Mental Graves",
    protocolo: [
      "Evaluación psiquiátrica inmediata",
      "Tratamiento médico continuado",
      "Medidas terapéuticas alternativas",
      "Protección contra estigmatización",
      "Coordinación con psiquiatra forense",
      "Evaluación de peligrosidad",
      "Plan de seguimiento post-detención"
    ],
    tiempoRespuesta: "Máximo 24 horas",
    coordinacion: "Médico forense + Psiquiatra"
  }
];

const medidasAlternativas = [
  {
    grupo: "Personas Mayores",
    medidas: [
      "Libertad provisional con control telemático",
      "Presentación periódica en juzgado",
      "Residencia vigilada en domicilio",
      "Control por servicios sociales",
      "Apoyo familiar garantizado",
      "Seguimiento médico regular"
    ],
    justificacion: "Evitar impacto negativo en salud y autonomía"
  },
  {
    grupo: "Madres con Hijos Menores",
    medidas: [
      "Libertad provisional con custodia compartida",
      "Residencia vigilada familiar",
      "Control telemático",
      "Apoyo de servicios sociales",
      "Garantías económicas",
      "Seguimiento pedagógico"
    ],
    justificacion: "Proteger el interés superior de los menores"
  },
  {
    grupo: "Personas con Discapacidad",
    medidas: [
      "Libertad con apoyos técnicos",
      "Residencia adaptada",
      "Control telemático accesible",
      "Apoyo de cuidador profesional",
      "Seguimiento médico especializado",
      "Medidas de apoyo social"
    ],
    justificacion: "Garantizar accesibilidad y autonomía"
  },
  {
    grupo: "Trabajadores Esenciales",
    medidas: [
      "Libertad provisional con arraigo laboral",
      "Presentación en centro de trabajo",
      "Control telemático",
      "Garantías empresariales",
      "Seguimiento profesional",
      "Medidas de conciliación"
    ],
    justificacion: "Preservar el interés general y estabilidad laboral"
  }
];

const recursosApoyo = [
  {
    recurso: "Servicios de Atención a Víctimas",
    descripcion: "Apoyo integral a víctimas vulnerables",
    contacto: "016 (24h)",
    especialidades: "Violencia género, menores, discapacidad"
  },
  {
    recurso: "Oficina de Asilo y Refugio",
    descripcion: "Protección internacional y refugio",
    contacto: "Ministerio del Interior",
    especialidades: "Extranjeros, persecución, menores no acompañados"
  },
  {
    recurso: "Instituto Nacional de Servicios Sociales",
    descripcion: "Apoyo a personas con discapacidad",
    contacto: "www.imserso.es",
    especialidades: "Discapacidad, dependencia, autonomía"
  },
  {
    recurso: "Fiscalía de Menores",
    descripcion: "Protección de derechos de menores",
    contacto: "Fiscalía General del Estado",
    especialidades: "Menores, familia, protección infantil"
  },
  {
    recurso: "Servicios Sociales de Atención Primaria",
    descripcion: "Apoyo social y comunitario",
    contacto: "Ayuntamiento local",
    especialidades: "Vulnerabilidad social, sinhogarismo, exclusión"
  },
  {
    recurso: "Centro de Salud Mental",
    descripcion: "Atención a problemas de salud mental",
    contacto: "Servicio Nacional de Salud",
    especialidades: "Salud mental, trastornos, rehabilitación"
  }
];

const relatedArticles = [
  {
    title: 'Derechos Constitucionales del Detenido',
    slug: 'derechos-constitucionales-detenido',
    category: 'Derechos Fundamentales'
  },
  {
    title: 'Protección contra Torturas y Tratos Inhumanos',
    slug: 'proteccion-torturas-tratos-inhumanos',
    category: 'Derechos Humanos'
  },
  {
    title: 'Derecho a la Asistencia Letrada del Detenido',
    slug: 'derecho-asistencia-letrada-detenido',
    category: 'Asistencia Legal'
  }
];

export default function DerechosGruposVulnerablesPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // Traducciones específicas del blog
  const blogTranslations = language === 'ar' ? {
    hero: {
      backLink: 'العودة إلى مركز حقوق المعتقلين',
      title: 'حقوق الفئات الضعيفة المعتقلة',
      subtitle: 'الحماية الخاصة للفئات الأكثر ضعفاً أثناء الاعتقال',
      description: 'دليل شامل لحماية حقوق الفئات الضعيفة أثناء الاعتقال. القاصرون، الأجانب، ذوي الاحتياجات الخاصة، والمجموعات الأخرى المعرضة للخطر.'
    },
    sections: {
      proteccionesEspeciales: 'الحمايات الخاصة حسب المجموعات',
      protocolosEspeciales: 'البروتوكولات الخاصة للتصرف',
      medidasAlternativas: 'التدابير الاحتياطية البديلة',
      recursosApoyo: 'موارد الدعم المتخصصة',
      principiosGenerales: 'المبادئ العامة للحماية',
      preguntasFrecuentes: 'الأسئلة الشائعة حول حقوق الفئات الضعيفة',
      legislacion: 'التشريع والمراجع',
      conclusion: 'الخاتمة'
    }
  } : {
    hero: {
      backLink: 'Volver al hub de Derechos de Detenidos',
      title: 'Derechos de Grupos Vulnerables Detenidos',
      subtitle: 'Protección Especial para Grupos más Vulnerables durante la Detención',
      description: 'Guía completa de protección de derechos de grupos vulnerables durante la detención. Menores, extranjeros, personas con discapacidad y otros grupos en situación de riesgo.'
    },
    sections: {
      proteccionesEspeciales: 'Protecciones Especiales por Grupos',
      protocolosEspeciales: 'Protocolos Especiales de Actuación',
      medidasAlternativas: 'Medidas Cautelares Alternativas',
      recursosApoyo: 'Recursos de Apoyo Especializados',
      principiosGenerales: 'Principios Generales de Protección',
      preguntasFrecuentes: 'Preguntas Frecuentes sobre Derechos de Grupos Vulnerables',
      legislacion: 'Legislación y Referencias',
      conclusion: 'Conclusión'
    }
  };

  // Traducciones del contenido del artículo
  const contentTranslations = language === 'ar' ? {
    introduccion: {
      parrafo1: 'تحصل حقوق الفئات الضعيفة أثناء الاعتقال على حمايات خاصة دستورية ودولية. تنص الدستور الإسباني في المادة 14 على مبدأ المساواة، ولكنه يعترف بأن مجموعات معينة تحتاج إلى تدابير محددة لضمان فعالية حقوقهم الفعلية.',
      parrafo2: 'يحدد هذا الدليل الحمايات الخاصة للقاصرين، الأجانب، ذوي الاحتياجات الخاصة، ضحايا العنف الجنسي، كبار السن والمجموعات الضعيفة الأخرى، بناءً على قوانين محددة مثل القانون العضوي 5/2000 للمسؤولية الجنائية للقاصرين، القانون العضوي 4/2000 لحقوق الأجانب، وقضاء المحكمة الدستورية التي طورت هذه الحقوق بشكل موسع.'
    },
    proteccionesGrupos: {
      titulo: 'الحمايات الخاصة حسب المجموعات'
    }
  } : {
    introduccion: {
      parrafo1: 'Los <strong>derechos de grupos vulnerables durante la detención</strong> reciben protecciones especiales constitucionales e internacionales. La <strong>Constitución Española</strong> en su artículo 14 establece el principio de igualdad, pero reconoce que determinados colectivos necesitan medidas específicas para garantizar la efectividad real de sus derechos.',
      parrafo2: 'Esta guía detalla las protecciones especiales para menores, extranjeros, personas con discapacidad, víctimas de violencia de género, personas mayores y otros colectivos vulnerables, basándose en leyes específicas como la <strong>Ley Orgánica 5/2000</strong> de responsabilidad penal de menores, la <strong>Ley Orgánica 4/2000</strong> de derechos de extranjeros, y la jurisprudencia del <strong>Tribunal Constitucional</strong> que ha desarrollado estos derechos de manera expansiva.'
    },
    proteccionesGrupos: {
      titulo: 'Protecciones Especiales por Grupos'
    }
  };

  const breadcrumbItems = [
    { label: t.breadcrumb.blog, href: '/blog' },
    { label: language === 'ar' ? 'حقوق المعتقلين' : 'Derechos de Detenidos', href: '/blog/derechos-detenidos' },
    { label: blogTranslations.hero.title }
  ];

  const tocItems = [
    { id: 'protecciones-especiales-por-grupos', title: blogTranslations.sections.proteccionesEspeciales, level: 2 },
    { id: 'protocolos-especiales-de-actuacion', title: blogTranslations.sections.protocolosEspeciales, level: 2 },
    { id: 'medidas-cautelares-alternativas', title: blogTranslations.sections.medidasAlternativas, level: 2 },
    { id: 'recursos-de-apoyo-especializados', title: blogTranslations.sections.recursosApoyo, level: 2 },
    { id: 'principios-generales-de-proteccion', title: blogTranslations.sections.principiosGenerales, level: 2 },
    { id: 'preguntas-frecuentes-sobre-derechos-de-grupos-vulnerables', title: blogTranslations.sections.preguntasFrecuentes, level: 2 },
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
        <section className="bg-gradient-to-br from-purple-900 to-charleston text-offwhite py-12">
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
                  15 {t.blog.minLectura}
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
                  10 ene 2025
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

              {/* Protecciones por Grupos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="protecciones-especiales-por-grupos" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  {contentTranslations.proteccionesGrupos.titulo}
                </h2>

                <div className="space-y-8">
                  {proteccionesGrupos.map((grupo, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-black mb-1">
                            {grupo.grupo}
                          </h3>
                          <p className="text-black/80 text-sm italic">
                            Autoridad competente: {grupo.autoridadCompetente}
                          </p>
                        </div>
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                          {grupo.legislacionEspecifica}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-semibold text-black mb-3">Derechos especiales:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {grupo.derechosEspeciales.map((derecho, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-black/80 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                              {derecho}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Protocolos Especiales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="protocolos-especiales-de-actuacion" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Protocolos Especiales de Actuación
                </h2>

                <div className="space-y-6">
                  {protocolosEspeciales.map((protocolo, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-black mb-1">
                            {protocolo.situacion}
                          </h3>
                          <p className="text-black/80 text-sm">
                            Coordinación: {protocolo.coordinacion}
                          </p>
                        </div>
                        <span className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded">
                          Respuesta: {protocolo.tiempoRespuesta}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-semibold text-black mb-3">Medidas del protocolo:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {protocolo.protocolo.map((medida, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-black/80 text-sm">
                              <div className="bg-yellow-200 text-yellow-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                                {idx + 1}
                              </div>
                              {medida}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Medidas Alternativas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="medidas-cautelares-alternativas" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Medidas Cautelares Alternativas
                </h2>

                <div className="space-y-6">
                  {medidasAlternativas.map((grupo, index) => (
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
                            {grupo.grupo}
                          </h3>
                          <p className="text-black/80 text-sm italic" dangerouslySetInnerHTML={{ __html: grupo.justificacion }} />
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-black mb-3">Medidas alternativas posibles:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {grupo.medidas.map((medida, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-black/80 text-sm">
                              <Shield className="h-3 w-3 text-green-600 flex-shrink-0" />
                              {medida}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Recursos de Apoyo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="recursos-de-apoyo-especializados" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Recursos de Apoyo Especializados
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-charleston text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Recurso</th>
                        <th className="px-4 py-3 text-left font-semibold">Descripción</th>
                        <th className="px-4 py-3 text-left font-semibold">Contacto</th>
                        <th className="px-4 py-3 text-left font-semibold">Especialidades</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recursosApoyo.map((recurso, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-4 py-3 font-semibold text-black">
                            {recurso.recurso}
                          </td>
                          <td className="px-4 py-3 text-black/80 text-sm">
                            {recurso.descripcion}
                          </td>
                          <td className="px-4 py-3 text-black/80 text-sm">
                            {recurso.contacto}
                          </td>
                          <td className="px-4 py-3 text-black/80 text-sm">
                            {recurso.especialidades}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Principios Generales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="principios-generales-de-proteccion" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Principios Generales de Protección
                </h2>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-8">
                  <div className="flex items-start gap-3 mb-6">
                    <Heart className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Protección Integral</h3>
                      <p className="text-black/80">
                        Las protecciones para grupos vulnerables se basan en principios constitucionales
                        que garantizan la igualdad real y efectiva, reconociendo que la vulnerabilidad
                        requiere medidas específicas para lograr la igualdad.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-3">🔍 Principios Constitucionales</h4>
                      <ul className="text-sm text-black/80 space-y-2">
                        <li>• Igualdad real y efectiva (art. 14 CE)</li>
                        <li>• Protección especial de menores (art. 39 CE)</li>
                        <li>• Dignidad de la persona (art. 10.1 CE)</li>
                        <li>• Protección social (arts. 40-52 CE)</li>
                        <li>• Solidaridad social (art. 2 CE)</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-3">⚖️ Principios Procesales</h4>
                      <ul className="text-sm text-black/80 space-y-2">
                        <li>• Interés superior del menor</li>
                        <li>• No discriminación por origen</li>
                        <li>• Adaptación a capacidades</li>
                        <li>• Protección contra violencia</li>
                        <li>• Accesibilidad universal</li>
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
                <h2 id="preguntas-frecuentes-sobre-derechos-de-grupos-vulnerables" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preguntas Frecuentes sobre Derechos de Grupos Vulnerables
                </h2>

                <div className="space-y-6">
                  {vulnerablesFAQ.map((faq, index) => (
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
                      <strong>Ley Orgánica 5/2000</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2000-24037" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Responsabilidad penal de menores
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica 4/2000</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2000-544" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Derechos y libertades de extranjeros
                      </a>
                    </li>
                    <li>
                      <strong>Ley 39/2006</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2007-1986" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Promoción autonomía personal y atención dependencia
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica 1/2004</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2004-21760" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Medidas protección integral víctimas violencia género
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Derecho Internacional</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Convención Derechos del Niño (1989)</strong> -
                      <a href="https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-child" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Protección especial de menores
                      </a>
                    </li>
                    <li>
                      <strong>Convención Discapacidad (2006)</strong> -
                      <a href="https://www.un.org/development/desa/disabilities/convention-on-the-rights-of-persons-with-disabilities.html" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Derechos personas con discapacidad
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Relevante</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STC 236/2018</strong> - Protección especial de menores en procesos penales
                    </li>
                    <li>
                      <strong>STC 114/2017</strong> - Derechos de extranjeros en detención
                    </li>
                    <li>
                      <strong>STJUE Caso Ejea</strong> - Protección víctimas violencia género
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 id="conclusion" className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  Los derechos de grupos vulnerables durante la detención representan el compromiso
                  del Estado español con la igualdad real y efectiva. Las protecciones especiales
                  reconocidas constitucionalmente no son privilegios, sino medidas necesarias para
                  compensar situaciones de desigualdad y garantizar que todos los ciudadanos,
                  independientemente de su condición, reciben un tratamiento justo y respetuoso.
                </p>
                <p className="text-white/90 leading-relaxed">
                  La efectividad de estas protecciones depende de su conocimiento y ejercicio activo.
                  Los protocolos especializados, las medidas alternativas a la detención, y la
                  coordinación entre instituciones aseguran que la vulnerabilidad no se convierta
                  en indefensión. En STANS Abogados defendemos activamente estos derechos,
                  especialmente de los colectivos más vulnerables.
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
                  href={`https://wa.me/${WHATSAPP}?text=Hola, pertenezco a un grupo vulnerable y necesito protección especial durante mi detención`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Protección Grupos Vulnerables
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