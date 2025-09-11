'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, BookOpen, Shield, Scale, FileText } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

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
    tags: ['detención', 'derechos', 'urgencias', 'procedimiento']
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
    tags: ['extradición', 'UE', 'derechos', 'internacional']
  },
  {
    id: 3,
    title: 'Derechos de los Detenidos: Conoce tus Garantías Procesales',
    excerpt: 'Descubre todos los derechos que tienes como detenido: asistencia letrada, comunicación, condiciones de detención y habeas corpus.',
    category: 'Derechos de Detenidos',
    author: 'Mounir Elyemlahy Chouati',
    date: '2024-12-08',
    readTime: '10 min',
    image: '/images/blog/derechos-detenidos.jpg',
    slug: 'derechos-detenidos-garantias-procesales',
    tags: ['derechos', 'garantías', 'detención', 'asistencia']
  },
  {
    id: 4,
    title: 'Delitos contra la Salud Pública: Drogas y Consecuencias Legales',
    excerpt: 'Análisis detallado de los delitos relacionados con sustancias estupefacientes: tipos, penas, atenuantes y estrategias de defensa.',
    category: 'Delitos contra la Salud Pública',
    author: 'Diego Cardona Valero',
    date: '2024-12-05',
    readTime: '15 min',
    image: '/images/blog/delitos-drogas.jpg',
    slug: 'delitos-salud-publica-drogas-consecuencias',
    tags: ['drogas', 'estupefacientes', 'penas', 'defensa']
  },
  {
    id: 5,
    title: 'Terrorismo en Internet: Enaltecimiento y Captación Online',
    excerpt: 'Estudio de los delitos de terrorismo en el ámbito digital: enaltecimiento, captación yihadista y responsabilidad penal en redes sociales.',
    category: 'Ciberseguridad Penal',
    author: 'Equipo STANS Abogados',
    date: '2024-12-03',
    readTime: '14 min',
    image: '/images/blog/terrorismo-internet.jpg',
    slug: 'terrorismo-internet-enaltecimiento-captacion',
    tags: ['terrorismo', 'internet', 'redes sociales', 'enaltecimiento']
  },
  {
    id: 6,
    title: 'Blanqueo de Capitales: Cómo Detectarlo y Defenderse',
    excerpt: 'Guía completa sobre el delito de blanqueo: origen de fondos, técnicas de lavado, responsabilidad penal y estrategias de defensa.',
    category: 'Delitos Económicos',
    author: 'Rubén Vaquero Arribas',
    date: '2024-12-01',
    readTime: '16 min',
    image: '/images/blog/blanqueo-capitales.jpg',
    slug: 'blanqueo-capitales-detectar-defenderse',
    tags: ['blanqueo', 'capitales', 'económicos', 'lavado']
  }
];

const pillarPages = [
  {
    title: 'Defensa Penal Urgente',
    description: 'Guías completas para situaciones de urgencia penal: detenciones, registros, declaraciones y primeros pasos.',
    icon: Shield,
    articles: 8,
    slug: 'defensa-penal-urgente',
    color: 'from-blue-600 to-blue-800'
  },
  {
    title: 'Procedimientos de Extradición',
    description: 'Todo sobre extradiciones: procedimientos UE, derechos del extraditado, plazos y recursos disponibles.',
    icon: Scale,
    articles: 6,
    slug: 'procedimientos-extradicion',
    color: 'from-purple-600 to-purple-800'
  },
  {
    title: 'Derechos de Detenidos',
    description: 'Conoce tus derechos como detenido: asistencia letrada, comunicaciones, condiciones y habeas corpus.',
    icon: FileText,
    articles: 10,
    slug: 'derechos-detenidos',
    color: 'from-green-600 to-green-800'
  }
];

export default function BlogPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <ScrollProgress />
      <Navigation />

      <main className="bg-black">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-charleston to-black text-offwhite py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <BookOpen className="h-16 w-16 text-gold mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-bold text-gold mb-6">
                Blog Jurídico STANS
              </h1>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
                Conocimiento especializado en derecho penal. Artículos, guías y análisis sobre temas legales que afectan a nuestra sociedad.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pillar Pages Section */}
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
                Hubs de Contenido
              </h2>
              <p className="text-white/80 text-lg">
                Guías completas sobre temas específicos del derecho penal
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillarPages.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={`/blog/${pillar.slug}`}>
                    <div className="bg-white rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 border border-gold/20 hover:border-gold/50">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <pillar.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-gold transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-black/70 mb-4 flex-grow">
                        {pillar.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gold font-medium">
                          {pillar.articles} artículos
                        </span>
                        <ArrowRight className="h-4 w-4 text-gold group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Section */}
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
                Artículos Recientes
              </h2>
              <p className="text-black/70 text-lg">
                Mantente informado con nuestros últimos análisis y guías legales
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-gold/20 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-gold/50"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="aspect-video bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-gold/60" />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-black/50">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-black mb-3 group-hover:text-gold transition-colors leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-black/70 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-black/50" />
                          <span className="text-sm text-black/70">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-black/50" />
                          <span className="text-sm text-black/70">
                            {new Date(post.date).toLocaleDateString('es-ES', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Load More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button className="inline-flex items-center gap-2 bg-gold text-black px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
                Cargar más artículos
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-charleston py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gold mb-4">
                Mantente Informado
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Recibe nuestros últimos artículos y actualizaciones legales en tu correo electrónico.
              </p>

              <div className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="flex-1 px-4 py-3 rounded-lg border border-gold/30 bg-white text-black placeholder-black/50 focus:outline-none focus:border-gold"
                  />
                  <button className="bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
                    Suscribirse
                  </button>
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
