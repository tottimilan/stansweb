'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { notFound, useParams } from 'next/navigation';

const WHATSAPP = '34611687226';

const blogPosts = [
  {
    id: 1,
    title: 'Defensa Penal Urgente: Guía Completa para Detenidos',
    excerpt: 'Todo lo que necesitas saber cuando eres detenido: derechos, procedimiento y cómo actuar. Guía práctica para situaciones de urgencia penal.',
    category: 'Defensa Penal Urgente',
    author: 'Equipo STANS Abogados',
    date: '2024-12-15',
    readTime: '8 min',
    image: '/images/blog/defensa-urgente.jpg',
    slug: 'defensa-penal-urgente-guia-completa',
    tags: ['detención', 'derechos', 'urgencias', 'procedimiento'],
    content: {
      introduction: 'Cuando una persona es detenida, los primeros momentos son cruciales. Conocer tus derechos y saber cómo actuar puede marcar la diferencia entre una defensa efectiva y complicaciones innecesarias.',
      sections: [
        {
          title: 'Derechos Inmediatos al Ser Detenido',
          content: 'Desde el momento de la detención tienes derecho a: asistencia letrada inmediata, informar a un familiar, no declarar sin abogado presente, y conocer los motivos de tu detención.'
        },
        {
          title: 'Primeros Pasos en Comisaría',
          content: 'Una vez en comisaría, se te tomarán huellas y foto, se te cacheará y se te informará de tus derechos. Es fundamental no declarar nada sin la presencia de tu abogado.'
        },
        {
          title: 'La Asistencia Letrada de Urgencia',
          content: 'El abogado de urgencia tiene acceso inmediato a tu expediente y puede asesorarte antes de cualquier declaración. Es un derecho fundamental que no debes renunciar.'
        },
        {
          title: 'Puesta a Disposición Judicial',
          content: 'En 24-72 horas serás puesto a disposición judicial. Es el momento clave donde se decide si quedas en libertad o se dicta alguna medida cautelar.'
        }
      ],
      conclusion: 'La defensa penal urgente requiere experiencia y rapidez. En STANS Abogados contamos con un equipo disponible 24/7 para asistirte en situaciones críticas.'
    }
  },
  {
    id: 2,
    title: 'Procedimientos de Extradición en España: Todo lo que Debes Saber',
    excerpt: 'Análisis completo del proceso de extradición: requisitos legales, plazos, derechos del extraditado y estrategias de defensa.',
    category: 'Extradiciones',
    author: 'Rubén Vaquero Arribas',
    date: '2024-12-10',
    readTime: '12 min',
    image: '/images/blog/extradicion.jpg',
    slug: 'procedimientos-extradicion-espana',
    tags: ['extradición', 'UE', 'derechos', 'internacional'],
    content: {
      introduction: 'La extradición es un procedimiento complejo que implica la entrega de una persona acusada o condenada a otro país. España tiene acuerdos específicos con diferentes países y organismos internacionales.',
      sections: [
        {
          title: 'Tipos de Extradición',
          content: 'Existen diferentes tipos: extradición UE (más ágil), extradición internacional (más compleja), y extradición por tratado bilateral. Cada una tiene sus particularidades procedimentales.'
        },
        {
          title: 'Fases del Procedimiento',
          content: 'El proceso consta de: solicitud inicial, admisión a trámite, audiencia del extraditado, resolución judicial y eventual entrega. Cada fase tiene plazos estrictos.'
        },
        {
          title: 'Derechos del Extraditado',
          content: 'Tienes derecho a asistencia letrada, traducción, impugnación de la solicitud, y en casos UE, a no ser juzgado dos veces por el mismo hecho.'
        },
        {
          title: 'Defensas Posibles',
          content: 'Se puede impugnar por defectos formales, prescripción, riesgo de trato degradante, o por ser perseguido por motivos políticos o discriminatorios.'
        }
      ],
      conclusion: 'La extradición requiere una defensa especializada en derecho internacional. Nuestros abogados tienen amplia experiencia en procedimientos de extradición.'
    }
  }
];

const relatedArticles = [
  {
    title: 'Derechos Constitucionales en Procedimientos Penales',
    slug: 'derechos-constitucionales-procedimientos-penales',
    category: 'Derechos Fundamentales'
  },
  {
    title: 'Asistencia Jurídica de Urgencia',
    slug: 'asistencia-juridica-urgencia',
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
  
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <ScrollProgress />
      <Navigation />

      <main className="bg-black">
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
                Volver al blog
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
                  {new Date(post.date).toLocaleDateString('es-ES', {
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
              <div className="text-black/80 leading-relaxed mb-12 text-lg">
                {post.content.introduction}
              </div>

              {/* Article Sections */}
              {post.content.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <h2 className="text-2xl font-bold text-black mb-6 border-b border-gold/20 pb-2">
                    {section.title}
                  </h2>
                  <p className="text-black/70 leading-relaxed text-base">
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

              {/* Conclusion */}
              <div className="bg-charleston text-white p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-gold mb-4">Conclusión</h3>
                <p className="text-white/90 leading-relaxed">
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
                      // Fallback: copiar URL al portapapeles
                      navigator.clipboard.writeText(window.location.href).then(() => {
                        alert('URL copiada al portapapeles');
                      }).catch(() => {
                        // Fallback para navegadores sin clipboard API
                        const textArea = document.createElement('textarea');
                        textArea.value = window.location.href;
                        document.body.appendChild(textArea);
                        textArea.select();
                        document.execCommand('copy');
                        document.body.removeChild(textArea);
                        alert('URL copiada al portapapeles');
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
                  Consultar caso similar
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
                Explora más contenido sobre este tema
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
                        <span className="text-sm font-medium">Leer artículo</span>
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
