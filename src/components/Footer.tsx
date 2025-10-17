'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import LanguageSelector from './LanguageSelector';
import { Phone, Mail, MapPin, Clock, Shield, Users, Award, BookOpen, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <footer className="bg-black border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Sección principal - Logo y columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* Logo y descripción - Ocupa 2 columnas en desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Image
              src="/images/logos/logo-vertical.png"
              alt="STANS ABOGADOS"
              width={140}
              height={220}
              className="h-32 lg:h-40 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-offwhite/80 text-sm leading-relaxed max-w-md mb-6">
              {t.footer.descripcion}
            </p>
            
            {/* Datos de contacto principales */}
            <div className="space-y-3">
              <a href="tel:+34611687226" className="flex items-center text-offwhite/80 hover:text-gold transition-colors group">
                <Phone className="h-4 w-4 mr-3 text-gold flex-shrink-0" />
                <span className="text-sm font-medium">+34 611 68 72 26</span>
              </a>
              <a href="mailto:info@stansabogados.com" className="flex items-center text-offwhite/80 hover:text-gold transition-colors group">
                <Mail className="h-4 w-4 mr-3 text-gold flex-shrink-0" />
                <span className="text-sm">info@stansabogados.com</span>
              </a>
              <div className="flex items-center text-offwhite/80">
                <MapPin className="h-4 w-4 mr-3 text-gold flex-shrink-0" />
                <span className="text-sm">Madrid, España</span>
              </div>
              <div className="flex items-center text-gold">
                <Clock className="h-4 w-4 mr-3 flex-shrink-0" />
                <span className="text-sm font-semibold">{t.footer.atencion24h}</span>
              </div>
            </div>
          </motion.div>

          {/* Artículos del Blog */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className={`text-gold font-semibold text-lg mb-4 flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <BookOpen className={`h-5 w-5 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
              {t.footer.blog}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link 
                  href="/blog/defensa-penal-urgente-guia-completa" 
                  className={`text-offwhite/70 hover:text-gold text-sm transition-colors block duration-200 ${language === 'ar' ? 'text-right hover:-translate-x-1' : 'hover:translate-x-1'}`}
                >
                  {t.footer.defensaPenalUrgente}
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog/procedimientos-extradicion-espana" 
                  className={`text-offwhite/70 hover:text-gold text-sm transition-colors block duration-200 ${language === 'ar' ? 'text-right hover:-translate-x-1' : 'hover:translate-x-1'}`}
                >
                  {t.footer.extradicionesEspana}
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog/derechos-detenidos-garantias-procesales" 
                  className={`text-offwhite/70 hover:text-gold text-sm transition-colors block duration-200 ${language === 'ar' ? 'text-right hover:-translate-x-1' : 'hover:translate-x-1'}`}
                >
                  {t.footer.derechosDetenidos}
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog/primeros-pasos-comisaria" 
                  className={`text-offwhite/70 hover:text-gold text-sm transition-colors block duration-200 ${language === 'ar' ? 'text-right hover:-translate-x-1' : 'hover:translate-x-1'}`}
                >
                  {t.footer.primerosPasosComisaria}
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className={`text-offwhite/70 hover:text-gold text-sm transition-colors block duration-200 ${language === 'ar' ? 'text-right hover:-translate-x-1' : 'hover:translate-x-1'}`}
                >
                  {t.footer.preguntasFrecuentes}
                </Link>
              </li>
              <li className="pt-2">
                <Link 
                  href="/blog" 
                  className={`text-gold hover:text-gold/80 text-sm font-semibold transition-colors inline-flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}
                >
                  {t.footer.verTodosArticulos}
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Casos de Éxito */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={`text-gold font-semibold text-lg mb-4 flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <FileText className={`h-5 w-5 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
              {t.footer.casosExito}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link 
                  href="/casos/sobreseimiento-queque-abogados-cristianos" 
                  className={`text-offwhite/70 hover:text-gold text-sm transition-colors block duration-200 ${language === 'ar' ? 'text-right hover:-translate-x-1' : 'hover:translate-x-1'}`}
                >
                  {t.footer.libertadExpresion}
                </Link>
              </li>
              <li>
                <Link 
                  href="/casos/operacion-luco-banda-rolex" 
                  className={`text-offwhite/70 hover:text-gold text-sm transition-colors block duration-200 ${language === 'ar' ? 'text-right hover:-translate-x-1' : 'hover:translate-x-1'}`}
                >
                  {t.footer.operacionLuco}
                </Link>
              </li>
              <li>
                <Link 
                  href="/casos/academia-yihad-libertad-provisional" 
                  className={`text-offwhite/70 hover:text-gold text-sm transition-colors block duration-200 ${language === 'ar' ? 'text-right hover:-translate-x-1' : 'hover:translate-x-1'}`}
                >
                  {t.footer.academiaYihad}
                </Link>
              </li>
              <li>
                <Link 
                  href="/casos/absolucion-blanqueo-capitales" 
                  className={`text-offwhite/70 hover:text-gold text-sm transition-colors block duration-200 ${language === 'ar' ? 'text-right hover:-translate-x-1' : 'hover:translate-x-1'}`}
                >
                  {t.footer.blanqueoCapitales}
                </Link>
              </li>
              <li className="pt-2">
                <Link 
                  href="/casos" 
                  className={`text-gold hover:text-gold/80 text-sm font-semibold transition-colors inline-flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}
                >
                  {t.footer.verTodosCasos}
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Equipo - Abogados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className={`text-gold font-semibold text-lg mb-4 flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <Users className={`h-5 w-5 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
              {t.footer.nuestroEquipo}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link 
                  href="/equipo/ruben-vaquero-arribas" 
                  className={`text-offwhite/70 hover:text-gold text-sm transition-colors block duration-200 ${language === 'ar' ? 'text-right hover:-translate-x-1' : 'hover:translate-x-1'}`}
                >
                  {language === 'ar' ? 'روبين فاكيرو أريباس' : 'Rubén Vaquero Arribas'}
                </Link>
              </li>
              <li>
                <Link 
                  href="/equipo/mounir-elyemlahy-chouati" 
                  className={`text-offwhite/70 hover:text-gold text-sm transition-colors block duration-200 ${language === 'ar' ? 'text-right hover:-translate-x-1' : 'hover:translate-x-1'}`}
                >
                  {language === 'ar' ? 'منير إليملاهي شواتي' : 'Mounir Elyemlahy Chouati'}
                </Link>
              </li>
              <li>
                <Link 
                  href="/equipo/diego-cardona-valero" 
                  className={`text-offwhite/70 hover:text-gold text-sm transition-colors block duration-200 ${language === 'ar' ? 'text-right hover:-translate-x-1' : 'hover:translate-x-1'}`}
                >
                  {language === 'ar' ? 'دييغو كاردونا فالييرو' : 'Diego Cardona Valero'}
                </Link>
              </li>
              <li>
                <Link 
                  href="/equipo/ada-de-blas-pascual" 
                  className={`text-offwhite/70 hover:text-gold text-sm transition-colors block duration-200 ${language === 'ar' ? 'text-right hover:-translate-x-1' : 'hover:translate-x-1'}`}
                >
                  {language === 'ar' ? 'آدا دي بلاس باسكوال' : 'Ada de Blas Pascual'}
                </Link>
              </li>
              <li className="pt-2">
                <Link 
                  href="/servicios" 
                  className={`text-gold hover:text-gold/80 text-sm font-semibold transition-colors inline-flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}
                >
                  {t.footer.verTodosServicios}
                </Link>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gold/20 mb-8"></div>

        {/* Footer bottom - Copyright, Legal y Selector de idioma */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <div className="text-offwhite/60 text-sm text-center lg:text-left">
            <p>{t.footer.derechos}</p>
          </div>
          
          {/* Enlaces de políticas legales */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/legal" className="text-offwhite/60 hover:text-gold transition-colors text-sm">
              {t.footer.avisoLegal}
            </Link>
            <span className="text-offwhite/30">•</span>
            <Link href="/privacidad" className="text-offwhite/60 hover:text-gold transition-colors text-sm">
              {t.footer.privacidad}
            </Link>
            <span className="text-offwhite/30">•</span>
            <Link href="/cookies" className="text-offwhite/60 hover:text-gold transition-colors text-sm">
              {t.footer.cookies}
            </Link>
            <span className="text-offwhite/30">•</span>
            <Link href="/terminos" className="text-offwhite/60 hover:text-gold transition-colors text-sm">
              {t.footer.terminos}
            </Link>
          </div>
          
          {/* Selector de idioma */}
          <div className="flex items-center gap-3">
            <span className="text-offwhite/60 text-sm hidden sm:block">{t.footer.idiomas}:</span>
            <LanguageSelector />
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
