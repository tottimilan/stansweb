'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex items-center gap-2">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('es')}
        className={`px-3 py-1 text-sm font-medium transition-all duration-200 ${
          language === 'es'
            ? 'text-gold'
            : 'text-offwhite hover:text-gold'
        }`}
      >
        ES
      </motion.button>
      <span className="text-offwhite/50">|</span>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('ar')}
        className={`px-3 py-1 text-sm font-medium transition-all duration-200 ${
          language === 'ar'
            ? 'text-gold'
            : 'text-offwhite hover:text-gold'
        }`}
        style={{ direction: 'rtl' }}
      >
        عربي
      </motion.button>
    </div>
  );
}
