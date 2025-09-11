'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, Scale } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const abogadoFAQ = [
  {
    question: "¿Cuánto tiempo tarda en llegar un abogado de urgencia?",
    answer: "Según la Ley 1/1996, el abogado de urgencia debe llegar en un plazo máximo de 2 horas desde que se solicita su presencia. En casos de especial urgencia, este plazo se reduce considerablemente."
  },
  {
    question: "¿Quién paga al abogado de urgencia?",
    answer: "Si no puedes pagar un abogado particular, tienes derecho a asistencia jurídica gratuita. El abogado de oficio es pagado por el Estado, pero debes acreditar insuficiencia de recursos económicos."
  },
  {
    question: "¿Puede mi abogado parar la detención?",
    answer: "No puede parar la detención policial, pero sí puede impugnar su legalidad, exigir la presencia de un médico forense, solicitar medidas cautelares alternativas, y preparar tu defensa para la puesta a disposición judicial."
  },
  {
    question: "¿Qué información puede dar mi abogado a la policía?",
    answer: "Tu abogado no puede revelar información confidencial sin tu consentimiento expreso. Todo lo que comuniques a tu abogado está protegido por el secreto profesional (artículo 542 LECrim)."
  },
  {
    question: "¿Puedo cambiar de abogado durante la urgencia?",
    answer: "Sí, tienes derecho a designar un abogado de confianza en cualquier momento. El abogado de oficio continúa asistiendo hasta que llegue tu abogado particular, pero no puede ser apartado forzosamente."
  },
  {
    question: "¿Qué documentos debe facilitarme mi abogado?",
    answer: "Debe proporcionarte copia de todas las diligencias policiales, el acta de derechos leídos, cualquier declaración realizada, y un justificante de su intervención en el procedimiento."
  },
  {
    question: "¿Puede mi abogado estar presente en el interrogatorio?",
    answer: "Sí, obligatoriamente. Sin presencia de abogado no puede haber interrogatorio sobre los hechos delictivos. Solo puede haber preguntas básicas de identificación sin abogado."
  },
  {
    question: "¿Qué pasa si el abogado no llega a tiempo?",
    answer: "Si el abogado no llega en el plazo establecido, puedes solicitar la suspensión temporal del procedimiento. También puedes impugnar cualquier actuación realizada sin asistencia letrada."
  }
];

const funcionesAbogado = [
  {
    titulo: "Asistencia Inmediata",
    descripcion: "Presencia durante interrogatorios y actuaciones policiales",
    icon: User,
    detalles: ["Asistencia en comisaría", "Presencia en declaraciones", "Control de legalidad"]
  },
  {
    titulo: "Información de Derechos",
    descripcion: "Explicación detallada de tus derechos constitucionales",
    icon: FileText,
    detalles: ["Derechos constitucionales", "Opciones procesales", "Consecuencias legales"]
  },
  {
    titulo: "Preparación de Defensa",
    descripcion: "Estrategia inicial y preparación de alegaciones",
    icon: Shield,
    detalles: ["Análisis del caso", "Preparación de recursos", "Estrategia procesal"]
  },
  {
    titulo: "Control de Pruebas",
    descripcion: "Supervisión de la cadena de custodia y pruebas",
    icon: Scale,
    detalles: ["Cadena de custodia", "Impugnación de pruebas", "Solicitud de diligencias"]
  }
];

const tiposAbogados = [
  {
    tipo: "Abogado Particular",
    ventajas: ["Especialización", "Disponibilidad 24/7", "Estrategia personalizada"],
    desventajas: ["Coste económico", "Puede tardar más"],
    recomendacion: "Si dispones de medios económicos"
  },
  {
    tipo: "Abogado de Urgencia/Oficio",
    ventajas: ["Gratuito", "Llegada inmediata", "Experiencia en urgencias"],
    desventajas: ["Rotación de profesionales", "Menos especialización"],
    recomendacion: "Si no puedes pagar abogado"
  },
  {
    tipo: "Abogado del Seguro",
    ventajas: ["Cubierto por póliza", "Especializado", "Conocimiento del cliente"],
    desventajas: ["Limitaciones contractuales", "Puede no cubrir todo"],
    recomendacion: "Si tienes seguro de defensa jurídica"
  }
];

const derechosConAbogado = [
  {
    derecho: "Secreto Profesional",
    descripcion: "Todo lo que comuniques está protegido",
    articulo: "Artículo 542 LECrim"
  },
  {
    derecho: "Acceso al Expediente",
    descripcion: "Derecho a examinar todas las actuaciones",
    articulo: "Artículo 118 LECrim"
  },
  {
    derecho: "Presencia Obligatoria",
    descripcion: "Debe estar presente en interrogatorios",
    articulo: "Artículo 520 LECrim"
  },
  {
    derecho: "Impugnación de Actos",
    descripcion: "Puede recurrir decisiones policiales",
    articulo: "Ley 29/1998"
  }
];

const relatedArticles = [
  {
    title: 'Derechos Inmediatos al Ser Detenido',
    slug: 'derechos-inmediatos-detenido',
    category: 'Derechos Fundamentales'
  },
  {
    title: 'Primeros Pasos en Comisaría',
    slug: 'primeros-pasos-comisaria',
    category: 'Procedimiento Policial'
  },
  {
    title: 'Puesta a Disposición Judicial',
    slug: 'puesta-disposicion-judicial',
    category: 'Procedimiento Penal'
  }
];

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function AbogadoUrgenciaPage({ params }: Props) {
  return <BlogPostContent />;
}

function BlogPostContent() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <ScrollProgress />
      <Navigation />

      <main className="bg-black">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-charleston text-offwhite py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
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
                  11 min de lectura
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gold mb-6 leading-tight">
                Asistencia Letrada de Urgencia
              </h1>

              <p className="text-lg text-white/80 mb-6">
                El papel crucial del abogado en situaciones de urgencia penal.
                Derechos, funciones y cómo elegir al profesional adecuado.
              </p>

              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Equipo STANS Abogados
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  20 dic 2024
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <article className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {/* Introduction */}
              <div className="text-black/80 leading-relaxed mb-12 text-lg">
                <p>
                  La asistencia letrada de urgencia es uno de tus derechos constitucionales más importantes
                  en situaciones de detención. Según el <strong>artículo 17.3 de la Constitución Española</strong>
                  y el <strong>artículo 118 de la Ley de Enjuiciamiento Criminal</strong>, tienes derecho
                  a un abogado desde el momento exacto de la privación de libertad.
                </p>
                <p>
                  Esta guía explica el funcionamiento del servicio de asistencia jurídica de urgencia,
                  las funciones del abogado en estas situaciones, y cómo elegir al profesional más adecuado
                  para tu defensa, basándose en la <strong>Ley 1/1996 de Asistencia Jurídica Gratuita</strong>
                  y las instrucciones del <strong>Ministerio de Justicia</strong>.
                </p>
              </div>

              {/* Funciones del Abogado */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Funciones del Abogado de Urgencia
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {funcionesAbogado.map((funcion, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-charleston text-white rounded-2xl p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <funcion.icon className="h-6 w-6 text-gold" />
                        <h3 className="text-lg font-semibold text-gold">
                          {funcion.titulo}
                        </h3>
                      </div>

                      <p className="text-white/80 mb-4">
                        {funcion.descripcion}
                      </p>

                      <ul className="space-y-1">
                        {funcion.detalles.map((detalle, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                            {detalle}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Tipos de Abogados */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Tipos de Abogados en Urgencias
                </h2>

                <div className="space-y-6">
                  {tiposAbogados.map((tipo, index) => (
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
                            {tipo.tipo}
                          </h3>
                          <p className="text-black/60 text-sm italic">
                            {tipo.recomendacion}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">✅ Ventajas</h4>
                          <ul className="text-sm text-black/80 space-y-1">
                            {tipo.ventajas.map((ventaja, idx) => (
                              <li key={idx}>• {ventaja}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-700 mb-2">❌ Desventajas</h4>
                          <ul className="text-sm text-black/80 space-y-1">
                            {tipo.desventajas.map((desventaja, idx) => (
                              <li key={idx}>• {desventaja}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Derechos con Abogado */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Derechos Adicionales con Abogado Presente
                </h2>

                <div className="bg-green-50 border border-green-200 rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-black">Protección Jurídica Integral</h3>
                      <p className="text-black/80 mt-1">
                        La presencia del abogado multiplica tus garantías procesales
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {derechosConAbogado.map((derecho, index) => (
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
                          {derecho.articulo}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Proceso de Solicitud */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Cómo Solicitar Asistencia Letrada de Urgencia
                </h2>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-8">
                  <div className="flex items-start gap-3 mb-6">
                    <AlertTriangle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Solicitud Inmediata</h3>
                      <p className="text-black/80">
                        La solicitud de abogado debe realizarse desde el primer momento de la detención.
                        No esperes a llegar a comisaría para ejercer este derecho.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">1. Comunicación Verbal</h4>
                      <p className="text-black/80 text-sm">
                        Informa inmediatamente a los agentes que quieres un abogado
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">2. Registro por Escrito</h4>
                      <p className="text-black/80 text-sm">
                        Se registra tu solicitud en el acta de detención
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">3. Asignación Automática</h4>
                      <p className="text-black/80 text-sm">
                        El Colegio de Abogados asigna abogado de urgencia
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-black mb-2">Tiempos de Respuesta</h4>
                    <ul className="text-black/80 text-sm space-y-1">
                      <li>• <strong>Abogado de oficio</strong>: Máximo 2 horas</li>
                      <li>• <strong>Abogado particular</strong>: Según disponibilidad</li>
                      <li>• <strong>Casos especiales</strong>: Reducción del plazo</li>
                    </ul>
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
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preguntas Frecuentes sobre Abogados de Urgencia
                </h2>

                <div className="space-y-6">
                  {abogadoFAQ.map((faq, index) => (
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
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Legislación y Referencias
                </h2>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">Normativa Constitucional y Procesal</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Constitución Española (1978)</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículo 17.3 (asistencia letrada)
                      </a>
                    </li>
                    <li>
                      <strong>Ley de Enjuiciamiento Criminal</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1882-6039" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículos 118, 520, 542
                      </a>
                    </li>
                    <li>
                      <strong>Ley 1/1996 de Asistencia Jurídica Gratuita</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1996-1590" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Servicio de urgencias
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Regulaciones Profesionales</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Estatuto General de la Abogacía</strong> - Deberes profesionales
                    </li>
                    <li>
                      <strong>Código Deontológico</strong> - Principios éticos en urgencias
                    </li>
                    <li>
                      <strong>Reglamento de Asistencia Jurídica Gratuita</strong> - Procedimiento de asignación
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Relevante</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STC 47/2018</strong> - Alcance del derecho a asistencia letrada
                    </li>
                    <li>
                      <strong>STS 234/2020</strong> - Plazos de llegada del abogado de urgencia
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  La asistencia letrada de urgencia es un pilar fundamental de tu defensa en situaciones
                  de detención. Un abogado especializado no solo garantiza que tus derechos sean respetados,
                  sino que también prepara el terreno para una defensa efectiva en todas las fases del procedimiento.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Recuerda que tienes derecho a asistencia jurídica gratuita si no puedes costearla,
                  y que la presencia del abogado es obligatoria para cualquier declaración sobre los hechos.
                  En STANS Abogados contamos con abogados especializados disponibles 24/7 para asistirte
                  en situaciones de urgencia penal.
                </p>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-gold/20">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-black/70 hover:text-gold transition">
                    <Share2 className="h-4 w-4" />
                    Compartir artículo
                  </button>
                  <button className="flex items-center gap-2 text-black/70 hover:text-gold transition">
                    <Bookmark className="h-4 w-4" />
                    Guardar artículo
                  </button>
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hola, necesito un abogado de urgencia inmediatamente`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Abogado Urgente 24/7
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
                Artículos Relacionados
              </h2>
              <p className="text-white/80">
                Más información sobre asistencia jurídica
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
