'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, Scale, Gavel } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Breadcrumb from '@/components/Breadcrumb';
import TableOfContents from '@/components/TableOfContents';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const judicialFAQ = [
  {
    question: "¿Qué significa puesta a disposición judicial?",
    answer: "Es el momento en que la policía presenta al detenido ante el juez de guardia. El juez decide si mantiene la detención, impone medidas cautelares o pone en libertad al detenido. Es el momento clave donde se determina tu situación procesal inmediata."
  },
  {
    question: "¿Cuánto tiempo pueden retenerme sin ver al juez?",
    answer: "Máximo 72 horas en casos graves, o 24 horas en casos menos graves. Pasado ese tiempo, si no hay resolución judicial, debes ser puesto en libertad. Este plazo está regulado por el artículo 496 de la LECrim."
  },
  {
    question: "¿Puedo declarar ante el juez sin abogado?",
    answer: "No, tienes derecho a declarar con abogado presente. Si no tienes abogado particular, se te asignará uno de oficio. Sin abogado no puede haber declaración sobre los hechos delictivos."
  },
  {
    question: "¿Qué medidas cautelares puede imponer el juez?",
    answer: "Prisión provisional (provisional, eludible o incondicional), libertad con fianza, retirada de pasaporte, obligación de comparecer periódicamente, alejamiento de víctimas, o prohibición de comunicación con ciertos individuos."
  },
  {
    question: "¿Puedo impugnar la decisión del juez de guardia?",
    answer: "Sí, puedes recurrir la decisión mediante recurso de reforma ante el mismo juez, o recurso de apelación ante la Audiencia Provincial. También puedes solicitar habeas corpus si consideras la detención ilegal."
  },
  {
    question: "¿Qué pasa si el juez me deja en libertad?",
    answer: "Puedes quedar en libertad provisional sin medidas cautelares, o con medidas como retirada de pasaporte, obligación de comparecer, o alejamiento de víctimas. En cualquier caso, quedarás a disposición judicial para el procedimiento ordinario."
  },
  {
    question: "¿Cuánto dura la prisión provisional?",
    answer: "Máximo 2 años en casos graves, o 6 meses en casos menos graves. Pasados estos plazos, si no hay condena firme, debes ser puesto en libertad. Estos límites están en el artículo 504 de la LECrim."
  },
  {
    question: "¿Puedo solicitar cambio de medidas cautelares?",
    answer: "Sí, puedes solicitar modificación de medidas cautelares por cambio de circunstancias. Por ejemplo, sustituir prisión provisional por libertad con fianza, o flexibilizar las condiciones de libertad vigilada."
  }
];

const fasesJudiciales = [
  {
    fase: "Audiencia Inicial",
    descripcion: "El juez informa de derechos y pregunta sobre declaración",
    derechos: ["Derecho a declarar con abogado", "Derecho a no declarar", "Derecho a impugnar"],
    tiempo: "15-30 minutos"
  },
  {
    fase: "Declaración del Detenido",
    descripcion: "Oportunidad para declarar o acogerse a derecho",
    derechos: ["Declarar con abogado", "No declarar", "Solicitar pruebas"],
    tiempo: "30-60 minutos"
  },
  {
    fase: "Calificación Provisional",
    descripcion: "Fiscal y abogado formulan sus conclusiones",
    derechos: ["Impugnar calificación", "Solicitar medidas", "Recurrir decisiones"],
    tiempo: "20-40 minutos"
  },
  {
    fase: "Resolución Judicial",
    descripcion: "Juez dicta auto de medidas cautelares",
    derechos: ["Recurso de reforma", "Recurso de apelación", "Habeas corpus"],
    tiempo: "10-20 minutos"
  }
];

const medidasCautelares = [
  {
    medida: "Libertad Provisional",
    descripcion: "Sin medidas restrictivas",
    condiciones: ["Sin condiciones especiales", "A disposición judicial", "Citación para juicio"],
    gravedad: "Baja"
  },
  {
    medida: "Libertad con Fianza",
    descripcion: "Se deposita cantidad económica",
    condiciones: ["Fianza personal o real", "Retirada de pasaporte", "Obligación de comparecer"],
    gravedad: "Media"
  },
  {
    medida: "Libertad Vigilada",
    descripcion: "Control judicial estricto",
    condiciones: ["Presentaciones periódicas", "Prohibición de salida", "Control telemático"],
    gravedad: "Alta"
  },
  {
    medida: "Prisión Provisional",
    descripcion: "Ingreso en centro penitenciario",
    condiciones: ["Prisión preventiva", "Hasta 2 años máximo", "Control judicial"],
    gravedad: "Muy Alta"
  }
];

const derechosAudiencia = [
  {
    derecho: "Derecho a la Defensa",
    descripcion: "Asistencia letrada obligatoria",
    evidencia: "Artículo 24 CE, 118 LECrim"
  },
  {
    derecho: "Derecho a Declarar",
    descripcion: "Elegir entre declarar o no hacerlo",
    evidencia: "Artículo 24.2 CE"
  },
  {
    derecho: "Derecho a Pruebas",
    descripcion: "Solicitar diligencias probatorias",
    evidencia: "Artículo 729 LECrim"
  },
  {
    derecho: "Derecho a Recursos",
    descripcion: "Impugnar decisiones judiciales",
    evidencia: "Ley 29/1998"
  }
];

const relatedArticles = [
  {
    title: 'Derechos Inmediatos al Ser Detenido',
    slug: 'derechos-inmediatos-detenido',
    category: 'Derechos Fundamentales'
  },
  {
    title: 'Asistencia Letrada de Urgencia',
    slug: 'asistencia-letrada-urgencia',
    category: 'Asistencia Legal'
  },
  {
    title: 'Medidas Cautelares en Procesos Penales',
    slug: 'medidas-cautelares-procesos-penales',
    category: 'Procedimiento Penal'
  }
];

export default function DisposicionJudicialPage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const breadcrumbItems = [
    { label: t.breadcrumb.blog, href: '/blog' },
    { label: 'Defensa Penal Urgente', href: '/blog/defensa-penal-urgente' },
    { label: 'Puesta a Disposición Judicial' }
  ];

  const tocItems = [
    { id: 'fases-de-la-audiencia-judicial', title: 'Fases de la Audiencia Judicial', level: 2 },
    { id: 'medidas-cautelares-posibles', title: 'Medidas Cautelares Posibles', level: 2 },
    { id: 'derechos-en-la-audiencia-judicial', title: 'Derechos en la Audiencia Judicial', level: 2 },
    { id: 'preparacion-de-la-defensa', title: 'Preparación de la Defensa', level: 2 },
    { id: 'preguntas-frecuentes-sobre-puesta-a-disposicion-judicial', title: 'Preguntas Frecuentes sobre Puesta a Disposición Judicial', level: 2 },
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
                  13 {t.blog.minLectura}
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gold mb-6 leading-tight">
                Puesta a Disposición Judicial
              </h1>

              <p className="text-lg text-white/80 mb-6">
                El momento clave del procedimiento: audiencia judicial, medidas cautelares
                y decisiones que determinan tu situación procesal inmediata.
              </p>

              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Equipo STANS Abogados
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  22 dic 2024
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
                  La puesta a disposición judicial marca el final de la fase policial y el inicio
                  del control judicial sobre tu detención. En un plazo máximo de 72 horas desde
                  tu detención, debes ser presentado ante el <strong>juez de guardia</strong>,
                  quien decidirá sobre tu situación procesal inmediata.
                </p>
                <p>
                  Esta audiencia es crucial porque determina si quedas en libertad, si se te imponen
                  medidas cautelares, o si se decreta prisión provisional. La preparación de esta
                  fase debe comenzar desde el momento mismo de la detención, según establece
                  la <strong>Ley de Enjuiciamiento Criminal</strong> en sus artículos 496 y siguientes.
                </p>
              </div>

              {/* Fases de la Audiencia */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="fases-de-la-audiencia-judicial" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Fases de la Audiencia Judicial
                </h2>

                <div className="space-y-8">
                  {fasesJudiciales.map((fase, index) => (
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

                      <p className="text-white/80 mb-4">
                        {fase.descripcion}
                      </p>

                      <div>
                        <h4 className="font-semibold text-gold mb-2">Derechos en esta fase:</h4>
                        <ul className="space-y-1">
                          {fase.derechos.map((derecho, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                              <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                              {derecho}
                            </li>
                          ))}
                        </ul>
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
                <h2 id="medidas-cautelares-posibles" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Medidas Cautelares Posibles
                </h2>

                <div className="space-y-6">
                  {medidasCautelares.map((medida, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`border-l-4 p-6 rounded-lg ${
                        medida.gravedad === 'Baja' ? 'border-green-500 bg-green-50' :
                        medida.gravedad === 'Media' ? 'border-yellow-500 bg-yellow-50' :
                        medida.gravedad === 'Alta' ? 'border-orange-500 bg-orange-50' :
                        'border-red-500 bg-red-50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-black mb-1">
                            {medida.medida}
                          </h3>
                          <p className="text-black/80 text-sm">
                            {medida.descripcion}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          medida.gravedad === 'Baja' ? 'bg-green-100 text-green-800' :
                          medida.gravedad === 'Media' ? 'bg-yellow-100 text-yellow-800' :
                          medida.gravedad === 'Alta' ? 'bg-orange-100 text-orange-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          Gravedad: {medida.gravedad}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-semibold text-black mb-2">Condiciones típicas:</h4>
                        <ul className="space-y-1">
                          {medida.condiciones.map((condicion, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-black/80 text-sm">
                              <AlertTriangle className="h-3 w-3 text-yellow-600 flex-shrink-0" />
                              {condicion}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Derechos en Audiencia */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="derechos-en-la-audiencia-judicial" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Derechos en la Audiencia Judicial
                </h2>

                <div className="bg-green-50 border border-green-200 rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Gavel className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-black">Garantías Constitucionales</h3>
                      <p className="text-black/80 mt-1">
                        Derechos irrenunciables durante la comparecencia judicial
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {derechosAudiencia.map((derecho, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white border border-green-200 rounded-lg p-6"
                      >
                        <h4 className="font-semibold text-black mb-2">{derecho.derecho}</h4>
                        <p className="text-black/80 text-sm mb-3">
                          {derecho.descripcion}
                        </p>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {derecho.evidencia}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Preparación de la Defensa */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="preparacion-de-la-defensa" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preparación de la Defensa
                </h2>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-8">
                  <div className="flex items-start gap-3 mb-6">
                    <Shield className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Estrategia desde la Detención</h3>
                      <p className="text-black/80">
                        La preparación de la audiencia judicial debe comenzar desde el momento
                        mismo de la detención. Cada actuación policial puede influir en la decisión judicial.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-3">Documentación Necesaria</h4>
                      <ul className="text-sm text-black/80 space-y-2">
                        <li>• Expediente policial completo</li>
                        <li>• Acta de derechos leídos</li>
                        <li>• Informes médicos si procede</li>
                        <li>• Documentos personales</li>
                        <li>• Antecedentes penales</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-3">Argumentos de Defensa</h4>
                      <ul className="text-sm text-black/80 space-y-2">
                        <li>• Falta de indicios racionales</li>
                        <li>• Arrepentimiento espontáneo</li>
                        <li>• Circunstancias atenuantes</li>
                        <li>• Posible libertad provisional</li>
                        <li>• Alternativas a la prisión</li>
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
                <h2 id="preguntas-frecuentes-sobre-puesta-a-disposicion-judicial" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preguntas Frecuentes sobre Puesta a Disposición Judicial
                </h2>

                <div className="space-y-6">
                  {judicialFAQ.map((faq, index) => (
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
                  <h3 className="text-lg font-semibold text-black mb-4">Normativa Procesal</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Ley de Enjuiciamiento Criminal</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1882-6039" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículos 496-520 (detención y puesta a disposición)
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica del Poder Judicial</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1985-12666" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Competencias de los juzgados de guardia
                      </a>
                    </li>
                    <li>
                      <strong>Ley de Enjuiciamiento Civil</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2000-962" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Recursos contra decisiones judiciales
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Constitución Española</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Artículo 17</strong> - Derecho a la libertad y garantías en detención
                    </li>
                    <li>
                      <strong>Artículo 24</strong> - Derecho a la tutela judicial efectiva
                    </li>
                    <li>
                      <strong>Artículo 25</strong> - Principios de legalidad y proporcionalidad
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Relevante</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STC 47/2018</strong> - Límites temporales de la detención
                    </li>
                    <li>
                      <strong>STS 123/2020</strong> - Medidas cautelares y proporcionalidad
                    </li>
                    <li>
                      <strong>STEDH caso Mammadov</strong> - Derechos en procedimientos de urgencia
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 id="conclusion" className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  La puesta a disposición judicial es el momento más crítico del procedimiento penal urgente.
                  La decisión que tome el juez de guardia determinará tu situación procesal inmediata y puede
                  marcar el devenir de todo el proceso. Una preparación adecuada y la asistencia de un abogado
                  especializado son fundamentales para obtener el mejor resultado posible.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Recuerda que tienes derechos constitucionales irrenunciables durante toda la comparecencia,
                  y que cualquier decisión judicial puede ser recurrida. En STANS Abogados contamos con
                  amplia experiencia en comparecencias de urgencia y podemos asesorarte sobre las mejores
                  estrategias de defensa según tu situación particular.
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
                  href={`https://wa.me/${WHATSAPP}?text=Hola, tengo una puesta a disposición judicial y necesito asesoramiento urgente`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Asistencia Judicial Urgente
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
                Más información sobre procedimiento judicial urgente
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