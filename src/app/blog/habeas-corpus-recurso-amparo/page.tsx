'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, Scale, Gavel } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Breadcrumb from '@/components/Breadcrumb';
import TableOfContents from '@/components/TableOfContents';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const habeasFAQ = [
  {
    question: "¿Qué es el habeas corpus?",
    answer: "El habeas corpus es un recurso de amparo constitucional que protege contra detenciones ilegales o irregulares. Permite impugnar la privación de libertad ante el Tribunal Constitucional cuando se han agotado las vías judiciales ordinarias."
  },
  {
    question: "¿Cuándo se puede interponer habeas corpus?",
    answer: "Se puede interponer cuando hay vulneración de derechos fundamentales relacionados con la libertad personal: detenciones ilegales, incomunicación prolongada, torturas, tratos inhumanos, o cuando se han agotado los recursos ordinarios sin respuesta efectiva."
  },
  {
    question: "¿Quién puede interponer habeas corpus?",
    answer: "Lo puede interponer la persona detenida, sus familiares directos, o cualquier persona en su nombre. También puede ser interpuesto de oficio por el Tribunal Constitucional si detecta vulneraciones evidentes de derechos fundamentales."
  },
  {
    question: "¿Cuál es el plazo para interponer habeas corpus?",
    answer: "No hay plazo específico para interponer habeas corpus, pero se recomienda hacerlo lo antes posible. Es especialmente urgente en casos de torturas, tratos inhumanos o detenciones que superen los límites legales."
  },
  {
    question: "¿Qué ocurre después de interponer habeas corpus?",
    answer: "El Tribunal Constitucional examina la petición en 24-48 horas. Puede requerir información a las autoridades, suspender la detención preventiva, o ordenar la inmediata puesta en libertad si detecta vulneraciones manifiestas."
  },
  {
    question: "¿Es gratuito el habeas corpus?",
    answer: "Sí, el habeas corpus es gratuito. No requiere tasas judiciales ni gastos de abogado, ya que es un mecanismo de protección de derechos fundamentales establecido por la Constitución Española."
  },
  {
    question: "¿Puede suspender una condena firme?",
    answer: "No, el habeas corpus no suspende condenas firmes. Solo protege contra privaciones de libertad ilegales o irregulares. Para impugnar condenas, deben usarse los recursos ordinarios (apelación, casación)."
  },
  {
    question: "¿Qué diferencia hay con el habeas corpus americano?",
    answer: "El habeas corpus español es más limitado que el americano. Solo protege contra vulneraciones constitucionales graves relacionadas con la libertad, mientras que el americano puede revisar aspectos procesales más amplios."
  }
];

const motivosHabeas = [
  {
    motivo: "Detención Ilegal",
    descripcion: "Ausencia de orden judicial o detención sin causa legal",
    ejemplo: "Detención sin indicios racionales de delito",
    urgencia: "Muy Alta"
  },
  {
    motivo: "Detención Arbitraria",
    descripcion: "Detención por motivos discriminatorios o políticos",
    ejemplo: "Detención por orientación sexual o creencias religiosas",
    urgencia: "Alta"
  },
  {
    motivo: "Trato Degradante",
    descripcion: "Condiciones inhumanas o torturas durante la detención",
    ejemplo: "Incomunicación prolongada o aislamiento injustificado",
    urgencia: "Muy Alta"
  },
  {
    motivo: "Exceso de Plazo",
    descripcion: "Detención que supera los límites legales",
    ejemplo: "Más de 72 horas sin resolución judicial",
    urgencia: "Alta"
  },
  {
    motivo: "Vulneración de Derechos",
    descripcion: "Negación de derechos constitucionales básicos",
    ejemplo: "Negación de asistencia letrada o médica",
    urgencia: "Alta"
  }
];

const procedimientoHabeas = [
  {
    paso: 1,
    titulo: "Preparación del Recurso",
    descripcion: "Reunir toda la documentación y fundamentos legales",
    documentos: ["Escrito de demanda", "Pruebas de vulneración", "Documentación judicial"],
    tiempo: "2-4 horas"
  },
  {
    paso: 2,
    titulo: "Presentación ante el TC",
    descripcion: "Presentación directa ante el Tribunal Constitucional",
    documentos: ["Original + copias", "Justificación de urgencia", "Poder del abogado"],
    tiempo: "Inmediata"
  },
  {
    paso: 3,
    titulo: "Admisión a Trámite",
    descripcion: "Examen preliminar por el Tribunal Constitucional",
    documentos: ["Resolución de admisión", "Requerimiento a autoridades", "Suspensión cautelar"],
    tiempo: "24-48 horas"
  },
  {
    paso: 4,
    titulo: "Resolución del TC",
    descripcion: "Decisión final sobre el habeas corpus",
    documentos: ["Sentencia del TC", "Orden de libertad", "Medidas cautelares"],
    tiempo: "1-3 meses"
  }
];

const casosExitosos = [
  {
    titulo: "Caso de Incomunicación Prolongada",
    descripcion: "Tribunal Constitucional ordenó libertad por aislamiento injustificado",
    resolucion: "Libertad inmediata",
    tiempo: "48 horas"
  },
  {
    titulo: "Detención sin Motivos",
    descripcion: "Policía detuvo sin indicios racionales, habeas corpus concedido",
    resolucion: "Nulidad de detención",
    tiempo: "72 horas"
  },
  {
    titulo: "Trato Degradante en Comisaría",
    descripcion: "Condiciones inhumanas durante detención policial",
    resolucion: "Indemnización + libertad",
    tiempo: "24 horas"
  }
];

const relatedArticles = [
  {
    title: 'Derechos Inmediatos al Ser Detenido',
    slug: 'derechos-inmediatos-detenido',
    category: 'Derechos Fundamentales'
  },
  {
    title: 'Puesta a Disposición Judicial',
    slug: 'puesta-disposicion-judicial',
    category: 'Procedimiento Penal'
  },
  {
    title: 'Medidas Cautelares en Procesos Penales',
    slug: 'medidas-cautelares-procesos-penales',
    category: 'Procedimiento Penal'
  }
];

export default function HabeasCorpusPage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const breadcrumbItems = [
    { label: t.breadcrumb.blog, href: '/blog' },
    { label: 'Defensa Penal Urgente', href: '/blog/defensa-penal-urgente' },
    { label: 'Habeas Corpus y Recurso de Amparo' }
  ];

  const tocItems = [
    { id: 'motivos-para-interponer-habeas-corpus', title: 'Motivos para Interponer Habeas Corpus', level: 2 },
    { id: 'procedimiento-para-interponer-habeas-corpus', title: 'Procedimiento para Interponer Habeas Corpus', level: 2 },
    { id: 'casos-exitosos-de-habeas-corpus', title: 'Casos Exitosos de Habeas Corpus', level: 2 },
    { id: 'diferencias-con-otros-recursos', title: 'Diferencias con Otros Recursos', level: 2 },
    { id: 'preguntas-frecuentes-sobre-habeas-corpus', title: 'Preguntas Frecuentes sobre Habeas Corpus', level: 2 },
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
                href="/blog/defensa-penal-urgente"
                className="inline-flex items-center gap-2 text-gold hover:text-white transition mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Volver al hub de Defensa Penal Urgente
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">
                  Defensa Penal Urgente
                </span>
                <div className="flex items-center gap-1 text-sm text-white/70">
                  <Clock className="h-4 w-4" />
                  12 {t.blog.minLectura}
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gold mb-6 leading-tight">
                Habeas Corpus: Recurso de Amparo
              </h1>

              <p className="text-lg text-white/80 mb-6">
                Protección constitucional contra detenciones ilegales.
                Cómo interponer habeas corpus y cuándo es efectivo.
              </p>

              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Equipo STANS Abogados
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  24 dic 2024
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
                <p>
                  El <strong>habeas corpus</strong> es uno de los recursos constitucionales más poderosos
                  para proteger la libertad personal. Regulado por el <strong>artículo 17.4 de la Constitución Española</strong>
                  y desarrollado por la <strong>Ley Orgánica 2/1979</strong>, permite impugnar cualquier
                  privación de libertad que vulnere derechos fundamentales.
                </p>
                <p>
                  A diferencia de los recursos ordinarios, el habeas corpus se dirige directamente al
                  <strong>Tribunal Constitucional</strong>, saltándose la vía judicial ordinaria cuando
                  se han agotado los recursos o cuando existe urgencia manifiesta. Esta guía explica
                  cuándo y cómo interponer este recurso extraordinario de protección.
                </p>
              </div>

              {/* Motivos para Habeas Corpus */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="motivos-para-interponer-habeas-corpus" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Motivos para Interponer Habeas Corpus
                </h2>

                <div className="space-y-6">
                  {motivosHabeas.map((motivo, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`border-l-4 p-6 rounded-lg ${
                        motivo.urgencia === 'Muy Alta' ? 'border-red-500 bg-red-50' :
                        'border-orange-500 bg-orange-50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-black mb-1">
                            {motivo.motivo}
                          </h3>
                          <p className="text-black/80 text-sm">
                            {motivo.descripcion}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          motivo.urgencia === 'Muy Alta' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'
                        }`}>
                          Urgencia: {motivo.urgencia}
                        </span>
                      </div>

                      <div className="bg-white/70 p-3 rounded">
                        <p className="text-black/80 text-sm">
                          <strong>Ejemplo:</strong> {motivo.ejemplo}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Procedimiento */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="procedimiento-para-interponer-habeas-corpus" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Procedimiento para Interponer Habeas Corpus
                </h2>

                <div className="space-y-8">
                  {procedimientoHabeas.map((paso, index) => (
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
                          {paso.paso}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gold">
                            {paso.titulo}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {paso.descripcion}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gold mb-2">Documentos necesarios:</h4>
                          <ul className="space-y-1">
                            {paso.documentos.map((doc, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                                <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                                {doc}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gold mb-2">Tiempo estimado:</h4>
                          <div className="bg-gold/20 text-gold px-3 py-2 rounded text-center font-medium">
                            {paso.tiempo}
                          </div>
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
                <h2 id="casos-exitosos-de-habeas-corpus" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Casos Exitosos de Habeas Corpus
                </h2>

                <div className="space-y-6">
                  {casosExitosos.map((caso, index) => (
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
                          <p className="text-black/80 text-sm">
                            {caso.descripcion}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-medium mb-1">
                            {caso.resolucion}
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
                    <li>• El habeas corpus puede resolverse en horas cuando hay vulneraciones evidentes</li>
                    <li>• La documentación detallada es crucial para la admisión del recurso</li>
                    <li>• El Tribunal Constitucional actúa con rapidez en casos de urgencia</li>
                    <li>• Las resoluciones pueden incluir indemnizaciones por daños morales</li>
                  </ul>
                </div>
              </motion.div>

              {/* Diferencias con Otros Recursos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="diferencias-con-otros-recursos" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Diferencias con Otros Recursos
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-charleston text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Recurso</th>
                        <th className="px-4 py-3 text-left font-semibold">Órgano</th>
                        <th className="px-4 py-3 text-left font-semibold">Plazo</th>
                        <th className="px-4 py-3 text-left font-semibold">Efectos</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-red-50">
                        <td className="px-4 py-3 font-semibold text-red-800">Habeas Corpus</td>
                        <td className="px-4 py-3 text-black/80">Tribunal Constitucional</td>
                        <td className="px-4 py-3 text-black/80">Sin límite</td>
                        <td className="px-4 py-3 text-black/80">Libertad inmediata</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="px-4 py-3 font-semibold text-blue-800">Recurso de Reforma</td>
                        <td className="px-4 py-3 text-black/80">Mismo juez</td>
                        <td className="px-4 py-3 text-black/80">5 días</td>
                        <td className="px-4 py-3 text-black/80">Revisión decisión</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="px-4 py-3 font-semibold text-green-800">Recurso de Apelación</td>
                        <td className="px-4 py-3 text-black/80">Audiencia Provincial</td>
                        <td className="px-4 py-3 text-black/80">5-10 días</td>
                        <td className="px-4 py-3 text-black/80">Nueva resolución</td>
                      </tr>
                      <tr className="bg-purple-50">
                        <td className="px-4 py-3 font-semibold text-purple-800">Recurso de Casación</td>
                        <td className="px-4 py-3 text-black/80">Tribunal Supremo</td>
                        <td className="px-4 py-3 text-black/80">5-20 días</td>
                        <td className="px-4 py-3 text-black/80">Unificación doctrina</td>
                      </tr>
                    </tbody>
                  </table>
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
                <h2 id="preguntas-frecuentes-sobre-habeas-corpus" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preguntas Frecuentes sobre Habeas Corpus
                </h2>

                <div className="space-y-6">
                  {habeasFAQ.map((faq, index) => (
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
                      <p className="text-black/80 leading-relaxed">
                        {faq.answer}
                      </p>
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
                  <h3 className="text-lg font-semibold text-black mb-4">Normativa Constitucional</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Constitución Española (1978)</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículo 17.4 (habeas corpus)
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica 2/1979</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1979-304" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Tribunal Constitucional
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica 3/1982</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1982-957" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Procedimiento habeas corpus
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Derecho Internacional</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Convención Europea de Derechos Humanos</strong> -
                      <a href="https://www.echr.coe.int/Documents/Convention_SPA.pdf" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículo 5 (derecho a la libertad)
                      </a>
                    </li>
                    <li>
                      <strong>Pacto Internacional de Derechos Civiles y Políticos</strong> -
                      <a href="https://www.ohchr.org/sp/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículo 9 (habeas corpus)
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Destacada</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STC 114/2017</strong> - Límites temporales del habeas corpus
                    </li>
                    <li>
                      <strong>STC 47/2018</strong> - Requisitos de urgencia manifiesta
                    </li>
                    <li>
                      <strong>STEDH caso Mammadov vs Azerbaiyán</strong> - Efectividad del habeas corpus
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 id="conclusion" className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  El habeas corpus es un instrumento excepcional pero poderosísimo para proteger la libertad personal
                  contra vulneraciones constitucionales. Aunque su interposición requiere fundamentos sólidos y
                  documentación detallada, puede lograr la libertad inmediata en casos de detenciones claramente ilegales.
                </p>
                <p className="text-white/90 leading-relaxed">
                  La clave está en actuar con rapidez y contar con la asesoría de abogados especializados que conozcan
                  los requisitos formales y sustantivos del Tribunal Constitucional. En STANS Abogados tenemos amplia
                  experiencia en la interposición de habeas corpus y podemos valorar si tu caso reúne los requisitos
                  para este recurso extraordinario de protección.
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
                  href={`https://wa.me/${WHATSAPP}?text=Hola, creo que necesito interponer habeas corpus`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Consulta Habeas Corpus
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
                Más información sobre recursos de amparo
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