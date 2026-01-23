'use client';

import { motion } from 'framer-motion';
import { FileText, Shield, GraduationCap, Award, Scale, Briefcase, Radio, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavSection {
  id: string;
  labels: {
    es: string;
    en: string;
    fr: string;
    ar: string;
  };
  icon: any;
}

type SupportedLanguage = 'es' | 'en' | 'fr' | 'ar';

interface LawyerQuickNavProps {
  language: SupportedLanguage;
  hasMedia?: boolean;
  hasCases?: boolean;
}

export default function LawyerQuickNav({ language = 'es', hasMedia = false, hasCases = true }: LawyerQuickNavProps) {
  const [activeSection, setActiveSection] = useState('biografia');

  const sections: NavSection[] = [
    { id: 'biografia', labels: { es: 'Biografía', en: 'Biography', fr: 'Biographie', ar: 'السيرة' }, icon: FileText },
    { id: 'especializaciones', labels: { es: 'Especialización', en: 'Specialization', fr: 'Spécialisation', ar: 'التخصص' }, icon: Shield },
    { id: 'formacion', labels: { es: 'Formación', en: 'Education', fr: 'Formation', ar: 'التعليم' }, icon: GraduationCap },
    { id: 'logros', labels: { es: 'Logros', en: 'Achievements', fr: 'Réalisations', ar: 'الإنجازات' }, icon: Award },
    { id: 'areas', labels: { es: 'Áreas', en: 'Areas', fr: 'Domaines', ar: 'المجالات' }, icon: Scale },
  ];

  if (hasCases) {
    sections.push({ id: 'casos', labels: { es: 'Casos', en: 'Cases', fr: 'Affaires', ar: 'القضايا' }, icon: Briefcase });
  }

  if (hasMedia) {
    sections.push({ id: 'medios', labels: { es: 'Medios', en: 'Media', fr: 'Médias', ar: 'الوسائط' }, icon: Radio });
  }

  sections.push({ id: 'consulta', labels: { es: 'Contacto', en: 'Contact', fr: 'Contact', ar: 'اتصال' }, icon: Phone });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      // Crear una copia inversa para encontrar la sección visible más alta
      const reversedSections = [...sections].reverse();
      
      for (const section of reversedSections) {
        const element = document.getElementById(section.id);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar una vez al montar
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMedia, hasCases]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Desktop Version - Horizontal */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="hidden md:flex flex-wrap gap-2 mt-6"
      >
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`
                group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                transition-all duration-300 hover:scale-105
                ${isActive 
                  ? 'bg-gold text-black shadow-lg shadow-gold/30' 
                  : 'bg-white/5 text-white/80 hover:bg-white/10 hover:text-gold border border-white/10 hover:border-gold/30'
                }
              `}
            >
              <Icon className={`h-4 w-4 ${isActive ? '' : 'group-hover:rotate-12 transition-transform'}`} />
              <span>{section.labels[language] || section.labels.es}</span>
              
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-gold rounded-lg -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </motion.div>

      {/* Mobile Version - Horizontal Scroll */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="md:hidden mt-6 -mx-4 px-4"
      >
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`
                  flex-shrink-0 snap-start inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium
                  transition-all duration-300
                  ${isActive 
                    ? 'bg-gold text-black shadow-lg shadow-gold/30' 
                    : 'bg-white/5 text-white/80 border border-white/10'
                  }
                `}
              >
                <Icon className="h-4 w-4" />
                <span className="whitespace-nowrap">{section.labels[language] || section.labels.es}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Estilo para ocultar scrollbar en móvil */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}

