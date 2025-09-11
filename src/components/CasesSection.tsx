'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import CaseCard from './CaseCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

type Case = {
  id: number;
  categoria: string;
  nombre: string;
  delito_principal: string;
  resultado: string;
  tipo_resolucion: string;
  favorabilidad: string;
  organo: string;
  localidad: string;
  año: string;
  caso_popular?: string;
  contenido: {
    resumen: string;
  };
  url?: string;
  imagen?: string;
};

const CasesSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await fetch('/casos/casos-procesados.json');
        if (!response.ok) {
          throw new Error('Error al cargar los casos');
        }
        const allCases: Case[] = await response.json();

        // Filtrar casos populares y limitar a 6 para mostrar en la home
        const popularCases = allCases
          .filter(caso => caso.caso_popular === 'Sí')
          .slice(0, 6);

        setCases(popularCases);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchCases();
  }, []);

  if (loading) {
    return (
      <section className="bg-white w-full py-12 sm:py-16 text-black cases-section">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-64 bg-gray-200 rounded-2xl"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white w-full py-12 sm:py-16 text-black cases-section">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-red-600">Error al cargar los casos: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (cases.length === 0) {
    return null; // No mostrar la sección si no hay casos populares
  }

  return (
    <motion.section
      id="casos"
      className="bg-white w-full py-12 sm:py-16 text-black cases-section"
      aria-labelledby="cases-title"
      role="region"
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
            id="cases-title"
            className="text-3xl font-bold text-gold mb-4"
          >
            {t.casosDestacados.title}
          </h2>
          <p className="text-black/70 text-lg max-w-2xl mx-auto">
            {t.casosDestacados.subtitle}
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Lista de casos destacados"
        >
          {cases.map((caso, index) => (
            <motion.div
              key={caso.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              role="listitem"
            >
              <CaseCard caso={caso} />
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
          <a
            href="/casos"
            className="inline-flex items-center gap-2 bg-gold text-black px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"
            aria-label={t.casosDestacados.verTodosCasos}
          >
            {t.casosDestacados.verTodosCasos}
            <motion.svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CasesSection;
