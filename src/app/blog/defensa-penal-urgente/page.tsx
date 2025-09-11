'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, Clock, User, Phone, ArrowRight, CheckCircle, AlertTriangle, FileText } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const relatedArticles = [
  {
    title: 'Derechos Inmediatos al Ser Detenido',
    excerpt: 'Conoce tus derechos desde el momento exacto de la detención.',
    slug: 'derechos-inmediatos-detenido',
    readTime: '5 min'
  },
  {
    title: 'Primeros Pasos en Comisaría',
    excerpt: 'Qué hacer y qué no hacer durante tu estancia en comisaría.',
    slug: 'primeros-pasos-comisaria',
    readTime: '7 min'
  },
  {
    title: 'Asistencia Letrada de Urgencia',
    excerpt: 'El papel crucial del abogado en situaciones de urgencia.',
    slug: 'asistencia-letrada-urgencia',
    readTime: '6 min'
  },
  {
    title: 'Puesta a Disposición Judicial',
    excerpt: 'El momento clave donde se decide tu situación procesal.',
    slug: 'puesta-disposicion-judicial',
    readTime: '8 min'
  },
  {
    title: 'Habeas Corpus: Recurso de Amparo',
    excerpt: 'Cómo impugnar detenciones ilegales o irregulares.',
    slug: 'habeas-corpus-recurso-amparo',
    readTime: '9 min'
  },
  {
    title: 'Medidas Cautelares Urgentes',
    excerpt: 'Prisión provisional, libertad condicional y otras medidas.',
    slug: 'medidas-cautelares-procesos-penales',
    readTime: '10 min'
  },
  {
    title: 'Comunicación con Familiares',
    excerpt: 'Derechos de comunicación durante la detención.',
    slug: 'comunicacion-familiares-detenido',
    readTime: '4 min'
  },
  {
    title: 'Registro de Dependencias',
    excerpt: 'Cómo actuar durante un registro policial en tu domicilio.',
    slug: 'registro-dependencias-detenido',
    readTime: '7 min'
  }
];

const urgentScenarios = [
  {
    icon: AlertTriangle,
    title: 'Detención en la Calle',
    description: 'Alguien te detiene en vía pública',
    action: 'No opongas resistencia, pide ver la orden judicial'
  },
  {
    icon: Phone,
    title: 'Llamada de la Policía',
    description: 'Te citan para declarar como imputado',
    action: 'No acudas solo, lleva abogado'
  },
  {
    icon: Shield,
    title: 'Registro Policial',
    description: 'Policía quiere entrar en tu casa',
    action: 'Exige orden judicial por escrito'
  },
  {
    icon: Clock,
    title: 'Declaración Inminente',
    description: 'Te van a tomar declaración',
    action: 'Ejercicio derecho a no declarar sin abogado'
  }
];

export default function DefensaPenalUrgentePage() {
  const { language } = useLanguage();
  const t = translations[language];

  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: 'Defensa Penal Urgente' }
  ];

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />

      <main className="bg-black">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-charleston text-offwhite py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Shield className="h-20 w-20 text-gold mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-bold text-gold mb-6">
                Defensa Penal Urgente
              </h1>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Guía completa para situaciones de urgencia penal. Conoce tus derechos,
                procedimientos y cómo actuar cuando más lo necesitas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hola, necesito asistencia legal urgente`}
                  className="inline-flex items-center justify-center gap-2 bg-gold text-black px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  <Phone className="h-5 w-5" />
                  Asistencia Urgente 24/7
                </a>
                <Link
                  href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-4 rounded-lg font-semibold hover:bg-gold hover:text-black transition"
                >
                  Contacta Ahora
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Emergency Scenarios */}
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
                Situaciones de Urgencia Comunes
              </h2>
              <p className="text-black/70 text-lg">
                ¿Qué hacer en cada escenario de urgencia penal?
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {urgentScenarios.map((scenario, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-charleston text-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
                >
                  <scenario.icon className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold mb-3">
                    {scenario.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    {scenario.description}
                  </p>
                  <div className="text-gold text-sm font-medium">
                    💡 {scenario.action}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Rights Section */}
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
                Tus Derechos en Situaciones de Urgencia
              </h2>
              <p className="text-white/80 text-lg">
                Derechos fundamentales que nunca debes olvidar
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl"
              >
                <h3 className="text-xl font-semibold text-black mb-6 flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Derechos Inmediatos
                </h3>
                <ul className="space-y-3 text-black/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Asistencia letrada inmediata (24h)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Comunicación con familiar o persona de confianza
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Conocer los motivos de la detención
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    No declarar sin presencia de abogado
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl"
              >
                <h3 className="text-xl font-semibold text-black mb-6 flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  Lo que NO Debes Hacer
                </h3>
                <ul className="space-y-3 text-black/70">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    Declarar sin abogado presente
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    Firmar documentos sin leerlos
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    Hablar con otros detenidos sobre tu caso
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    Oponer resistencia física a la detención
                  </li>
                </ul>
              </motion.div>
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
                Artículos Relacionados
              </h2>
              <p className="text-black/70 text-lg">
                Profundiza en cada aspecto de la defensa penal urgente
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedArticles.map((article, index) => (
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
                ¿Necesitas Defensa Penal Urgente?
              </h2>
              <p className="text-black/80 text-lg mb-8">
                Nuestro equipo está disponible 24/7 para asistirte en situaciones críticas.
                No estás solo, estamos aquí para proteger tus derechos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hola, necesito asistencia legal urgente`}
                  className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  <Phone className="h-5 w-5" />
                  Llamar Ahora - Urgente
                </a>
                <Link
                  href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition"
                >
                  Contacta Ahora
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
