'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';

interface RelatedArticle {
  title: string;
  slug: string;
  category: string;
}

interface RelatedArticlesProps {
  currentSlug: string;
  category?: string;
  maxArticles?: number;
}

// Sistema de enlaces internos basado en categorías y temas
const getRelatedArticlesByCategory = (category: string): RelatedArticle[] => {
  const relatedMap: { [key: string]: RelatedArticle[] } = {
    'Terrorismo': [
      { title: 'Terrorismo y Audiencia Nacional', slug: 'terrorismo-audiencia-nacional', category: 'Terrorismo' },
      { title: 'Defensa Penal en Terrorismo', slug: 'defensa-penal-terrorismo-audiencia-nacional', category: 'Terrorismo' },
      { title: 'Enaltecimiento en Redes Sociales', slug: 'enaltecimiento-terrorismo-redes-sociales-defensa', category: 'Terrorismo' },
      { title: 'Captación Yihadista', slug: 'captacion-adoctrinamiento-yihadista-internet', category: 'Terrorismo' },
      { title: 'Terrorismo en Internet', slug: 'terrorismo-internet-redes-sociales-limites', category: 'Terrorismo' },
      { title: 'Autoadoctrinamiento Terrorista', slug: 'autoadoctrinamiento-terrorista-defensa-legal', category: 'Terrorismo' },
      { title: 'Financiación Terrorismo', slug: 'financiacion-terrorismo-tipos-penas-defensa', category: 'Terrorismo' },
      { title: 'Pertenencia Organización Terrorista', slug: 'pertenencia-organizacion-terrorista-defensa', category: 'Terrorismo' },
      { title: 'Derechos Fundamentales en Terrorismo', slug: 'derechos-fundamentales-procedimientos-terrorismo', category: 'Terrorismo' },
      { title: 'Terrorismo y Libertad Expresión', slug: 'terrorismo-libertad-expresion-limite-legal', category: 'Terrorismo' }
    ],
    'Extradiciones': [
      { title: 'Procedimientos de Extradición', slug: 'procedimientos-extradicion', category: 'Extradiciones' },
      { title: 'Extradiciones en España', slug: 'procedimientos-extradicion-espana', category: 'Extradiciones' },
      { title: 'Tipos de Extradición', slug: 'tipos-extradicion-espana', category: 'Extradiciones' },
      { title: 'Requisitos de Extradición', slug: 'requisitos-extradicion-espana', category: 'Extradiciones' },
      { title: 'Audiencia de Extradición', slug: 'audiencia-extradicion-espana', category: 'Extradiciones' },
      { title: 'Recursos contra Extradición', slug: 'recursos-contra-extradicion', category: 'Extradiciones' },
      { title: 'Derechos del Extraditado', slug: 'derechos-extraditado', category: 'Extradiciones' }
    ],
    'Defensa Penal Urgente': [
      { title: 'Defensa Penal Urgente', slug: 'defensa-penal-urgente', category: 'Defensa Penal Urgente' },
      { title: 'Guía Completa Defensa Urgente', slug: 'defensa-penal-urgente-guia-completa', category: 'Defensa Penal Urgente' },
      { title: 'Derechos Inmediatos Detenido', slug: 'derechos-inmediatos-detenido', category: 'Defensa Penal Urgente' },
      { title: 'Primeros Pasos en Comisaría', slug: 'primeros-pasos-comisaria', category: 'Defensa Penal Urgente' },
      { title: 'Asistencia Letrada de Urgencia', slug: 'asistencia-letrada-urgencia', category: 'Defensa Penal Urgente' },
      { title: 'Puesta a Disposición Judicial', slug: 'puesta-disposicion-judicial', category: 'Defensa Penal Urgente' },
      { title: 'Habeas Corpus y Recurso Amparo', slug: 'habeas-corpus-recurso-amparo', category: 'Defensa Penal Urgente' },
      { title: 'Medidas Cautelares', slug: 'medidas-cautelares-procesos-penales', category: 'Defensa Penal Urgente' },
      { title: 'Comunicación con Familiares', slug: 'comunicacion-familiares-detenido', category: 'Defensa Penal Urgente' },
      { title: 'Registro en Dependencias', slug: 'registro-dependencias-detenido', category: 'Defensa Penal Urgente' }
    ],
    'Derechos Fundamentales': [
      { title: 'Derechos de Detenidos', slug: 'derechos-detenidos', category: 'Derechos Fundamentales' },
      { title: 'Garantías Procesales', slug: 'derechos-detenidos-garantias-procesales', category: 'Derechos Fundamentales' },
      { title: 'Derechos Constitucionales', slug: 'derechos-constitucionales-detenido', category: 'Derechos Fundamentales' },
      { title: 'Asistencia Letrada', slug: 'derecho-asistencia-letrada-detenido', category: 'Derechos Fundamentales' },
      { title: 'Protección contra Torturas', slug: 'proteccion-torturas-tratos-inhumanos', category: 'Derechos Fundamentales' },
      { title: 'Grupos Vulnerables Detenidos', slug: 'derechos-grupos-vulnerables-detenidos', category: 'Derechos Fundamentales' },
      { title: 'Derechos en Dependencias Policiales', slug: 'derechos-dependencias-policiales', category: 'Derechos Fundamentales' },
      { title: 'Derechos Procesales y Recursos', slug: 'derechos-procesales-recursos-detenido', category: 'Derechos Fundamentales' }
    ],
    'Derecho Penal Económico': [
      { title: 'Blanqueo de Capitales', slug: 'blanqueo-capitales-detectar-defenderse', category: 'Derecho Penal Económico' }
    ],
    'Delitos contra la Salud Pública': [
      { title: 'Delitos Drogas - Consecuencias', slug: 'delitos-salud-publica-drogas-consecuencias', category: 'Delitos contra la Salud Pública' }
    ],
    'Internet y Ciberdelitos': [
      { title: 'Terrorismo en Internet', slug: 'terrorismo-internet-enaltecimiento-captacion', category: 'Internet y Ciberdelitos' }
    ]
  };

  return relatedMap[category] || [];
};

export default function RelatedArticles({ currentSlug, category, maxArticles = 6 }: RelatedArticlesProps) {
  const { language } = useLanguage();
  const t = translations[language];

  // Obtener artículos relacionados por categoría
  let related = category ? getRelatedArticlesByCategory(category) : [];

  // Filtrar el artículo actual
  related = related.filter(article => article.slug !== currentSlug);

  // Si no hay suficientes artículos de la categoría, agregar artículos populares
  if (related.length < maxArticles) {
    const popularArticles: RelatedArticle[] = [
      { title: 'Defensa Penal Urgente - Guía Completa', slug: 'defensa-penal-urgente-guia-completa', category: 'Defensa Penal Urgente' },
      { title: 'Procedimientos Extradición España', slug: 'procedimientos-extradicion-espana', category: 'Extradiciones' },
      { title: 'Derechos Detenidos', slug: 'derechos-detenidos-garantias-procesales', category: 'Derechos Fundamentales' },
      { title: 'Primeros Pasos Comisaría', slug: 'primeros-pasos-comisaria', category: 'Defensa Penal Urgente' }
    ];

    popularArticles.forEach(article => {
      if (related.length < maxArticles && article.slug !== currentSlug && !related.find(r => r.slug === article.slug)) {
        related.push(article);
      }
    });
  }

  // Limitar al máximo solicitado
  related = related.slice(0, maxArticles);

  if (related.length === 0) return null;

  return (
    <section className="bg-charleston/5 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h3 className="text-2xl font-bold text-gold mb-6">
          {t.casosDestacados.articulosRelacionados}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {related.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-white border border-gold/20 rounded-lg p-4 hover:border-gold/50 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="text-xs text-gold/70 uppercase tracking-wide mb-1 block">
                    {article.category}
                  </span>
                  <h4 className="text-black font-semibold mb-1 group-hover:text-gold transition-colors">
                    {article.title}
                  </h4>
                </div>
                <ArrowRight className="h-5 w-5 text-gold flex-shrink-0 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}









