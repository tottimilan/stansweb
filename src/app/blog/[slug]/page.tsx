'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, ArrowRight, HelpCircle, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/FooterOptimized';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumb from '@/components/Breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { notFound, useParams } from 'next/navigation';
import { blogPosts, getBlogPostBySlug, isValidBlogSlug } from '@/data/blogPosts';
import { getNewBlogTranslation } from '@/data/blogPostsTranslations';
import BlogPostSchema from '@/components/BlogPostSchema';
import RelatedArticles from '@/components/RelatedArticles';

const WHATSAPP = '34611687226';

// Función para renderizar markdown básico (negritas y links)
const renderMarkdown = (text: string): ReactNode => {
  if (!text) return null;
  
  // Regex para encontrar negritas y links
  const markdownRegex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  
  // Dividir el texto por los patrones de markdown
  const parts = text.split(markdownRegex);
  
  return (
    <>
      {parts.map((part, index) => {
        // Verificar si es negrita
        const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
        if (boldMatch) {
          return (
            <strong key={index} className="font-semibold">
              {boldMatch[1]}
            </strong>
          );
        }
        
        // Verificar si es link
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          return (
            <a 
              key={index}
              href={linkMatch[2]} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold hover:text-gold/80 underline underline-offset-2 transition-colors"
            >
              {linkMatch[1]}
            </a>
          );
        }
        
        // Texto normal
        return part;
      })}
    </>
  );
};

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
  
  const basePost = getBlogPostBySlug(slug);

  if (!basePost) {
    notFound();
  }

  // Aplicar traducciones si existen para los nuevos blogs (IDs 40-73)
  let post = basePost;
  if (language !== 'es' && basePost.id >= 40 && basePost.id <= 73) {
    const translation = getNewBlogTranslation(basePost.id, language);
    if (translation) {
      post = {
        ...basePost,
        title: translation.title,
        excerpt: translation.excerpt,
        category: translation.category,
        content: translation.content
      };
    }
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
                {renderMarkdown(post.content.introduction)}
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
                    {renderMarkdown(section.title)}
                  </h2>
                  <div className={`text-black/70 leading-relaxed text-base ${language === 'ar' ? 'text-right' : ''}`}>
                    {renderMarkdown(section.content)}
                  </div>
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
                          {renderMarkdown(faq.question)}
                        </h3>
                        <div className={`text-black/70 leading-relaxed ${language === 'ar' ? 'text-right' : ''}`}>
                          {renderMarkdown(faq.answer)}
                        </div>
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
                <div className={`text-white/90 leading-relaxed [&_strong]:text-white [&_a]:text-gold [&_a]:hover:text-gold/80 ${language === 'ar' ? 'text-right' : ''}`}>
                  {renderMarkdown(post.content.conclusion)}
                </div>
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

        {/* Related Articles - Sistema automático de enlaces internos */}
        <RelatedArticles currentSlug={slug} category={post.category} maxArticles={6} />

        {/* SEO Conclusion Section - Expandir contenido textual */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gold mb-6">
                {language === 'ar' ? 'الخلاصة والتوصيات' : 'Conclusiones y Recomendaciones'}
              </h2>
              <div className="bg-gold/5 border-l-4 border-gold p-6 mb-6">
                <p className="text-black/80 leading-relaxed mb-4">
                  {language === 'ar' 
                    ? 'إذا كنت تواجه موقفاً قانونياً مشابهاً لما ورد في هذا المقال، فمن الضروري أن تحصل على مشورة قانونية متخصصة في أقرب وقت ممكن. كل حالة لها خصائصها الفريدة، وما ينطبق على قضية قد لا ينطبق على أخرى.'
                    : 'Si enfrentas una situación legal similar a la descrita en este artículo, es fundamental que obtengas asesoramiento legal especializado lo antes posible. Cada caso tiene sus particularidades únicas, y lo que aplica a un procedimiento puede no aplicar a otro.'}
                </p>
                <p className="text-black/80 leading-relaxed">
                  {language === 'ar'
                    ? 'في ستانس للمحاماة، لدينا خبرة واسعة في هذا النوع من القضايا ونحن متاحون 24/7 لمساعدتك. لا تتردد في الاتصال بنا.'
                    : 'En STANS ABOGADOS contamos con amplia experiencia en este tipo de casos y estamos disponibles 24/7 para ayudarte. No dudes en contactarnos para una valoración de tu situación.'}
                </p>
              </div>

              <h3 className="text-xl font-semibold text-black/90 mt-8 mb-4">
                {language === 'ar' ? 'خطوات التالية الموصى بها' : 'Siguientes Pasos Recomendados'}
              </h3>
              <ol className="list-decimal list-inside space-y-3 mb-6 ml-4 text-black/80">
                <li>
                  <strong>{language === 'ar' ? 'لا تتصرف بمفردك:' : 'No actúes solo:'}</strong>{' '}
                  {language === 'ar'
                    ? 'اتصل بمحامٍ متخصص قبل اتخاذ أي قرار أو الإدلاء بأي تصريح.'
                    : 'Contacta con un abogado especializado antes de tomar cualquier decisión o hacer declaraciones.'}
                </li>
                <li>
                  <strong>{language === 'ar' ? 'جمع الوثائق:' : 'Recopila documentación:'}</strong>{' '}
                  {language === 'ar'
                    ? 'اجمع كل الوثائق المتعلقة بقضيتك (إشعارات، استدعاءات، إلخ).'
                    : 'Reúne toda la documentación relacionada con tu caso (notificaciones, citaciones, etc.).'}
                </li>
                <li>
                  <strong>{language === 'ar' ? 'استشارة فورية:' : 'Consulta inmediata:'}</strong>{' '}
                  {language === 'ar'
                    ? 'اتصل بـ +34 611 68 72 26 أو واتساب 24/7.'
                    : 'Llama al +34 611 68 72 26 o WhatsApp 24/7.'}
                </li>
              </ol>

              <div className="bg-charleston/5 rounded-xl p-6 mt-8">
                <h4 className="text-lg font-semibold text-gold mb-3">
                  {language === 'ar' ? 'خبرة ستانس للمحاماة في هذا المجال' : 'Experiencia de STANS ABOGADOS en esta Materia'}
                </h4>
                <p className="text-black/70 text-sm leading-relaxed">
                  {{
                    es: 'Nuestro equipo de abogados penalistas cuenta con experiencia directa en casos similares ante tribunales españoles. Combinamos conocimiento técnico profundo con capacidad de negociación y litigación efectiva. Nuestros servicios están disponibles en español, inglés, árabe, francés e italiano.',
                    en: 'Our team of criminal lawyers has direct experience in similar cases before Spanish courts. We combine deep technical knowledge with negotiation and effective litigation capabilities. Our services are available in Spanish, English, Arabic, French and Italian.',
                    fr: 'Notre équipe d\'avocats pénalistes possède une expérience directe dans des affaires similaires devant les tribunaux espagnols. Nous combinons une connaissance technique approfondie avec des capacités de négociation et de contentieux efficaces. Nos services sont disponibles en espagnol, anglais, arabe, français et italien.',
                    ar: 'فريقنا من المحامين الجنائيين لديه خبرة مباشرة في قضايا مماثلة أمام المحاكم الإسبانية. نحن نجمع بين المعرفة التقنية العميقة والقدرة على التفاوض والتقاضي الفعال. خدماتنا متاحة بالإسبانية والإنجليزية والعربية والفرنسية والإيطالية.'
                  }[language] || 'Nuestro equipo de abogados penalistas cuenta con experiencia directa en casos similares ante tribunales españoles. Combinamos conocimiento técnico profundo con capacidad de negociación y litigación efectiva. Nuestros servicios están disponibles en español, inglés, árabe, francés e italiano.'}
                </p>
              </div>

              <p className="text-black/60 text-sm mt-8 italic">
                {language === 'ar'
                  ? 'تنويه: هذه المقالة ذات طابع إعلامي ولا تشكل استشارة قانونية. للحصول على مشورة محددة لحالتك، يرجى الاتصال بمحامٍ متخصص.'
                  : 'Aviso: Este artículo es de carácter informativo y no constituye asesoramiento legal. Para consejo específico sobre tu caso, contacta con un abogado especializado.'}
              </p>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton whatsapp={WHATSAPP} />
      </main>
    </>
  );
}
