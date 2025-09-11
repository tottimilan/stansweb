'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, Globe, Users, MapPin } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Breadcrumb from '@/components/Breadcrumb';
import TableOfContents from '@/components/TableOfContents';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const tiposFAQ = [
  {
    question: "¿Cuál es la diferencia entre extradición UE y extradición internacional?",
    answer: "La extradición UE es más ágil y simplificada según el Tratado de Lisboa, sin control de doble incriminación y con plazos más cortos. La extradición internacional sigue tratados bilaterales y es más compleja, requiriendo cumplimiento de todos los requisitos tradicionales."
  },
  {
    question: "¿Puede España extraditar a sus propios ciudadanos?",
    answer: "Sí, España puede extraditar a sus ciudadanos. La reforma constitucional de 1992 eliminó la prohibición absoluta de extradición de nacionales, aunque se aplican garantías adicionales como el principio de no devolución."
  },
  {
    question: "¿Qué países tienen acuerdos de extradición con España?",
    answer: "España tiene acuerdos con casi todos los países de Europa, Estados Unidos, Canadá, México, muchos países latinoamericanos, Marruecos, Argelia y otros países africanos. También aplica extradición sin tratado en casos excepcionales."
  },
  {
    question: "¿Cuánto tiempo puede durar un proceso de extradición?",
    answer: "Los plazos varían: extradición UE puede resolverse en 30-60 días, extradición internacional puede tomar 6-18 meses. En casos complejos con recursos, puede extenderse hasta 2-3 años."
  },
  {
    question: "¿Puede rechazarse una extradición por razones humanitarias?",
    answer: "Sí, la Ley de Enjuiciamiento Criminal permite denegar la extradición por razones humanitarias como riesgo de tortura, pena de muerte, persecución política, o condiciones inhumanas de detención en el país solicitante."
  },
  {
    question: "¿Qué pasa si el delito ya prescribió en España?",
    answer: "Si el delito ha prescrito según la legislación española, la extradición puede denegarse por falta de punibilidad. Sin embargo, si no ha prescrito en el país solicitante, puede concederse la extradición con limitaciones en la pena."
  },
  {
    question: "¿Puede extraditarse por delitos fiscales?",
    answer: "Sí, España extradita por delitos fiscales graves como fraude fiscal superior a 120.000€, blanqueo de capitales, o delitos societarios. Sin embargo, para extradición internacional se requiere doble incriminación."
  },
  {
    question: "¿Qué sucede durante la custodia provisional?",
    answer: "Durante la custodia provisional (hasta 40 días renovables), la persona permanece detenida pero puede recurrir la decisión. Tiene derecho a asistencia letrada, comunicación familiar y condiciones dignas de detención."
  }
];

const tiposExtradicion = [
  {
    tipo: "Extradición UE",
    caracteristicas: ["Más rápida (30-60 días)", "Sin control de doble incriminación", "Mando de detención europeo", "Ejecución directa"],
    ventajas: ["Plazos reducidos", "Procedimiento simplificado", "Cooperación judicial intensa"],
    desventajas: ["Limitada a países UE", "Menos garantías procesales"],
    aplicacion: "Entre países miembros de la UE"
  },
  {
    tipo: "Extradición Internacional",
    caracteristicas: ["Más compleja y lenta", "Control de doble incriminación", "Tratados bilaterales", "Intervención diplomática"],
    ventajas: ["Máximas garantías", "Control judicial exhaustivo", "Posibilidad de condiciones"],
    desventajas: ["Plazos largos", "Más recursos posibles", "Costos diplomáticos"],
    aplicacion: "Con países no comunitarios"
  },
  {
    tipo: "Extradición por Terrorismo",
    caracteristicas: ["Prioridad absoluta", "Cooperación internacional", "Sin límite territorial", "Medidas excepcionales"],
    ventajas: ["Respuesta rápida", "Cooperación global", "Máxima prioridad"],
    desventajas: ["Riesgo de abusos", "Presiones políticas", "Menos garantías"],
    aplicacion: "Delitos terroristas graves"
  },
  {
    tipo: "Extradición por Corrupción",
    caracteristicas: ["Recuperación de activos", "Cooperación financiera", "Medidas cautelares", "Investigación conjunta"],
    ventajas: ["Recuperación económica", "Transparencia", "Cooperación amplia"],
    desventajas: ["Complejidad técnica", "Conflictos diplomáticos", "Pruebas difíciles"],
    aplicacion: "Delitos económicos graves"
  }
];

const paisesPrincipales = [
  {
    pais: "Estados Unidos",
    tipo: "Internacional",
    tratado: "Tratado de 1970",
    particularidades: "Extradición por vía diplomática, requisitos estrictos de doble incriminación"
  },
  {
    pais: "Francia",
    tipo: "UE",
    tratado: "Mando de Detención Europeo",
    particularidades: "Procedimiento simplificado, ejecución directa en 30 días"
  },
  {
    pais: "Reino Unido",
    tipo: "Internacional (post-Brexit)",
    tratado: "Tratado bilateral 1985",
    particularidades: "Requiere proceso completo, sin simplificaciones UE"
  },
  {
    pais: "Marruecos",
    tipo: "Internacional",
    tratado: "Tratado de 1997",
    particularidades: "Consideraciones humanitarias especiales, cooperación en inmigración"
  },
  {
    pais: "Colombia",
    tipo: "Internacional",
    tratado: "Tratado de 1982",
    particularidades: "Cooperación contra narcotráfico, extradición con garantías"
  },
  {
    pais: "México",
    tipo: "Internacional",
    tratado: "Tratado de 1978",
    particularidades: "Extradición por vía diplomática, especial atención a derechos humanos"
  }
];

const fasesProceso = [
  {
    fase: 1,
    titulo: "Recepción de la Solicitud",
    descripcion: "Ministerio de Justicia recibe petición de extradición",
    autoridad: "Ministerio de Justicia",
    plazo: "Inmediata"
  },
  {
    fase: 2,
    titulo: "Control de Admisibilidad",
    descripcion: "Comprobación de requisitos formales y legales",
    autoridad: "Audiencia Nacional",
    plazo: "10 días"
  },
  {
    fase: 3,
    titulo: "Audiencia del Extraditado",
    descripcion: "Comparecencia judicial con asistencia letrada",
    autoridad: "Juez de extradición",
    plazo: "15 días"
  },
  {
    fase: 4,
    titulo: "Resolución Judicial",
    descripcion: "Decisión sobre concesión o denegación",
    autoridad: "Audiencia Nacional",
    plazo: "30-60 días"
  },
  {
    fase: 5,
    titulo: "Recursos y Ejecución",
    descripcion: "Posibles recursos y entrega del extraditado",
    autoridad: "Tribunal Supremo",
    plazo: "Variable"
  }
];

const relatedArticles = [
  {
    title: 'Procedimientos de Extradición en España',
    slug: 'procedimientos-extradicion-espana',
    category: 'Procedimiento Penal'
  },
  {
    title: 'Derechos del Extraditado',
    slug: 'derechos-extraditado',
    category: 'Derechos Humanos'
  },
  {
    title: 'Recursos contra Extradición',
    slug: 'recursos-contra-extradicion',
    category: 'Recursos Procesales'
  }
];

export default function TiposExtradicionPage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const breadcrumbItems = [
    { label: t.breadcrumb.blog, href: '/blog' },
    { label: 'Procedimientos de Extradición', href: '/blog/procedimientos-extradicion' },
    { label: 'Tipos de Extradición en España' }
  ];

  const tocItems = [
    { id: 'principales-tipos-de-extradicion', title: 'Principales Tipos de Extradición', level: 2 },
    { id: 'principales-paises-con-acuerdos-de-extradicion', title: 'Principales Países con Acuerdos de Extradición', level: 2 },
    { id: 'fases-del-proceso-de-extradicion', title: 'Fases del Proceso de Extradición', level: 2 },
    { id: 'requisitos-generales-para-la-extradicion', title: 'Requisitos Generales para la Extradición', level: 2 },
    { id: 'preguntas-frecuentes-sobre-tipos-de-extradicion', title: 'Preguntas Frecuentes sobre Tipos de Extradición', level: 2 },
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
                href="/blog/procedimientos-extradicion"
                className="inline-flex items-center gap-2 text-gold hover:text-white transition mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Volver al hub de Procedimientos de Extradición
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">
                  Procedimientos de Extradición
                </span>
                <div className="flex items-center gap-1 text-sm text-white/70">
                  <Clock className="h-4 w-4" />
                  13 {t.blog.minLectura}
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gold mb-6 leading-tight">
                Tipos de Extradición en España
              </h1>

              <p className="text-lg text-white/80 mb-6">
                Extradición UE vs internacional, terrorismo, corrupción.
                Requisitos, plazos y garantías en cada tipo de procedimiento.
              </p>

              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Equipo STANS Abogados
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  28 dic 2024
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
                  La extradición española se regula por la <strong>Ley Orgánica 3/2003</strong> y
                  los tratados internacionales suscritos por España. Existen diferentes tipos de
                  extradición según el país solicitante, la naturaleza del delito y los acuerdos
                  internacionales aplicables, cada uno con sus particularidades procedimentales
                  y garantías específicas.
                </p>
                <p>
                  Esta guía analiza los principales tipos de extradición que maneja España,
                  desde la extradición simplificada dentro de la Unión Europea hasta los
                  procedimientos más complejos con países terceros, incluyendo situaciones
                  especiales como extradiciones por terrorismo o corrupción.
                </p>
              </div>

              {/* Tipos de Extradición */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="principales-tipos-de-extradicion" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Principales Tipos de Extradición
                </h2>

                <div className="space-y-8">
                  {tiposExtradicion.map((tipo, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-charleston text-white rounded-2xl p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Globe className="h-6 w-6 text-gold" />
                        <h3 className="text-lg font-semibold text-gold">
                          {tipo.tipo}
                        </h3>
                      </div>

                      <p className="text-white/80 mb-4">
                        {tipo.aplicacion}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-semibold text-gold mb-2">Características:</h4>
                          <ul className="space-y-1">
                            {tipo.caracteristicas.map((caract, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                                <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                                {caract}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gold mb-2">Ventajas:</h4>
                          <ul className="space-y-1">
                            {tipo.ventajas.map((ventaja, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                                <CheckCircle className="h-3 w-3 text-blue-400 flex-shrink-0" />
                                {ventaja}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gold mb-2">Desventajas:</h4>
                          <ul className="space-y-1">
                            {tipo.desventajas.map((desventaja, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                                <AlertTriangle className="h-3 w-3 text-yellow-400 flex-shrink-0" />
                                {desventaja}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Países Principales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="principales-paises-con-acuerdos-de-extradicion" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Principales Países con Acuerdos de Extradición
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-charleston text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">País</th>
                        <th className="px-4 py-3 text-left font-semibold">Tipo</th>
                        <th className="px-4 py-3 text-left font-semibold">Tratado</th>
                        <th className="px-4 py-3 text-left font-semibold">Particularidades</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paisesPrincipales.map((pais, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-4 py-3 font-semibold text-black">
                            {pais.pais}
                          </td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              pais.tipo === 'UE' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'
                            }`}>
                              {pais.tipo}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-black/80">
                            {pais.tratado}
                          </td>
                          <td className="px-4 py-3 text-black/80 text-sm">
                            {pais.particularidades}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Fases del Proceso */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="fases-del-proceso-de-extradicion" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Fases del Proceso de Extradición
                </h2>

                <div className="space-y-6">
                  {fasesProceso.map((fase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-blue-50 border border-blue-200 rounded-lg p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                          {fase.fase}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            {fase.titulo}
                          </h3>
                          <p className="text-black/80 text-sm">
                            {fase.descripcion}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-blue-600" />
                          <span className="text-sm text-black/80">Autoridad: {fase.autoridad}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span className="text-sm text-black/80">Plazo: {fase.plazo}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Requisitos Generales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="requisitos-generales-para-la-extradicion" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Requisitos Generales para la Extradición
                </h2>

                <div className="bg-green-50 border border-green-200 rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-black">Principios Fundamentales</h3>
                      <p className="text-black/80 mt-1">
                        Requisitos que deben cumplirse en todos los tipos de extradición
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">✅ Requisitos Sustantivos</h4>
                        <ul className="text-sm text-black/80 space-y-1">
                          <li>• Delito punible en ambos países</li>
                          <li>• Pena mínima de 1 año de prisión</li>
                          <li>• No prescripción del delito</li>
                          <li>• No amnistía o indulto</li>
                          <li>• Delito no político</li>
                        </ul>
                      </div>

                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">⚖️ Garantías Procesales</h4>
                        <ul className="text-sm text-black/80 space-y-1">
                          <li>• Juicio justo en país solicitante</li>
                          <li>• No pena de muerte o tortura</li>
                          <li>• Respeto a derechos humanos</li>
                          <li>• Proceso sin dilaciones indebidas</li>
                          <li>• Posibilidad de recursos</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">📋 Requisitos Formales</h4>
                        <ul className="text-sm text-black/80 space-y-1">
                          <li>• Documentación completa del delito</li>
                          <li>• Identidad del reclamado</li>
                          <li>• Autoridad competente del solicitante</li>
                          <li>• Traducción oficial al español</li>
                          <li>• Firma y sello oficiales</li>
                        </ul>
                      </div>

                      <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">🚫 Causas de Denegación</h4>
                        <ul className="text-sm text-black/80 space-y-1">
                          <li>• Riesgo de persecución política</li>
                          <li>• Condiciones inhumanas de detención</li>
                          <li>• Pena desproporcionada</li>
                          <li>• Falta de garantías procesales</li>
                          <li>• Delito prescrito</li>
                        </ul>
                      </div>
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
                <h2 id="preguntas-frecuentes-sobre-tipos-de-extradicion" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preguntas Frecuentes sobre Tipos de Extradición
                </h2>

                <div className="space-y-6">
                  {tiposFAQ.map((faq, index) => (
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
                  <h3 className="text-lg font-semibold text-black mb-4">Normativa Española</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Ley Orgánica 3/2003</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2003-13319" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Regulación de la extradición pasiva
                      </a>
                    </li>
                    <li>
                      <strong>Ley 23/2014</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2014-5406" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Mando de detención europeo
                      </a>
                    </li>
                    <li>
                      <strong>Constitución Española</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículos 13.3 y 25
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Derecho Internacional</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Tratado de Lisboa (2007)</strong> -
                      <a href="https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:12007L/TXT" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Cooperación judicial en la UE
                      </a>
                    </li>
                    <li>
                      <strong>Convención Europea de Extradición (1957)</strong> -
                      <a href="https://www.coe.int/en/web/conventions/full-list/-/conventions/treaty/024" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Marco europeo de extradición
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Relevante</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STC 91/2000</strong> - Límites constitucionales de la extradición
                    </li>
                    <li>
                      <strong>STS 47/2018</strong> - Extradición y derechos fundamentales
                    </li>
                    <li>
                      <strong>STJUE Caso C-168/13 PPU</strong> - Mando de detención europeo
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 id="conclusion" className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  Los diferentes tipos de extradición responden a la diversidad de acuerdos
                  internacionales y situaciones específicas que maneja España. Desde la extradición
                  simplificada dentro de la Unión Europea hasta los procedimientos más complejos
                  con países terceros, cada tipo tiene sus particularidades procedimentales y garantías.
                </p>
                <p className="text-white/90 leading-relaxed">
                  La elección del tipo de extradición determina los plazos, garantías procesales
                  y posibilidades de defensa. En todos los casos, el respeto a los derechos
                  fundamentales del extraditado es una prioridad absoluta del ordenamiento jurídico español.
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
                  href={`https://wa.me/${WHATSAPP}?text=Hola, necesito información sobre un proceso de extradición`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Consulta Extradición
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
