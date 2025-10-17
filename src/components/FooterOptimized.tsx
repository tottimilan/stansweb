'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import LanguageSelector from './LanguageSelector';
import { Phone, Mail, MapPin, Clock, Shield, Users, Scale, BookOpen, FileText, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <footer className="bg-black border-t border-gold/20" role="contentinfo">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
        
        {/* Sección Superior - Información Principal */}
        <div className="py-12 lg:py-16">
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 items-start ${language === 'ar' ? '' : ''}`}>
            
            {/* Logo y Contacto - Primera columna */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <Image
                src="/images/logos/logo-vertical.png"
                alt="STANS ABOGADOS - Abogados Penalistas Madrid"
                width={140}
                height={220}
                className="h-28 lg:h-32 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-offwhite/80 text-sm leading-relaxed mb-6">
                {t.footer.descripcion}
              </p>
              
              {/* Información de contacto */}
              <address className={`not-italic space-y-3 ${language === 'ar' ? '' : ''}`}>
                <a 
                  href="tel:+34611687226" 
                  className="flex items-center text-offwhite/80 hover:text-gold transition-colors group"
                  aria-label="Llamar a STANS ABOGADOS"
                >
                  <Phone className="h-4 w-4 mr-3 text-gold flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium">+34 611 68 72 26</span>
                </a>
                <a 
                  href="mailto:info@stansabogados.com" 
                  className="flex items-center text-offwhite/80 hover:text-gold transition-colors group"
                  aria-label="Enviar email a STANS ABOGADOS"
                >
                  <Mail className="h-4 w-4 mr-3 text-gold flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm">info@stansabogados.com</span>
                </a>
                <div className="flex items-center text-offwhite/80">
                  <MapPin className="h-4 w-4 mr-3 text-gold flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm">Madrid, España</span>
                </div>
                <div className="flex items-center text-gold">
                  <Clock className="h-4 w-4 mr-3 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-semibold">{t.footer.atencion24h}</span>
                </div>
              </address>
            </motion.div>

            {/* Nuestro Equipo - Segunda columna */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className={`text-gold font-semibold text-lg mb-4 flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Users className={`h-5 w-5 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} aria-hidden="true" />
                {t.footer.nuestroEquipo}
              </h3>
              <nav aria-label="Enlaces a páginas del equipo">
                <ul className={`space-y-2.5 ${language === 'ar' ? '' : ''}`}>
                  <li>
                    <Link 
                      href="/equipo/ruben-vaquero-arribas" 
                      className={`text-offwhite/70 hover:text-gold text-sm transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {language === 'ar' ? 'روبين فاكيرو أريباس' : 'Rubén Vaquero Arribas'}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/equipo/mounir-elyemlahy-chouati" 
                      className={`text-offwhite/70 hover:text-gold text-sm transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {language === 'ar' ? 'منير إليملاهي شواتي' : 'Mounir Elyemlahy Chouati'}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/equipo/diego-cardona-valero" 
                      className={`text-offwhite/70 hover:text-gold text-sm transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {language === 'ar' ? 'دييغو كاردونا فالييرو' : 'Diego Cardona Valero'}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/equipo/ada-de-blas-pascual" 
                      className={`text-offwhite/70 hover:text-gold text-sm transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {language === 'ar' ? 'آدا دي بلاس باسكوال' : 'Ada de Blas Pascual'}
                    </Link>
                  </li>
                  <li className="pt-3">
                    <Link 
                      href="/#equipo" 
                      className={`text-gold hover:text-gold/80 text-sm font-semibold transition-colors inline-flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}
                    >
                      {language === 'ar' ? 'معرفة الفريق' : 'Conocer al equipo'}
                      <span className={`${language === 'ar' ? 'mr-1' : 'ml-1'}`}>→</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </motion.div>

            {/* Servicios - Tercera columna */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className={`text-gold font-semibold text-lg mb-4 flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Shield className={`h-5 w-5 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} aria-hidden="true" />
                {t.footer.servicios || (language === 'ar' ? 'الخدمات' : 'Servicios')}
              </h3>
              <nav aria-label="Enlaces a servicios">
                <ul className={`space-y-2.5 ${language === 'ar' ? '' : ''}`}>
                  <li>
                    <Link 
                      href="/servicios/libertad-expresion" 
                      className={`text-offwhite/70 hover:text-gold text-sm transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {language === 'ar' ? 'حرية التعبير' : 'Libertad de Expresión'}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/servicios/terrorismo-audiencia-nacional" 
                      className={`text-offwhite/70 hover:text-gold text-sm transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {language === 'ar' ? 'الإرهاب' : 'Terrorismo'}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/servicios/delitos-personas" 
                      className={`text-offwhite/70 hover:text-gold text-sm transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {language === 'ar' ? 'الجرائم ضد الأشخاص' : 'Delitos Personas'}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/servicios/delitos-economicos" 
                      className={`text-offwhite/70 hover:text-gold text-sm transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {language === 'ar' ? 'الجرائم الاقتصادية' : 'Delitos Económicos'}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/servicios/extradiciones" 
                      className={`text-offwhite/70 hover:text-gold text-sm transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {language === 'ar' ? 'التسليم' : 'Extradiciones'}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/servicios/robos-patrimonio" 
                      className={`text-offwhite/70 hover:text-gold text-sm transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {language === 'ar' ? 'السرقة' : 'Robos y Patrimonio'}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/servicios/orden-publico-drogas" 
                      className={`text-offwhite/70 hover:text-gold text-sm transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {language === 'ar' ? 'النظام العام' : 'Orden Público y Drogas'}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/servicios/violencia-genero" 
                      className={`text-offwhite/70 hover:text-gold text-sm transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {language === 'ar' ? 'العنف الجنسي' : 'Violencia de Género'}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/servicios/procedimiento-penal" 
                      className={`text-offwhite/70 hover:text-gold text-sm transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {language === 'ar' ? 'الإجراءات الجنائية' : 'Procedimiento Penal'}
                    </Link>
                  </li>
                  <li className="pt-3">
                    <Link 
                      href="/servicios" 
                      className={`text-gold hover:text-gold/80 text-sm font-semibold transition-colors inline-flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}
                    >
                      {t.footer.verTodosServicios || (language === 'ar' ? 'جميع الخدمات' : 'Todos los servicios')}
                      <span className={`${language === 'ar' ? 'mr-1' : 'ml-1'}`}>→</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </motion.div>

            {/* Enlaces Rápidos - Cuarta columna */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className={`text-gold font-semibold text-lg mb-4 flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Scale className={`h-5 w-5 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} aria-hidden="true" />
                {language === 'ar' ? 'روابط سريعة' : 'Enlaces Rápidos'}
              </h3>
              <nav aria-label="Enlaces rápidos">
                <ul className={`space-y-2.5 ${language === 'ar' ? '' : ''}`}>
                  <li>
                    <Link 
                      href="/" 
                      className={`text-offwhite/70 hover:text-gold text-sm transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {t.nav.inicio}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/casos" 
                      className={`text-offwhite/70 hover:text-gold text-sm transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {t.nav.casos}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/blog" 
                      className={`text-offwhite/70 hover:text-gold text-sm transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {t.nav.blog}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/faq" 
                      className={`text-offwhite/70 hover:text-gold text-sm transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {t.footer.preguntasFrecuentes}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/#contacto" 
                      className={`text-offwhite/70 hover:text-gold text-sm transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {t.nav.contacto}
                    </Link>
                  </li>
                </ul>
              </nav>
            </motion.div>
          </div>
        </div>

        {/* Sección Media - Recursos Destacados */}
        <div className="border-t border-gold/10 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 items-start">

            {/* Blog Destacado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className={`text-offwhite font-medium text-sm mb-3 flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <BookOpen className={`h-4 w-4 ${language === 'ar' ? 'ml-2' : 'mr-2'} text-gold`} aria-hidden="true" />
                {language === 'ar' ? 'مقالات مميزة' : 'Artículos Destacados'}
              </h4>
              <nav aria-label="Artículos del blog destacados">
                <ul className={`space-y-2 ${language === 'ar' ? '' : ''}`}>
                  <li>
                    <Link 
                      href="/blog/defensa-penal-urgente-guia-completa" 
                      className={`text-offwhite/60 hover:text-gold text-xs transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {t.footer.defensaPenalUrgente}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/blog/derechos-detenidos-garantias-procesales" 
                      className={`text-offwhite/60 hover:text-gold text-xs transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {t.footer.derechosDetenidos}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/blog/primeros-pasos-comisaria" 
                      className={`text-offwhite/60 hover:text-gold text-xs transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {t.footer.primerosPasosComisaria}
                    </Link>
                  </li>
                </ul>
              </nav>
            </motion.div>

            {/* Casos de Éxito */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link 
                href="/casos"
                className={`text-offwhite font-medium text-sm mb-3 flex items-center hover:text-gold transition-colors ${language === 'ar' ? 'flex-row-reverse' : ''}`}
              >
                <FileText className={`h-4 w-4 ${language === 'ar' ? 'ml-2' : 'mr-2'} text-gold`} aria-hidden="true" />
                {t.footer.casosExito}
              </Link>
              <nav aria-label="Casos de éxito destacados">
                <ul className={`space-y-2 ${language === 'ar' ? '' : ''}`}>
                  <li>
                    <Link 
                      href="/casos/sobreseimiento-queque-abogados-cristianos" 
                      className={`text-offwhite/60 hover:text-gold text-xs transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {t.footer.libertadExpresion}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/casos/operacion-luco-banda-rolex" 
                      className={`text-offwhite/60 hover:text-gold text-xs transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {t.footer.operacionLuco}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/casos/academia-yihad-libertad-provisional" 
                      className={`text-offwhite/60 hover:text-gold text-xs transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {t.footer.academiaYihad}
                    </Link>
                  </li>
                  <li className="pt-3">
                    <Link 
                      href="/casos" 
                      className={`text-gold hover:text-gold/80 text-xs font-semibold transition-colors inline-flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}
                    >
                      {language === 'ar' ? 'عرض جميع الحالات' : 'Ver todos los casos'}
                      <span className={`${language === 'ar' ? 'mr-1' : 'ml-1'}`}>→</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </motion.div>

            {/* Información Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 lg:col-span-1"
            >
              <h4 className={`text-offwhite font-medium text-sm mb-3 flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Briefcase className={`h-4 w-4 ${language === 'ar' ? 'ml-2' : 'mr-2'} text-gold`} aria-hidden="true" />
                {language === 'ar' ? 'معلومات قانونية' : 'Información Legal'}
              </h4>
              <nav aria-label="Enlaces legales">
                <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <li>
                    <Link 
                      href="/legal" 
                      className={`text-offwhite/60 hover:text-gold text-xs transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {t.footer.avisoLegal}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/privacidad" 
                      className={`text-offwhite/60 hover:text-gold text-xs transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {t.footer.privacidad}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/cookies" 
                      className={`text-offwhite/60 hover:text-gold text-xs transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {t.footer.cookies}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/terminos" 
                      className={`text-offwhite/60 hover:text-gold text-xs transition-colors block ${language === 'ar' ? 'text-right' : ''}`}
                    >
                      {t.footer.terminos}
                    </Link>
                  </li>
                </ul>
              </nav>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom - Copyright y Selector de idioma */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gold/10 py-6"
        >
          <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {/* Copyright */}
            <div className="text-offwhite/60 text-xs text-center sm:text-left">
              <p>{t.footer.derechos}</p>
            </div>
            
            {/* Selector de idioma */}
            <div className="flex items-center gap-3">
              <span className="text-offwhite/60 text-xs">{t.footer.idiomas}:</span>
              <LanguageSelector />
            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}