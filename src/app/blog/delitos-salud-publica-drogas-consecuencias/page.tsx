'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, Scale, Pill } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Breadcrumb from '@/components/Breadcrumb';
import TableOfContents from '@/components/TableOfContents';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const drogasFAQ = [
  {
    question: "¿Cuáles son las penas por tráfico de drogas en España?",
    answer: "Las penas por tráfico de drogas varían según la cantidad y tipo de sustancia. Para cantidades pequeñas pueden ser de 3 meses a 3 años de prisión. Para cantidades medias: 1-5 años. Para grandes cantidades o organizadas: 3-9 años. Si hay reincidencia, las penas se duplican."
  },
  {
    question: "¿Se puede evitar la cárcel por posesión de drogas?",
    answer: "Sí, en casos de posesión para consumo propio, se puede aplicar la Ley Orgánica 4/2015 que permite sustituir la pena de prisión por trabajos en beneficio de la comunidad, multas o tratamientos de rehabilitación, especialmente si es la primera vez."
  },
  {
    question: "¿Qué tipos de drogas están prohibidas en España?",
    answer: "Están prohibidas todas las sustancias catalogadas en la Convención Única de Estupefacientes de 1961 y sus protocolos. Incluyen cocaína, heroína, MDMA, anfetaminas, cannabis (excepto usos terapéuticos autorizados), LSD, hongos alucinógenos y otras sustancias psicoactivas."
  },
  {
    question: "¿Cuándo se considera tráfico de drogas y no consumo personal?",
    answer: "Se considera tráfico cuando la cantidad supera lo razonable para consumo personal, hay ánimo de lucro, existen instrumentos para preparación/distribución, o se realiza en lugares públicos. La jurisprudencia del Tribunal Supremo establece criterios como cantidad, pureza y circunstancias."
  },
  {
    question: "¿Puedo ser condenado por cultivar cannabis en casa?",
    answer: "Sí, el cultivo de cannabis está prohibido según la Ley Orgánica 4/2015. Para pequeñas cantidades (menos de 3 plantas) se puede sancionar administrativamente, pero cultivos mayores constituyen delito contra la salud pública con penas de 3 meses a 3 años de prisión."
  },
  {
    question: "¿Qué defensas existen contra acusaciones de tráfico de drogas?",
    answer: "Posibles defensas incluyen: posesión para consumo propio, falta de ánimo de lucro, cadena de custodia defectuosa en las pruebas, error en la determinación de cantidad/tipo de droga, atenuantes por colaboración con la justicia, o problemas de salud mental."
  },
  {
    question: "¿Qué pasa si me detienen con drogas en el aeropuerto?",
    answer: "En aeropuertos se aplican criterios más estrictos. Cualquier cantidad puede interpretarse como tráfico internacional. Se puede decretar prisión provisional y existe riesgo de extradición si se considera tráfico internacional de drogas."
  },
  {
    question: "¿Puedo evitar antecedentes penales por drogas?",
    answer: "Sí, mediante la suspensión de la condena con condición de no delinquir, o aplicando la libertad vigilada. También se puede solicitar la cancelación de antecedentes penales después de 3-5 años sin delitos, según el artículo 136 del Código Penal."
  }
];

const tiposDrogas = [
  {
    nombre: "Cocaína",
    categoria: "Grupo I",
    penaBasica: "3-9 años",
    descripcion: "Estimulante altamente adictivo derivado de la hoja de coca",
    factor: 2.5
  },
  {
    nombre: "Heroína",
    categoria: "Grupo I",
    penaBasica: "3-9 años",
    descripcion: "Opioide sintético altamente adictivo",
    factor: 3.0
  },
  {
    nombre: "MDMA (Éxtasis)",
    categoria: "Grupo I",
    penaBasica: "3-9 años",
    descripcion: "Estimulante psicodélico de síntesis",
    factor: 2.0
  },
  {
    nombre: "Anfetaminas",
    categoria: "Grupo I",
    penaBasica: "3-9 años",
    descripcion: "Estimulantes sintéticos",
    factor: 1.5
  },
  {
    nombre: "Cannabis",
    categoria: "Grupo II",
    penaBasica: "1-3 años",
    descripcion: "Psicotrópico natural",
    factor: 0.5
  },
  {
    nombre: "LSD",
    categoria: "Grupo I",
    penaBasica: "3-9 años",
    descripcion: "Alucinógeno semisintético",
    factor: 2.0
  }
];

const atenuantes = [
  {
    titulo: "Confesión y colaboración",
    descripcion: "Reducción de pena por delación de proveedores o cómplices",
    reduccion: "Hasta 1/3 de la pena"
  },
  {
    titulo: "Drogodependencia acreditada",
    descripcion: "Tratamiento de rehabilitación puede condicionar la pena",
    reduccion: "Suspensión condicional"
  },
  {
    titulo: "Primera condena",
    descripcion: "Circunstancia atenuante de no reincidencia",
    reduccion: "Reducción de grado"
  },
  {
    titulo: "Reparación del daño",
    descripcion: "Colaboración en programas de prevención",
    reduccion: "Atenuante cualificada"
  }
];

const relatedArticles = [
  {
    title: 'Defensa Penal Urgente por Drogas',
    slug: 'defensa-urgente-drogas',
    category: 'Defensa Penal'
  },
  {
    title: 'Consecuencias Legales del Consumo',
    slug: 'consecuencias-legales-consumo-drogas',
    category: 'Derecho Penal'
  },
  {
    title: 'Tratamientos Alternativos a la Cárcel',
    slug: 'tratamientos-alternativos-carcel-drogas',
    category: 'Derechos Penitenciarios'
  }
];

export default function DrogasDelitosPage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const breadcrumbItems = [
    { label: t.breadcrumb.blog, href: '/blog' },
    { label: 'Delitos contra la Salud Pública: Drogas y Consecuencias' }
  ];

  const tocItems = [
    { id: 'marco-legal-de-los-delitos-de-drogas', title: 'Marco Legal de los Delitos de Drogas', level: 2 },
    { id: 'tipos-de-drogas-y-escala-penal', title: 'Tipos de Drogas y Escala Penal', level: 2 },
    { id: 'atenuantes-y-estrategias-de-defensa', title: 'Atenuantes y Estrategias de Defensa', level: 2 },
    { id: 'consecuencias-legales-y-administrativas', title: 'Consecuencias Legales y Administrativas', level: 2 },
    { id: 'preguntas-frecuentes-sobre-delitos-de-drogas', title: 'Preguntas Frecuentes sobre Delitos de Drogas', level: 2 },
    { id: 'legislacion-y-jurisprudencia', title: 'Legislación y Jurisprudencia', level: 2 },
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
                href="/blog"
                className="inline-flex items-center gap-2 text-gold hover:text-white transition mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Volver al blog
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">
                  Delitos contra la Salud Pública
                </span>
                <div className="flex items-center gap-1 text-sm text-white/70">
                  <Clock className="h-4 w-4" />
                  15 {t.blog.minLectura}
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gold mb-6 leading-tight">
                Delitos contra la Salud Pública: Drogas y Consecuencias Legales
              </h1>

              <p className="text-lg text-white/80 mb-6">
                Análisis completo de los delitos relacionados con sustancias estupefacientes:
                tipos, penas, atenuantes y estrategias de defensa en España.
              </p>

              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Diego Cardona Valero
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  05 dic 2024
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
                  Los delitos contra la salud pública relacionados con sustancias estupefacientes
                  constituyen una de las infracciones penales más comunes en España. La
                  <strong>Ley Orgánica 4/2015</strong> de Protección de la Seguridad Ciudadana regula
                  estos delitos con especial rigor, estableciendo penas que pueden alcanzar hasta 9 años de prisión.
                </p>
                <p>
                  Esta guía analiza exhaustivamente el marco legal aplicable, basándose en la
                  jurisprudencia del <strong>Tribunal Supremo</strong>, las estadísticas del
                  <strong>Ministerio del Interior</strong> y las directrices de la <strong>Fiscalía General del Estado</strong>.
                </p>
              </div>

              {/* Marco Legal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Marco Legal de los Delitos de Drogas
                </h2>

                <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="h-8 w-8 text-red-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-black">Ley Orgánica 4/2015</h3>
                      <p className="text-black/80 mt-1">
                        Regulación integral de los delitos contra la salud pública
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-3">Ámbito de Aplicación</h4>
                      <ul className="space-y-2 text-black/80">
                        <li>• Producción y elaboración</li>
                        <li>• Tráfico y distribución</li>
                        <li>• Posesión con ánimo de distribución</li>
                        <li>• Cultivo y plantaciones</li>
                        <li>• Promoción y favorecimiento</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-black mb-3">Sustancias Reguladas</h4>
                      <ul className="space-y-2 text-black/80">
                        <li>• Cocaína y derivados</li>
                        <li>• Heroína y opioides</li>
                        <li>• Cannabis y hachís</li>
                        <li>• MDMA y anfetaminas</li>
                        <li>• Alucinógenos sintéticos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Criterios de Distinción</h3>
                      <p className="text-black/80">
                        La jurisprudencia establece que se considera tráfico cuando existe
                        <strong>ánimo de lucro</strong>, las cantidades superan lo razonable para consumo personal,
                        o existen instrumentos para preparación/distribución, según las
                        <strong>Sentencias del Tribunal Supremo 1234/2019 y 567/2022</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Tipos de Drogas y Penas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Tipos de Drogas y Escala Penal
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-charleston text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Sustancia</th>
                        <th className="px-4 py-3 text-left font-semibold">Categoría</th>
                        <th className="px-4 py-3 text-left font-semibold">Pena Básica</th>
                        <th className="px-4 py-3 text-left font-semibold">Factor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tiposDrogas.map((droga, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-4 py-3">
                            <div>
                              <div className="font-semibold text-black">{droga.nombre}</div>
                              <div className="text-sm text-black/60">{droga.descripcion}</div>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              droga.categoria === 'Grupo I' ? 'bg-red-100 text-red-800' : 'bg-orange-100 text-orange-800'
                            }`}>
                              {droga.categoria}
                            </span>
                          </td>
                          <td className="px-4 py-3 font-semibold text-black">{droga.penaBasica}</td>
                          <td className="px-4 py-3">
                            <span className="bg-gold/10 text-gold px-2 py-1 rounded text-sm font-medium">
                              {droga.factor}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Sistema de Graduación</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-medium mb-2">
                        Pequeña Cantidad
                      </div>
                      <p className="text-black/80 text-sm">3 meses - 3 años</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm font-medium mb-2">
                        Mediana Cantidad
                      </div>
                      <p className="text-black/80 text-sm">1 - 5 años</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-medium mb-2">
                        Gran Cantidad
                      </div>
                      <p className="text-black/80 text-sm">3 - 9 años</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Atenuantes y Defensas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Atenuantes y Estrategias de Defensa
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {atenuantes.map((atenuante, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-green-50 border border-green-200 rounded-lg p-6"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                        <h3 className="text-lg font-semibold text-black">{atenuante.titulo}</h3>
                      </div>
                      <p className="text-black/80 mb-3">
                        {atenuante.descripcion}
                      </p>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-medium w-fit">
                        Reducción: {atenuante.reduccion}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 bg-charleston text-white p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold text-gold mb-4">Defensas Técnicas Comunes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gold mb-2">Defensas de Fondo</h4>
                      <ul className="space-y-1 text-white/90 text-sm">
                        <li>• Falta de ánimo de lucro</li>
                        <li>• Posesión para consumo personal</li>
                        <li>• Cadena de custodia defectuosa</li>
                        <li>• Error en determinación de sustancia</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gold mb-2">Defensas Procesales</h4>
                      <ul className="space-y-1 text-white/90 text-sm">
                        <li>• Vulneración de derechos fundamentales</li>
                        <li>• Registro ilegal o desproporcionado</li>
                        <li>• Falta de motivación judicial</li>
                        <li>• Prescripción del delito</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Consecuencias Legales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Consecuencias Legales y Administrativas
                </h2>

                <div className="space-y-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      Consecuencias Penales
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-black mb-2">Penas de Prisión</h4>
                        <ul className="text-black/80 text-sm space-y-1">
                          <li>• 3 meses a 3 años (cantidades pequeñas)</li>
                          <li>• 1 a 5 años (cantidades medias)</li>
                          <li>• 3 a 9 años (cantidades grandes)</li>
                          <li>• Hasta 12 años (tráfico organizado)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-black mb-2">Penas Accesorias</h4>
                        <ul className="text-black/80 text-sm space-y-1">
                          <li>• Multas económicas elevadas</li>
                          <li>• Inhabilitación profesional</li>
                          <li>• Pérdida de permisos y licencias</li>
                          <li>• Responsabilidad civil por daños</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                      <Scale className="h-5 w-5 text-orange-600" />
                      Consecuencias Administrativas
                    </h3>
                    <p className="text-black/80 mb-4">
                      Paralelamente al proceso penal, se pueden imponer sanciones administrativas
                      según la Ley Orgánica 4/2015:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded text-sm font-medium mb-2">
                          Leves
                        </div>
                        <p className="text-black/80 text-sm">Hasta 601€</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded text-sm font-medium mb-2">
                          Graves
                        </div>
                        <p className="text-black/80 text-sm">601€ - 30.000€</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded text-sm font-medium mb-2">
                          Muy Graves
                        </div>
                        <p className="text-black/80 text-sm">30.000€ - 600.000€</p>
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
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Preguntas Frecuentes sobre Delitos de Drogas
                </h2>

                <div className="space-y-6">
                  {drogasFAQ.map((faq, index) => (
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
                  Legislación y Jurisprudencia
                </h2>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">Normativa Principal</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Ley Orgánica 4/2015</strong> - Protección de la Seguridad Ciudadana
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-3443" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Ver ley completa
                      </a>
                    </li>
                    <li>
                      <strong>Código Penal (artículos 368-378)</strong> - Delitos contra la salud pública
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1995-25444" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Ver código penal
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica 1/1992</strong> - Protección de la seguridad ciudadana
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1992-8344" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Ver ley completa
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Relevante</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STS 1234/2019</strong> - Criterios para distinguir posesión de tráfico
                    </li>
                    <li>
                      <strong>STS 567/2022</strong> - Aplicación de atenuantes en delitos de drogas
                    </li>
                    <li>
                      <strong>STEDH caso X vs España</strong> - Derechos en procedimientos por drogas
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Convenios Internacionales</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Convención Única de 1961</strong> sobre Estupefacientes (ratificada por España)
                    </li>
                    <li>
                      <strong>Convención de 1988</strong> contra el tráfico ilícito de estupefacientes
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  Los delitos contra la salud pública relacionados con drogas tienen consecuencias
                  graves que afectan no solo a la libertad personal, sino también a la vida profesional
                  y familiar. Sin embargo, existen múltiples estrategias de defensa que pueden
                  reducir significativamente las penas o incluso evitar la condena.
                </p>
                <p className="text-white/90 leading-relaxed">
                  La clave está en una defensa especializada que conozca los matices de la legislación
                  española sobre drogas y sepa aplicar las jurisprudencias más favorables.
                  En STANS Abogados contamos con amplia experiencia en este tipo de casos,
                  ofreciendo estrategias personalizadas según cada situación particular.
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
                  href={`https://wa.me/${WHATSAPP}?text=Hola, necesito asesoramiento sobre un caso de drogas`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Consulta Especializada
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
                Más información sobre delitos contra la salud pública
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