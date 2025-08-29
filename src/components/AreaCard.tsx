'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Shield, Clock, Users, Award, FileText, Globe, Check } from 'lucide-react';

type Props = {
  title: string;
  excerpt: string;
  href?: string;
  features?: string[];
};

const getIcon = (title: string) => {
  if (title.includes('Robos') || title.includes('Hurtos')) return <Shield className="h-6 w-6" />;
  if (title.includes('Drogas')) return <FileText className="h-6 w-6" />;
  if (title.includes('Conducción') || title.includes('Alcoholemia')) return <Clock className="h-6 w-6" />;
  if (title.includes('Violencia')) return <Users className="h-6 w-6" />;
  if (title.includes('Falsedad')) return <Award className="h-6 w-6" />;
  if (title.includes('Informáticos')) return <Globe className="h-6 w-6" />;
  return <Shield className="h-6 w-6" />;
};

export default function AreaCard({ title, excerpt, href = '#', features = [] }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group rounded-2xl border border-gold/30 bg-white p-6 text-black shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-gold/20 hover:border-gold/50 h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-gold group-hover:text-apricot transition-colors">
          {getIcon(title)}
        </div>
        <div className="text-gold/60 group-hover:text-gold transition-colors">
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
      
      <h3 className="text-lg font-semibold group-hover:text-gold transition-colors mb-3">{title}</h3>
      <p className="text-black/70 text-sm leading-relaxed mb-4 flex-grow">{excerpt}</p>
      
      {features.length > 0 && (
        <div className="mb-4 flex-grow">
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="h-3 w-3 text-gold flex-shrink-0" />
                <span className="text-xs text-black/60">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <Link
        href={href}
        className="inline-flex items-center mt-auto text-sm text-black bg-gold px-4 py-2 rounded-lg hover:opacity-90 transition group"
      >
        Ver defensa
        <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
