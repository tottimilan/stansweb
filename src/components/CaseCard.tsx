'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Shield, Clock, Award, FileText, Scale } from 'lucide-react';
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
  contenido: {
    resumen: string;
  };
  url?: string;
  imagen?: string;
};

type Props = {
  caso: Case;
};

const getIcon = (categoria: string) => {
  const cat = categoria.toLowerCase();
  if (cat.includes('terrorismo') || cat.includes('yihadista')) return <Shield className="h-6 w-6" />;
  if (cat.includes('odio') || cat.includes('expresión')) return <FileText className="h-6 w-6" />;
  if (cat.includes('robo') || cat.includes('hurto')) return <Clock className="h-6 w-6" />;
  if (cat.includes('violencia') || cat.includes('persona')) return <Scale className="h-6 w-6" />;
  return <Award className="h-6 w-6" />;
};

const getCaseUrl = (caso: Case) => {
  // Si ya tiene URL definida, usarla
  if (caso.url) return caso.url;

  // Generar URL basada en el nombre del caso (simplificada para SEO)
  const slug = caso.nombre
    .toLowerCase()
    .replace(/caso\s*-?\s*/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

  return `/casos/${slug}`;
};

export default function CaseCard({ caso }: Props) {
  const { language } = useLanguage();
  const t = translations[language];

  // Limitar el resumen a una longitud razonable
  const summary = caso.contenido.resumen.length > 120
    ? caso.contenido.resumen.substring(0, 120) + '...'
    : caso.contenido.resumen;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group rounded-2xl border border-gold/30 bg-white p-6 text-black shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-gold/20 hover:border-gold/50 h-full flex flex-col"
    >
      {/* Header con icono y badge de favorable */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-gold group-hover:text-apricot transition-colors">
          {getIcon(caso.categoria)}
        </div>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
          caso.id === 19
            ? 'bg-blue-600 text-blue-100'
            : 'bg-emerald-700 text-emerald-100'
        }`}>
          {caso.id === 19 ? t.casosDestacados.enCurso : t.casosDestacados.favorable}
        </span>
      </div>

      {/* Categoría */}
      <div className="text-xs text-gold/70 uppercase tracking-wide mb-2">
        {caso.categoria}
      </div>

      {/* Título del caso */}
      <h3 className="text-lg font-semibold group-hover:text-gold transition-colors mb-3 leading-tight">
        {caso.nombre.replace(/^CASO\s*-?\s*/, '')}
      </h3>

      {/* Información del caso */}
      <div className="space-y-2 mb-4 flex-grow">
        <div className="text-sm text-black/70">
          <span className="font-medium text-black">{t.casosDestacados.resultado}</span> {caso.resultado}
        </div>
        <div className="text-sm text-black/70">
          <span className="font-medium text-black">{t.casosDestacados.organo}</span> {caso.organo}
        </div>
        <div className="text-sm text-black/70">
          <span className="font-medium text-black">{t.casosDestacados.tipo}</span> {caso.tipo_resolucion}
        </div>
      </div>

      {/* Resumen */}
      <p className="text-black/70 text-sm leading-relaxed mb-4 flex-grow">
        {summary}
      </p>

      {/* Botón de acción */}
      <Link
        href={getCaseUrl(caso)}
        className="inline-flex items-center mt-auto text-sm text-black bg-gold px-4 py-2 rounded-lg hover:opacity-90 transition group"
      >
        {t.casosDestacados.verCasoCompleto}
        <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
