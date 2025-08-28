'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Languages, Users, Award, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import LeadForm from './LeadForm';
import AnimatedText from './AnimatedText';
import HoverGlowText from './HoverGlowText';
import LogoWithHover from './LogoWithHover';

type Props = {
  whatsapp?: string; // ej: "34XXXXXXXXX"
  idioma?: 'es' | 'ar';
};

export default function Hero({ whatsapp = '34611687226', idioma = 'es' }: Props) {
  const text =
    idioma === 'ar'
      ? encodeURIComponent('مرحباً، أحتاج مساعدة جنائية عاجلة.')
      : encodeURIComponent('Hola, necesito ayuda penal urgente.');

  return (
    <section 
      id="inicio" 
      className="relative bg-black text-white pt-20 hero-main-section"
      aria-labelledby="hero-main-title"
      role="banner"
    >
      {/* Video de fondo simple */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
          aria-hidden="true"
        >
          <source src="/abogados-penalistas-madrid.mov" type="video/quicktime" />
          <source src="/abogados-penalistas-madrid.mov" type="video/mp4" />
          {/* Fallback para navegadores que no soportan video */}
          <img src="/images/logos/logo-horizontal.png" alt="STANS ABOGADOS" />
        </video>
      </div>

      {/* Gradiente simple sobre el video */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" aria-hidden="true"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Primera sección horizontal: Título y logo */}
        <div className="w-full mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Contenido de texto */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6"
                role="status"
                aria-label="Especialización en defensa penal"
              >
                <Shield className="h-4 w-4 mr-2" aria-hidden="true" />
                {idioma === 'ar' ? 'متخصصون في القانون الجنائي' : 'Especialistas en Defensa Penal'}
              </motion.div>

              <motion.h1
                id="hero-main-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-semibold text-white"
              >
                <HoverGlowText
                  text={idioma === 'ar' ? 'دفاع جنائي 24/7\nمدريد وإسبانيا' : 'Defensa Penal 24/7\nMadrid y España'}
                  delay={0.1}
                />
              </motion.h1>

              <AnimatedText
                text={
                  idioma === 'ar'
                    ? 'متخصصون في القانون الجنائي. إسباني–عربي. نرد خلال 15 دقيقة.'
                    : 'Especialistas en Derecho Penal. Español–Árabe. Respondemos en menos de 15 minutos.'
                }
                className="mt-4 text-white text-lg"
                delay={0.2}
              />
            </motion.div>

            {/* Logo oficial STANS ABOGADOS */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex-1 flex justify-center lg:justify-end"
            >
              <LogoWithHover
                src="/images/logos/logo-horizontal.png"
                hoverSrc="/images/logos/STANS HORIZONTALgold.png"
                alt="STANS ABOGADOS - Defensa Penal 24/7 en Madrid y España"
                width={400}
                height={120}
                className="w-full max-w-md"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* Segunda sección horizontal: Features, contacto y formulario */}
        <div className="w-full">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Features y contacto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1"
            >
              {/* Features con iconos */}
              <div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"
                role="list"
                aria-label="Servicios destacados de STANS ABOGADOS"
              >
                <div 
                  className="flex items-center text-white p-3 bg-charleston/50 rounded-lg border border-gold/10"
                  role="listitem"
                >
                  <Clock className="h-4 w-4 mr-3 text-gold" aria-hidden="true" />
                  <span className="text-sm">Respuesta &lt; 15 min</span>
                </div>
                <div 
                  className="flex items-center text-white p-3 bg-charleston/50 rounded-lg border border-gold/10"
                  role="listitem"
                >
                  <Languages className="h-4 w-4 mr-3 text-gold" aria-hidden="true" />
                  <span className="text-sm">Español–Árabe</span>
                </div>
                <div 
                  className="flex items-center text-white p-3 bg-charleston/50 rounded-lg border border-gold/10"
                  role="listitem"
                >
                  <Users className="h-4 w-4 mr-3 text-gold" aria-hidden="true" />
                  <span className="text-sm">Extradición España–Marruecos</span>
                </div>
                <div 
                  className="flex items-center text-white p-3 bg-charleston/50 rounded-lg border border-gold/10"
                  role="listitem"
                >
                  <Award className="h-4 w-4 mr-3 text-gold" aria-hidden="true" />
                  <span className="text-sm">Penal Puro</span>
                </div>
              </div>

              {/* Contacto rápido */}
              <address 
                className="flex flex-wrap gap-4 mb-6 not-italic"
                aria-label="Información de contacto"
              >
                <div className="flex items-center text-white text-sm">
                  <Phone className="h-4 w-4 mr-2 text-gold" aria-hidden="true" />
                  <a 
                    href="tel:+34611687226"
                    className="hover:text-gold transition-colors"
                    aria-label="Llamar al +34 611 68 72 26"
                  >
                    +34 611 68 72 26
                  </a>
                </div>
                <div className="flex items-center text-white text-sm">
                  <Mail className="h-4 w-4 mr-2 text-gold" aria-hidden="true" />
                  <a 
                    href="mailto:info@stansabogados.com"
                    className="hover:text-gold transition-colors"
                    aria-label="Enviar email a info@stansabogados.com"
                  >
                    info@stansabogados.com
                  </a>
                </div>
                <div className="flex items-center text-white text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-gold" aria-hidden="true" />
                  <span>Madrid, España</span>
                </div>
              </address>

              <p className="text-xs text-white/70 mb-6">
                {idioma === 'ar'
                  ? 'محامون جنائيون | اللغات: الإسبانية/العربية | أعضاء ICAM'
                  : 'Abogados penalistas | Idiomas: Español/Árabe | Colegiados ICAM'}
              </p>
            </motion.div>

            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex-1"
            >
              <LeadForm idioma={idioma} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
