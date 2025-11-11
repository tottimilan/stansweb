'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/FooterOptimized';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Shield, AlertTriangle, Scale, FileText, Clock, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react';

const WHATSAPP = '34611687226';

// FAQ específico del servicio
const faqs = {
  es: [
    {
      question: "¿Qué se considera un delito de lesiones?",
      answer: "Las lesiones son cualquier menoscabo de la integridad corporal o salud física o mental que requiera tratamiento médico o quirúrgico. La gravedad determina si es delito leve (hasta 3 meses) o grave (hasta 12 años)."
    },
    {
      question: "¿Cuándo una amenaza es delito?",
      answer: "Las amenazas constituyen delito cuando se conmina a otro con causar un mal que constituya delito (muerte, lesiones, etc.). Pueden ser condicionales o no, y se agravan si se hacen por escrito, por teléfono o en nombre de grupos."
    },
    {
      question: "¿Qué diferencia hay entre homicidio y asesinato?",
      answer: "El homicidio es causar la muerte de otra persona sin agravantes específicos (10-15 años). El asesinato requiere alevosía, precio o ensañamiento (15-25 años o prisión permanente revisable)."
    },
    {
      question: "¿Qué es la detención ilegal?",
      answer: "La detención ilegal consiste en encerrar o detener a otra persona privándole de su libertad. Se agrava si dura más de 15 días o si no se da razón del paradero de la víctima."
    }
  ],
  ar: [
    {
      question: "ما الذي يُعتبر جريمة إصابات؟",
      answer: "الإصابات هي أي ضرر بالسلامة الجسدية أو الصحة البدنية أو العقلية يتطلب علاجًا طبيًا أو جراحيًا. تحدد الخطورة ما إذا كانت جريمة بسيطة (حتى 3 أشهر) أو خطيرة (حتى 12 عامًا)."
    },
    {
      question: "متى يكون التهديد جريمة؟",
      answer: "تشكل التهديدات جريمة عندما يُهدد شخص آخر بإلحاق ضرر يشكل جريمة (الموت، الإصابات، إلخ). يمكن أن تكون مشروطة أو غير مشروطة، وتتفاقم إذا تمت كتابيًا أو عبر الهاتف أو باسم مجموعات."
    },
    {
      question: "ما الفرق بين القتل والاغتيال؟",
      answer: "القتل هو التسبب في وفاة شخص آخر دون ظروف مشددة محددة (10-15 سنة). الاغتيال يتطلب الغدر أو الثمن أو القسوة (15-25 سنة أو السجن الدائم القابل للمراجعة)."
    },
    {
      question: "ما هو الاحتجاز غير القانوني؟",
      answer: "الاحتجاز غير القانوني يتمثل في حبس أو احتجاز شخص آخر وحرمانه من حريته. يتفاقم إذا استمر أكثر من 15 يومًا أو إذا لم يُعطَ سبب لمكان الضحية."
    }
  ],
  en: [
    {
      question: "What is considered an injury crime?",
      answer: "Injuries are any impairment of physical integrity or physical or mental health that requires medical or surgical treatment. The severity determines if it is a minor crime (up to 3 months) or serious (up to 12 years)."
    },
    {
      question: "When is a threat a crime?",
      answer: "Threats constitute a crime when one threatens another with causing harm that constitutes a crime (death, injuries, etc.). They can be conditional or unconditional, and are aggravated if made in writing, by telephone or on behalf of groups."
    },
    {
      question: "What is the difference between homicide and murder?",
      answer: "Homicide is causing the death of another person without specific aggravating circumstances (10-15 years). Murder requires treachery, price or cruelty (15-25 years or reviewable life imprisonment)."
    },
    {
      question: "What is illegal detention?",
      answer: "Illegal detention consists of locking up or detaining another person depriving them of their freedom. It is aggravated if it lasts more than 15 days or if no reason is given for the victim's whereabouts."
    }
  ],
  fr: [
    {
      question: "Qu'est-ce qui est considéré comme un crime de blessures?",
      answer: "Les blessures sont toute atteinte à l'intégrité corporelle ou à la santé physique ou mentale qui nécessite un traitement médical ou chirurgical. La gravité détermine s'il s'agit d'un crime léger (jusqu'à 3 mois) ou grave (jusqu'à 12 ans)."
    },
    {
      question: "Quand une menace est-elle un crime?",
      answer: "Les menaces constituent un crime lorsqu'on menace autrui de causer un mal qui constitue un crime (mort, blessures, etc.). Elles peuvent être conditionnelles ou non, et sont aggravées si elles sont faites par écrit, par téléphone ou au nom de groupes."
    },
    {
      question: "Quelle est la différence entre homicide et assassinat?",
      answer: "L'homicide est causer la mort d'autrui sans circonstances aggravantes spécifiques (10-15 ans). L'assassinat nécessite la traîtrise, le prix ou la cruauté (15-25 ans ou emprisonnement à perpétuité revisable)."
    },
    {
      question: "Qu'est-ce que la détention illégale?",
      answer: "La détention illégale consiste à enfermer ou détenir autrui en le privant de sa liberté. Elle est aggravée si elle dure plus de 15 jours ou si aucune raison n'est donnée sur le lieu où se trouve la victime."
    }
  ]
};

const translations = {
  es: {
    title: "Abogado Delitos contra las Personas",
    subtitle: "Defensa especializada en homicidio, lesiones, amenazas, coacciones y detención ilegal",
    description: "Defensa integral en casos de delitos contra la vida, integridad física y moral. Incluye homicidio, lesiones, amenazas, coacciones, detención ilegal y violencia de género. Protección de derechos fundamentales en todas las fases del proceso penal.",
    features: {
      title: "Nuestros Servicios en Delitos contra las Personas",
      items: [
        "Defensa en casos de homicidio y asesinato",
        "Delitos de lesiones de todo tipo",
        "Amenazas, coacciones y extorsión",
        "Detención ilegal y secuestro",
        "Violencia doméstica y violencia de género",
        "Delitos contra la libertad e indemnidad sexual"
      ]
    },
    relatedCases: "Casos Relacionados",
    faq: "Preguntas Frecuentes",
    cta: {
      title: "¿Necesitas Defensa en un Delito contra las Personas?",
      description: "Nuestro equipo especializado está disponible 24/7 para ofrecer defensa inmediata y efectiva",
      button: "Consulta Urgente"
    },
    seo: {
      title: "Abogados Especialistas en Delitos contra las Personas en Madrid",
      content1: "En STANS ABOGADOS somos especialistas en la defensa de delitos contra las personas en Madrid y toda España. Manejamos los casos más graves y complejos, desde homicidios hasta lesiones, amenazas y violencia doméstica.",
      content2: "Nuestro equipo cuenta con amplia experiencia en todo tipo de delitos contra las personas, con un profundo conocimiento de los aspectos legales, psicológicos y sociales de estos casos. Trabajamos con sensibilidad y máxima profesionalidad, garantizando la protección de los derechos de nuestros clientes en todo momento.",
      content3: "Ofrecemos defensa inmediata 24 horas, crucial en casos que implican prisión provisional o medidas cautelares. Nuestra experiencia abarca casos en todos los tribunales, desde juzgados de instrucción hasta el Tribunal Supremo."
    }
  },
  ar: {
    title: "محامي الجرائم ضد الأشخاص",
    subtitle: "دفاع متخصص في جرائم القتل والإصابات والتهديدات والإكراه والاحتجاز غير القانوني",
    description: "دفاع شامل في قضايا الجرائم ضد الحياة والسلامة الجسدية والمعنوية. يشمل القتل والإصابات والتهديدات والإكراه والاحتجاز غير القانوني والعنف الأسري. حماية الحقوق الأساسية في جميع مراحل الإجراءات الجنائية.",
    features: {
      title: "خدماتنا في الجرائم ضد الأشخاص",
      items: [
        "الدفاع في قضايا القتل والاغتيال",
        "جرائم الإصابات بجميع أنواعها",
        "التهديدات والإكراه والابتزاز",
        "الاحتجاز غير القانوني والاختطاف",
        "العنف الأسري والعنف ضد المرأة",
        "جرائم ضد الحرية والسلامة الأخلاقية"
      ]
    },
    relatedCases: "قضايا ذات صلة",
    faq: "أسئلة متكررة",
    cta: {
      title: "هل تحتاج إلى دفاع في قضية جرائم ضد الأشخاص؟",
      description: "فريقنا المتخصص متاح 24/7 لتقديم دفاع فوري وفعال",
      button: "استشارة عاجلة"
    },
    seo: {
      title: "محامون متخصصون في الجرائم ضد الأشخاص في مدريد",
      content1: "في ستانس للمحاماة، نحن متخصصون في الدفاع عن الجرائم ضد الأشخاص في مدريد وجميع أنحاء إسبانيا. نتعامل مع أخطر القضايا وأكثرها تعقيدًا، من القتل إلى الإصابات والتهديدات والعنف الأسري.",
      content2: "فريقنا لديه خبرة واسعة في جميع أنواع الجرائم ضد الأشخاص، مع فهم عميق للجوانب القانونية والنفسية والاجتماعية لهذه القضايا. نعمل بحساسية واحترافية قصوى، مع ضمان حماية حقوق عملائنا في جميع الأوقات.",
      content3: "نقدم دفاعًا فوريًا على مدار 24 ساعة، وهو أمر بالغ الأهمية في القضايا التي تنطوي على احتجاز احتياطي أو تدابير احترازية. خبرتنا تشمل القضايا في جميع المحاكم، من محاكم التحقيق إلى المحكمة العليا."
    }
  },
  en: {
    title: "Criminal Lawyer for Crimes Against Persons",
    subtitle: "Specialized defense in homicide, injuries, threats, coercion and illegal detention",
    description: "Comprehensive defense in cases of crimes against life, physical and moral integrity. Includes homicide, injuries, threats, coercion, illegal detention and gender violence. Protection of fundamental rights in all phases of the criminal process.",
    features: {
      title: "Our Services in Crimes Against Persons",
      items: [
        "Defense in homicide and murder cases",
        "Injury crimes of all types",
        "Threats, coercion and extortion",
        "Illegal detention and kidnapping",
        "Domestic violence and gender violence",
        "Crimes against freedom and moral integrity"
      ]
    },
    relatedCases: "Related Cases",
    faq: "Frequently Asked Questions",
    cta: {
      title: "Do you need defense in a crimes against persons case?",
      description: "Our specialized team is available 24/7 to provide immediate and effective defense",
      button: "Urgent Consultation"
    },
    seo: {
      title: "Specialized Lawyers in Crimes Against Persons in Madrid",
      content1: "At STANS ABOGADOS we are specialists in the defense of crimes against persons in Madrid and throughout Spain. We handle the most serious and complex cases, from homicides to injuries, threats and domestic violence.",
      content2: "Our team has extensive experience in all types of crimes against persons, with a deep understanding of the legal, psychological and social aspects of these cases. We work with maximum sensitivity and professionalism, guaranteeing the protection of our clients' rights at all times.",
      content3: "We offer immediate 24-hour defense, crucial in cases involving provisional imprisonment or precautionary measures. Our experience covers cases in all courts, from investigating courts to the Supreme Court."
    }
  },
  fr: {
    title: "Avocat pour Crimes contre les Personnes",
    subtitle: "Défense spécialisée en homicide, blessures, menaces, coercition et détention illégale",
    description: "Défense intégrale dans les affaires de crimes contre la vie, l'intégrité physique et morale. Inclut homicide, blessures, menaces, coercition, détention illégale et violence de genre. Protection des droits fondamentaux dans toutes les phases du processus pénal.",
    features: {
      title: "Nos Services en Crimes contre les Personnes",
      items: [
        "Défense dans les affaires d'homicide et d'assassinat",
        "Crimes de blessures de tous types",
        "Menaces, coercition et extorsion",
        "Détention illégale et enlèvement",
        "Violence domestique et violence de genre",
        "Crimes contre la liberté et l'intégrité morale"
      ]
    },
    relatedCases: "Cas Liés",
    faq: "Questions Fréquemment Posées",
    cta: {
      title: "Avez-vous besoin de défense dans une affaire de crimes contre les personnes?",
      description: "Notre équipe spécialisée est disponible 24/7 pour fournir une défense immédiate et efficace",
      button: "Consultation d'Urgence"
    },
    seo: {
      title: "Avocats Spécialisés en Crimes contre les Personnes à Madrid",
      content1: "Chez STANS ABOGADOS, nous sommes spécialisés dans la défense des crimes contre les personnes à Madrid et dans toute l'Espagne. Nous traitons les affaires les plus graves et complexes, des homicides aux blessures, menaces et violence domestique.",
      content2: "Notre équipe a une vaste expérience dans tous types de crimes contre les personnes, avec une compréhension profonde des aspects juridiques, psychologiques et sociaux de ces affaires. Nous travaillons avec une sensibilité et un professionnalisme maximum, garantissant la protection des droits de nos clients à tout moment.",
      content3: "Nous offrons une défense immédiate 24 heures sur 24, cruciale dans les affaires impliquant une détention provisoire ou des mesures préventives. Notre expérience couvre les affaires dans tous les tribunaux, des tribunaux d'instruction à la Cour suprême."
    }
  }
};

export default function DelitosPersonasPage() {
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
                <Users className="h-10 w-10 text-gold" />
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
                <strong className="text-black">Homicidio/asesinato</strong>, <strong className="text-black">lesiones</strong>, <strong className="text-black">amenazas y coacciones</strong>: {t.seo.content2}
              </p>
              <p className="text-base sm:text-lg text-black/80 leading-relaxed">
                <strong className="text-black">Detención ilegal</strong>, <strong className="text-black">violencia de género</strong>, <strong className="text-black">delitos contra la libertad</strong>: {t.seo.content3}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="bg-black py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-6">
                {t.features.title}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.features.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-lg p-6 hover:border-gold/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                    <p className="text-white/90 leading-relaxed">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-6">
                {t.faq}
              </h2>
            </motion.div>

            <div className="space-y-6">
              {faqs[language]?.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6 border-l-4 border-gold"
                >
                  <h3 className="text-lg font-semibold text-black mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-black/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-charleston to-black py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-6">
                {t.cta.title}
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                {t.cta.description}
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
                  {t.cta.button}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
