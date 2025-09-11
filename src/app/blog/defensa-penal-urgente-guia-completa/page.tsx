'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark, ArrowRight, Phone, AlertTriangle, CheckCircle, FileText, Shield } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { notFound } from 'next/navigation';

const WHATSAPP = '34611687226';

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
    category: 'Procedimiento Penal'
  }
];

const faqData = [
  {
    question: "¿Cuánto tiempo pueden retenerme en comisaría sin cargos?",
    answer: "Según el artículo 496 de la Ley de Enjuiciamiento Criminal, puedes ser retenido hasta 72 horas en casos de delito grave, o hasta 24 horas en casos menos graves, antes de ser puesto a disposición judicial."
  },
  {
    question: "¿Puedo negarme a declarar en comisaría?",
    answer: "Sí, tienes derecho a no declarar. Sin embargo, es recomendable declarar con asistencia letrada presente. El artículo 118 de la Ley de Enjuiciamiento Criminal regula este derecho."
  },
  {
    question: "¿Quién paga al abogado de urgencia?",
    answer: "Si no puedes pagar un abogado particular, tienes derecho a un abogado de oficio gratuito. Esta asistencia está regulada por la Ley 1/1996 de Asistencia Jurídica Gratuita."
  },
  {
    question: "¿Pueden registrarme sin orden judicial?",
    answer: "En casos de flagrante delito, la policía puede realizar un registro preventivo. Sin embargo, para registros domiciliarios se requiere orden judicial según el artículo 18 de la Constitución Española."
  },
  {
    question: "¿Qué pasa si no entiendo el idioma?",
    answer: "Tienes derecho a traducción e interpretación gratuita durante todo el procedimiento, según la Directiva 2010/64/UE y la Ley Orgánica 4/2015."
  },
  {
    question: "¿Puedo llamar a un familiar desde comisaría?",
    answer: "Sí, tienes derecho a comunicar con un familiar o persona de confianza en un plazo razonable, según el artículo 520 de la Ley de Enjuiciamiento Criminal."
  }
];

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DefensaPenalUrgentePage({ params }: Props) {
  const resolvedParams = await params;

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
                href="/blog"
                className="inline-flex items-center gap-2 text-gold hover:text-white transition mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Volver al blog
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">
                  Defensa Penal Urgente
                </span>
                <div className="flex items-center gap-1 text-sm text-white/70">
                  <Clock className="h-4 w-4" />
                  8 min de lectura
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gold mb-6 leading-tight">
                Defensa Penal Urgente: Guía Completa para Detenidos
              </h1>

              <p className="text-lg text-white/80 mb-6">
                Todo lo que necesitas saber cuando eres detenido: derechos constitucionales,
                procedimiento legal y estrategias de defensa. Guía práctica basada en la legislación española.
              </p>

              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Equipo STANS Abogados
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  15 dic 2024
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
                  Ser detenido es una situación de <strong>alto estrés</strong> que puede marcar el devenir de un proceso penal.
                  Conocer tus derechos y saber cómo actuar puede ser la diferencia entre una defensa efectiva y complicaciones innecesarias.
                </p>
                <p>
                  Esta guía completa, basada en la <strong>Constitución Española</strong>, la <strong>Ley de Enjuiciamiento Criminal</strong>
                  y jurisprudencia del <strong>Tribunal Constitucional</strong>, te proporciona las herramientas necesarias para
                  afrontar una situación de urgencia penal con garantías.
                </p>
              </div>

              {/* Derechos Inmediatos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Derechos Inmediatos al Ser Detenido
                </h2>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Asistencia Letrada Inmediata</h3>
                      <p className="text-black/80">
                        Según el <strong>artículo 17.3 de la Constitución Española</strong> y el <strong>artículo 118 de la LECrim</strong>,
                        tienes derecho a un abogado desde el momento exacto de la detención. No puedes declarar sin su presencia.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <CheckCircle className="h-6 w-6 text-green-600 mb-3" />
                    <h3 className="text-lg font-semibold text-black mb-2">Derecho a la Información</h3>
                    <p className="text-black/80 text-sm">
                      Debes ser informado de tus derechos por escrito y de manera comprensible,
                      según la <strong>Circular 1/2006 de la Fiscalía General del Estado</strong>.
                    </p>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <CheckCircle className="h-6 w-6 text-green-600 mb-3" />
                    <h3 className="text-lg font-semibold text-black mb-2">Comunicación con Familiares</h3>
                    <p className="text-black/80 text-sm">
                      Derecho a comunicar con un familiar en un plazo razonable,
                      regulado por el <strong>artículo 520 de la LECrim</strong>.
                    </p>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <CheckCircle className="h-6 w-6 text-green-600 mb-3" />
                    <h3 className="text-lg font-semibold text-black mb-2">Asistencia Médica</h3>
                    <p className="text-black/80 text-sm">
                      Si necesitas atención médica, tienes derecho a recibirla inmediatamente,
                      según el <strong>artículo 15 de la Constitución</strong>.
                    </p>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <CheckCircle className="h-6 w-6 text-green-600 mb-3" />
                    <h3 className="text-lg font-semibold text-black mb-2">Traducción e Interpretación</h3>
                    <p className="text-black/80 text-sm">
                      Derecho a traducción gratuita durante todo el procedimiento,
                      según la <strong>Ley Orgánica 4/2015</strong>.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Primeros Pasos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Primeros Pasos en Comisaría
                </h2>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">Lo más importante</h3>
                      <p className="text-black/80">
                        Mantén la calma y no declares nada hasta la llegada de tu abogado.
                        Cualquier declaración puede ser utilizada en tu contra.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">1. Identificación y Derechos</h3>
                    <p className="text-black/80">
                      Al llegar a comisaría, te identificarán y te informarán de tus derechos.
                      Según el <strong>Real Decreto 769/2017</strong>, este proceso debe realizarse
                      de manera comprensible y con posibilidad de traducción si es necesario.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">2. Cacheo y Registro Preventivo</h3>
                    <p className="text-black/80">
                      La policía puede realizar un cacheo superficial. Para registros más invasivos
                      se requiere tu consentimiento o orden judicial, según el <strong>artículo 550 de la LECrim</strong>.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-black mb-3">3. Huellas y Fotografía</h3>
                    <p className="text-black/80">
                      Se te tomarán huellas dactilares y fotografía para identificación.
                      Este proceso está regulado por la <strong>Ley Orgánica 3/2018</strong> de protección de datos.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Asistencia Letrada */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Asistencia Letrada de Urgencia
                </h2>

                <div className="bg-charleston text-white p-8 rounded-2xl mb-6">
                  <h3 className="text-xl font-semibold text-gold mb-4">¿Qué hace el abogado de urgencia?</h3>
                  <ul className="space-y-2 text-white/90">
                    <li>• Accede inmediatamente a tu expediente</li>
                    <li>• Asiste a tu declaración policial</li>
                    <li>• Te informa de tus derechos y opciones</li>
                    <li>• Prepara tu estrategia de defensa inicial</li>
                    <li>• Puede impugnar medidas cautelares</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">Abogado Particular vs. De Oficio</h3>
                    <p className="text-black/80">
                      Si puedes permitírtelo, un abogado particular te brinda mayor especialización.
                      Si no, tienes derecho a asistencia gratuita según la <strong>Ley 1/1996</strong>.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">Confidencialidad</h3>
                    <p className="text-black/80">
                      Todas las comunicaciones con tu abogado están protegidas por
                      el secreto profesional (<strong>artículo 542 de la LECrim</strong>).
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Puesta a Disposición Judicial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                  Puesta a Disposición Judicial
                </h2>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Momentos clave</h3>
                  <p className="text-black/80">
                    En 24-72 horas serás puesto a disposición judicial. Es el momento donde se decide
                    si quedas en libertad o se te imponen medidas cautelares.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-gold text-black rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-black">Audiencia de Derechos</h4>
                      <p className="text-black/80">El juez te informa de tus derechos y te pregunta si deseas declarar.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-gold text-black rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-black">Posible Declaración</h4>
                      <p className="text-black/80">Puedes declarar o acogerte a tu derecho a no hacerlo.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-gold text-black rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-black">Resolución Judicial</h4>
                      <p className="text-black/80">El juez decide sobre libertad, medidas cautelares o prisión preventiva.</p>
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
                  Preguntas Frecuentes sobre Defensa Penal Urgente
                </h2>

                <div className="space-y-6">
                  {faqData.map((faq, index) => (
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
                  Referencias y Legislación
                </h2>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">Legislación Aplicada</h3>
                  <ul className="space-y-2 text-black/80">
                    <li>
                      <strong>Constitución Española (1978)</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículos 17, 18 y 24
                      </a>
                    </li>
                    <li>
                      <strong>Ley de Enjuiciamiento Criminal</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1882-6039" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículos 118, 496, 520, 542, 550
                      </a>
                    </li>
                    <li>
                      <strong>Ley 1/1996 de Asistencia Jurídica Gratuita</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-1996-1590" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Texto completo
                      </a>
                    </li>
                    <li>
                      <strong>Ley Orgánica 4/2015 de Protección de la Seguridad Ciudadana</strong> -
                      <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2015-3443" className="text-gold hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                        Artículos sobre identificación
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gold mb-4">Conclusión</h2>
                <p className="text-white/90 leading-relaxed mb-6">
                  La defensa penal urgente requiere experiencia, rapidez y conocimiento especializado.
                  En STANS Abogados contamos con un equipo disponible 24/7 para asistirte en situaciones críticas,
                  garantizando que tus derechos constitucionales sean respetados en todo momento.
                </p>
                <p className="text-white/90 leading-relaxed">
                  Recuerda: mantener la calma, no declarar sin abogado y conocer tus derechos son los primeros
                  pasos para una defensa efectiva. Estamos aquí para protegerte.
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
                  href={`https://wa.me/${WHATSAPP}?text=Hola, necesito asesoramiento urgente sobre una detención`}
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  <Phone className="h-4 w-4" />
                  Consulta Urgente
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
                Más información sobre derechos y procedimientos penales
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
