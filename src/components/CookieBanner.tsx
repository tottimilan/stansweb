'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export default function CookieBanner() {
  const { language } = useLanguage();
  const t = translations[language];
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya ha aceptado las cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-charleston border-t border-gold/20 p-4 sm:p-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-gold font-semibold text-sm sm:text-base mb-2">
                  {language === 'ar' ? 'ملفات تعريف الارتباط' : 'Cookies'}
                </h3>
                <p className="text-offwhite/80 text-xs sm:text-sm leading-relaxed">
                  {language === 'ar'
                    ? 'نحن نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. باستخدام موقعنا، فإنك توافق على استخدام ملفات تعريف الارتباط وفقاً لسياستنا.'
                    : 'Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Al usar nuestro sitio, usted acepta el uso de cookies de acuerdo con nuestra política.'
                  }
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={rejectCookies}
                className="px-4 py-2 text-xs sm:text-sm text-offwhite/60 hover:text-offwhite transition-colors border border-offwhite/20 rounded-lg hover:border-offwhite/40"
              >
                {language === 'ar' ? 'رفض' : 'Rechazar'}
              </button>
              <button
                onClick={acceptCookies}
                className="px-4 py-2 text-xs sm:text-sm bg-gold text-black font-medium rounded-lg hover:bg-gold/90 transition-colors"
              >
                {language === 'ar' ? 'قبول' : 'Aceptar'}
              </button>
              <button
                onClick={() => setShowBanner(false)}
                className="p-2 text-offwhite/60 hover:text-offwhite transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="mt-3 pt-3 border-t border-gold/10">
            <a
              href="/cookies"
              className="inline-flex items-center gap-2 text-xs text-gold hover:text-gold/80 transition-colors"
            >
              <Settings className="h-3 w-3" />
              {language === 'ar' ? 'إعدادات ملفات تعريف الارتباط' : 'Configuración de cookies'}
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
