'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/FooterOptimized';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';
import { Gavel, Shield, AlertTriangle, Scale, FileText, Clock, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react';

const WHATSAPP = '34611687226';

// FAQ específico del servicio
const faqs = {
  es: [
    {
      question: "¿Qué penas tienen los delitos de tráfico de drogas?",
      answer: "Las penas varían según la sustancia y cantidad. Para drogas que causan grave daño a la salud (cocaína, heroína), las penas van de 3 a 6 años. Para otras sustancias (cannabis, hachís), de 1 a 3 años. Se agravan si hay organización criminal o gran cantidad."
    },
    {
      question: "¿Qué es un delito de atentado contra la autoridad?",
      answer: "El atentado consiste en emplear fuerza, intimidación o resistencia grave contra autoridad, agentes o funcionarios públicos en ejercicio de sus funciones. Se castiga con prisión de 1 a 4 años, agravándose si se usan armas."
    },
    {
      question: "¿Cuándo se puede revisar una condena firme?",
      answer: "Durante la ejecución penal se pueden revisar medidas como permisos, tercer grado o libertad condicional. También es posible solicitar indultos, suspensiones de condena o sustituciones de pena según los requisitos legales."
    },
    {
      question: "¿Qué es la resistencia a la autoridad?",
      answer: "La resistencia es oponerse a la autoridad o sus agentes con violencia o intimidación cuando ejercen sus funciones. Es menos grave que el atentado y se castiga con prisión de 3 meses a 1 año o multa."
    }
  ],
  ar: [
    {
      question: "ما هي عقوبات جرائم الاتجار بالمخدرات؟",
      answer: "تختلف العقوبات حسب المادة والكمية. للمخدرات التي تسبب ضررًا جسيمًا للصحة (الكوكايين، الهيروين)، العقوبات من 3 إلى 6 سنوات. للمواد الأخرى (القنب، الحشيش)، من 1 إلى 3 سنوات. تتفاقم إذا كانت هناك منظمة إجرامية أو كمية كبيرة."
    },
    {
      question: "ما هي جريمة الاعتداء على السلطة؟",
      answer: "الاعتداء يتمثل في استخدام القوة أو التخويف أو المقاومة الشديدة ضد السلطة أو الوكلاء أو الموظفين العموميين أثناء ممارسة وظائفهم. يُعاقب بالسجن من 1 إلى 4 سنوات، ويتفاقم إذا استُخدمت أسلحة."
    },
    {
      question: "متى يمكن مراجعة حكم نهائي؟",
      answer: "خلال التنفيذ الجنائي يمكن مراجعة تدابير مثل التصاريح والدرجة الثالثة أو الإفراج المشروط. يمكن أيضًا طلب العفو أو تعليق الحكم أو استبدال العقوبة وفقًا للمتطلبات القانونية."
    },
    {
      question: "ما هي مقاومة السلطة؟",
      answer: "المقاومة هي معارضة السلطة أو وكلائها بالعنف أو التخويف عند ممارسة وظائفهم. هي أقل خطورة من الاعتداء وتُعاقب بالسجن من 3 أشهر إلى سنة أو غرامة."
    }
  ]
};

export default function OrdenPublicoDrogasPage() {
  const { language } = useLanguage();
  const t = language === 'ar' ? {
    title: "محامي جرائم النظام العام والمخدرات",
    subtitle: "دفاع متخصص في جرائم الصحة العامة، والسلطة، والتنفيذ الجنائي",
    description: "دفاع في قضايا النظام العام وجرائم الصحة العامة (الاتجار بالمخدرات) والتنفيذ الجنائي. استشارة في المقاومة للسلطة والاعتداء والعصيان وحيازة الأسلحة والتدابير الاحترازية والحرية المؤقتة والطعون في مرحلة التنفيذ.",
    features: {
      title: "خدماتنا في جرائم النظام العام والمخدرات",
      items: [
        "الدفاع في جرائم الاتجار بالمخدرات",
        "المقاومة للسلطة والاعتداء على الوكلاء",
        "العصيان وانتهاك أوامر الإبعاد",
        "حيازة الأسلحة غير القانونية",
        "التنفيذ الجنائي والدرجة الثالثة",
        "التدابير الاحترازية والحرية المؤقتة"
      ]
    },
    relatedCases: "قضايا ذات صلة",
    faq: "أسئلة متكررة",
    cta: {
      title: "هل تحتاج إلى دفاع في قضية نظام عام أو مخدرات؟",
      description: "فريقنا المتخصص متاح 24/7 لتقديم دفاع فوري في جميع أنواع جرائم النظام العام",
      button: "استشارة عاجلة"
    },
    seo: {
      title: "محامون متخصصون في جرائم النظام العام والمخدرات في مدريد",
      content1: "في ستانس للمحاماة، نحن خبراء في الدفاع عن جرائم النظام العام والصحة العامة في مدريد وجميع أنحاء إسبانيا. نتعامل مع جميع أنواع القضايا، من الاتجار بالمخدرات إلى جرائم السلطة والتنفيذ الجنائي.",
      content2: "فريقنا لديه خبرة واسعة في الدفاع في قضايا المخدرات، من الحيازة البسيطة إلى الاتجار على نطاق واسع. نفهم تعقيدات هذه القضايا والحاجة إلى دفاع تقني يأخذ في الاعتبار جميع الظروف المخففة والإجرائية.",
      content3: "بالإضافة إلى الدفاع في المحاكمات، نقدم المشورة في مرحلة التنفيذ الجنائي، بما في ذلك التصاريح والدرجة الثالثة والحرية المشروطة والعفو. نعمل لتحقيق أفضل الشروط الممكنة لعملائنا في جميع مراحل العملية."
    }
  } : {
    title: "Abogado Orden Público y Drogas",
    subtitle: "Defensa especializada en delitos contra la salud pública, autoridad y ejecución penal",
    description: "Defensa en casos de orden público, delitos contra la salud pública (tráfico de drogas) y ejecución penal. Asesoramiento en resistencia a la autoridad, atentado, desobediencia, tenencia de armas, medidas cautelares, libertad provisional y recursos en fase de ejecución.",
    features: {
      title: "Nuestros Servicios en Orden Público y Drogas",
      items: [
        "Defensa en delitos de tráfico de drogas",
        "Resistencia a la autoridad y atentado a agentes",
        "Desobediencia y quebrantamiento de órdenes",
        "Tenencia ilícita de armas",
        "Ejecución penal y tercer grado",
        "Medidas cautelares y libertad provisional"
      ]
    },
    relatedCases: "مقالات ذات صلة",
    faq: "Preguntas Frecuentes",
    cta: {
      title: "¿Necesitas Defensa en un Caso de Orden Público o Drogas?",
      description: "Nuestro equipo especializado está disponible 24/7 para ofrecer defensa inmediata en todo tipo de delitos contra el orden público",
      button: "Consulta Urgente"
    },
    seo: {
      title: "Abogados Especialistas en Orden Público y Drogas en Madrid",
      content1: "En STANS ABOGADOS somos expertos en la defensa de delitos contra el orden público y la salud pública en Madrid y toda España. Manejamos todo tipo de casos, desde tráfico de drogas hasta delitos contra la autoridad y ejecución penal.",
      content2: "Nuestro equipo cuenta con amplia experiencia en la defensa de casos de drogas, desde la simple tenencia hasta el tráfico a gran escala. Entendemos la complejidad de estos casos y la necesidad de una defensa técnica que considere todas las circunstancias atenuantes y procesales.",
      content3: "Además de la defensa en juicios, ofrecemos asesoramiento en fase de ejecución penal, incluyendo permisos, tercer grado, libertad condicional e indultos. Trabajamos para conseguir las mejores condiciones posibles para nuestros clientes en todas las fases del proceso."
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
                <Gavel className="h-10 w-10 text-gold" />
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
                <strong className="text-black">Drogas</strong>, <strong className="text-black">autoridad</strong> y <strong className="text-black">ejecución penal</strong>: {t.seo.content2}
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
                <Link href="/casos/absolucion-resistencia-autoridad" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">Tráfico de drogas</h3>
                  <p className="text-black/70 text-sm">Libertad provisional en tráfico internacional</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Tráfico de drogas</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Salud pública</span>
                    </div>
                  )}
                </Link>
                <Link href="/casos/sobreseimiento-delito-salud-publica" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">Resistencia/Atentado</h3>
                  <p className="text-black/70 text-sm">Absolución por atentado a agentes</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Resistencia autoridad</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Absolución</span>
                    </div>
                  )}
                </Link>
                <Link href="/casos/ejecuciones-penales-revocacion-requisitorias" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">Ejecución penal</h3>
                  <p className="text-black/70 text-sm">Permisos y tercer grado concedidos</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Ejecución penal</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Tercer grado</span>
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
                {language === 'ar' ? 'أنواع قضايا النظام العام التي ندافع عنها' : 'Tipos de Casos de Orden Público que Defendemos'}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gold/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">{language === 'ar' ? 'جرائم المخدرات' : 'Delitos de Drogas'}</h4>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'الدفاع في جميع أنواع جرائم المخدرات والصحة العامة' : 'Defensa en todo tipo de delitos contra la salud pública'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">{language === 'ar' ? 'جرائم السلطة' : 'Delitos contra la Autoridad'}</h4>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'المقاومة والاعتداء والعصيان' : 'Resistencia, atentado y desobediencia'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">{language === 'ar' ? 'التنفيذ الجنائي' : 'Ejecución Penal'}</h4>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'التصاريح والدرجة الثالثة والحرية المشروطة' : 'Permisos, tercer grado y libertad condicional'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">{language === 'ar' ? 'الأسلحة' : 'Armas'}</h4>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'حيازة غير قانونية وتهريب الأسلحة' : 'Tenencia ilícita y tráfico de armas'}</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-black/90 mt-8 mb-4">
                {language === 'ar' ? 'خبرتنا في الدفاع عن جرائم المخدرات' : 'Nuestra Experiencia en Defensa de Delitos de Drogas'}
              </h3>

              <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-black/80">
                <li><strong>{language === 'ar' ? 'دفاع تقني:' : 'Defensa técnica:'}</strong> {language === 'ar' ? 'تحليل الأدلة وسلسلة الحفظ' : 'Análisis de pruebas y cadena de custodia'}</li>
                <li><strong>{language === 'ar' ? 'تدابير بديلة:' : 'Medidas alternativas:'}</strong> {language === 'ar' ? 'برامج إعادة التأهيل كبديل للسجن' : 'Programas de deshabituación como alternativa a prisión'}</li>
                <li><strong>{language === 'ar' ? 'تخفيف العقوبة:' : 'Atenuantes:'}</strong> {language === 'ar' ? 'تطبيق جميع الظروف المخففة الممكنة' : 'Aplicación de todas las atenuantes posibles'}</li>
                <li><strong>{language === 'ar' ? 'التنفيذ:' : 'Ejecución:'}</strong> {language === 'ar' ? 'استشارة في مرحلة التنفيذ الجنائي' : 'Asesoramiento en fase de ejecución penal'}</li>
              </ul>

              <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-8">
                <h4 className="text-lg font-semibold text-gold mb-3">
                  {language === 'ar' ? 'هل تواجه اتهامات بجرائم المخدرات أو النظام العام؟' : '¿Enfrentas Acusaciones por Drogas o Delitos de Orden Público?'}
                </h4>
                <p className="text-black/80 mb-4">
                  {language === 'ar'
                    ? 'الوقت حاسم في هذه القضايا. اتصل بنا الآن للحصول على دفاع متخصص. فريقنا لديه الخبرة اللازمة للتعامل مع جميع أنواع جرائم النظام العام والمخدرات.'
                    : 'El tiempo es crucial en estos casos. Contacta ahora para obtener defensa especializada. Nuestro equipo tiene la experiencia necesaria para manejar todo tipo de delitos contra el orden público y drogas.'}
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
