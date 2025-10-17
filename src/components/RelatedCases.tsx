'use client';

import Link from 'next/link';
import { ArrowRight, Scale } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface RelatedCase {
  title: string;
  url: string;
  category: string;
}

interface RelatedCasesProps {
  currentCaseId: number;
  categoria: string;
  maxCases?: number;
}

// Sistema de enlaces internos para casos basado en categorías
const getCasesByCategory = (category: string): RelatedCase[] => {
  const casesMap: { [key: string]: RelatedCase[] } = {
    'Terrorismo y Audiencia Nacional': [
      { title: 'Caso Queque - Libertad de Expresión', url: '/casos/sobreseimiento-queque-abogados-cristianos', category: 'Terrorismo' },
      { title: 'Sobreseimiento Nordin Workout', url: '/casos/sobreseimiento-nordin-workout', category: 'Terrorismo' },
      { title: 'Academia Yihad - Libertad Provisional', url: '/casos/caso-academia-yihad', category: 'Terrorismo' }
    ],
    'Robos con violencia y grupo criminal': [
      { title: 'Operación LUCO - Banda Rolex', url: '/casos/operacion-luco-banda-rolex', category: 'Crimen Organizado' },
      { title: 'Absolución Robo Violencia', url: '/casos/caso-robo-violencia-absolucion', category: 'Robos' },
      { title: 'Absolución Robo Juzgado 22', url: '/casos/absolucion-robo-violencia-juzgado-22', category: 'Robos' },
      { title: 'Sobreseimiento Robo Pozuelo', url: '/casos/caso-robo-violencia-pozuelo', category: 'Robos' },
      { title: 'Sobreseimiento Robo Móstoles', url: '/casos/sobreseimiento-robo-fuerza-mostoles', category: 'Robos' },
      { title: 'Sobreseimiento Robo Navalcarnero', url: '/casos/sobreseimiento-robo-fuerza-navalcarnero', category: 'Robos' }
    ],
    'Delitos económicos y contra el patrimonio': [
      { title: 'Absolución Blanqueo Imprudencia', url: '/casos/absolucion-blanqueo-imprudencia', category: 'Económico' },
      { title: 'Archivo Estafa y Blanqueo Jaén', url: '/casos/caso-estafa-blanqueo-jaen', category: 'Económico' }
    ],
    'Delitos contra las personas': [
      { title: 'Sobreseimiento Lesiones Getafe', url: '/casos/caso-lesiones-getafe', category: 'Personas' },
      { title: 'Absolución Resistencia Autoridad', url: '/casos/absolucion-resistencia-autoridad', category: 'Personas' }
    ],
    'Delitos contra el orden público, drogas y ejecución penal': [
      { title: 'Sobreseimiento Salud Pública', url: '/casos/sobreseimiento-delito-salud-publica', category: 'Drogas' },
      { title: 'Revocación Requisitorias', url: '/casos/ejecuciones-penales-revocacion-requisitorias', category: 'Ejecución Penal' }
    ],
    'Delitos contra la libertad': [
      { title: 'Sobreseimiento Amenazas y Coacciones', url: '/casos/sobreseimiento-amenazas-coacciones-extorsion', category: 'Libertad' }
    ],
    'Delitos contra los derechos de los trabajadores': [
      { title: 'Sobreseimiento Derechos Trabajadores', url: '/casos/sobreseimiento-derechos-trabajadores', category: 'Laboral' }
    ],
    'Pertenencia a organización criminal': [
      { title: 'Caso Dominican Don\'t Play', url: '/casos/caso-dominican-dont-play-ddp', category: 'Organización Criminal' }
    ]
  };

  return casesMap[category] || [];
};

export default function RelatedCases({ currentCaseId, categoria, maxCases = 4 }: RelatedCasesProps) {
  const { language } = useLanguage();

  // Obtener casos relacionados por categoría
  let related = getCasesByCategory(categoria);

  // Filtrar el caso actual (por URL aproximada)
  const currentUrl = currentCaseId.toString();
  related = related.filter(caso => !caso.url.includes(currentUrl));

  // Si no hay suficientes casos de la categoría, agregar casos populares
  if (related.length < maxCases) {
    const popularCases: RelatedCase[] = [
      { title: 'Caso Queque - Libertad de Expresión', url: '/casos/sobreseimiento-queque-abogados-cristianos', category: 'Destacado' },
      { title: 'Operación LUCO - Banda Rolex', url: '/casos/operacion-luco-banda-rolex', category: 'Destacado' },
      { title: 'Absolución Blanqueo Imprudencia', url: '/casos/absolucion-blanqueo-imprudencia', category: 'Destacado' }
    ];

    popularCases.forEach(caso => {
      if (related.length < maxCases && !related.find(r => r.url === caso.url)) {
        related.push(caso);
      }
    });
  }

  // Limitar al máximo solicitado
  related = related.slice(0, maxCases);

  if (related.length === 0) return null;

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h3 className="text-2xl font-bold text-gold mb-6 flex items-center gap-2">
          <Scale className="h-6 w-6" />
          {language === 'ar' ? 'قضايا مشابهة' : 'Casos Similares'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {related.map((caso, index) => (
            <Link
              key={index}
              href={caso.url}
              className="group bg-charleston/5 border border-gold/20 rounded-lg p-5 hover:border-gold/50 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="text-xs text-gold/70 uppercase tracking-wide mb-2 block">
                    {caso.category}
                  </span>
                  <h4 className="text-black font-semibold mb-1 group-hover:text-gold transition-colors">
                    {caso.title}
                  </h4>
                  <span className="text-xs text-black/60">
                    {language === 'ar' ? 'عرض التفاصيل' : 'Ver detalles'}
                  </span>
                </div>
                <ArrowRight className="h-5 w-5 text-gold flex-shrink-0 ml-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

