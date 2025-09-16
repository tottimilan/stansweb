'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Globe, Scale } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Breadcrumb from '@/components/Breadcrumb';
import TableOfContents from '@/components/TableOfContents';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { notFound } from 'next/navigation';

const WHATSAPP = '34611687226';

const extraditionFAQ = [
  {
    question: "¿Qué es la extradición y cuándo se aplica?",
    answer: "La extradición es el procedimiento por el cual un Estado entrega a una persona acusada o condenada a otro Estado para que sea juzgada o cumpla condena. Se aplica cuando existe una solicitud formal de un país extranjero y se cumplen los requisitos legales establecidos en tratados internacionales."
  },
  {
    question: "¿Cuánto tiempo dura un procedimiento de extradición?",
    answer: "La duración varía según el país requirente y el tipo de extradición. Las extradiciones UE suelen tardar 30-60 días, mientras que las internacionales pueden prolongarse hasta 6-12 meses o más, dependiendo de la complejidad del caso."
  },
  {
    question: "¿Puedo impugnar una solicitud de extradición?",
    answer: "Sí, existen múltiples motivos para impugnar: defectos formales en la solicitud, prescripción del delito, riesgo de trato degradante, persecución por motivos políticos o religiosos, o vulneración del principio de ne bis in idem."
  },
  {
    question: "¿Qué derechos tiene el extraditado durante el procedimiento?",
    answer: "Tienes derecho a asistencia letrada, traducción e interpretación, información detallada sobre los cargos, impugnación de la solicitud, y en casos UE, derecho a no ser juzgado dos veces por el mismo hecho."
  },
  {
    question: "¿Qué pasa si soy ciudadano español?",
    answer: "Los ciudadanos españoles no pueden ser extraditados por delitos políticos. Para delitos comunes, la extradición solo es posible si existe tratado bilateral y se cumplen todos los requisitos legales y constitucionales."
  },
  {
    question: "¿Pueden extraditarme por delitos fiscales?",
    answer: "Sí, los delitos fiscales pueden ser motivo de extradición si se cumplen los requisitos de doble incriminación y demás condiciones. España tiene acuerdos específicos con muchos países para estos casos."
  },
  {
    question: "¿Qué es la extradición simplificada?",
    answer: "Es el procedimiento aplicable entre países de la UE, más ágil y con menos formalidades que la extradición internacional tradicional. Regulado por la Decisión Marco 2002/584/JAI del Consejo de la UE."
  },
  {
    question: "¿Puedo solicitar asilo político durante un procedimiento de extradición?",
    answer: "Sí, puedes solicitar protección internacional. Si se concede asilo, el procedimiento de extradición se suspende automáticamente según la Directiva 2011/95/UE y la Ley 12/2009 española."
  }
];

const extraditionSteps = [
  {
    step: 1,
    title: "Solicitud Inicial",
    description: "El país requirente presenta solicitud formal ante el Ministerio de Justicia español",
    duration: "Variable",
    icon: FileText
  },
  {
    step: 2,
    title: "Admisión a Trámite",
    description: "El Ministerio de Justicia examina la solicitud y decide si se tramita",
    duration: "15-30 días",
    icon: CheckCircle
  },
  {
    step: 3,
    title: "Remisión al Juzgado",
    description: "La solicitud se envía al Juzgado Central de Instrucción nº 5 de la Audiencia Nacional",
    duration: "7-15 días",
    icon: Scale
  },
  {
    step: 4,
    title: "Audiencia del Extraditado",
    description: "Se celebra vista judicial donde el extraditado puede impugnar la solicitud",
    duration: "30-60 días",
    icon: User
  },
  {
    step: 5,
    title: "Resolución Judicial",
    description: "El juez decide sobre la extradición y posibles medidas cautelares",
    duration: "15-45 días",
    icon: FileText
  },
  {
    step: 6,
    title: "Recursos y Ejecución",
    description: "Posibles recursos y, si procede, entrega al país requirente",
    duration: "30-90 días",
    icon: Globe
  }
];

const keyTreaties = [
  {
    name: "Convenio Europeo de Extradición (1957)",
    scope: "Europa",
    features: ["Base de extradición UE", "Principios fundamentales", "Cooperación judicial"]
  },
  {
    name: "Decisión Marco 2002/584/JAI",
    scope: "Unión Europea",
    features: ["Extradición simplificada", "Principio de reconocimiento mutuo", "Plazos reducidos"]
  },
  {
    name: "Tratado de Extradición España-Marruecos (1997)",
    scope: "Bilateral",
    features: ["Cooperación antiterrorista", "Exclusiones específicas", "Procedimiento bilateral"]
  },
  {
    name: "Tratado España-Estados Unidos (1970)",
    scope: "Bilateral",
    features: ["Cooperación amplia", "Extradición por terrorismo", "Protección de derechos"]
  }
];

const relatedArticles = [
  {
    title: 'Derechos Constitucionales en Procedimientos Internacionales',
    slug: 'derechos-constitucionales-procedimientos-internacionales',
    category: 'Derecho Internacional'
  },
  {
    title: 'Prisión Preventiva en Casos de Extradición',
    slug: 'prision-preventiva-extradicion',
    category: 'Medidas Cautelares'
  },
  {
    title: 'Defensas contra la Extradición',
    slug: 'defensas-contra-extradicion',
    category: 'Estrategias Legales'
  }
];

export default function ExtradicionEspanaPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // Traducciones específicas del blog
  const blogTranslations = language === 'ar' ? {
    introduccion: {
      titulo: 'إجراءات التسليم في إسبانيا',
      parrafo1: 'التسليم إجراء معقد يتطلب معرفة مفصلة بالمعاهدات الدولية والتشريعات الوطنية. يحلل هذا المقال بعمق كيفية عمل نظام التسليم الإسباني.',
      parrafo2: 'معرفة إجراءات التسليم أمر أساسي لممارسة حقوقك بشكل فعال وإعداد دفاع مناسب أمام طلب تسليم.',
      infoImportante: {
        titulo: 'معلومات حاسمة',
        descripcion: 'يمكن أن تكون إجراءات التسليم لها عواقب لا رجعة فيها. تصرف خاطئ يمكن أن يسهل التسليم عندما يجب رفضه.'
      },
      articulo: {
        parrafo1: 'التسليم هو <strong>إجراء معقد</strong> يتضمن التعاون الدولي بين الدول لملاحقة الجرائم. إسبانيا، كدولة عضو في الاتحاد الأوروبي وموقعة على العديد من المعاهدات الدولية، لديها إطار قانوني متطور لإدارة هذه الإجراءات.',
        parrafo2: 'يحلل هذا الدليل الشامل عملية التسليم من منظور إسباني، بناءً على <strong>القانون 4/2019</strong> المؤرخ 18 ديسمبر، <strong>القانون العضوي 3/2003</strong> وقضاء <strong>المحكمة العليا</strong> و<strong>المحكمة الدستورية</strong>.'
      }
    },
    tiposExtradicion: {
      titulo: 'أنواع التسليم في إسبانيا',
      ue: {
        titulo: 'تسليم الاتحاد الأوروبي',
        descripcion: 'إجراء مبسط بين الدول الأعضاء في فضاء شنغن. منظم بـ<strong>قرار الإطار 2002/584/JAI</strong>.',
        caracteristicas: [
          'مهل أقصر (30-60 يوماً)',
          'إجراءات إدارية أقل',
          'مبدأ الاعتراف المتبادل',
          'تعاون قضائي مباشر'
        ]
      },
      internacional: {
        titulo: 'التسليم الدولي',
        descripcion: 'إجراء تقليدي مع دول غير أوروبية. يتطلب معاهدة ثنائية محددة.',
        caracteristicas: [
          'مهل أطول (3-12 شهراً)',
          'متطلبات أكثر صرامة',
          'فحص أكثر تفصيلاً',
          'إمكانية استئنافات إضافية'
        ]
      },
      excepciones: {
        titulo: 'استثناءات مهمة',
        descripcion: 'لا يمكن تسليم المواطنين الإسبان <strong>بجرائم سياسية</strong> (المادة 13.3 من الدستور). كما لا يتم التسليم بجرائم عسكرية في وقت السلم أو بسبب الآراء السياسية، وفقاً لـ<strong>اتفاقية حقوق الإنسان الأوروبية</strong>.'
      }
    },
    fasesProcedimiento: {
      titulo: 'مراحل إجراء التسليم',
      descripcion: 'يتبع إجراء التسليم مراحل محددة بوضوح من التشريع الإسباني.'
    }
  } : {
    introduccion: {
      titulo: 'Procedimientos de Extradición en España',
      parrafo1: 'La extradición es un procedimiento complejo que requiere un conocimiento detallado de los tratados internacionales y la legislación nacional. Este artículo analiza en profundidad cómo funciona el sistema de extradición español.',
      parrafo2: 'Conocer los procedimientos de extradición es fundamental para poder ejercer efectivamente tus derechos y preparar una defensa adecuada ante una solicitud de extradición.',
      infoImportante: {
        titulo: 'Información Crítica',
        descripcion: 'Los procedimientos de extradición pueden tener consecuencias irreversibles. Una actuación incorrecta puede facilitar la extradición cuando debería ser denegada.'
      },
      articulo: {
        parrafo1: 'La extradición es un <strong>procedimiento complejo</strong> que involucra la cooperación internacional entre Estados para la persecución del delito. España, como país miembro de la Unión Europea y firmante de numerosos tratados internacionales, tiene un marco legal sofisticado para gestionar estos procedimientos.',
        parrafo2: 'Esta guía completa analiza el proceso de extradición desde la perspectiva española, basándose en la <strong>Ley 4/2019</strong> de 18 diciembre, la <strong>Ley Orgánica 3/2003</strong> y la jurisprudencia del <strong>Tribunal Supremo</strong> y <strong>Tribunal Constitucional</strong>.'
      }
    },
    tiposExtradicion: {
      titulo: 'Tipos de Extradición en España',
      ue: {
        titulo: 'Extradición UE',
        descripcion: 'Procedimiento simplificado entre países miembros del espacio Schengen. Regulado por la <strong>Decisión Marco 2002/584/JAI</strong>.',
        caracteristicas: [
          'Plazos más cortos (30-60 días)',
          'Menos formalidades burocráticas',
          'Principio de reconocimiento mutuo',
          'Cooperación judicial directa'
        ]
      },
      internacional: {
        titulo: 'Extradición Internacional',
        descripcion: 'Procedimiento tradicional con países no comunitarios. Requiere tratado bilateral específico.',
        caracteristicas: [
          'Plazos más largos (3-12 meses)',
          'Requisitos más estrictos',
          'Examen más detallado',
          'Posibles recursos adicionales'
        ]
      },
      excepciones: {
        titulo: 'Excepciones Importantes',
        descripcion: 'Los ciudadanos españoles <strong>no pueden ser extraditados</strong> por delitos políticos (artículo 13.3 CE). Tampoco se extradita por delitos militares en tiempo de paz o por opiniones políticas, según el <strong>Convenio Europeo de Derechos Humanos</strong>.'
      }
    },
    fasesProcedimiento: {
      titulo: 'Fases del Procedimiento de Extradición',
      descripcion: 'El proceso de extradición sigue unas fases claramente definidas por la legislación española.'
    }
  };
  
  const breadcrumbItems = [
    { label: t.breadcrumb.blog, href: '/blog' },
    { label: 'Procedimientos de Extradición', href: '/blog/procedimientos-extradicion' },
    { label: blogTranslations.introduccion.titulo }
  ];

  const tocItems = [
    { id: 'tipos-de-extradicion-en-espana', title: language === 'ar' ? 'أنواع التسليم في إسبانيا' : 'Tipos de Extradición en España', level: 2 },
    { id: 'fases-del-procedimiento-de-extradicion', title: language === 'ar' ? 'مراحل إجراء التسليم' : 'Fases del Procedimiento de Extradición', level: 2 },
    { id: 'derechos-del-extraditado', title: 'Derechos del Extraditado', level: 2 },
    { id: 'tratados-internacionales-de-espana', title: 'Tratados Internacionales de España', level: 2 },
    { id: 'preguntas-frecuentes-sobre-extradicion', title: 'Preguntas Frecuentes sobre Extradición', level: 2 },
    { id: 'legislacion-y-referencias', title: 'Legislación y Referencias', level: 2 },
    { id: 'conclusion', title: 'Conclusión', level: 2 }
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
                href="/blog"
                className="inline-flex items-center gap-2 text-gold hover:text-white transition mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                {language === 'ar' ? 'العودة إلى المدونة' : 'Volver al blog'}
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">
                  Extradiciones
                </span>
                <div className="flex items-center gap-1 text-sm text-white/70">
                  <Clock className="h-4 w-4" />
                  15 {t.blog.minLectura}
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gold mb-6 leading-tight">
                {blogTranslations.introduccion.titulo}: {language === 'ar' ? 'دليل شامل' : 'Guía Completa'}
              </h1>


              <p className="text-lg text-white/80 mb-6" dangerouslySetInnerHTML={{ __html: blogTranslations.introduccion.parrafo1 }} />

              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Rubén Vaquero Arribas
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  10 dic 2024
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
                <p dangerouslySetInnerHTML={{ __html: blogTranslations.introduccion.articulo.parrafo1 }} />
                <p dangerouslySetInnerHTML={{ __html: blogTranslations.introduccion.articulo.parrafo2 }} />
              </div>

              {/* Tipos de Extradición */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="tipos-de-extradicion-en-espana" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  {blogTranslations.tiposExtradicion.titulo}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="h-8 w-8 text-blue-600" />
                      <h3 className="text-lg font-semibold text-black">{blogTranslations.tiposExtradicion.ue.titulo}</h3>
                    </div>
                    <p className="text-black/80 mb-4" dangerouslySetInnerHTML={{ __html: blogTranslations.tiposExtradicion.ue.descripcion }} />
                    <ul className="space-y-2 text-sm text-black/70">
                      <li>• {blogTranslations.tiposExtradicion.ue.caracteristicas[0]}</li>
                      <li>• {blogTranslations.tiposExtradicion.ue.caracteristicas[1]}</li>
                      <li>• {blogTranslations.tiposExtradicion.ue.caracteristicas[2]}</li>
                      <li>• {blogTranslations.tiposExtradicion.ue.caracteristicas[3]}</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Scale className="h-8 w-8 text-green-600" />
                      <h3 className="text-lg font-semibold text-black">{blogTranslations.tiposExtradicion.internacional.titulo}</h3>
                    </div>
                    <p className="text-black/80 mb-4" dangerouslySetInnerHTML={{ __html: blogTranslations.tiposExtradicion.internacional.descripcion }} />
                    <ul className="space-y-2 text-sm text-black/70">
                      <li>• {blogTranslations.tiposExtradicion.internacional.caracteristicas[0]}</li>
                      <li>• {blogTranslations.tiposExtradicion.internacional.caracteristicas[1]}</li>
                      <li>• {blogTranslations.tiposExtradicion.internacional.caracteristicas[2]}</li>
                      <li>• {blogTranslations.tiposExtradicion.internacional.caracteristicas[3]}</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">{blogTranslations.tiposExtradicion.excepciones.titulo}</h3>
                      <p className="text-black/80" dangerouslySetInnerHTML={{ __html: blogTranslations.tiposExtradicion.excepciones.descripcion }} />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Fases del Procedimiento */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="fases-del-procedimiento-de-extradicion" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  {blogTranslations.fasesProcedimiento.titulo}
                </h2>

                <div className="space-y-8">
                  {extraditionSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                      <div className="flex-1">
                        <div className="bg-charleston text-white p-6 rounded-2xl">
                          <div className="flex items-center gap-3 mb-3">
                            <step.icon className="h-6 w-6 text-gold" />
                            <span className="text-gold font-semibold">Fase {step.step}</span>
                          </div>
                          <h3 className="text-lg font-semibold mb-2">
                            {step.title}
                          </h3>
                          <p className="text-white/80 text-sm mb-3" dangerouslySetInnerHTML={{ __html: step.description }} />
                          <div className="text-gold text-sm font-medium">
                            ⏱️ Duración aproximada: {step.duration}
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block w-px h-16 bg-gold/30"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Derechos del Extraditado */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="derechos-del-extraditado" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Derechos del Extraditado
                </h2>

                <div className="bg-green-50 border border-green-200 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-black mb-6 flex items-center gap-3">
                    <CheckCircle className="h-7 w-7 text-green-600" />
                    Garantías Constitucionales y Europeas
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-3">Derechos Básicos</h4>
                      <ul className="space-y-2 text-black/80">
                        <li>• Asistencia letrada especializada</li>
                        <li>• Traducción e interpretación gratuitas</li>
                        <li>• Información detallada de los cargos</li>
                        <li>• Derecho a impugnar la solicitud</li>
                        <li>• Protección contra tratos degradantes</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-black mb-3">Derechos Europeos</h4>
                      <ul className="space-y-2 text-black/80">
                        <li>• No doble enjuiciamiento (ne bis in idem)</li>
                        <li>• Plazo razonable de procedimiento</li>
                        <li>• Protección de derechos fundamentales</li>
                        <li>• Derecho a recurso efectivo</li>
                        <li>• Protección familiar y social</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Tratados Internacionales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="tratados-internacionales-de-espana" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Tratados Internacionales de España
                </h2>

                <div className="space-y-6">
                  {keyTreaties.map((treaty, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 border border-gray-200 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-black mb-1">
                            {treaty.name}
                          </h3>
                          <span className="text-sm bg-gold/10 text-gold px-2 py-1 rounded-full">
                            {treaty.scope}
                          </span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {treaty.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-black/80">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
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
                <h2 id="preguntas-frecuentes-sobre-extradicion" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preguntas Frecuentes sobre Extradición
                </h2>

                <div className="space-y-6">
                  {extraditionFAQ.map((faq, index) => (
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
                  <h3 className="text-lg font-semibold text-black mb-4">Marco Legal Español</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Ley 4/2019, de 18 diciembre</strong> - Reforma del procedimiento de extradición
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2019-17748" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Ver ley completa
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica 3/2003</strong> - Cooperación jurídica internacional en materia penal
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2003-6997" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Ver ley completa
                      </a>
                    </li>
                    <li>
                      <strong>Constitución Española (1978)</strong> - Artículos 13 y 25 sobre extradición
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Ver constitución
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Derecho Internacional</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Convenio Europeo de Derechos Humanos</strong> - Protección de derechos fundamentales
                      <a href="https://www.echr.coe.int/Documents/Convention_SPA.pdf" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Ver convenio
                      </a>
                    </li>
                    <li>
                      <strong>Decisión Marco 2002/584/JAI</strong> - Extradición simplificada en la UE
                      <a href="https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32002F0584" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Ver decisión marco
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 id="conclusion" className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  Los procedimientos de extradición requieren una defensa especializada en derecho internacional.
                  Cada caso tiene sus particularidades y es fundamental contar con abogados expertos que conozcan
                  los matices de cada jurisdicción y los mecanismos de cooperación internacional.
                </p>
                <p className="text-white/90 leading-relaxed">
                  En STANS Abogados tenemos amplia experiencia en procedimientos de extradición internacional,
                  tanto en extradiciones UE como tradicionales, garantizando que tus derechos sean protegidos
                  en todo momento del procedimiento.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-12 pt-8 border-t border-gold/20">
                <button 
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'Procedimientos de Extradición en España',
                        text: 'Guía completa sobre procedimientos de extradición en España.',
                        url: window.location.href,
                      }).catch((err) => console.error('Error sharing:', err));
                    } else {
                      navigator.clipboard.writeText(window.location.href).then(() => {
                        alert('URL copiada al portapapeles');
                      }).catch(() => {
                        const textArea = document.createElement('textarea');
                        textArea.value = window.location.href;
                        document.body.appendChild(textArea);
                        textArea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textArea);
                        alert('URL copiada al portapapeles');
                      });
                    }
                  }}
                  className="flex items-center gap-2 text-black/70 hover:text-gold transition bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
                >
                  <Share2 className="h-4 w-4" />
                  {t.blog.compartirArticulo}
                </button>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hola, tengo una solicitud de extradición y necesito asesoramiento especializado`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:opacity-90 transition text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">
                    <span className="hidden sm:inline">Consulta Especializada</span>
                    <span className="sm:hidden">Consulta</span>
                  </span>
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
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gold mb-4">
                {t.blog.articulosRelacionados}
              </h2>
              <p className="text-white/80">
                Más información sobre derecho internacional y extradiciones
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