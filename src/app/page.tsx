'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import LawyerCard from '@/components/LawyerCard';
import AreaCard from '@/components/AreaCard';
import LeadForm from '@/components/LeadForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';
import StatsSection from '@/components/StatsSection';
import ScrollProgress from '@/components/ScrollProgress';
import { useScrollHighlight } from '@/hooks/useScrollHighlight';
import ContactSection from '@/components/ContactSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

const WHATSAPP = '34611687226'; // Número real de STANS ABOGADOS

const getLawyers = (t: any) => [
  {
    name: t.team.ruben.name,
    role: t.team.ruben.role,
    summary: t.team.ruben.summary,
    tags: t.team.ruben.tags,
    languages: ['ES', 'EN'],
    experience: t.team.ruben.experience,
    image: '/images/Equipo/Ruben1.webp?v=2',
    hoverImage: '/images/Equipo/Ruben4.webp?v=2',
    backgroundImage: '/images/Equipo/Ruben3.webp?v=2',
  },
  {
    name: t.team.mounir.name,
    role: t.team.mounir.role,
    summary: t.team.mounir.summary,
    tags: t.team.mounir.tags,
    languages: ['ES', 'EN', 'AR'],
    experience: t.team.mounir.experience,
    image: '/images/Equipo/Mounir1.webp?v=2',
    hoverImage: '/images/Equipo/Mounir4.webp?v=2',
    backgroundImage: '/images/Equipo/Mounir3.webp?v=2',
  },
  {
    name: t.team.diego.name,
    role: t.team.diego.role,
    summary: t.team.diego.summary,
    tags: t.team.diego.tags,
    languages: ['ES'],
    experience: t.team.diego.experience,
    image: '/images/Equipo/Diego1.webp?v=2',
    hoverImage: '/images/Equipo/Diego4.webp?v=2',
    backgroundImage: '/images/Equipo/Diego3.webp?v=2',
  },
];

const getAreas = (t: any) => [
  { 
    title: t.areas.robosHurtos.title, 
    excerpt: t.areas.robosHurtos.excerpt, 
    href: '/areas/robos-hurtos',
    features: t.areas.robosHurtos.features
  },
  { 
    title: t.areas.traficoDrogas.title, 
    excerpt: t.areas.traficoDrogas.excerpt, 
    href: '/areas/drogas',
    features: t.areas.traficoDrogas.features
  },
  { 
    title: t.areas.conduccionAlcoholemia.title, 
    excerpt: t.areas.conduccionAlcoholemia.excerpt, 
    href: '/areas/alcoholemia-trafico',
    features: t.areas.conduccionAlcoholemia.features
  },
  { 
    title: t.areas.violenciaGenero.title, 
    excerpt: t.areas.violenciaGenero.excerpt, 
    href: '/areas/violencia-genero',
    features: t.areas.violenciaGenero.features
  },
  { 
    title: t.areas.falsedadDocumental.title, 
    excerpt: t.areas.falsedadDocumental.excerpt, 
    href: '/areas/falsedad-documental',
    features: t.areas.falsedadDocumental.features
  },
  { 
    title: t.areas.delitosInformaticos.title, 
    excerpt: t.areas.delitosInformaticos.excerpt, 
    href: '/areas/delitos-informaticos',
    features: t.areas.delitosInformaticos.features
  },
];

export default function Page() {
  const { language } = useLanguage();
  const t = translations[language];
  const lawyers = getLawyers(t);
  const areas = getAreas(t);
  const isTeamHighlighted = useScrollHighlight('equipo');
  const isAreasHighlighted = useScrollHighlight('areas');
  const isContactHighlighted = useScrollHighlight('contacto');
  
  return (
    <>
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="sr-only">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <a itemProp="item" href="/">
              <span itemProp="name">Inicio</span>
            </a>
            <meta itemProp="position" content="1" />
          </li>
        </ol>
      </nav>

      <main className="bg-black" role="main">
        <ScrollProgress />
        <Navigation />
        
        {/* Hero Section - Main Landing */}
        <section 
          id="inicio" 
          className="hero-section"
          aria-labelledby="hero-title"
          role="banner"
        >
          <Hero whatsapp={WHATSAPP} />
        </section>

        {/* Team Section */}
        <motion.section 
          id="equipo" 
          className="bg-charleston w-full py-12 sm:py-16 text-offwhite team-section"
          aria-labelledby="team-title"
          role="region"
          animate={{
            boxShadow: isTeamHighlighted ? "0 0 30px rgba(165, 107, 55, 0.3)" : "none"
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 
              id="team-title" 
              className="text-3xl font-bold text-gold mb-4"
            >
              {t.team.nuestroEquipo}
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              {t.team.descripcionCompleta}
            </p>
          </motion.div>
          
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lawyer-cards-container"
            role="list"
            aria-label="Lista de abogados del equipo"
          >
            {lawyers.map((lawyer, index) => (
              <motion.div
                key={lawyer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                role="listitem"
              >
                <LawyerCard {...lawyer} />
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <article className="bg-charleston border border-apricot/20 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gold mb-4">
                {t.team.consultaEspecifica}
              </h3>
              <p className="text-white/80 mb-6">
                {t.team.consultaDescripcion}
              </p>
              <a 
                href="#contacto"
                className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                aria-label="Ir a la sección de contacto"
              >
                {t.team.consultaGratuita}
              </a>
            </article>
          </motion.div>
          </div>
        </motion.section>

        {/* Separador visual */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>

        {/* Practice Areas Section */}
        <motion.section 
          id="areas" 
          className="bg-chinese w-full py-12 sm:py-16 text-black practice-areas-section"
          aria-labelledby="areas-title"
          role="region"
          animate={{
            boxShadow: isAreasHighlighted ? "0 0 30px rgba(165, 107, 55, 0.3)" : "none"
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 
              id="areas-title" 
              className="text-3xl font-bold text-gold mb-4"
            >
              {t.areas.areasDefensa}
            </h2>
            <p className="text-black/70 text-lg max-w-2xl mx-auto">
              {t.areas.descripcionCompleta}
            </p>
          </motion.div>
          
          <div 
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            role="list"
            aria-label={t.common.listaAreas}
          >
            {areas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                role="listitem"
              >
                <AreaCard {...area} />
              </motion.div>
            ))}
          </div>
          

          </div>
        </motion.section>

        {/* Separador visual */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>

        {/* Statistics Section */}
        <section 
          className="bg-black stats-section"
          aria-labelledby="stats-title"
          role="region"
        >
          <StatsSection />
        </section>

                {/* Separador visual */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
        
        {/* WhatsApp Button */}
        <WhatsAppButton whatsapp={WHATSAPP} />
      </main>
    </>
  );
}
