'use client';

import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { Award, Languages, Shield, ArrowRight, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';

type Props = {
  name: string;
  role?: string;
  summary: string;
  tags?: string[];
  languages?: string[];
  experience?: string;
  image?: string;
  hoverImage?: string;
  backgroundImage?: string;
};

export default function LawyerCard({
  name, role = 'Abogado Penalista', summary, tags = [], languages = [], experience, image, hoverImage, backgroundImage
}: Props) {
  const { language } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);
  const [autoFlipTimer, setAutoFlipTimer] = useState<NodeJS.Timeout | null>(null);
  
  // Motion values para el drag
  const dragX = useMotionValue(0);
  const rotateY = useTransform(dragX, [-100, 0, 100], [180, 0, -180]);

  const handleFlip = () => {
    if (!isFlipped) {
      // Voltear la tarjeta
      setIsFlipped(true);
      startAutoFlipTimer();
    } else {
      // Si ya está volteada, volverla a su posición normal
      setIsFlipped(false);
      clearAutoFlipTimer();
    }
  };

  // Funciones para manejar el drag
  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 15; // Umbral más pequeño para mayor sensibilidad
    
    if (info.offset.x > threshold && !isFlipped) {
      // Arrastrar hacia la derecha - voltear
      setIsFlipped(true);
      startAutoFlipTimer();
    } else if (info.offset.x < -threshold && isFlipped) {
      // Arrastrar hacia la izquierda - desvoltear
      setIsFlipped(false);
      clearAutoFlipTimer();
    }
    
    // Siempre resetear la posición de drag
    dragX.set(0);
  };

  const startAutoFlipTimer = () => {
    // Limpiar timer anterior si existe
    if (autoFlipTimer) {
      clearTimeout(autoFlipTimer);
    }
    
    // Configurar timer para volver automáticamente después de 10 segundos
    const timer = setTimeout(() => {
      setIsFlipped(false);
      setAutoFlipTimer(null);
    }, 10000);
    
    setAutoFlipTimer(timer);
  };

  const clearAutoFlipTimer = () => {
    if (autoFlipTimer) {
      clearTimeout(autoFlipTimer);
      setAutoFlipTimer(null);
    }
  };

  // Limpiar timer cuando el componente se desmonte
  useEffect(() => {
    return () => {
      if (autoFlipTimer) {
        clearTimeout(autoFlipTimer);
      }
    };
  }, [autoFlipTimer]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`h-full perspective-1000 group ${isFlipped ? 'flipped-card' : ''}`}
    >
      <div className="relative w-full h-full">
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          dragMomentum={false}
          onDrag={(event, info) => {
            // Solo actualizar la rotación, no la posición
            dragX.set(info.offset.x);
          }}
          onDragEnd={handleDragEnd}
          style={{ 
            x: 0, // Forzar posición fija
            transformStyle: 'preserve-3d'
          }}
          className="w-full h-full cursor-grab active:cursor-grabbing select-none"
        >
          <motion.article
            style={{ 
              rotateY: isFlipped ? 180 : rotateY,
              transformStyle: 'preserve-3d'
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="group rounded-2xl border border-apricot/20 bg-charleston text-offwhite shadow-lg hover:shadow-xl transition-all duration-1000 hover:shadow-gold/20 hover:border-gold/50 h-full flex flex-col relative preserve-3d"
          >
        {/* Frente de la tarjeta - Foto principal */}
        <div 
          className="absolute inset-0 rounded-2xl overflow-hidden backface-hidden select-none"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {image ? (
            <div className="relative w-full h-full min-h-[400px] group/image">
              <Image
                src={image}
                alt={`${name} - ${role}`}
                fill
                className="object-cover transition-all duration-1000 ease-out group-hover/image:scale-110 group-hover/image:opacity-0"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {hoverImage && (
                <Image
                  src={hoverImage}
                  alt={`${name} - ${role} (hover)`}
                  fill
                  className="object-cover opacity-0 transition-all duration-1000 ease-out group-hover/image:opacity-100 group-hover/image:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
              <div className="absolute inset-0 bg-black/40 transition-all duration-1000 group-hover:bg-black/20" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="text-gold group-hover:text-apricot transition-all duration-1000">
                    <Shield className="h-6 w-6 transition-all duration-1000 group-hover:scale-110" />
                  </div>
                  <motion.button
                    onClick={handleFlip}
                    whileHover={{ scale: 1.3, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-gold/60 group-hover:text-apricot transition-all duration-1000 hover:scale-125 transform"
                  >
                    <ArrowRight className="h-6 w-6" />
                  </motion.button>
                </div>
                <div className="text-white">
                  <h3 className="text-xl font-semibold group-hover:text-gold transition-all duration-1000 group-hover:scale-105 transform origin-left">{name}</h3>
                  <p className="text-white/80 text-sm mt-1 transition-all duration-1000 group-hover:text-white/90 group-hover:translate-x-2">{role}</p>
                  <div className="mt-2 text-xs text-white/60 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>← Arrastra para voltear →</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-charleston to-black/80 flex items-center justify-center transition-all duration-1000 group-hover:from-charleston/90 group-hover:to-black/60">
              <div className="text-center transition-all duration-1000 group-hover:scale-105">
                <Shield className="h-12 w-12 text-gold mx-auto mb-4 transition-all duration-1000 group-hover:scale-110" />
                <h3 className="text-xl font-semibold text-white transition-all duration-1000 group-hover:text-gold">{name}</h3>
                <p className="text-white/70 text-sm mt-1 transition-all duration-1000 group-hover:text-white/90">{role}</p>
              </div>
            </div>
          )}
        </div>

        {/* Reverso de la tarjeta - Información */}
        <div 
          className="absolute inset-0 rounded-2xl p-6 flex flex-col backface-hidden relative overflow-hidden w-full h-full select-none"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {/* Imagen de fondo con blur */}
          {backgroundImage && (
            <div className="absolute inset-0 z-0 w-full h-full">
              <Image
                src={backgroundImage}
                alt={`${name} background`}
                fill
                className="object-cover blur-[0.5px] opacity-40"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-charleston/60 to-black/50" />
            </div>
          )}
          
          {/* Contenido de la tarjeta */}
          <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <div className="text-gold group-hover:text-apricot transition-all duration-1000">
              <Shield className="h-6 w-6 transition-all duration-1000 group-hover:scale-110" />
            </div>
            <motion.button
              onClick={handleFlip}
              whileHover={{ scale: 1.3, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-gold/60 group-hover:text-apricot transition-all duration-1000 hover:scale-125 transform"
            >
              <ArrowRight className="h-6 w-6" />
            </motion.button>
          </div>

          <h3 className="text-xl font-semibold group-hover:text-gold transition-all duration-1000 group-hover:scale-105 transform origin-left">{name}</h3>
          <p className="text-white/70 text-sm mt-1 mb-2 transition-all duration-1000 group-hover:text-white/90 group-hover:translate-x-2">{role}</p>
          
          {experience && (
            <div className="flex items-center gap-2 mb-3 transition-all duration-1000 group-hover:translate-x-2">
              <Clock className="h-4 w-4 text-gold transition-all duration-1000 group-hover:scale-110" />
              <span className="text-xs text-gold font-medium transition-all duration-1000 group-hover:text-gold/90">{experience} de experiencia</span>
            </div>
          )}
          
          <p className="mt-3 text-white/80 text-sm leading-relaxed flex-grow transition-all duration-1000 group-hover:text-white/90 group-hover:translate-x-1">{summary}</p>

          {!!tags.length && (
            <div className="mt-4 transition-all duration-1000 group-hover:translate-x-2">
              <div className="flex items-center mb-2">
                <Award className="h-4 w-4 mr-2 text-gold transition-all duration-1000 group-hover:scale-110" />
                <span className="text-xs text-offwhite/60 font-medium transition-all duration-1000 group-hover:text-offwhite/80">Especializaciones</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map(t => (
                  <span key={t} className="text-xs bg-gold/10 text-gold border border-gold/20 rounded-full px-3 py-1 transition-all duration-1000 group-hover:bg-gold/20 group-hover:border-gold/40 group-hover:scale-105">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4 transition-all duration-1000 group-hover:translate-x-2">
            <div className="flex items-center mb-2">
              <Languages className="h-4 w-4 mr-2 text-gold transition-all duration-1000 group-hover:scale-110" />
                              <span className="text-xs text-offwhite/60 font-medium transition-all duration-1000 group-hover:text-offwhite/80">
                  {language === 'ar' ? 'اللغات' : 'Idiomas'}
                </span>
            </div>
            <div className="flex gap-2">
              {languages.map(lang => (
                <span key={lang} className="text-xs bg-apricot/10 text-apricot border border-apricot/20 rounded-full px-3 py-1 transition-all duration-1000 group-hover:bg-apricot/20 group-hover:border-apricot/40 group-hover:scale-105">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
        </div>
          </motion.article>
        </motion.div>
      </div>
    </motion.div>
  );
}
