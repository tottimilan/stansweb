'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, Scale, UserCheck } from 'lucide-react';
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
    question: "¿Tengo derecho a un abogado durante la extradición?",
    answer: "Sí, tienes derecho a asistencia letrada gratuita desde el primer momento. Si no designas abogado particular, se te asignará uno de oficio. La presencia del abogado es obligatoria en la audiencia."
  },
  {
    question: "¿Pueden extraditarme si soy ciudadano español?",
    answer: "Sí, la reforma constitucional de 1992 eliminó la prohibición absoluta de extradición de nacionales. Sin embargo, se aplican garantías adicionales y consideraciones especiales."
  },
  {
    question: "¿Qué pasa con mi familia durante la extradición?",
    answer: "Tienes derecho a comunicar con tu familia, recibir visitas en determinados casos, y solicitar medidas especiales si hay hijos menores o personas dependientes que queden en España."
  },
  {
    question: "¿Puedo trabajar durante el proceso de extradición?",
    answer: "Depende de las medidas cautelares impuestas. Con libertad provisional puedes trabajar normalmente, pero con prisión preventiva o libertad vigilada puede haber restricciones."
  },
  {
    question: "¿Tienen que respetar mi religión durante la detención?",
    answer: "Sí, tienes derecho al respeto de tus creencias religiosas. Esto incluye dieta especial, asistencia religiosa, y respeto a prácticas religiosas durante tu permanencia en dependencias policiales."
  },
  {
    question: "¿Qué ocurre si no hablo español?",
    answer: "Tienes derecho a traducción gratuita de todo el procedimiento. Se proporcionará intérprete oficial para todas las actuaciones, documentos y comunicaciones."
  },
  {
    question: "¿Pueden registrar mis comunicaciones privadas?",
    answer: "Solo con autorización judicial motivada y en casos excepcionales. Las comunicaciones con tu abogado están protegidas por secreto profesional absoluto."
  },
  {
    question: "¿Qué derechos tengo si soy menor de edad?",
    answer: "Derechos especiales: presencia obligatoria de representantes legales, consideración del interés superior del menor, prohibición de extradición a países sin garantías juveniles adecuadas."
  }
];

const derechosConstitucionales = [
  {
    derecho: "Derecho a la Libertad Personal",
    descripcion: "Protección contra privaciones arbitrarias de libertad",
    fundamento: "Artículo 17 CE",
    aplicacion: "Control judicial de la detención"
  },
  {
    derecho: "Derecho a la Tutela Judicial",
    descripcion: "Control judicial efectivo de todas las actuaciones",
    fundamento: "Artículo 24.1 CE",
    aplicacion: "Recursos contra decisiones irregulares"
  },
  {
    derecho: "Derecho a la Defensa",
    descripcion: "Asistencia letrada en todas las fases del procedimiento",
    fundamento: "Artículo 24.2 CE",
    aplicacion: "Abogado gratuito si no puede costearlo"
  },
  {
    derecho: "Derecho al Silencio",
    descripcion: "No declarar si no lo desea, sin que perjudique su defensa",
    fundamento: "Artículo 24.2 CE",
    aplicacion: "Elegir entre declarar o acogerse al silencio"
  },
  {
    derecho: "Derecho a la Presunción de Inocencia",
    descripcion: "Considerado inocente hasta prueba en contrario",
    fundamento: "Artículo 24.2 CE",
    aplicacion: "No puede presumirse culpabilidad"
  },
  {
    derecho: "Derecho a un Proceso Justo",
    descripcion: "Procedimiento respetuoso con garantías procesales",
    fundamento: "Artículo 24 CE",
    aplicacion: "Plazos, recursos y garantías procesales"
  },
];

const derechosHumanos = [
  {
    derecho: "Prohibición de Tortura",
    descripcion: "Protección absoluta contra tratos inhumanos o degradantes",
    fundamento: "Convención contra la Tortura",
    garantia: "No devolución a países con riesgo"
  },
  {
    derecho: "Derecho a la Vida Familiar",
    descripcion: "Protección de vínculos familiares durante el proceso",
    fundamento: "CEDH Artículo 8",
    garantia: "Comunicación y visitas familiares"
  },
  {
    derecho: "Respeto a la Vida Privada",
    descripcion: "Protección de la intimidad y datos personales",
    fundamento: "CEDH Artículo 8",
    garantia: "Control de registros y comunicaciones"
  },
  {
    derecho: "Libertad de Expresión",
    descripcion: "Derecho a expresarse y ser informado",
    fundamento: "CEDH Artículo 10",
    garantia: "Información del proceso y recursos"
  },
  {
    derecho: "Derecho a un Recurso Efectivo",
    descripcion: "Posibilidad real de impugnar decisiones",
    fundamento: "CEDH Artículo 13",
    garantia: "Sistema completo de recursos"
  },
  {
    derecho: "Igualdad ante la Ley",
    descripcion: "Trato igualitario sin discriminaciones",
    fundamento: "CEDH Artículo 14",
    garantia: "No discriminación por origen o condición"
  },
];

const derechosEspeciales = [
  {
    grupo: "Extranjeros",
    derechosAdicionales: ["Contacto consular inmediato", "Traducción oficial gratuita", "Información en idioma nativo", "Garantías diplomáticas"],
    consideraciones: "Convención Viena sobre Relaciones Consulares"
  },
  {
    grupo: "Menores de Edad",
    derechosAdicionales: ["Presencia de representantes legales", "Interés superior del menor", "Protección especial", "Garantías juveniles"],
    consideraciones: "Convención Derechos del Niño"
  },
  {
    grupo: "Personas con Discapacidad",
    derechosAdicionales: ["Adaptaciones razonables", "Apoyo especializado", "Comunicación accesible", "Medidas de apoyo"],
    consideraciones: "Convención Discapacidad ONU"
  },
  {
    grupo: "Víctimas de Violencia",
    derechosAdicionales: ["Protección especial", "Alejamiento de agresores", "Apoyo psicológico", "Medidas de seguridad"],
    consideraciones: "Ley Integral Violencia Género"
  },
];

const derechosSalud = [
  {
    aspecto: "Atención Médica",
    derechos: ["Acceso a médico 24h", "Medicamentos necesarios", "Tratamientos en curso", "Informes médicos"],
    garantia: "Ley 41/2002 de Autonomía del Paciente"
  },
  {
    aspecto: "Condiciones Dignas",
    derechos: ["Espacio mínimo adecuado", "Higiene personal", "Alimentación suficiente", "Descanso nocturno"],
    garantia: "Reglamento Penitenciario"
  },
  {
    aspecto: "Apoyo Psicológico",
    derechos: ["Valoración psicológica", "Apoyo emocional", "Tratamiento si necesario", "Seguimiento especializado"],
    garantia: "Derecho a la integridad moral"
  },
  {
    aspecto: "Necesidades Especiales",
    derechos: ["Dieta especial por religión", "Medicamentos específicos", "Ayudas técnicas", "Adaptaciones necesarias"],
    garantia: "Derecho a la igualdad"
  },
];

const relatedArticles = [
  {
    title: 'Tipos de Extradición en España',
    slug: 'tipos-extradicion-espana',
    category: 'Procedimiento Penal'
  },
  {
    title: 'Audiencia de Extradición en España',
    slug: 'audiencia-extradicion-espana',
    category: 'Procedimiento Penal'
  },
  {
    title: 'Recursos contra Extradición',
    slug: 'recursos-contra-extradicion',
    category: 'Recursos Procesales'
  },
];

export default function DerechosExtraditadoPage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const breadcrumbItems = [
    { label: t.breadcrumb.blog, href: '/blog' },
    { label: 'Procedimientos de Extradición', href: '/blog/procedimientos-extradicion' },
    { label: 'Derechos del Extraditado' }
  ];

  const tocItems = [
    { id: 'derechos-constitucionales-del-extraditado', title: 'Derechos Constitucionales del Extraditado', level: 2 },
    { id: 'derechos-humanos-internacionales', title: 'Derechos Humanos Internacionales', level: 2 },
    { id: 'derechos-de-grupos-vulnerables', title: 'Derechos de Grupos Vulnerables', level: 2 },
    { id: 'derechos-en-materia-de-salud-y-dignidad', title: 'Derechos en Materia de Salud y Dignidad', level: 2 },
    { id: 'derechos-durante-la-ejecucion-de-la-extradicion', title: 'Derechos durante la Ejecución de la Extradición', level: 2 },
    { id: 'preguntas-frecuentes-sobre-derechos-del-extraditado', title: 'Preguntas Frecuentes sobre Derechos del Extraditado', level: 2 },
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
                Derechos del Extraditado en España
              </h1>

              <p className="text-lg text-white/80 mb-6">
                Garantías constitucionales y derechos humanos durante procesos de extradición.
                Situaciones especiales y protección de grupos vulnerables.
              </p>

              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Equipo STANS Abogados
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  05 ene 2025
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
                  Los derechos del extraditado están plenamente protegidos por el ordenamiento jurídico español,
                  tanto a nivel constitucional como internacional. La <strong>Constitución Española</strong> establece
                  garantías irrenunciables que deben respetarse en todo el procedimiento de extradición,
                  desde la recepción de la solicitud hasta la eventual entrega al país solicitante.
                </p>
                <p>
                  Esta guía detalla los derechos constitucionales, derechos humanos internacionales,
                  y protecciones especiales para grupos vulnerables, basándose en la jurisprudencia
                  del <strong>Tribunal Constitucional</strong>, <strong>Tribunal Supremo</strong> y
                  <strong>Tribunal Europeo de Derechos Humanos</strong>.
                </p>
              </div>

              {/* Derechos Constitucionales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="derechos-constitucionales-del-extraditado" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Derechos Constitucionales del Extraditado
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {derechosConstitucionales.map((derecho, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-green-50 border border-green-200 rounded-lg p-6"
                    >
                      <h4 className="font-semibold text-black mb-2">{derecho.derecho}</h4>
                      <p className="text-black/80 text-sm mb-3">
                        {derecho.descripcion}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            {derecho.fundamento}
                          </span>
                        </div>
                        <div className="text-xs text-black/60 italic">
                          {derecho.aplicacion}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Derechos Humanos Internacionales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="derechos-humanos-internacionales" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Derechos Humanos Internacionales
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {derechosHumanos.map((derecho, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-blue-50 border border-blue-200 rounded-lg p-6"
                    >
                      <h4 className="font-semibold text-black mb-2">{derecho.derecho}</h4>
                      <p className="text-black/80 text-sm mb-3">
                        {derecho.descripcion}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {derecho.fundamento}
                          </span>
                        </div>
                        <div className="text-xs text-black/60">
                          {derecho.garantia}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Derechos de Grupos Vulnerables */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="derechos-de-grupos-vulnerables" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Derechos de Grupos Vulnerables
                </h2>

                <div className="space-y-6">
                  {derechosEspeciales.map((grupo, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-purple-50 border border-purple-200 rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-black mb-1">
                            {grupo.grupo}
                          </h3>
                          <p className="text-black/80 text-sm italic">
                            {grupo.consideraciones}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-black mb-2">Derechos adicionales:</h4>
                        <ul className="space-y-1">
                          {grupo.derechosAdicionales.map((derecho, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-black/80 text-sm">
                              <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                              {derecho}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Derechos en Materia de Salud */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="derechos-en-materia-de-salud-y-dignidad" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Derechos en Materia de Salud y Dignidad
                </h2>

                <div className="bg-red-50 border border-red-200 rounded-lg p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <UserCheck className="h-8 w-8 text-red-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-black">Protección Integral de la Dignidad</h3>
                      <p className="text-black/80 mt-1">
                        Derechos básicos que garantizan el respeto a la persona durante el proceso
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {derechosSalud.map((aspecto, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white border border-red-200 rounded-lg p-6"
                      >
                        <h4 className="font-semibold text-black mb-2">{aspecto.aspecto}</h4>
                        <ul className="text-sm text-black/80 mb-3 space-y-1">
                          {aspecto.derechos.map((derecho, idx) => (
                            <li key={idx}>• {derecho}</li>
                          ))}
                        </ul>
                        <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                          {aspecto.garantia}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Derechos durante la Ejecución */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 id="derechos-durante-la-ejecucion-de-la-extradicion" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Derechos durante la Ejecución de la Extradición
                </h2>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8">
                  <div className="flex items-start gap-3 mb-6">
                    <Shield className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Garantías durante el Traslado</h3>
                      <p className="text-black/80">
                        Una vez concedida la extradición, se aplican garantías adicionales durante
                        la entrega al país solicitante para asegurar el respeto a los derechos humanos.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-3">✅ Garantías de No Devolución</h4>
                      <ul className="text-sm text-black/80 space-y-2">
                        <li>• No devolución a tercer país</li>
                        <li>• Respeto a especialidad de la extradición</li>
                        <li>• No juicio por otros delitos</li>
                        <li>• Control de condiciones de detención</li>
                        <li>• Seguimiento del proceso penal</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-3">🔒 Condiciones de Entrega</h4>
                      <ul className="text-sm text-black/80 space-y-2">
                        <li>• Traslado digno y seguro</li>
                        <li>• Presencia de autoridades españolas</li>
                        <li>• Documentación completa</li>
                        <li>• Verificación de garantías</li>
                        <li>• Posibilidad de suspensión</li>
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
                <h2 id="preguntas-frecuentes-sobre-derechos-del-extraditado" className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preguntas Frecuentes sobre Derechos del Extraditado
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
                        Título I (Derechos y Deberes Fundamentales)
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica 3/2003</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2003-13319" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Derechos del extraditado
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica 1/1979</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1979-304" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Derechos de los detenidos
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Derecho Internacional</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Convenio Europeo de Derechos Humanos</strong> -
                      <a href="https://www.echr.coe.int/Documents/Convention_SPA.pdf" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Derechos humanos en extradición
                      </a>
                    </li>
                    <li>
                      <strong>Convención contra la Tortura</strong> -
                      <a href="https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-against-torture-and-other-cruel-inhuman-or-degrading-treatment-or-punishment" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Prohibición de devolución
                      </a>
                    </li>
                    <li>
                      <strong>Pacto Internacional de Derechos Civiles y Políticos</strong> -
                      <a href="https://www.ohchr.org/sp/instruments-mechanisms/instruments/international-covenant-civil-and-political-rights" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Derechos en procesos penales
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Relevante</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STC 91/2000</strong> - Derechos constitucionales en extradición
                    </li>
                    <li>
                      <strong>STS 47/2018</strong> - Protección de derechos humanos
                    </li>
                    <li>
                      <strong>STEDH Caso Soering vs Reino Unido</strong> - Pena de muerte y extradición
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 id="conclusion" className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  Los derechos del extraditado están garantizados por un marco jurídico robusto
                  que combina protecciones constitucionales con estándares internacionales de
                  derechos humanos. España aplica criterios muy estrictos para asegurar que
                  cualquier extradición respete plenamente la dignidad y los derechos fundamentales
                  de la persona reclamada.
                </p>
                <p className="text-white/90 leading-relaxed">
                  La existencia de protecciones especiales para grupos vulnerables, junto con
                  el sistema completo de recursos y garantías procesales, asegura que el proceso
                  de extradición se desarrolle con las máximas garantías de justicia y respeto
                  a los derechos humanos, tanto durante el procedimiento como en su ejecución.
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
                  href={`https://wa.me/${WHATSAPP}?text=Hola, necesito información sobre mis derechos en un proceso de extradición`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Consulta Derechos Extradición
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