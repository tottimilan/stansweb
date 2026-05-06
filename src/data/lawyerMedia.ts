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
      },
      {
        id: 'tv-canalsur-hoy-en-dia-2026',
        type: 'tv',
        title: 'Canal Sur - Hoy en Día (30/04/2026)',
        description: 'Intervención de Rubén Vaquero en el programa "Hoy en Día" de Canal Sur, analizando el caso de Abderrahim Akkouh y la actuación policial en Torrejón de Ardoz. La intervención del despacho comienza a partir del minuto 2:07:00 del programa, donde se aborda la defensa de la familia, la valoración de las pruebas videográficas y los aspectos jurídicos del procedimiento abierto contra los agentes implicados.',
        url: 'https://www.canalsurmas.es/videos/356652-hoy-en-dia-30042026',
        platform: 'Canal Sur Más - Hoy en Día',
        startTime: 7620,
        date: '30 Abr 2026'
      },
      {
        id: 'prensa-arainfo-abderrahim-2026',
        type: 'prensa',
        title: 'AraInfo - "A Abderrahim no nos lo devuelve nadie, pero podemos significarlo"',
        description: 'Entrevista en AraInfo (Diario Libre d\'Aragón) a Rubén Vaquero, abogado de la familia de Abderrahim Akkouh, sobre el caso del joven de 36 años fallecido en Torrejón de Ardoz tras una intervención policial. Vaquero explica las líneas de trabajo judicial, la tesis de la "muerte violenta por homicidio" sostenida por la defensa, la criminalización de las personas migrantes y el papel de los medios en la deshumanización de la víctima.',
        url: 'https://arainfo.org/ruben-vaquero-a-abderrahim-no-nos-lo-devuelve-nadie-pero-podemos-significarlo/',
        platform: 'AraInfo · Diario Libre d\'Aragón',
        date: '6 May 2026'
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

type SupportedLanguage = 'es' | 'en' | 'fr' | 'ar';

// Función para obtener el icono del tipo de medio
export function getMediaTypeLabel(type: MediaType, language: SupportedLanguage = 'es'): string {
  const labels: Record<SupportedLanguage, Record<MediaType, string>> = {
    es: {
      podcast: 'Podcast',
      youtube: 'Video',
      articulo: 'Artículo',
      prensa: 'Prensa',
      radio: 'Radio',
      tv: 'Televisión'
    },
    en: {
      podcast: 'Podcast',
      youtube: 'Video',
      articulo: 'Article',
      prensa: 'Press',
      radio: 'Radio',
      tv: 'Television'
    },
    fr: {
      podcast: 'Podcast',
      youtube: 'Vidéo',
      articulo: 'Article',
      prensa: 'Presse',
      radio: 'Radio',
      tv: 'Télévision'
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
  
  return labels[language]?.[type] || labels.es[type];
}

