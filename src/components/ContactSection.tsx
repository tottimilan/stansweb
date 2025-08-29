'use client';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useContact } from '../contexts/ContactContext';
import { useScrollHighlight } from '../hooks/useScrollHighlight';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { useState, useEffect } from 'react';

export default function ContactSection() {
  const { contactClicked } = useContact();
  const isContactHighlighted = useScrollHighlight('contacto');
  const { language } = useLanguage();
  const t = translations[language];
  
  // Efecto de escritura
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
  
  const phrases = t.contact.phrases;
  const defaultPlaceholder = t.contact.form.placeholder;
  
  useEffect(() => {
    if (!isTyping || isFocused || textareaValue.length > 0) return; // No ejecutar si está enfocado o hay texto
    
    const currentPhrase = phrases[currentIndex];
    const typingSpeed = isDeleting ? 10 : 30; // Escritura y borrado más rápido
    
    if (isDeleting) {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(false);
      }
    } else {
      if (currentText.length < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setIsDeleting(true);
        }, 1500); // Pausa más corta antes de borrar
      }
    }
  }, [currentText, currentIndex, isDeleting, isTyping, phrases, isFocused]);
  
  useEffect(() => {
    // Ocultar el placeholder después de 5 segundos
    const placeholderTimer = setTimeout(() => {
      setShowPlaceholder(false);
    }, 5000);
    
    const interval = setInterval(() => {
      if (!isTyping) {
        setIsTyping(true);
      }
    }, 3000); // Iniciar cada 3 segundos
    
    return () => {
      clearTimeout(placeholderTimer);
      clearInterval(interval);
    };
  }, []); // Solo se ejecuta una vez al montar el componente
  
  const handleTextareaClick = () => {
    setIsTyping(false);
    setCurrentText('');
    setCurrentIndex(0);
    setIsDeleting(false);
    setShowPlaceholder(true); // Volver a mostrar el placeholder
    setIsFocused(true); // Marcar como enfocado
    
    // Ocultar el placeholder después de 3 segundos
    setTimeout(() => {
      setShowPlaceholder(false);
    }, 3000);
  };

  const handleTextareaFocus = () => {
    setIsFocused(true);
    setIsTyping(false);
    setCurrentText('');
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value);
    // Si hay texto, detener el efecto
    if (e.target.value.length > 0) {
      setIsTyping(false);
      setCurrentText('');
    }
  };

  const handleTextareaBlur = () => {
    setIsFocused(false);
    // Si no hay texto, reiniciar el efecto después de un momento
    setTimeout(() => {
      if (!isFocused && textareaValue.length === 0) {
        setIsTyping(true);
      }
    }, 2000);
  };

  return (
    <motion.section 
      id="contacto" 
      className="bg-black w-full py-20 text-offwhite"
      aria-labelledby="contact-title"
      role="region"
      animate={{
        boxShadow: isContactHighlighted ? "0 0 30px rgba(165, 107, 55, 0.3)" : "none"
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
                     <h2 
             id="contact-title" 
             className="text-4xl md:text-5xl font-bold text-gold mb-6"
             style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
           >
             {t.contact.title}
           </h2>
           <p className="text-2xl font-semibold text-offwhite mb-4">
             {t.contact.subtitle}
           </p>
           <p className="text-lg text-offwhite/80 max-w-2xl mx-auto">
             {t.contact.description}
           </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-charleston rounded-2xl p-8 border border-gold/20 max-w-4xl mx-auto"
        >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                                 <div>
                   <label className="block text-sm font-medium text-offwhite mb-2">
                     {t.contact.form.nombre}
                   </label>
                   <input
                     type="text"
                     required
                     className="w-full bg-black/50 border border-gold/30 rounded-lg px-4 py-3 text-offwhite placeholder-offwhite/50 focus:border-gold focus:outline-none transition-colors"
                     placeholder="Su nombre completo"
                     style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-offwhite mb-2">
                     {t.contact.form.email}
                   </label>
                   <input
                     type="email"
                     required
                     className="w-full bg-black/50 border border-gold/30 rounded-lg px-4 py-3 text-offwhite placeholder-offwhite/50 focus:border-gold focus:outline-none transition-colors"
                     placeholder="su@email.com"
                   />
                 </div>
              </div>
              
                             <div>
                 <label className="block text-sm font-medium text-offwhite mb-2">
                   {t.contact.form.telefono}
                 </label>
                 <input
                   type="tel"
                   required
                   className="w-full bg-black/50 border border-gold/30 rounded-lg px-4 py-3 text-offwhite placeholder-offwhite/50 focus:border-gold focus:outline-none transition-colors"
                   placeholder="+34 600 000 000"
                 />
               </div>
              
                                                           <div>
                  <label className="block text-sm font-medium text-offwhite mb-2">
                    {t.contact.form.mensaje}
                  </label>
                 <div className="relative">
                                       <textarea
                      required
                      rows={4}
                      value={textareaValue}
                      onChange={handleTextareaChange}
                      onClick={handleTextareaClick}
                      onFocus={handleTextareaFocus}
                      onBlur={handleTextareaBlur}
                      className="w-full bg-black/50 border border-gold/30 rounded-lg px-4 py-3 text-offwhite placeholder-offwhite/50 focus:border-gold focus:outline-none transition-colors resize-none relative z-10"
                      placeholder={showPlaceholder ? defaultPlaceholder : ''}
                    />
                                       {isTyping && !isFocused && textareaValue.length === 0 && (
                      <div className="absolute inset-0 pointer-events-none z-20 flex items-start pt-3 pl-4">
                        <span className="text-offwhite/50">
                          {currentText}
                          <span className="animate-pulse">|</span>
                        </span>
                      </div>
                    )}
                 </div>
               </div>
              
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 text-gold bg-black/50 border-gold/30 rounded focus:ring-gold focus:ring-2"
                />
                                 <label className="text-sm text-offwhite/80">
                   {t.contact.form.privacidad}
                 </label>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={contactClicked ? { 
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeInOut" }
                } : {}}
                className="w-full bg-gold text-black font-bold py-4 px-6 rounded-lg hover:bg-gold/90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                                 <Send className="w-5 h-5" />
                 {t.contact.form.enviar}
                             </motion.button>
             </form>
           </motion.div>
      </div>
    </motion.section>
  );
}
