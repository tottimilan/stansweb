'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/FooterOptimized';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home, Shield, Users, Scale, FileText, Clock, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react';

const WHATSAPP = '34611687226';

// FAQ específico del servicio
const faqs = {
  es: [
    {
      question: "¿Cuál es la diferencia entre robo y hurto?",
      answer: "El robo implica violencia o intimidación sobre las personas o fuerza en las cosas. El hurto es la sustracción sin violencia ni fuerza. El robo tiene penas más graves (1-5 años) mientras que el hurto puede ser delito leve si no supera los 400€."
    },
    {
      question: "¿Qué es un robo con violencia?",
      answer: "Es cuando se emplea violencia física o intimidación contra las personas para apoderarse de bienes ajenos. Se agrava si se usan armas, se actúa en grupo, en casa habitada o si la víctima es menor o vulnerable."
    },
    {
      question: "¿Qué pena tiene pertenecer a una organización criminal?",
      answer: "La pertenencia a organización criminal dedicada a cometer delitos graves conlleva penas de 2 a 5 años. Si se es dirigente, las penas pueden llegar hasta 8 años. Se añade a la pena del delito concreto cometido."
    },
    {
      question: "¿Qué es la receptación?",
      answer: "La receptación es adquirir, recibir u ocultar bienes sabiendo que provienen de un delito. Se castiga con prisión de 6 meses a 2 años, pudiendo aumentar si es habitual o se trata de bienes de especial valor."
    }
  ],
  ar: [
    {
      question: "ما الفرق بين السرقة بالعنف والسرقة البسيطة؟",
      answer: "السرقة بالعنف تتضمن العنف أو التخويف ضد الأشخاص أو القوة على الأشياء. السرقة البسيطة هي الاستيلاء دون عنف أو قوة. السرقة بالعنف لها عقوبات أشد (1-5 سنوات) بينما السرقة البسيطة قد تكون جنحة بسيطة إذا لم تتجاوز 400 يورو."
    },
    {
      question: "ما هي السرقة بالعنف؟",
      answer: "هي عندما يُستخدم العنف الجسدي أو التخويف ضد الأشخاص للاستيلاء على ممتلكات الآخرين. تتفاقم إذا استُخدمت أسلحة، أو تم العمل في مجموعة، أو في منزل مأهول، أو إذا كانت الضحية قاصرًا أو ضعيفة."
    },
    {
      question: "ما عقوبة الانتماء لمنظمة إجرامية؟",
      answer: "الانتماء لمنظمة إجرامية مخصصة لارتكاب جرائم خطيرة يحمل عقوبات من 2 إلى 5 سنوات. إذا كان الشخص قائدًا، يمكن أن تصل العقوبات إلى 8 سنوات. تُضاف إلى عقوبة الجريمة المحددة المرتكبة."
    },
    {
      question: "ما هي جريمة الإخفاء؟",
      answer: "الإخفاء هو الحصول على أو استلام أو إخفاء ممتلكات مع العلم أنها من جريمة. يُعاقب بالسجن من 6 أشهر إلى سنتين، وقد يزيد إذا كان معتادًا أو كانت الممتلكات ذات قيمة خاصة."
    }
  ]
};

export default function RobosPatrimonioPage() {
  const { language } = useLanguage();
  const t = language === 'ar' ? {
    title: "محامي السرقات والجرائم ضد الممتلكات",
    subtitle: "دفاع متخصص في السرقة بالعنف والسرقة البسيطة والانتماء لمنظمة إجرامية والإخفاء",
    description: "دفاع متخصص في الجرائم ضد الممتلكات والانتماء لمنظمة إجرامية. خبرة في القضايا المعقدة للسرقات بالعنف، والسرقات بالقوة، والسرقات البسيطة، والإخفاء وتفكيك المجموعات الإجرامية المنظمة.",
    features: {
      title: "خدماتنا في السرقات والجرائم ضد الممتلكات",
      items: [
        "الدفاع في السرقات بالعنف والتخويف",
        "السرقات بالقوة في الأشياء",
        "السرقات البسيطة والسرقات المتعددة",
        "الانتماء لمنظمة إجرامية",
        "الإخفاء وغسيل الأموال",
        "الاحتيال وخيانة الأمانة"
      ]
    },
    relatedCases: "قضايا ذات صلة",
    faq: "أسئلة متكررة",
    cta: {
      title: "هل تحتاج إلى دفاع في قضية سرقة أو جرائم ضد الممتلكات؟",
      description: "فريقنا المتخصص متاح 24/7 لتقديم دفاع فوري وفعال",
      button: "استشارة عاجلة"
    },
    seo: {
      title: "محامون متخصصون في السرقات والجرائم ضد الممتلكات في مدريد",
      content1: "في ستانس للمحاماة، نحن خبراء في الدفاع عن الجرائم ضد الممتلكات في مدريد وجميع أنحاء إسبانيا. نتعامل مع القضايا الأكثر تعقيدًا، من السرقات بالعنف إلى الانتماء لمنظمات إجرامية.",
      content2: "فريقنا لديه خبرة واسعة في الدفاع عن المتهمين في عمليات واسعة النطاق ضد المجموعات الإجرامية المنظمة. نفهم تعقيدات هذه القضايا والحاجة إلى استراتيجية دفاع متطورة تأخذ في الاعتبار جميع جوانب القضية.",
      content3: "نقدم دفاعًا فوريًا على مدار 24 ساعة، وهو أمر بالغ الأهمية في القضايا التي تنطوي على اعتقالات متعددة وتدابير احترازية. خبرتنا تشمل التفاوض على الاتفاقات والدفاع في المحاكمات الشفوية."
    }
  } : {
    title: "Abogado Robos y Delitos Patrimoniales",
    subtitle: "Defensa especializada en robos con violencia, hurtos, pertenencia a organización criminal y receptación",
    description: "Defensa especializada en delitos contra el patrimonio y pertenencia a organización criminal. Experiencia en casos complejos de robos con violencia, robos con fuerza, hurtos, receptación y desmantelamiento de grupos criminales organizados.",
    features: {
      title: "Nuestros Servicios en Robos y Delitos Patrimoniales",
      items: [
        "Defensa en robos con violencia e intimidación",
        "Robos con fuerza en las cosas",
        "Hurtos y hurtos multirreincidentes",
        "Pertenencia a organización criminal",
        "Receptación y blanqueo de capitales",
        "Estafa y apropiación indebida"
      ]
    },
    relatedCases: "Casos Relacionados",
    faq: "Preguntas Frecuentes",
    cta: {
      title: "¿Necesitas Defensa en un Caso de Robo o Delitos Patrimoniales?",
      description: "Nuestro equipo especializado está disponible 24/7 para ofrecer defensa inmediata y efectiva",
      button: "Consulta Urgente"
    },
    seo: {
      title: "Abogados Especialistas en Robos y Delitos Patrimoniales en Madrid",
      content1: "En STANS ABOGADOS somos expertos en la defensa de delitos contra el patrimonio en Madrid y toda España. Manejamos los casos más complejos, desde robos con violencia hasta pertenencia a organizaciones criminales.",
      content2: "Nuestro equipo cuenta con amplia experiencia en la defensa de investigados en operaciones de gran envergadura contra grupos criminales organizados. Entendemos la complejidad de estos casos y la necesidad de una estrategia de defensa sofisticada que considere todos los aspectos del caso.",
      content3: "Ofrecemos defensa inmediata 24 horas, crucial en casos que implican detenciones múltiples y medidas cautelares. Nuestra experiencia incluye la negociación de conformidades y la defensa en juicios orales."
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
                <Home className="h-10 w-10 text-gold" />
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
                <strong className="text-black">Robos con violencia</strong>, <strong className="text-black">hurtos</strong>, <strong className="text-black">grupos criminales</strong>: {t.seo.content2}
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
                <Link href="/casos/operacion-luco-banda-rolex" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    OPERACIÓN LUCO – BANDA DEL ROLEX
                  </h3>
                  <p className="text-black/70 text-sm">Única libertad en operación contra grupo criminal</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Organización criminal</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Grupo criminal</span>
                    </div>
                  )}
                </Link>
                
                <Link href="/casos/caso-robo-violencia-absolucion" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    CASO ROBO CON VIOLENCIA - ABSOLUCIÓN
                  </h3>
                  <p className="text-black/70 text-sm">Sobreseimiento en robo con violencia</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Robo con violencia</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Sobreseimiento</span>
                    </div>
                  )}
                </Link>
                
                <Link href="/casos/operacion-bop-trafico-drogas" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    OPERACIÓN BOP – ATRACOS A VIVIENDAS DE LUJO
                  </h3>
                  <p className="text-black/70 text-sm">Archivo de diligencias por hurtos multirreincidentes</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Hurto</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Archivo</span>
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
                {language === 'ar' ? 'خبرتنا في السرقات والجرائم ضد الممتلكات' : 'Nuestra Experiencia en Robos y Delitos Patrimoniales'}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'السرقات بالعنف' : 'Robos con Violencia'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'دفاع في السرقات المسلحة والسرقات في الأماكن العامة' : 'Defensa en robos armados y atracos en establecimientos'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'المنظمات الإجرامية' : 'Organizaciones Criminales'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'دفاع في عمليات ضد المجموعات المنظمة' : 'Defensa en operaciones contra grupos organizados'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'السرقات البسيطة' : 'Hurtos'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'دفاع في السرقات البسيطة والسرقات المتكررة' : 'Defensa en hurtos simples y multirreincidencia'}</p>
                </div>
                <div className="bg-gold/5 p-4 rounded-lg">
                  <p className="font-semibold text-black mb-2 text-base">{language === 'ar' ? 'الإخفاء' : 'Receptación'}</p>
                  <p className="text-black/70 text-sm">{language === 'ar' ? 'دفاع في قضايا الإخفاء والبضائع المسروقة' : 'Defensa en casos de receptación y mercancía robada'}</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-black/90 mt-8 mb-4">
                {language === 'ar' ? 'نهجنا في قضايا السرقات' : 'Nuestro Enfoque en Casos de Robos'}
              </h3>

              <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-black/80">
                <li><strong>{language === 'ar' ? 'تحليل الأدلة:' : 'Análisis de pruebas:'}</strong> {language === 'ar' ? 'مراجعة دقيقة للأدلة والتسجيلات والشهادات' : 'Revisión exhaustiva de evidencias, grabaciones y testimonios'}</li>
                <li><strong>{language === 'ar' ? 'التفاوض:' : 'Negociación:'}</strong> {language === 'ar' ? 'بحث اتفاقات مواتية وبدائل للسجن' : 'Búsqueda de conformidades favorables y alternativas a prisión'}</li>
                <li><strong>{language === 'ar' ? 'الدفاع التقني:' : 'Defensa técnica:'}</strong> {language === 'ar' ? 'استخدام جميع الموارد القانونية المتاحة' : 'Uso de todos los recursos legales disponibles'}</li>
                <li><strong>{language === 'ar' ? 'حماية الحقوق:' : 'Protección de derechos:'}</strong> {language === 'ar' ? 'ضمان الإجراءات القانونية الواجبة في جميع المراحل' : 'Garantía del debido proceso en todas las fases'}</li>
              </ul>

                  <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-8">
                    <p className="text-lg font-semibold text-gold mb-3">
                      {language === 'ar' ? 'هل تواجه اتهامات بالسرقة أو جرائم ضد الممتلكات؟' : '¿Enfrentas Acusaciones por Robo o Delitos Patrimoniales?'}
                </p>
                <p className="text-black/80 mb-4">
                  {language === 'ar'
                    ? 'الوقت حاسم في هذه القضايا. اتصل بنا الآن للحصول على دفاع متخصص. فريقنا لديه الخبرة اللازمة للتعامل مع القضايا الأكثر تعقيدًا وحماية حقوقك.'
                    : 'El tiempo es crucial en estos casos. Contacta ahora para obtener defensa especializada. Nuestro equipo tiene la experiencia necesaria para manejar los casos más complejos y proteger tus derechos.'}
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
