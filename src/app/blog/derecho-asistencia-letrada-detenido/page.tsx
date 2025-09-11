'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, Scale, Gavel, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const abogadoFAQ = [
  {
    question: "¿Desde cuándo tengo derecho a un abogado?",
    answer: "Desde el preciso instante de la privación de libertad. El artículo 24.2 de la Constitución establece que tienes derecho a asistencia letrada desde el primer momento, incluso antes de declarar."
  },
  {
    question: "¿Qué pasa si no puedo pagar un abogado particular?",
    answer: "Tienes derecho a asistencia jurídica gratuita. El Colegio de Abogados designará un abogado de oficio que te asistirá sin ningún coste económico, con las mismas garantías que un abogado particular."
  },
  {
    question: "¿Puede la policía interrogarme sin abogado presente?",
    answer: "No, cualquier interrogatorio sobre los hechos delictivos requiere presencia letrada obligatoria. Solo pueden hacerte preguntas básicas de identificación (nombre, dirección, etc.) sin abogado."
  },
  {
    question: "¿Cuánto tiempo tarda en llegar un abogado de urgencia?",
    answer: "Según la Ley 1/1996, el abogado debe llegar en un plazo máximo de 2 horas desde la solicitud. En casos de especial urgencia, este plazo se reduce considerablemente."
  },
  {
    question: "¿Puede mi abogado estar presente en registros o cacheos?",
    answer: "Sí, especialmente en registros invasivos o cacheos más allá de la superficie corporal. Tu abogado puede presenciar todo el procedimiento y formular objeciones a irregularidades."
  },
  {
    question: "¿Qué información puedo darle a mi abogado?",
    answer: "Toda la información que compartas con tu abogado está protegida por el secreto profesional absoluto (artículo 542 LECrim). Nadie puede obligarle a revelar lo que le comuniques."
  },
  {
    question: "¿Puedo cambiar de abogado durante la detención?",
    answer: "Sí, puedes designar un abogado de confianza en cualquier momento. El abogado de oficio continúa asistiendo hasta que llegue tu abogado particular, pero no puede ser apartado forzosamente."
  },
  {
    question: "¿Qué ocurre si el abogado no llega a tiempo?",
    answer: "Si el abogado no llega en el plazo establecido, puedes solicitar la suspensión temporal del procedimiento. Cualquier actuación realizada sin asistencia letrada puede ser declarada nula."
  }
];

const funcionesAbogado = [
  {
    funcion: "Asistencia en Declaraciones",
    descripcion: "Presencia obligatoria en cualquier interrogatorio policial",
    importancia: "Fundamental",
    momento: "Durante declaraciones"
  },
  {
    funcion: "Información de Derechos",
    descripcion: "Explicación clara y detallada de tus derechos constitucionales",
    importancia: "Fundamental",
    momento: "Desde el inicio"
  },
  {
    funcion: "Control de Legalidad",
    descripcion: "Supervisión de todas las actuaciones policiales",
    importancia: "Alta",
    momento: "Durante toda la detención"
  },
  {
    funcion: "Impugnación de Irregularidades",
    descripcion: "Recursos contra actuaciones que vulneren derechos",
    importancia: "Alta",
    momento: "Cuando se detecten"
  },
  {
    funcion: "Coordinación con Familiares",
    descripcion: "Comunicación con familiares y coordinación de apoyo",
    importancia: "Media",
    momento: "Según necesidad"
  },
  {
    funcion: "Preparación de Defensa",
    descripcion: "Estrategia inicial y preparación de alegaciones",
    importancia: "Fundamental",
    momento: "Desde el primer contacto"
  }
];

const tiposAsistencia = [
  {
    tipo: "Abogado Particular",
    ventajas: ["Especialización", "Disponibilidad 24/7", "Conocimiento personal", "Estrategia personalizada"],
    desventajas: ["Coste económico", "Puede tardar más"],
    recomendacion: "Si dispones de medios económicos"
  },
  {
    tipo: "Abogado de Urgencia/Oficio",
    ventajas: ["Gratuito", "Llegada inmediata", "Experiencia en urgencias"],
    desventajas: ["Rotación de profesionales", "Menos especialización"],
    recomendacion: "Si no puedes costear abogado"
  },
  {
    tipo: "Abogado del Seguro",
    ventajas: ["Cubierto por póliza", "Especializado", "Conocimiento del cliente"],
    desventajas: ["Limitaciones contractuales", "Puede no cubrir todo"],
    recomendacion: "Si tienes seguro de defensa jurídica"
  },
  {
    tipo: "Abogado de Guardia",
    ventajas: ["Disponibilidad inmediata", "Experiencia específica", "Rotación garantizada"],
    desventajas: ["Puede no ser especialista", "Carga de trabajo elevada"],
    recomendacion: "Para urgencias nocturnas/festivos"
  }
];

const derechosConAbogado = [
  {
    derecho: "Secreto Profesional Absoluto",
    descripcion: "Protección total de las comunicaciones abogado-cliente",
    articulo: "Artículo 542 LECrim",
    alcance: "Todas las comunicaciones"
  },
  {
    derecho: "Presencia Obligatoria",
    descripcion: "Asistencia en todas las actuaciones relevantes",
    articulo: "Artículo 118 LECrim",
    alcance: "Interrogatorios, registros, audiencias"
  },
  {
    derecho: "Acceso a Documentación",
    descripcion: "Examen de todos los documentos del procedimiento",
    articulo: "Artículo 118 LECrim",
    alcance: "Expedientes, diligencias, informes"
  },
  {
    derecho: "Impugnación de Actos",
    descripcion: "Recursos contra decisiones y actuaciones",
    articulo: "Ley 29/1998",
    alcance: "Reformas, apelaciones, amparos"
  },
  {
    derecho: "Comunicación Privada",
    descripcion: "Conversaciones confidenciales sin presencia policial",
    articulo: "Artículo 24.2 CE",
    alcance: "Momentos de coordinación"
  },
  {
    derecho: "Honorarios Regulados",
    descripcion: "Tarifas controladas en asistencia gratuita",
    articulo: "Ley 1/1996",
    alcance: "Costes de justicia gratuita"
  }
];

const plazosAsistencia = [
  {
    fase: "Momento de la Detención",
    derecho: "Información inmediata de derecho a abogado",
    plazo: "Inmediato",
    consecuencia: "Sin información = nulidad"
  },
  {
    fase: "Traslado a Comisaría",
    derecho: "Designación de abogado particular o de oficio",
    plazo: "Máximo 2 horas",
    consecuencia: "Sin abogado = suspensión procedimiento"
  },
  {
    fase: "Llegada del Abogado",
    derecho: "Presencia en primera declaración",
    plazo: "Antes de declarar",
    consecuencia: "Declaración sin abogado = nula"
  },
  {
    fase: "Audiencia Judicial",
    derecho: "Presencia en comparecencia ante juez",
    plazo: "Obligatoria",
    consecuencia: "Sin abogado = suspensión audiencia"
  },
  {
    fase: "Durante Custodia",
    derecho: "Asistencia continua en todas las fases",
    plazo: "Permanente",
    consecuencia: "Actuaciones sin abogado = irregulares"
  }
];

const relatedArticles = [
  {
    title: 'Derechos Constitucionales del Detenido',
    slug: 'derechos-constitucionales-detenido',
    category: 'Derechos Fundamentales'
  },
  {
    title: 'Asistencia Letrada de Urgencia',
    slug: 'asistencia-letrada-urgencia',
    category: 'Asistencia Legal'
  },
  {
    title: 'Primeros Pasos en Comisaría',
    slug: 'primeros-pasos-comisaria',
    category: 'Procedimiento Policial'
  }
];

export default async function DerechoAsistenciaLetradaPage({ params }: Promise<{ slug: string }>) {
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
                href="/blog/derechos-detenidos"
                className="inline-flex items-center gap-2 text-gold hover:text-white transition mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Volver al hub de Derechos de Detenidos
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">
                  Derechos de Detenidos
                </span>
                <div className="flex items-center gap-1 text-sm text-white/70">
                  <Clock className="h-4 w-4" />
                  14 min de lectura
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gold mb-6 leading-tight">
                Derecho a la Asistencia Letrada del Detenido
              </h1>

              <p className="text-lg text-white/80 mb-6">
                Asistencia jurídica gratuita y obligatoria. Funciones del abogado,
                tipos de asistencia y plazos constitucionales durante la detención.
              </p>

              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Equipo STANS Abogados
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  08 ene 2025
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
                  El <strong>derecho a la asistencia letrada</strong> es uno de los derechos constitucionales
                  más importantes durante la detención. Reconocido en el <strong>artículo 24.2 de la Constitución Española</strong>
                  y desarrollado por la <strong>Ley 1/1996 de Asistencia Jurídica Gratuita</strong>, garantiza
                  que toda persona privada de libertad cuente con un abogado desde el primer momento.
                </p>
                <p>
                  Esta guía completa explica el alcance del derecho a la asistencia letrada, las diferentes
                  modalidades de asistencia jurídica, las funciones del abogado durante la detención, y las
                  consecuencias de su vulneración, basándose en la jurisprudencia del <strong>Tribunal Constitucional</strong>
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
                  Funciones del Abogado durante la Detención
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {funcionesAbogado.map((funcion, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-green-50 border border-green-200 rounded-lg p-6"
                    >
                      <h4 className="font-semibold text-black mb-2">{funcion.funcion}</h4>
                      <p className="text-black/80 text-sm mb-3">
                        {funcion.descripcion}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {funcion.momento}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          funcion.importancia === 'Fundamental' ? 'bg-red-100 text-red-800' :
                          funcion.importancia === 'Alta' ? 'bg-orange-100 text-orange-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          Importancia: {funcion.importancia}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Tipos de Asistencia */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Tipos de Asistencia Jurídica
                </h2>

                <div className="space-y-6">
                  {tiposAsistencia.map((tipo, index) => (
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
                            {tipo.tipo}
                          </h3>
                          <p className="text-black/80 text-sm italic">
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

              {/* Derechos Adicionales con Abogado */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Derechos Adicionales con Asistencia Letrada
                </h2>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="h-8 w-8 text-purple-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-black">Protección Jurídica Integral</h3>
                      <p className="text-black/80 mt-1">
                        La presencia del abogado multiplica las garantías procesales
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
                        className="bg-white border border-purple-200 rounded-lg p-6"
                      >
                        <h4 className="font-semibold text-black mb-2">{derecho.derecho}</h4>
                        <p className="text-black/80 text-sm mb-3">
                          {derecho.descripcion}
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                              {derecho.articulo}
                            </span>
                          </div>
                          <div className="text-xs text-black/60">
                            Alcance: {derecho.alcance}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Plazos de Asistencia */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Plazos Constitucionales de Asistencia Letrada
                </h2>

                <div className="space-y-6">
                  {plazosAsistencia.map((fase, index) => (
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
                            {fase.fase}
                          </h3>
                          <p className="text-black/80 text-sm">
                            {fase.derecho}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded mb-1 block">
                            Plazo: {fase.plazo}
                          </span>
                          <span className="text-xs text-black/60">
                            {fase.consecuencia}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Consecuencias de la Falta de Asistencia</h3>
                  <ul className="space-y-2 text-black/80">
                    <li>• <strong>Nulidad de declaraciones</strong> realizadas sin abogado presente</li>
                    <li>• <strong>Inadmisión de pruebas</strong> obtenidas sin garantías procesales</li>
                    <li>• <strong>Responsabilidad disciplinaria</strong> de los agentes implicados</li>
                    <li>• <strong>Indemnización por daños</strong> si se demuestra vulneración</li>
                    <li>• <strong>Recursos extraordinarios</strong> ante el Tribunal Constitucional</li>
                  </ul>
                </div>
              </motion.div>

              {/* Proceso de Designación */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Proceso de Designación de Abogado
                </h2>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-8">
                  <div className="flex items-start gap-3 mb-6">
                    <Users className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Designación Automática</h3>
                      <p className="text-black/80">
                        El sistema de designación de abogados de urgencia garantiza asistencia inmediata
                        en cualquier momento y lugar, 24 horas al día, 365 días al año.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">1. Solicitud</h4>
                      <p className="text-black/80 text-sm">
                        Manifestar expresamente el deseo de tener abogado
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">2. Comunicación</h4>
                      <p className="text-black/80 text-sm">
                        Colegio de Abogados recibe la solicitud
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">3. Designación</h4>
                      <p className="text-black/80 text-sm">
                        Abogado de guardia es designado automáticamente
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-black mb-2">Abogados de Guardia por Provincia</h4>
                    <p className="text-black/80 text-sm">
                      Cada provincia española cuenta con servicios de abogados de guardia que rotan
                      semanalmente, garantizando cobertura 24/7. Los colegios profesionales coordinan
                      estos servicios para asegurar asistencia inmediata en cualquier circunstancia.
                    </p>
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
                  Preguntas Frecuentes sobre Asistencia Letrada
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
                        Artículo 24.2 (derecho a la defensa)
                      </a>
                    </li>
                    <li>
                      <strong>Ley de Enjuiciamiento Criminal</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1882-6039" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículos 118, 520, 542 (asistencia letrada)
                      </a>
                    </li>
                    <li>
                      <strong>Ley 1/1996 de Asistencia Jurídica Gratuita</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1996-1590" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Servicio de urgencias y justicia gratuita
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
                      <strong>Reglamento de Asistencia Jurídica Gratuita</strong> - Procedimiento de designación
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
                    <li>
                      <strong>STEDH Caso Mammadov vs Azerbaiyán</strong> - Derechos humanos en detención
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  El derecho a la asistencia letrada es fundamental para garantizar un proceso justo
                  y respetuoso con los derechos constitucionales. Desde el primer momento de la detención,
                  el abogado actúa como garante de tus derechos, controlador de la legalidad policial,
                  y preparador de tu estrategia de defensa.
                </p>
                <p className="text-white/90 leading-relaxed">
                  La asistencia jurídica gratuita y la obligación de presencia letrada en interrogatorios
                  son conquistas democráticas que igualan las posiciones procesales. Cualquier vulneración
                  de este derecho puede anular todo el procedimiento y dar lugar a responsabilidades
                  disciplinarias, penales y patrimoniales. En STANS Abogados garantizamos asistencia
                  especializada desde el primer momento de cualquier detención.
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
                  href={`https://wa.me/${WHATSAPP}?text=Hola, estoy detenido y necesito un abogado urgentemente`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Abogado de Urgencia 24/7
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
                Artículos Relacionados
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
