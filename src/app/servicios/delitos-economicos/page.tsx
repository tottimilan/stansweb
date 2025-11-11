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
  ],
  en: [
    {
      question: "What is money laundering?",
      answer: "Money laundering is the process of giving legal appearance to assets derived from criminal activities. It is punished with imprisonment of 6 months to 6 years and may be aggravated depending on the origin of the funds."
    },
    {
      question: "When is it considered fraud?",
      answer: "Fraud requires profit motive and sufficient deception to mislead another person, causing them patrimonial damage. Penalties range from 6 months to 3 years, aggravating if it exceeds €50,000."
    },
    {
      question: "What is embezzlement?",
      answer: "It is appropriating money or movable property received in deposit, commission or administration. It differs from fraud in that there is no initial deception. Penalties depend on the appropriated value."
    },
    {
      question: "What penalties do tax crimes have?",
      answer: "Tax fraud is a crime when it exceeds €120,000. Penalties range from 1 to 5 years in prison, and jail can be avoided if regularized before the procedure."
    }
  ],
  fr: [
    {
      question: "Qu'est-ce que le blanchiment d'argent?",
      answer: "Le blanchiment d'argent est le processus consistant à donner une apparence légale aux biens provenant d'activités criminelles. Il est puni d'une peine de prison de 6 mois à 6 ans et peut être aggravé selon l'origine des fonds."
    },
    {
      question: "Quand est-ce considéré comme une escroquerie?",
      answer: "L'escroquerie nécessite une intention lucrative et une tromperie suffisante pour induire en erreur une autre personne, lui causant un préjudice patrimonial. Les peines vont de 6 mois à 3 ans, s'aggravant si elles dépassent 50 000 €."
    },
    {
      question: "Qu'est-ce que l'abus de confiance?",
      answer: "C'est s'approprier de l'argent ou des biens meubles reçus en dépôt, commission ou administration. Elle diffère de l'escroquerie en ce qu'il n'y a pas de tromperie initiale. Les peines dépendent de la valeur appropriée."
    },
    {
      question: "Quelles peines pour les délits fiscaux?",
      answer: "La fraude fiscale est un délit lorsqu'elle dépasse 120 000 €. Les peines vont de 1 à 5 ans de prison, et la prison peut être évitée si elle est régularisée avant la procédure."
    }
  ]
};

const translations = {
  es: {
    title: "Abogado Delitos Económicos",
    subtitle: "Defensa especializada en estafa, blanqueo de capitales, delitos fiscales y societarios",
    description: "Asesoría penal especializada en delitos económicos, empresariales y laborales. Defensa técnica en estafa, fraudes, blanqueo de capitales, delitos societarios, falsedad documental, insolvencias punibles y delitos contra los derechos de los trabajadores.",
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
  },
  ar: {
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
  },
  en: {
    title: "Economic Crimes Lawyer",
    subtitle: "Specialized defense in fraud, money laundering, tax crimes and corporate crimes",
    description: "Specialized criminal advice in economic, commercial and labor crimes. Technical defense in fraud, financial fraud, money laundering, corporate crimes, document forgery, punishable bankruptcies and crimes against workers' rights.",
    features: {
      title: "Our Services in Economic Crimes",
      items: [
        "Defense in fraud and financial fraud cases",
        "Money laundering and terrorism financing",
        "Tax crimes and tax evasion",
        "Corporate crimes and embezzlement",
        "Document forgery and falsification",
        "Punishable bankruptcies and crimes against creditors"
      ]
    },
    relatedCases: "Related Cases",
    faq: "Frequently Asked Questions",
    cta: {
      title: "Do you need defense in an economic case?",
      description: "Our team specialized in economic crimes is available to provide technical and effective defense",
      button: "Specialized Consultation"
    },
    seo: {
      title: "Lawyers Specialized in Economic Crimes in Madrid",
      content1: "At STANS ABOGADOS, we are experts in the defense of economic crimes in Madrid and throughout Spain. We handle the most complex financial and business cases, from fraud to money laundering and tax crimes.",
      content2: "Our team has specialized training in economic criminal law and works with financial and accounting experts to provide comprehensive technical defense. We understand the complexity of these cases and the need for a sophisticated defense strategy.",
      content3: "We offer preventive advice to companies and businessmen, in addition to defense in criminal proceedings. Our experience includes negotiation with the Public Prosecutor's Office and defense in complex trials."
    }
  },
  fr: {
    title: "Avocat pour Crimes Économiques",
    subtitle: "Défense spécialisée en escroquerie, blanchiment d'argent, délits fiscaux et crimes d'entreprise",
    description: "Conseil pénal spécialisé dans les crimes économiques, commerciaux et du travail. Défense technique en escroquerie, fraudes, blanchiment d'argent, crimes d'entreprise, faux documents, faillites punissables et crimes contre les droits des travailleurs.",
    features: {
      title: "Nos Services dans les Crimes Économiques",
      items: [
        "Défense dans les affaires d'escroquerie et de fraude financière",
        "Blanchiment d'argent et financement du terrorisme",
        "Crimes fiscaux et évasion fiscale",
        "Crimes d'entreprise et abus de confiance",
        "Faux documents et falsification",
        "Faillites punissables et crimes contre les créanciers"
      ]
    },
    relatedCases: "Cas Connexes",
    faq: "Questions Fréquemment Posées",
    cta: {
      title: "Avez-vous besoin de défense dans une affaire économique?",
      description: "Notre équipe spécialisée dans les crimes économiques est disponible pour offrir une défense technique et efficace",
      button: "Consultation Spécialisée"
    },
    seo: {
      title: "Avocats Spécialisés dans les Crimes Économiques à Madrid",
      content1: "Chez STANS ABOGADOS, nous sommes experts dans la défense des crimes économiques à Madrid et dans toute l'Espagne. Nous traitons les affaires financières et commerciales les plus complexes, de l'escroquerie au blanchiment d'argent et aux crimes fiscaux.",
      content2: "Notre équipe possède une formation spécialisée en droit pénal économique et travaille avec des experts financiers et comptables pour offrir une défense technique complète. Nous comprenons la complexité de ces affaires et la nécessité d'une stratégie de défense sophistiquée.",
      content3: "Nous offrons des conseils préventifs aux entreprises et aux hommes d'affaires, en plus de la défense dans les procédures pénales. Notre expérience comprend la négociation avec le Ministère Public et la défense dans les procès complexes."
    }
  }
};

export default function DelitosEconomicosPage() {
  const { language } = useLanguage();
  const t = translations[language] || translations.es;

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
              <Link href="/" className="hover:text-gold">{language === 'ar' ? 'الصفحة الرئيسية' : language === 'en' ? 'Home' : language === 'fr' ? 'Accueil' : 'Inicio'}</Link>
              <span className="px-2">›</span>
              <Link href="/servicios" className="hover:text-gold">{language === 'ar' ? 'الخدمات' : language === 'en' ? 'Services' : language === 'fr' ? 'Services' : 'Servicios'}</Link>
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
                {faqs[language]?.map((faq, index) => (
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
                {language === 'ar' ? 'أنواع الجرائم الاقتصادية التي ندافع عنها' : language === 'en' ? 'Types of Economic Crimes We Defend' : language === 'fr' ? 'Types de Crimes Économiques que nous Défendons' : 'Tipos de Delitos Económicos que Defendemos'}
              </h2>
              
              <p className="text-black/80 leading-relaxed mb-6">
                {language === 'ar' ? 'الجرائم الاقتصادية تشمل مجموعة واسعة من الأفعال غير القانونية التي تؤثر على الاقتصاد والأعمال التجارية. نحن متخصصون في الدفاع عن جميع أنواع هذه الجرائم.' : language === 'en' ? 'Economic crimes include a wide range of illegal acts that affect the economy and commercial activities. We specialize in defending all types of these crimes.' : language === 'fr' ? 'Les crimes économiques incluent une large gamme d\'actes illégaux qui affectent l\'économie et les activités commerciales. Nous nous spécialisons dans la défense de tous types de ces crimes.' : 'Los delitos económicos incluyen una amplia gama de actos ilegales que afectan a la economía y las actividades comerciales. Estamos especializados en la defensa de todo tipo de estos delitos.'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'الاحتيال والاحتيال المالي' : language === 'en' ? 'Fraud and Financial Fraud' : language === 'fr' ? 'Escroquerie et Fraude Financière' : 'Estafa y Fraude'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'دفاع في جميع أنواع الاحتيال التجاري والمالي' : language === 'en' ? 'Defense in all types of commercial and financial fraud' : language === 'fr' ? 'Défense dans tous types d\'escroqueries commerciales et financières' : 'Defensa en todo tipo de estafas empresariales y financieras'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'غسيل الأموال' : language === 'en' ? 'Money Laundering' : language === 'fr' ? 'Blanchiment d\'Argent' : 'Blanqueo de Capitales'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'دفاع تقني في قضايا غسيل الأموال المعقدة' : language === 'en' ? 'Technical defense in complex money laundering cases' : language === 'fr' ? 'Défense technique dans les affaires complexes de blanchiment' : 'Defensa técnica en casos complejos de blanqueo'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'الجرائم الضريبية' : language === 'en' ? 'Tax Crimes' : language === 'fr' ? 'Crimes Fiscaux' : 'Delitos Fiscales'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'دفاع والتسوية في الجرائم ضد الخزانة العامة' : language === 'en' ? 'Defense and regularization in crimes against the Treasury' : language === 'fr' ? 'Défense et régularisation dans les crimes contre le Trésor' : 'Defensa y regularización en delitos contra Hacienda'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'الجرائم الشركاتية' : language === 'en' ? 'Corporate Crimes' : language === 'fr' ? 'Crimes d\'Entreprise' : 'Delitos Societarios'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'خيانة الأمانة والإدارة غير الأمينة' : language === 'en' ? 'Embezzlement and disloyal administration' : language === 'fr' ? 'Abus de confiance et administration déloyale' : 'Apropiación indebida y administración desleal'}</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-black/90 mt-8 mb-4">
                {language === 'ar' ? 'لماذا تختار ستانس للمحاماة للجرائم الاقتصادية؟' : language === 'en' ? 'Why Choose STANS ABOGADOS for Economic Crimes?' : language === 'fr' ? 'Pourquoi Choisir STANS ABOGADOS pour les Crimes Économiques?' : '¿Por Qué Elegir STANS ABOGADOS para Delitos Económicos?'}
              </h3>

              <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-black/80">
                <li><strong>{language === 'ar' ? 'فريق متخصص:' : language === 'en' ? 'Specialized team:' : language === 'fr' ? 'Équipe spécialisée:' : 'Equipo especializado:'}</strong> {language === 'ar' ? 'محامون بتدريب خاص في القانون الجنائي الاقتصادي' : language === 'en' ? 'Lawyers with specific training in economic criminal law' : language === 'fr' ? 'Avocats avec formation spécifique en droit pénal économique' : 'Abogados con formación específica en derecho penal económico'}</li>
                <li><strong>{language === 'ar' ? 'خبراء ماليون:' : language === 'en' ? 'Financial experts:' : language === 'fr' ? 'Experts financiers:' : 'Peritos financieros:'}</strong> {language === 'ar' ? 'تعاون مع محاسبين وخبراء اقتصاديين' : language === 'en' ? 'Collaboration with accountants and forensic economists' : language === 'fr' ? 'Collaboration avec comptables et économistes judiciaires' : 'Colaboración con contables y economistas forenses'}</li>
                <li><strong>{language === 'ar' ? 'دفاع وقائي:' : language === 'en' ? 'Preventive defense:' : language === 'fr' ? 'Défense préventive:' : 'Defensa preventiva:'}</strong> {language === 'ar' ? 'استشارة للشركات لتجنب المخاطر الجنائية' : language === 'en' ? 'Advice to companies to avoid criminal risks' : language === 'fr' ? 'Conseils aux entreprises pour éviter les risques pénaux' : 'Asesoramiento a empresas para evitar riesgos penales'}</li>
                <li><strong>{language === 'ar' ? 'التفاوض:' : language === 'en' ? 'Negotiation:' : language === 'fr' ? 'Négociation:' : 'Negociación:'}</strong> {language === 'ar' ? 'خبرة في الاتفاقات والتسويات مع المدعي العام' : language === 'en' ? 'Experience in agreements and settlements with the Prosecutor\'s Office' : language === 'fr' ? 'Expérience dans les accords et transactions avec le Ministère Public' : 'Experiencia en conformidades y acuerdos con Fiscalía'}</li>
              </ul>

                  <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-8">
                    <p className="text-lg font-semibold text-gold mb-3">
                      {language === 'ar'
                        ? 'هل تواجه تحقيقًا في جريمة اقتصادية؟'
                        : language === 'en'
                        ? 'Are you facing an investigation for economic crime?'
                        : language === 'fr'
                        ? 'Faites-vous face à une enquête pour crime économique?'
                        : '¿Enfrentas una Investigación por Delito Económico?'}
                </p>
                <p className="text-black/80 mb-4">
                  {language === 'ar'
                    ? 'الوقت والاستراتيجية حاسمان في الجرائم الاقتصادية. اتصل بنا للحصول على دفاع تقني متخصص. فريقنا لديه الخبرة اللازمة لحماية مصالحك وسمعتك المهنية.'
                    : language === 'en'
                    ? 'Time and strategy are crucial in economic crimes. Contact us for specialized technical defense. Our team has the necessary experience to protect your interests and professional reputation.'
                    : language === 'fr'
                    ? 'Le temps et la stratégie sont cruciaux dans les crimes économiques. Contactez-nous pour une défense technique spécialisée. Notre équipe possède l\'expérience nécessaire pour protéger vos intérêts et votre réputation professionnelle.'
                    : 'El tiempo y la estrategia son cruciales en delitos económicos. Contacta para obtener defensa técnica especializada. Nuestro equipo tiene la experiencia necesaria para proteger tus intereses y reputación profesional.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+34611687226"
                    className="inline-flex items-center justify-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                  >
                    <Phone className="h-5 w-5" />
                    {language === 'ar' ? 'اتصل: 34 611 68 72 26+' : language === 'en' ? 'Call: +34 611 68 72 26' : language === 'fr' ? 'Appeler: +34 611 68 72 26' : 'Llamar: +34 611 68 72 26'}
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