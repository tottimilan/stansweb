'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, Phone, User, Clock, AlertTriangle, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const rightsArticles = [
  {
    title: 'Derechos Constitucionales del Detenido',
    excerpt: 'Los derechos fundamentales que te asisten desde el momento de la detención.',
    slug: 'derechos-constitucionales-detenido',
    readTime: '8 min'
  },
  {
    title: 'Asistencia Letrada Inmediata',
    excerpt: 'Tu derecho a tener un abogado desde el primer momento.',
    slug: 'derecho-asistencia-letrada-detenido',
    readTime: '6 min'
  },
  {
    title: 'Derecho a la Información',
    excerpt: 'Conocer los motivos de tu detención y tus derechos.',
    slug: 'derechos-constitucionales-detenido',
    readTime: '5 min'
  },
  {
    title: 'Derecho a No Declarar',
    excerpt: 'Cuándo y cómo ejercer tu derecho a no declarar.',
    slug: 'derechos-constitucionales-detenido',
    readTime: '7 min'
  },
  {
    title: 'Comunicación con Familiares',
    excerpt: 'Cómo ejercer tu derecho a comunicar con tu entorno.',
    slug: 'comunicacion-familiares-detenido',
    readTime: '4 min'
  },
  {
    title: 'Habeas Corpus y Recurso de Amparo',
    excerpt: 'Protección contra detenciones ilegales.',
    slug: 'habeas-corpus-recurso-amparo',
    readTime: '9 min'
  },
  {
    title: 'Condiciones de Detención',
    excerpt: 'Estándares mínimos de dignidad en centros penitenciarios.',
    slug: 'derechos-dependencias-policiales',
    readTime: '10 min'
  },
  {
    title: 'Derechos durante el Interrogatorio',
    excerpt: 'Garantías procesales durante la declaración policial.',
    slug: 'derechos-procesales-recursos-detenido',
    readTime: '7 min'
  },
  {
    title: 'Derecho a la Asistencia Médica',
    excerpt: 'Atención sanitaria durante la detención.',
    slug: 'proteccion-torturas-tratos-inhumanos',
    readTime: '6 min'
  },
  {
    title: 'Protección de Menores Detenidos',
    excerpt: 'Consideraciones especiales para menores de edad.',
    slug: 'derechos-grupos-vulnerables-detenidos',
    readTime: '8 min'
  }
];

const constitutionalRights = [
  {
    article: 'Artículo 17 CE',
    title: 'Derecho a la Libertad Personal',
    description: 'Nadie puede ser detenido sino con las garantías previstas en la ley',
    icon: Shield
  },
  {
    article: 'Artículo 18 CE',
    title: 'Derecho a la Tutela Judicial',
    description: 'Derecho a ser oído por un juez en un plazo razonable',
    icon: FileText
  },
  {
    article: 'Artículo 24 CE',
    title: 'Derecho a la Defensa',
    description: 'Derecho a ser informado de la acusación y a un abogado',
    icon: User
  },
  {
    article: 'Ley 1/1996',
    title: 'Asistencia Jurídica Gratuita',
    description: 'Derecho a abogado de oficio si no puedes pagarlo',
    icon: CheckCircle
  }
];

const emergencyContacts = [
  {
    title: 'Abogado de Urgencia',
    description: 'Servicio 24/7 de asistencia letrada inmediata',
    phone: '900 123 456',
    available: '24 horas'
  },
  {
    title: 'Policía Nacional',
    description: 'Emergencias y denuncias',
    phone: '091',
    available: '24 horas'
  },
  {
    title: 'Guardia Civil',
    description: 'Emergencias en zonas rurales',
    phone: '062',
    available: '24 horas'
  },
  {
    title: 'Defensor del Pueblo',
    description: 'Protección de derechos fundamentales',
    phone: '900 101 392',
    available: 'Laborables 9-14h'
  }
];

export default function DerechosDetenidosPage() {
  const { language } = useLanguage();
  const t = translations[language];

  // Traducciones específicas del blog
  const blogTranslations = language === 'ar' ? {
    hero: {
      title: 'حقوق المعتقلين',
      subtitle: 'الدليل الشامل لحقوقك الدستورية كمعتقل',
      description: 'اعرف حقوقك الدستورية كمعتقل. دليل شامل للضمانات الإجرائية وحماية الحقوق القانونية.',
      consultaUrgente: 'استشارة عاجلة',
      informacionLegal: 'معلومات قانونية'
    },
    sections: {
      derechosEsenciales: 'الحقوق الأساسية',
      derechosComplementarios: 'الحقوق التكميلية',
      derechosEspeciales: 'الحقوق الخاصة',
      recursosDisponibles: 'الموارد المتاحة'
    },
    cards: {
      constitucionales: 'الحقوق الدستورية للمعتقل',
      asistencia: 'المساعدة القانونية الفورية',
      informacion: 'الحق في المعلومات',
      noDeclarar: 'الحق في عدم الإدلاء بأقوال',
      comunicacion: 'التواصل مع العائلة',
      habeas: 'الاعتقال غير القانوني واستئناف الحماية'
    }
  } : {
    hero: {
      title: 'Derechos de los Detenidos',
      subtitle: 'Guía Completa de tus Derechos Constitucionales como Detenido',
      description: 'Conoce tus derechos constitucionales como detenido. Guía completa de garantías procesales y protección jurídica.',
      consultaUrgente: 'Consulta Urgente',
      informacionLegal: 'Información Legal'
    },
    sections: {
      derechosEsenciales: 'Derechos Esenciales',
      derechosComplementarios: 'Derechos Complementarios',
      derechosEspeciales: 'Derechos Especiales',
      recursosDisponibles: 'Recursos Disponibles'
    },
    cards: {
      constitucionales: 'Derechos Constitucionales del Detenido',
      asistencia: 'Asistencia Letrada Inmediata',
      informacion: 'Derecho a la Información',
      noDeclarar: 'Derecho a No Declarar',
      comunicacion: 'Comunicación con Familiares',
      habeas: 'Habeas Corpus y Recurso de Amparo'
    }
  };

  const breadcrumbItems = [
    { label: t.breadcrumb.blog, href: '/blog' },
    { label: blogTranslations.hero.title }
  ];

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />

      <main className="bg-black pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 to-charleston text-offwhite py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Shield className="h-20 w-20 text-gold mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-bold text-gold mb-6">
                {blogTranslations.hero.title}
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-white/90 mb-4">
                {blogTranslations.hero.subtitle}
              </h2>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8">
                {blogTranslations.hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hola, estoy detenido y necesito conocer mis derechos`}
                  className="inline-flex items-center justify-center gap-2 bg-gold text-black px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  <Phone className="h-5 w-5" />
                  {blogTranslations.hero.consultaUrgente}
                </a>
                <Link
                  href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-4 rounded-lg font-semibold hover:bg-gold hover:text-black transition"
                >
                  {blogTranslations.hero.informacionLegal}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Constitutional Rights */}
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
                Derechos Constitucionales
              </h2>
              <p className="text-black/70 text-lg">
                Garantías fundamentales protegidas por la Constitución Española
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {constitutionalRights.map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-charleston text-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <right.icon className="h-8 w-8 text-gold" />
                    <div>
                      <div className="text-gold text-sm font-semibold">
                        {right.article}
                      </div>
                      <h3 className="text-lg font-semibold">
                        {right.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-white/80">
                    {right.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Immediate Rights */}
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
                {language === 'ar' ? 'الحقوق الفورية عند الاعتقال' : 'Derechos Inmediatos al Ser Detenido'}
              </h2>
              <p className="text-white/80 text-lg">
                {language === 'ar' ? 'ما يجب أن تعرفه من اللحظة الأولى' : 'Lo que debes saber desde el primer momento'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl"
              >
                <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-black mb-3">
                  Asistencia Letrada
                </h3>
                <p className="text-black/70 text-sm">
                  Tienes derecho a un abogado desde el momento de la detención.
                  Si no puedes pagarlo, se te asignará uno de oficio gratuitamente.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl"
              >
                <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-black mb-3">
                  Información de Derechos
                </h3>
                <p className="text-black/70 text-sm">
                  La policía debe informarte de tus derechos por escrito y de manera comprensible.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl"
              >
                <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-black mb-3">
                  {language === 'ar' ? 'التواصل' : 'Comunicación'}
                </h3>
                <p className="text-black/70 text-sm">
                  Derecho a comunicar con un familiar o persona de confianza en un plazo razonable.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl"
              >
                <AlertTriangle className="h-8 w-8 text-red-600 mb-4" />
                <h3 className="text-lg font-semibold text-black mb-3">
                  {language === 'ar' ? 'عدم الإدلاء بأقوال' : 'No Declarar'}
                </h3>
                <p className="text-black/70 text-sm">
                  Tienes derecho a no declarar hasta la llegada de tu abogado.
                  No firmes nada sin leerlo detenidamente.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl"
              >
                <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-black mb-3">
                  {language === 'ar' ? 'المساعدة الطبية' : 'Asistencia Médica'}
                </h3>
                <p className="text-black/70 text-sm">
                  Si necesitas atención médica, tienes derecho a recibirla inmediatamente.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl"
              >
                <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-black mb-3">
                  {language === 'ar' ? 'الاعتقال غير القانوني' : 'Habeas Corpus'}
                </h3>
                <p className="text-black/70 text-sm">
                  Si consideras que tu detención es ilegal, puedes solicitar el habeas corpus.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
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
                {language === 'ar' ? 'جهات الاتصال في حالات الطوارئ' : 'Contactos de Emergencia'}
              </h2>
              <p className="text-black/70 text-lg">
                Números importantes para situaciones de urgencia
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emergencyContacts.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-charleston text-white p-6 rounded-2xl"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-3">
                    {contact.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gold" />
                      <span className="text-gold font-semibold">{contact.phone}</span>
                    </div>
                    <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full">
                      {contact.available}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                Artículos sobre Derechos de Detenidos
              </h2>
              <p className="text-white/80 text-lg">
                Información detallada sobre cada aspecto de tus derechos
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rightsArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={`/blog/${article.slug}`}>
                    <div className="bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 h-full">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full">
                          {article.readTime}
                        </span>
                        <ArrowRight className="h-4 w-4 text-gold group-hover:translate-x-1 transition-transform" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-gold transition-colors leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-black/70 text-sm">
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
                ¿Han Violado Tus Derechos?
              </h2>
              <p className="text-black/80 text-lg mb-8">
                Si crees que tus derechos han sido vulnerados durante una detención,
                tenemos el conocimiento y experiencia para protegerte y exigir responsabilidades.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hola, creo que han violado mis derechos durante la detención`}
                  className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  <Phone className="h-5 w-5" />
                  Denuncia Violación
                </a>
                <Link
                  href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition"
                >
                  {t.blog.contactaAhora}
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
