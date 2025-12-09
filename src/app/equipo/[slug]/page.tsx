'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Mail, Award, GraduationCap, Languages, Shield, FileText, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/FooterOptimized';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { lawyerTranslations, lawyersDataAr } from '@/translations/lawyers';
import { notFound, useParams } from 'next/navigation';
import { getLawyerBySlug, isValidLawyerSlug } from '@/data/lawyers';
import LawyerSchema from '@/components/LawyerSchema';
import LawyerMediaSection from '@/components/LawyerMediaSection';
import LawyerQuickNav from '@/components/LawyerQuickNav';
import { getLawyerMedia, hasMediaContent } from '@/data/lawyerMedia';
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

  // Obtener medios del abogado
  const lawyerMedia = getLawyerMedia(slug);
  const showMediaSection = hasMediaContent(slug);

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
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  {lawyerData.summary}
                </p>

                {/* Idiomas */}
                <div className="flex flex-wrap gap-3">
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

                {/* Navegación Rápida a Secciones */}
                <LawyerQuickNav 
                  language={language as 'es' | 'ar'}
                  hasMedia={showMediaSection}
                  hasCases={relatedCases.length > 0}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Biografía Completa */}
        <section id="biografia" className="bg-white py-16">
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
        <section id="especializaciones" className="bg-charleston py-16">
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
        <section id="formacion" className="bg-white py-16">
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
        <section id="logros" className="bg-charleston py-16">
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
        <section id="areas" className="bg-white py-16">
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
          <section id="casos" className="bg-charleston py-16">
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

        {/* Sección de Medios y Apariciones - Solo si hay contenido */}
        {showMediaSection && (
          <div id="medios">
            <LawyerMediaSection 
            media={lawyerMedia}
            lawyerName={lawyer.name}
            language={language as 'es' | 'ar'}
          />
          </div>
        )}

        {/* CTA - Consulta */}
        <section id="consulta" className="bg-gradient-to-r from-black to-charleston py-20 border-t border-gold/20">
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

        {/* SEO Expertise Section - Expandir contenido para mejor ratio texto/HTML */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gold mb-6">
                {language === 'ar' ? `خبرة ${lawyer.name} في الدفاع الجنائي` : `Experiencia y Enfoque de ${lawyer.name}`}
              </h2>
              
              <div className="bg-gold/5 border-l-4 border-gold p-6 mb-8">
                <h3 className="text-xl font-semibold text-black/90 mb-3">
                  {language === 'ar' ? 'الفلسفة المهنية' : 'Filosofía Profesional'}
                </h3>
                <p className="text-black/80 leading-relaxed mb-4">
                  {lawyer.slug === 'ruben-vaquero-arribas' && (language === 'ar' 
                    ? 'يؤمن روبين بأن الدفاع الجنائي الفعال يتطلب معرفة عميقة بالقانون الجنائي الاقتصادي والإجراءات المعقدة. نهجه يجمع بين التحليل التقني الدقيق والاستراتيجية الإجرائية المخصصة لكل حالة.'
                    : 'Rubén cree firmemente que la defensa penal efectiva requiere un conocimiento profundo del derecho penal económico y de los procedimientos complejos. Su enfoque combina el análisis técnico riguroso con una estrategia procesal personalizada para cada caso. Especialmente en casos de extradiciones y OEDE, donde la coordinación internacional es clave, su experiencia marca la diferencia.')}
                  {lawyer.slug === 'mounir-elyemlahy-chouati' && (language === 'ar'
                    ? 'يجمع منير بين المعرفة العميقة بالقانون الإسباني والمغربي، مما يجعله فريداً في مدريد. قدرته على فهم الفروق الثقافية والقانونية بين النظامين القضائيين تمنحه ميزة استراتيجية في قضايا تسليم المطلوبين والإرهاب.'
                    : 'Mounir combina el conocimiento profundo del derecho español y marroquí, lo que le hace único en Madrid. Su capacidad para entender los matices culturales y legales entre ambos sistemas jurídicos le proporciona una ventaja estratégica en casos de extradiciones y terrorismo. Su dominio del árabe permite una comunicación directa y precisa con clientes árabe-parlantes, eliminando barreras lingüísticas en momentos críticos.')}
                  {lawyer.slug === 'diego-cardona-valero' && (language === 'ar'
                    ? 'يتميز دييغو بقدرته الاستراتيجية في التقاضي المعقد وإعداد الطعون أمام المحاكم العليا. تخصصه في القانون الإجرائي الجنائي يسمح له بتحديد الثغرات الإجرائية وتصميم استراتيجيات دفاع قوية.'
                    : 'Diego se caracteriza por su capacidad estratégica en litigación compleja y preparación de recursos ante tribunales superiores. Su especialización en derecho procesal penal le permite identificar vulneraciones procesales y diseñar estrategias de defensa técnicamente sólidas. Ha participado en operaciones policiales de gran envergadura, logrando resultados favorables en casos de criminalidad organizada.')}
                  {lawyer.slug === 'ada-de-blas-pascual' && (language === 'ar'
                    ? 'تجمع آدا بين التكوين الدولي في كامبريدج والمعرفة العملية بالنظام القضائي الإسباني. تخصصها في القانون الجنائي الدولي والاقتصادي يجعلها مثالية للقضايا ذات البعد الدولي أو المكون المالي المعقد.'
                    : 'Ada combina la formación internacional en Cambridge con el conocimiento práctico del sistema judicial español. Su especialización en derecho penal internacional y económico la hace ideal para casos con dimensión internacional o componente financiero complejo. Su dominio de cuatro idiomas facilita la coordinación en procedimientos transfronterizos.')}
                </p>
              </div>

              <h3 className="text-xl font-semibold text-black/90 mb-4">
                {language === 'ar' ? 'المجالات الرئيسية للممارسة' : 'Áreas Principales de Práctica'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {lawyerData.practiceAreas.slice(0, 8).map((area: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 bg-charleston/5 p-4 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-black/80">{area}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-black/90 mt-8 mb-4">
                {language === 'ar' ? 'لماذا تختار هذا المحامي؟' : '¿Por Qué Elegir a este Abogado?'}
              </h3>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-black/80">
                {lawyer.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>

              <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-8">
                <h4 className="text-lg font-semibold text-gold mb-3">
                  {language === 'ar' ? 'استشارة مباشرة' : 'Consulta Directa'}
                </h4>
                <p className="text-black/80 mb-4">
                  {language === 'ar'
                    ? `إذا كنت تحتاج إلى مساعدة قانونية في ${lawyerData.specializations[0]}، يمكنك التواصل مباشرة مع ${lawyer.name} عبر نموذج الاتصال أو الهاتف 24/7.`
                    : `Si necesitas asistencia legal en ${lawyerData.specializations[0].toLowerCase()}, puedes contactar directamente con ${lawyer.name} a través del formulario de contacto o por teléfono 24/7.`}
                </p>
                <div className="flex gap-4 flex-wrap">
                  <a 
                    href="/#contacto"
                    className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                  >
                    {language === 'ar' ? 'نموذج الاتصال' : 'Formulario de Contacto'}
                  </a>
                  <a 
                    href="tel:+34611687226"
                    className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                  >
                    {language === 'ar' ? 'اتصل الآن' : 'Llamar Ahora'}
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Otros Miembros del Equipo */}
        <section className="bg-charleston/5 py-16">
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

