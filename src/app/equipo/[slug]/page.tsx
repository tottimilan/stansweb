'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Mail, Award, GraduationCap, Languages, Shield, FileText, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { lawyerTranslations, lawyersDataAr } from '@/translations/lawyers';
import { notFound, useParams } from 'next/navigation';
import { getLawyerBySlug, isValidLawyerSlug } from '@/data/lawyers';
import LawyerSchema from '@/components/LawyerSchema';
import casosData from '../../../../public/casos/casos-procesados.json';
import seoInfo from '../../../../public/casos/seo-info.json';

const WHATSAPP = '34611687226';

export default function LawyerPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { language } = useLanguage();
  const t = translations[language];
  
  if (!isValidLawyerSlug(slug)) {
    notFound();
  }
  
  const lawyer = getLawyerBySlug(slug);

  if (!lawyer) {
    notFound();
  }

  // Obtener casos relacionados
  const relatedCases = lawyer.notableCases
    .map(caseId => casosData.find((c: any) => c.id === caseId))
    .filter(Boolean)
    .slice(0, 3);

  // Obtener traducciones
  const lt = lawyerTranslations[language as 'es' | 'ar'];
  const lawyerAr = language === 'ar' && (lawyersDataAr as any)[slug];
  
  // Datos del abogado traducidos
  const lawyerData = {
    summary: lawyerAr?.summary || lawyer.summary,
    longBio: lawyerAr?.longBio || lawyer.longBio,
    specializations: lawyerAr?.specializations || lawyer.specializations,
    education: lawyerAr?.education || lawyer.education,
    achievements: lawyerAr?.achievements || lawyer.achievements,
    practiceAreas: lawyerAr?.practiceAreas || lawyer.practiceAreas,
  };

  return (
    <>
      <LawyerSchema lawyer={lawyer} />
      <ScrollProgress />
      <Navigation />

      <main className="bg-black pt-20">
        {/* Hero Section con Imagen de Fondo */}
        <section className="relative bg-gradient-to-br from-charleston to-black text-offwhite py-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src={lawyer.backgroundImage}
              alt=""
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60"></div>
          </div>

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              
              {/* Imagen del Abogado */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-gold/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-4 border-gold/30 group-hover:border-gold/50 transition-all duration-500">
                    <Image
                      src={lawyer.image}
                      alt={lawyer.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              {/* Información del Abogado */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <Link
                  href="/#equipo"
                  className="inline-flex items-center gap-2 text-gold hover:text-white transition mb-6"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {lt.backToTeam}
                </Link>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gold mb-4 leading-tight">
                  {lawyer.name}
                </h1>
                
                <p className="text-xl sm:text-2xl text-white/90 mb-6">
                  {lawyer.role}
                </p>

                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  {lawyerData.summary}
                </p>

                {/* Idiomas */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {lawyer.languageLabels.map((lang, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-lg border border-gold/30 text-sm font-medium"
                    >
                      <Languages className="h-4 w-4" />
                      {lang}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Biografía Completa */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-black mb-6 flex items-center">
                <FileText className="h-8 w-8 text-gold mr-3" />
                {lt.biography}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className={`text-black/80 leading-relaxed text-lg ${language === 'ar' ? 'text-right' : ''}`}>
                  {lawyerData.longBio}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Especializaciones */}
        <section className="bg-charleston py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gold mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 mr-3" />
                {lt.specializations}
              </h2>
              <p className="text-white/80 text-center text-lg">
                {lt.specializationsSubtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lawyerData.specializations.map((spec: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-xl p-6 hover:border-gold/40 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                    <p className="text-white text-sm font-medium">{spec}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Formación Académica */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-black mb-8 flex items-center">
                <GraduationCap className="h-8 w-8 text-gold mr-3" />
                {lt.education}
              </h2>
              <div className="space-y-4">
                {lawyerData.education.map((edu: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 bg-gold/5 border border-gold/20 rounded-lg p-4 hover:bg-gold/10 transition-colors"
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2"></div>
                    <p className="text-black/80 text-base">{edu}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Logros y Reconocimientos */}
        <section className="bg-charleston py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gold mb-8 flex items-center justify-center">
                <Award className="h-8 w-8 mr-3" />
                {lt.achievements}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {lawyerData.achievements.map((achievement: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-xl p-6 hover:border-gold/40 transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center">
                        <Award className="h-5 w-5 text-gold" />
                      </div>
                      <p className="text-white/90 text-sm leading-relaxed">{achievement}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Áreas de Práctica */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-black mb-4 text-center">
                {lt.practiceAreas}
              </h2>
              <p className="text-black/70 text-center text-lg">
                {lt.practiceAreasSubtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {lawyerData.practiceAreas.map((area: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gold/20 rounded-lg p-4 hover:border-gold/40 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                    <p className="text-black/80 text-sm font-medium">{area}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Casos Destacados */}
        {relatedCases.length > 0 && (
          <section className="bg-charleston py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gold mb-4 text-center">
                  {lt.notableCases}
                </h2>
                <p className="text-white/80 text-center text-lg">
                  {lt.notableCasesSubtitle} {lawyer.name.split(' ')[0]}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedCases.map((caso: any, index: number) => {
                  const casoSeoInfo = (seoInfo as any)[caso.id];
                  return (
                    <motion.div
                      key={caso.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 hover:border-gold/40 hover:shadow-xl hover:shadow-gold/10 transition-all duration-300"
                    >
                      {caso.favorabilidad === 'Favorable' && (
                        <div className="inline-flex items-center gap-2 bg-emerald-700/20 text-emerald-300 px-3 py-1 rounded-lg text-xs font-bold mb-4 border border-emerald-600/30">
                          <CheckCircle className="h-3 w-3" />
                          {lt.favorable}
                        </div>
                      )}
                      
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-gold transition-colors line-clamp-2">
                        {caso.nombre}
                      </h3>
                      
                      <p className="text-white/70 text-sm mb-4 line-clamp-2">
                        {caso.observaciones || caso.delito_principal}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gold/20">
                        <span className="text-xs text-white/60">{caso.año}</span>
                        <Link
                          href={casoSeoInfo?.url || `/casos/${caso.id}`}
                          className="inline-flex items-center gap-2 text-gold hover:text-gold/80 text-sm font-medium transition-colors"
                        >
                          {lt.viewCase}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Link
                  href="/casos"
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all"
                >
                  {lt.viewAllCases}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </section>
        )}

        {/* CTA - Consulta */}
        <section className="bg-gradient-to-r from-black to-charleston py-20 border-t border-gold/20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-6">
                {lt.needConsultation} {lawyer.name.split(' ')[0]}?
              </h2>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                {lt.consultationSubtitle} {lawyerData.specializations[0].toLowerCase()}. {lt.consultationSubtitle2}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contacto"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="h-5 w-5" />
                  {lt.sendConsultation}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${language === 'ar' ? 'مرحباً' : 'Hola'}, ${language === 'ar' ? 'أود الاستشارة مع' : 'me gustaría consultar con'} ${lawyer.name} ${language === 'ar' ? 'حول قضية جنائية' : 'sobre un caso penal'}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  {lt.whatsapp247}
                </a>
              </div>

              {lawyer.email && (
                <p className="text-white/60 text-sm mt-6">
                  {lt.directEmail} <a href={`mailto:${lawyer.email}`} className="text-gold hover:text-gold/80 transition-colors">{lawyer.email}</a>
                </p>
              )}
            </motion.div>
          </div>
        </section>

        {/* Otros Miembros del Equipo */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-black mb-4">
                {lt.meetTheTeam}
              </h2>
              <p className="text-black/70 text-lg">
                {lt.meetTheTeamSubtitle}
              </p>
            </motion.div>

            <div className="text-center">
              <Link
                href="/#equipo"
                className="inline-flex items-center gap-2 bg-black text-gold border-2 border-gold px-6 py-3 rounded-lg font-semibold hover:bg-gold hover:text-black transition-all"
              >
                {lt.viewFullTeam}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton whatsapp={WHATSAPP} />
      </main>
    </>
  );
}

