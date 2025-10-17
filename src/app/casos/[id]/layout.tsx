import { Metadata } from 'next';
import casosData from '../../../../public/casos/casos-procesados.json';
import seoInfo from '../../../../public/casos/seo-info.json';

type Props = {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
};

// Generar metadatos dinámicos para cada caso
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  
  // Intentar encontrar el caso por ID numérico
  const numericId = parseInt(id);
  let caso = casosData.find((c: any) => c.id === numericId);
  
  // Si no se encuentra por ID, buscar por URL SEO
  if (!caso) {
    const urlToIdMap: { [key: string]: number } = {};
    Object.entries(seoInfo as any).forEach(([caseId, info]: [string, any]) => {
      if (info.url) {
        const urlPath = info.url.split('/').pop();
        if (urlPath) {
          urlToIdMap[urlPath] = parseInt(caseId);
        }
      }
    });
    
    const mappedId = urlToIdMap[id];
    if (mappedId) {
      caso = casosData.find((c: any) => c.id === mappedId);
    }
  }

  if (!caso) {
    return {
      title: 'Caso no encontrado | STANS ABOGADOS',
      description: 'El caso que buscas no está disponible.'
    };
  }

  const casoSeoInfo = (seoInfo as any)[caso.id];
  
  const title = casoSeoInfo?.title || `${caso.nombre} | STANS ABOGADOS`;
  const description = casoSeoInfo?.description || `Caso ${caso.nombre} resuelto por STANS ABOGADOS. ${caso.resultado}`;
  const keywords = casoSeoInfo?.keywords || `${caso.delito_principal}, ${caso.categoria}, abogados penalistas, STANS ABOGADOS`;
  const canonicalUrl = casoSeoInfo?.url || `/casos/${caso.id}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'STANS ABOGADOS' }],
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://www.stansabogados.com${canonicalUrl}`,
      siteName: 'STANS ABOGADOS',
      images: caso.imagen ? [
        {
          url: `https://www.stansabogados.com${caso.imagen}`,
          width: 1200,
          height: 630,
          alt: caso.nombre
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: caso.imagen ? [`https://www.stansabogados.com${caso.imagen}`] : [],
      creator: '@stansabogados',
    },
    alternates: {
      canonical: `https://www.stansabogados.com${canonicalUrl}`,
      languages: {
        'es': `https://www.stansabogados.com${canonicalUrl}`,
        'ar': `https://www.stansabogados.com${canonicalUrl}`,
        'x-default': `https://www.stansabogados.com${canonicalUrl}`
      },
    },
    robots: {
      index: !caso.caso_en_curso, // No indexar casos en curso
      follow: true,
      googleBot: {
        index: !caso.caso_en_curso,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'article:published_time': caso.fecha || caso.año,
      'article:section': caso.categoria,
      'article:tag': casoSeoInfo?.tags || caso.delito_principal,
    },
  };
}

// Generar todas las rutas estáticas en build time
export async function generateStaticParams() {
  const params: { id: string }[] = [];
  
  // Añadir todos los casos por ID numérico
  casosData.forEach((caso: any) => {
    params.push({ id: caso.id.toString() });
    
    // También añadir la URL SEO-friendly si existe
    const casoSeoInfo = (seoInfo as any)[caso.id];
    if (casoSeoInfo?.url) {
      const urlSlug = casoSeoInfo.url.split('/').pop();
      if (urlSlug && urlSlug !== caso.id.toString()) {
        params.push({ id: urlSlug });
      }
    }
  });
  
  return params;
}

export default function CasoLayout({ children }: Props) {
  return <>{children}</>;
}

