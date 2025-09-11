'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, DollarSign, Banknote } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Breadcrumb from '@/components/Breadcrumb';
import TableOfContents from '@/components/TableOfContents';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const blanqueoFAQ = [
  {
    question: "¿Qué se considera blanqueo de capitales?",
    answer: "Se considera blanqueo cualquier acto que convierta, transfiera o integre en el circuito económico bienes procedentes de actividades delictivas, ocultando su origen ilícito. Incluye desde inversiones inmobiliarias hasta transferencias bancarias, según el artículo 301 del Código Penal."
  },
  {
    question: "¿Todas las cantidades de dinero sospechoso son blanqueo?",
    answer: "No, se requiere demostrar el origen delictivo del dinero y la intención de ocultar ese origen. Cantidades pequeñas o procedentes de actividades no delictivas no constituyen blanqueo, aunque puedan ser investigadas por otros delitos como fraude fiscal."
  },
  {
    question: "¿Qué pena tiene el delito de blanqueo de capitales?",
    answer: "Las penas van de 6 meses a 6 años de prisión si el delito precedente es leve, o de 2 a 12 años si es grave. Si el blanqueo supera 50.000€, la pena se incrementa en 1/3. En casos de crimen organizado, puede llegar hasta 12 años."
  },
  {
    question: "¿Puedo ser condenado por blanqueo sin saber que el dinero era ilícito?",
    answer: "No, se requiere dolo o conocimiento del origen delictivo. Sin embargo, si hay indicios de negligencia grave (por ejemplo, no investigar operaciones sospechosas), puede aplicarse responsabilidad imprudente con pena de multa."
  },
  {
    question: "¿Qué entidades están obligadas a prevenir el blanqueo?",
    answer: "Todas las entidades financieras, notarios, abogados, gestores, casinos, y empresas de servicios postales deben implementar sistemas de prevención según la Ley 10/2010. La no implementación supone sanciones administrativas graves."
  },
  {
    question: "¿Pueden embargar mis bienes por blanqueo?",
    answer: "Sí, la ley permite el embargo preventivo de bienes relacionados con el delito, incluyendo propiedades, vehículos, cuentas bancarias y participaciones societarias. El embargo puede mantenerse durante toda la instrucción del procedimiento."
  },
  {
    question: "¿El blanqueo prescribe igual que otros delitos?",
    answer: "No, el blanqueo prescribe a los 5 años si el delito precedente prescribe a más de 5 años, o al mismo tiempo que el delito precedente si este prescribe antes. Esta regla especial busca evitar la impunidad de los blanqueadores."
  },
  {
    question: "¿Puedo colaborar con la justicia para reducir mi pena?",
    answer: "Sí, la delación o colaboración puede reducir la pena hasta en 2/3 según el artículo 31 bis del Código Penal. Especialmente valioso es identificar a los autores del delito precedente o recuperar activos ocultos."
  }
];

const fasesBlanqueo = [
  {
    fase: "Colocación",
    descripcion: "Introducir el dinero ilícito en el sistema financiero",
    metodos: ["Depósitos bancarios", "Transferencias", "Compra de activos"],
    icon: DollarSign
  },
  {
    fase: "Capa",
    descripcion: "Ocultar el origen delictivo mediante operaciones complejas",
    metodos: ["Sociedades pantalla", "Paraísos fiscales", "Criptomonedas"],
    icon: Shield
  },
  {
    fase: "Integración",
    descripcion: "Reintegrar el dinero al circuito económico como aparentemente legal",
    metodos: ["Inversiones inmobiliarias", "Negocios legales", "Consumo ostentoso"],
    icon: Banknote
  }
];

const casosFamosos = [
  {
    titulo: "Caso Gürtel",
    descripcion: "Red de corrupción que blanqueó millones a través de empresas constructoras",
    cantidad: "250M€",
    condena: "Hasta 60 años"
  },
  {
    titulo: "Caso Malaya",
    descripcion: "Blanqueo de comisiones ilegales en el Ayuntamiento de Marbella",
    cantidad: "30M€",
    condena: "Hasta 19 años"
  },
  {
    titulo: "Caso Lezo",
    descripcion: "Blanqueo de fondos públicos a través de sociedades offshore",
    cantidad: "120M€",
    condena: "Hasta 17 años"
  }
];

const metodosBlanqueo = [
  {
    metodo: "Inmobiliario",
    descripcion: "Compra de propiedades con dinero negro",
    indicadores: ["Precio superior al mercado", "Pago en efectivo", "Intermediarios opacos"],
    riesgo: "Alto - fácil rastreo catastral"
  },
  {
    metodo: "Empresarial",
    descripcion: "Creación de sociedades para simular actividad económica",
    indicadores: ["Facturación falsa", "Socios testaferros", "Operaciones triangulares"],
    riesgo: "Muy alto - investigación mercantil"
  },
  {
    metodo: "Bancario",
    descripcion: "Transferencias fragmentadas por debajo del umbral de control",
    indicadores: ["Operaciones pequeñas", "Múltiples cuentas", "Países de riesgo"],
    riesgo: "Medio - controles bancarios"
  },
  {
    metodo: "Criptomonedas",
    descripcion: "Conversión a criptoactivos y vuelta al sistema tradicional",
    indicadores: ["Billeteras anónimas", "Mixers", "Exchanges sin KYC"],
    riesgo: "Bajo - difícil rastreo, pero regulado"
  }
];

const relatedArticles = [
  {
    title: 'Prevención del Blanqueo en Empresas',
    slug: 'prevencion-blanqueo-empresas',
    category: 'Compliance'
  },
  {
    title: 'Recuperación de Activos en Corrupción',
    slug: 'recuperacion-activos-corrupcion',
    category: 'Derecho Penal Económico'
  },
  {
    title: 'Delitos Fiscales y Blanqueo',
    slug: 'delitos-fiscales-blanqueo',
    category: 'Derecho Tributario'
  }
];

export default function BlanqueoCapitalesPage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const breadcrumbItems = [
    { label: t.breadcrumb.blog, href: '/blog' },
    { label: 'Blanqueo de Capitales: Cómo Detectarlo y Defenderse' }
  ];

  const tocItems = [
    { id: 'marco-legal-del-blanqueo-de-capitales', title: 'Marco Legal del Blanqueo de Capitales', level: 2 },
    { id: 'las-tres-fases-del-blanqueo-de-capitales', title: 'Las Tres Fases del Blanqueo de Capitales', level: 2 },
    { id: 'metodos-de-blanqueo-mas-comunes', title: 'Métodos de Blanqueo Más Comunes', level: 2 },
    { id: 'casos-reales-de-blanqueo-en-espana', title: 'Casos Reales de Blanqueo en España', level: 2 },
    { id: 'preguntas-frecuentes-sobre-blanqueo-de-capitales', title: 'Preguntas Frecuentes sobre Blanqueo de Capitales', level: 2 },
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
        <section className="bg-gradient-to-br from-emerald-900 to-charleston text-offwhite py-12">
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
                  Delitos Económicos
                </span>
                <div className="flex items-center gap-1 text-sm text-white/70">
                  <Clock className="h-4 w-4" />
                  16 {t.blog.minLectura}
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gold mb-6 leading-tight">
                Blanqueo de Capitales: Cómo Detectarlo y Defenderse
              </h1>

              <p className="text-lg text-white/80 mb-6">
                Guía completa sobre el delito de blanqueo: origen de fondos, técnicas de lavado,
                responsabilidad penal y estrategias de defensa en España.
              </p>

              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Rubén Vaquero Arribas
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  01 dic 2024
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
                  El blanqueo de capitales representa uno de los delitos económicos más graves
                  en el ordenamiento jurídico español. Regulado por el <strong>Código Penal</strong>
                  en sus artículos 301-304, y por la <strong>Ley 10/2010</strong> de prevención,
                  este delito busca impedir la integración de fondos procedentes de actividades ilícitas
                  en el circuito económico legal.
                </p>
                <p>
                  Esta guía analiza la evolución legislativa reciente, incluyendo la reforma de 2023
                  que endureció las penas por blanqueo relacionado con crimen organizado,
                  y las estrategias de defensa más efectivas basadas en la jurisprudencia
                  del <strong>Tribunal Supremo</strong>.
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
                  Marco Legal del Blanqueo de Capitales
                </h2>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8 mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Banknote className="h-8 w-8 text-emerald-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-black">Reforma 2023</h3>
                      <p className="text-black/80 mt-1">
                        Endurecimiento de penas para blanqueo relacionado con crimen organizado
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-3">Conductas Tipificadas</h4>
                      <ul className="space-y-2 text-black/80">
                        <li>• Conversión de bienes ilícitos</li>
                        <li>• Transferencia de activos</li>
                        <li>• Ocultación del origen delictivo</li>
                        <li>• Adquisición, posesión o uso</li>
                        <li>• Participación en operaciones</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-black mb-3">Agravantes Específicos</h4>
                      <ul className="space-y-2 text-black/80">
                        <li>• Importe superior a 50.000€</li>
                        <li>• Origen en crimen organizado</li>
                        <li>• Uso de personas jurídicas</li>
                        <li>• Reincidencia delictiva</li>
                        <li>• Posición destacada en la organización</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Principio de Autonomía</h3>
                      <p className="text-black/80">
                        El blanqueo es independiente del delito precedente. Según el
                        <strong>artículo 302 del Código Penal</strong>, se puede condenar por blanqueo
                        aunque no se condene por el delito originario, siempre que se demuestre
                        el origen delictivo de los fondos.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Fases del Blanqueo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Las Tres Fases del Blanqueo de Capitales
                </h2>

                <div className="space-y-8">
                  {fasesBlanqueo.map((fase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-charleston text-white rounded-2xl p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <fase.icon className="h-8 w-8 text-gold" />
                        <h3 className="text-xl font-semibold text-gold">
                          {fase.fase}
                        </h3>
                      </div>

                      <p className="text-white/80 mb-4">
                        {fase.descripcion}
                      </p>

                      <div>
                        <h4 className="font-semibold text-gold mb-2">Métodos comunes:</h4>
                        <ul className="space-y-1">
                          {fase.metodos.map((metodo, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                              <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                              {metodo}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Métodos de Blanqueo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Métodos de Blanqueo Más Comunes
                </h2>

                <div className="space-y-6">
                  {metodosBlanqueo.map((metodo, index) => (
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
                            {metodo.metodo}
                          </h3>
                          <p className="text-black/80 text-sm">
                            {metodo.descripcion}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          metodo.riesgo === 'Alto' ? 'bg-red-100 text-red-800' :
                          metodo.riesgo === 'Muy alto' ? 'bg-red-200 text-red-900' :
                          metodo.riesgo === 'Medio' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          Riesgo: {metodo.riesgo}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-semibold text-black mb-2">Indicadores de alerta:</h4>
                        <ul className="space-y-1">
                          {metodo.indicadores.map((indicador, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-black/80 text-sm">
                              <AlertTriangle className="h-3 w-3 text-yellow-600 flex-shrink-0" />
                              {indicador}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Casos Reales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Casos Reales de Blanqueo en España
                </h2>

                <div className="space-y-6">
                  {casosFamosos.map((caso, index) => (
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
                            {caso.titulo}
                          </h3>
                          <p className="text-black/80 text-sm">
                            {caso.descripcion}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-medium mb-1">
                            {caso.cantidad}
                          </div>
                          <div className="text-black/60 text-xs">
                            {caso.condena}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Lecciones de estos Casos</h3>
                  <ul className="space-y-2 text-black/80">
                    <li>• Las sociedades offshore son uno de los métodos más utilizados</li>
                    <li>• La colaboración internacional es clave para detectar blanqueo</li>
                    <li>• Los testaferros y hombres de paja facilitan la ocultación</li>
                    <li>• La recuperación de activos es uno de los objetivos principales</li>
                  </ul>
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
                  Preguntas Frecuentes sobre Blanqueo de Capitales
                </h2>

                <div className="space-y-6">
                  {blanqueoFAQ.map((faq, index) => (
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
                  <h3 className="text-lg font-semibold text-black mb-4">Normativa Principal</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Código Penal (arts. 301-304)</strong> - Delito de blanqueo de capitales
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1995-25444" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Ver artículos
                      </a>
                    </li>
                    <li>
                      <strong>Ley 10/2010</strong> - Prevención del blanqueo de capitales
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2010-13339" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Ver ley completa
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica 6/2016</strong> - Reforma penal 2015 (blanqueo)
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2016-4687" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Ver reforma
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Directivas Europeas</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Directiva 2015/849/UE (IV AMLD)</strong> - Prevención del blanqueo
                    </li>
                    <li>
                      <strong>Directiva 2018/843/UE (V AMLD)</strong> - Criptomonedas y blanqueo
                    </li>
                    <li>
                      <strong>Reglamento 2015/847/UE</strong> - Transferencias de fondos
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Destacada</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STS 456/2018</strong> - Caso Villarejo (blanqueo institucional)
                    </li>
                    <li>
                      <strong>STS 123/2020</strong> - Blanqueo a través de criptomonedas
                    </li>
                    <li>
                      <strong>STJUE Caso C-105/14</strong> - Autonomía del delito de blanqueo
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  El blanqueo de capitales representa una de las mayores amenazas para la economía
                  legal y la integridad del sistema financiero. La legislación española, en línea
                  con los estándares internacionales, establece controles rigurosos y penas severas
                  para quienes intentan integrar fondos ilícitos en el circuito económico.
                </p>
                <p className="text-white/90 leading-relaxed">
                  La prevención y detección temprana son fundamentales. Las entidades financieras
                  y profesionales obligados deben implementar sistemas robustos de compliance,
                  mientras que los particulares deben ser cautelosos con operaciones que puedan
                  parecer sospechosas. En STANS Abogados contamos con especialistas en derecho
                  penal económico que pueden asesorarte tanto en prevención como en defensa
                  en casos de investigación por blanqueo.
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
                  href={`https://wa.me/${WHATSAPP}?text=Hola, necesito asesoramiento sobre un caso de blanqueo de capitales`}
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
                Más información sobre delitos económicos y prevención
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