'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, List, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

interface TOCItem {
  id: string;
  title: string;
  level: number;
  children?: TOCItem[];
}

interface TableOfContentsProps {
  items: TOCItem[];
  className?: string;
}

export default function TableOfContents({ items, className = '' }: TableOfContentsProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeSection, setActiveSection] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Detectar sección activa basada en scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = items.flatMap(item => [item, ...(item.children || [])]);
      let currentSection = '';

      // Buscar la sección más cercana al top de la pantalla
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Una sección está activa si está a menos de 200px del top
          if (rect.top <= 200) {
            currentSection = section.id;
          }
        }
      }

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }

      // Mostrar/ocultar TOC basado en scroll
      const scrollPosition = window.pageYOffset;
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Ejecutar una vez al montar

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items, activeSection]);

  // Scroll suave a sección
  const scrollToSection = (sectionId: string) => {
    console.log(`Attempting to scroll to: ${sectionId}`);
    
    // Esperar un frame para asegurar que el DOM esté listo
    requestAnimationFrame(() => {
      const element = document.getElementById(sectionId);
      
      if (element) {
        console.log(`Element found:`, element);
        
        // Verificar si el elemento es visible
        const rect = element.getBoundingClientRect();
        console.log(`Element position:`, rect);
        
        const headerOffset = 120;
        const elementPosition = rect.top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        console.log(`Scrolling to position:`, {
          elementTop: rect.top,
          windowScrollY: window.pageYOffset,
          headerOffset,
          finalPosition: offsetPosition
        });

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Verificar después del scroll
        setTimeout(() => {
          const newRect = element.getBoundingClientRect();
          console.log(`After scroll - element position:`, newRect.top);
        }, 1000);
        
      } else {
        console.warn(`Element with id "${sectionId}" not found`);
        
        // Listar todos los IDs disponibles para debug
        const allElements = document.querySelectorAll('[id]');
        const allIds = Array.from(allElements).map(element => element.id);
        console.log('Available IDs:', allIds);
      }
    });
  };

  // Calcular progreso de lectura
  const calculateProgress = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    return Math.min(100, Math.max(0, progress));
  };

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollProgress(calculateProgress());
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* TOC Desktop - Fixed Sidebar */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className={`hidden lg:block fixed right-6 top-1/4 transform -translate-y-1/2 z-20 ${className}`}
          >
            <div className="bg-white/95 backdrop-blur-sm border border-gold/20 rounded-2xl shadow-xl p-6 max-w-xs">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-black flex items-center gap-2">
                  <List className="h-4 w-4 text-gold" />
                  {t.tableOfContents.title}
                </h3>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-gold hover:text-black transition-colors"
                >
                  {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-black/60 mb-1">
                  <span>Progreso</span>
                  <span>{Math.round(scrollProgress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-gold h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${scrollProgress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Navigation Items */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <nav className="space-y-2 max-h-96 overflow-y-auto">
                      {items.map((item) => (
                        <div key={item.id}>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              console.log(`Desktop TOC clicked: ${item.id}`);
                              scrollToSection(item.id);
                            }}
                            className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all duration-200 hover:bg-gold/10 ${
                              activeSection === item.id
                                ? 'bg-gold/20 text-gold font-medium border-l-2 border-gold'
                                : 'text-black/70 hover:text-black'
                            }`}
                            style={{ paddingLeft: `${item.level * 12 + 12}px` }}
                          >
                            {item.title}
                          </button>

                          {/* Sub-items */}
                          {item.children && item.children.map((child) => (
                            <button
                              key={child.id}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                console.log(`Desktop TOC sub-item clicked: ${child.id}`);
                                scrollToSection(child.id);
                              }}
                              className={`block w-full text-left text-xs py-1 px-3 rounded-lg transition-all duration-200 hover:bg-gold/5 ml-4 ${
                                activeSection === child.id
                                  ? 'bg-gold/10 text-gold font-medium'
                                  : 'text-black/60 hover:text-black/80'
                              }`}
                            >
                              {child.title}
                            </button>
                          ))}
                        </div>
                      ))}
                    </nav>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TOC Mobile - Floating Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed bottom-20 right-6 z-30"
          >
            <div className="relative">
              {/* Floating Progress Ring */}
              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                />
                <motion.path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#A37400"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: scrollProgress / 100 }}
                  transition={{ duration: 0.3 }}
                />
              </svg>

              {/* Central Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="absolute inset-2 bg-gold text-black rounded-full flex items-center justify-center shadow-lg hover:bg-gold/90 transition-colors"
              >
                <List className="h-5 w-5" />
              </button>

              {/* Mobile Menu */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-20 right-0 bg-white border border-gold/20 rounded-2xl shadow-2xl p-4 max-w-xs max-h-80 overflow-y-auto"
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="absolute top-2 right-2 text-black/50 hover:text-black"
                    >
                      <X className="h-4 w-4" />
                    </button>

                    <h3 className="text-sm font-bold text-black mb-3 flex items-center gap-2">
                      <List className="h-4 w-4 text-gold" />
                      {t.tableOfContents.title}
                    </h3>

                    <nav className="space-y-2">
                      {items.map((item) => (
                        <div key={item.id}>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              console.log(`Mobile TOC clicked: ${item.id}`);
                              scrollToSection(item.id);
                              setIsExpanded(false);
                            }}
                            className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all duration-200 hover:bg-gold/10 ${
                              activeSection === item.id
                                ? 'bg-gold/20 text-gold font-medium'
                                : 'text-black/70 hover:text-black'
                            }`}
                          >
                            {item.title}
                          </button>

                          {/* Sub-items */}
                          {item.children && item.children.map((child) => (
                            <button
                              key={child.id}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                console.log(`Mobile TOC sub-item clicked: ${child.id}`);
                                scrollToSection(child.id);
                                setIsExpanded(false);
                              }}
                              className={`block w-full text-left text-xs py-1 px-3 rounded-lg transition-all duration-200 hover:bg-gold/5 ml-4 ${
                                activeSection === child.id
                                  ? 'bg-gold/10 text-gold font-medium'
                                  : 'text-black/60 hover:text-black/80'
                              }`}
                            >
                              {child.title}
                            </button>
                          ))}
                        </div>
                      ))}
                    </nav>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
