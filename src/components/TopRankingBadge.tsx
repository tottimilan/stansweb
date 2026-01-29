'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  es: {
    title: 'STANS Abogados elegidos',
    highlight: 'Top 3 Mejores Abogados Penalistas de Madrid',
    according: 'Según',
    source: 'madrid.place',
    cta: 'Leer artículo',
  },
  en: {
    title: 'STANS Lawyers selected',
    highlight: 'Top 3 Best Criminal Lawyers in Madrid',
    according: 'According to',
    source: 'madrid.place',
    cta: 'Read article',
  },
  fr: {
    title: 'STANS Avocats élus',
    highlight: 'Top 3 Meilleurs Avocats Pénalistes de Madrid',
    according: 'Selon',
    source: 'madrid.place',
    cta: 'Lire l\'article',
  },
  ar: {
    title: 'STANS المحامون مختارون',
    highlight: 'أفضل 3 محامين جنائيين في مدريد',
    according: 'وفقًا لـ',
    source: 'madrid.place',
    cta: 'قراءة المقال',
  },
  it: {
    title: 'STANS Avvocati selezionati',
    highlight: 'Top 3 Migliori Avvocati Penalisti di Madrid',
    according: 'Secondo',
    source: 'madrid.place',
    cta: 'Leggi l\'articolo',
  },
};

export default function TopRankingBadge() {
  const { language } = useLanguage();
  const t = translations[language] || translations.es;
  const isRTL = language === 'ar';

  return (
    <section className="w-full bg-gold">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full"
      >
        {/* Mobile Layout */}
        <div className="block md:hidden px-4 py-4">
          <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Number */}
            <span className="text-4xl font-bold text-black/90 leading-none shrink-0">
              #3
            </span>
            
            {/* Content */}
            <div className={`flex-1 min-w-0 ${isRTL ? 'text-right' : 'text-left'}`}>
              <p className="text-xs text-black/60 font-medium truncate">
                {t.title}
              </p>
              <h2 className="text-sm font-semibold text-black leading-tight">
                {t.highlight}
              </h2>
              <p className="text-xs text-black/50 mt-0.5">
                {t.according}{' '}
                <a 
                  href="https://madrid.place/abogados-penalistas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {t.source}
                </a>
                {' · 2025'}
              </p>
            </div>

            {/* CTA Arrow */}
            <Link
              href="/blog/top-3-abogados-penalistas-madrid-2025"
              className="shrink-0 w-10 h-10 bg-black text-gold rounded flex items-center justify-center"
              aria-label={t.cta}
            >
              <svg 
                className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className={`hidden md:flex items-center justify-between gap-6 px-10 lg:px-16 py-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
          
          {/* Left: Number + Text */}
          <div className={`flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            
            {/* Number badge */}
            <div className="flex items-center gap-5">
              <span className="text-5xl lg:text-6xl font-bold text-black/90 leading-none">
                #3
              </span>
              <div className="h-12 w-px bg-black/20" />
            </div>

            {/* Text */}
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <p className="text-sm lg:text-base text-black/70 font-medium">
                {t.title}
              </p>
              <h2 className="text-lg lg:text-xl font-semibold text-black leading-tight">
                {t.highlight}
              </h2>
              <p className="text-sm text-black/50 mt-1">
                {t.according}{' '}
                <a 
                  href="https://madrid.place/abogados-penalistas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-black transition-colors"
                >
                  {t.source}
                </a>
              </p>
            </div>
          </div>

          {/* Right: Year + CTA */}
          <div className={`flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            
            {/* Year */}
            <span className="text-4xl lg:text-5xl font-bold text-black/20 leading-none">
              2025
            </span>

            {/* CTA */}
            <Link
              href="/blog/top-3-abogados-penalistas-madrid-2025"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-black text-gold text-sm font-medium rounded hover:bg-black/90 transition-colors whitespace-nowrap"
            >
              {t.cta}
              <svg 
                className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
