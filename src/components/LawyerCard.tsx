'use client';

import { motion } from 'framer-motion';
import { Phone, Award, Languages, Shield, ArrowRight, Clock } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

type Props = {
  name: string;
  role?: string;
  summary: string;
  tags?: string[];
  languages?: string[];
  experience?: string;
  whatsapp?: string;
  image?: string;
};

export default function LawyerCard({
  name, role = 'Abogado Penalista', summary, tags = [], languages = [], experience, whatsapp, image
}: Props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const text = encodeURIComponent(`Hola, quisiera consultar con ${name}.`);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group h-full perspective-1000"
    >
      <motion.article
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="group rounded-2xl border border-apricot/20 bg-charleston text-offwhite shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-gold/10 hover:border-gold/30 h-full flex flex-col relative preserve-3d"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Frente de la tarjeta - Foto principal */}
        <div 
          className="absolute inset-0 rounded-2xl overflow-hidden backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {image ? (
            <div className="relative w-full h-full min-h-[400px]">
              <Image
                src={image}
                alt={`${name} - ${role}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="text-gold group-hover:text-apricot transition-colors">
                    <Shield className="h-6 w-6" />
                  </div>
                  <motion.button
                    onClick={handleFlip}
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ delay: 0.1 }}
                    className="text-gold/60 group-hover:text-gold transition-colors hover:scale-110 transform duration-200"
                  >
                    <ArrowRight className="h-6 w-6" />
                  </motion.button>
                </div>
                <div className="text-white">
                  <h3 className="text-xl font-semibold group-hover:text-gold transition-colors">{name}</h3>
                  <p className="text-white/80 text-sm mt-1">{role}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-charleston to-black/80 flex items-center justify-center">
              <div className="text-center">
                <Shield className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white">{name}</h3>
                <p className="text-white/70 text-sm mt-1">{role}</p>
              </div>
            </div>
          )}
        </div>

        {/* Reverso de la tarjeta - Información */}
        <div 
          className="absolute inset-0 rounded-2xl p-6 flex flex-col backface-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="text-gold group-hover:text-apricot transition-colors">
              <Shield className="h-6 w-6" />
            </div>
            <motion.button
              onClick={handleFlip}
              whileHover={{ scale: 1.2, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ delay: 0.1 }}
              className="text-gold/60 group-hover:text-gold transition-colors hover:scale-110 transform duration-200"
            >
              <ArrowRight className="h-6 w-6" />
            </motion.button>
          </div>

          <h3 className="text-xl font-semibold group-hover:text-gold transition-colors">{name}</h3>
          <p className="text-white/70 text-sm mt-1 mb-2">{role}</p>
          
          {experience && (
            <div className="flex items-center gap-2 mb-3">
              <Clock className="h-4 w-4 text-gold" />
              <span className="text-xs text-gold font-medium">{experience} de experiencia</span>
            </div>
          )}
          
          <p className="mt-3 text-white/80 text-sm leading-relaxed flex-grow">{summary}</p>

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
            <div className="mt-4 mt-auto pt-4">
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
        </div>
      </motion.article>
    </motion.div>
  );
}
