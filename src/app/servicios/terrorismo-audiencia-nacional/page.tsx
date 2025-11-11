'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/FooterOptimized';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Scale, Shield, Users, FileText, Clock, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react';

const WHATSAPP = '34611687226';

// FAQ específico del servicio
const faqs = {
  es: [
    {
      question: "¿Qué es el enaltecimiento del terrorismo?",
      answer: "El enaltecimiento del terrorismo consiste en alabar o justificar públicamente actos terroristas o a quienes los cometen. Está penado con prisión de 1 a 3 años y puede agravarse si se comete por internet."
    },
    {
      question: "¿Qué diferencia hay entre radicalización y autoadoctrinamiento?",
      answer: "La radicalización es un proceso de adopción de ideología extremista, mientras que el autoadoctrinamiento implica acceder activamente a contenido terrorista con intención de capacitarse. El segundo es delito cuando existe intención de cometer atentados."
    },
    {
      question: "¿Puedo ser detenido por compartir contenido en redes sociales?",
      answer: "Sí, compartir contenido que enaltezca el terrorismo, incite a la comisión de delitos terroristas o humille a las víctimas puede constituir delito, especialmente si se hace de forma reiterada o con intención de difundir."
    },
    {
      question: "¿Qué es la Audiencia Nacional y por qué juzga estos casos?",
      answer: "La Audiencia Nacional es un tribunal con jurisdicción en toda España que juzga delitos de especial gravedad como terrorismo, crimen organizado y delitos contra la Corona. En terrorismo tiene competencia exclusiva."
    }
  ],
  ar: [
    {
      question: "ما هو تمجيد الإرهاب؟",
      answer: "تمجيد الإرهاب هو الإشادة أو تبرير الأعمال الإرهابية أو مرتكبيها علناً. يُعاقب عليه بالسجن من 1 إلى 3 سنوات وقد تشدد العقوبة إذا ارتُكب عبر الإنترنت."
    },
    {
      question: "ما الفرق بين التطرف والتطرف الذاتي؟",
      answer: "التطرف هو عملية تبني أيديولوجية متطرفة، بينما التطرف الذاتي ينطوي على الوصول النشط إلى محتوى إرهابي بنية التدريب. الثاني جريمة عندما تكون هناك نية لارتكاب هجمات."
    },
    {
      question: "هل يمكن اعتقالي لمشاركة محتوى على وسائل التواصل الاجتماعي؟",
      answer: "نعم، مشاركة محتوى يمجد الإرهاب أو يحرض على ارتكاب جرائم إرهابية أو يهين الضحايا قد يشكل جريمة، خاصة إذا تم بشكل متكرر أو بنية النشر."
    },
    {
      question: "ما هي المحكمة الوطنية ولماذا تحاكم هذه القضايا؟",
      answer: "المحكمة الوطنية هي محكمة لها اختصاص في جميع أنحاء إسبانيا وتحاكم الجرائم ذات الخطورة الخاصة مثل الإرهاب والجريمة المنظمة والجرائم ضد التاج. في الإرهاب لها اختصاص حصري."
    }
  ],
  en: [
    {
      question: "What is the exaltation of terrorism?",
      answer: "The exaltation of terrorism consists of publicly praising or justifying terrorist acts or those who commit them. It is punished with imprisonment of 1 to 3 years and may be aggravated if committed on the internet."
    },
    {
      question: "What is the difference between radicalization and self-doctrination?",
      answer: "Radicalization is a process of adopting extremist ideology, while self-doctrination involves actively accessing terrorist content with the intention of training. The latter is a crime when there is intention to commit attacks."
    },
    {
      question: "Can I be arrested for sharing content on social networks?",
      answer: "Yes, sharing content that exalts terrorism, incites the commission of terrorist crimes or humiliates victims may constitute a crime, especially if done repeatedly or with dissemination intent."
    },
    {
      question: "What is the National High Court and why does it try these cases?",
      answer: "The National High Court is a court with jurisdiction throughout Spain that tries crimes of special gravity such as terrorism, organized crime and crimes against the Crown. In terrorism it has exclusive jurisdiction."
    }
  ],
  fr: [
    {
      question: "Qu'est-ce que l'exaltation du terrorisme?",
      answer: "L'exaltation du terrorisme consiste à louer publiquement ou à justifier des actes terroristes ou ceux qui les commettent. Elle est punie d'une peine d'emprisonnement de 1 à 3 ans et peut être aggravée si elle est commise sur internet."
    },
    {
      question: "Quelle est la différence entre radicalisation et auto-endoctrinement?",
      answer: "La radicalisation est un processus d'adoption d'une idéologie extrémiste, tandis que l'auto-endoctrinement implique d'accéder activement à du contenu terroriste avec l'intention de s'entraîner. Ce dernier est un crime lorsqu'il y a intention de commettre des attentats."
    },
    {
      question: "Puis-je être arrêté pour partager du contenu sur les réseaux sociaux?",
      answer: "Oui, partager du contenu qui exalte le terrorisme, incite à commettre des crimes terroristes ou humilie les victimes peut constituer un crime, surtout s'il est fait de manière répétée ou avec intention de diffusion."
    },
    {
      question: "Qu'est-ce que l'Audience Nationale et pourquoi juge-t-elle ces affaires?",
      answer: "L'Audience Nationale est un tribunal ayant compétence dans toute l'Espagne qui juge les crimes de gravité spéciale tels que le terrorisme, le crime organisé et les crimes contre la Couronne. En matière de terrorisme, elle a compétence exclusive."
    }
  ]
};

export default function TerrorismoAudienciaNacionalPage() {
  const { language } = useLanguage();
  const translations = {
    es: {
      title: "Abogado Terrorismo y Audiencia Nacional",
      subtitle: "Defensa especializada en casos de terrorismo ante la Audiencia Nacional. Experiencia en enaltecimiento, captación y financiación",
      description: "Especialistas en defensa ante la Audiencia Nacional en casos de terrorismo. Experiencia en enaltecimiento del terrorismo, captación, adoctrinamiento, financiación y actividades relacionadas con organizaciones terroristas. Conocimiento profundo de la normativa nacional e internacional.",
      features: {
        title: "Nuestros Servicios en Casos de Terrorismo",
        items: [
          "Defensa en enaltecimiento del terrorismo en internet",
          "Casos de autoadoctrinamiento y captación yihadista",
          "Defensa en financiación del terrorismo",
          "Pertenencia a organización terrorista",
          "Colaboración con organización terrorista",
          "Protección de derechos fundamentales en procedimientos de terrorismo"
        ]
      },
      relatedCases: "Casos Relacionados",
      faq: "Preguntas Frecuentes",
      cta: {
        title: "¿Necesitas Defensa en un Caso de Terrorismo?",
        description: "Nuestro equipo especializado está disponible 24/7 para ofrecer defensa inmediata ante la Audiencia Nacional",
        button: "Consulta Urgente"
      },
      seo: {
        title: "Abogados Especialistas en Terrorismo ante la Audiencia Nacional",
        content1: "En STANS ABOGADOS somos líderes en la defensa de casos de terrorismo ante la Audiencia Nacional en Madrid. Nuestro equipo cuenta con amplia experiencia en todo tipo de delitos relacionados con el terrorismo, desde el enaltecimiento hasta la financiación y pertenencia a organizaciones terroristas.",
        content2: "Comprendemos la complejidad de estos procedimientos y la necesidad de una defensa especializada que proteja los derechos fundamentales de nuestros clientes. Nuestra experiencia incluye casos de gran repercusión mediática y procedimientos bajo secreto, siempre con la máxima confidencialidad y profesionalidad.",
        content3: "Ofrecemos asistencia inmediata 24 horas, crucial en este tipo de casos donde las detenciones y registros son frecuentes a cualquier hora. Nuestro equipo está preparado para intervenir de forma inmediata en cualquier punto del procedimiento."
      }
    },
    ar: {
      title: "محامي الإرهاب والمحكمة الوطنية",
      subtitle: "دفاع متخصص في قضايا الإرهاب أمام المحكمة الوطنية. خبرة في تمجيد الإرهاب والتطرف والتمويل",
      description: "متخصصون في الدفاع أمام المحكمة الوطنية في قضايا الإرهاب. خبرة في تمجيد الإرهاب، والتجنيد، والتطرف، والتمويل والأنشطة المتعلقة بالمنظمات الإرهابية. معرفة عميقة بالتشريعات الوطنية والدولية.",
      features: {
        title: "خدماتنا في قضايا الإرهاب",
        items: [
          "الدفاع في تمجيد الإرهاب عبر الإنترنت",
          "قضايا التطرف الذاتي والتجنيد",
          "الدفاع في تمويل الإرهاب",
          "الانتماء لمنظمة إرهابية",
          "التعاون مع منظمة إرهابية",
          "حماية الحقوق الأساسية في إجراءات الإرهاب"
        ]
      },
      relatedCases: "قضايا ذات صلة",
      faq: "أسئلة متكررة",
      cta: {
        title: "هل تحتاج إلى دفاع في قضية إرهاب؟",
        description: "فريقنا المتخصص متاح 24/7 لتقديم دفاع فوري أمام المحكمة الوطنية",
        button: "استشارة عاجلة"
      },
      seo: {
        title: "محامون متخصصون في الإرهاب أمام المحكمة الوطنية",
        content1: "في ستانس للمحاماة، نحن رواد في الدفاع عن قضايا الإرهاب أمام المحكمة الوطنية في مدريد. فريقنا لديه خبرة واسعة في جميع أنواع الجرائم المتعلقة بالإرهاب، من تمجيد الإرهاب إلى التمويل والانتماء لمنظمات إرهابية.",
        content2: "نفهم تعقيد هذه الإجراءات والحاجة إلى دفاع متخصص يحمي الحقوق الأساسية لعملائنا. خبرتنا تشمل القضايا ذات التأثير الإعلامي الكبير والإجراءات السرية، دائماً مع أقصى درجات السرية والمهنية.",
        content3: "نقدم مساعدة فورية على مدار 24 ساعة، وهو أمر بالغ الأهمية في هذا النوع من القضايا حيث تكون الاعتقالات والتفتيشات شائعة في أي وقت. فريقنا مستعد للتدخل الفوري في أي نقطة من الإجراء."
      }
    },
    en: {
      title: "Terrorism and National High Court Lawyer",
      subtitle: "Specialized defense in terrorism cases before the National High Court. Experience in exaltation, radicalization and financing",
      description: "Specialists in defense before the National High Court in terrorism cases. Experience in terrorism exaltation, recruitment, radicalization, financing and activities related to terrorist organizations. Deep knowledge of national and international legislation.",
      features: {
        title: "Our Services in Terrorism Cases",
        items: [
          "Defense in terrorism exaltation on the internet",
          "Self-radicalization and recruitment cases",
          "Defense in terrorism financing",
          "Belonging to terrorist organization",
          "Collaboration with terrorist organization",
          "Protection of fundamental rights in terrorism procedures"
        ]
      },
      relatedCases: "Related Cases",
      faq: "Frequently Asked Questions",
      cta: {
        title: "Do you need defense in a terrorism case?",
        description: "Our specialized team is available 24/7 to provide immediate defense before the National High Court",
        button: "Urgent Consultation"
      },
      seo: {
        title: "Lawyers Specialized in Terrorism before the National High Court",
        content1: "At STANS ABOGADOS we are pioneers in the defense of terrorism cases before the National High Court in Madrid. Our team has extensive experience in all types of crimes related to terrorism, from terrorism exaltation to financing and belonging to terrorist organizations.",
        content2: "We understand the complexity of these procedures and the need for specialized defense that protects our clients' fundamental rights. Our experience includes high-impact media cases and secret procedures, always with maximum confidentiality and professionalism.",
        content3: "We offer immediate 24-hour assistance, crucial in this type of cases where arrests and searches are common at any time. Our team is ready for immediate intervention at any point in the procedure."
      }
    },
    fr: {
      title: "Avocat Terrorisme et Audience Nationale",
      subtitle: "Défense spécialisée dans les affaires de terrorisme devant l'Audience Nationale. Expérience en exaltation, recrutement et financement",
      description: "Spécialistes dans la défense devant l'Audience Nationale dans les affaires de terrorisme. Expérience en exaltation du terrorisme, recrutement, endoctrinement, financement et activités liées aux organisations terroristes. Connaissance approfondie de la législation nationale et internationale.",
      features: {
        title: "Nos Services dans les Affaires de Terrorisme",
        items: [
          "Défense dans l'exaltation du terrorisme sur internet",
          "Affaires d'auto-endoctrinement et recrutement djihadiste",
          "Défense dans le financement du terrorisme",
          "Appartenance à organisation terroriste",
          "Collaboration avec organisation terroriste",
          "Protection des droits fondamentaux dans les procédures de terrorisme"
        ]
      },
      relatedCases: "Cas Connexes",
      faq: "Questions Fréquemment Posées",
      cta: {
        title: "Avez-vous besoin d'une défense dans une affaire de terrorisme?",
        description: "Notre équipe spécialisée est disponible 24/7 pour offrir une défense immédiate devant l'Audience Nationale",
        button: "Consultation Urgente"
      },
      seo: {
        title: "Avocats Spécialisés en Terrorisme devant l'Audience Nationale",
        content1: "Chez STANS ABOGADOS nous sommes pionniers dans la défense des affaires de terrorisme devant l'Audience Nationale à Madrid. Notre équipe possède une vaste expérience dans tous types de crimes liés au terrorisme, de l'exaltation du terrorisme au financement et appartenance aux organisations terroristes.",
        content2: "Nous comprenons la complexité de ces procédures et la nécessité d'une défense spécialisée qui protège les droits fondamentaux de nos clients. Notre expérience comprend les affaires à fort impact médiatique et procédures sous secret, toujours avec la confidentialité et le professionnalisme maximum.",
        content3: "Nous offrons une assistance immédiate 24 heures sur 24, cruciale dans ce type d'affaires où les arrestations et perquisitions sont fréquentes à toute heure. Notre équipe est prête pour une intervention immédiate à n'importe quel point de la procédure."
      }
    }
  };
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
                <AlertTriangle className="h-10 w-10 text-gold" />
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
                  <span>{language === 'ar' ? 'اتصل الآن' : language === 'en' ? 'Call Now' : language === 'fr' ? 'Appeler Maintenant' : 'Llamar Ahora'}</span>
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

        {/* Descripción del Servicio */}
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
                <strong className="text-black">Enaltecimiento</strong>, <strong className="text-black">autoadoctrinamiento y captación</strong>, <strong className="text-black">financiación del terrorismo</strong>: {t.seo.content2}
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
                {/* Enlaces a casos específicos de terrorismo */}
                <Link href="/casos/caso-dominican-dont-play-ddp" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    CASO NORDIN WORKOUT
                  </h3>
                  <p className="text-black/70 text-sm">Sobreseimiento en caso de terrorismo yihadista</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Terrorismo</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Autoadoctrinamiento</span>
                    </div>
                  )}
                </Link>
                
                <Link href="/casos/caso-academia-yihad" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    CASO ACADEMIA YIHAD
                  </h3>
                  <p className="text-black/70 text-sm">Libertad provisional en caso de captación terrorista</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Captación</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Libertad provisional</span>
                    </div>
                  )}
                </Link>
                
                <Link href="/casos/abderrahim-akkouh-homicidio-torrejon" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    CASO ABDERRAHIM AKKOUH – HOMICIDIO TORREJÓN
                  </h3>
                  <p className="text-black/70 text-sm">Defensa exitosa en enaltecimiento del terrorismo en redes</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Enaltecimiento</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Redes sociales</span>
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
                {language === 'ar' ? 'خبرتنا في قضايا الإرهاب أمام المحكمة الوطنية' : language === 'en' ? 'Our Experience in Terrorism Cases before the National High Court' : language === 'fr' ? 'Notre Expérience dans les Affaires de Terrorisme devant l\'Audience Nationale' : 'Nuestra Experiencia en Casos de Terrorismo ante la Audiencia Nacional'}
              </h3>

              <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-black/80">
                <li><strong>{language === 'ar' ? 'دفاع متخصص:' : language === 'en' ? 'Specialized defense:' : language === 'fr' ? 'Défense spécialisée:' : 'Defensa especializada:'}</strong> {language === 'ar' ? 'محامون خبراء في قانون مكافحة الإرهاب' : language === 'en' ? 'Lawyers experts in national and international anti-terrorism legislation' : language === 'fr' ? 'Avocats experts en législation antiterroriste nationale et internationale' : 'Abogados expertos en legislación antiterrorista nacional e internacional'}</li>
                <li><strong>{language === 'ar' ? 'تدخل فوري:' : language === 'en' ? 'Immediate intervention:' : language === 'fr' ? 'Intervention immédiate:' : 'Intervención inmediata:'}</strong> {language === 'ar' ? 'متاحون 24/7 للاعتقالات والتفتيشات' : language === 'en' ? 'Available 24/7 for arrests and home searches' : language === 'fr' ? 'Disponibles 24/7 pour arrestations et perquisitions domiciliaires' : 'Disponibles 24/7 para detenciones y registros domiciliarios'}</li>
                <li><strong>{language === 'ar' ? 'سرية مطلقة:' : language === 'en' ? 'Absolute confidentiality:' : language === 'fr' ? 'Confidentialité absolue:' : 'Confidencialidad absoluta:'}</strong> {language === 'ar' ? 'إدارة القضايا تحت السرية القضائية' : language === 'en' ? 'Case management under judicial secrecy with maximum discretion' : language === 'fr' ? 'Gestion des affaires sous secret de l\'instruction avec discrétion maximale' : 'Gestión de casos bajo secreto de sumario con máxima discreción'}</li>
                <li><strong>{language === 'ar' ? 'حماية الحقوق:' : language === 'en' ? 'Rights protection:' : language === 'fr' ? 'Protection des droits:' : 'Protección de derechos:'}</strong> {language === 'ar' ? 'ضمان احترام الحقوق الأساسية' : language === 'en' ? 'We guarantee respect for fundamental rights at all times' : language === 'fr' ? 'Nous garantissons le respect des droits fondamentaux en tout temps' : 'Garantizamos el respeto a los derechos fundamentales en todo momento'}</li>
              </ul>

              <h3 className="text-xl font-semibold text-black/90 mt-8 mb-4">
                {language === 'ar' ? 'أنواع قضايا الإرهاب التي ندافع عنها' : language === 'en' ? 'Types of Terrorism Cases We Defend' : language === 'fr' ? 'Types d\'Affaires de Terrorisme que Nous Défendons' : 'Tipos de Casos de Terrorismo que Defendemos'}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'تمجيد الإرهاب' : language === 'en' ? 'Terrorism Exaltation' : language === 'fr' ? 'Exaltation du Terrorisme' : 'Enaltecimiento del Terrorismo'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'الدفاع في قضايا التمجيد عبر الإنترنت ووسائل التواصل' : language === 'en' ? 'Defense in exaltation cases on internet and social media' : language === 'fr' ? 'Défense dans les affaires d\'exaltation sur internet et réseaux sociaux' : 'Defensa en casos de enaltecimiento en internet y redes sociales'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'التطرف والتجنيد' : language === 'en' ? 'Radicalization and Recruitment' : language === 'fr' ? 'Radicalisation et Recrutement' : 'Radicalización y Captación'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'قضايا التطرف الذاتي والتجنيد الجهادي' : language === 'en' ? 'Self-doctrination and jihadist recruitment cases' : language === 'fr' ? 'Affaires d\'auto-endoctrinement et recrutement djihadiste' : 'Casos de autoadoctrinamiento y captación yihadista'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'تمويل الإرهاب' : language === 'en' ? 'Terrorism Financing' : language === 'fr' ? 'Financement du Terrorisme' : 'Financiación del Terrorismo'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'الدفاع في قضايا التمويل والدعم المالي' : language === 'en' ? 'Defense in financing and economic support cases' : language === 'fr' ? 'Défense dans les affaires de financement et soutien économique' : 'Defensa en casos de financiación y apoyo económico'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'الانتماء لمنظمة' : language === 'en' ? 'Belonging to Organization' : language === 'fr' ? 'Appartenance à Organisation' : 'Pertenencia a Organización'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'الانتماء أو التعاون مع منظمات إرهابية' : language === 'en' ? 'Belonging to or collaborating with terrorist organizations' : language === 'fr' ? 'Appartenance ou collaboration avec organisations terroristes' : 'Pertenencia o colaboración con organizaciones terroristas'}</p>
                </div>
              </div>

              <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-8">
                <p className="text-lg font-semibold text-gold mb-3">
                  {language === 'ar' ? 'هل تحتاج إلى دفاع فوري في قضية إرهاب؟' : language === 'en' ? 'Do you need immediate defense in a terrorism case?' : language === 'fr' ? 'Avez-vous besoin d&apos;une défense immédiate dans une affaire de terrorisme?' : '¿Necesitas Defensa Inmediata en un Caso de Terrorismo?'}
                </p>
                <p className="text-black/80 mb-4">
                  {language === 'ar'
                    ? 'الوقت حاسم في قضايا الإرهاب. اتصل بنا الآن للحصول على دفاع متخصص أمام المحكمة الوطنية. فريقنا لديه الخبرة والمعرفة اللازمة لحماية حقوقك.'
                    : language === 'en'
                    ? 'Time is crucial in terrorism cases. Contact us now for specialized defense before the National High Court. Our team has the necessary experience and knowledge to protect your rights.'
                    : language === 'fr'
                    ? 'Le temps est crucial dans les affaires de terrorisme. Contactez-nous maintenant pour une défense spécialisée devant l&apos;Audience Nationale. Notre équipe possède l&apos;expérience et les connaissances nécessaires pour protéger vos droits.'
                    : 'El tiempo es crucial en casos de terrorismo. Contacta ahora para obtener defensa especializada ante la Audiencia Nacional. Nuestro equipo tiene la experiencia y conocimiento necesarios para proteger tus derechos.'}
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
