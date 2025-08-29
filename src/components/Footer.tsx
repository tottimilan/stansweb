'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import LanguageSelector from './LanguageSelector';
import { Phone, Mail, MapPin, Clock, Shield, Users, Award } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <footer className="bg-black border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 flex flex-col items-center text-center"
          >
            <Image
              src="/images/logos/logo-vertical.png"
              alt="STANS ABOGADOS"
              width={120}
              height={200}
              className="h-40 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-offwhite/80 text-sm leading-relaxed max-w-xs">
              {t.footer.descripcion}
            </p>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="text-gold font-semibold text-lg mb-4">{t.footer.contacto}</h3>
            <div className="space-y-3">
              <div className="flex items-center text-offwhite/80 text-sm">
                <Phone className="h-4 w-4 mr-3 text-gold flex-shrink-0" />
                <span>+34 611 68 72 26</span>
              </div>
              <div className="flex items-center text-offwhite/80 text-sm">
                <Mail className="h-4 w-4 mr-3 text-gold flex-shrink-0" />
                <span>info@stansabogados.com</span>
              </div>
              <div className="flex items-center text-offwhite/80 text-sm">
                <MapPin className="h-4 w-4 mr-3 text-gold flex-shrink-0" />
                <span>Madrid, España</span>
              </div>
              <div className="flex items-center text-offwhite/80 text-sm">
                <Clock className="h-4 w-4 mr-3 text-gold flex-shrink-0" />
                <span>{t.footer.atencion24h}</span>
              </div>
            </div>
          </motion.div>

          {/* Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h3 className="text-gold font-semibold text-lg mb-4">{t.footer.servicios}</h3>
            <div className="space-y-3">
              <div className="flex items-center text-offwhite/80 text-sm">
                <Shield className="h-4 w-4 mr-3 text-gold" />
                <span>{t.footer.defensaPenal}</span>
              </div>
              <div className="flex items-center text-offwhite/80 text-sm">
                <Users className="h-4 w-4 mr-3 text-gold" />
                <span>{t.footer.extradicion}</span>
              </div>
              <div className="flex items-center text-offwhite/80 text-sm">
                <Award className="h-4 w-4 mr-3 text-gold" />
                <span>{t.footer.asesoriaLegal}</span>
              </div>
                             <div className="flex items-center text-offwhite/80 text-sm">
                 <Clock className="h-4 w-4 mr-3 text-gold" />
                 <span>{t.footer.respuesta}</span>
               </div>
            </div>
          </motion.div>

          {/* Horario y atención */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <h3 className="text-gold font-semibold text-lg mb-4">{t.footer.atencion}</h3>
            <div className="space-y-3">
              <div className="text-offwhite/80 text-sm">
                <p className="font-medium text-gold">{t.footer.disponible24h}</p>
                <p>{t.footer.emergencias}</p>
              </div>
              <div className="text-offwhite/80 text-sm">
                <p className="font-medium text-gold">{t.footer.idiomas}</p>
                <p>{t.footer.espanolArabe}</p>
              </div>
              <div className="text-offwhite/80 text-sm">
                <p className="font-medium text-gold">{t.footer.idiomas}</p>
                <p>{t.footer.respuestaTiempo}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Línea divisoria */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gold/20 mt-8 pt-8"
        />

                 {/* Copyright */}
         <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 0.6, delay: 0.5 }}
           className="flex flex-col md:flex-row justify-between items-center text-offwhite/60 text-sm max-w-5xl mx-auto"
         >
           <div>
             <p>{t.footer.derechos}</p>
           </div>
           <div className="flex items-center space-x-4 mt-4 md:mt-0">
             <a href="/legal" className="hover:text-gold transition-colors">{t.footer.avisoLegal}</a>
             <a href="/privacidad" className="hover:text-gold transition-colors">{t.footer.privacidad}</a>
             <a href="/cookies" className="hover:text-gold transition-colors">{t.footer.cookies}</a>
             <LanguageSelector />
           </div>
         </motion.div>
      </div>
    </footer>
  );
}
