'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/FooterOptimized';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building, Shield, Scale, FileText, Clock, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react';

const WHATSAPP = '34611687226';

// FAQ específico del servicio
const faqs = {
  es: [
    {
      question: "¿Qué es el blanqueo de capitales?",
      answer: "El blanqueo de capitales es el proceso de dar apariencia legal a bienes procedentes de actividades delictivas. Se castiga con prisión de 6 meses a 6 años y puede agravarse según el origen de los fondos."
    },
    {
      question: "¿Cuándo se considera estafa?",
      answer: "La estafa requiere ánimo de lucro y engaño suficiente para inducir a error a otra persona, causándole un perjuicio patrimonial. Las penas van de 6 meses a 3 años, agravándose si supera los 50.000€."
    },
    {
      question: "¿Qué es la apropiación indebida?",
      answer: "Es apropiarse de dinero o bienes muebles recibidos en depósito, comisión o administración. Se diferencia de la estafa en que no hay engaño inicial. Las penas dependen del valor apropiado."
    },
    {
      question: "¿Qué penas tienen los delitos fiscales?",
      answer: "La defraudación tributaria es delito cuando supera los 120.000€. Las penas van de 1 a 5 años de prisión, pudiendo evitarse la cárcel si se regulariza antes del procedimiento."
    }
  ],
  ar: [
    {
      question: "ما هو غسيل الأموال؟",
      answer: "غسيل الأموال هو عملية إضفاء الشرعية على الأموال الناتجة من الأنشطة الإجرامية. يُعاقب عليه بالسجن من 6 أشهر إلى 6 سنوات وقد يتفاقم حسب مصدر الأموال."
    },
    {
      question: "متى يُعتبر احتيالاً؟",
      answer: "يتطلب الاحتيال نية الربح والخداع الكافي لإحداث خطأ في شخص آخر، مما يسبب له ضررًا ماليًا. العقوبات من 6 أشهر إلى 3 سنوات، وتتفاقم إذا تجاوزت 50,000 يورو."
    },
    {
      question: "ما هي خيانة الأمانة؟",
      answer: "هي الاستيلاء على الأموال أو الممتلكات المنقولة المستلمة كوديعة أو عمولة أو إدارة. تختلف عن الاحتيال في عدم وجود خداع أولي. تعتمد العقوبات على القيمة المختلسة."
    },
    {
      question: "ما هي عقوبات الجرائم الضريبية؟",
      answer: "التهرب الضريبي جريمة عندما يتجاوز 120,000 يورو. العقوبات من 1 إلى 5 سنوات سجن، ويمكن تجنب السجن إذا تم التسوية قبل الإجراءات."
    }
  ]
};

export default function DelitosEconomicosPage() {
  const { language } = useLanguage();
  const t = language === 'ar' ? {
    title: "محامي الجرائم الاقتصادية",
    subtitle: "دفاع متخصص في الاحتيال وغسيل الأموال والجرائم الضريبية والشركات",
    description: "استشارة جنائية متخصصة في الجرائم الاقتصادية والتجارية والعمالية. دفاع تقني في الاحتيال والاحتيال المالي وغسيل الأموال والجرائم الشركاتية والتزوير الوثائقي والإفلاس العقابي والجرائم ضد حقوق العمال.",
    features: {
      title: "خدماتنا في الجرائم الاقتصادية",
      items: [
        "الدفاع في قضايا الاحتيال والاحتيال المالي",
        "غسيل الأموال وتمويل الإرهاب",
        "الجرائم الضريبية والتهرب الضريبي",
        "الجرائم الشركاتية وخيانة الأمانة",
        "التزوير الوثائقي والتزوير",
        "الإفلاس العقابي والجرائم ضد الدائنين"
      ]
    },
    relatedCases: "قضايا ذات صلة",
    faq: "أسئلة متكررة",
    cta: {
      title: "هل تحتاج إلى دفاع في قضية اقتصادية؟",
      description: "فريقنا المتخصص في الجرائم الاقتصادية متاح لتقديم دفاع تقني وفعال",
      button: "استشارة متخصصة"
    },
    seo: {
      title: "محامون متخصصون في الجرائم الاقتصادية في مدريد",
      content1: "في ستانس للمحاماة، نحن خبراء في الدفاع عن الجرائم الاقتصادية في مدريد وجميع أنحاء إسبانيا. نتعامل مع أعقد القضايا المالية والتجارية، من الاحتيال إلى غسيل الأموال والجرائم الضريبية.",
      content2: "فريقنا لديه تدريب متخصص في القانون الجنائي الاقتصادي ويعمل مع خبراء ماليين ومحاسبين لتقديم دفاع تقني شامل. نفهم تعقيد هذه القضايا والحاجة إلى استراتيجية دفاع متطورة.",
      content3: "نقدم المشورة الوقائية للشركات ورجال الأعمال، بالإضافة إلى الدفاع في الإجراءات الجنائية. خبرتنا تشمل التفاوض مع المدعي العام والدفاع في المحاكمات المعقدة."
    }
  } : {
    title: "Abogado Delitos Económicos",
    subtitle: "Defensa especializada en estafa, blanqueo de capitales, delitos fiscales y societarios",
    description: "Asesoría penal especializada en delitos económicos, empresariales y laborales. Defensa técnica en estafa, fraudes, blanqueo de capitales, delitos societarios, falsedad documental, insolvenciones punibles y delitos contra los derechos de los trabajadores.",
    features: {
      title: "Nuestros Servicios en Delitos Económicos",
      items: [
        "Defensa en casos de estafa y fraude",
        "Blanqueo de capitales y financiación del terrorismo",
        "Delitos fiscales y contra la Hacienda Pública",
        "Delitos societarios y apropiación indebida",
        "Falsedad documental y falsificación",
        "Insolvencias punibles y delitos contra acreedores"
      ]
    },
    relatedCases: "Casos Relacionados",
    faq: "Preguntas Frecuentes",
    cta: {
      title: "¿Necesitas Defensa en un Delito Económico?",
      description: "Nuestro equipo especializado en delitos económicos está disponible para ofrecer defensa técnica y efectiva",
      button: "Consulta Especializada"
    },
    seo: {
      title: "Abogados Especialistas en Delitos Económicos en Madrid",
      content1: "En STANS ABOGADOS somos expertos en la defensa de delitos económicos en Madrid y toda España. Manejamos los casos financieros y empresariales más complejos, desde estafas hasta blanqueo de capitales y delitos fiscales.",
      content2: "Nuestro equipo cuenta con formación especializada en derecho penal económico y trabaja con peritos financieros y contables para ofrecer una defensa técnica integral. Entendemos la complejidad de estos casos y la necesidad de una estrategia de defensa sofisticada.",
      content3: "Ofrecemos asesoramiento preventivo a empresas y empresarios, además de defensa en procedimientos penales. Nuestra experiencia incluye la negociación con el Ministerio Fiscal y la defensa en juicios complejos."
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
                <Building className="h-10 w-10 text-gold" />
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
                <strong className="text-black">Estafa y fraude</strong>, <strong className="text-black">blanqueo</strong>, <strong className="text-black">delitos fiscales y societarios</strong>: {t.seo.content2}
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

        {/* Casos Relacionados */}
        <section id="casos-relacionados" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-8 text-center">
                {t.relatedCases}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/casos/caso-estafa-blanqueo-jaen" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    CASO ESTAFA Y BLANQUEO DE CAPITALES
                  </h3>
                  <p className="text-black/70 text-sm">Sobreseimiento en caso de blanqueo de capitales</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Blanqueo</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Archivo</span>
                    </div>
                  )}
                </Link>
                
                <Link href="/casos/absolucion-blanqueo-imprudencia" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    CASO BLANQUEO DE CAPITALES POR IMPRUDENCIA GRAVE
                  </h3>
                  <p className="text-black/70 text-sm">Absolución en caso de estafa y falsedad documental</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Estafa</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Falsedad documental</span>
                    </div>
                  )}
                </Link>
                
                <Link href="/casos/sobreseimiento-derechos-trabajadores" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    SOBRESEIMIENTO DERECHOS TRABAJADORES
                  </h3>
                  <p className="text-black/70 text-sm">Archivo por regularización en delito fiscal</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Delito fiscal</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Regularización</span>
                    </div>
                  )}
                </Link>
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
                {language === 'ar' ? 'أنواع الجرائم الاقتصادية التي ندافع عنها' : 'Tipos de Delitos Económicos que Defendemos'}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'الاحتيال والاحتيال المالي' : 'Estafa y Fraude'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'دفاع في جميع أنواع الاحتيال التجاري والمالي' : 'Defensa en todo tipo de estafas empresariales y financieras'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'غسيل الأموال' : 'Blanqueo de Capitales'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'دفاع تقني في قضايا غسيل الأموال المعقدة' : 'Defensa técnica en casos complejos de blanqueo'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'الجرائم الضريبية' : 'Delitos Fiscales'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'دفاع والتسوية في الجرائم ضد الخزانة العامة' : 'Defensa y regularización en delitos contra Hacienda'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'الجرائم الشركاتية' : 'Delitos Societarios'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'خيانة الأمانة والإدارة غير الأمينة' : 'Apropiación indebida y administración desleal'}</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-black/90 mt-8 mb-4">
                {language === 'ar' ? 'لماذا تختار ستانس للمحاماة للجرائم الاقتصادية؟' : '¿Por Qué Elegir STANS ABOGADOS para Delitos Económicos?'}
              </h3>

              <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-black/80">
                <li><strong>{language === 'ar' ? 'فريق متخصص:' : 'Equipo especializado:'}</strong> {language === 'ar' ? 'محامون بتدريب خاص في القانون الجنائي الاقتصادي' : 'Abogados con formación específica en derecho penal económico'}</li>
                <li><strong>{language === 'ar' ? 'خبراء ماليون:' : 'Peritos financieros:'}</strong> {language === 'ar' ? 'تعاون مع محاسبين وخبراء اقتصاديين' : 'Colaboración con contables y economistas forenses'}</li>
                <li><strong>{language === 'ar' ? 'دفاع وقائي:' : 'Defensa preventiva:'}</strong> {language === 'ar' ? 'استشارة للشركات لتجنب المخاطر الجنائية' : 'Asesoramiento a empresas para evitar riesgos penales'}</li>
                <li><strong>{language === 'ar' ? 'التفاوض:' : 'Negociación:'}</strong> {language === 'ar' ? 'خبرة في الاتفاقات والتسويات مع المدعي العام' : 'Experiencia en conformidades y acuerdos con Fiscalía'}</li>
              </ul>

                  <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-8">
                    <p className="text-lg font-semibold text-gold mb-3">
                      {language === 'ar' ? 'هل تواجه تحقيقًا في جريمة اقتصادية؟' : '¿Enfrentas una Investigación por Delito Económico?'}
                </p>
                <p className="text-black/80 mb-4">
                  {language === 'ar'
                    ? 'الوقت والاستراتيجية حاسمان في الجرائم الاقتصادية. اتصل بنا للحصول على دفاع تقني متخصص. فريقنا لديه الخبرة اللازمة لحماية مصالحك وسمعتك المهنية.'
                    : 'El tiempo y la estrategia son cruciales en delitos económicos. Contacta para obtener defensa técnica especializada. Nuestro equipo tiene la experiencia necesaria para proteger tus intereses y reputación profesional.'}
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
