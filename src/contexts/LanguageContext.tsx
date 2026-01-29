'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'ar' | 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'stans-language';

// Validar que el valor es un idioma válido
const isValidLanguage = (value: string | null): value is Language => {
  return value === 'es' || value === 'ar' || value === 'en' || value === 'fr';
};

// Obtener idioma guardado de localStorage (solo en cliente)
const getStoredLanguage = (): Language => {
  if (typeof window === 'undefined') return 'es';
  
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (isValidLanguage(stored)) {
      return stored;
    }
  } catch (e) {
    // localStorage no disponible
  }
  return 'es';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');
  const [isHydrated, setIsHydrated] = useState(false);

  // Cargar idioma de localStorage después del montaje (hidratación)
  useEffect(() => {
    const storedLanguage = getStoredLanguage();
    setLanguageState(storedLanguage);
    setIsHydrated(true);
  }, []);

  // Función para cambiar idioma y guardarlo en localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch (e) {
      // localStorage no disponible
    }
  };

  // Actualizar atributo lang del HTML cuando cambie el idioma
  useEffect(() => {
    if (isHydrated && typeof document !== 'undefined') {
      document.documentElement.lang = language;
      // Actualizar dirección para árabe
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }
  }, [language, isHydrated]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
