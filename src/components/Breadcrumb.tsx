'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  showBackButton?: boolean;
}

export default function Breadcrumb({ items, showBackButton = true }: BreadcrumbProps) {
  const { language } = useLanguage();
  const t = translations[language] || translations.es;

  const handleBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  return (
    <div className="bg-charleston border-b border-gold/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2" aria-label={t.breadcrumb.navegacion}>
            <Link
              href="/"
              className="text-gold/70 hover:text-gold transition-colors"
              aria-label={`${t.breadcrumb.navegacion} - ${t.breadcrumb.inicio}`}
            >
              <Home className="h-4 w-4" />
            </Link>
            
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <ChevronRight className="h-4 w-4 text-gold/50" />
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-gold transition-colors text-sm truncate max-w-32 sm:max-w-48"
                    title={item.label}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white text-sm truncate max-w-32 sm:max-w-48" title={item.label}>
                    {item.label}
                  </span>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Back Button */}
          {showBackButton && (
            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleBack}
              className="flex items-center gap-2 text-gold/70 hover:text-gold transition-colors bg-gold/10 hover:bg-gold/20 px-3 py-2 rounded-lg text-sm"
              aria-label={`${t.breadcrumb.volver} atrás`}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{t.breadcrumb.volver}</span>
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
