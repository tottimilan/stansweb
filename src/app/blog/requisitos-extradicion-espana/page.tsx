'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, Scale, FileCheck } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Breadcrumb from '@/components/Breadcrumb';
import TableOfContents from '@/components/TableOfContents';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const requisitosFAQ = [
  {
    question: "¿Es obligatorio que el delito sea igual en ambos países?",
    answer: "Sí, se requiere doble incriminación: el delito debe estar tipificado como tal en las legislaciones de ambos países. Sin embargo, la extradición UE no exige identidad absoluta, basta con que sea un delito análogo."
  },
  {
    question: "¿Puede denegarse la extradición por pena de muerte?",
    answer: "Sí, España tiene prohibida la pena de muerte por su Constitución (artículo 15). Si el país solicitante aplica pena capital, la extradición se deniega o se exige garantía de no aplicación."
  },
  {
    question: "¿Qué pasa si el delito ya prescribió en España?",
    answer: "Si el delito prescribió según la legislación española, la extradición puede denegarse. Sin embargo, si no prescribió en el país solicitante, puede concederse con limitaciones en la pena aplicable."
  },
  {
    question: "¿Se puede extraditar por delitos menores?",
    answer: "No, se requiere pena mínima de 1 año de prisión en el delito principal. Delitos menores o faltas administrativas no dan lugar a extradición."
  },
  {
    question: "¿Qué documentación debe aportar el país solicitante?",
    answer: "Debe aportar: orden de detención, descripción del delito, elementos probatorios, identidad del reclamado, autoridad competente, y garantías procesales. Todo traducido al español."
  },
  {
    question: "¿Puede España extraditar sin tratado internacional?",
    answer: "Sí, en casos excepcionales y con reciprocidad, España puede conceder extradición sin tratado. Sin embargo, se aplican todos los requisitos legales y se requiere autorización judicial especial."
  },
  {
    question: "¿Qué ocurre con la extradición de menores?",
    answer: "Los menores tienen protección especial. Se requiere informe del Ministerio Fiscal de Menores, consideración de su interés superior, y garantías de que serán tratados conforme a la Convención de Derechos del Niño."
  },
  {
    question: "¿Puede denegarse por razones humanitarias?",
    answer: "Sí, la Ley permite denegar extradición por razones humanitarias: riesgo de tortura, persecución política, condiciones inhumanas de detención, o discriminación por género, raza u orientación sexual."
  }
];

const requisitosSustantivos = [
  {
    requisito: "Doble Incriminación",
    descripcion: "El delito debe estar tipificado en ambas legislaciones",
    evidencia: "Artículo 2 Ley Orgánica 3/2003",
    importancia: "Fundamental"
  },
  {
    requisito: "Pena Mínima de 1 Año",
    descripcion: "La pena máxima prevista debe ser al menos 1 año de prisión",
    evidencia: "Artículo 3 Ley Orgánica 3/2003",
    importancia: "Fundamental"
  },
  {
    requisito: "No Prescripción",
    descripcion: "El delito no debe haber prescrito en el país requerido",
    evidencia: "Artículo 4 Ley Orgánica 3/2003",
    importancia: "Fundamental"
  },
  {
    requisito: "No Amnistía ni Indulto",
    descripcion: "No debe existir amnistía o indulto en ninguno de los países",
    evidencia: "Artículo 5 Ley Orgánica 3/2003",
    importancia: "Fundamental"
  },
  {
    requisito: "Delito No Político",
    descripcion: "No debe tratarse de delito político o conexo con delito político",
    evidencia: "Artículo 6 Ley Orgánica 3/2003",
    importancia: "Fundamental"
  },
  {
    requisito: "Principio de Especialidad",
    descripcion: "Solo puede juzgarse por el delito especificado en la solicitud",
    evidencia: "Artículo 21 Ley Orgánica 3/2003",
    importancia: "Fundamental"
  }
];

const requisitosFormales = [
  {
    documento: "Orden de Detención/Diligencias",
    descripcion: "Documento oficial que acredita el proceso penal",
    obligatorio: true,
    traduccion: true
  },
  {
    documento: "Descripción del Delito",
    descripcion: "Relato detallado de los hechos, calificación jurídica y pena",
    obligatorio: true,
    traduccion: true
  },
  {
    documento: "Datos del Reclamado",
    descripcion: "Identidad completa, nacionalidad, domicilio, y cualquier alias",
    obligatorio: true,
    traduccion: true
  },
  {
    documento: "Elementos de Prueba",
    descripcion: "Pruebas suficientes que justifiquen la existencia del delito",
    obligatorio: true,
    traduccion: false
  },
  {
    documento: "Autoridad Solicitante",
    descripcion: "Acreditación de que quien solicita es autoridad judicial competente",
    obligatorio: true,
    traduccion: true
  },
  {
    documento: "Garantías Procesales",
    descripcion: "Compromiso de respeto a derechos humanos y proceso justo",
    obligatorio: true,
    traduccion: true
  }
];

const excepcionesDenegacion = [
  {
    causa: "Persecución Política",
    descripcion: "Si el delito tiene motivación política o ideológica",
    fundamento: "Artículo 6 Ley 3/2003",
    aplicacion: "Delitos políticos o conexos"
  },
  {
    causa: "Pena de Muerte",
    descripcion: "Si el país solicitante aplica pena capital",
    fundamento: "Constitución Española art. 15",
    aplicacion: "Garantía exigida obligatoria"
  },
  {
    causa: "Tortura o Tratos Inhumanos",
    descripcion: "Riesgo fundado de sufrir torturas o tratos degradantes",
    fundamento: "Convención contra la Tortura",
    aplicacion: "Evaluación caso por caso"
  },
  {
    causa: "Proceso Injusto",
    descripcion: "Falta de garantías procesales en el país solicitante",
    fundamento: "Constitución Española art. 24",
    aplicacion: "Juicio justo requerido"
  },
  {
    causa: "Prescripción en España",
    descripcion: "Si el delito prescribió según legislación española",
    fundamento: "Código Penal art. 130 y ss.",
    aplicacion: "Aplicación ley española"
  },
  {
    causa: "Falta de Cooperación",
    descripcion: "Si España no recibió cooperación judicial previa",
    fundamento: "Principio de reciprocidad",
    aplicacion: "Delitos graves especialmente"
  }
];

const comparacionUEInternacional = [
  {
    aspecto: "Doble Incriminación",
    ue: "No requerida (confianza mutua)",
    internacional: "Obligatoria y estricta",
    diferencia: "Simplificación UE"
  },
  {
    aspecto: "Plazos",
    ue: "30-60 días máximo",
    internacional: "6-18 meses aproximadamente",
    diferencia: "Mucho más rápido en UE"
  },
  {
    aspecto: "Control Judicial",
    ue: "Mínimo (confianza institucional)",
    internacional: "Exhaustivo y detallado",
    diferencia: "Más garantías fuera UE"
  },
  {
    aspecto: "Recursos",
    ue: "Limitados por confianza mutua",
    internacional: "Múltiples instancias posibles",
    diferencia: "Más recursos fuera UE"
  },
  {
    aspecto: "Garantías Exigidas",
    ue: "Mínimas (sistema armonizado)",
    internacional: "Detalladas y específicas",
    diferencia: "Menos trámites en UE"
  },
  {
    aspecto: "Posibilidad de Condiciones",
    ue: "Limitada por armonización",
    internacional: "Amplia posibilidad",
    diferencia: "Más flexibilidad fuera UE"
  }
];

const relatedArticles = [
  {
    title: 'Tipos de Extradición en España',
    slug: 'tipos-extradicion-espana',
    category: 'Procedimiento Penal'
  },
  {
    title: 'Procedimientos de Extradición en España',
    slug: 'procedimientos-extradicion-espana',
    category: 'Procedimiento Penal'
  },
  {
    title: 'Recursos contra Extradición',
    slug: 'recursos-contra-extradicion',
    category: 'Recursos Procesales'
  }
];

export default function RequisitosExtradicionPage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const breadcrumbItems = [
    { label: t.breadcrumb.blog, href: '/blog' },
    { label: 'Procedimientos de Extradición', href: '/blog/procedimientos-extradicion' },
    { label: 'Requisitos de Extradición en España' }
  ];

  const tocItems = [
    { id: 'requisitos-sustantivos-obligatorios', title: 'Requisitos Sustantivos Obligatorios', level: 2 },
    { id: 'requisitos-formales-de-la-solicitud', title: 'Requisitos Formales de la Solicitud', level: 2 },
    { id: 'causas-de-denegacion-de-la-extradicion', title: 'Causas de Denegación de la Extradición', level: 2 },
    { id: 'diferencias-ue-vs-extradicion-internacional', title: 'Diferencias UE vs Extradición Internacional', level: 2 },
    { id: 'protocolo-de-verificacion-de-requisitos', title: 'Protocolo de Verificación de Requisitos', level: 2 },
    { id: 'preguntas-frecuentes-sobre-requisitos-de-extradicion', title: 'Preguntas Frecuentes sobre Requisitos de Extradición', level: 2 },
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
                  14 {t.blog.minLectura}
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gold mb-6 leading-tight">
                Requisitos para la Extradición en España
              </h1>

              <p className="text-lg text-white/80 mb-6">
                Requisitos sustantivos y formales, causas de denegación.
                Diferencias entre extradición UE e internacional.
              </p>

              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Equipo STANS Abogados
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  30 dic 2024
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
                  La extradición española está sujeta a requisitos estrictos que garantizan el respeto
                  a los derechos fundamentales del reclamado y la legalidad del procedimiento. La
                  <strong>Ley Orgánica 3/2003</strong> establece los requisitos sustantivos y formales
                  que deben cumplirse para que una solicitud de extradición sea admitida y concedida.
                </p>
                <p>
                  Esta guía detalla todos los requisitos necesarios, las diferencias entre extradición
                  UE e internacional, y las causas que pueden llevar a la denegación de la extradición,
                  basándose en la jurisprudencia del <strong>Tribunal Supremo</strong> y <strong>Tribunal Constitucional</strong>.
                </p>
              </div>

              {/* Requisitos Sustantivos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Requisitos Sustantivos Obligatorios
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {requisitosSustantivos.map((requisito, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-green-50 border border-green-200 rounded-lg p-6"
                    >
                      <h4 className="font-semibold text-black mb-2">{requisito.requisito}</h4>
                      <p className="text-black/80 text-sm mb-3">
                        {requisito.descripcion}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {requisito.evidencia}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          requisito.importancia === 'Fundamental' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {requisito.importancia}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Requisitos Formales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Requisitos Formales de la Solicitud
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-charleston text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Documento</th>
                        <th className="px-4 py-3 text-left font-semibold">Descripción</th>
                        <th className="px-4 py-3 text-center font-semibold">Obligatorio</th>
                        <th className="px-4 py-3 text-center font-semibold">Traducción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {requisitosFormales.map((documento, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-4 py-3 font-semibold text-black">
                            {documento.documento}
                          </td>
                          <td className="px-4 py-3 text-black/80 text-sm">
                            {documento.descripcion}
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              documento.obligatorio ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {documento.obligatorio ? 'Sí' : 'No'}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              documento.traduccion ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {documento.traduccion ? 'Sí' : 'No'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Excepciones de Denegación */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Causas de Denegación de la Extradición
                </h2>

                <div className="space-y-6">
                  {excepcionesDenegacion.map((causa, index) => (
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
                            {causa.causa}
                          </h3>
                          <p className="text-black/80 text-sm">
                            {causa.descripcion}
                          </p>
                        </div>
                        <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                          {causa.fundamento}
                        </span>
                      </div>

                      <div className="bg-white/70 p-3 rounded">
                        <p className="text-black/80 text-sm">
                          <strong>Aplicación:</strong> {causa.aplicacion}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Comparación UE vs Internacional */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Diferencias UE vs Extradición Internacional
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-charleston text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Aspecto</th>
                        <th className="px-4 py-3 text-left font-semibold">Extradición UE</th>
                        <th className="px-4 py-3 text-left font-semibold">Extradición Internacional</th>
                        <th className="px-4 py-3 text-left font-semibold">Diferencia</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparacionUEInternacional.map((aspecto, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-4 py-3 font-semibold text-black">
                            {aspecto.aspecto}
                          </td>
                          <td className="px-4 py-3 text-black/80 text-sm">
                            {aspecto.ue}
                          </td>
                          <td className="px-4 py-3 text-black/80 text-sm">
                            {aspecto.internacional}
                          </td>
                          <td className="px-4 py-3 text-black/80 text-sm font-medium">
                            {aspecto.diferencia}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Protocolo de Verificación */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Protocolo de Verificación de Requisitos
                </h2>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-8">
                  <div className="flex items-start gap-3 mb-6">
                    <FileCheck className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Verificación Sistemática</h3>
                      <p className="text-black/80">
                        El Ministerio de Justicia y Audiencia Nacional verifican cada requisito
                        de manera exhaustiva antes de admitir la solicitud a trámite.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-3">✅ Verificaciones Positivas</h4>
                      <ul className="text-sm text-black/80 space-y-2">
                        <li>• Existencia de tratado internacional</li>
                        <li>• Competencia de autoridad solicitante</li>
                        <li>• Calidad de perseguido (no refugiado político)</li>
                        <li>• Delito punible en España</li>
                        <li>• Pena adecuada (mínimo 1 año)</li>
                        <li>• No prescripción del delito</li>
                        <li>• Documentación completa y correcta</li>
                        <li>• Traducciones oficiales completas</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-3">❌ Verificaciones Negativas</h4>
                      <ul className="text-sm text-black/80 space-y-2">
                        <li>• No delito político o conexo</li>
                        <li>• No pena de muerte prevista</li>
                        <li>• No riesgo de tortura o tratos inhumanos</li>
                        <li>• No discriminación por motivos políticos</li>
                        <li>• No persecución por raza, religión u opinión</li>
                        <li>• No condiciones inhumanas de detención</li>
                        <li>• No dilaciones indebidas en el proceso</li>
                        <li>• No vulneración de derechos fundamentales</li>
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
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preguntas Frecuentes sobre Requisitos de Extradición
                </h2>

                <div className="space-y-6">
                  {requisitosFAQ.map((faq, index) => (
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
                  <h3 className="text-lg font-semibold text-black mb-4">Normativa Española</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Ley Orgánica 3/2003</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2003-13319" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Requisitos sustantivos y formales
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
                        Artículos 13.3, 15, 17 y 24
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Derecho Internacional</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Convención Europea de Extradición (1957)</strong> -
                      <a href="https://www.coe.int/en/web/conventions/full-list/-/conventions/treaty/024" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Requisitos tradicionales de extradición
                      </a>
                    </li>
                    <li>
                      <strong>Convención contra la Tortura (1984)</strong> -
                      <a href="https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-against-torture-and-other-cruel-inhuman-or-degrading-treatment-or-punishment" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Prohibición de torturas y tratos inhumanos
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Relevante</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STC 91/2000</strong> - Límites constitucionales de la extradición
                    </li>
                    <li>
                      <strong>STS 47/2018</strong> - Requisitos formales de la solicitud
                    </li>
                    <li>
                      <strong>STJUE Caso Melloni</strong> - Confianza mutua en extradición UE
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  Los requisitos para la extradición española buscan equilibrar la cooperación
                  internacional en la lucha contra el delito con la protección de los derechos
                  fundamentales del reclamado. Tanto los requisitos sustantivos como los formales
                  garantizan que solo se concedan extradiciones legalmente fundadas y respetuosas
                  con los derechos humanos.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Las diferencias entre extradición UE e internacional reflejan el grado de confianza
                  institucional entre países miembros, pero en todos los casos se mantienen garantías
                  básicas de protección contra vulneraciones de derechos fundamentales. Una defensa
                  especializada puede identificar las mejores estrategias para impugnar requisitos
                  defectuosos o acreditar causas de denegación.
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
                  href={`https://wa.me/${WHATSAPP}?text=Hola, necesito asesoramiento sobre requisitos de extradición`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Consulta Requisitos Extradición
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
