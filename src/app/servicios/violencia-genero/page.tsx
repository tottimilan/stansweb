'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/FooterOptimized';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Shield, Users, Scale, FileText, Clock, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react';

const WHATSAPP = '34611687226';

// FAQ específico del servicio
const faqs = {
  es: [
    {
      question: "¿Qué se considera violencia de género?",
      answer: "La violencia de género abarca cualquier acto de violencia física, psicológica, sexual o económica ejercida sobre la mujer por quien sea o haya sido su pareja. Incluye amenazas, coacciones, privación de libertad y control económico."
    },
    {
      question: "¿Qué es una orden de protección?",
      answer: "Es una medida cautelar judicial que protege a la víctima prohibiendo al agresor acercarse, comunicarse o residir en determinados lugares. Se puede solicitar en comisaría, juzgado o fiscalía y se resuelve en máximo 72 horas."
    },
    {
      question: "¿Puedo defenderme si soy acusado falsamente?",
      answer: "Sí, toda persona tiene derecho a la defensa. Si existen denuncias falsas, es fundamental recopilar pruebas (mensajes, testigos, documentos) que demuestren la falsedad de las acusaciones y la inocencia del investigado."
    },
    {
      question: "¿Qué penas tienen los delitos de violencia de género?",
      answer: "Las penas varían según el delito: maltrato ocasional (6 meses a 1 año), maltrato habitual (6 meses a 3 años), lesiones (2 a 5 años). Se agravan con la orden de alejamiento y pueden incluir privación de patria potestad."
    }
  ],
  ar: [
    {
      question: "ما الذي يُعتبر عنفًا ضد المرأة؟",
      answer: "يشمل العنف ضد المرأة أي فعل عنف جسدي أو نفسي أو جنسي أو اقتصادي يُمارس على المرأة من قبل من كان أو لا يزال شريكها. يشمل التهديدات والإكراه والحرمان من الحرية والسيطرة الاقتصادية."
    },
    {
      question: "ما هو أمر الحماية؟",
      answer: "هو إجراء احترازي قضائي يحمي الضحية بمنع المعتدي من الاقتراب أو التواصل أو الإقامة في أماكن معينة. يمكن طلبه في مركز الشرطة أو المحكمة أو النيابة ويُحل في غضون 72 ساعة كحد أقصى."
    },
    {
      question: "هل يمكنني الدفاع عن نفسي إذا اتُهمت زورًا؟",
      answer: "نعم، لكل شخص الحق في الدفاع. إذا كانت هناك اتهامات كاذبة، فمن الضروري جمع الأدلة (الرسائل، الشهود، الوثائق) التي تثبت كذب الاتهامات وبراءة المتهم."
    },
    {
      question: "ما هي عقوبات جرائم العنف ضد المرأة؟",
      answer: "تختلف العقوبات حسب الجريمة: الإساءة العرضية (6 أشهر إلى سنة)، الإساءة المعتادة (6 أشهر إلى 3 سنوات)، الإصابات (2 إلى 5 سنوات). تتفاقم مع أمر الإبعاد وقد تشمل الحرمان من الوصاية الأبوية."
    }
  ],
  en: [
    {
      question: "What is considered gender violence?",
      answer: "Gender violence encompasses any act of physical, psychological, sexual or economic violence exercised against the woman by whoever is or has been her partner. It includes threats, coercion, deprivation of liberty and economic control."
    },
    {
      question: "What is a protection order?",
      answer: "It is a judicial precautionary measure that protects the victim by prohibiting the aggressor from approaching, communicating or residing in certain places. It can be requested at the police station, court or prosecutor's office and is resolved within a maximum of 72 hours."
    },
    {
      question: "Can I defend myself if I'm falsely accused?",
      answer: "Yes, everyone has the right to defense. If there are false accusations, it is essential to gather evidence (messages, witnesses, documents) that prove the falsity of the accusations and the innocence of the accused."
    },
    {
      question: "What are the penalties for gender violence crimes?",
      answer: "Penalties vary according to the crime: occasional abuse (6 months to 1 year), habitual abuse (6 months to 3 years), injuries (2 to 5 years). They are aggravated with the restraining order and may include deprivation of parental authority."
    }
  ],
  fr: [
    {
      question: "Qu'est-ce qui est considéré comme violence de genre?",
      answer: "La violence de genre englobe tout acte de violence physique, psychologique, sexuelle ou économique exercé contre la femme par quiconque est ou a été son partenaire. Elle comprend les menaces, la coercition, la privation de liberté et le contrôle économique."
    },
    {
      question: "Qu'est-ce qu'une ordonnance de protection?",
      answer: "C'est une mesure judiciaire précautionnelle qui protège la victime en interdisant à l'agresseur de s'approcher, de communiquer ou de résider dans certains lieux. Elle peut être demandée au commissariat, au tribunal ou au parquet et est résolue dans un délai maximum de 72 heures."
    },
    {
      question: "Puis-je me défendre si je suis faussement accusé?",
      answer: "Oui, toute personne a le droit à la défense. S'il y a des accusations fausses, il est essentiel de recueillir des preuves (messages, témoins, documents) qui prouvent la fausseté des accusations et l'innocence de l'accusé."
    },
    {
      question: "Quelles sont les peines pour les crimes de violence de genre?",
      answer: "Les peines varient selon le crime: maltraitance occasionnelle (6 mois à 1 an), maltraitance habituelle (6 mois à 3 ans), blessures (2 à 5 ans). Elles sont aggravées avec l'ordonnance d'éloignement et peuvent inclure la privation de l'autorité parentale."
    }
  ]
};

export default function ViolenciaGeneroPage() {
  const { language } = useLanguage();
  const translations = {
    es: {
      title: "Abogado Violencia de Género",
      subtitle: "Defensa especializada en casos de violencia doméstica y de género con sensibilidad y profesionalidad",
      description: "Especialistas en la defensa en casos de violencia de género y violencia doméstica. Ofrecemos asistencia legal tanto a víctimas como a investigados, garantizando la protección de derechos fundamentales y el debido proceso en todos los casos.",
      features: {
        title: "Nuestros Servicios en Violencia de Género",
        items: [
          "Defensa en acusaciones de violencia de género",
          "Representación de víctimas en procedimientos penales",
          "Órdenes de protección y medidas cautelares",
          "Defensa contra denuncias falsas",
          "Asistencia en procedimientos civiles conexos",
          "Protección de derechos de menores en estos casos"
        ]
      },
      relatedCases: "Artículos relacionados",
      faq: "Preguntas Frecuentes",
      cta: {
        title: "¿Necesitas Ayuda en un Caso de Violencia Doméstica?",
        description: "Nuestro equipo especializado está disponible para ofrecer asistencia legal con total confidencialidad y sensibilidad",
        button: "Consulta Confidencial"
      },
      seo: {
        title: "Abogados Especialistas en Violencia de Género en Madrid",
        content1: "En STANS ABOGADOS tratamos los casos de violencia de género con la máxima sensibilidad y profesionalidad. Entendemos la complejidad de estos casos y su impacto emocional en todas las partes involucradas, y trabajamos para garantizar justicia y protección de derechos.",
        content2: "Nuestro equipo cuenta con amplia experiencia representando tanto a víctimas como a investigados en casos de violencia doméstica. Ofrecemos una defensa legal rigurosa mientras mantenemos la sensibilidad necesaria para estos asuntos delicados, garantizando que se respeten los derechos de todas las partes.",
        content3: "Proporcionamos asistencia inmediata en situaciones de emergencia, incluyendo solicitudes de órdenes de protección y representación en procedimientos urgentes. También trabajamos con otros profesionales para ofrecer apoyo integral en estos casos complejos."
      }
    },
    ar: {
      title: "محامي العنف ضد المرأة",
      subtitle: "دفاع متخصص في قضايا العنف الأسري والعنف ضد المرأة بحساسية ومهنية",
      description: "متخصصون في الدفاع في قضايا العنف ضد المرأة والعنف الأسري. نقدم المساعدة القانونية لكل من الضحايا والمتهمين، مع ضمان حماية الحقوق الأساسية والإجراءات القانونية الواجبة في جميع الحالات.",
      features: {
        title: "خدماتنا في قضايا العنف ضد المرأة",
        items: [
          "الدفاع في اتهامات العنف ضد المرأة",
          "تمثيل الضحايا في الإجراءات الجنائية",
          "أوامر الحماية والتدابير الاحترازية",
          "الدفاع ضد الاتهامات الكاذبة",
          "المساعدة في الإجراءات المدنية المرتبطة",
          "حماية حقوق الأطفال في هذه القضايا"
        ]
      },
      relatedCases: "موارد ذات صلة",
      faq: "أسئلة متكررة",
      cta: {
        title: "هل تحتاج إلى مساعدة في قضية عنف أسري؟",
        description: "فريقنا المتخصص متاح لتقديم المساعدة القانونية بسرية تامة وحساسية",
        button: "استشارة سرية"
      },
      seo: {
        title: "محامون متخصصون في العنف ضد المرأة في مدريد",
        content1: "في ستانس للمحاماة، نتعامل مع قضايا العنف ضد المرأة بأقصى درجات الحساسية والمهنية. نفهم تعقيد هذه القضايا وتأثيرها العاطفي على جميع الأطراف المعنية، ونعمل لضمان العدالة وحماية الحقوق.",
        content2: "فريقنا لديه خبرة واسعة في تمثيل كل من الضحايا والمتهمين في قضايا العنف الأسري. نقدم دفاعًا قانونيًا صارمًا مع الحفاظ على الحساسية اللازمة لهذه القضايا الحساسة، وضمان احترام حقوق جميع الأطراف.",
        content3: "نقدم المساعدة الفورية في حالات الطوارئ، بما في ذلك طلبات أوامر الحماية والتمثيل في الإجراءات العاجلة. نعمل أيضًا مع المهنيين الآخرين لتقديم دعم شامل في هذه الحالات المعقدة."
      }
    },
    en: {
      title: "Gender Violence Lawyer",
      subtitle: "Specialized defense in domestic violence and gender violence cases with sensitivity and professionalism",
      description: "Specialists in defense in cases of gender violence and domestic violence. We offer legal assistance to both victims and defendants, guaranteeing the protection of fundamental rights and due process in all cases.",
      features: {
        title: "Our Services in Gender Violence Cases",
        items: [
          "Defense in gender violence accusations",
          "Representation of victims in criminal procedures",
          "Protection orders and precautionary measures",
          "Defense against false accusations",
          "Assistance in related civil procedures",
          "Protection of minors' rights in these cases"
        ]
      },
      relatedCases: "Related Articles",
      faq: "Frequently Asked Questions",
      cta: {
        title: "Do you need help in a domestic violence case?",
        description: "Our specialized team is available to provide legal assistance with total confidentiality and sensitivity",
        button: "Confidential Consultation"
      },
      seo: {
        title: "Lawyers Specialized in Gender Violence in Madrid",
        content1: "At STANS ABOGADOS we handle gender violence cases with the maximum sensitivity and professionalism. We understand the complexity of these cases and their emotional impact on all parties involved, and work to guarantee justice and protection of rights.",
        content2: "Our team has extensive experience representing both victims and defendants in domestic violence cases. We offer rigorous legal defense while maintaining the necessary sensitivity for these delicate matters, guaranteeing that the rights of all parties are respected.",
        content3: "We provide immediate assistance in emergency situations, including protection order requests and representation in urgent procedures. We also work with other professionals to offer comprehensive support in these complex cases."
      }
    },
    fr: {
      title: "Avocat Violence de Genre",
      subtitle: "Défense spécialisée dans les affaires de violence domestique et de genre avec sensibilité et professionnalisme",
      description: "Spécialistes dans la défense dans les affaires de violence de genre et de violence domestique. Nous offrons une assistance juridique tant aux victimes qu'aux accusés, garantissant la protection des droits fondamentaux et la procédure régulière dans tous les cas.",
      features: {
        title: "Nos Services dans les Affaires de Violence de Genre",
        items: [
          "Défense dans les accusations de violence de genre",
          "Représentation des victimes dans les procédures pénales",
          "Ordonnances de protection et mesures précautionnelles",
          "Défense contre les fausses accusations",
          "Assistance dans les procédures civiles connexes",
          "Protection des droits des mineurs dans ces cas"
        ]
      },
      relatedCases: "Articles Connexes",
      faq: "Questions Fréquemment Posées",
      cta: {
        title: "Avez-vous besoin d'aide dans une affaire de violence domestique?",
        description: "Notre équipe spécialisée est disponible pour offrir une assistance juridique avec une confidentialité et une sensibilité totales",
        button: "Consultation Confidentielle"
      },
      seo: {
        title: "Avocats Spécialisés en Violence de Genre à Madrid",
        content1: "Chez STANS ABOGADOS nous traitons les affaires de violence de genre avec la sensibilité et le professionnalisme maximum. Nous comprenons la complexité de ces affaires et leur impact émotionnel sur toutes les parties impliquées, et travaillons pour garantir justice et protection des droits.",
        content2: "Notre équipe possède une vaste expérience représentant tant les victimes que les accusés dans les affaires de violence domestique. Nous offrons une défense juridique rigoureuse tout en maintenant la sensibilité nécessaire pour ces affaires délicates, garantissant que les droits de toutes les parties sont respectés.",
        content3: "Nous fournissons une assistance immédiate dans les situations d'urgence, y compris les demandes d'ordonnances de protection et la représentation dans les procédures urgentes. Nous travaillons également avec d'autres professionnels pour offrir un soutien complet dans ces cas complexes."
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
                <Heart className="h-10 w-10 text-gold" />
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
                <strong className="text-black">Órdenes de protección</strong>, <strong className="text-black">defensa de investigados</strong>, <strong className="text-black">apoyo a víctimas</strong>: {t.seo.content2}
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
                <div className="bg-gray-50 border-2 border-gold/20 rounded-xl p-6">
                  <Shield className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {language === 'ar' ? 'الحماية القانونية' : language === 'en' ? 'Legal Protection' : language === 'fr' ? 'Protection Juridique' : 'Protección Legal'}
                  </h3>
                  <p className="text-black/70 text-sm">
                    {language === 'ar' ? 'معلومات حول أوامر الحماية والتدابير الاحترازية' : language === 'en' ? 'Information about protection orders and precautionary measures' : language === 'fr' ? 'Informations sur les ordonnances de protection et mesures précautionnelles' : 'Información sobre órdenes de protección y medidas cautelares'}
                  </p>
                </div>

                <div className="bg-gray-50 border-2 border-gold/20 rounded-xl p-6">
                  <Scale className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {language === 'ar' ? 'الحقوق والضمانات' : language === 'en' ? 'Rights and Guarantees' : language === 'fr' ? 'Droits et Garanties' : 'Derechos y Garantías'}
                  </h3>
                  <p className="text-black/70 text-sm">
                    {language === 'ar' ? 'حماية الحقوق الأساسية في الإجراءات' : language === 'en' ? 'Protection of fundamental rights in procedures' : language === 'fr' ? 'Protection des droits fondamentaux dans les procédures' : 'Protección de derechos fundamentales en procedimientos'}
                  </p>
                </div>

                <div className="bg-gray-50 border-2 border-gold/20 rounded-xl p-6">
                  <Users className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {language === 'ar' ? 'الدعم الشامل' : language === 'en' ? 'Comprehensive Support' : language === 'fr' ? 'Soutien Complet' : 'Apoyo Integral'}
                  </h3>
                  <p className="text-black/70 text-sm">
                    {language === 'ar' ? 'مساعدة قانونية كاملة مع نهج متعدد التخصصات' : language === 'en' ? 'Complete legal assistance with multidisciplinary approach' : language === 'fr' ? 'Assistance juridique complète avec approche multidisciplinaire' : 'Asistencia legal completa con enfoque multidisciplinar'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Casos relacionados */}
        <section className="bg-white py-10 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gold mb-8 text-center">
                {language === 'ar' ? 'قضايا مرتبطة' : language === 'en' ? 'Related Cases' : language === 'fr' ? 'Cas Connexes' : 'Casos relacionados'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/casos/caso-lesiones-getafe" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    CASO LESIONES (DOLOSAS)
                  </h3>
                  <p className="text-black/70 text-sm">Absolución en delito de lesiones</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Lesiones</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Absolución</span>
                    </div>
                  )}
                </Link>
                <Link href="/casos/sobreseimiento-amenazas-coacciones-extorsion" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    CASO AMENAZAS, COACCIONES Y EXTORSIÓN – SOBRESEIMIENTO
                  </h3>
                  <p className="text-black/70 text-sm">Archivo por falta de indicios</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Amenazas</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Coacciones</span>
                    </div>
                  )}
                </Link>
                <Link href="/casos/abderrahim-akkouh-homicidio-torrejon" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    CASO ABDERRAHIM AKKOUH – HOMICIDIO TORREJÓN
                  </h3>
                  <p className="text-black/70 text-sm">Acusación particular por muerte tras intervención</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Homicidio</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Acusación particular</span>
                    </div>
                  )}
                </Link>
              </div>
              <div className="text-center mt-6">
                <Link href="/casos" className="text-gold font-semibold hover:text-gold/80">{language === 'ar' ? 'عرض جميع الحالات' : language === 'en' ? 'View all cases' : language === 'fr' ? 'Voir tous les cas' : 'Ver todos los casos'} →</Link>
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
                {language === 'ar' ? 'نهجنا في قضايا العنف ضد المرأة' : language === 'en' ? 'Our Approach to Gender Violence Cases' : language === 'fr' ? 'Notre Approche des Affaires de Violence de Genre' : 'Nuestro Enfoque en Casos de Violencia de Género'}
              </h3>

              <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-black/80">
                <li><strong>{language === 'ar' ? 'الحساسية والسرية:' : language === 'en' ? 'Sensitivity and confidentiality:' : language === 'fr' ? 'Sensibilité et confidentialité:' : 'Sensibilidad y confidencialidad:'}</strong> {language === 'ar' ? 'معاملة جميع القضايا بأقصى درجات السرية' : language === 'en' ? 'Treatment of all cases with maximum discretion' : language === 'fr' ? 'Traitement de tous les cas avec une discrétion maximale' : 'Tratamiento de todos los casos con máxima discreción'}</li>
                <li><strong>{language === 'ar' ? 'دفاع متوازن:' : language === 'en' ? 'Balanced defense:' : language === 'fr' ? 'Défense équilibrée:' : 'Defensa equilibrada:'}</strong> {language === 'ar' ? 'حماية حقوق جميع الأطراف المعنية' : language === 'en' ? 'Protection of rights of all parties involved' : language === 'fr' ? 'Protection des droits de toutes les parties impliquées' : 'Protección de derechos de todas las partes involucradas'}</li>
                <li><strong>{language === 'ar' ? 'رد فعل سريع:' : language === 'en' ? 'Quick response:' : language === 'fr' ? 'Réponse rapide:' : 'Respuesta rápida:'}</strong> {language === 'ar' ? 'تدخل فوري في حالات الطوارئ' : language === 'en' ? 'Immediate intervention in emergency situations' : language === 'fr' ? 'Intervention immédiate dans les situations d&apos;urgence' : 'Intervención inmediata en situaciones de emergencia'}</li>
                <li><strong>{language === 'ar' ? 'نهج شامل:' : language === 'en' ? 'Comprehensive approach:' : language === 'fr' ? 'Approche complète:' : 'Enfoque integral:'}</strong> {language === 'ar' ? 'تنسيق مع المهنيين الآخرين عند الضرورة' : language === 'en' ? 'Coordination with other professionals when necessary' : language === 'fr' ? 'Coordination avec d&apos;autres professionnels quand nécessaire' : 'Coordinación con otros profesionales cuando es necesario'}</li>
              </ul>

              <h3 className="text-xl font-semibold text-black/90 mt-8 mb-4">
                {language === 'ar' ? 'الخدمات المتخصصة التي نقدمها' : language === 'en' ? 'Specialized Services We Offer' : language === 'fr' ? 'Services Spécialisés que Nous Offrons' : 'Servicios Especializados que Ofrecemos'}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'للضحايا' : language === 'en' ? 'For Victims' : language === 'fr' ? 'Pour les Victimes' : 'Para Víctimas'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'تمثيل قانوني وطلبات أوامر الحماية' : language === 'en' ? 'Legal representation and protection order requests' : language === 'fr' ? 'Représentation juridique et demandes d&apos;ordonnances de protection' : 'Representación legal y solicitudes de órdenes de protección'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'للمتهمين' : language === 'en' ? 'For Defendants' : language === 'fr' ? 'Pour les Accusés' : 'Para Investigados'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'دفاع قانوني صارم وحماية الحقوق' : language === 'en' ? 'Rigorous legal defense and rights protection' : language === 'fr' ? 'Défense juridique rigoureuse et protection des droits' : 'Defensa legal rigurosa y protección de derechos'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'إجراءات عاجلة' : language === 'en' ? 'Urgent Procedures' : language === 'fr' ? 'Procédures Urgentes' : 'Procedimientos Urgentes'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'أوامر الحماية والتدابير الاحترازية' : language === 'en' ? 'Protection orders and precautionary measures' : language === 'fr' ? 'Ordonnances de protection et mesures précautionnelles' : 'Órdenes de alejamiento y medidas cautelares'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'الأمور المدنية' : language === 'en' ? 'Civil Matters' : language === 'fr' ? 'Affaires Civiles' : 'Asuntos Civiles'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'الطلاق والحضانة والأمور المرتبطة' : language === 'en' ? 'Divorce, custody and related matters' : language === 'fr' ? 'Divorce, garde et affaires connexes' : 'Divorcio, custodia y asuntos conexos'}</p>
                </div>
              </div>

              <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-8">
                <p className="text-lg font-semibold text-gold mb-3">
                  {language === 'ar' ? 'هل تحتاج إلى مساعدة قانونية في قضية عنف أسري؟' : language === 'en' ? 'Do you need legal assistance in a domestic violence case?' : language === 'fr' ? 'Avez-vous besoin d&apos;assistance juridique dans une affaire de violence domestique?' : '¿Necesitas Asistencia Legal en un Caso de Violencia Doméstica?'}
                </p>
                <p className="text-black/80 mb-4">
                  {language === 'ar'
                    ? 'نحن هنا للمساعدة. اتصل بنا للحصول على استشارة سرية. فريقنا لديه الخبرة والحساسية اللازمة للتعامل مع هذه القضايا الحساسة وحماية حقوقك.'
                    : language === 'en'
                    ? 'We are here to help. Contact us for a confidential consultation. Our team has the necessary experience and sensitivity to handle these delicate cases and protect your rights.'
                    : language === 'fr'
                    ? 'Nous sommes là pour aider. Contactez-nous pour une consultation confidentielle. Notre équipe possède l&apos;expérience et la sensibilité nécessaires pour traiter ces affaires délicates et protéger vos droits.'
                    : 'Estamos aquí para ayudar. Contacta para una consulta confidencial. Nuestro equipo tiene la experiencia y sensibilidad necesarias para manejar estos casos delicados y proteger tus derechos.'}
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
