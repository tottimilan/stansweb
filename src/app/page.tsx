'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import LawyerCard from '@/components/LawyerCard';
import AreaCard from '@/components/AreaCard';
import LeadForm from '@/components/LeadForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';

const WHATSAPP = '34611687226'; // Número real de STANS ABOGADOS

const lawyers = [
  {
    name: 'Rubén Vaquero Arribas',
    summary:
      'Penal y penal económico, derechos fundamentales, OEDE y extradiciones. Actúa ante cualquier tribunal.',
    tags: ['Penal Económico', 'OEDE/Extradiciones', 'Derechos Fundamentales'],
    languages: ['ES', 'EN'],
  },
  {
    name: 'Mounir Elyemlahy Chouati',
    summary:
      'Penal y administrativo. Asesoramiento en Derecho marroquí para empresas y particulares.',
    tags: ['Penal', 'Derecho Marroquí', 'Administrativo'],
    languages: ['ES', 'EN', 'AR'],
  },
  {
    name: 'Diego Cardona Valero (ICAM 135715)',
    summary:
      'Defensa en causas complejas: personas, criminalidad organizada, terrorismo y garantías procesales.',
    tags: ['Delitos contra las Personas', 'Criminalidad Organizada', 'Garantías Procesales'],
    languages: ['ES'],
  },
];

const areas = [
  { title: 'Robos y Hurtos', excerpt: 'Actuamos en guardia, comisaría y juzgado. Respuesta <15 min.', href: '/areas/robos-hurtos' },
  { title: 'Tráfico de Drogas', excerpt: 'Estrategia inmediata y defensa integral en todas las fases.', href: '/areas/drogas' },
  { title: 'Conducción & Alcoholemia', excerpt: 'Asistencia inmediata, pruebas y plazos clave.', href: '/areas/alcoholemia-trafico' },
  { title: 'Violencia de Género', excerpt: 'Protección y garantías para víctimas y acusados.', href: '/areas/violencia-genero' },
  { title: 'Falsedad Documental', excerpt: 'Documentos, pasaportes, certificaciones y periciales.', href: '/areas/falsedad-documental' },
  { title: 'Delitos Informáticos', excerpt: 'Hacking, phishing, sextorsión y datos personales.', href: '/areas/delitos-informaticos' },
];

export default function Page() {
  return (
    <main className="bg-black">
      <Navigation />
      <Hero whatsapp={WHATSAPP} />

      {/* Diferenciales */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-offwhite">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {['24/7 <15min', 'Español–Árabe', 'Extradición España–Marruecos', 'Penal Puro'].map((d, index) => (
            <motion.div
              key={d}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -2, scale: 1.02 }}
              className="rounded-xl bg-charleston border border-apricot/20 px-5 py-4 text-center hover:shadow-lg transition-all"
            >
              {d}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Áreas */}
      <section className="mx-auto max-w-6xl px-6 pb-8 text-offwhite">
        <h2 className="text-2xl font-semibold mb-6">Áreas de Defensa Penal</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((a) => (
            <AreaCard key={a.title} {...a} />
          ))}
        </div>
      </section>

      {/* Equipo */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-offwhite">
        <h2 className="text-2xl font-semibold mb-6">Equipo</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {lawyers.map((l) => (
            <LawyerCard key={l.name} {...l} whatsapp={WHATSAPP} />
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-2xl bg-charleston border border-apricot/20 p-8 text-center text-offwhite">
          <h3 className="text-xl font-semibold">¿Tienes una duda penal?</h3>
          <p className="text-white/80 mt-2">Déjanos tu email y te orientamos hoy mismo.</p>
          <div className="mx-auto max-w-md mt-6">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <Footer />
      <WhatsAppButton whatsapp={WHATSAPP} />
    </main>
  );
}
