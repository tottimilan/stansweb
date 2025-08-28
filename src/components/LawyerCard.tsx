'use client';

import { motion } from 'framer-motion';
import { Phone, Award, Languages, Shield, ArrowRight, Clock } from 'lucide-react';

type Props = {
  name: string;
  role?: string;
  summary: string;
  tags?: string[];
  languages?: string[];
  experience?: string;
  whatsapp?: string;
};

export default function LawyerCard({
  name, role = 'Abogado Penalista', summary, tags = [], languages = [], experience, whatsapp
}: Props) {
  const text = encodeURIComponent(`Hola, quisiera consultar con ${name}.`);
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group rounded-2xl border border-apricot/20 bg-charleston p-6 text-offwhite shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-gold/10 hover:border-gold/30"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-gold group-hover:text-apricot transition-colors">
          <Shield className="h-6 w-6" />
        </div>
        <div className="text-gold/60 group-hover:text-gold transition-colors">
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      <h3 className="text-xl font-semibold group-hover:text-gold transition-colors">{name}</h3>
      <p className="text-white/70 text-sm mt-1 mb-2">{role}</p>
      
      {experience && (
        <div className="flex items-center gap-2 mb-3">
          <Clock className="h-4 w-4 text-gold" />
          <span className="text-xs text-gold font-medium">{experience} de experiencia</span>
        </div>
      )}
      
      <p className="mt-3 text-white/80 text-sm leading-relaxed">{summary}</p>

      {!!tags.length && (
        <div className="mt-4">
          <div className="flex items-center mb-2">
            <Award className="h-4 w-4 mr-2 text-gold" />
            <span className="text-xs text-offwhite/60 font-medium">Especializaciones</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map(t => (
              <span key={t} className="text-xs bg-gold/10 text-gold border border-gold/20 rounded-full px-3 py-1">
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4">
        <div className="flex items-center mb-2">
          <Languages className="h-4 w-4 mr-2 text-gold" />
          <span className="text-xs text-offwhite/60 font-medium">Idiomas</span>
        </div>
        <div className="flex gap-2">
          {languages.map(lang => (
            <span key={lang} className="text-xs bg-apricot/10 text-apricot border border-apricot/20 rounded-full px-3 py-1">
              {lang}
            </span>
          ))}
        </div>
      </div>

      {whatsapp && (
        <div className="mt-4">
          <a
            className="inline-flex items-center text-sm bg-gold text-black px-3 py-2 rounded-lg hover:opacity-90 transition group"
            href={`https://wa.me/${whatsapp}?text=${text}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone className="h-4 w-4 mr-2" />
            WhatsApp
            <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      )}
    </motion.article>
  );
}
