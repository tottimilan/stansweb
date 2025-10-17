'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/FooterOptimized';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';
import { Scale, Globe, Shield, FileText, Clock, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react';

const WHATSAPP = '34611687226';

// FAQ específico del servicio
const faqs = {
  es: [
    {
      question: "¿Qué es una Orden Europea de Detención y Entrega (OEDE)?",
      answer: "La OEDE es un mecanismo de cooperación judicial entre países de la UE para la entrega de personas reclamadas por delitos. Se ejecuta de forma simplificada, pero existen motivos de denegación como la doble incriminación, cosa juzgada o derechos fundamentales."
    },
    {
      question: "¿Cuánto tiempo dura un proceso de extradición?",
      answer: "Una OEDE debe resolverse en máximo 60 días (90 si hay prórroga). Las extradiciones fuera de la UE pueden durar varios meses. Durante este tiempo, la persona puede estar en prisión provisional o libertad con medidas cautelares."
    },
    {
      question: "¿Se puede denegar una extradición?",
      answer: "Sí, existen causas de denegación obligatorias y facultativas: principio de ne bis in idem, prescripción, minoría de edad, nacionalidad española (para algunos países), vulneración de derechos fundamentales o riesgo de tortura."
    },
    {
      question: "¿Qué diferencia hay entre extradición activa y pasiva?",
      answer: "La extradición activa es cuando España solicita la entrega de una persona que está en otro país. La pasiva es cuando otro país solicita a España la entrega de alguien que está en territorio español. Los procedimientos y garantías son diferentes."
    }
  ],
  ar: [
    {
      question: "ما هو أمر الاعتقال والتسليم الأوروبي (OEDE)؟",
      answer: "OEDE هي آلية تعاون قضائي بين دول الاتحاد الأوروبي لتسليم الأشخاص المطلوبين لارتكاب جرائم. يتم تنفيذها بشكل مبسط، ولكن هناك أسباب للرفض مثل الإدانة المزدوجة أو الأمر المقضي أو الحقوق الأساسية."
    },
    {
      question: "كم تستغرق عملية التسليم؟",
      answer: "يجب حل OEDE في غضون 60 يومًا كحد أقصى (90 إذا كان هناك تمديد). قد تستغرق عمليات التسليم خارج الاتحاد الأوروبي عدة أشهر. خلال هذا الوقت، قد يكون الشخص في السجن المؤقت أو الحرية مع تدابير احترازية."
    },
    {
      question: "هل يمكن رفض التسليم؟",
      answer: "نعم، هناك أسباب إلزامية واختيارية للرفض: مبدأ عدم المحاكمة مرتين، التقادم، القاصرين، الجنسية الإسبانية (لبعض البلدان)، انتهاك الحقوق الأساسية أو خطر التعذيب."
    },
    {
      question: "ما الفرق بين التسليم الإيجابي والسلبي؟",
      answer: "التسليم الإيجابي هو عندما تطلب إسبانيا تسليم شخص موجود في بلد آخر. السلبي هو عندما يطلب بلد آخر من إسبانيا تسليم شخص موجود على الأراضي الإسبانية. الإجراءات والضمانات مختلفة."
    }
  ]
};

export default function ExtradicionesPage() {
  const { language } = useLanguage();
  const t = language === 'ar' ? {
    title: "محامي التسليم والأوامر الأوروبية",
    subtitle: "دفاع متخصص في عمليات التسليم الدولية وأوامر الاعتقال والتسليم الأوروبية (OEDE)",
    description: "متخصصون في إجراءات التسليم الدولية والأوامر الأوروبية للاعتقال والتسليم. خبرة في الدفاع ضد التسليم والتعاون القضائي الدولي وحماية الحقوق الأساسية في الإجراءات العابرة للحدود.",
    features: {
      title: "خدماتنا في التسليم الدولي",
      items: [
        "الدفاع ضد أوامر الاعتقال والتسليم الأوروبية (OEDE)",
        "إجراءات التسليم من وإلى إسبانيا",
        "التعاون القضائي الدولي",
        "حماية الحقوق الأساسية في التسليم",
        "التدابير الاحترازية في إجراءات التسليم",
        "الطعون ضد قرارات التسليم"
      ]
    },
    relatedCases: "قضايا ذات صلة",
    faq: "أسئلة متكررة",
    cta: {
      title: "هل تواجه إجراءات تسليم دولية؟",
      description: "فريقنا المتخصص في التسليم الدولي متاح 24/7 لحماية حقوقك",
      button: "استشارة عاجلة"
    },
    seo: {
      title: "محامون متخصصون في التسليم الدولي في مدريد",
      content1: "في ستانس للمحاماة، نحن رواد في الدفاع في إجراءات التسليم الدولية في مدريد. فريقنا لديه خبرة واسعة في جميع أنواع عمليات التسليم، من الأوامر الأوروبية (OEDE) إلى التسليم مع دول خارج الاتحاد الأوروبي.",
      content2: "نفهم تعقيد هذه الإجراءات والحاجة إلى دفاع سريع وفعال. خبرتنا تشمل التفاوض مع السلطات الدولية وحماية الحقوق الأساسية لعملائنا، مع ضمان عدم تسليمهم إذا كان هناك خطر انتهاك حقوقهم.",
      content3: "نقدم مساعدة فورية من لحظة الاعتقال، ونمثل عملاءنا أمام المحكمة الوطنية ونعمل مع شبكة من المحامين الدوليين لضمان أفضل دفاع في بلد المنشأ وبلد الوجهة."
    }
  } : {
    title: "Abogado Extradiciones y OEDE",
    subtitle: "Defensa especializada en extradiciones internacionales y Órdenes Europeas de Detención y Entrega",
    description: "Especialistas en procedimientos de extradición internacional y Órdenes Europeas de Detención y Entrega. Experiencia en defensa contra extradiciones, cooperación judicial internacional y protección de derechos fundamentales en procedimientos transfronterizos.",
    features: {
      title: "Nuestros Servicios en Extradiciones",
      items: [
        "Defensa contra Órdenes Europeas de Detención y Entrega (OEDE)",
        "Procedimientos de extradición desde y hacia España",
        "Cooperación judicial internacional",
        "Protección de derechos fundamentales en extradiciones",
        "Medidas cautelares en procedimientos de extradición",
        "Recursos contra decisiones de entrega"
      ]
    },
    relatedCases: "مقالات ذات صلة",
    faq: "Preguntas Frecuentes",
    cta: {
      title: "¿Enfrentas un Procedimiento de Extradición?",
      description: "Nuestro equipo especializado en extradiciones está disponible 24/7 para proteger tus derechos",
      button: "Consulta Urgente"
    },
    seo: {
      title: "Abogados Especialistas en Extradiciones en Madrid",
      content1: "En STANS ABOGADOS somos líderes en la defensa en procedimientos de extradición en Madrid. Nuestro equipo cuenta con amplia experiencia en todo tipo de extradiciones, desde Órdenes Europeas (OEDE) hasta extradiciones con países fuera de la UE.",
      content2: "Comprendemos la complejidad de estos procedimientos y la necesidad de una defensa rápida y efectiva. Nuestra experiencia incluye la negociación con autoridades internacionales y la protección de los derechos fundamentales de nuestros clientes, garantizando que no sean entregados si existe riesgo de vulneración de sus derechos.",
      content3: "Ofrecemos asistencia inmediata desde el momento de la detención, representamos a nuestros clientes ante la Audiencia Nacional y trabajamos con una red de abogados internacionales para garantizar la mejor defensa tanto en el país de origen como en el de destino."
    }
  };

  return (
    <>
      <ScrollProgress />
      <Navigation />

      <main className="bg-black pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-charleston to-black text-offwhite py-20 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl mb-8 mx-auto border border-gold/30"
              >
                <Globe className="h-10 w-10 text-gold" />
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gold mb-6 tracking-tight">
                {t.title}
              </h1>
              
              <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                {t.subtitle}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+34611687226"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="h-5 w-5" />
                  <span>Llamar Ahora</span>
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                >
                  WhatsApp 24/7
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="bg-white py-3">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <nav aria-label="Breadcrumb" className={`text-sm ${language === 'ar' ? 'text-right' : 'text-left'} text-black/60`}>
              <Link href="/" className="hover:text-gold">{language === 'ar' ? 'الصفحة الرئيسية' : 'Inicio'}</Link>
              <span className="px-2">›</span>
              <Link href="/servicios" className="hover:text-gold">{language === 'ar' ? 'الخدمات' : 'Servicios'}</Link>
              <span className="px-2">›</span>
              <span className="text-black">{t.title}</span>
            </nav>
          </div>
        </section>

        {/* Descripción del Servicio - ampliada SEO */}
        <section id="descripcion" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-lg text-black/80 leading-relaxed mb-5">
                {t.description}
              </p>
              <p className="text-base sm:text-lg text-black/80 leading-relaxed mb-4">
                <strong className="text-black">{t.seo.title}</strong>. {t.seo.content1}
              </p>
              <p className="text-base sm:text-lg text-black/80 leading-relaxed mb-4">
                <strong className="text-black">OEDE, cooperación judicial</strong> y <strong className="text-black">derechos fundamentales</strong>: {t.seo.content2}
              </p>
              <p className="text-base sm:text-lg text-black/80 leading-relaxed">
                {t.seo.content3}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Características del Servicio */}
        <section id="servicios" className="bg-charleston py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-12 text-center">
                {t.features.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {t.features.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-gold/20 rounded-xl p-4 hover:border-gold/40 transition-all"
                  >
                    <CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Artículos relacionados */}
        <section id="articulos-relacionados" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-8 text-center">
                {language === 'ar' ? 'مقالات ذات صلة' : 'Artículos relacionados'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/blog/procedimientos-extradicion" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    Guía de Extradiciones
                  </h3>
                  <p className="text-black/70 text-sm">
                    Todo sobre procedimientos de extradición en España
                  </p>
                </Link>
                
                <Link href="/blog/tipos-extradicion-espana" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    Tipos de Extradición
                  </h3>
                  <p className="text-black/70 text-sm">
                    OEDE vs extradición convencional: diferencias clave
                  </p>
                </Link>
                
                <Link href="/blog/derechos-extraditado" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    Derechos del Extraditado
                  </h3>
                  <p className="text-black/70 text-sm">
                    Protección de derechos fundamentales en extradiciones
                  </p>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Casos relacionados */}
        <section id="casos-relacionados" className="bg-white py-10 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold mb-8 text-center">
                {language === 'ar' ? 'قضايا مرتبطة' : 'Casos relacionados'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/casos/sobreseimiento-nordin-workout" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">Sobreseimiento AN</h3>
                  <p className="text-black/70 text-sm">Archivo provisional tras prisión provisional</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">OEDE</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Extradiciones</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Audiencia Nacional</span>
                    </div>
                  )}
                </Link>
                <Link href="/casos/caso-academia-yihad" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">Academia Yihad</h3>
                  <p className="text-black/70 text-sm">Libertad provisional en caso mediático</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Captación</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Yihadismo</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Libertad provisional</span>
                    </div>
                  )}
                </Link>
                <Link href="/casos/sobreseimiento-queque-abogados-cristianos" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">Derechos fundamentales</h3>
                  <p className="text-black/70 text-sm">Sobreseimiento por libertad de expresión</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Derechos fundamentales</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Sobreseimiento</span>
                    </div>
                  )}
                </Link>
              </div>
              <div className="text-center mt-6">
                <Link href="/casos" className="text-gold font-semibold hover:text-gold/80">{language === 'ar' ? 'عرض جميع الحالات' : 'Ver todos los casos'} →</Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-charleston py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-12 text-center">
                {t.faq}
              </h2>
              
              <div className="space-y-6">
                {faqs[language === 'ar' ? 'ar' : 'es'].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-black to-charleston py-16 sm:py-20 border-t border-gold/20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-6">
                {t.cta.title}
              </h2>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                {t.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  {t.cta.button}
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="tel:+34611687226"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  +34 611 68 72 26
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gold mb-6">
                {t.seo.title}
              </h2>
              
              <p className="text-black/80 leading-relaxed mb-6">
                {t.seo.content1}
              </p>

              <p className="text-black/80 leading-relaxed mb-6">
                {t.seo.content2}
              </p>

              <p className="text-black/80 leading-relaxed mb-6">
                {t.seo.content3}
              </p>

              <h3 className="text-xl font-semibold text-black/90 mt-8 mb-4">
                {language === 'ar' ? 'أنواع إجراءات التسليم التي ندافع فيها' : 'Tipos de Procedimientos de Extradición que Defendemos'}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gold/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">{language === 'ar' ? 'OEDE - الاتحاد الأوروبي' : 'OEDE - Unión Europea'}</h4>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'أوامر الاعتقال والتسليم الأوروبية السريعة' : 'Órdenes Europeas de Detención y Entrega rápidas'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">{language === 'ar' ? 'التسليم التقليدي' : 'Extradición Convencional'}</h4>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'التسليم مع دول خارج الاتحاد الأوروبي' : 'Extradiciones con países fuera de la UE'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">{language === 'ar' ? 'التعاون القضائي' : 'Cooperación Judicial'}</h4>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'المساعدة القانونية المتبادلة الدولية' : 'Asistencia judicial mutua internacional'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">{language === 'ar' ? 'حماية الحقوق' : 'Protección de Derechos'}</h4>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'ضمان الحقوق الأساسية في التسليم' : 'Garantía de derechos fundamentales en extradiciones'}</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-black/90 mt-8 mb-4">
                {language === 'ar' ? 'لماذا تختار ستانس للمحاماة للتسليم الدولي؟' : '¿Por Qué Elegir STANS ABOGADOS para Extradiciones?'}
              </h3>

              <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-black/80">
                <li><strong>{language === 'ar' ? 'خبرة دولية:' : 'Experiencia internacional:'}</strong> {language === 'ar' ? 'شبكة من المحامين في أوروبا والعالم' : 'Red de abogados en Europa y el mundo'}</li>
                <li><strong>{language === 'ar' ? 'رد فعل فوري:' : 'Reacción inmediata:'}</strong> {language === 'ar' ? 'تدخل سريع عند الاعتقال بأمر دولي' : 'Intervención rápida ante detenciones por orden internacional'}</li>
                <li><strong>{language === 'ar' ? 'دفاع تقني:' : 'Defensa técnica:'}</strong> {language === 'ar' ? 'معرفة عميقة بالقانون الأوروبي والدولي' : 'Conocimiento profundo del derecho europeo e internacional'}</li>
                <li><strong>{language === 'ar' ? 'حماية الحقوق:' : 'Protección de derechos:'}</strong> {language === 'ar' ? 'ضمانات ضد التعذيب وسوء المعاملة' : 'Garantías contra tortura y malos tratos'}</li>
              </ul>

              <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-8">
                <h4 className="text-lg font-semibold text-gold mb-3">
                  {language === 'ar' ? 'هل تم اعتقالك بأمر تسليم دولي؟' : '¿Has Sido Detenido por una Orden de Extradición?'}
                </h4>
                <p className="text-black/80 mb-4">
                  {language === 'ar'
                    ? 'الوقت حاسم في إجراءات التسليم. اتصل بنا فورًا للحصول على دفاع متخصص. فريقنا لديه الخبرة والموارد اللازمة لحماية حقوقك ومنع التسليم غير العادل.'
                    : 'El tiempo es crucial en procedimientos de extradición. Contacta inmediatamente para obtener defensa especializada. Nuestro equipo tiene la experiencia y recursos necesarios para proteger tus derechos y evitar entregas injustas.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+34611687226"
                    className="inline-flex items-center justify-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                  >
                    <Phone className="h-5 w-5" />
                    {language === 'ar' ? 'اتصل: 34 611 68 72 26+' : 'Llamar: +34 611 68 72 26'}
                  </a>
                  <a 
                    href="mailto:info@stansabogados.com"
                    className="inline-flex items-center justify-center gap-2 border border-gold text-gold hover:bg-gold hover:text-black px-6 py-3 rounded-lg font-medium transition"
                  >
                    <Mail className="h-5 w-5" />
                    info@stansabogados.com
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <Footer />
        <WhatsAppButton whatsapp={WHATSAPP} />
      </main>
    </>
  );
}
