'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, Scale, Heart, Stethoscope } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Breadcrumb from '@/components/Breadcrumb';
import TableOfContents from '@/components/TableOfContents';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const torturasFAQ = [
  {
    question: "¿Qué se considera tortura según la legislación española?",
    answer: "La tortura se define como cualquier acto por el cual se inflige intencionalmente a una persona dolores o sufrimientos graves, ya sean físicos o mentales, con el fin de obtener información, confesión, castigo, intimidación o discriminación (Ley Orgánica 1/2014)."
  },
  {
    question: "¿Cuál es la pena por cometer torturas?",
    answer: "Las torturas están castigadas con penas de 2 a 8 años de prisión (artículo 174 CP). Si resultan lesiones graves, la pena aumenta a 4-10 años, y si causan la muerte, a 8-12 años. Nunca prescriben y son imprescriptibles."
  },
  {
    question: "¿Qué hacer si sufro tratos degradantes durante la detención?",
    answer: "Denuncia inmediatamente, solicita asistencia médica forense, informa a tu abogado, documenta todo (fotos, testigos), y solicita cambio de centro de detención. Cualquier maltrato debe ser denunciado ante la Fiscalía de Derechos Humanos."
  },
  {
    question: "¿Puede un médico policial examinarme si sospecho torturas?",
    answer: "No, debes solicitar un médico forense independiente. El médico policial puede ser recusado por falta de imparcialidad. Tienes derecho a que un forense independiente examine cualquier lesión o sospecha de maltrato."
  },
  {
    question: "¿Qué ocurre si confieso bajo torturas?",
    answer: "Cualquier confesión obtenida bajo torturas o tratos inhumanos es nula de pleno derecho (artículo 293 LECrim). No puede utilizarse como prueba y anula todo el procedimiento penal."
  },
  {
    question: "¿Puedo demandar al Estado si sufro torturas?",
    answer: "Sí, puedes exigir responsabilidad patrimonial del Estado por vulneración de derechos fundamentales. La indemnización incluye daños morales, físicos y psicológicos, además de intereses y costas procesales."
  },
  {
    question: "¿Qué es la incomunicación y cuándo está permitida?",
    answer: "La incomunicación es el aislamiento total, permitida solo por orden judicial motivada y por tiempo limitado (máximo 5 días). Cualquier incomunicación sin orden judicial o excesivamente prolongada constituye trato inhumano."
  },
  {
    question: "¿Protege la Constitución contra todo tipo de maltrato?",
    answer: "Sí, el artículo 15 de la Constitución prohíbe expresamente las penas o tratos inhumanos o degradantes. Esta prohibición es absoluta e irrenunciable, aplicable a todas las autoridades públicas en cualquier circunstancia."
  }
];

const tiposMaltrato = [
  {
    tipo: "Tortura Física",
    descripcion: "Infligir dolor o sufrimiento físico intenso",
    ejemplos: ["Golpes", "Posturas forzadas", "Descargas eléctricas", "Quemaduras"],
    consecuencia: "Delito de torturas (2-8 años)"
  },
  {
    tipo: "Tortura Psicológica",
    descripcion: "Causar sufrimiento mental grave",
    ejemplos: ["Amenazas a familiares", "Aislamiento prolongado", "Manipulación mental", "Coacciones"],
    consecuencia: "Delito de torturas (2-8 años)"
  },
  {
    tipo: "Tratos Inhumanos",
    descripcion: "Condiciones que causan sufrimiento evitable",
    ejemplos: ["Hacinamiento extremo", "Falta de higiene", "Temperaturas extremas", "Falta de alimentación"],
    consecuencia: "Responsabilidad administrativa"
  },
  {
    tipo: "Tratos Degradantes",
    descripcion: "Humillación y pérdida de dignidad humana",
    ejemplos: ["Insultos racistas", "Registro vejatorio", "Exposición pública", "Desprecio sistemático"],
    consecuencia: "Responsabilidad disciplinaria"
  },
  {
    tipo: "Incomunicación Ilegal",
    descripcion: "Aislamiento sin autorización judicial",
    ejemplos: ["Sin contacto familiar", "Sin abogado", "Sin información", "Aislamiento prolongado"],
    consecuencia: "Delito de detención ilegal"
  },
  {
    tipo: "Negación de Atención Médica",
    descripcion: "Denegar asistencia sanitaria necesaria",
    ejemplos: ["Ignorar dolencias", "Retrasar tratamientos", "Negar medicamentos", "Falta de seguimiento"],
    consecuencia: "Delito de omisión del deber de socorro"
  }
];

const garantiasProteccion = [
  {
    garantia: "Examen Médico Forense",
    descripcion: "Evaluación independiente de lesiones",
    procedimiento: "Solicitar médico forense inmediatamente",
    evidencia: "Protocolo de Estambul"
  },
  {
    garantia: "Documentación Fotográfica",
    descripcion: "Registro visual de lesiones y maltratos",
    procedimiento: "Fotografiar lesiones con fecha y testigos",
    evidencia: "Prueba pericial médica"
  },
  {
    garantia: "Testigos Presenciales",
    descripcion: "Declaraciones de personas que presenciaron los hechos",
    procedimiento: "Identificar y localizar testigos inmediatamente",
    evidencia: "Testifical en procedimiento penal"
  },
  {
    garantia: "Informe Psicológico",
    descripcion: "Evaluación de daño psicológico causado",
    procedimiento: "Solicitar psicólogo forense especializado",
    evidencia: "Pericial psicológica"
  },
  {
    garantia: "Registro Policial",
    descripcion: "Documentación oficial de la detención",
    procedimiento: "Exigir acta detallada de lo ocurrido",
    evidencia: "Documento administrativo"
  },
  {
    garantia: "Asistencia Jurídica Especializada",
    descripcion: "Abogado experto en derechos humanos",
    procedimiento: "Designar abogado especializado en torturas",
    evidencia: "Defensa técnica cualificada"
  }
];

const protocoloDeteccion = [
  {
    paso: 1,
    titulo: "Observación Inicial",
    descripcion: "Detectar signos evidentes de maltrato",
    indicadores: ["Lesiones visibles", "Comportamiento alterado", "Dolor manifiesto", "Miedo excesivo"],
    accion: "Informar inmediatamente"
  },
  {
    paso: 2,
    titulo: "Solicitud de Ayuda",
    descripcion: "Pedir asistencia médica y jurídica",
    indicadores: ["Dolor intenso", "Sangrado", "Traumatismos", "Alteraciones psicológicas"],
    accion: "Exigir médico forense"
  },
  {
    paso: 3,
    titulo: "Documentación",
    descripcion: "Registrar todo lo ocurrido",
    indicadores: ["Fotografías", "Testigos", "Declaraciones", "Actas policiales"],
    accion: "Documentar exhaustivamente"
  },
  {
    paso: 4,
    titulo: "Denuncia Formal",
    descripcion: "Presentar denuncia ante autoridades competentes",
    indicadores: ["Fiscalía", "Juzgado", "Defensor del Pueblo", "ONG de derechos humanos"],
    accion: "Formalizar denuncia"
  },
  {
    paso: 5,
    titulo: "Seguimiento Médico",
    descripcion: "Continuar atención sanitaria especializada",
    indicadores: ["Traumas físicos", "Daño psicológico", "Secuelas", "Rehabilitación"],
    accion: "Tratamiento integral"
  },
  {
    paso: 6,
    titulo: "Apoyo Psicológico",
    descripcion: "Recuperación emocional y mental",
    indicadores: ["Estrés postraumático", "Ansiedad", "Depresión", "Trastornos del sueño"],
    accion: "Terapia especializada"
  }
];

const organizacionesApoyo = [
  {
    organizacion: "Amnistía Internacional",
    especialidad: "Derechos humanos y torturas",
    contacto: "www.amnesty.org",
    servicios: "Denuncias, informes, apoyo legal"
  },
  {
    organizacion: "Human Rights Watch",
    especialidad: "Investigación de maltratos",
    contacto: "www.hrw.org",
    servicios: "Reportes, presión internacional"
  },
  {
    organizacion: "Asociación Libre de Abogados",
    especialidad: "Defensa de víctimas de torturas",
    contacto: "www.alaespana.org",
    servicios: "Asistencia jurídica gratuita"
  },
  {
    organizacion: "Médicos del Mundo",
    especialidad: "Atención médica a víctimas",
    contacto: "www.medicosdelmundo.org",
    servicios: "Asistencia sanitaria, informes médicos"
  },
  {
    organizacion: "Federación Estatal de Asociaciones de Inmigrantes",
    especialidad: "Víctimas inmigrantes",
    contacto: "www.acoge.org",
    servicios: "Apoyo a extranjeros víctimas de torturas"
  },
  {
    organizacion: "Centro de Asistencia a Víctimas de Torturas",
    especialidad: "Rehabilitación integral",
    contacto: "www.cavt.org",
    servicios: "Tratamiento médico y psicológico"
  }
];

const relatedArticles = [
  {
    title: 'Derechos Constitucionales del Detenido',
    slug: 'derechos-constitucionales-detenido',
    category: 'Derechos Fundamentales'
  },
  {
    title: 'Derecho a la Asistencia Letrada del Detenido',
    slug: 'derecho-asistencia-letrada-detenido',
    category: 'Asistencia Legal'
  },
  {
    title: 'Primeros Pasos en Comisaría',
    slug: 'primeros-pasos-comisaria',
    category: 'Procedimiento Policial'
  }
];

export default function ProteccionTorturasPage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const breadcrumbItems = [
    { label: t.breadcrumb.blog, href: '/blog' },
    { label: 'Derechos de Detenidos', href: '/blog/derechos-detenidos' },
    { label: 'Protección contra Torturas y Tratos Inhumanos' }
  ];

  const tocItems = [
    { id: 'tipos-de-maltrato-prohibidos', title: 'Tipos de Maltrato Prohibidos', level: 2 },
    { id: 'garantias-de-proteccion-y-deteccion', title: 'Garantías de Protección y Detección', level: 2 },
    { id: 'protocolo-de-deteccion-y-denuncia', title: 'Protocolo de Detección y Denuncia', level: 2 },
    { id: 'organizaciones-de-apoyo-a-victimas', title: 'Organizaciones de Apoyo a Víctimas', level: 2 },
    { id: 'derechos-a-la-reparacion-integral', title: 'Derechos a la Reparación Integral', level: 2 },
    { id: 'preguntas-frecuentes-sobre-torturas-y-maltratos', title: 'Preguntas Frecuentes sobre Torturas y Maltratos', level: 2 },
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
        <section className="bg-gradient-to-br from-red-900 to-charleston text-offwhite py-12">
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
                Volver al hub de Derechos de Detenidos
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">
                  Derechos de Detenidos
                </span>
                <div className="flex items-center gap-1 text-sm text-white/70">
                  <Clock className="h-4 w-4" />
                  16 {t.blog.minLectura}
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gold mb-6 leading-tight">
                Protección contra Torturas y Tratos Inhumanos
              </h1>

              <p className="text-lg text-white/80 mb-6">
                Prohibición absoluta de torturas. Detección, denuncia y reparación
                de maltratos durante la detención. Protocolos de protección.
              </p>

              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Equipo STANS Abogados
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  09 ene 2025
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
                  La <strong>prohibición de torturas y tratos inhumanos</strong> es una de las conquistas
                  más importantes de los derechos humanos modernos. Reconocida como derecho fundamental
                  en el <strong>artículo 15 de la Constitución Española</strong> y en tratados internacionales
                  como la <strong>Convención contra la Tortura</strong>, esta prohibición es absoluta e
                  imprescriptible, aplicable en cualquier circunstancia y contra cualquier autoridad.
                </p>
                <p>
                  Esta guía exhaustiva explica cómo detectar maltratos, qué hacer si sufres torturas,
                  los protocolos de protección existentes, y cómo obtener reparación integral por los
                  daños sufridos, basándose en la <strong>Ley Orgánica 1/2014</strong> contra la tortura
                  y la jurisprudencia del <strong>Tribunal Europeo de Derechos Humanos</strong>.
                </p>
              </div>

              {/* Tipos de Maltrato */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="tipos-de-maltrato-prohibidos" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Tipos de Maltrato Prohibidos
                </h2>

                <div className="space-y-6">
                  {tiposMaltrato.map((maltrato, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`border-l-4 p-6 rounded-lg ${
                        maltrato.tipo.includes('Tortura') ? 'border-red-500 bg-red-50' :
                        maltrato.tipo.includes('Inhumanos') ? 'border-orange-500 bg-orange-50' :
                        maltrato.tipo.includes('Degradantes') ? 'border-yellow-500 bg-yellow-50' :
                        'border-purple-500 bg-purple-50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-black mb-1">
                            {maltrato.tipo}
                          </h3>
                          <p className="text-black/80 text-sm">
                            {maltrato.descripcion}
                          </p>
                        </div>
                        <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                          {maltrato.consecuencia}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-semibold text-black mb-2">Ejemplos:</h4>
                        <ul className="space-y-1">
                          {maltrato.ejemplos.map((ejemplo, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-black/80 text-sm">
                              <AlertTriangle className="h-3 w-3 text-red-600 flex-shrink-0" />
                              {ejemplo}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Garantías de Protección */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="garantias-de-proteccion-y-deteccion" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Garantías de Protección y Detección
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {garantiasProteccion.map((garantia, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-green-50 border border-green-200 rounded-lg p-6"
                    >
                      <h4 className="font-semibold text-black mb-2">{garantia.garantia}</h4>
                      <p className="text-black/80 text-sm mb-3">
                        {garantia.descripcion}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            {garantia.procedimiento}
                          </span>
                        </div>
                        <div className="text-xs text-black/60">
                          Evidencia: {garantia.evidencia}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Protocolo de Detección */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="protocolo-de-deteccion-y-denuncia" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Protocolo de Detección y Denuncia
                </h2>

                <div className="space-y-6">
                  {protocoloDeteccion.map((paso, index) => (
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
                          {paso.paso}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-black">
                            {paso.titulo}
                          </h3>
                          <p className="text-black/80 text-sm">
                            {paso.descripcion}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-black mb-2">Indicadores de alerta:</h4>
                          <ul className="text-sm text-black/80 space-y-1">
                            {paso.indicadores.map((indicador, idx) => (
                              <li key={idx}>• {indicador}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-2">Acción inmediata:</h4>
                          <div className="text-sm text-black/80">
                            {paso.accion}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Organizaciones de Apoyo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="organizaciones-de-apoyo-a-victimas" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Organizaciones de Apoyo a Víctimas
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-charleston text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Organización</th>
                        <th className="px-4 py-3 text-left font-semibold">Especialidad</th>
                        <th className="px-4 py-3 text-left font-semibold">Contacto</th>
                        <th className="px-4 py-3 text-left font-semibold">Servicios</th>
                      </tr>
                    </thead>
                    <tbody>
                      {organizacionesApoyo.map((org, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-4 py-3 font-semibold text-black">
                            {org.organizacion}
                          </td>
                          <td className="px-4 py-3 text-black/80 text-sm">
                            {org.especialidad}
                          </td>
                          <td className="px-4 py-3 text-black/80 text-sm">
                            <a href={`https://${org.contacto}`} className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">
                              {org.contacto}
                            </a>
                          </td>
                          <td className="px-4 py-3 text-black/80 text-sm">
                            {org.servicios}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Derechos a la Reparación */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="derechos-a-la-reparacion-integral" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Derechos a la Reparación Integral
                </h2>

                <div className="bg-purple-50 border-l-4 border-purple-600 p-8">
                  <div className="flex items-start gap-3 mb-6">
                    <Heart className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Reparación por Torturas</h3>
                      <p className="text-black/80">
                        Las víctimas de torturas tienen derecho a una reparación integral que incluye
                        aspectos médicos, psicológicos, económicos y sociales, según establece la
                        Ley 1/2014 y los estándares internacionales.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-3">Reparación Médica</h4>
                      <ul className="text-sm text-black/80 space-y-2">
                        <li>• Tratamiento médico completo</li>
                        <li>• Rehabilitación física</li>
                        <li>• Apoyo psicológico especializado</li>
                        <li>• Medicamentos y terapias</li>
                        <li>• Seguimiento médico continuado</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-3">Reparación Jurídica</h4>
                      <ul className="text-sm text-black/80 space-y-2">
                        <li>• Indemnización por daños</li>
                        <li>• Responsabilidad penal de autores</li>
                        <li>• Nulidad de procedimientos</li>
                        <li>• Restitución de derechos</li>
                        <li>• Protección contra represalias</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-black mb-2">Reparación Psicosocial</h4>
                    <ul className="text-sm text-black/80 space-y-1">
                      <li>• Apoyo familiar y social</li>
                      <li>• Reintegración comunitaria</li>
                      <li>• Protección contra estigmatización</li>
                      <li>• Medidas de no repetición</li>
                      <li>• Reconocimiento público del daño</li>
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
                <h2 id="preguntas-frecuentes-sobre-torturas-y-maltratos" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preguntas Frecuentes sobre Torturas y Maltratos
                </h2>

                <div className="space-y-6">
                  {torturasFAQ.map((faq, index) => (
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
                      <strong>Constitución Española (1978)</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículo 15 (prohibición de torturas)
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica 1/2014</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2014-132" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Prevención y prohibición de la tortura
                      </a>
                    </li>
                    <li>
                      <strong>Código Penal</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1995-25444" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículos 174-177 (delitos de torturas)
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Derecho Internacional</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Convención contra la Tortura (1984)</strong> -
                      <a href="https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-against-torture-and-other-cruel-inhuman-or-degrading-treatment-or-punishment" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Ratificada por España en 1987
                      </a>
                    </li>
                    <li>
                      <strong>Protocolo de Estambul (2001)</strong> -
                      <a href="https://www.ohchr.org/en/instruments-mechanisms/instruments/istanbul-protocol-manual-effective-investigation-and-documentation-torture-and-other-cruel-inhuman-or-degrading-treatment-or-punishment" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Manual para investigación de torturas
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Relevante</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STC 114/2017</strong> - Límites constitucionales contra torturas
                    </li>
                    <li>
                      <strong>STS 47/2018</strong> - Delitos de torturas en comisaría
                    </li>
                    <li>
                      <strong>STEDH Caso Selmouni vs Francia</strong> - Umbral de gravedad en tratos inhumanos
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 id="conclusion" className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  La protección contra torturas y tratos inhumanos es uno de los pilares fundamentales
                  del Estado de Derecho y la democracia española. La prohibición absoluta de cualquier
                  forma de maltrato, ya sea físico o psicológico, constituye una conquista irreversible
                  de los derechos humanos que debe ser defendida activamente por todos los ciudadanos.
                </p>
                <p className="text-white/90 leading-relaxed">
                  La detección precoz, la documentación exhaustiva y la denuncia inmediata son las
                  mejores armas contra los maltratos. Cualquier vulneración debe ser combatida con
                  todos los recursos legales disponibles, incluyendo la cooperación internacional
                  cuando sea necesaria. En STANS Abogados defendemos activamente los derechos
                  humanos y contamos con experiencia especializada en casos de torturas y maltratos.
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
                  href={`https://wa.me/${WHATSAPP}?text=Hola, he sufrido maltratos durante la detención y necesito ayuda inmediata`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Ayuda contra Torturas
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