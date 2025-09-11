'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield, UserCheck } from 'lucide-react';
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
    question: "¿Qué debo hacer inmediatamente cuando me detienen?",
    answer: "Mantén la calma, no opongas resistencia física, pide ver la orden judicial si existe, e informa inmediatamente que deseas llamar a un abogado. No declares nada hasta su llegada."
  },
  {
    question: "¿Puedo negarme a que me registren?",
    answer: "Para registros preventivos superficiales, no puedes negarte. Sin embargo, para registros más invasivos o domiciliarios, tienes derecho a exigir la presencia de tu abogado y una orden judicial motivada."
  },
  {
    question: "¿Cuánto tiempo pueden retenerme sin orden judicial?",
    answer: "Sin orden judicial puedes ser retenido hasta 24 horas en casos leves, o hasta 72 horas en casos graves. Pasado ese tiempo, debes ser puesto a disposición judicial o quedar en libertad."
  },
  {
    question: "¿Puedo grabar mi detención?",
    answer: "Sí, tienes derecho a grabar con tu teléfono móvil los momentos públicos de la detención, siempre que no interfieras en el procedimiento policial. Las grabaciones pueden ser pruebas importantes."
  },
  {
    question: "¿Qué pasa si soy menor de edad?",
    answer: "Los menores tienen derechos especiales: derecho a ser asistidos por sus padres o tutores, derecho a no declarar sin abogado especializado en menores, y consideraciones especiales en las medidas cautelares."
  },
  {
    question: "¿Pueden cachearme sin mi consentimiento?",
    answer: "Sí, la policía puede realizar un cacheo superficial preventivo por seguridad. Sin embargo, cacheos más invasivos requieren tu consentimiento o una orden judicial específica."
  },
  {
    question: "¿Tengo derecho a asistencia médica inmediata?",
    answer: "Sí, si sufres cualquier dolencia o lesión, tienes derecho a atención médica inmediata. Si te encuentras bajo los efectos de sustancias, debes informar para recibir asistencia adecuada."
  },
  {
    question: "¿Pueden tomarme las huellas sin consentimiento?",
    answer: "Sí, es obligatorio proporcionar huellas dactilares y fotografías para identificación policial. Esta obligación está regulada por la Ley Orgánica 4/2015 de Protección de la Seguridad Ciudadana."
  }
];

const fasesIniciales = [
  {
    fase: "Momento de la detención",
    derechos: ["Derecho a conocer los motivos", "Derecho a asistencia letrada inmediata", "Derecho a no autoinculparse"],
    acciones: ["Mantener calma", "No resistir físicamente", "Pedir abogado inmediatamente"]
  },
  {
    fase: "Traslado a comisaría",
    derechos: ["Derecho a no declarar", "Derecho a comunicación familiar", "Derecho a asistencia médica"],
    acciones: ["Informar de medicamentos", "Pedir ver a tu abogado", "No firmar documentos sin leer"]
  },
  {
    fase: "Llegada a comisaría",
    derechos: ["Derecho a dignidad", "Derecho a información escrita", "Derecho a grabar momentos públicos"],
    acciones: ["Pedir derechos por escrito", "No declarar sin abogado", "Informar de alergias/medicamentos"]
  }
];

const relatedArticles = [
  {
    title: 'Asistencia Letrada de Urgencia',
    slug: 'asistencia-letrada-urgencia',
    category: 'Asistencia Legal'
  },
  {
    title: 'Primeros Pasos en Comisaría',
    slug: 'primeros-pasos-comisaria',
    category: 'Procedimiento Policial'
  },
  {
    title: 'Derechos Constitucionales del Detenido',
    slug: 'derechos-constitucionales-detenido',
    category: 'Derechos Fundamentales'
  }
];

export default function DerechosInmediatosPage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: 'Defensa Penal Urgente', href: '/blog/defensa-penal-urgente' },
    { label: 'Derechos Inmediatos al Ser Detenido' }
  ];

  const tocItems = [
    { id: 'fases-inmediatas-de-la-detencion', title: 'Fases Inmediatas de la Detención', level: 2 },
    { id: 'derechos-especificos-en-la-detencion', title: 'Derechos Específicos en la Detención', level: 2 },
    { id: 'protocolo-de-actuacion-recomendado', title: 'Protocolo de Actuación Recomendado', level: 2 },
    { id: 'preguntas-frecuentes-sobre-derechos-inmediatos', title: 'Preguntas Frecuentes sobre Derechos Inmediatos', level: 2 },
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
                  10 min de lectura
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gold mb-6 leading-tight">
                Derechos Inmediatos al Ser Detenido
              </h1>

              <p className="text-lg text-white/80 mb-6">
                Conoce tus derechos desde el momento exacto de la detención.
                Guía práctica para afrontar una situación de urgencia penal con garantías.
              </p>

              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Equipo STANS Abogados
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  16 dic 2024
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
                  Los primeros momentos después de una detención son <strong>cruciales</strong> para determinar
                  el desarrollo del procedimiento penal. Conocer tus derechos constitucionales y saber cómo
                  ejercerlos puede marcar la diferencia entre una defensa efectiva y complicaciones innecesarias.
                </p>
                <p>
                  Esta guía detalla los derechos que te asisten desde el momento exacto de la detención,
                  basándose en la <strong>Constitución Española</strong>, la <strong>Ley de Enjuiciamiento Criminal</strong>
                  y la jurisprudencia del <strong>Tribunal Constitucional</strong>.
                </p>
              </div>

              {/* Fases Iniciales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Fases Inmediatas de la Detención
                </h2>

                <div className="space-y-8">
                  {fasesIniciales.map((fase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-charleston text-white rounded-2xl p-6"
                    >
                      <h3 className="text-xl font-semibold text-gold mb-4">
                        {fase.fase}
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gold mb-2">Derechos que te asisten:</h4>
                          <ul className="space-y-1">
                            {fase.derechos.map((derecho, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                                <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0" />
                                {derecho}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gold mb-2">Acciones recomendadas:</h4>
                          <ul className="space-y-1">
                            {fase.acciones.map((accion, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                                <AlertTriangle className="h-3 w-3 text-yellow-400 flex-shrink-0" />
                                {accion}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Derechos Específicos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Derechos Específicos en la Detención
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="h-6 w-6 text-green-600" />
                      <h3 className="text-lg font-semibold text-black">Derechos Procesales</h3>
                    </div>
                    <ul className="space-y-3 text-black/80">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Asistencia letrada inmediata</strong> - Derecho a abogado desde el primer momento</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Derecho a la información</strong> - Motivos de detención por escrito</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Derecho a no declarar</strong> - Sin presencia de abogado</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Derecho a la tutela judicial</strong> - Control judicial efectivo</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <UserCheck className="h-6 w-6 text-blue-600" />
                      <h3 className="text-lg font-semibold text-black">Derechos Personales</h3>
                    </div>
                    <ul className="space-y-3 text-black/80">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Derecho a la dignidad</strong> - Trato respetuoso en todo momento</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Derecho a la intimidad</strong> - Protección de datos personales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Derecho a la comunicación</strong> - Contacto con familiar o abogado</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Derecho a asistencia médica</strong> - Atención sanitaria inmediata</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Protocolo de Actuación */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Protocolo de Actuación Recomendado
                </h2>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-8">
                  <div className="flex items-start gap-3 mb-6">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Primeros 5 minutos</h3>
                      <p className="text-black/80">
                        Mantén la calma, no opongas resistencia física, identifica claramente a los agentes,
                        pide ver su identificación y solicita inmediatamente asistencia letrada.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">✅ Haz:</h4>
                      <ul className="text-sm text-black/80 space-y-1">
                        <li>• Mantén la calma</li>
                        <li>• Identifícate claramente</li>
                        <li>• Pide abogado inmediatamente</li>
                        <li>• Anota datos de los agentes</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">❌ No hagas:</h4>
                      <ul className="text-sm text-black/80 space-y-1">
                        <li>• No resistas físicamente</li>
                        <li>• No declares sin abogado</li>
                        <li>• No firmes nada sin leer</li>
                        <li>• No discutas agresivamente</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-black mb-2">📞 Contactos:</h4>
                      <ul className="text-sm text-black/80 space-y-1">
                        <li>• Llama a familiar cercano</li>
                        <li>• Contacta con tu abogado</li>
                        <li>• Anota números de teléfono</li>
                        <li>• Prepara documentación</li>
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
                  Preguntas Frecuentes sobre Derechos Inmediatos
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
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Legislación y Referencias
                </h2>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">Normativa Constitucional</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Constitución Española (1978)</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículos 17, 18 y 24
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica 6/1985</strong> del Poder Judicial -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1985-12666" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Regulación de la detención
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Ley de Enjuiciamiento Criminal</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>Artículo 496</strong> - Duración máxima de la detención
                    </li>
                    <li>
                      <strong>Artículo 520</strong> - Derechos del detenido
                    </li>
                    <li>
                      <strong>Artículo 118</strong> - Asistencia letrada
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-black mb-4 mt-6">Jurisprudencia Relevante</h3>
                  <ul className="space-y-3 text-black/80">
                    <li>
                      <strong>STC 114/2017</strong> - Derechos de comunicación en detención
                    </li>
                    <li>
                      <strong>STS 47/2018</strong> - Límites de la detención preventiva
                    </li>
                    <li>
                      <strong>Sentencia TEDH de 17 enero 2017</strong> - Caso Mammadov vs Azerbaiyán
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  Conocer tus derechos inmediatos al ser detenido es fundamental para afrontar
                  una situación de urgencia penal con garantías. La Constitución Española establece
                  protecciones robustas que deben ser respetadas desde el primer momento.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Recuerda: mantener la calma, ejercer tus derechos constitucionales y contar
                  con asistencia letrada especializada son los pilares de una defensa efectiva.
                  En STANS Abogados estamos disponibles 24/7 para asistirte en situaciones críticas.
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
                  href={`https://wa.me/${WHATSAPP}?text=Hola, acabo de ser detenido y necesito asistencia inmediata`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Asistencia Urgente
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
                Más información sobre defensa penal urgente
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