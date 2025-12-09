// Datos de medios y apariciones de los abogados
// Solo se mostrará la sección si hay contenido para el abogado

export type MediaType = 'podcast' | 'youtube' | 'articulo' | 'prensa' | 'radio' | 'tv';

export interface MediaItem {
  id: string;
  type: MediaType;
  title: string;
  description: string;
  url: string;
  date?: string;
  platform?: string; // Spotify, YouTube, El País, etc.
  thumbnail?: string;
  startTime?: number; // Para podcasts/videos que empiezan en un momento específico (en segundos)
}

export interface LawyerMedia {
  slug: string;
  media: MediaItem[];
}

// Base de datos de medios por abogado
export const lawyerMediaData: LawyerMedia[] = [
  {
    slug: 'ruben-vaquero-arribas',
    media: [
      {
        id: 'podcast-carne-cruda-1584',
        type: 'podcast',
        title: 'Carne Cruda #1584 - Tu palabra contra la de la policía',
        description: '¿Por qué una institución pública tan poderosa como la Policía no está sujeta a un estricto control externo? Llevamos a juicio a la policía a través del caso de África, que perdió un ojo por el disparo de una pelota de foam durante una manifestación contra el encarcelamiento de Pablo Hasel en 2021. Rubén Vaquero analiza el caso de Abderrahim, que murió asfixiado en junio en el municipio madrileño de Torrejón de Ardoz, y examina qué falla para que no se investigue en condiciones a las fuerzas de seguridad.',
        url: 'https://open.spotify.com/episode/2B3PDnbg2UPfJd9gLsQdQP?si=I3pD34LtQQmEWousY_OePg&t=2900',
        platform: 'Spotify - Carne Cruda',
        startTime: 2900, // 48:20 en segundos
        date: '26 Nov 2024'
      },
      {
        id: 'youtube-la-hora-de-padri-1',
        type: 'youtube',
        title: 'La Hora de Padri - Terrorismo Yihadista y Sistema Judicial',
        description: 'En este extracto hablo con el abogado penalista Rubén Vaquero sobre qué casos lleva su despacho: no es inmigración, sino terrorismo y terrorismo yihadista. Vaquero denuncia un trato desigual hacia los musulmanes, incluso los nacidos en España, dentro de un sistema que define como estructuralmente racista. También analizamos el caso de Torrejón de Ardoz y la legalidad de grabar actuaciones policiales: "Se puede y SE DEBE grabar las actuaciones policiales si no entorpeces la intervención. Es casi una obligación ciudadana en una democracia."',
        url: 'https://www.youtube.com/watch?v=q6Ut_P8wioE',
        platform: 'YouTube - La Hora de Padri',
        thumbnail: 'https://img.youtube.com/vi/q6Ut_P8wioE/maxresdefault.jpg',
        date: '2024'
      }
    ]
  },
  // Aquí se pueden añadir más abogados en el futuro
  {
    slug: 'mounir-elyemlahy-chouati',
    media: []
  },
  {
    slug: 'diego-cardona-valero',
    media: []
  },
  {
    slug: 'ada-de-blas-pascual',
    media: []
  }
];

// Función helper para obtener los medios de un abogado
export function getLawyerMedia(slug: string): MediaItem[] {
  const lawyerMedia = lawyerMediaData.find(lm => lm.slug === slug);
  return lawyerMedia?.media || [];
}

// Función helper para verificar si un abogado tiene medios
export function hasMediaContent(slug: string): boolean {
  const media = getLawyerMedia(slug);
  return media.length > 0;
}

// Función para obtener el icono del tipo de medio
export function getMediaTypeLabel(type: MediaType, language: 'es' | 'ar' = 'es'): string {
  const labels = {
    es: {
      podcast: 'Podcast',
      youtube: 'Video',
      articulo: 'Artículo',
      prensa: 'Prensa',
      radio: 'Radio',
      tv: 'Televisión'
    },
    ar: {
      podcast: 'بودكاست',
      youtube: 'فيديو',
      articulo: 'مقال',
      prensa: 'صحافة',
      radio: 'راديو',
      tv: 'تلفزيون'
    }
  };
  
  return labels[language][type];
}

