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
  ]
};

export default function DelitosPersonasPage() {
  const { language } = useLanguage();
  const t = language === 'ar' ? {
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
  } : {
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
                <strong className="text-black">Homicidio/asesinato</strong>, <strong className="text-black">lesiones</strong>, <strong className="text-black">amenazas y coacciones</strong>: {t.seo.content2}
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
                <Link href="/casos/caso-lesiones-getafe" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    Caso Homicidio
                  </h3>
                  <p className="text-black/70 text-sm">Investigación por muerte tras intervención policial</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Homicidio</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Acusación particular</span>
                    </div>
                  )}
                </Link>
                
                <Link href="/casos/sobreseimiento-amenazas-coacciones-extorsion" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    Caso Lesiones
                  </h3>
                  <p className="text-black/70 text-sm">Absolución en delito de lesiones</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Lesiones</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Absolución</span>
                    </div>
                  )}
                </Link>
                
                <Link href="/casos/abderrahim-akkouh-homicidio-torrejon" className="group bg-gray-50 border-2 border-gold/20 rounded-xl p-6 hover:border-gold/50 hover:shadow-xl transition-all">
                  <FileText className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gold transition-colors">
                    Caso Amenazas
                  </h3>
                  <p className="text-black/70 text-sm">Archivo por falta de indicios</p>
                  {language !== 'ar' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Amenazas</span>
                      <span className="inline-block text-xs bg-gold/10 text-black/70 border border-gold/20 rounded-full px-2 py-0.5">Coacciones</span>
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
                {language === 'ar' ? 'أنواع الجرائم ضد الأشخاص التي ندافع عنها' : 'Tipos de Delitos contra las Personas que Defendemos'}
              </h2>
              
              <p className="text-black/80 leading-relaxed mb-6">
                {language === 'ar' ? 'القتل، الاغتيال، القتل غير العمد' : 'Homicidio, asesinato, homicidio imprudente'}
              </p>

              <p className="text-black/80 leading-relaxed mb-6">
                {language === 'ar' ? 'الإصابات الخطيرة والبسيطة والمشاجرات' : 'Lesiones graves, leves y riñas tumultuarias'}
              </p>

              <p className="text-black/80 leading-relaxed mb-6">
                {language === 'ar' ? 'التهديدات، الإكراه، الاحتجاز غير القانوني' : 'Amenazas, coacciones, detención ilegal'}
              </p>

              <p className="text-black/80 leading-relaxed mb-6">
                {language === 'ar' ? 'العنف ضد المرأة والعنف المنزلي' : 'Violencia de género y violencia intrafamiliar'}
              </p>

              <h3 className="text-xl font-semibold text-black/90 mt-8 mb-4">
                {language === 'ar' ? 'لماذا تختار ستانس للمحاماة للجرائم ضد الأشخاص؟' : '¿Por Qué Elegir STANS ABOGADOS para Delitos contra las Personas?'}
              </h3>

              <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-black/80">
                <li><strong>{language === 'ar' ? 'خبرة في القضايا المعقدة:' : 'Experiencia en casos complejos:'}</strong> {language === 'ar' ? 'دفاع ناجح في قضايا القتل والإصابات الخطيرة' : 'Defensa exitosa en casos de homicidio y lesiones graves'}</li>
                <li><strong>{language === 'ar' ? 'فريق متعدد التخصصات:' : 'Equipo multidisciplinar:'}</strong> {language === 'ar' ? 'تعاون مع خبراء الطب الشرعي وعلم النفس' : 'Colaboración con peritos forenses y psicólogos'}</li>
                <li><strong>{language === 'ar' ? 'دفاع فوري:' : 'Defensa inmediata:'}</strong> {language === 'ar' ? 'تدخل سريع في الاحتجاز والتدابير الاحترازية' : 'Intervención rápida en detenciones y medidas cautelares'}</li>
                <li><strong>{language === 'ar' ? 'سرية تامة:' : 'Confidencialidad total:'}</strong> {language === 'ar' ? 'إدارة حساسة للقضايا ذات التأثير الشخصي' : 'Gestión sensible de casos con alto impacto personal'}</li>
              </ul>

              <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-8">
                <h4 className="text-lg font-semibold text-gold mb-3">
                  {language === 'ar' ? 'هل تواجه اتهامات في جريمة ضد الأشخاص؟' : '¿Enfrentas Acusaciones por Delitos contra las Personas?'}
                </h4>
                <p className="text-black/80 mb-4">
                  {language === 'ar'
                    ? 'لا تواجه هذه الاتهامات بمفردك. اتصل بنا الآن للحصول على دفاع متخصص. فريقنا لديه الخبرة اللازمة للتعامل مع أخطر القضايا وحماية حقوقك وحريتك.'
                    : 'No enfrentes estas acusaciones solo. Contacta ahora para obtener defensa especializada. Nuestro equipo tiene la experiencia necesaria para manejar los casos más graves y proteger tus derechos y libertad.'}
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
