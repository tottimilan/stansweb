'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, ArrowRight, HelpCircle, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { notFound, useParams } from 'next/navigation';
import { blogPosts, getBlogPostBySlug, isValidBlogSlug } from '@/data/blogPosts';
import BlogPostSchema from '@/components/BlogPostSchema';

const WHATSAPP = '34611687226';

const relatedArticles = [
  {
    title: 'Derechos Constitucionales en Procedimientos Penales',
    slug: 'derechos-constitucionales-detenido',
    category: 'Derechos Fundamentales'
  },
  {
    title: 'Asistencia Jurídica de Urgencia',
    slug: 'asistencia-letrada-urgencia',
    category: 'Asistencia Legal'
  },
  {
    title: 'Medidas Cautelares en Procesos Penales',
    slug: 'medidas-cautelares-procesos-penales',
    category: 'Procedimiento Penal'
  }
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { language } = useLanguage();
  const t = translations[language];
  
  // Verificar si el slug es válido antes de buscar el post
  if (!isValidBlogSlug(slug)) {
    notFound();
  }
  
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Generar Table of Contents desde las secciones
  const tocItems = post.content.sections.map((section, index) => ({
    id: `section-${index}`,
    title: section.title,
    level: 1
  }));

  // FAQ específicas por categoría de blog
  const getFAQs = () => {
    if (post.category === 'Terrorismo') {
      return [
        {
          question: language === 'ar' ? 'ما هي العقوبة لجرائم الإرهاب في إسبانيا؟' : '¿Cuál es la pena por delitos de terrorismo en España?',
          answer: language === 'ar' ? 'تتراوح العقوبات من 6 سنوات إلى 30 عاماً من السجن حسب خطورة الجريمة ونوعها. التمجيد: 1-3 سنوات، التجنيد: 2-5 سنوات، الانتماء لمنظمة: 6-15 سنوات، والأعمال الإرهابية: 15-30 سنوات.' : 'Las penas van desde 6 años hasta 30 años de prisión, dependiendo de la gravedad y tipo de delito. Enaltecimiento: 1-3 años, captación: 2-5 años, pertenencia a organización: 6-15 años, actos terroristas: 15-30 años.'
        },
        {
          question: language === 'ar' ? 'هل يمكنني الحصول على إفراج مؤقت في قضية إرهاب؟' : '¿Puedo obtener libertad provisional en un caso de terrorismo?',
          answer: language === 'ar' ? 'نعم، من الممكن لكنه صعب. يتطلب إثبات: جذور في إسبانيا، عدم وجود خطر هروب، غياب الخطورة، وتقديم ضمانات. في ستانس للمحاماة حققنا إفراجات مؤقتة في قضايا إرهاب من خلال حجج قوية.' : 'Sí, es posible aunque difícil. Requiere demostrar: arraigo en España, ausencia de riesgo de fuga, falta de peligrosidad, y ofrecer garantías. En STANS ABOGADOS hemos logrado libertades provisionales en casos de terrorismo mediante argumentación sólida.'
        },
        {
          question: language === 'ar' ? 'ماذا أفعل إذا اتُهمت بالتمجيد في وسائل التواصل الاجتماعي؟' : '¿Qué hago si me acusan de enaltecimiento en redes sociales?',
          answer: language === 'ar' ? 'لا تحذف أي شيء، لا تنشر أكثر، اتصل فوراً بمحامٍ متخصص (24/7 في ستانس)، لا تدلِ بأقوال دون محامٍ، اجمع سياق الرسائل الكامل. الدفاع المبكر حاسم.' : 'No borres nada, no publiques más, contacta inmediatamente con abogado especializado (24/7 en STANS), no declares sin abogado, recopila contexto completo de mensajes. La defensa temprana es crucial.'
        },
        {
          question: language === 'ar' ? 'من يحكم في قضايا الإرهاب في إسبانيا؟' : '¿Quién juzga los casos de terrorismo en España?',
          answer: language === 'ar' ? 'للمحكمة الوطنية (Audiencia Nacional) في مدريد الاختصاص الحصري في جميع جرائم الإرهاب في إسبانيا. تتكون من قضاة متخصصين وللإجراءات خصوصيات محددة.' : 'La Audiencia Nacional en Madrid tiene competencia exclusiva sobre todos los delitos de terrorismo en España. Está compuesta por jueces especializados y los procedimientos tienen particularidades específicas.'
        },
        {
          question: language === 'ar' ? 'هل يمكن اعتبار الفكاهة أو الراب تمجيداً؟' : '¿Puede considerarse el humor o el rap como enaltecimiento?',
          answer: language === 'ar' ? 'لا، حددت المحكمة الأوروبية لحقوق الإنسان (قضية ستروبيري) أن التعبيرات الفنية محمية بحرية التعبير. مجرد محتوى مثير للجدل أو مسيء لا يكفي: يجب إثبات تحريض حقيقي على العنف.' : 'No, el TEDH (caso Strawberry) estableció que las expresiones artísticas están protegidas por la libertad de expresión. Un contenido polémico u ofensivo no es suficiente: debe probarse incitación real a la violencia.'
        }
      ];
    }
    
    // FAQs genéricas para otros blogs
    return [
      {
        question: language === 'ar' ? 'هل أحتاج محامياً متخصصاً؟' : '¿Necesito un abogado especializado?',
        answer: language === 'ar' ? 'نعم. القضايا الجنائية المعقدة تتطلب محامين متخصصين يعرفون الاجتهادات القضائية المحددة واستراتيجيات الدفاع الأكثر فعالية.' : 'Sí. Los casos penales complejos requieren abogados especializados que conozcan la jurisprudencia específica y las estrategias de defensa más efectivas.'
      },
      {
        question: language === 'ar' ? 'كم تكلفة الاستشارة الأولى؟' : '¿Cuánto cuesta la primera consulta?',
        answer: language === 'ar' ? 'نقدم استشارة أولى لتقييم قضيتك. اتصل بـ +34 611 68 72 26 أو واتساب 24/7 لمناقشة حالتك والرسوم.' : 'Ofrecemos primera consulta para valorar tu caso. Contacta al +34 611 68 72 26 o WhatsApp 24/7 para discutir tu situación y honorarios.'
      },
      {
        question: language === 'ar' ? 'كم من الوقت يستغرق إجراء جنائي؟' : '¿Cuánto dura un procedimiento penal?',
        answer: language === 'ar' ? 'يعتمد على تعقيد القضية: إجراءات بسيطة (6-12 شهراً)، قضايا معقدة (1-3 سنوات)، قضايا أمام المحكمة الوطنية (2-5 سنوات). محاميك سيبقيك مطلعاً.' : 'Depende de la complejidad: procedimientos simples (6-12 meses), casos complejos (1-3 años), casos Audiencia Nacional (2-5 años). Tu abogado te mantendrá informado.'
      }
    ];
  };

  const faqs = getFAQs();
  
  // Breadcrumbs
  const breadcrumbItems = [
    { label: language === 'ar' ? 'الرئيسية' : 'Inicio', href: '/' },
    { label: language === 'ar' ? 'المدونة' : 'Blog', href: '/blog' },
    { label: post.category },
    { label: post.title }
  ];

  return (
    <>
      <BlogPostSchema post={post} language={language} faqs={faqs} />
      <ScrollProgress />
      <Navigation />
      <TableOfContents items={tocItems} />

      <main className="bg-black pt-20">
        {/* Breadcrumb */}
        <section className="bg-charleston py-4 border-b border-gold/10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-charleston to-black text-offwhite py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gold hover:text-white transition mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                {language === 'ar' ? 'العودة إلى المدونة' : 'Volver al blog'}
              </Link>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-1 text-sm text-white/70">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gold mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-lg text-white/80 mb-6">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'es-ES', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <article className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {/* Introduction */}
              <div className={`text-black/80 leading-relaxed mb-12 text-lg ${language === 'ar' ? 'text-right' : ''}`}>
                {post.content.introduction}
              </div>

              {/* Article Sections with IDs for TOC */}
              {post.content.sections.map((section, index) => (
                <motion.div
                  key={index}
                  id={`section-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-12 scroll-mt-32"
                >
                  <h2 className={`text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2 ${language === 'ar' ? 'text-right' : ''}`}>
                    {section.title}
                  </h2>
                  <p className={`text-black/70 leading-relaxed text-base ${language === 'ar' ? 'text-right' : ''}`}>
                    {section.content}
                  </p>
                </motion.div>
              ))}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-12">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm bg-gold/10 text-gold px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* FAQ Section */}
              {faqs.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-12 bg-gold/5 border border-gold/20 rounded-2xl p-8"
                >
                  <h2 className={`text-2xl font-bold text-black mb-6 flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <HelpCircle className="h-6 w-6 text-gold" />
                    {language === 'ar' ? 'الأسئلة الشائعة' : 'Preguntas Frecuentes'}
                  </h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="border-l-4 border-gold pl-6"
                      >
                        <h3 className={`text-lg font-semibold text-black mb-3 flex items-start gap-2 ${language === 'ar' ? 'text-right flex-row-reverse' : ''}`}>
                          <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                          {faq.question}
                        </h3>
                        <p className={`text-black/70 leading-relaxed ${language === 'ar' ? 'text-right' : ''}`}>
                          {faq.answer}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h3 className={`text-xl font-semibold text-gold mb-4 ${language === 'ar' ? 'text-right' : ''}`}>
                  {language === 'ar' ? 'الخاتمة' : 'Conclusión'}
                </h3>
                <p className={`text-white/90 leading-relaxed ${language === 'ar' ? 'text-right' : ''}`}>
                  {post.content.conclusion}
                </p>
              </div>

              {/* Share Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-12 pt-8 border-t border-gold/20">
                <button 
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: post.title,
                        text: post.excerpt,
                        url: window.location.href,
                      }).catch((err) => console.error('Error sharing:', err));
                    } else {
                      navigator.clipboard.writeText(window.location.href).then(() => {
                        alert(language === 'ar' ? 'تم نسخ الرابط' : 'URL copiada al portapapeles');
                      }).catch(() => {
                        const textArea = document.createElement('textarea');
                        textArea.value = window.location.href;
                        document.body.appendChild(textArea);
                        textArea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textArea);
                        alert(language === 'ar' ? 'تم نسخ الرابط' : 'URL copiada al portapapeles');
                      });
                    }
                  }}
                  className="flex items-center gap-2 text-black/70 hover:text-gold transition bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
                >
                  <Share2 className="h-4 w-4" />
                  {t.blog.compartirArticulo}
                </button>
                <Link
                  href="/#contacto"
                  className="inline-flex items-center gap-2 bg-gold text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:opacity-90 transition text-sm sm:text-base"
                >
                  {language === 'ar' ? 'استشر قضية مماثلة' : 'Consultar caso similar'}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </article>

        {/* Related Articles */}
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
                {t.blog.articulosRelacionados}
              </h2>
              <p className="text-white/80">
                {language === 'ar' ? 'استكشف المزيد من المحتوى حول هذا الموضوع' : 'Explora más contenido sobre este tema'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/blog/${article.slug}`}>
                    <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gold/20 hover:border-gold/50 h-full">
                      <div className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full w-fit mb-3">
                        {article.category}
                      </div>
                      <h3 className="text-lg font-semibold text-black mb-3 hover:text-gold transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center text-gold">
                        <span className="text-sm font-medium">{language === 'ar' ? 'اقرأ المقال' : 'Leer artículo'}</span>
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton whatsapp={WHATSAPP} />
      </main>
    </>
  );
}
