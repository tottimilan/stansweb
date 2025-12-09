'use client';

import { motion } from 'framer-motion';
import { Radio, Youtube, FileText, Mic, Tv, ExternalLink, Play } from 'lucide-react';
import { MediaItem, MediaType, getMediaTypeLabel } from '@/data/lawyerMedia';

interface LawyerMediaSectionProps {
  media: MediaItem[];
  lawyerName: string;
  language?: 'es' | 'ar';
}

// Función para obtener el icono según el tipo de medio
const getMediaIcon = (type: MediaType) => {
  switch (type) {
    case 'podcast':
      return Mic;
    case 'youtube':
      return Youtube;
    case 'articulo':
      return FileText;
    case 'prensa':
      return FileText;
    case 'radio':
      return Radio;
    case 'tv':
      return Tv;
    default:
      return FileText;
  }
};

// Función para obtener el color según el tipo de medio
const getMediaColor = (type: MediaType) => {
  switch (type) {
    case 'podcast':
      return 'from-purple-500/20 to-purple-700/20 border-purple-500/30';
    case 'youtube':
      return 'from-red-500/20 to-red-700/20 border-red-500/30';
    case 'articulo':
      return 'from-blue-500/20 to-blue-700/20 border-blue-500/30';
    case 'prensa':
      return 'from-gray-500/20 to-gray-700/20 border-gray-500/30';
    case 'radio':
      return 'from-green-500/20 to-green-700/20 border-green-500/30';
    case 'tv':
      return 'from-indigo-500/20 to-indigo-700/20 border-indigo-500/30';
    default:
      return 'from-gold/20 to-gold/40 border-gold/30';
  }
};

// Función para formatear el tiempo de inicio
const formatStartTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export default function LawyerMediaSection({ media, lawyerName, language = 'es' }: LawyerMediaSectionProps) {
  const sectionTitle = language === 'ar' ? 'الوسائط والمظاهر' : 'Medios y Apariciones';
  const sectionSubtitle = language === 'ar' 
    ? `شاهد وانتاج مقابلات ${lawyerName.split(' ')[0]} في وسائل الإعلام`
    : `Entrevistas y apariciones de ${lawyerName.split(' ')[0]} en medios de comunicación`;
  const watchLabel = language === 'ar' ? 'مشاهدة' : 'Ver';
  const listenLabel = language === 'ar' ? 'استمع' : 'Escuchar';

  return (
    <section className="bg-gradient-to-br from-charleston via-black to-charleston py-16 border-t border-gold/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold"></div>
            <Radio className="h-8 w-8 text-gold" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-4">
            {sectionTitle}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Grid de medios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {media.map((item, index) => {
            const Icon = getMediaIcon(item.type);
            const colorClass = getMediaColor(item.type);
            const isVideo = item.type === 'youtube';
            const isPodcast = item.type === 'podcast';
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className={`relative h-full bg-gradient-to-br ${colorClass} border-2 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20`}>
                    
                    {/* Thumbnail para videos de YouTube */}
                    {isVideo && item.thumbnail && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                        
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform">
                            <Play className="h-8 w-8 text-white fill-white" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Contenido */}
                    <div className="p-6">
                      {/* Badge del tipo de medio */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-1.5 flex items-center gap-2">
                          <Icon className="h-4 w-4 text-white" />
                          <span className="text-white text-xs font-semibold uppercase tracking-wider">
                            {getMediaTypeLabel(item.type, language)}
                          </span>
                        </div>
                        {item.platform && (
                          <span className="text-white/60 text-xs">
                            {item.platform}
                          </span>
                        )}
                      </div>

                      {/* Título */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors line-clamp-2">
                        {item.title}
                      </h3>

                      {/* Descripción */}
                      <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3">
                        {item.description}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-3">
                          {item.startTime && (
                            <div className="flex items-center gap-1.5 text-white/70 text-xs">
                              <Play className="h-3 w-3" />
                              <span>{formatStartTime(item.startTime)}</span>
                            </div>
                          )}
                          {item.date && (
                            <span className="text-white/60 text-xs">
                              {item.date}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2 text-gold font-semibold text-sm group-hover:gap-3 transition-all">
                          <span>{isPodcast ? listenLabel : watchLabel}</span>
                          <ExternalLink className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Mensaje adicional */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-white/50 text-sm">
            {language === 'ar' 
              ? 'سيتم إضافة المزيد من المحتوى قريباً' 
              : 'Más contenido se añadirá próximamente'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

