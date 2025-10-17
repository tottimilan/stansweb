import { Metadata } from 'next';
import { getBlogPostBySlug, allBlogSlugs, isValidBlogSlug } from '@/data/blogPosts';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

// Generar metadatos dinámicos para cada blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  if (!isValidBlogSlug(slug)) {
    return {
      title: 'Artículo no encontrado | STANS ABOGADOS',
      description: 'El artículo que buscas no está disponible.'
    };
  }

  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Artículo no encontrado | STANS ABOGADOS',
      description: 'El artículo que buscas no está disponible.'
    };
  }

  return {
    title: `${post.title} | STANS ABOGADOS`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      url: `https://stansabogados.com/blog/${slug}`,
      siteName: 'STANS ABOGADOS',
      images: post.image ? [
        {
          url: `https://stansabogados.com${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [`https://stansabogados.com${post.image}`] : [],
      creator: '@stansabogados',
    },
    alternates: {
      canonical: `/blog/${slug}`,
      languages: {
        'es-ES': `/blog/${slug}`,
        'ar': `/blog/${slug}`,
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
      'article:published_time': post.date,
      'article:author': post.author,
      'article:section': post.category,
      'article:tag': post.tags.join(', '),
    },
  };
}

// Generar todas las rutas estáticas en build time
export async function generateStaticParams() {
  return allBlogSlugs.map((slug) => ({
    slug,
  }));
}

export default function BlogPostLayout({ children }: Props) {
  return <>{children}</>;
}

