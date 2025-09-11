'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Scale, Globe, Clock, FileText, ArrowRight, AlertCircle, CheckCircle, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const extraditionArticles = [
  {
    title: 'Extradición en la Unión Europea',
    excerpt: 'Procedimientos simplificados entre países miembros del espacio Schengen.',
    slug: 'tipos-extradicion-espana',
    readTime: '12 min'
  },
  {
    title: 'Extradición Internacional',
    excerpt: 'Procedimientos con países no comunitarios y tratados bilaterales.',
    slug: 'procedimientos-extradicion-espana',
    readTime: '15 min'
  },
  {
    title: 'Derechos del Extraditado',
    excerpt: 'Garantías procesales y derechos fundamentales durante el procedimiento.',
    slug: 'derechos-extraditado',
    readTime: '10 min'
  },
  {
    title: 'Defensas contra la Extradición',
    excerpt: 'Motivos para impugnar una solicitud de extradición.',
    slug: 'recursos-contra-extradicion',
    readTime: '14 min'
  },
  {
    title: 'Extradición por Terrorismo',
    excerpt: 'Consideraciones especiales en casos de terrorismo internacional.',
    slug: 'tipos-extradicion-espana',
    readTime: '16 min'
  },
  {
    title: 'Extradición por Delitos Económicos',
    excerpt: 'Aspectos específicos de extradición en casos de blanqueo y corrupción.',
    slug: 'requisitos-extradicion-espana',
    readTime: '13 min'
  }
];

const extraditionProcess = [
  {
    step: 1,
    title: 'Solicitud Inicial',
    description: 'El país requirente presenta solicitud formal de extradición',
    duration: 'Variable',
    icon: FileText
  },
  {
    step: 2,
    title: 'Admisión a Trámite',
    description: 'El juez español examina la solicitud y decide si admite el procedimiento',
    duration: '15-30 días',
    icon: CheckCircle
  },
  {
    step: 3,
    title: 'Audiencia del Extraditado',
    description: 'Se celebra vista donde el extraditado puede impugnar la solicitud',
    duration: '30-60 días',
    icon: Users
  },
  {
    step: 4,
    title: 'Resolución Judicial',
    description: 'El juez decide sobre la extradición y medidas cautelares',
    duration: '15-45 días',
    icon: Scale
  },
  {
    step: 5,
    title: 'Entrega',
    description: 'Si es aprobada, se produce la entrega al país requirente',
    duration: '10-15 días',
    icon: Globe
  }
];

const keyCountries = [
  { name: 'Francia', type: 'UE', time: '15-30 días' },
  { name: 'Alemania', type: 'UE', time: '20-45 días' },
  { name: 'Reino Unido', type: 'Post-Brexit', time: '30-60 días' },
  { name: 'Marruecos', type: 'Tratado Bilateral', time: '45-90 días' },
  { name: 'Colombia', type: 'Tratado Bilateral', time: '60-120 días' },
  { name: 'Estados Unidos', type: 'Tratado Bilateral', time: '90-180 días' }
];

export default function ProcedimientosExtradicionPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const breadcrumbItems = [
    { label: t.breadcrumb.blog, href: '/blog' },
    { label: 'Procedimientos de Extradición' }
  ];

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />

      <main className="bg-black">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 to-charleston text-offwhite py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Scale className="h-20 w-20 text-gold mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-bold text-gold mb-6">
                Procedimientos de Extradición
              </h1>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Guía completa sobre extradiciones en España. Conoce tus derechos,
                procedimientos y estrategias de defensa internacional.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hola, tengo una solicitud de extradición y necesito asesoramiento urgente`}
                  className="inline-flex items-center justify-center gap-2 bg-gold text-black px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Consulta Extradición
                </a>
                <Link
                  href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-4 rounded-lg font-semibold hover:bg-gold hover:text-black transition"
                >
                  Asesoría Internacional
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-black mb-4">
                Fases del Procedimiento de Extradición
              </h2>
              <p className="text-black/70 text-lg">
                Cronología completa desde la solicitud hasta la resolución final
              </p>
            </motion.div>

            <div className="space-y-8">
              {extraditionProcess.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <div className="bg-charleston text-white p-6 rounded-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        <phase.icon className="h-6 w-6 text-gold" />
                        <span className="text-gold font-semibold">Fase {phase.step}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-3">
                        {phase.description}
                      </p>
                      <div className="text-gold text-sm font-medium">
                        ⏱️ Duración: {phase.duration}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block w-px h-16 bg-gold/30"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Countries */}
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
                Países Más Frecuentes en Extradiciones
              </h2>
              <p className="text-white/80 text-lg">
                Tiempos aproximados por jurisdicción
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyCountries.map((country, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-black">
                      {country.name}
                    </h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      country.type === 'UE' ? 'bg-blue-100 text-blue-800' :
                      country.type === 'Post-Brexit' ? 'bg-red-100 text-red-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {country.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gold">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">{country.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-black mb-4">
                Artículos Especializados en Extradición
              </h2>
              <p className="text-black/70 text-lg">
                Profundiza en aspectos específicos del derecho de extradición
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {extraditionArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={`/blog/${article.slug}`}>
                    <div className="bg-charleston text-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 h-full">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full">
                          {article.readTime}
                        </span>
                        <ArrowRight className="h-4 w-4 text-gold group-hover:translate-x-1 transition-transform" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-gold transition-colors leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {article.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-charleston py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gold mb-4">
                Preguntas Frecuentes sobre Extradición
              </h2>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-black mb-3">
                  ¿Puedo impugnar una solicitud de extradición?
                </h3>
                <p className="text-black/70">
                  Sí, existen múltiples motivos para impugnar: defectos formales, prescripción,
                  riesgo de trato degradante, persecución por motivos políticos, o violación del principio de ne bis in idem.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-black mb-3">
                  ¿Qué pasa si soy ciudadano español?
                </h3>
                <p className="text-black/70">
                  Los ciudadanos españoles no pueden ser extraditados a otros países por delitos políticos.
                  Sin embargo, sí pueden ser extraditados por delitos comunes graves.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-black mb-3">
                  ¿Cuánto dura el procedimiento?
                </h3>
                <p className="text-black/70">
                  Depende del país requirente. Las extradiciones UE suelen tardar 30-60 días,
                  mientras que las internacionales pueden prolongarse hasta 6-12 meses.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-gold to-apricot py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-black mb-4">
                ¿Tienes una Solicitud de Extradición?
              </h2>
              <p className="text-black/80 text-lg mb-8">
                La extradición requiere experiencia internacional especializada.
                Nuestro equipo tiene amplia trayectoria en procedimientos de extradición internacional.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hola, tengo una solicitud de extradición y necesito asesoramiento especializado`}
                  className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Consulta Urgente
                </a>
                <Link
                  href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition"
                >
                  Asesoría Internacional
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton whatsapp={WHATSAPP} />
      </main>
    </>
  );
}
