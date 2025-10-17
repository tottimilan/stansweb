'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Search, X, ChevronDown, ChevronUp, HelpCircle, ArrowRight, Phone, Mail, BookOpen, User } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/FooterOptimized';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { allFAQs, getFAQsByCategory, searchFAQs, faqCategories, FAQ } from '@/data/allFAQs';
import { faqTranslationsAr } from '@/data/faqTranslations';

const WHATSAPP = '34611687226';

export default function FAQPage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  // Función helper para obtener FAQ traducida
  const getTranslatedFAQ = (faq: FAQ) => {
    if (language === 'ar' && faqTranslationsAr[faq.id]) {
      return {
        ...faq,
        question: faqTranslationsAr[faq.id].question,
        answer: faqTranslationsAr[faq.id].answer
      };
    }
    return faq;
  };

  // Filtrar FAQs por categoría y búsqueda
  const filteredFAQs = useMemo(() => {
    let faqs = getFAQsByCategory(selectedCategory);
    
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      faqs = faqs.filter(faq => {
        const translatedFaq = getTranslatedFAQ(faq);
        return translatedFaq.question.toLowerCase().includes(term) ||
          translatedFaq.answer.toLowerCase().includes(term) ||
          faq.keywords.some(k => k.toLowerCase().includes(term));
      });
    }
    
    // Traducir FAQs si es necesario
    return faqs.map(faq => getTranslatedFAQ(faq));
  }, [selectedCategory, searchTerm, language]);

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const clearSearch = () => {
    setSearchTerm('');
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
                <HelpCircle className="h-10 w-10 text-gold" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gold mb-6 tracking-tight"
              >
                {t.faq.title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-4"
              >
                {t.faq.subtitle}. {t.faq.description}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-sm text-white/70"
              >
                {allFAQs.length} {t.faq.questionsAvailable}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="relative">
                <Search className={`absolute ${language === 'ar' ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2 h-6 w-6 text-black/40`} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={t.faq.searchPlaceholder}
                  className={`w-full ${language === 'ar' ? 'pr-14 pl-14' : 'pl-14 pr-14'} py-5 rounded-2xl border-2 border-gold/30 focus:border-gold focus:outline-none text-black text-lg placeholder-black/40 shadow-lg ${language === 'ar' ? 'text-right' : ''}`}
                />
                {searchTerm && (
                  <button
                    onClick={clearSearch}
                    className={`absolute ${language === 'ar' ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 text-black/40 hover:text-gold transition-colors`}
                  >
                    <X className="h-6 w-6" />
                  </button>
                )}
              </div>
              {searchTerm && (
                <p className="text-sm text-black/60 mt-3 text-center">
                  {filteredFAQs.length} {t.faq.resultsFor} "{searchTerm}"
                </p>
              )}
            </motion.div>

            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 justify-center mb-12"
            >
              {faqCategories.map((category) => {
                // Mapeo de categorías a traducciones
                const categoryTranslations: { [key: string]: string } = {
                  'Todas': t.faq.categories?.todas || category,
                  'Terrorismo': t.faq.categories?.terrorismo || category,
                  'Extradición': t.faq.categories?.extradicion || category,
                  'Defensa Urgente': t.faq.categories?.defensaUrgente || category,
                  'Derechos Fundamentales': t.faq.categories?.derechosFundamentales || category
                };
                
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gold text-black shadow-lg'
                        : 'bg-white border-2 border-gold/30 text-black/70 hover:border-gold/50 hover:text-black'
                    }`}
                  >
                    {categoryTranslations[category] || category}
                    <span className={`${language === 'ar' ? 'mr-2' : 'ml-2'} text-sm opacity-70`}>
                      ({getFAQsByCategory(category).length})
                    </span>
                  </button>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* FAQs List */}
        <section className="bg-charleston py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            {filteredFAQs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <HelpCircle className="h-16 w-16 text-gold/50 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t.faq.noResults}
                </h3>
                <p className="text-white/70 mb-6">
                  {t.faq.noResultsDescription}
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  <Phone className="h-5 w-5" />
                  WhatsApp 24/7
                </a>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl overflow-hidden hover:border-gold/40 transition-all"
                  >
                    {/* Question */}
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-start gap-4 flex-grow">
                        <HelpCircle className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                        <h3 className={`text-lg font-semibold text-white ${language === 'ar' ? 'text-right' : ''}`}>
                          {faq.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        {expandedFAQ === faq.id ? (
                          <ChevronUp className="h-6 w-6 text-gold" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gold" />
                        )}
                      </div>
                    </button>

                    {/* Answer */}
                    <AnimatePresence>
                      {expandedFAQ === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pl-16">
                            <p className={`text-white/80 leading-relaxed mb-4 ${language === 'ar' ? 'text-right' : ''}`}>
                              {faq.answer}
                            </p>
                            
                            {/* Links to related content */}
                            <div className="flex flex-wrap gap-3 pt-4 border-t border-gold/20">
                              {faq.blogSlug && (
                                <Link
                                  href={`/blog/${faq.blogSlug}`}
                                  className="inline-flex items-center gap-2 text-gold hover:text-gold/80 text-sm font-medium transition-colors"
                                >
                                  <BookOpen className="h-4 w-4" />
                                  {t.faq.readFullArticle}
                                  <ArrowRight className="h-3 w-3" />
                                </Link>
                              )}
                              {faq.lawyerSlug && (
                                <Link
                                  href={`/equipo/${faq.lawyerSlug}`}
                                  className="inline-flex items-center gap-2 text-gold hover:text-gold/80 text-sm font-medium transition-colors"
                                >
                                  <User className="h-4 w-4" />
                                  {t.faq.consultSpecialist}
                                  <ArrowRight className="h-3 w-3" />
                                </Link>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-black to-charleston py-20 border-t border-gold/20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <HelpCircle className="h-16 w-16 text-gold mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-6">
                {t.faq.notFound}
              </h2>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                {t.faq.notFoundDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="h-5 w-5" />
                  {t.faq.sendConsultation}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${language === 'ar' ? 'مرحباً، لدي سؤال عن قضية جنائية' : 'Hola, tengo una pregunta sobre un caso penal'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  WhatsApp 24/7
                </a>
              </div>

              <p className="text-white/60 text-sm mt-6">
                {t.faq.urgentResponse}
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton whatsapp={WHATSAPP} />
      </main>
    </>
  );
}

