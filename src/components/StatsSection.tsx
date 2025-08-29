'use client';

import { motion } from 'framer-motion';
import { Users, Award, Clock, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

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
        <motion.h2 
          id="stats-title" 
          className="text-3xl font-bold text-gold mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t.stats.title}
        </motion.h2>
        <motion.p 
          className="text-white/80 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {t.stats.subtitle}
        </motion.p>
      </motion.div>
      
      <div 
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        role="list"
        aria-label="Estadísticas y logros de STANS ABOGADOS"
      >
        {stats.map((stat, index) => (
          <motion.article
            key={stat.label}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -4, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="text-center p-6 rounded-xl bg-charleston border border-apricot/20 hover:border-gold/30 transition-all duration-500 group"
            role="listitem"
            itemScope
            itemType="https://schema.org/QuantitativeValue"
          >
            {/* Efecto de brillo sutil en hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            
            <div className="relative">
              {/* Icono con animación */}
              <motion.div 
                className="text-gold mb-4 flex justify-center"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.span 
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.icon}
                </motion.span>
              </motion.div>

              {/* Número con animación de entrada */}
              <motion.div 
                className="text-3xl font-bold text-gold mb-2"
                itemProp="value"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {stat.number}
              </motion.div>

              {/* Título con animación */}
              <motion.div 
                className="text-lg font-semibold mb-2"
                itemProp="name"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
              >
                {stat.label}
              </motion.div>

              {/* Descripción con animación */}
              <motion.div 
                className="text-white/70 text-sm"
                itemProp="description"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                viewport={{ once: true }}
              >
                {stat.description}
              </motion.div>

              {/* Línea decorativa que aparece */}
              <motion.div 
                className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.7 }}
                viewport={{ once: true }}
              />
            </div>

            <meta itemProp="unitText" content={stat.label} />
            <meta itemProp="value" content={stat.schemaValue} />
          </motion.article>
        ))}
      </div>

      {/* Elementos decorativos sutiles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/20 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
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
