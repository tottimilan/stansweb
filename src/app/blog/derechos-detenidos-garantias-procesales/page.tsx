'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, Scale } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Breadcrumb from '@/components/Breadcrumb';
import TableOfContents from '@/components/TableOfContents';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const derechosFAQ = [
  {
    question: "¿Cuáles son mis derechos constitucionales al ser detenido?",
    answer: "Según el artículo 17 de la Constitución Española, tienes derecho a la libertad personal, asistencia letrada inmediata, información de tus derechos, y a no declarar sin abogado presente. También tienes derecho a la tutela judicial efectiva según el artículo 24 CE."
  },
  {
    question: "¿Cuánto tiempo pueden retenerme sin cargos?",
    answer: "Según la Ley de Enjuiciamiento Criminal, puedes ser retenido hasta 72 horas en casos de delito grave, o hasta 24 horas en casos menos graves, antes de ser puesto a disposición judicial."
  },
  {
    question: "¿Tengo derecho a asistencia letrada gratuita?",
    answer: "Sí, según la Ley 1/1996 de Asistencia Jurídica Gratuita, si no puedes pagar un abogado particular, tienes derecho a un abogado de oficio gratuito. Este derecho es inmediato y no puede ser condicionado."
  },
  {
    question: "¿Pueden registrarme sin orden judicial?",
    answer: "En casos de flagrante delito, la policía puede realizar un registro preventivo sin orden judicial. Sin embargo, para registros domiciliarios siempre se requiere orden judicial según el artículo 18.2 de la Constitución."
  },
  {
    question: "¿Qué pasa si no entiendo el idioma?",
    answer: "Tienes derecho a traducción e interpretación gratuitas durante todo el procedimiento, según la Directiva 2010/64/UE y la Ley Orgánica 4/2015. Esto incluye todos los documentos y declaraciones."
  },
  {
    question: "¿Puedo negarme a declarar en comisaría?",
    answer: "Sí, tienes derecho a no declarar. Sin embargo, es altamente recomendable declarar con asistencia letrada presente. La declaración puede ser utilizada en tu favor o en tu contra."
  },
  {
    question: "¿Tienen que informarme de los motivos de mi detención?",
    answer: "Sí, según el artículo 520 de la LECrim, debes ser informado de los motivos de tu detención por escrito y de manera comprensible. Si no entiendes algo, tienes derecho a que te lo expliquen."
  },
  {
    question: "¿Puedo comunicar con mi familia desde comisaría?",
    answer: "Sí, tienes derecho a comunicar con un familiar o persona de confianza en un plazo razonable, según el artículo 520 de la LECrim. Esta comunicación debe realizarse en presencia de la policía."
  }
];

const derechosConstitucionales = [
  {
    article: "Artículo 17 CE",
    title: "Derecho a la Libertad Personal",
    description: "Nadie puede ser detenido sino con las garantías previstas en la ley",
    icon: Shield,
    details: "Prohíbe detenciones arbitrarias y establece las garantías procesales mínimas"
  },
  {
    article: "Artículo 18 CE",
    title: "Derecho a la Tutela Judicial",
    description: "Derecho a ser oído por un juez en un plazo razonable",
    icon: Scale,
    details: "Garantiza el control judicial de cualquier privación de libertad"
  },
  {
    article: "Artículo 24 CE",
    title: "Derecho a la Defensa",
    description: "Derecho a ser informado de la acusación y a un abogado",
    icon: User,
    details: "Incluye asistencia letrada, derecho a no autoinculparse y a recurrir"
  },
  {
    article: "Artículo 15 CE",
    title: "Derecho a la Integridad Física",
    description: "Protección contra tratos degradantes o inhumanos",
    icon: CheckCircle,
    details: "Prohíbe torturas, tratos inhumanos y garantiza atención médica"
  }
];

const fasesProcedimiento = [
  {
    fase: "Detención",
    tiempo: "Momento inicial",
    derechos: ["Asistencia letrada inmediata", "Información de derechos", "Comunicación familiar"],
    descripcion: "La detención debe ser proporcional y necesaria"
  },
  {
    fase: "Comisaría",
    tiempo: "Hasta 72 horas",
    derechos: ["Traducción gratuita", "Asistencia médica", "Condiciones dignas"],
    descripcion: "Período de investigación policial preliminar"
  },
  {
    fase: "Puesta a disposición",
    tiempo: "24-72 horas",
    derechos: ["Audiencia judicial", "Derecho a declarar", "Medidas cautelares"],
    descripcion: "Presentación ante el juez de guardia"
  },
  {
    fase: "Prisión preventiva",
    tiempo: "Hasta juicio",
    derechos: ["Recursos contra medidas", "Visitas familiares", "Derecho al trabajo"],
    descripcion: "Si se dicta prisión provisional"
  }
];

const relatedArticles = [
  {
    title: 'Habeas Corpus: Recurso de Amparo',
    slug: 'habeas-corpus-recurso-amparo',
    category: 'Recursos Procesales'
  },
  {
    title: 'Condiciones de Detención en España',
    slug: 'condiciones-detencion-espana',
    category: 'Derechos Penitenciarios'
  },
  {
    title: 'Derecho a la Asistencia Médica',
    slug: 'derecho-asistencia-medica-detencion',
    category: 'Derechos Sanitarios'
  }
];

export default function DerechosDetenidosPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // Traducciones específicas del blog
  const blogTranslations = language === 'ar' ? {
    hero: {
      backLink: 'العودة إلى المدونة',
      title: 'حقوق المعتقلين: تعرف على ضماناتك الإجرائية',
      subtitle: 'الدليل الشامل لحقوقك الدستورية كمعتقل في إسبانيا',
      description: 'الدليل الشامل لحقوقك الدستورية كمعتقل في إسبانيا: الضمانات الإجرائية، الإجراء القانوني والحماية القانونية.'
    },
    sections: {
      derechosConstitucionales: 'الحقوق الدستورية للمعتقل',
      fasesProcedimiento: 'مراحل الإجراء وحقوق المرتبطة بها',
      derechosEspecificos: 'الحقوق المحددة أثناء الاعتقال',
      preguntasFrecuentes: 'الأسئلة الشائعة حول حقوق المعتقلين',
      legislacionJurisprudencia: 'التشريع والقضاء',
      conclusion: 'الخاتمة'
    }
  } : {
    hero: {
      backLink: 'Volver al blog',
      title: 'Derechos de los Detenidos: Conoce tus Garantías Procesales',
      subtitle: 'Guía Completa de tus Derechos Constitucionales como Detenido en España',
      description: 'Guía completa de tus derechos constitucionales como detenido en España: garantías procesales, procedimiento legal y protección jurídica.'
    },
    sections: {
      derechosConstitucionales: 'Derechos Constitucionales del Detenido',
      fasesProcedimiento: 'Fases del Procedimiento y Derechos Asociados',
      derechosEspecificos: 'Derechos Específicos durante la Detención',
      preguntasFrecuentes: 'Preguntas Frecuentes sobre Derechos de Detenidos',
      legislacionJurisprudencia: 'Legislación y Jurisprudencia',
      conclusion: 'Conclusión'
    }
  };

  // Traducciones del contenido del artículo
  const contentTranslations = language === 'ar' ? {
    introduccion: {
      parrafo1: 'يُشكل الاعتقال حالة من الضعف الخاص التي تتطلب أقصى درجات احترام الحقوق الأساسية. تنص الدستور الإسباني والاتفاقية الأوروبية لحقوق الإنسان على مجموعة من الضمانات التي تحمي كل شخص محروم من حريته.',
      parrafo2: 'يحلل هذا الدليل الشامل حقوقك الدستورية كمعتقل، بناءً على قضاء المحكمة الدستورية والمحكمة الأوروبية لحقوق الإنسان والتشريع الإسباني المطبق.'
    },
    derechosConstitucionales: {
      titulo: 'الحقوق الدستورية للمعتقل',
      garantiasFundamentales: {
        titulo: 'الضمانات الأساسية',
        descripcion: 'الحمايات الدستورية غير القابلة للتنازل عنها أثناء الاعتقال'
      }
    }
  } : {
    introduccion: {
      parrafo1: 'Ser detenido supone una <strong>situación de especial vulnerabilidad</strong> que requiere el máximo respeto a los derechos fundamentales. La Constitución Española y el <strong>Convenio Europeo de Derechos Humanos</strong> establecen un conjunto de garantías que protegen a toda persona privada de libertad.',
      parrafo2: 'Esta guía exhaustiva analiza tus derechos constitucionales como detenido, basándose en la jurisprudencia del <strong>Tribunal Constitucional</strong>, <strong>Tribunal Europeo de Derechos Humanos</strong> y la legislación española aplicable.'
    },
    derechosConstitucionales: {
      titulo: 'Derechos Constitucionales del Detenido',
      garantiasFundamentales: {
        titulo: 'Garantías Fundamentales',
        descripcion: 'Protecciones constitucionales irrenunciables durante la detención'
      }
    }
  };

  const breadcrumbItems = [
    { label: t.breadcrumb.blog, href: '/blog' },
    { label: language === 'ar' ? 'حقوق المعتقلين' : 'Derechos de Detenidos', href: '/blog/derechos-detenidos' },
    { label: blogTranslations.hero.title }
  ];

  const tocItems = [
    { id: 'derechos-constitucionales-del-detenido', title: blogTranslations.sections.derechosConstitucionales, level: 2 },
    { id: 'fases-del-procedimiento-y-derechos-asociados', title: blogTranslations.sections.fasesProcedimiento, level: 2 },
    { id: 'derechos-especificos-durante-la-detencion', title: blogTranslations.sections.derechosEspecificos, level: 2 },
    { id: 'preguntas-frecuentes-sobre-derechos-de-detenidos', title: blogTranslations.sections.preguntasFrecuentes, level: 2 },
    { id: 'legislacion-y-jurisprudencia', title: blogTranslations.sections.legislacionJurisprudencia, level: 2 },
    { id: 'conclusion', title: blogTranslations.sections.conclusion, level: 2 }
  ];

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />
      <main className="bg-black pt-20">
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
                href="/blog"
                className="inline-flex items-center gap-2 text-gold hover:text-white transition mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                {blogTranslations.hero.backLink}
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">
                  {language === 'ar' ? 'الحقوق الأساسية' : 'Derechos Fundamentales'}
                </span>
                <div className="flex items-center gap-1 text-sm text-white/70">
                  <Clock className="h-4 w-4" />
                  12 {t.blog.minLectura}
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
                  Mounir Elyemlahy Chouati
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  08 dic 2024
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

              {/* Derechos Constitucionales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="derechos-constitucionales-del-detenido" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  {contentTranslations.derechosConstitucionales.titulo}
                </h2>

                <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-black">{contentTranslations.derechosConstitucionales.garantiasFundamentales.titulo}</h3>
                      <p className="text-black/80 mt-1" dangerouslySetInnerHTML={{ __html: contentTranslations.derechosConstitucionales.garantiasFundamentales.descripcion }} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {derechosConstitucionales.map((derecho, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white border border-green-200 rounded-lg p-6"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <derecho.icon className="h-6 w-6 text-green-600" />
                          <h4 className="font-semibold text-black">{derecho.article}</h4>
                        </div>
                        <h5 className="text-lg font-medium text-black mb-2">
                          {derecho.title}
                        </h5>
                        <p className="text-black/80 text-sm mb-3" dangerouslySetInnerHTML={{ __html: derecho.description }} />
                        <p className="text-black/70 text-xs italic" dangerouslySetInnerHTML={{ __html: derecho.details }} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                  <div className="flex items-start gap-3">
                    <FileText className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Derecho Europeo de Protección</h3>
                      <p className="text-black/80">
                        Además de los derechos constitucionales, el <strong>Convenio Europeo de Derechos Humanos</strong>
                        establece protecciones adicionales contra tratos inhumanos (artículo 3) y garantiza el derecho
                        a un proceso equitativo (artículo 6), que son directamente aplicables en España.
                      </p>
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
                <h2 id="fases-del-procedimiento-y-derechos-asociados" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Fases del Procedimiento y Derechos Asociados
                </h2>

                <div className="space-y-6">
                  {fasesProcedimiento.map((fase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-charleston text-white rounded-2xl p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gold">
                          {fase.fase}
                        </h3>
                        <span className="text-sm bg-gold/20 text-gold px-3 py-1 rounded-full">
                          {fase.tiempo}
                        </span>
                      </div>

                      <p className="text-white/80 mb-4" dangerouslySetInnerHTML={{ __html: fase.descripcion }} />

                      <div>
                        <h4 className="font-semibold text-gold mb-2">Derechos en esta fase:</h4>
                        <ul className="space-y-1">
                          {fase.derechos.map((derecho, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                              {derecho}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Derechos Específicos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="derechos-especificos-durante-la-detencion" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Derechos Específicos durante la Detención
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-600" />
                        Derechos Procesales
                      </h3>
                      <ul className="space-y-2 text-black/80">
                        <li>• <strong>Derecho a no autoinculparse</strong></li>
                        <li>• <strong>Derecho a recurrir</strong> decisiones judiciales</li>
                        <li>• <strong>Derecho a la presunción de inocencia</strong></li>
                        <li>• <strong>Derecho a un proceso público</strong></li>
                      </ul>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-red-600" />
                        Derechos Humanos
                      </h3>
                      <ul className="space-y-2 text-black/80">
                        <li>• <strong>Derecho a la dignidad</strong></li>
                        <li>• <strong>Protección contra torturas</strong></li>
                        <li>• <strong>Atención médica adecuada</strong></li>
                        <li>• <strong>Condiciones dignas de detención</strong></li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                        <User className="h-5 w-5 text-purple-600" />
                        Derechos Personales
                      </h3>
                      <ul className="space-y-2 text-black/80">
                        <li>• <strong>Derecho a la intimidad</strong></li>
                        <li>• <strong>Derecho a la imagen</strong></li>
                        <li>• <strong>Protección de datos personales</strong></li>
                        <li>• <strong>Derecho a la correspondencia</strong></li>
                      </ul>
                    </div>

                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                        <Scale className="h-5 w-5 text-indigo-600" />
                        Derechos Jurídicos
                      </h3>
                      <ul className="space-y-2 text-black/80">
                        <li>• <strong>Asistencia letrada especializada</strong></li>
                        <li>• <strong>Acceso a expediente completo</strong></li>
                        <li>• <strong>Derecho a la prueba</strong></li>
                        <li>• <strong>Representación procesal</strong></li>
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
                <h2 id="preguntas-frecuentes-sobre-derechos-de-detenidos" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preguntas Frecuentes sobre Derechos de Detenidos
                </h2>

                <div className="space-y-6">
                  {derechosFAQ.map((faq, index) => (
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
                <h2 id="legislacion-y-jurisprudencia" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Legislación y Jurisprudencia
                </h2>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">Normativa Constitucional y Orgánica</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Constitución Española (1978)</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículos 15, 17, 18 y 24
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica 6/1985</strong> del Poder Judicial -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1985-12666" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Regulación de la detención
                      </a>
                    </li>
                    <li>
                      <strong>Ley 1/1996 de Asistencia Jurídica Gratuita</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1996-1590" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Derecho a abogado de oficio
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Derecho Internacional</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Convenio Europeo de Derechos Humanos</strong> -
                      <a href="https://www.echr.coe.int/Documents/Convention_SPA.pdf" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículos 3, 5, 6 y 8
                      </a>
                    </li>
                    <li>
                      <strong>Pacto Internacional de Derechos Civiles y Políticos</strong> -
                      <a href="https://www.ohchr.org/sp/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Ratificado por España
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Relevante</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STC 114/2017</strong> - Sobre comunicaciones en detención
                    </li>
                    <li>
                      <strong>STC 47/2018</strong> - Derechos durante la detención policial
                    </li>
                    <li>
                      <strong>Sentencia TEDH de 17 enero 2017</strong> - Caso Mammadov vs. Azerbaiyán
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 id="conclusion" className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  Conocer tus derechos como detenido es el primer paso para una defensa efectiva.
                  La Constitución Española y el derecho internacional establecen garantías robustas
                  que protegen a toda persona privada de libertad, desde el momento exacto de la detención.
                </p>
                <p className="text-white/90 leading-relaxed">
                  En STANS Abogados defendemos estos derechos diariamente, asegurando que sean
                  respetados en todo momento del procedimiento. Tu dignidad y tus garantías
                  constitucionales son nuestra prioridad absoluta.
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
                  href={`https://wa.me/${WHATSAPP}?text=Hola, creo que han violado mis derechos durante la detención`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Denuncia Violación
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
                Más información sobre derechos y garantías procesales
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
