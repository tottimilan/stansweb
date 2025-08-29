'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useContact } from '../contexts/ContactContext';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import LanguageSelector from './LanguageSelector';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { contactClicked, setContactClicked } = useContact();
  const { language } = useLanguage();
  const t = translations[language];

  const menuItems = [
    { name: t.nav.inicio, href: '#inicio' },
    { name: t.nav.equipo, href: '#equipo' },
    { name: t.nav.areas, href: '#areas' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleContactClick = () => {
    setContactClicked(true);
    // Resetear después de 3 segundos
    setTimeout(() => setContactClicked(false), 3000);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navHeight = 80; // Altura aproximada del nav
      const targetPosition = targetElement.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Control de scroll para mostrar/ocultar nav
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll hacia abajo - ocultar nav
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scroll hacia arriba - mostrar nav
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gold/20"
      animate={{ 
        y: isVisible ? 0 : -100,
        height: isHovered ? "6rem" : "5rem"
      }}
      transition={{ 
        y: { duration: 0.3, ease: "easeInOut" },
        height: { duration: 0.3, ease: "easeInOut" }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="flex justify-between items-center h-20 w-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a href="#inicio" className="block hover:opacity-80 transition-opacity duration-200">
              <Image
                src="/images/logos/logo-horizontal.png"
                alt="STANS ABOGADOS"
                width={400}
                height={100}
                className="h-20 w-auto brightness-0 invert object-contain"
                priority
              />
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-offwhite hover:text-gold px-3 py-2 text-sm font-medium transition-colors duration-200"
                  onClick={(e) => {
                    if (item.name === 'Contacto') {
                      handleContactClick();
                      const targetId = item.href.replace('#', '');
                      handleSmoothScroll(e, targetId);
                    } else {
                      const targetId = item.href.replace('#', '');
                      handleSmoothScroll(e, targetId);
                    }
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div 
              className="flex items-center text-offwhite text-sm"
              animate={contactClicked ? { 
                color: "#D4AF37",
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeInOut" }
              } : {}}
            >
              <Phone className="h-4 w-4 mr-2 text-gold" />
              <span>+34 611 68 72 26</span>
            </motion.div>
            <motion.div 
              className="flex items-center text-offwhite text-sm"
              animate={contactClicked ? { 
                color: "#D4AF37",
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeInOut" }
              } : {}}
            >
              <Mail className="h-4 w-4 mr-2 text-gold" />
              <span>info@stansabogados.com</span>
            </motion.div>
          </div>
          
          {/* Language Selector - Right aligned */}
          <div className="hidden lg:flex items-center ml-4">
            <LanguageSelector />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-offwhite hover:text-gold p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black border-t border-gold/20"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={(e) => {
                      setIsOpen(false);
                      if (item.name === 'Contacto') {
                        handleContactClick();
                        const targetId = item.href.replace('#', '');
                        handleSmoothScroll(e, targetId);
                      } else {
                        const targetId = item.href.replace('#', '');
                        handleSmoothScroll(e, targetId);
                      }
                    }}
                    className="text-offwhite hover:text-gold block px-3 py-3 text-base font-medium transition-colors duration-200 rounded-lg hover:bg-charleston/50"
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                {/* Language Selector - Mobile */}
                <div className="pt-4 pb-3 border-t border-gold/20 mt-4">
                  <div className="flex items-center justify-between px-3 py-2">
                    <span className="text-offwhite text-sm font-medium">Idioma / اللغة</span>
                    <LanguageSelector />
                  </div>
                </div>
                
                {/* Mobile Contact Info */}
                <div className="pt-4 pb-3 border-t border-gold/20">
                  <div className="flex items-center text-offwhite text-sm px-3 py-2">
                    <Phone className="h-4 w-4 mr-3 text-gold" />
                    <span>+34 611 68 72 26</span>
                  </div>
                  <div className="flex items-center text-offwhite text-sm px-3 py-2">
                    <Mail className="h-4 w-4 mr-3 text-gold" />
                    <span>info@stansabogados.com</span>
                  </div>
                  <div className="flex items-center text-offwhite text-sm px-3 py-2">
                    <MapPin className="h-4 w-4 mr-3 text-gold" />
                    <span>Madrid, España</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    );
  }
