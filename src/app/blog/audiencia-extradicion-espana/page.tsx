'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, Scale, Gavel, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Breadcrumb from '@/components/Breadcrumb';
import TableOfContents from '@/components/TableOfContents';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const audienciaFAQ = [
  {
    question: "¿Es obligatoria la presencia en la audiencia de extradición?",
    answer: "Sí, la presencia física es obligatoria salvo excepciones muy limitadas. Si no comparece, se decreta prisión provisional eludible con fianza y se suspende el procedimiento hasta su comparecencia."
  },
  {
    question: "¿Cuánto dura una audiencia de extradición?",
    answer: "La duración varía según la complejidad: casos sencillos 30-60 minutos, casos complejos 2-3 horas. En extradiciones UE suele ser más rápida que en internacionales."
  },
  {
    question: "¿Puedo declarar en la audiencia?",
    answer: "Sí, tiene derecho a declarar o acogerse a su derecho al silencio. Si declara, sus manifestaciones pueden ser utilizadas en el proceso, pero también pueden favorecer su defensa."
  },
  {
    question: "¿Qué pasa si no tengo abogado en la audiencia?",
    answer: "Si no designa abogado particular, se le asignará uno de oficio gratuitamente. Sin embargo, es recomendable contar con abogado de confianza para una mejor defensa."
  },
  {
    question: "¿Puede la audiencia celebrarse a puerta cerrada?",
    answer: "Normalmente es pública, pero puede celebrarse a puerta cerrada por razones de seguridad, protección de víctimas, o cuando el extraditado lo solicita expresamente."
  },
  {
    question: "¿Pueden asistir familiares a la audiencia?",
    answer: "Sí, los familiares pueden asistir como público. Sin embargo, no pueden intervenir en el procedimiento ni tener contacto directo con el extraditado durante la audiencia."
  },
  {
    question: "¿Qué ocurre si el juez no habla mi idioma?",
    answer: "Se proporciona traducción oficial gratuita. Tiene derecho a intérprete durante toda la audiencia y a que se traduzcan todos los documentos."
  },
  {
    question: "¿Puedo impugnar la decisión inmediatamente?",
    answer: "Sí, contra la resolución judicial cabe recurso de reforma (5 días) ante el mismo juez, y recurso de apelación (5-10 días) ante la Audiencia Provincial."
  }
];

const fasesAudiencia = [
  {
    fase: 1,
    titulo: "Constitución del Tribunal",
    descripcion: "Comienza la sesión con la identificación de todas las partes",
    tiempo: "5-10 minutos",
    importancia: "Alta"
  },
  {
    fase: 2,
    titulo: "Lectura de Derechos",
    descripcion: "El juez informa de derechos constitucionales y procesales",
    tiempo: "10-15 minutos",
    importancia: "Fundamental"
  },
  {
    fase: 3,
    titulo: "Declaración del Extraditado",
    descripcion: "Oportunidad de declarar, formular preguntas o acogerse al silencio",
    tiempo: "15-30 minutos",
    importancia: "Crucial"
  },
  {
    fase: 4,
    titulo: "Alegaciones de las Partes",
    descripcion: "Fiscal y abogado formulan conclusiones sobre la extradición",
    tiempo: "20-40 minutos",
    importancia: "Fundamental"
  },
  {
    fase: 5,
    titulo: "Resolución Judicial",
    descripcion: "El juez dicta resolución oral o se reserva para escrito",
    tiempo: "5-15 minutos",
    importancia: "Crucial"
  }
];

const derechosAudiencia = [
  {
    derecho: "Derecho a la Defensa",
    descripcion: "Asistencia letrada obligatoria durante toda la audiencia",
    evidencia: "Artículo 24 CE, 118 LECrim",
    ejercicio: "Designar abogado o aceptar de oficio"
  },
  {
    derecho: "Derecho al Silencio",
    descripcion: "No declarar si no lo desea, sin que perjudique su defensa",
    evidencia: "Artículo 24.2 CE",
    ejercicio: "Manifestar expresamente o guardar silencio"
  },
  {
    derecho: "Derecho a Traducción",
    descripcion: "Traducción gratuita de todo el procedimiento",
    evidencia: "Ley 39/2015",
    ejercicio: "Solicitar intérprete al inicio"
  },
  {
    derecho: "Derecho a Pruebas",
    descripcion: "Solicitar pruebas relevantes para su defensa",
    evidencia: "Artículo 729 LECrim",
    ejercicio: "Formular petición durante alegaciones"
  },
  {
    derecho: "Derecho de Última Palabra",
    descripcion: "Intervención final antes de la resolución",
    evidencia: "Artículo 733 LECrim",
    ejercicio: "Solicitar turno de palabra"
  },
  {
    derecho: "Derecho a Recursos",
    descripcion: "Impugnar la resolución judicial",
    evidencia: "Ley 29/1998",
    ejercicio: "Presentar recurso en plazo legal"
  }
];

const estrategiaDefensa = [
  {
    aspecto: "Preparación Previa",
    acciones: ["Revisar toda la documentación", "Preparar alegaciones por escrito", "Coordinar con abogado", "Preparar testigos si procede"],
    objetivo: "Conocer el caso exhaustivamente"
  },
  {
    aspecto: "Durante la Audiencia",
    acciones: ["Escuchar atentamente", "Tomar notas de intervenciones", "Coordinar con abogado", "Ejercer derechos oportunamente"],
    objetivo: "Intervenir efectivamente"
  },
  {
    aspecto: "Alegaciones",
    acciones: ["Impugnar defectos formales", "Demostrar falta de requisitos", "Acreditar causas de denegación", "Proponer medidas alternativas"],
    objetivo: "Convencer al juez"
  },
  {
    aspecto: "Post-Audiencia",
    acciones: ["Preparar recursos", "Documentar incidencias", "Coordinar con abogado", "Preparar siguiente fase"],
    objetivo: "Continuar la defensa"
  }
];

const tiposResolucion = [
  {
    tipo: "Concesión Simple",
    descripcion: "Extradición concedida sin condiciones especiales",
    efectos: "Entrega inmediata al país solicitante",
    recursos: "Recursos ordinarios disponibles"
  },
  {
    tipo: "Concesión Condicionada",
    descripcion: "Extradición concedida con garantías específicas",
    efectos: "Entrega sujeta al cumplimiento de condiciones",
    recursos: "Recursos contra condiciones impuestas"
  },
  {
    tipo: "Denegación Parcial",
    descripcion: "Concedida solo para algunos delitos",
    efectos: "Entrega limitada a delitos concedidos",
    recursos: "Recursos contra delimitación"
  },
  {
    tipo: "Denegación Total",
    descripcion: "Extradición denegada completamente",
    efectos: "Permanencia en España, archivo del caso",
    recursos: "Recursos de apelación disponibles"
  }
];

const relatedArticles = [
  {
    title: 'Tipos de Extradición en España',
    slug: 'tipos-extradicion-espana',
    category: 'Procedimiento Penal'
  },
  {
    title: 'Requisitos para la Extradición en España',
    slug: 'requisitos-extradicion-espana',
    category: 'Procedimiento Penal'
  },
  {
    title: 'Recursos contra Extradición',
    slug: 'recursos-contra-extradicion',
    category: 'Recursos Procesales'
  }
];

export default function AudienciaExtradicionPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // Traducciones específicas del blog
  const blogTranslations = language === 'ar' ? {
    hero: {
      backLink: 'العودة إلى مركز إجراءات التسليم',
      title: 'جلسة التسليم في إسبانيا',
      subtitle: 'تطور الجلسة القضائية وحقوق المسلم وحقوق المسلم',
      description: 'تطور المقارنة القضائية، حقوق المسلم، استراتيجيات الدفاع وأنواع القرارات القضائية.'
    },
    sections: {
      fasesAudiencia: 'مراحل جلسة التسليم',
      derechosExtraditado: 'حقوق المسلم في الجلسة',
      estrategiaDefensa: 'استراتيجية الدفاع في الجلسة',
      tiposResolucion: 'أنواع القرارات القضائية',
      preparacionPrevia: 'التحضير المسبق للجلسة',
      preguntasFrecuentes: 'الأسئلة الشائعة حول جلسة التسليم',
      legislacion: 'التشريع والمراجع',
      conclusion: 'الخاتمة'
    }
  } : {
    hero: {
      backLink: 'Volver al hub de Procedimientos de Extradición',
      title: 'Audiencia de Extradición en España',
      subtitle: 'Desarrollo de la Comparecencia Judicial y Derechos del Extraditado',
      description: 'Desarrollo de la comparecencia judicial, derechos del extraditado, estrategias de defensa y tipos de resolución.'
    },
    sections: {
      fasesAudiencia: 'Fases de la Audiencia de Extradición',
      derechosExtraditado: 'Derechos del Extraditado en la Audiencia',
      estrategiaDefensa: 'Estrategia de Defensa en la Audiencia',
      tiposResolucion: 'Tipos de Resolución Judicial',
      preparacionPrevia: 'Preparación Previa a la Audiencia',
      preguntasFrecuentes: 'Preguntas Frecuentes sobre Audiencia de Extradición',
      legislacion: 'Legislación y Referencias',
      conclusion: 'Conclusión'
    }
  };

  // Traducciones del contenido del artículo
  const contentTranslations = language === 'ar' ? {
    introduccion: {
      parrafo1: 'جلسة التسليم هي اللحظة النهائية للإجراء، حيث يقارن المسلم شخصياً أمام القاضي لممارسة حقوق الدفاع. منصوص عليها في المواد 15 وما يليها من القانون العضوي 3/2003، يجب أن تعقد هذه المقارنة في غضون 15 يوماً كحد أقصى من استلام طلب التسليم.',
      parrafo2: 'توضح هذه الدليل التطور الكامل للجلسة، الحقوق التي تساعد المسلم، أكثر استراتيجيات الدفاع فعالية، وأنواع القرارات المختلفة التي يمكن للقاضي أن يصدرها، بناءً على قضاء المحكمة العليا وتعليمات وزارة العدل.'
    },
    fasesAudiencia: {
      titulo: 'مراحل جلسة التسليم'
    }
  } : {
    introduccion: {
      parrafo1: 'La audiencia de extradición es el momento culminante del procedimiento, donde el extraditado comparece personalmente ante el juez para ejercer sus derechos de defensa. Regulada por los <strong>artículos 15 y siguientes de la Ley Orgánica 3/2003</strong>, esta comparecencia debe celebrarse en un plazo máximo de 15 días desde la recepción de la solicitud de extradición.',
      parrafo2: 'Esta guía explica el desarrollo completo de la audiencia, los derechos que asisten al extraditado, las estrategias de defensa más efectivas, y los diferentes tipos de resolución que puede dictar el juez, basándose en la jurisprudencia del <strong>Tribunal Supremo</strong> y las instrucciones del <strong>Ministerio de Justicia</strong>.'
    },
    fasesAudiencia: {
      titulo: 'Fases de la Audiencia de Extradición'
    }
  };

  const breadcrumbItems = [
    { label: t.breadcrumb.blog, href: '/blog' },
    { label: language === 'ar' ? 'إجراءات التسليم' : 'Procedimientos de Extradición', href: '/blog/procedimientos-extradicion' },
    { label: blogTranslations.hero.title }
  ];

  const tocItems = [
    { id: 'fases-de-la-audiencia-de-extradicion', title: blogTranslations.sections.fasesAudiencia, level: 2 },
    { id: 'derechos-del-extraditado-en-la-audiencia', title: blogTranslations.sections.derechosExtraditado, level: 2 },
    { id: 'estrategia-de-defensa-en-la-audiencia', title: blogTranslations.sections.estrategiaDefensa, level: 2 },
    { id: 'tipos-de-resolucion-judicial', title: blogTranslations.sections.tiposResolucion, level: 2 },
    { id: 'preparacion-previa-a-la-audiencia', title: blogTranslations.sections.preparacionPrevia, level: 2 },
    { id: 'preguntas-frecuentes-sobre-audiencia-de-extradicion', title: blogTranslations.sections.preguntasFrecuentes, level: 2 },
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
                  01 ene 2025
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

              {/* Fases de la Audiencia */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="fases-de-la-audiencia-de-extradicion" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  {contentTranslations.fasesAudiencia.titulo}
                </h2>

                <div className="space-y-8">
                  {fasesAudiencia.map((fase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-charleston text-white rounded-2xl p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-gold text-black rounded-full w-10 h-10 flex items-center justify-center font-bold">
                          {fase.fase}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gold">
                            {fase.titulo}
                          </h3>
                          <p className="text-white/80 text-sm" dangerouslySetInnerHTML={{ __html: fase.descripcion }} />
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gold" />
                          <span className="text-white/90 text-sm">{fase.tiempo}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-yellow-400" />
                          <span className="text-white/90 text-sm">Importancia: {fase.importancia}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Derechos en la Audiencia */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="derechos-del-extraditado-en-la-audiencia" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Derechos del Extraditado en la Audiencia
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {derechosAudiencia.map((derecho, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-green-50 border border-green-200 rounded-lg p-6"
                    >
                      <h4 className="font-semibold text-black mb-2">{derecho.derecho}</h4>
                      <p className="text-black/80 text-sm mb-3" dangerouslySetInnerHTML={{ __html: derecho.descripcion }} />
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            {derecho.evidencia}
                          </span>
                        </div>
                        <div className="text-xs text-black/60 italic">
                          {derecho.ejercicio}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Estrategia de Defensa */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="estrategia-de-defensa-en-la-audiencia" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Estrategia de Defensa en la Audiencia
                </h2>

                <div className="space-y-6">
                  {estrategiaDefensa.map((aspecto, index) => (
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
                            {aspecto.aspecto}
                          </h3>
                          <p className="text-black/80 text-sm italic" dangerouslySetInnerHTML={{ __html: aspecto.objetivo }} />
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-black mb-2">Acciones recomendadas:</h4>
                        <ul className="space-y-1">
                          {aspecto.acciones.map((accion, idx) => (
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

              {/* Tipos de Resolución */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="tipos-de-resolucion-judicial" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Tipos de Resolución Judicial
                </h2>

                <div className="space-y-6">
                  {tiposResolucion.map((tipo, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`border-l-4 p-6 rounded-lg ${
                        tipo.tipo.includes('Concesión') ? 'border-green-500 bg-green-50' :
                        tipo.tipo.includes('Denegación') ? 'border-red-500 bg-red-50' :
                        'border-blue-500 bg-blue-50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-black mb-1">
                            {tipo.tipo}
                          </h3>
                          <p className="text-black/80 text-sm" dangerouslySetInnerHTML={{ __html: tipo.descripcion }} />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-black mb-2">Efectos:</h4>
                          <p className="text-black/80 text-sm" dangerouslySetInnerHTML={{ __html: tipo.efectos }} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-2">Recursos:</h4>
                          <p className="text-black/80 text-sm" dangerouslySetInnerHTML={{ __html: tipo.recursos }} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Preparación Previa */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="preparacion-previa-a-la-audiencia" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preparación Previa a la Audiencia
                </h2>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8">
                  <div className="flex items-start gap-3 mb-6">
                    <Shield className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Preparación Exhaustiva</h3>
                      <p className="text-black/80">
                        Una buena preparación previa puede marcar la diferencia en el resultado
                        de la audiencia. Es fundamental contar con toda la información y coordinar
                        con el abogado desde días antes.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-3">📋 Documentación Necesaria</h4>
                      <ul className="text-sm text-black/80 space-y-2">
                        <li>• Orden de detención original</li>
                        <li>• Descripción del delito</li>
                        <li>• Documentos de identidad</li>
                        <li>• Certificado de antecedentes penales</li>
                        <li>• Documentos personales relevantes</li>
                        <li>• Alegaciones escritas preparadas</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-3">💡 Aspectos a Considerar</h4>
                      <ul className="text-sm text-black/80 space-y-2">
                        <li>• Posibles causas de denegación</li>
                        <li>• Argumentos de defensa</li>
                        <li>• Preguntas al juez</li>
                        <li>• Recursos disponibles</li>
                        <li>• Contacto con familiares</li>
                        <li>• Medidas cautelares alternativas</li>
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
                <h2 id="preguntas-frecuentes-sobre-audiencia-de-extradicion" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preguntas Frecuentes sobre Audiencia de Extradición
                </h2>

                <div className="space-y-6">
                  {audienciaFAQ.map((faq, index) => (
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
                  <h3 className="text-lg font-semibold text-black mb-4">Normativa Procesal</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Ley Orgánica 3/2003</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2003-13319" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículos 15-23 (audiencia de extradición)
                      </a>
                    </li>
                    <li>
                      <strong>Ley de Enjuiciamiento Criminal</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1882-6039" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículos 118, 520, 729, 733
                      </a>
                    </li>
                    <li>
                      <strong>Ley 23/2014</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2014-5406" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Mando de detención europeo
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Constitución Española</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Artículo 17</strong> - Derecho a la libertad y garantías en detención
                    </li>
                    <li>
                      <strong>Artículo 24</strong> - Tutela judicial efectiva y derecho de defensa
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Relevante</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STC 91/2000</strong> - Garantías procesales en extradición
                    </li>
                    <li>
                      <strong>STS 47/2018</strong> - Derechos en audiencia de extradición
                    </li>
                    <li>
                      <strong>STJUE Caso C-396/11</strong> - Mando de detención europeo y derechos
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 id="conclusion" className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  La audiencia de extradición es un momento crucial donde se definen los derechos
                  del extraditado y se determina el futuro del procedimiento. Una preparación adecuada,
                  el ejercicio efectivo de los derechos constitucionales, y una estrategia de defensa
                  bien coordinada pueden marcar la diferencia entre la concesión o denegación de la extradición.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Los derechos del extraditado están plenamente garantizados por la Constitución
                  Española y el ordenamiento jurídico internacional. La presencia de abogado especializado,
                  la posibilidad de impugnar la resolución, y el respeto a las garantías procesales
                  aseguran un procedimiento justo y equilibrado. En STANS Abogados contamos con
                  amplia experiencia en audiencias de extradición y podemos proporcionar la
                  asistencia necesaria en cada fase del procedimiento.
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
                  href={`https://wa.me/${WHATSAPP}?text=Hola, tengo una audiencia de extradición y necesito asistencia`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Asistencia Audiencia Extradición
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
