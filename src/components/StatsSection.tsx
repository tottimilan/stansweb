'use client';

import { motion } from 'framer-motion';
import { Users, Award, Clock, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const getStats = (t: any) => [
  {
    icon: <Users className="h-8 w-8" />,
    number: t.stats.casos.number,
    label: t.stats.casos.label,
    description: t.stats.casos.description,
    schemaValue: '200'
  },
  {
    icon: <Award className="h-8 w-8" />,
    number: t.stats.experiencia.number,
    label: t.stats.experiencia.label,
    description: t.stats.experiencia.description,
    schemaValue: '15'
  },
  {
    icon: <Clock className="h-8 w-8" />,
    number: t.stats.respuesta.number,
    label: t.stats.respuesta.label,
    description: t.stats.respuesta.description,
    schemaValue: '15'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    number: t.stats.idiomas.number,
    label: t.stats.idiomas.label,
    description: t.stats.idiomas.description,
    schemaValue: '3'
  }
];

export default function StatsSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const stats = getStats(t);
  
  return (
    <section 
      className="mx-auto max-w-6xl px-6 py-16 text-offwhite stats-section"
      aria-labelledby="stats-title"
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
          id="stats-title" 
          className="text-3xl font-bold text-gold mb-4"
        >
          {t.stats.title}
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          {t.stats.subtitle}
        </p>
      </motion.div>
      
      <div 
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        role="list"
        aria-label="Estadísticas y logros de STANS ABOGADOS"
      >
        {stats.map((stat, index) => (
          <motion.article
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -2, scale: 1.02 }}
            className="text-center p-6 rounded-xl bg-charleston border border-apricot/20 hover:border-gold/30 transition-all"
            role="listitem"
            itemScope
            itemType="https://schema.org/QuantitativeValue"
          >
            <div className="text-gold mb-4 flex justify-center">
              <span aria-hidden="true">{stat.icon}</span>
            </div>
            <div 
              className="text-3xl font-bold text-gold mb-2"
              itemProp="value"
            >
              {stat.number}
            </div>
            <div 
              className="text-lg font-semibold mb-2"
              itemProp="name"
            >
              {stat.label}
            </div>
            <div 
              className="text-white/70 text-sm"
              itemProp="description"
            >
              {stat.description}
            </div>
            <meta itemProp="unitText" content={stat.label} />
            <meta itemProp="value" content={stat.schemaValue} />
          </motion.article>
        ))}
      </div>

      {/* Schema.org Structured Data para estadísticas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "STANS ABOGADOS",
            "description": "Despacho de abogados penalistas en Madrid",
            "url": "https://stansabogados.com",
            "foundingDate": "2009",
            "numberOfEmployees": "3",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "150",
              "bestRating": "5",
              "worstRating": "1"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicios de Defensa Penal",
              "description": "Servicios especializados en derecho penal"
            }
          })
        }}
      />
    </section>
  );
}
