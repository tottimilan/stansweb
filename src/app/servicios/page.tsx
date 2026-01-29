'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/FooterOptimized';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import { Scale, Shield, Users, FileText, Building, Gavel, AlertTriangle, Briefcase, Home, ArrowRight, Globe, Heart } from 'lucide-react';

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
      href: '/servicios/libertad-expresion',
      casosHref: '/casos#libertad-expresion'
    },
    {
      icon: AlertTriangle,
      title: t.areas.terrorismo.title,
      description: t.areas.terrorismo.excerpt,
      features: t.areas.terrorismo.features,
      longDescription: 'Especialistas en defensa ante la Audiencia Nacional en casos de terrorismo. Experiencia en enaltecimiento del terrorismo, captación, adoctrinamiento, financiación y actividades relacionadas con organizaciones terroristas. Conocimiento profundo de la normativa nacional e internacional.',
      casosRelacionados: [4, 5, 19],
      href: '/servicios/terrorismo-audiencia-nacional',
      casosHref: '/casos#terrorismo'
    },
    {
      icon: Users,
      title: t.areas.delitosPersonas.title,
      description: t.areas.delitosPersonas.excerpt,
      features: t.areas.delitosPersonas.features,
      longDescription: 'Defensa integral en casos de delitos contra la vida, integridad física y moral. Incluye homicidio, lesiones, amenazas, coacciones, detención ilegal y violencia de género. Protección de derechos fundamentales en todas las fases del proceso penal.',
      casosRelacionados: [6, 19, 12],
      href: '/servicios/delitos-personas',
      casosHref: '/casos#delitos-personas'
    },
    {
      icon: Home,
      title: t.areas.robosPatrimonio.title,
      description: t.areas.robosPatrimonio.excerpt,
      features: t.areas.robosPatrimonio.features,
      longDescription: 'Defensa especializada en delitos contra el patrimonio y pertenencia a organización criminal. Experiencia en casos complejos de robos con violencia, robos con fuerza, hurtos, receptación y desmantelamiento de grupos criminales organizados.',
      casosRelacionados: [2, 3, 9, 11, 14, 16, 17, 20],
      href: '/servicios/robos-patrimonio',
      casosHref: '/casos#patrimonio-crimen-organizado'
    },
    {
      icon: Building,
      title: t.areas.delitosEconomicos.title,
      description: t.areas.delitosEconomicos.excerpt,
      features: t.areas.delitosEconomicos.features,
      longDescription: 'Asesoría penal especializada en delitos económicos, empresariales y laborales. Defensa técnica en estafa, fraudes, blanqueo de capitales, delitos societarios, falsedad documental, insolvencias punibles y delitos contra los derechos de los trabajadores.',
      casosRelacionados: [7, 10, 15],
      href: '/servicios/delitos-economicos',
      casosHref: '/casos#delitos-economicos'
    },
    {
      icon: Gavel,
      title: t.areas.ordenPublico.title,
      description: t.areas.ordenPublico.excerpt,
      features: t.areas.ordenPublico.features,
      longDescription: 'Defensa en casos de orden público, delitos contra la salud pública (tráfico de drogas) y ejecución penal. Asesoramiento en resistencia a la autoridad, atentado, desobediencia, tenencia de armas, medidas cautelares, libertad provisional y recursos en fase de ejecución.',
      casosRelacionados: [8, 13, 18],
      href: '/servicios/orden-publico-drogas',
      casosHref: '/casos#orden-publico'
    },
    // Servicios adicionales
    {
      icon: Globe,
      title: language === 'ar' ? 'التسليم والأوامر الأوروبية' : 'Extradiciones y OEDE',
      description: language === 'ar' ? 'دفاع متخصص في عمليات التسليم الدولية وأوامر الاعتقال والتسليم الأوروبية' : 'Defensa especializada en extradiciones internacionales y Órdenes Europeas de Detención y Entrega',
      features: language === 'ar' ? 
        ['الدفاع ضد التسليم', 'أوامر الاعتقال الأوروبية', 'التعاون القضائي الدولي', 'حماية الحقوق الأساسية'] :
        ['Defensa contra extradiciones', 'OEDE y euroórdenes', 'Cooperación judicial internacional', 'Protección de derechos fundamentales'],
      longDescription: language === 'ar' ? 
        'متخصصون في إجراءات التسليم الدولية والأوامر الأوروبية. خبرة في الدفاع ضد التسليم وحماية الحقوق الأساسية في الإجراءات العابرة للحدود.' :
        'Especialistas en procedimientos de extradición internacional y OEDE. Experiencia en defensa contra extradiciones y protección de derechos fundamentales en procedimientos transfronterizos.',
      casosRelacionados: [],
      href: '/servicios/extradiciones',
      casosHref: '/casos'
    },
    {
      icon: Heart,
      title: language === 'ar' ? 'العنف ضد المرأة' : 'Violencia de Género',
      description: language === 'ar' ? 'دفاع متخصص في قضايا العنف الأسري والعنف ضد المرأة بحساسية ومهنية' : 'Defensa especializada en casos de violencia doméstica y de género con sensibilidad y profesionalidad',
      features: language === 'ar' ? 
        ['الدفاع في اتهامات العنف', 'تمثيل الضحايا', 'أوامر الحماية', 'الدفاع ضد الاتهامات الكاذبة'] :
        ['Defensa en acusaciones', 'Representación de víctimas', 'Órdenes de protección', 'Defensa contra denuncias falsas'],
      longDescription: language === 'ar' ? 
        'نقدم المساعدة القانونية لكل من الضحايا والمتهمين، مع ضمان حماية الحقوق الأساسية والإجراءات القانونية الواجبة في جميع الحالات.' :
        'Ofrecemos asistencia legal tanto a víctimas como a investigados, garantizando la protección de derechos fundamentales y el debido proceso en todos los casos.',
      casosRelacionados: [],
      href: '/servicios/violencia-genero',
      casosHref: '/casos'
    },
    {
      icon: Scale,
      title: language === 'ar' ? 'الإجراءات الجنائية والطعون' : 'Procedimiento Penal y Recursos',
      description: language === 'ar' ? 'دفاع متخصص في جميع مراحل الإجراءات الجنائية من الاعتقال إلى الطعون' : 'Defensa especializada en todas las fases del procedimiento penal desde la detención hasta los recursos',
      features: language === 'ar' ? 
        ['الدفاع العاجل 24/7', 'الإحضار القضائي', 'التدابير الاحترازية', 'الطعون والموارد الاستثنائية'] :
        ['Defensa urgente 24/7', 'Habeas corpus', 'Medidas cautelares', 'Recursos y apelaciones'],
      longDescription: language === 'ar' ? 
        'متخصصون في جميع مراحل الإجراءات الجنائية. من الدفاع في الاعتقال الأولي إلى الطعون في المحكمة العليا.' :
        'Especialistas en todas las fases del procedimiento penal. Desde la defensa en la detención inicial hasta los recursos ante el Tribunal Supremo.',
      casosRelacionados: [],
      href: '/servicios/procedimiento-penal',
      casosHref: '/casos'
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
                      {t.areas.masInformacion}
                      <ArrowRight className={`h-4 w-4 transition-all ${language === 'ar' ? 'rotate-180' : ''}`} />
                    </Link>
                    {service.casosRelacionados.length > 0 && (
                      <Link
                        href={service.casosHref}
                        className="text-sm text-black/50 hover:text-gold transition-colors"
                      >
                        {service.casosRelacionados.length} {t.areas.casosRelacionados}
                      </Link>
                    )}
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

        {/* SEO Content Section - Expandir servicios */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gold mb-6">
                {language === 'ar' ? 'خدمات دفاع جنائي شاملة في مدريد' : 'Servicios de Defensa Penal Integral en Madrid'}
              </h2>
              
              <p className="text-black/80 leading-relaxed mb-6">
                {language === 'ar'
                  ? 'في ستانس للمحاماة، نقدم دفاعاً جنائياً متخصصاً في جميع مجالات القانون الجنائي. فريقنا من المحامين ذوي الخبرة في المحكمة الوطنية والمحكمة العليا والمحكمة الدستورية يضمن دفاعاً عالي الجودة في أي نوع من القضايا الجنائية.'
                  : 'En STANS ABOGADOS ofrecemos defensa penal especializada en todas las ramas del derecho penal. Nuestro equipo de abogados con experiencia en la Audiencia Nacional, Tribunal Supremo y Tribunal Constitucional garantiza una defensa de calidad en cualquier tipo de procedimiento penal.'}
              </p>

              <h3 className="text-xl font-semibold text-black/90 mt-8 mb-4">
                {language === 'ar' ? 'نهجنا في الدفاع' : 'Nuestro Enfoque de Defensa'}
              </h3>
              <p className="text-black/80 leading-relaxed mb-4">
                {language === 'ar'
                  ? 'كل قضية فريدة وتتطلب استراتيجية مخصصة. نحن نبدأ بتحليل شامل للوقائع والأدلة، ثم نطور استراتيجية دفاع مصممة خصيصاً لظروف قضيتك المحددة.'
                  : 'Cada caso es único y requiere una estrategia personalizada. Comenzamos con un análisis exhaustivo de los hechos y las pruebas, luego desarrollamos una estrategia de defensa diseñada específicamente para las circunstancias de tu caso. Nuestro enfoque incluye:'}
              </p>

              <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-black/80">
                <li><strong>{language === 'ar' ? 'التحليل الأولي:' : 'Análisis inicial:'}</strong> {language === 'ar' ? 'مراجعة شاملة لجميع الوثائق والأدلة' : 'Revisión completa de toda la documentación y evidencias disponibles'}</li>
                <li><strong>{language === 'ar' ? 'الاستراتيجية:' : 'Estrategia:'}</strong> {language === 'ar' ? 'تطوير خطة دفاع مخصصة' : 'Desarrollo de plan de defensa personalizado según objetivos del cliente'}</li>
                <li><strong>{language === 'ar' ? 'التنفيذ:' : 'Ejecución:'}</strong> {language === 'ar' ? 'تمثيل قوي في جميع مراحل الإجراءات' : 'Representación activa en todas las fases del procedimiento'}</li>
                <li><strong>{language === 'ar' ? 'المتابعة:' : 'Seguimiento:'}</strong> {language === 'ar' ? 'تحديثات منتظمة وتواصل مستمر' : 'Actualizaciones regulares y comunicación constante con el cliente'}</li>
              </ul>

              <h3 className="text-xl font-semibold text-black/90 mt-8 mb-4">
                {language === 'ar' ? 'لماذا التخصص مهم؟' : '¿Por Qué es Importante la Especialización?'}
              </h3>
              <p className="text-black/80 leading-relaxed mb-6">
                {language === 'ar'
                  ? 'القانون الجنائي مجال معقد ومتطور باستمرار. التخصص الحصري في هذا المجال يسمح لنا بالبقاء محدثين مع أحدث الاجتهادات القضائية، ومعرفة استراتيجيات الدفاع الأكثر فعالية، وتقديم خدمة عالية الجودة.'
                  : 'El derecho penal es un área compleja y en constante evolución. La especialización exclusiva en esta materia nos permite mantenernos actualizados con la última jurisprudencia, conocer las estrategias de defensa más efectivas y ofrecer un servicio de máxima calidad. A diferencia de despachos generalistas, en STANS ABOGADOS solo hacemos derecho penal, lo que se traduce en mayor experiencia y mejores resultados para nuestros clientes.'}
              </p>

              <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mt-8">
                <p className="text-lg font-semibold text-gold mb-3">
                  {language === 'ar' ? 'هل تحتاج إلى مساعدة في إحدى هذه المجالات؟' : '¿Necesitas Ayuda en Alguna de estas Áreas?'}
                </p>
                <p className="text-black/80 mb-4">
                  {language === 'ar'
                    ? 'اتصل بنا الآن. نحن متاحون 24 ساعة في اليوم، 7 أيام في الأسبوع للرد على استفساراتك وتقييم قضيتك.'
                    : 'Contacta con nosotros ahora. Estamos disponibles 24 horas al día, 7 días a la semana para responder tus consultas y valorar tu caso.'}
                </p>
                <a 
                  href="tel:+34611687226"
                  className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  {language === 'ar' ? 'اتصل: 34 611 68 72 26+' : 'Llamar: +34 611 68 72 26'}
                </a>
              </div>
            </article>
          </div>
        </section>

        <Footer />
        <WhatsAppButton whatsapp={WHATSAPP} />
      </main>
    </>
  );
}

