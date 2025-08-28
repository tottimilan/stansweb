'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Shield, Clock, Users, Award, FileText, Globe } from 'lucide-react';

type Props = {
  title: string;
  excerpt: string;
  href?: string;
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

export default function AreaCard({ title, excerpt, href = '#' }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group rounded-2xl border border-apricot/20 bg-charleston p-6 text-offwhite shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-gold/10"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-gold group-hover:text-apricot transition-colors">
          {getIcon(title)}
        </div>
        <div className="text-gold/60 group-hover:text-gold transition-colors">
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
      
      <h3 className="text-lg font-semibold group-hover:text-gold transition-colors">{title}</h3>
      <p className="text-white/80 mt-2">{excerpt}</p>
      <Link
        href={href}
        className="inline-flex items-center mt-4 text-sm text-black bg-gold px-4 py-2 rounded-lg hover:opacity-90 transition group"
      >
        Ver defensa
        <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
