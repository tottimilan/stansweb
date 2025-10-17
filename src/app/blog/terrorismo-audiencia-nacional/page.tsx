'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, Clock, AlertTriangle, Phone, ArrowRight, CheckCircle, Scale, FileText, BookOpen } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226';

const relatedArticles = [
  {
    title: 'Defensa Penal en Casos de Terrorismo',
    excerpt: 'Guía completa sobre defensa legal en delitos de terrorismo ante la Audiencia Nacional.',
    slug: 'defensa-penal-terrorismo-audiencia-nacional',
    readTime: '15 min'
  },
  {
    title: 'Enaltecimiento del Terrorismo en Redes Sociales',
    excerpt: 'Límites legales, libertad de expresión y defensa en casos de enaltecimiento.',
    slug: 'enaltecimiento-terrorismo-redes-sociales-defensa',
    readTime: '14 min'
  },
  {
    title: 'Captación y Adoctrinamiento Yihadista',
    excerpt: 'Elementos del delito, actuación policial y estrategias de defensa.',
    slug: 'captacion-adoctrinamiento-yihadista-internet',
    readTime: '14 min'
  },
  {
    title: 'Terrorismo en Internet y Redes Sociales',
    excerpt: 'Delitos por internet, monitorización policial y límites legales.',
    slug: 'terrorismo-internet-redes-sociales-limites',
    readTime: '13 min'
  },
  {
    title: 'Autoadoctrinamiento Terrorista',
    excerpt: 'El "lobo solitario", elementos probatorios y defensa legal.',
    slug: 'autoadoctrinamiento-terrorista-defensa-legal',
    readTime: '13 min'
  },
  {
    title: 'Financiación del Terrorismo',
    excerpt: 'Tipos, penas, criptomonedas y estrategias de defensa.',
    slug: 'financiacion-terrorismo-tipos-penas-defensa',
    readTime: '14 min'
  },
  {
    title: 'Pertenencia a Organización Terrorista',
    excerpt: 'Elementos del delito, diferencia con colaboración y defensa.',
    slug: 'pertenencia-organizacion-terrorista-defensa',
    readTime: '14 min'
  },
  {
    title: 'Derechos Fundamentales en Terrorismo',
    excerpt: 'Garantías procesales, incomunicación, secreto de sumario y TEDH.',
    slug: 'derechos-fundamentales-procedimientos-terrorismo',
    readTime: '13 min'
  },
  {
    title: 'Terrorismo y Libertad de Expresión',
    excerpt: 'Límites constitucionales, jurisprudencia TEDH y casos de raperos.',
    slug: 'terrorismo-libertad-expresion-limite-legal',
    readTime: '14 min'
  }
];

const terrorismScenarios = [
  {
    icon: AlertTriangle,
    title: 'Investigación por Mensajes en Redes',
    description: 'La policía te cita por contenido en Twitter, Instagram o TikTok',
    action: 'NO borres nada. Contacta abogado especializado inmediatamente'
  },
  {
    icon: Phone,
    title: 'Acusación de Enaltecimiento',
    description: 'Te imputan enaltecimiento del terrorismo',
    action: 'Defensa basada en libertad de expresión y jurisprudencia TEDH'
  },
  {
    icon: Shield,
    title: 'Detención por Captación',
    description: 'Acusado de reclutar o adoctrinar para terrorismo',
    action: 'Diferenciar conversación ideológica de captación activa'
  },
  {
    icon: Scale,
    title: 'Prisión Preventiva en Audiencia Nacional',
    description: 'Decretada prisión en caso de terrorismo',
    action: 'Recurrir para lograr libertad provisional con garantías'
  }
];

export default function TerrorismoAudienciaNacionalPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const breadcrumbItems = [
    { label: language === 'ar' ? 'المدونة' : 'Blog', href: '/blog' },
    { label: language === 'ar' ? 'الإرهاب والمحكمة الوطنية' : 'Terrorismo y Audiencia Nacional' }
  ];

  return (
    <>
      <ScrollProgress />
      <Navigation />
      
      <main className="bg-black pt-20">
        {/* Breadcrumb */}
        <section className="bg-charleston py-4 border-b border-gold/10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-charleston via-red-950/20 to-black text-offwhite py-20 sm:py-24 relative overflow-hidden">
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
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600/20 to-red-800/5 rounded-2xl mb-8 mx-auto border border-red-600/30"
              >
                <AlertTriangle className="h-10 w-10 text-red-500" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gold mb-6 tracking-tight"
              >
                {language === 'ar' ? 'الإرهاب والمحكمة الوطنية' : 'Terrorismo y Audiencia Nacional'}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8"
              >
                {language === 'ar'
                  ? 'دفاع متخصص في جرائم الإرهاب أمام المحكمة الوطنية. التمجيد، التجنيد الجهادي، التمويل والمنظمات الإرهابية. خبرة مثبتة في قضايا معقدة.'
                  : 'Defensa especializada en delitos de terrorismo ante la Audiencia Nacional. Enaltecimiento, captación yihadista, financiación y organizaciones terroristas. Experiencia probada en casos complejos.'}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-6 text-sm text-white/70"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>{language === 'ar' ? 'خبرة في المحكمة الوطنية' : 'Experiencia en Audiencia Nacional'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>{language === 'ar' ? 'محامي متخصص في الإرهاب' : 'Abogado Especialista en Terrorismo'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>{language === 'ar' ? 'متاح 24/7' : 'Disponible 24/7'}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Introducción */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-black mb-6">
                {language === 'ar' ? 'الدفاع المتخصص في قضايا الإرهاب' : 'Defensa Especializada en Casos de Terrorismo'}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className={`text-black/80 leading-relaxed mb-6 ${language === 'ar' ? 'text-right' : ''}`}>
                  {language === 'ar'
                    ? 'جرائم الإرهاب هي من أخطر الجرائم في النظام القانوني الإسباني، مع عقوبات تصل إلى 30 عاماً من السجن. للمحكمة الوطنية في مدريد الاختصاص الحصري في جميع القضايا المتعلقة بالإرهاب: التمجيد، التجنيد الجهادي، التمويل، الانتماء لمنظمات إرهابية والأعمال الإرهابية.'
                    : 'Los delitos de terrorismo son de los más graves del ordenamiento jurídico español, con penas de hasta 30 años de prisión. La Audiencia Nacional en Madrid tiene competencia exclusiva sobre todos los casos relacionados con terrorismo: enaltecimiento, captación yihadista, financiación, pertenencia a organizaciones terroristas y actos terroristas.'}
                </p>
                <p className={`text-black/80 leading-relaxed mb-6 ${language === 'ar' ? 'text-right' : ''}`}>
                  {language === 'ar'
                    ? 'في ستانس أبودادوس، محامونا منير إليملاهي ودييغو كاردونا متخصصون في الدفاع عن قضايا الإرهاب أمام المحكمة الوطنية. لدينا خبرة مباشرة في قضايا إعلامية، معرفة عميقة بالتشريع لمكافحة الإرهاب، وفريق ثلاثي اللغة (الإسبانية والإنجليزية والعربية) يمكنه مساعدة الأشخاص من أي أصل.'
                    : 'En STANS ABOGADOS, nuestros abogados Mounir Elyemlahy y Diego Cardona son especialistas en defensa de casos de terrorismo ante la Audiencia Nacional. Contamos con experiencia directa en casos mediáticos, conocimiento profundo de la legislación antiterrorista, y un equipo trilingüe (español, inglés y árabe) que puede asistir a personas de cualquier origen.'}
                </p>
                <p className={`text-black/80 leading-relaxed ${language === 'ar' ? 'text-right' : ''}`}>
                  {language === 'ar'
                    ? 'هذا المركز يجمع 9 مقالات متخصصة تغطي جميع جوانب الدفاع في قضايا الإرهاب. من التمجيد في وسائل التواصل الاجتماعي إلى التجنيد الجهادي، ومن الحقوق الأساسية إلى استراتيجيات الدفاع المحددة.'
                    : 'Este hub reúne 9 artículos especializados que cubren todos los aspectos de la defensa en casos de terrorismo. Desde el enaltecimiento en redes sociales hasta la captación yihadista, pasando por derechos fundamentales y estrategias de defensa específicas.'}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Escenarios de Urgencia */}
        <section className="bg-charleston py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gold mb-4">
                {language === 'ar' ? 'سيناريوهات الطوارئ' : 'Situaciones de Urgencia'}
              </h2>
              <p className="text-white/80 text-lg">
                {language === 'ar' 
                  ? 'ماذا تفعل في كل حالة - توجيهات فورية'
                  : 'Qué hacer en cada caso - Orientación inmediata'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {terrorismScenarios.map((scenario, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-red-600/20 rounded-2xl p-6 hover:border-red-600/40 transition-all"
                >
                  <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mb-4">
                    <scenario.icon className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {scenario.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-3">
                    {scenario.description}
                  </p>
                  <p className="text-red-400 text-sm font-medium flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    {scenario.action}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Artículos del Hub */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-black mb-4">
                {language === 'ar' ? 'المقالات المتخصصة' : 'Artículos Especializados'}
              </h2>
              <p className="text-black/70 text-lg">
                {language === 'ar' 
                  ? '9 مقالات شاملة حول الدفاع في قضايا الإرهاب'
                  : '9 artículos completos sobre defensa en casos de terrorismo'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-red-600/20 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-red-600/50"
                >
                  <Link href={`/blog/${article.slug}`}>
                    <div className="aspect-video bg-gradient-to-br from-red-600/20 to-red-800/5 flex items-center justify-center">
                      <FileText className="h-12 w-12 text-red-600/60" />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs bg-red-600/10 text-red-600 px-2 py-1 rounded-full font-medium">
                          {language === 'ar' ? 'الإرهاب' : 'Terrorismo'}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-black/50">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-black mb-3 group-hover:text-red-600 transition-colors leading-tight">
                        {article.title}
                      </h3>

                      <p className="text-black/70 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center text-red-600 text-sm font-medium">
                        <span>{language === 'ar' ? 'اقرأ المزيد' : 'Leer más'}</span>
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Contacto Urgente */}
        <section className="bg-gradient-to-r from-charleston to-black py-20 border-t border-red-600/20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-6">
                {language === 'ar' ? 'هل اتُهمت بجريمة إرهاب؟' : '¿Acusado de Delito de Terrorismo?'}
              </h2>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                {language === 'ar'
                  ? 'الوقت حاسم في قضايا الإرهاب. اتصل بفريقنا المتخصص فوراً. خدمة 24/7 للحالات العاجلة.'
                  : 'El tiempo es crítico en casos de terrorismo. Contacta con nuestro equipo especializado inmediatamente. Atención 24/7 para casos urgentes.'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Shield className="h-5 w-5" />
                  {language === 'ar' ? 'استشر قضيتك' : 'Consultar tu caso'}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${language === 'ar' ? 'مرحباً، اتُهمت بجريمة إرهاب وأحتاج مساعدة عاجلة' : 'Hola, me han acusado de terrorismo y necesito ayuda urgente'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  WhatsApp 24/7
                </a>
              </div>

              <div className="flex items-center justify-center gap-8 text-sm text-white/60">
                <div>
                  <Link href="/equipo/mounir-elyemlahy-chouati" className="text-gold hover:text-gold/80 transition-colors">
                    Mounir Elyemlahy - {language === 'ar' ? 'خبير الإرهاب' : 'Experto en Terrorismo'}
                  </Link>
                </div>
                <div>
                  <Link href="/equipo/diego-cardona-valero" className="text-gold hover:text-gold/80 transition-colors">
                    Diego Cardona - {language === 'ar' ? 'متخصص في المحكمة الوطنية' : 'Especialista Audiencia Nacional'}
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Información Clave */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-black mb-8 text-center">
                {language === 'ar' ? 'معلومات أساسية' : 'Información Esencial'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                  <h3 className="text-xl font-bold text-black mb-3">
                    {language === 'ar' ? 'الاختصاص' : 'Competencia'}
                  </h3>
                  <p className="text-black/70">
                    {language === 'ar'
                      ? 'المحكمة الوطنية في مدريد لديها الاختصاص الحصري في جميع جرائم الإرهاب في إسبانيا.'
                      : 'La Audiencia Nacional en Madrid tiene competencia exclusiva sobre todos los delitos de terrorismo en España.'}
                  </p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                  <h3 className="text-xl font-bold text-black mb-3">
                    {language === 'ar' ? 'العقوبات' : 'Penas'}
                  </h3>
                  <p className="text-black/70">
                    {language === 'ar'
                      ? 'من سنة واحدة (التمجيد) إلى 30 عاماً (أعمال إرهابية مع وفاة). كل جريمة لها عقوبتها المحددة.'
                      : 'Desde 1 año (enaltecimiento) hasta 30 años (actos terroristas con muerte). Cada delito tiene su pena específica.'}
                  </p>
                </div>
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
                  <h3 className="text-xl font-bold text-black mb-3">
                    {language === 'ar' ? 'الدفاع' : 'Defensa'}
                  </h3>
                  <p className="text-black/70">
                    {language === 'ar'
                      ? 'محامي متخصص ضروري. الإجراءات معقدة، الحبس الاحتياطي متكرر، والعواقب خطيرة جداً.'
                      : 'Abogado especializado esencial. Procedimientos complejos, prisión preventiva frecuente, y consecuencias muy graves.'}
                  </p>
                </div>
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

