import { Metadata } from 'next';
import { getLawyerBySlug, allLawyerSlugs, isValidLawyerSlug } from '@/data/lawyers';

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

// Generar metadatos dinámicos para cada abogado
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  if (!isValidLawyerSlug(slug)) {
    return {
      title: 'Abogado no encontrado | STANS ABOGADOS',
      description: 'El abogado que buscas no está disponible.'
    };
  }

  const lawyer = getLawyerBySlug(slug);

  if (!lawyer) {
    return {
      title: 'Abogado no encontrado | STANS ABOGADOS',
      description: 'El abogado que buscas no está disponible.'
    };
  }

  const title = `${lawyer.name} - ${lawyer.role} | STANS ABOGADOS`;
  const description = `${lawyer.name}, ${lawyer.role} especializado en ${lawyer.specializations.slice(0, 3).join(', ')}. Abogado penalista colegiado ICAM. ${lawyer.languageLabels.join(', ')}.`;
  
  // Keywords optimizadas por abogado
  const baseKeywords = [
    lawyer.name,
    `${lawyer.name} abogado`,
    `${lawyer.name} abogado penalista`,
    `${lawyer.name} Madrid`,
    'abogado penalista Madrid',
    'STANS ABOGADOS',
    'ICAM',
    'abogado colegiado Madrid',
    ...lawyer.specializations,
    ...lawyer.practiceAreas,
  ];

  // Keywords específicas por idiomas (especialmente importante para Mounir)
  const languageKeywords = lawyer.languageLabels.flatMap(lang => [
    `abogado ${lang.toLowerCase()} Madrid`,
    `abogado penalista ${lang.toLowerCase()}`,
  ]);

  // Keywords específicas según especialización única de cada abogado
  const uniqueKeywords: string[] = [];
  if (lawyer.slug === 'mounir-elyemlahy-chouati') {
    uniqueKeywords.push(
      'abogado árabe Madrid',
      'abogado marroquí Madrid',
      'abogado derecho marroquí',
      'extradiciones España Marruecos',
      'abogado árabe penalista',
      'abogado trilingüe Madrid'
    );
  } else if (lawyer.slug === 'ruben-vaquero-arribas') {
    uniqueKeywords.push(
      'abogado penal económico Madrid',
      'abogado OEDE Madrid',
      'abogado extradiciones Madrid',
      'abogado derechos fundamentales Madrid',
      'abogado UCM UNED'
    );
  } else if (lawyer.slug === 'diego-cardona-valero') {
    uniqueKeywords.push(
      'abogado procesal penal Madrid',
      'abogado criminalidad organizada Madrid',
      'abogado terrorismo Madrid',
      'abogado CEIJ Madrid',
      'abogado garantías procesales'
    );
  }

  const keywords = [...baseKeywords, ...languageKeywords, ...uniqueKeywords].join(', ');

  return {
    title,
    description,
    keywords,
    authors: [{ name: lawyer.name, url: `https://www.stansabogados.com/equipo/${slug}` }],
    openGraph: {
      title,
      description,
      type: 'profile',
      url: `https://www.stansabogados.com/equipo/${slug}`,
      siteName: 'STANS ABOGADOS',
      images: [
        {
          url: `https://www.stansabogados.com${lawyer.image}`,
          width: 800,
          height: 1067,
          alt: lawyer.name
        }
      ],
      firstName: lawyer.name.split(' ')[0],
      lastName: lawyer.name.split(' ').slice(1).join(' '),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`https://www.stansabogados.com${lawyer.image}`],
      creator: '@stansabogados',
    },
    alternates: {
      canonical: `https://www.stansabogados.com/equipo/${slug}`,
      languages: {
        'es': `https://www.stansabogados.com/equipo/${slug}`,
        'ar': `https://www.stansabogados.com/equipo/${slug}`,
        'x-default': `https://www.stansabogados.com/equipo/${slug}`
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'profile:username': lawyer.slug,
      'article:author': lawyer.name,
    },
  };
}

// Generar todas las rutas estáticas en build time
export async function generateStaticParams() {
  return allLawyerSlugs.map((slug) => ({
    slug,
  }));
}

export default function LawyerLayout({ children }: Props) {
  return <>{children}</>;
}

