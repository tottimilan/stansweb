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
  ]
};

export default function ViolenciaGeneroPage() {
  const { language } = useLanguage();
  const t = language === 'ar' ? {
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
  } : {
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
                    Protección Legal
                  </h3>
                  <p className="text-black/70 text-sm">
                    Información sobre órdenes de protección y medidas cautelares
                  </p>
                </div>
                
                <div className="bg-gray-50 border-2 border-gold/20 rounded-xl p-6">
                  <Scale className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Derechos y Garantías
                  </h3>
                  <p className="text-black/70 text-sm">
                    Protección de derechos fundamentales en procedimientos
                  </p>
                </div>
                
                <div className="bg-gray-50 border-2 border-gold/20 rounded-xl p-6">
                  <Users className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Apoyo Integral
                  </h3>
                  <p className="text-black/70 text-sm">
                    Asistencia legal completa con enfoque multidisciplinar
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
                {language === 'ar' ? 'قضايا مرتبطة' : 'Casos relacionados'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/casos/caso-lesiones-getafe" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">Lesiones</h3>
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
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">Amenazas</h3>
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
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">Homicidio</h3>
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
                {language === 'ar' ? 'نهجنا في قضايا العنف ضد المرأة' : 'Nuestro Enfoque en Casos de Violencia de Género'}
              </h3>

              <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-black/80">
                <li><strong>{language === 'ar' ? 'الحساسية والسرية:' : 'Sensibilidad y confidencialidad:'}</strong> {language === 'ar' ? 'معاملة جميع القضايا بأقصى درجات السرية' : 'Tratamiento de todos los casos con máxima discreción'}</li>
                <li><strong>{language === 'ar' ? 'دفاع متوازن:' : 'Defensa equilibrada:'}</strong> {language === 'ar' ? 'حماية حقوق جميع الأطراف المعنية' : 'Protección de derechos de todas las partes involucradas'}</li>
                <li><strong>{language === 'ar' ? 'رد فعل سريع:' : 'Respuesta rápida:'}</strong> {language === 'ar' ? 'تدخل فوري في حالات الطوارئ' : 'Intervención inmediata en situaciones de emergencia'}</li>
                <li><strong>{language === 'ar' ? 'نهج شامل:' : 'Enfoque integral:'}</strong> {language === 'ar' ? 'تنسيق مع المهنيين الآخرين عند الضرورة' : 'Coordinación con otros profesionales cuando es necesario'}</li>
              </ul>

              <h3 className="text-xl font-semibold text-black/90 mt-8 mb-4">
                {language === 'ar' ? 'الخدمات المتخصصة التي نقدمها' : 'Servicios Especializados que Ofrecemos'}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gold/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">{language === 'ar' ? 'للضحايا' : 'Para Víctimas'}</h4>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'تمثيل قانوني وطلبات أوامر الحماية' : 'Representación legal y solicitudes de órdenes de protección'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">{language === 'ar' ? 'للمتهمين' : 'Para Investigados'}</h4>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'دفاع قانوني صارم وحماية الحقوق' : 'Defensa legal rigurosa y protección de derechos'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">{language === 'ar' ? 'إجراءات عاجلة' : 'Procedimientos Urgentes'}</h4>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'أوامر الحماية والتدابير الاحترازية' : 'Órdenes de alejamiento y medidas cautelares'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <h4 className="font-semibold text-black mb-2">{language === 'ar' ? 'الأمور المدنية' : 'Asuntos Civiles'}</h4>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'الطلاق والحضانة والأمور المرتبطة' : 'Divorcio, custodia y asuntos conexos'}</p>
                </div>
              </div>

              <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-8">
                <h4 className="text-lg font-semibold text-gold mb-3">
                  {language === 'ar' ? 'هل تحتاج إلى مساعدة قانونية في قضية عنف أسري؟' : '¿Necesitas Asistencia Legal en un Caso de Violencia Doméstica?'}
                </h4>
                <p className="text-black/80 mb-4">
                  {language === 'ar'
                    ? 'نحن هنا للمساعدة. اتصل بنا للحصول على استشارة سرية. فريقنا لديه الخبرة والحساسية اللازمة للتعامل مع هذه القضايا الحساسة وحماية حقوقك.'
                    : 'Estamos aquí para ayudar. Contacta para una consulta confidencial. Nuestro equipo tiene la experiencia y sensibilidad necesarias para manejar estos casos delicados y proteger tus derechos.'}
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
