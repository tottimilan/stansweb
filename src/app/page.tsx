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

const WHATSAPP = '34611687226'; // Número real de STANS ABOGADOS

const lawyers = [
  {
    name: 'Rubén Vaquero Arribas',
    role: 'Socio Director',
    summary:
      'Penal y penal económico, derechos fundamentales, OEDE y extradiciones. Actúa ante cualquier tribunal con más de 15 años de experiencia.',
    tags: ['Penal Económico', 'OEDE/Extradiciones', 'Derechos Fundamentales', 'Tribunal Supremo'],
    languages: ['ES', 'EN'],
    experience: '15+ años',
    image: '/images/Equipo/Ruben1.png',
  },
  {
    name: 'Mounir Elyemlahy Chouati',
    role: 'Abogado Penalista',
    summary:
      'Penal y administrativo. Asesoramiento en Derecho marroquí para empresas y particulares. Especialista en extradiciones España-Marruecos.',
    tags: ['Penal', 'Derecho Marroquí', 'Administrativo', 'Extradiciones'],
    languages: ['ES', 'EN', 'AR'],
    experience: '12+ años',
    image: '/images/Equipo/Mounir1.png',
  },
  {
    name: 'Diego Cardona Valero',
    role: 'Abogado Penalista (ICAM 135715)',
    summary:
      'Defensa en causas complejas: personas, criminalidad organizada, terrorismo y garantías procesales. Especialista en casos de alta complejidad.',
    tags: ['Delitos contra las Personas', 'Criminalidad Organizada', 'Garantías Procesales', 'Terrorismo'],
    languages: ['ES'],
    experience: '10+ años',
    image: '/images/Equipo/Diego1.png',
  },
];

const areas = [
  { 
    title: 'Robos y Hurtos', 
    excerpt: 'Actuamos en guardia, comisaría y juzgado. Respuesta <15 min. Defensa integral desde el primer momento.', 
    href: '/areas/robos-hurtos',
    features: ['Actuación inmediata', 'Defensa en comisaría', 'Recursos y apelaciones']
  },
  { 
    title: 'Tráfico de Drogas', 
    excerpt: 'Estrategia inmediata y defensa integral en todas las fases. Experiencia en casos complejos.', 
    href: '/areas/drogas',
    features: ['Estrategia defensiva', 'Pruebas periciales', 'Reducción de penas']
  },
  { 
    title: 'Conducción & Alcoholemia', 
    excerpt: 'Asistencia inmediata, pruebas y plazos clave. Protección de tu carnet de conducir.', 
    href: '/areas/alcoholemia-trafico',
    features: ['Asistencia 24/7', 'Recursos administrativos', 'Defensa judicial']
  },
  { 
    title: 'Violencia de Género', 
    excerpt: 'Protección y garantías para víctimas y acusados. Defensa especializada con perspectiva de género.', 
    href: '/areas/violencia-genero',
    features: ['Defensa especializada', 'Medidas cautelares', 'Recursos de apelación']
  },
  { 
    title: 'Falsedad Documental', 
    excerpt: 'Documentos, pasaportes, certificaciones y periciales. Defensa técnica especializada.', 
    href: '/areas/falsedad-documental',
    features: ['Periciales técnicas', 'Defensa documental', 'Recursos especializados']
  },
  { 
    title: 'Delitos Informáticos', 
    excerpt: 'Hacking, phishing, sextorsión y datos personales. Defensa en la era digital.', 
    href: '/areas/delitos-informaticos',
    features: ['Evidencia digital', 'Periciales informáticas', 'Defensa tecnológica']
  },
];

export default function Page() {
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
        <section 
          id="equipo" 
          className="mx-auto max-w-6xl px-6 py-16 text-offwhite team-section"
          aria-labelledby="team-title"
          role="region"
        >
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
              Nuestro Equipo de Abogados Penalistas
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Abogados penalistas especializados con amplia experiencia en casos complejos. 
              Defensa integral en español, inglés y árabe.
            </p>
          </motion.div>
          
          <div 
            className="grid md:grid-cols-3 gap-6 lawyer-cards-container"
            role="list"
            aria-label="Lista de abogados del equipo"
          >
            {lawyers.map((lawyer, index) => (
              <motion.div
                key={lawyer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                role="listitem"
              >
                <LawyerCard {...lawyer} whatsapp={WHATSAPP} />
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
            <article className="bg-charleston border border-apricot/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gold mb-4">
                ¿Necesitas consultar con un abogado específico?
              </h3>
              <p className="text-white/80 mb-6">
                Cada miembro de nuestro equipo tiene especializaciones únicas. 
                Te conectamos con el abogado más adecuado para tu caso.
              </p>
              <a 
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola, necesito consultar con un abogado especializado. ¿Pueden ayudarme?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                aria-label="Contactar por WhatsApp para consulta gratuita"
              >
                Consulta Gratuita
              </a>
            </article>
          </motion.div>
        </section>

        {/* Practice Areas Section */}
        <section 
          id="areas" 
          className="mx-auto max-w-6xl px-6 py-16 text-offwhite practice-areas-section"
          aria-labelledby="areas-title"
          role="region"
        >
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
              Áreas de Defensa Penal
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Especialistas en todas las ramas del derecho penal. 
              Defensa integral desde el primer momento hasta el final del proceso.
            </p>
          </motion.div>
          
          <div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
            aria-label="Lista de áreas de práctica penal"
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-6 py-3 text-gold">
              <span className="text-sm font-medium">¿No encuentras tu caso?</span>
              <a 
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola, tengo un caso penal diferente. ¿Pueden ayudarme?')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline hover:no-underline"
                aria-label="Consultar caso penal específico por WhatsApp"
              >
                Consúltanos
              </a>
            </div>
          </motion.div>
        </section>

        {/* Statistics Section */}
        <section 
          className="stats-section"
          aria-labelledby="stats-title"
          role="region"
        >
          <StatsSection />
        </section>

        {/* Call to Action Section */}
        <section 
          className="mx-auto max-w-6xl px-6 pb-24 cta-section"
          aria-labelledby="cta-title"
          role="region"
        >
          <article className="rounded-2xl bg-charleston border border-apricot/20 p-8 text-center text-offwhite">
            <h3 
              id="cta-title" 
              className="text-xl font-semibold"
            >
              ¿Tienes una duda penal?
            </h3>
            <p className="text-white/80 mt-2">
              Déjanos tu email y te orientamos hoy mismo.
            </p>
            <div className="mx-auto max-w-md mt-6">
              <LeadForm />
            </div>
          </article>
        </section>

        {/* Footer */}
        <Footer />
        
        {/* WhatsApp Button */}
        <WhatsAppButton whatsapp={WHATSAPP} />
      </main>
    </>
  );
}
