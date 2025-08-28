'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Áreas', href: '#areas' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Comunidad Marroquí', href: '#comunidad' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Image
              src="/images/logos/logo-horizontal.png"
              alt="STANS ABOGADOS"
              width={180}
              height={40}
              className="h-10 w-auto brightness-0 invert"
              priority
            />
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
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-offwhite text-sm">
              <Phone className="h-4 w-4 mr-2 text-gold" />
              <span>+34 611 68 72 26</span>
            </div>
            <div className="flex items-center text-offwhite text-sm">
              <Mail className="h-4 w-4 mr-2 text-gold" />
              <span>info@stansabogados.com</span>
            </div>
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
            className="md:hidden bg-black/98 border-t border-gold/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-offwhite hover:text-gold block px-3 py-2 text-base font-medium transition-colors duration-200"
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 pb-3 border-t border-gold/20 mt-4">
                <div className="flex items-center text-offwhite text-sm px-3 py-2">
                  <Phone className="h-4 w-4 mr-2 text-gold" />
                  <span>+34 611 68 72 26</span>
                </div>
                <div className="flex items-center text-offwhite text-sm px-3 py-2">
                  <Mail className="h-4 w-4 mr-2 text-gold" />
                  <span>info@stansabogados.com</span>
                </div>
                <div className="flex items-center text-offwhite text-sm px-3 py-2">
                  <MapPin className="h-4 w-4 mr-2 text-gold" />
                  <span>Madrid, España</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
