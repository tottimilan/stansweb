'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/FooterOptimized';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';
import { Scale, Shield, Clock, Gavel, FileText, AlertTriangle, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react';

const WHATSAPP = '34611687226';

// FAQ específico del servicio
const faqs = {
  es: [
    {
      question: "¿Qué es el habeas corpus?",
      answer: "Es un procedimiento urgente para que un juez examine la legalidad de una detención. Debe resolverse en máximo 24 horas y permite poner en libertad a quien esté detenido ilegalmente o en condiciones inadecuadas."
    },
    {
      question: "¿Cuándo puedo recurrir una sentencia penal?",
      answer: "Generalmente tienes 10 días para recurrir en apelación y 5 días para casación desde la notificación. Es crucial actuar rápido y contar con fundamentos sólidos: error en la valoración de pruebas, infracción procesal o de ley."
    },
    {
      question: "¿Qué son las medidas cautelares?",
      answer: "Son restricciones temporales durante el proceso: prisión provisional, libertad con fianza, retirada de pasaporte, prohibición de salida, comparecencias. Se revisan cada 3 meses y se pueden modificar según evolucione el caso."
    },
    {
      question: "¿Cuánto dura la instrucción de un caso penal?",
      answer: "La instrucción ordinaria dura máximo 18 meses (prorrogables 18 más en casos complejos). Los procedimientos abreviados tienen 6 meses. Superados estos plazos sin prórroga justificada, debe archivarse."
    }
  ],
  ar: [
    {
      question: "ما هو الإحضار القضائي (habeas corpus)؟",
      answer: "هو إجراء عاجل ليفحص القاضي شرعية الاحتجاز. يجب حله في غضون 24 ساعة كحد أقصى ويسمح بإطلاق سراح من يُحتجز بشكل غير قانوني أو في ظروف غير ملائمة."
    },
    {
      question: "متى يمكنني استئناف حكم جنائي؟",
      answer: "عادة لديك 10 أيام للاستئناف و5 أيام للنقض من تاريخ الإخطار. من الضروري التصرف بسرعة وأن يكون لديك أسس قوية: خطأ في تقييم الأدلة، انتهاك إجرائي أو قانوني."
    },
    {
      question: "ما هي التدابير الاحترازية؟",
      answer: "هي قيود مؤقتة خلال العملية: السجن المؤقت، الحرية بكفالة، سحب جواز السفر، منع السفر، الحضور الدوري. تُراجع كل 3 أشهر ويمكن تعديلها حسب تطور القضية."
    },
    {
      question: "كم تستغرق التحقيقات في قضية جنائية؟",
      answer: "التحقيق العادي يستمر 18 شهرًا كحد أقصى (قابلة للتمديد 18 شهرًا إضافية في القضايا المعقدة). الإجراءات المختصرة لها 6 أشهر. إذا تجاوزت هذه المدد دون تمديد مبرر، يجب حفظ القضية."
    }
  ]
};

export default function ProcedimientoPenalPage() {
  const { language } = useLanguage();
  const t = language === 'ar' ? {
    title: "محامي الإجراءات الجنائية والطعون",
    subtitle: "دفاع متخصص في جميع مراحل الإجراءات الجنائية من الاعتقال إلى الطعون",
    description: "متخصصون في جميع مراحل الإجراءات الجنائية. من الدفاع في الاعتقال الأولي إلى الطعون في المحكمة العليا. خبرة في الإحضار القضائي والتدابير الاحترازية والطعون والموارد الاستثنائية.",
    features: {
      title: "خدماتنا في الإجراءات الجنائية",
      items: [
        "الدفاع العاجل في الاعتقالات - 24/7",
        "الإحضار القضائي والطعون الاستعجالية",
        "التدابير الاحترازية والحرية المؤقتة",
        "الطعون: الاستئناف والنقض والطعن",
        "الموارد الاستثنائية والمراجعة",
        "المرافقة في جميع مراحل الإجراءات"
      ]
    },
    relatedCases: "مقالات ذات صلة",
    faq: "أسئلة متكررة",
    cta: {
      title: "هل تحتاج إلى دفاع عاجل أو طعن في حكم؟",
      description: "فريقنا المتخصص في الإجراءات الجنائية متاح 24/7 لحماية حقوقك في أي مرحلة",
      button: "دفاع عاجل"
    },
    seo: {
      title: "محامون متخصصون في الإجراءات الجنائية والطعون في مدريد",
      content1: "في ستانس للمحاماة، نحن خبراء في جميع مراحل الإجراءات الجنائية. من اللحظة الأولى للاعتقال إلى الطعون النهائية في المحكمة العليا، نقدم دفاعًا تقنيًا متخصصًا يضمن حماية حقوقك الأساسية.",
      content2: "فريقنا لديه خبرة واسعة في الإجراءات العاجلة مثل الإحضار القضائي، وكذلك في إعداد وتقديم جميع أنواع الطعون. نعمل بسرعة وفعالية لضمان أفضل نتيجة ممكنة في كل مرحلة من مراحل العملية.",
      content3: "نقدم خدمة شاملة تشمل الدفاع في مرحلة التحقيق، والتفاوض على التدابير الاحترازية، والتمثيل في المحاكمات، وإعداد الطعون. متاحون 24/7 للاستجابة الفورية في حالات الطوارئ."
    }
  } : {
    title: "Abogado Procedimiento Penal y Recursos",
    subtitle: "Defensa especializada en todas las fases del procedimiento penal desde la detención hasta los recursos",
    description: "Especialistas en todas las fases del procedimiento penal. Desde la defensa en la detención inicial hasta los recursos ante el Tribunal Supremo. Experiencia en habeas corpus, medidas cautelares, apelaciones y recursos extraordinarios.",
    features: {
      title: "Nuestros Servicios en Procedimiento Penal",
      items: [
        "Defensa urgente en detenciones - 24/7",
        "Habeas corpus y recursos de urgencia",
        "Medidas cautelares y libertad provisional",
        "Recursos: apelación, casación y amparo",
        "Recursos extraordinarios y revisión",
        "Acompañamiento en todas las fases procesales"
      ]
    },
    relatedCases: "Artículos relacionados",
    faq: "Preguntas Frecuentes",
    cta: {
      title: "¿Necesitas Defensa Urgente o Recurrir una Sentencia?",
      description: "Nuestro equipo especializado en procedimiento penal está disponible 24/7 para proteger tus derechos en cualquier fase",
      button: "Defensa Urgente"
    },
    seo: {
      title: "Abogados Especialistas en Procedimiento Penal y Recursos en Madrid",
      content1: "En STANS ABOGADOS somos expertos en todas las fases del procedimiento penal. Desde el primer momento de la detención hasta los recursos finales ante el Tribunal Supremo, ofrecemos una defensa técnica especializada que garantiza la protección de tus derechos fundamentales.",
      content2: "Nuestro equipo cuenta con amplia experiencia en procedimientos urgentes como el habeas corpus, así como en la preparación y presentación de todo tipo de recursos. Trabajamos con rapidez y eficacia para garantizar el mejor resultado posible en cada fase del proceso.",
      content3: "Ofrecemos un servicio integral que incluye la defensa en fase de instrucción, negociación de medidas cautelares, representación en juicios orales y preparación de recursos. Disponibles 24/7 para respuesta inmediata en situaciones de emergencia."
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
                <Scale className="h-10 w-10 text-gold" />
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
                <strong className="text-black">Habeas corpus</strong>, <strong className="text-black">medidas cautelares</strong>, <strong className="text-black">apelación y casación</strong>: {t.seo.content2}
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
                <Link href="/blog/defensa-penal-urgente" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <AlertTriangle className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    Defensa Penal Urgente
                  </h3>
                  <p className="text-black/70 text-sm">
                    Guía completa para actuar en detenciones urgentes
                  </p>
                </Link>
                
                <Link href="/blog/habeas-corpus-recurso-amparo" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <Shield className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    Habeas Corpus
                  </h3>
                  <p className="text-black/70 text-sm">
                    Cómo solicitar la revisión urgente de una detención
                  </p>
                </Link>
                
                <Link href="/blog/medidas-cautelares-procesos-penales" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <Gavel className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    Medidas Cautelares
                  </h3>
                  <p className="text-black/70 text-sm">
                    Todo sobre prisión provisional y libertad con medidas
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
                <Link href="/casos/18" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">Ejecución penal</h3>
                  <p className="text-black/70 text-sm">Tercer grado y permisos penitenciarios</p>
                </Link>
                <Link href="/casos/1" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">Habeas/archivos</h3>
                  <p className="text-black/70 text-sm">Sobreseimiento por derechos fundamentales</p>
                </Link>
                <Link href="/casos/3" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">Revisión de medidas</h3>
                  <p className="text-black/70 text-sm">Archivo respecto de nuestro cliente</p>
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
                {language === 'ar' ? 'مراحل الإجراءات الجنائية التي نغطيها' : 'Fases del Procedimiento Penal que Cubrimos'}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'الاعتقال والتحقيق' : 'Detención e Instrucción'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'دفاع فوري من اللحظة الأولى' : 'Defensa inmediata desde el primer momento'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'التدابير الاحترازية' : 'Medidas Cautelares'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'تفاوض وطعن في السجن المؤقت' : 'Negociación y recursos contra prisión provisional'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'المحاكمة الشفوية' : 'Juicio Oral'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'دفاع تقني في جلسات المحاكمة' : 'Defensa técnica en vista oral'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'الطعون' : 'Recursos'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'الاستئناف والنقض والطعن بالدستورية' : 'Apelación, casación y amparo constitucional'}</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-black/90 mt-8 mb-4">
                {language === 'ar' ? 'لماذا تختار ستانس للمحاماة للإجراءات الجنائية؟' : '¿Por Qué Elegir STANS ABOGADOS para Procedimiento Penal?'}
              </h3>

              <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-black/80">
                <li><strong>{language === 'ar' ? 'توفر 24/7:' : 'Disponibilidad 24/7:'}</strong> {language === 'ar' ? 'استجابة فورية في حالات الطوارئ' : 'Respuesta inmediata en situaciones de emergencia'}</li>
                <li><strong>{language === 'ar' ? 'خبرة إجرائية:' : 'Experiencia procesal:'}</strong> {language === 'ar' ? 'معرفة عميقة بجميع مراحل الإجراءات' : 'Conocimiento profundo de todas las fases procesales'}</li>
                <li><strong>{language === 'ar' ? 'طعون فعالة:' : 'Recursos efectivos:'}</strong> {language === 'ar' ? 'نسبة نجاح عالية في الطعون' : 'Alto índice de éxito en recursos y apelaciones'}</li>
                <li><strong>{language === 'ar' ? 'دفاع شامل:' : 'Defensa integral:'}</strong> {language === 'ar' ? 'من الاعتقال إلى الحكم النهائي' : 'Desde la detención hasta la sentencia firme'}</li>
              </ul>

                  <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-8">
                    <p className="text-lg font-semibold text-gold mb-3">
                      {language === 'ar' ? 'هل تحتاج إلى دفاع عاجل أو تريد الطعن في حكم؟' : '¿Necesitas Defensa Urgente o Quieres Recurrir una Sentencia?'}
                </p>
                <p className="text-black/80 mb-4">
                  {language === 'ar'
                    ? 'الوقت حاسم في الإجراءات الجنائية. اتصل بنا فورًا للحصول على دفاع متخصص. فريقنا جاهز للتدخل في أي مرحلة من مراحل الإجراءات لحماية حقوقك.'
                    : 'El tiempo es crucial en procedimiento penal. Contacta inmediatamente para obtener defensa especializada. Nuestro equipo está preparado para intervenir en cualquier fase del procedimiento y proteger tus derechos.'}
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
