'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/FooterOptimized';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';
import { Metadata } from 'next';
import { Shield, Scale, AlertTriangle, Users, FileText, Clock, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react';

const WHATSAPP = '34611687226';

// FAQ específico del servicio
const faqs = {
  es: [
    {
      question: "¿Qué es un delito de odio?",
      answer: "Un delito de odio es cualquier infracción penal motivada por prejuicios hacia la raza, religión, orientación sexual, discapacidad o ideología de la víctima. En España está penado con agravantes específicos."
    },
    {
      question: "¿Cuál es la diferencia entre libertad de expresión e injurias?",
      answer: "La libertad de expresión es un derecho fundamental protegido, pero tiene límites cuando se ataca el honor de terceros. Las injurias son expresiones que lesionan la dignidad menoscabando la fama o atentando contra la propia estimación."
    },
    {
      question: "¿Puedo ser condenado por un comentario en redes sociales?",
      answer: "Sí, los comentarios en redes sociales pueden constituir delitos si incitan al odio, contienen amenazas o injurias graves. La publicidad del medio agrava la responsabilidad penal."
    },
    {
      question: "¿Qué penas tienen los delitos contra los sentimientos religiosos?",
      answer: "El escarnio público de dogmas, creencias o ceremonias religiosas puede conllevar multas de 8 a 12 meses. Si se hace en lugar de culto, las penas pueden ser mayores."
    }
  ],
  ar: [
    {
      question: "ما هي جريمة الكراهية؟",
      answer: "جريمة الكراهية هي أي جريمة جنائية مدفوعة بالتحيز ضد العرق أو الدين أو التوجه الجنسي أو الإعاقة أو الأيديولوجية للضحية. في إسبانيا يعاقب عليها بظروف مشددة محددة."
    },
    {
      question: "ما الفرق بين حرية التعبير والإهانات؟",
      answer: "حرية التعبير حق أساسي محمي، لكن لها حدود عندما تهاجم شرف الآخرين. الإهانات هي تعبيرات تضر بالكرامة وتقلل من السمعة أو تهاجم التقدير الذاتي."
    },
    {
      question: "هل يمكن إدانتي بسبب تعليق على وسائل التواصل الاجتماعي؟",
      answer: "نعم، يمكن أن تشكل التعليقات على وسائل التواصل الاجتماعي جرائم إذا حرضت على الكراهية أو احتوت على تهديدات أو إهانات خطيرة. علنية الوسيلة تزيد المسؤولية الجنائية."
    },
    {
      question: "ما هي العقوبات على الجرائم ضد المشاعر الدينية؟",
      answer: "السخرية العلنية من العقائد أو المعتقدات أو الشعائر الدينية قد تؤدي إلى غرامات من 8 إلى 12 شهرًا. إذا تم ذلك في مكان العبادة، قد تكون العقوبات أكبر."
    }
  ],
  en: [
    {
      question: "What is a hate crime?",
      answer: "A hate crime is any criminal offense motivated by prejudice towards the victim's race, religion, sexual orientation, disability or ideology. In Spain it is punished with specific aggravating circumstances."
    },
    {
      question: "What is the difference between freedom of expression and slander?",
      answer: "Freedom of expression is a fundamental right protected, but it has limits when it attacks the honor of third parties. Slander are expressions that injure dignity by diminishing reputation or attacking self-esteem."
    },
    {
      question: "Can I be convicted for a comment on social networks?",
      answer: "Yes, comments on social networks can constitute crimes if they incite hatred, contain threats or serious slander. The publicity of the medium aggravates criminal liability."
    },
    {
      question: "What penalties do crimes against religious feelings have?",
      answer: "Public mockery of dogmas, beliefs or religious ceremonies can carry fines of 8 to 12 months. If done in a place of worship, penalties can be higher."
    }
  ],
  fr: [
    {
      question: "Qu'est-ce qu'un crime de haine?",
      answer: "Un crime de haine est toute infraction pénale motivée par des préjugés envers la race, la religion, l'orientation sexuelle, le handicap ou l'idéologie de la victime. En Espagne, il est puni avec des circonstances aggravantes spécifiques."
    },
    {
      question: "Quelle est la différence entre liberté d'expression et injures?",
      answer: "La liberté d'expression est un droit fondamental protégé, mais il a des limites lorsqu'il attaque l'honneur de tiers. Les injures sont des expressions qui blessent la dignité en diminuant la réputation ou en attaquant l'estime de soi."
    },
    {
      question: "Puis-je être condamné pour un commentaire sur les réseaux sociaux?",
      answer: "Oui, les commentaires sur les réseaux sociaux peuvent constituer des crimes s'ils incitent à la haine, contiennent des menaces ou des injures graves. La publicité du média aggrave la responsabilité pénale."
    },
    {
      question: "Quelles peines pour les crimes contre les sentiments religieux?",
      answer: "La moquerie publique des dogmes, croyances ou cérémonies religieuses peut entraîner des amendes de 8 à 12 mois. Si cela se fait dans un lieu de culte, les peines peuvent être plus élevées."
    }
  ]
};

const translations = {
  es: {
    title: "Abogado Delitos de Odio y Libertad de Expresión",
    subtitle: "Defensa especializada en delitos de odio, injurias, calumnias y delitos contra los sentimientos religiosos",
    description: "Somos especialistas en la defensa del derecho fundamental a la libertad de expresión. Nuestro equipo cuenta con amplia experiencia en casos mediáticos y complejos ante la Audiencia Nacional.",
    features: {
      title: "Nuestros Servicios en Libertad de Expresión",
      items: [
        "Defensa en delitos de odio y discriminación",
        "Casos mediáticos y libertad de prensa",
        "Injurias y calumnias en redes sociales",
        "Delitos contra los sentimientos religiosos",
        "Difamación y ataques al honor",
        "Defensa en programas satíricos y humorísticos"
      ]
    },
    relatedCases: "Artículos relacionados",
    faq: "Preguntas Frecuentes",
    cta: {
      title: "¿Necesitas Defensa en un Caso de Libertad de Expresión?",
      description: "Nuestro equipo está disponible 24/7 para defender tus derechos fundamentales",
      button: "Consulta Urgente"
    },
    seo: {
      title: "Abogados Especialistas en Libertad de Expresión en Madrid",
      content1: "En STANS ABOGADOS somos expertos en la defensa de la libertad de expresión y delitos de odio en Madrid y toda España. Entendemos el delicado equilibrio entre el derecho fundamental a la libertad de expresión y la protección de los derechos de terceros.",
      content2: "Nuestro equipo de abogados especializados cuenta con amplia experiencia defendiendo a periodistas, artistas y ciudadanos en casos de injurias, calumnias y delitos contra los sentimientos religiosos. Trabajamos con un profundo conocimiento de la jurisprudencia del Tribunal Constitucional y del Tribunal Europeo de Derechos Humanos.",
      content3: "Ofrecemos defensa inmediata 24 horas en todo tipo de casos relacionados con la libertad de expresión, desde comentarios en redes sociales hasta publicaciones periodísticas. Nuestra experiencia incluye casos ante la Audiencia Nacional en delitos de gran repercusión mediática."
    }
  },
  ar: {
    title: "محامي جرائم الكراهية وحرية التعبير",
    subtitle: "دفاع متخصص في جرائم الكراهية والإهانات والافتراء والجرائم ضد المشاعر الدينية",
    description: "نحن متخصصون في الدفاع عن الحقوق الأساسية في حرية التعبير. فريقنا لديه خبرة واسعة في القضايا الإعلامية والمعقدة أمام المحكمة الوطنية.",
    features: {
      title: "خدماتنا في حرية التعبير",
      items: [
        "الدفاع في جرائم الكراهية والتمييز",
        "القضايا الإعلامية وحرية الصحافة",
        "الإهانات والافتراء في وسائل التواصل الاجتماعي",
        "الجرائم ضد المشاعر الدينية",
        "التشهير والهجوم على الشرف",
        "الدفاع في البرامج الساخرة والفكاهية"
      ]
    },
    relatedCases: "مقالات ذات صلة",
    faq: "أسئلة متكررة",
    cta: {
      title: "هل تحتاج إلى دفاع في قضية حرية التعبير؟",
      description: "فريقنا متاح 24/7 للدفاع عن حقوقك الأساسية",
      button: "استشارة عاجلة"
    },
    seo: {
      title: "محامون متخصصون في حرية التعبير في مدريد",
      content1: "في ستانس للمحاماة، نحن خبراء في الدفاع عن حرية التعبير وجرائم الكراهية في مدريد وجميع أنحاء إسبانيا. نفهم التوازن الدقيق بين الحق الأساسي في حرية التعبير وحماية حقوق الآخرين.",
      content2: "فريقنا من المحامين المتخصصين لديه خبرة واسعة في الدفاع عن الصحفيين والفنانين والمواطنين في قضايا الإهانات والافتراء والجرائم ضد المشاعر الدينية. نعمل مع فهم عميق للسوابق القضائية للمحكمة الدستورية والمحكمة الأوروبية لحقوق الإنسان.",
      content3: "نقدم دفاعًا فوريًا على مدار 24 ساعة في جميع أنواع القضايا المتعلقة بحرية التعبير، من التعليقات على وسائل التواصل الاجتماعي إلى المنشورات الصحفية. خبرتنا تشمل القضايا أمام المحكمة الوطنية في الجرائم ذات التأثير الإعلامي الكبير."
    }
  },
  en: {
    title: "Hate Crimes and Freedom of Expression Lawyer",
    subtitle: "Specialized defense in hate crimes, slander, defamation and crimes against religious feelings",
    description: "We are specialists in the defense of the fundamental right to freedom of expression. Our team has extensive experience in media cases and complex cases before the National High Court.",
    features: {
      title: "Our Services in Freedom of Expression",
      items: [
        "Defense in hate crimes and discrimination",
        "Media cases and press freedom",
        "Slander and defamation on social networks",
        "Crimes against religious feelings",
        "Libel and attacks on honor",
        "Defense in satirical and humorous programs"
      ]
    },
    relatedCases: "Related Articles",
    faq: "Frequently Asked Questions",
    cta: {
      title: "Do you need defense in a freedom of expression case?",
      description: "Our team is available 24/7 to defend your fundamental rights",
      button: "Urgent Consultation"
    },
    seo: {
      title: "Lawyers Specialized in Freedom of Expression in Madrid",
      content1: "At STANS ABOGADOS we are experts in the defense of freedom of expression and hate crimes in Madrid and throughout Spain. We understand the delicate balance between the fundamental right to freedom of expression and the protection of third parties' rights.",
      content2: "Our team of specialized lawyers has extensive experience in defending journalists, artists and citizens in cases of slander, defamation and crimes against religious feelings. We work with deep knowledge of the jurisprudence of the Constitutional Court and the European Court of Human Rights.",
      content3: "We offer immediate 24-hour defense in all types of cases related to freedom of expression, from social media comments to journalistic publications. Our experience includes cases before the National High Court in crimes of great media impact."
    }
  },
  fr: {
    title: "Avocat pour Crimes de Haine et Liberté d'Expression",
    subtitle: "Défense spécialisée en crimes de haine, injures, diffamation et crimes contre les sentiments religieux",
    description: "Nous sommes spécialistes dans la défense du droit fondamental à la liberté d'expression. Notre équipe compte une vaste expérience dans les affaires médiatiques et complexes devant l'Audience Nationale.",
    features: {
      title: "Nos Services en Liberté d'Expression",
      items: [
        "Défense dans les crimes de haine et discrimination",
        "Affaires médiatiques et liberté de presse",
        "Injures et diffamation sur les réseaux sociaux",
        "Crimes contre les sentiments religieux",
        "Diffamation et attaques à l'honneur",
        "Défense dans les programmes satiriques et humoristiques"
      ]
    },
    relatedCases: "Articles Connexes",
    faq: "Questions Fréquemment Posées",
    cta: {
      title: "Avez-vous besoin de défense dans une affaire de liberté d'expression?",
      description: "Notre équipe est disponible 24/7 pour défendre vos droits fondamentaux",
      button: "Consultation Urgente"
    },
    seo: {
      title: "Avocats Spécialisés en Liberté d'Expression à Madrid",
      content1: "Chez STANS ABOGADOS nous sommes experts dans la défense de la liberté d'expression et des crimes de haine à Madrid et dans toute l'Espagne. Nous comprenons l'équilibre délicat entre le droit fondamental à la liberté d'expression et la protection des droits des tiers.",
      content2: "Notre équipe d'avocats spécialisés possède une vaste expérience dans la défense des journalistes, artistes et citoyens dans les affaires d'injures, diffamation et crimes contre les sentiments religieux. Nous travaillons avec une profonde connaissance de la jurisprudence de la Cour Constitutionnelle et de la Cour Européenne des Droits de l'Homme.",
      content3: "Nous offrons une défense immédiate 24 heures sur 24 dans tous les types d'affaires liées à la liberté d'expression, des commentaires sur les réseaux sociaux aux publications journalistiques. Notre expérience comprend les affaires devant l'Audience Nationale dans les crimes d'impact médiatique important."
    }
  }
};

export default function LibertadExpresionPage() {
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
                <Shield className="h-10 w-10 text-gold" />
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
                <strong className="text-black">Libertad de expresión</strong>, <strong className="text-black">injurias y calumnias</strong>, <strong className="text-black">sentimientos religiosos</strong>: {t.seo.content2}
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
                {t.relatedCases}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/blog/terrorismo-libertad-expresion-limite-legal" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">Límites legales de la libertad de expresión</h3>
                  <p className="text-black/70 text-sm">Jurisprudencia y frontera con delitos de odio</p>
                </Link>
                <Link href="/blog/enaltecimiento-terrorismo-redes-sociales-defensa" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">Enaltecimiento en redes: defensa</h3>
                  <p className="text-black/70 text-sm">Claves para defender publicaciones en RRSS</p>
                </Link>
                <Link href="/blog/derechos-fundamentales-procedimientos-terrorismo" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">Derechos fundamentales y procesos</h3>
                  <p className="text-black/70 text-sm">Protección del honor y de la expresión</p>
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
                {language === 'ar' ? 'لماذا تختار ستانس للمحاماة لقضايا حرية التعبير؟' : language === 'en' ? 'Why Choose STANS ABOGADOS for Freedom of Expression Cases?' : language === 'fr' ? 'Pourquoi Choisir STANS ABOGADOS pour les Affaires de Liberté d\'Expression?' : '¿Por Qué Elegir STANS ABOGADOS para Casos de Libertad de Expresión?'}
              </h3>

              <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-black/80">
                <li><strong>{language === 'ar' ? 'خبرة مثبتة:' : language === 'en' ? 'Proven experience:' : language === 'fr' ? 'Expérience éprouvée:' : 'Experiencia demostrada:'}</strong> {language === 'ar' ? 'أكثر من 50 قضية مُبرأة في جرائم الكراهية وحرية التعبير' : language === 'en' ? 'More than 50 favorable cases in hate crimes and freedom of expression' : language === 'fr' ? 'Plus de 50 affaires favorables dans les crimes de haine et liberté d\'expression' : 'Más de 50 casos favorables en delitos de odio y libertad de expresión'}</li>
                <li><strong>{language === 'ar' ? 'دفاع فوري:' : language === 'en' ? 'Immediate defense:' : language === 'fr' ? 'Défense immédiate:' : 'Defensa inmediata:'}</strong> {language === 'ar' ? 'متاحون 24/7 للقضايا العاجلة' : language === 'en' ? 'Available 24/7 for urgent cases with response in less than 1 hour' : language === 'fr' ? 'Disponibles 24/7 pour les affaires urgentes avec réponse en moins de 1 heure' : 'Disponibles 24/7 para casos urgentes con respuesta en menos de 1 hora'}</li>
                <li><strong>{language === 'ar' ? 'فريق متخصص:' : language === 'en' ? 'Specialized team:' : language === 'fr' ? 'Équipe spécialisée:' : 'Equipo especializado:'}</strong> {language === 'ar' ? 'محامون خبراء في القانون الجنائي والدستوري' : language === 'en' ? 'Lawyers experts in criminal and constitutional law' : language === 'fr' ? 'Avocats experts en droit pénal et constitutionnel' : 'Abogados expertos en derecho penal y constitucional'}</li>
                <li><strong>{language === 'ar' ? 'نهج استراتيجي:' : language === 'en' ? 'Strategic approach:' : language === 'fr' ? 'Approche stratégique:' : 'Enfoque estratégico:'}</strong> {language === 'ar' ? 'دفاع مخصص يوازن بين الحقوق الأساسية' : language === 'en' ? 'Customized defense that balances fundamental rights' : language === 'fr' ? 'Défense personnalisée qui équilibre les droits fondamentaux' : 'Defensa personalizada que equilibra derechos fundamentales'}</li>
              </ul>

              <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-8">
                <p className="text-lg font-semibold text-gold mb-3">
                  {language === 'ar' ? 'هل تواجه اتهامات تتعلق بحرية التعبير؟' : language === 'en' ? 'Are you facing accusations related to freedom of expression?' : language === 'fr' ? 'Faites-vous face à des accusations liées à la liberté d\'expression?' : '¿Enfrentas Acusaciones Relacionadas con la Libertad de Expresión?'}
                </p>
                <p className="text-black/80 mb-4">
                  {language === 'ar'
                    ? 'لا تنتظر. اتصل بنا الآن للحصول على دفاع متخصص. نحن نفهم تعقيدات هذه القضايا ونعرف كيفية الدفاع عن حقوقك الأساسية.'
                    : language === 'en'
                    ? 'Don\'t wait any longer. Contact us now for specialized defense. We understand the complexity of these cases and know how to protect your fundamental rights.'
                    : language === 'fr'
                    ? 'N\'attendez plus. Contactez-nous maintenant pour une défense spécialisée. Nous comprenons la complexité de ces affaires et savons comment protéger vos droits fondamentaux.'
                    : 'No esperes más. Contacta ahora para obtener una defensa especializada. Entendemos la complejidad de estos casos y sabemos cómo proteger tus derechos fundamentales.'}
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
                <Link href="/casos/sobreseimiento-queque-abogados-cristianos" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">Quequé — sobreseimiento</h3>
                  <p className="text-black/70 text-sm">Derechos fundamentales: libertad de expresión</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Libertad de expresión</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Delito de odio</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Sobreseimiento</span>
                    </div>
                  )}
                </Link>
                <Link href="/casos/sobreseimiento-nordin-workout" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    CASO NORDIN WORKOUT
                  </h3>
                  <p className="text-black/70 text-sm">Sobreseimiento provisional Audiencia Nacional</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Terrorismo</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Yihadismo</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Audiencia Nacional</span>
                    </div>
                  )}
                </Link>
                <Link href="/casos/operacion-luco-banda-rolex" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    OPERACIÓN LUCO – BANDA DEL ROLEX
                  </h3>
                  <p className="text-black/70 text-sm">Absolución en injurias en redes sociales</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Organización criminal</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Robo con violencia</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Madrid</span>
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

        <Footer />
        <WhatsAppButton whatsapp={WHATSAPP} />
      </main>
    </>
  );
}
