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
import Breadcrumb from '@/components/Breadcrumb';

const WHATSAPP = '34611687226';

const getBlogPosts = (t: any) => [
  {
    id: 1,
    title: t.blog.posts.defensaPenalUrgente.title,
    excerpt: t.blog.posts.defensaPenalUrgente.excerpt,
    category: t.blog.posts.defensaPenalUrgente.category,
    author: 'Equipo STANS Abogados',
    date: '2024-12-15',
    readTime: '8 min',
    image: '/images/blog/defensa-urgente.jpg',
    slug: 'defensa-penal-urgente-guia-completa',
    tags: ['detención', 'derechos', 'urgencias', 'procedimiento']
  },
  {
    id: 2,
    title: t.blog.posts.procedimientosExtradicion.title,
    excerpt: t.blog.posts.procedimientosExtradicion.excerpt,
    category: t.blog.posts.procedimientosExtradicion.category,
    author: 'Rubén Vaquero Arribas',
    date: '2024-12-10',
    readTime: '12 min',
    image: '/images/blog/extradicion.jpg',
    slug: 'procedimientos-extradicion-espana',
    tags: ['extradición', 'UE', 'derechos', 'internacional']
  },
  {
    id: 3,
    title: t.blog.posts.derechosDetenidos.title,
    excerpt: t.blog.posts.derechosDetenidos.excerpt,
    category: t.blog.posts.derechosDetenidos.category,
    author: 'Mounir Elyemlahy Chouati',
    date: '2024-12-08',
    readTime: '10 min',
    image: '/images/blog/derechos-detenidos.jpg',
    slug: 'derechos-detenidos-garantias-procesales',
    tags: ['derechos', 'garantías', 'detención', 'asistencia']
  },
  {
    id: 4,
    title: t.blog.posts.delitosSaludPublica.title,
    excerpt: t.blog.posts.delitosSaludPublica.excerpt,
    category: t.blog.posts.delitosSaludPublica.category,
    author: 'Diego Cardona Valero',
    date: '2024-12-05',
    readTime: '15 min',
    image: '/images/blog/delitos-drogas.jpg',
    slug: 'delitos-salud-publica-drogas-consecuencias',
    tags: ['drogas', 'estupefacientes', 'penas', 'defensa']
  },
  {
    id: 5,
    title: t.blog.posts.terrorismoInternet.title,
    excerpt: t.blog.posts.terrorismoInternet.excerpt,
    category: t.blog.posts.terrorismoInternet.category,
    author: 'Equipo STANS Abogados',
    date: '2024-12-03',
    readTime: '14 min',
    image: '/images/blog/terrorismo-internet.jpg',
    slug: 'terrorismo-internet-enaltecimiento-captacion',
    tags: ['terrorismo', 'internet', 'redes sociales', 'enaltecimiento']
  },
  {
    id: 6,
    title: t.blog.posts.blanqueoCapitales.title,
    excerpt: t.blog.posts.blanqueoCapitales.excerpt,
    category: t.blog.posts.blanqueoCapitales.category,
    author: 'Rubén Vaquero Arribas',
    date: '2024-12-01',
    readTime: '16 min',
    image: '/images/blog/blanqueo-capitales.jpg',
    slug: 'blanqueo-capitales-detectar-defenderse',
    tags: ['blanqueo', 'capitales', 'económicos', 'lavado']
  }
];

const getPillarPages = (t: any) => [
  {
    title: t.blog.hubs.defensaPenalUrgente.title,
    description: t.blog.hubs.defensaPenalUrgente.description,
    icon: Shield,
    articles: 8,
    slug: 'defensa-penal-urgente',
    color: 'from-blue-600 to-blue-800'
  },
  {
    title: t.blog.hubs.procedimientosExtradicion.title,
    description: t.blog.hubs.procedimientosExtradicion.description,
    icon: Scale,
    articles: 6,
    slug: 'procedimientos-extradicion',
    color: 'from-purple-600 to-purple-800'
  },
  {
    title: t.blog.hubs.derechosDetenidos.title,
    description: t.blog.hubs.derechosDetenidos.description,
    icon: FileText,
    articles: 10,
    slug: 'derechos-detenidos',
    color: 'from-green-600 to-green-800'
  }
];

export default function BlogPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const blogPosts = getBlogPosts(t);
  const pillarPages = getPillarPages(t);

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
                <BookOpen className="h-10 w-10 text-gold" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gold mb-6 tracking-tight"
              >
                {t.blog.title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8"
              >
                {t.blog.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-6 text-sm text-white/70"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>{t.blog.legalExpert}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>{t.blog.actualizacionSemanal}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>{t.blog.casosReales}</span>
                </div>
              </motion.div>
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
                {t.blog.hubsTitle}
              </h2>
              <p className="text-white/80 text-lg">
                {t.blog.hubsSubtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillarPages.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.2) }}
                  viewport={{ once: true, margin: "-50px" }}
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
                          {pillar.articles} {t.blog.articles}
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
                {t.blog.articulosRecientes}
              </h2>
              <p className="text-black/70 text-lg">
                {t.blog.articulosSubtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.2) }}
                  viewport={{ once: true, margin: "-50px" }}
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
                            {new Date(post.date).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'es-ES', {
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
                {t.blog.cargarMas}
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
                {t.blog.mantenerseInformado}
              </h2>
              <p className="text-white/80 text-lg mb-8">
                {t.blog.newsletterDescription}
              </p>

              <div className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder={t.blog.placeholder}
                    className="flex-1 px-4 py-3 rounded-lg border border-gold/30 bg-white text-black placeholder-black/50 focus:outline-none focus:border-gold"
                  />
                  <button className="bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
                    {t.blog.suscribirse}
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
