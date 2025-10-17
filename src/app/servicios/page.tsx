'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { Scale, Shield, Users, FileText, Building, Gavel, AlertTriangle, Briefcase, Home, ArrowRight } from 'lucide-react';

const WHATSAPP = '34611687226';

const serviceIcons = {
  libertadExpresion: Shield,
  terrorismo: AlertTriangle,
  delitosPersonas: Users,
  robosPatrimonio: Home,
  delitosEconomicos: Building,
  ordenPublico: Gavel,
};

export default function ServiciosPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      icon: Shield,
      title: t.areas.libertadExpresion.title,
      description: t.areas.libertadExpresion.excerpt,
      features: t.areas.libertadExpresion.features,
      longDescription: 'Defendemos el derecho fundamental a la libertad de expresión en casos complejos que involucran delitos de odio, ofensas a sentimientos religiosos, injurias y calumnias. Nuestro equipo cuenta con amplia experiencia en casos mediáticos y ante la Audiencia Nacional.',
      casosRelacionados: [1, 2, 3],
      href: '/casos#libertad-expresion'
    },
    {
      icon: AlertTriangle,
      title: t.areas.terrorismo.title,
      description: t.areas.terrorismo.excerpt,
      features: t.areas.terrorismo.features,
      longDescription: 'Especialistas en defensa ante la Audiencia Nacional en casos de terrorismo. Experiencia en enaltecimiento del terrorismo, captación, adoctrinamiento, financiación y actividades relacionadas con organizaciones terroristas. Conocimiento profundo de la normativa nacional e internacional.',
      casosRelacionados: [4, 5, 19],
      href: '/casos#terrorismo'
    },
    {
      icon: Users,
      title: t.areas.delitosPersonas.title,
      description: t.areas.delitosPersonas.excerpt,
      features: t.areas.delitosPersonas.features,
      longDescription: 'Defensa integral en casos de delitos contra la vida, integridad física y moral. Incluye homicidio, lesiones, amenazas, coacciones, detención ilegal y violencia de género. Protección de derechos fundamentales en todas las fases del proceso penal.',
      casosRelacionados: [6, 19, 12],
      href: '/casos#delitos-personas'
    },
    {
      icon: Home,
      title: t.areas.robosPatrimonio.title,
      description: t.areas.robosPatrimonio.excerpt,
      features: t.areas.robosPatrimonio.features,
      longDescription: 'Defensa especializada en delitos contra el patrimonio y pertenencia a organización criminal. Experiencia en casos complejos de robos con violencia, robos con fuerza, hurtos, receptación y desmantelamiento de grupos criminales organizados.',
      casosRelacionados: [2, 3, 9, 11, 14, 16, 17, 20],
      href: '/casos#patrimonio-crimen-organizado'
    },
    {
      icon: Building,
      title: t.areas.delitosEconomicos.title,
      description: t.areas.delitosEconomicos.excerpt,
      features: t.areas.delitosEconomicos.features,
      longDescription: 'Asesoría penal especializada en delitos económicos, empresariales y laborales. Defensa técnica en estafa, fraudes, blanqueo de capitales, delitos societarios, falsedad documental, insolvencias punibles y delitos contra los derechos de los trabajadores.',
      casosRelacionados: [7, 10, 15],
      href: '/casos#delitos-economicos'
    },
    {
      icon: Gavel,
      title: t.areas.ordenPublico.title,
      description: t.areas.ordenPublico.excerpt,
      features: t.areas.ordenPublico.features,
      longDescription: 'Defensa en casos de orden público, delitos contra la salud pública (tráfico de drogas) y ejecución penal. Asesoramiento en resistencia a la autoridad, atentado, desobediencia, tenencia de armas, medidas cautelares, libertad provisional y recursos en fase de ejecución.',
      casosRelacionados: [8, 13, 18],
      href: '/casos#orden-publico'
    },
  ];

  return (
    <>
      <ScrollProgress />
      <Navigation />

      <main className="bg-black pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-charleston to-black text-offwhite py-20 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl mb-8 mx-auto border border-gold/30"
              >
                <Briefcase className="h-10 w-10 text-gold" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gold mb-6 tracking-tight"
              >
                {t.areas.title || 'Nuestros Servicios'}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8 ${language === 'ar' ? 'text-right' : ''}`}
              >
                {t.areas.descripcionHero}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-6 text-sm text-white/70"
              >
                <div className={`flex items-center gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>{t.areas.experienciaAudienciaNacional}</span>
                </div>
                <div className={`flex items-center gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>{t.areas.abogadosColegiadosICAM}</span>
                </div>
                <div className={`flex items-center gap-2 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>{t.areas.asistenciaMultiidioma}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white border-2 border-gold/20 rounded-2xl p-8 hover:border-gold/50 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gold to-gold/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="h-7 w-7 text-black" />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-2xl font-bold text-black mb-2 group-hover:text-gold transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-black/70 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Long Description */}
                  <p className="text-black/80 leading-relaxed mb-6">
                    {service.longDescription}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-gold rounded-full mt-2"></span>
                        <span className="text-black/70">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className={`flex items-center justify-between pt-6 border-t border-gold/20 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <Link
                      href={service.href}
                      className={`inline-flex items-center gap-2 text-gold hover:text-gold/80 font-medium transition-colors group-hover:gap-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}
                    >
                      {t.areas.verCasosExito}
                      <ArrowRight className={`h-4 w-4 transition-all ${language === 'ar' ? 'rotate-180' : ''}`} />
                    </Link>
                    <span className="text-sm text-black/50">
                      {service.casosRelacionados.length} {t.areas.casosRelacionados}
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-charleston py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className={`text-3xl sm:text-4xl font-bold text-gold mb-4 ${language === 'ar' ? 'text-right' : ''}`}>
                {t.areas.porQueElegir}
              </h2>
              <p className={`text-white/80 text-lg max-w-3xl mx-auto ${language === 'ar' ? 'text-right' : ''}`}>
                {t.areas.experienciaSubtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Scale,
                  title: t.areas.experienciaComprobada,
                  description: t.areas.experienciaDescripcion
                },
                {
                  icon: Users,
                  title: t.areas.equipoEspecializado,
                  description: t.areas.equipoDescripcion
                },
                {
                  icon: Shield,
                  title: t.areas.disponibilidad247,
                  description: t.areas.disponibilidadDescripcion
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 hover:border-gold/40 transition-all"
                >
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className={`text-xl font-semibold text-white mb-3 ${language === 'ar' ? 'text-right' : ''}`}>
                    {item.title}
                  </h3>
                  <p className={`text-white/70 leading-relaxed ${language === 'ar' ? 'text-right' : ''}`}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-black to-charleston py-16 sm:py-24 border-t border-gold/20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl sm:text-4xl font-bold text-gold mb-6 ${language === 'ar' ? 'text-right' : ''}`}>
                {t.areas.necesitasAsesoramiento}
              </h2>
              <p className={`text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto ${language === 'ar' ? 'text-right' : ''}`}>
                {t.areas.contactaEquipo}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contacto"
                  className={`inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${language === 'ar' ? 'flex-row-reverse' : ''}`}
                >
                  {t.areas.consultarCaso}
                  <ArrowRight className={`h-5 w-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                >
                  {t.areas.whatsapp247}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton whatsapp={WHATSAPP} />
      </main>
    </>
  );
}

