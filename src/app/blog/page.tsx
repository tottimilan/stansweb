'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, BookOpen, Shield, Scale, FileText, AlertTriangle, Search, X, SlidersHorizontal, ChevronDown } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/FooterOptimized';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { terrorismBlogCardsAr, getNewBlogTranslation } from '@/data/blogPostsTranslations';
import { allBlogSlugs, blogPosts } from '@/data/blogPosts';
import Breadcrumb from '@/components/Breadcrumb';

const WHATSAPP = '34611687226';

const getBlogPosts = (t: any, language = 'es') => {
  // Helper para obtener traducción de blog de terrorismo
  const getTerrorismTranslation = (id: number, field: 'title' | 'excerpt' | 'category') => {
    if (language === 'ar' && terrorismBlogCardsAr[id as keyof typeof terrorismBlogCardsAr]) {
      return (terrorismBlogCardsAr[id as keyof typeof terrorismBlogCardsAr] as any)[field];
    }
    return null;
  };

  return [
  // NUEVOS BLOGS DE TERRORISMO (MÁS RECIENTES)
  {
    id: 11,
    title: getTerrorismTranslation(11, 'title') || 'Terrorismo y Libertad de Expresión: Dónde Está el Límite Legal',
    excerpt: getTerrorismTranslation(11, 'excerpt') || 'Análisis del conflicto entre libertad de expresión y delitos de terrorismo. Jurisprudencia del TC y TEDH, casos de raperos y límites constitucionales.',
    category: getTerrorismTranslation(11, 'category') || 'Terrorismo',
    author: 'Rubén Vaquero Arribas',
    date: '2025-01-07',
    readTime: '14 min',
    image: '/images/blog/libertad-expresion-terrorismo.jpg',
    slug: 'terrorismo-libertad-expresion-limite-legal',
    tags: ['libertad expresión', 'terrorismo', 'TEDH', 'enaltecimiento']
  },
  {
    id: 10,
    title: getTerrorismTranslation(10, 'title') || 'Derechos Fundamentales en Procedimientos de Terrorismo',
    excerpt: getTerrorismTranslation(10, 'excerpt') || 'Garantías procesales en casos de terrorismo. Incomunicación, prisión preventiva, secreto de sumario y cómo reclamar vulneraciones.',
    category: getTerrorismTranslation(10, 'category') || 'Terrorismo',
    author: 'Rubén Vaquero Arribas',
    date: '2025-01-06',
    readTime: '13 min',
    image: '/images/blog/derechos-terrorismo.jpg',
    slug: 'derechos-fundamentales-procedimientos-terrorismo',
    tags: ['derechos fundamentales', 'garantías procesales', 'terrorismo']
  },
  {
    id: 9,
    title: getTerrorismTranslation(9, 'title') || 'Pertenencia a Organización Terrorista: Defensa Legal',
    excerpt: getTerrorismTranslation(9, 'excerpt') || 'Análisis legal del delito de pertenencia a organización terrorista. Elementos del tipo penal y estrategias de defensa.',
    category: getTerrorismTranslation(9, 'category') || 'Terrorismo',
    author: 'Diego Cardona Valero',
    date: '2025-01-05',
    readTime: '14 min',
    image: '/images/blog/organizacion-terrorista.jpg',
    slug: 'pertenencia-organizacion-terrorista-defensa',
    tags: ['organización terrorista', 'ISIS', 'Al-Qaeda', 'audiencia nacional']
  },
  {
    id: 8,
    title: getTerrorismTranslation(8, 'title') || 'Financiación del Terrorismo: Tipos, Penas y Defensa',
    excerpt: getTerrorismTranslation(8, 'excerpt') || 'Todo sobre el delito de financiación del terrorismo. Blanqueo de capitales, criptomonedas y estrategias de defensa.',
    category: getTerrorismTranslation(8, 'category') || 'Terrorismo',
    author: 'Rubén Vaquero Arribas',
    date: '2025-01-04',
    readTime: '14 min',
    image: '/images/blog/financiacion-terrorismo.jpg',
    slug: 'financiacion-terrorismo-tipos-penas-defensa',
    tags: ['financiación', 'terrorismo', 'blanqueo', 'criptomonedas']
  },
  {
    id: 7,
    title: getTerrorismTranslation(7, 'title') || 'Autoadoctrinamiento Terrorista: Defensa Legal',
    excerpt: getTerrorismTranslation(7, 'excerpt') || 'Análisis del delito de autoadoctrinamiento terrorista y el concepto del "lobo solitario". Estrategias de defensa legal.',
    category: getTerrorismTranslation(7, 'category') || 'Terrorismo',
    author: 'Diego Cardona Valero',
    date: '2025-01-03',
    readTime: '13 min',
    image: '/images/blog/autoadoctrinamiento-terrorista.jpg',
    slug: 'autoadoctrinamiento-terrorista-defensa-legal',
    tags: ['autoadoctrinamiento', 'lobo solitario', 'terrorismo individual']
  },
  {
    id: 6,
    title: getTerrorismTranslation(6, 'title') || 'Terrorismo en Internet y Redes Sociales: Límites Legales',
    excerpt: getTerrorismTranslation(6, 'excerpt') || 'Guía sobre delitos de terrorismo en internet. Enaltecimiento, captación y límites de la libertad de expresión online.',
    category: getTerrorismTranslation(6, 'category') || 'Terrorismo',
    author: 'Diego Cardona Valero',
    date: '2025-01-02',
    readTime: '13 min',
    image: '/images/blog/terrorismo-internet.jpg',
    slug: 'terrorismo-internet-redes-sociales-limites',
    tags: ['terrorismo internet', 'redes sociales', 'propaganda']
  },
  {
    id: 5,
    title: getTerrorismTranslation(5, 'title') || 'Captación y Adoctrinamiento Yihadista por Internet',
    excerpt: getTerrorismTranslation(5, 'excerpt') || 'Todo sobre el delito de captación yihadista online. Elementos del tipo penal y estrategias de defensa especializada.',
    category: getTerrorismTranslation(5, 'category') || 'Terrorismo',
    author: 'Mounir Elyemlahy Chouati',
    date: '2025-01-01',
    readTime: '14 min',
    image: '/images/blog/captacion-yihadista.jpg',
    slug: 'captacion-adoctrinamiento-yihadista-internet',
    tags: ['captación yihadista', 'adoctrinamiento', 'terrorismo internet']
  },
  {
    id: 4,
    title: getTerrorismTranslation(4, 'title') || 'Enaltecimiento del Terrorismo en Redes Sociales',
    excerpt: getTerrorismTranslation(4, 'excerpt') || 'Análisis del delito de enaltecimiento del terrorismo en redes sociales. Límites de la libertad de expresión y jurisprudencia del TEDH.',
    category: getTerrorismTranslation(4, 'category') || 'Terrorismo',
    author: 'Mounir Elyemlahy Chouati',
    date: '2024-12-31',
    readTime: '14 min',
    image: '/images/blog/enaltecimiento-terrorismo.jpg',
    slug: 'enaltecimiento-terrorismo-redes-sociales-defensa',
    tags: ['enaltecimiento', 'terrorismo', 'redes sociales', 'libertad expresión']
  },
  {
    id: 3,
    title: getTerrorismTranslation(3, 'title') || 'Defensa Penal en Casos de Terrorismo ante la Audiencia Nacional',
    excerpt: getTerrorismTranslation(3, 'excerpt') || 'Guía completa sobre la defensa legal en delitos de terrorismo. Derechos del acusado y procedimiento ante la Audiencia Nacional.',
    category: getTerrorismTranslation(3, 'category') || 'Terrorismo',
    author: 'Mounir Elyemlahy Chouati',
    date: '2024-12-30',
    readTime: '15 min',
    image: '/images/blog/terrorismo-audiencia-nacional.jpg',
    slug: 'defensa-penal-terrorismo-audiencia-nacional',
    tags: ['terrorismo', 'audiencia nacional', 'defensa penal']
  },
  // BLOGS ANTERIORES
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
  }
];
};

const getPillarPages = (t: any) => [
  {
    title: t.blog.hubs.terrorismoAudienciaNacional.title,
    description: t.blog.hubs.terrorismoAudienciaNacional.description,
    icon: AlertTriangle,
    articles: 12,
    slug: 'terrorismo-audiencia-nacional',
    color: 'from-red-600 to-red-800'
  },
  {
    title: t.blog.hubs.defensaPenalUrgente.title,
    description: t.blog.hubs.defensaPenalUrgente.description,
    icon: Shield,
    articles: 27,
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
    articles: 16,
    slug: 'derechos-detenidos',
    color: 'from-green-600 to-green-800'
  }
];

export default function BlogPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const featuredPosts = getBlogPosts(t, language);
  const pillarPages = getPillarPages(t);
  
  // Generar TODOS los artículos desde allBlogSlugs
  const allBlogPosts = useMemo(() => {
    return allBlogSlugs.map(slug => {
      // Buscar en posts destacados primero
      const featured = featuredPosts.find(p => p.slug === slug);
      if (featured) return featured;

      // Buscar en blogPosts (datos reales)
      const realBlog = blogPosts.find(blog => blog.slug === slug);
      if (realBlog) {
        // Obtener traducción si existe
        const translation = getNewBlogTranslation(realBlog.id, language);
        return {
          id: realBlog.id,
          title: translation?.title || realBlog.title,
          excerpt: translation?.excerpt || realBlog.excerpt,
          category: translation?.category || realBlog.category,
          author: realBlog.author,
          date: realBlog.date,
          readTime: realBlog.readTime,
          image: realBlog.image,
          slug: realBlog.slug,
          tags: realBlog.tags
        };
      }

      // Si no está, crear entrada genérica
      return {
        id: slug,
        title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        excerpt: `Artículo sobre ${slug.replace(/-/g, ' ')}. Información legal especializada.`,
        category: 'Derecho Penal',
        author: 'Equipo STANS Abogados',
        date: '2024-12-01',
        readTime: '10 min',
        image: '/images/blog/default.jpg',
        slug: slug,
        tags: []
      };
    });
  }, [featuredPosts, language]);
  
  // Estado para controlar cuántos artículos mostrar
  const [visiblePosts, setVisiblePosts] = useState(9);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [showFilters, setShowFilters] = useState(false);
  
  // Obtener categorías únicas
  const categories = useMemo(() => {
    const cats = new Set(allBlogPosts.map(post => post.category));
    return Array.from(cats).sort();
  }, [allBlogPosts]);
  
  // Filtrar y ordenar artículos
  const filteredPosts = useMemo(() => {
    let posts = [...allBlogPosts];
    
    // Filtrar por búsqueda
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.category.toLowerCase().includes(term) ||
        post.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    // Filtrar por categoría
    if (selectedCategory !== 'all') {
      posts = posts.filter(post => post.category === selectedCategory);
    }
    
    // Ordenar por fecha
    posts.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
    
    return posts;
  }, [allBlogPosts, searchTerm, selectedCategory, sortOrder]);
  
  const hasMorePosts = visiblePosts < filteredPosts.length;
  
  const loadMorePosts = () => {
    setVisiblePosts(prev => Math.min(prev + 9, filteredPosts.length));
  };
  
  const clearSearch = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSortOrder('newest');
    setVisiblePosts(9);
    setShowFilters(false);
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
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-black mb-4">
                {language === 'ar' ? 'جميع المقالات' : language === 'en' ? 'All Articles' : language === 'fr' ? 'Tous les Articles' : 'Todos los Artículos'}
              </h2>
              <p className="text-black/70 text-lg mb-6">
                {language === 'ar' ? `${filteredPosts.length} مقالاً متاحاً` : language === 'en' ? `${filteredPosts.length} articles available` : language === 'fr' ? `${filteredPosts.length} articles disponibles` : `${filteredPosts.length} artículos disponibles`}
              </p>
              
              {/* Search and Filters - Mobile First */}
              <div className="max-w-4xl mx-auto">
                {/* Search Bar + Filter Toggle (Mobile) */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Search Input */}
                  <div className="relative flex-1">
                    <Search className={`absolute ${language === 'ar' ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 h-5 w-5 text-black/40`} />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setVisiblePosts(9);
                      }}
                      placeholder={language === 'ar' ? 'ابحث في المقالات...' : language === 'en' ? 'Search articles...' : language === 'fr' ? 'Rechercher des articles...' : 'Buscar artículos...'}
                      className={`w-full ${language === 'ar' ? 'pr-12 pl-12' : 'pl-12 pr-12'} py-3.5 rounded-xl border-2 border-gold/20 focus:border-gold/50 focus:outline-none text-black placeholder-black/40 bg-white ${language === 'ar' ? 'text-right' : ''}`}
                    />
                    {searchTerm && (
                      <button
                        onClick={clearSearch}
                        className={`absolute ${language === 'ar' ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 text-black/40 hover:text-gold transition-colors`}
                      >
                        <X className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                  
                  {/* Filter Toggle Button (visible on mobile, integrated on desktop) */}
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`sm:hidden flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border-2 ${showFilters ? 'border-gold bg-gold/10' : 'border-gold/20'} text-black font-medium transition-all`}
                  >
                    <SlidersHorizontal className="h-5 w-5" />
                    {language === 'ar' ? 'تصفية' : language === 'en' ? 'Filters' : language === 'fr' ? 'Filtres' : 'Filtros'}
                    {(selectedCategory !== 'all' || sortOrder !== 'newest') && (
                      <span className="w-2 h-2 bg-gold rounded-full"></span>
                    )}
                  </button>
                  
                  {/* Desktop Filters (always visible on sm+) */}
                  <div className="hidden sm:flex gap-3">
                    {/* Category Filter */}
                    <div className="relative">
                      <select
                        value={selectedCategory}
                        onChange={(e) => {
                          setSelectedCategory(e.target.value);
                          setVisiblePosts(9);
                        }}
                        className="appearance-none px-4 py-3.5 pr-10 rounded-xl border-2 border-gold/20 focus:border-gold/50 focus:outline-none text-black bg-white cursor-pointer min-w-[160px]"
                      >
                        <option value="all">
                          {language === 'ar' ? 'جميع الفئات' : language === 'en' ? 'All categories' : language === 'fr' ? 'Toutes catégories' : 'Todas las categorías'}
                        </option>
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black/40 pointer-events-none" />
                    </div>
                    
                    {/* Sort Order */}
                    <div className="relative">
                      <select
                        value={sortOrder}
                        onChange={(e) => {
                          setSortOrder(e.target.value as 'newest' | 'oldest');
                          setVisiblePosts(9);
                        }}
                        className="appearance-none px-4 py-3.5 pr-10 rounded-xl border-2 border-gold/20 focus:border-gold/50 focus:outline-none text-black bg-white cursor-pointer min-w-[140px]"
                      >
                        <option value="newest">
                          {language === 'ar' ? 'الأحدث أولاً' : language === 'en' ? 'Newest first' : language === 'fr' ? 'Plus récents' : 'Más recientes'}
                        </option>
                        <option value="oldest">
                          {language === 'ar' ? 'الأقدم أولاً' : language === 'en' ? 'Oldest first' : language === 'fr' ? 'Plus anciens' : 'Más antiguos'}
                        </option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black/40 pointer-events-none" />
                    </div>
                  </div>
                </div>
                
                {/* Mobile Filters Panel */}
                <AnimatePresence>
                  {showFilters && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="sm:hidden overflow-hidden"
                    >
                      <div className="pt-3 flex flex-col gap-3">
                        {/* Category Filter Mobile */}
                        <div className="relative">
                          <label className="text-xs text-black/60 mb-1 block px-1">
                            {language === 'ar' ? 'الفئة' : language === 'en' ? 'Category' : language === 'fr' ? 'Catégorie' : 'Categoría'}
                          </label>
                          <select
                            value={selectedCategory}
                            onChange={(e) => {
                              setSelectedCategory(e.target.value);
                              setVisiblePosts(9);
                            }}
                            className="w-full appearance-none px-4 py-3 pr-10 rounded-xl border-2 border-gold/20 focus:border-gold/50 focus:outline-none text-black bg-white cursor-pointer"
                          >
                            <option value="all">
                              {language === 'ar' ? 'جميع الفئات' : language === 'en' ? 'All categories' : language === 'fr' ? 'Toutes catégories' : 'Todas las categorías'}
                            </option>
                            {categories.map(cat => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 bottom-3 h-5 w-5 text-black/40 pointer-events-none" />
                        </div>
                        
                        {/* Sort Order Mobile */}
                        <div className="relative">
                          <label className="text-xs text-black/60 mb-1 block px-1">
                            {language === 'ar' ? 'ترتيب' : language === 'en' ? 'Sort by' : language === 'fr' ? 'Trier par' : 'Ordenar por'}
                          </label>
                          <select
                            value={sortOrder}
                            onChange={(e) => {
                              setSortOrder(e.target.value as 'newest' | 'oldest');
                              setVisiblePosts(9);
                            }}
                            className="w-full appearance-none px-4 py-3 pr-10 rounded-xl border-2 border-gold/20 focus:border-gold/50 focus:outline-none text-black bg-white cursor-pointer"
                          >
                            <option value="newest">
                              {language === 'ar' ? 'الأحدث أولاً' : language === 'en' ? 'Newest first' : language === 'fr' ? 'Plus récents' : 'Más recientes'}
                            </option>
                            <option value="oldest">
                              {language === 'ar' ? 'الأقدم أولاً' : language === 'en' ? 'Oldest first' : language === 'fr' ? 'Plus anciens' : 'Más antiguos'}
                            </option>
                          </select>
                          <ChevronDown className="absolute right-3 bottom-3 h-5 w-5 text-black/40 pointer-events-none" />
                        </div>
                        
                        {/* Clear Filters Button */}
                        {(selectedCategory !== 'all' || sortOrder !== 'newest') && (
                          <button
                            onClick={() => {
                              setSelectedCategory('all');
                              setSortOrder('newest');
                              setVisiblePosts(9);
                            }}
                            className="text-sm text-gold underline text-center py-2"
                          >
                            {language === 'ar' ? 'مسح الفلاتر' : language === 'en' ? 'Clear filters' : language === 'fr' ? 'Effacer les filtres' : 'Limpiar filtros'}
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Active Filters & Results Count */}
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  {searchTerm && (
                    <span className="text-sm text-black/60">
                      {language === 'ar'
                        ? `"${searchTerm}" نتائج البحث عن`
                        : language === 'en'
                        ? `Results for "${searchTerm}"`
                        : language === 'fr'
                        ? `Résultats pour "${searchTerm}"`
                        : `Resultados para "${searchTerm}"`}
                    </span>
                  )}
                  {selectedCategory !== 'all' && (
                    <span className="inline-flex items-center gap-1 text-sm bg-gold/10 text-gold px-3 py-1 rounded-full">
                      {selectedCategory}
                      <button
                        onClick={() => {
                          setSelectedCategory('all');
                          setVisiblePosts(9);
                        }}
                        className="hover:text-gold/70"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                  <span className="text-sm text-black/50 ml-auto">
                    {filteredPosts.length} {language === 'ar' ? 'مقالة' : language === 'en' ? 'articles' : language === 'fr' ? 'articles' : 'artículos'}
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(0, visiblePosts).map((post, index) => (
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
            {hasMorePosts && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <button 
                  onClick={loadMorePosts}
                  className="inline-flex items-center gap-2 bg-gold text-black px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  {t.blog.cargarMas}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-black/50 text-sm mt-3">
                  {language === 'ar'
                    ? `عرض ${visiblePosts} من ${filteredPosts.length} مقالاً`
                    : language === 'en'
                    ? `Showing ${visiblePosts} of ${filteredPosts.length} articles`
                    : language === 'fr'
                    ? `Affichage de ${visiblePosts} sur ${filteredPosts.length} articles`
                    : `Mostrando ${visiblePosts} de ${filteredPosts.length} artículos`}
                </p>
              </motion.div>
            )}
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

        {/* SEO Content Section - Texto rico sobre el blog */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gold mb-6">
                {language === 'ar' ? 'مدونة قانونية متخصصة في القانون الجنائي' : language === 'en' ? 'Legal Blog Specialized in Criminal Law' : language === 'fr' ? 'Blog Juridique Spécialisé en Droit Pénal' : 'Blog Jurídico Especializado en Derecho Penal'}
              </h2>
              
              <p className="text-black/80 leading-relaxed mb-6">
                {language === 'ar'
                  ? 'مدونة ستانس للمحاماة هي مصدر شامل للمعلومات القانونية المتخصصة في القانون الجنائي الإسباني. نكتب مقالات مفصلة حول الإرهاب، تسليم المطلوبين، حقوق المحتجزين، والإجراءات القضائية المعقدة.'
                  : language === 'en'
                  ? 'STANS ABOGADOS blog is a comprehensive source of legal information specialized in Spanish criminal law. We publish detailed articles about terrorism, extraditions, detainees\' rights, complex judicial procedures, and defense strategies. All our articles are written by practicing criminal lawyers with direct experience in the courts.'
                  : language === 'fr'
                  ? 'Le blog de STANS ABOGADOS est une source complète d\'informations juridiques spécialisées en droit pénal espagnol. Nous publions des articles détaillés sur le terrorisme, les extraditions, les droits des détenus, les procédures judiciaires complexes et les stratégies de défense. Tous nos articles sont écrits par des avocats pénalistes en exercice avec une expérience directe dans les tribunaux.'
                  : 'El blog de STANS ABOGADOS es una fuente completa de información legal especializada en derecho penal español. Publicamos artículos detallados sobre terrorismo, extradiciones, derechos de detenidos, procedimientos judiciales y estrategias de defensa. Todos nuestros artículos están escritos por abogados penalistas en ejercicio con experiencia directa en los tribunales.'}
              </p>

              <h3 className="text-xl font-semibold text-black/90 mt-8 mb-4">
                {language === 'ar' ? 'الموضوعات الرئيسية' : language === 'en' ? 'Main Topics' : language === 'fr' ? 'Sujets Principaux' : 'Temáticas Principales'}
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-black/80">
                <li><strong>{language === 'ar' ? 'الإرهاب والمحكمة الوطنية:' : language === 'en' ? 'Terrorism and National Court:' : language === 'fr' ? 'Terrorisme et Audience Nationale:' : 'Terrorismo y Audiencia Nacional:'}</strong> {language === 'ar' ? 'دليل شامل لقضايا الإرهاب في إسبانيا' : language === 'en' ? 'Complete guides on terrorism crimes in Spain' : language === 'fr' ? 'Guides complètes sur les crimes de terrorisme en Espagne' : 'Guías completas sobre delitos de terrorismo en España'}</li>
                <li><strong>{language === 'ar' ? 'تسليم المطلوبين الدولي:' : language === 'en' ? 'International Extraditions:' : language === 'fr' ? 'Extraditions Internationales:' : 'Extradiciones Internacionales:'}</strong> {language === 'ar' ? 'خاصة إسبانيا-المغرب' : language === 'en' ? 'Especially Spain-Morocco and EAW' : language === 'fr' ? 'Particulièrement Espagne-Maroc et Mandat d&apos;Arrêt Européen' : 'Especialmente España-Marruecos y OEDE'}</li>
                <li><strong>{language === 'ar' ? 'حقوق المحتجزين:' : language === 'en' ? 'Detainees\' Rights:' : language === 'fr' ? 'Droits des Détenus:' : 'Derechos de Detenidos:'}</strong> {language === 'ar' ? 'ما يجب أن تعرفه إذا تم احتجازك' : language === 'en' ? 'What you should know if you are detained' : language === 'fr' ? 'Ce que vous devez savoir si vous êtes détenu' : 'Qué debes saber si te detienen'}</li>
                <li><strong>{language === 'ar' ? 'الدفاع الجنائي العاجل:' : language === 'en' ? 'Urgent Criminal Defense:' : language === 'fr' ? 'Défense Pénale Urgente:' : 'Defensa Penal Urgente:'}</strong> {language === 'ar' ? 'خطوات فورية عند الاحتجاز' : language === 'en' ? 'Immediate steps when arrested' : language === 'fr' ? 'Étapes immédiates en cas d&apos;arrestation' : 'Pasos inmediatos en caso de detención'}</li>
              </ul>

              <p className="text-black/60 text-sm italic mt-8">
                {language === 'ar'
                  ? 'جميع مقالاتنا ذات طابع إعلامي ومبنية على خبرتنا الواقعية في المحاكم الإسبانية.'
                  : language === 'en'
                  ? 'All our articles are for informational purposes and are based on our real experience in Spanish courts.'
                  : language === 'fr'
                  ? 'Tous nos articles sont à caractère informatif et sont basés sur notre expérience réelle dans les tribunaux espagnols.'
                  : 'Todos nuestros artículos son de carácter informativo y están basados en nuestra experiencia real en tribunales españoles.'}
              </p>
            </article>
          </div>
        </section>

        <Footer />
        <WhatsAppButton whatsapp={WHATSAPP} />
      </main>
    </>
  );
}
