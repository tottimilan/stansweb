import React from 'react';
import { BlogPost } from '@/data/blogPosts';

interface FAQ {
  question: string;
  answer: string;
}

interface BlogPostSchemaProps {
  post: BlogPost;
  language?: string;
  faqs?: FAQ[];
}

const BlogPostSchema = React.memo(function BlogPostSchema({ post, language = 'es', faqs = [] }: BlogPostSchemaProps) {
  // Si hay FAQs, usar formato @graph para combinar BlogPosting + FAQPage
  if (faqs.length > 0) {
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "image": post.image ? `https://stansabogados.com${post.image}` : undefined,
          "datePublished": post.date,
          "dateModified": post.date,
          "author": {
            "@type": post.author === 'Equipo STANS Abogados' ? "Organization" : "Person",
            "name": post.author,
            ...(post.author === 'Equipo STANS Abogados' ? {
              "url": "https://stansabogados.com"
            } : {})
          },
          "publisher": {
            "@type": "Organization",
            "name": "STANS ABOGADOS",
            "logo": {
              "@type": "ImageObject",
              "url": "https://stansabogados.com/images/logos/logo-horizontal.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://stansabogados.com/blog/${post.slug}`
          },
          "keywords": post.tags.join(', '),
          "articleSection": post.category,
          "inLanguage": language === 'ar' ? 'ar' : 'es-ES',
          "wordCount": calculateWordCount(post),
          "timeRequired": post.readTime,
          "isAccessibleForFree": true,
          "articleBody": generateArticleBody(post)
        },
        {
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      ]
    };

    return (
      <script
        id={`schema-${post.slug}`}
        key={`schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  }
  
  // Si no hay FAQs, schema normal de BlogPosting
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image ? `https://stansabogados.com${post.image}` : undefined,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": post.author === 'Equipo STANS Abogados' ? "Organization" : "Person",
      "name": post.author,
      ...(post.author === 'Equipo STANS Abogados' ? {
        "url": "https://stansabogados.com"
      } : {})
    },
    "publisher": {
      "@type": "Organization",
      "name": "STANS ABOGADOS",
      "logo": {
        "@type": "ImageObject",
        "url": "https://stansabogados.com/images/logos/logo-horizontal.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://stansabogados.com/blog/${post.slug}`
    },
    "keywords": post.tags.join(', '),
    "articleSection": post.category,
    "inLanguage": language === 'ar' ? 'ar' : 'es-ES',
    "wordCount": calculateWordCount(post),
    "timeRequired": post.readTime,
    "isAccessibleForFree": true,
    "articleBody": generateArticleBody(post)
  };

  return (
    <script
      id={`schema-${post.slug}`}
      key={`schema-${post.slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
});

// Helper para calcular palabras aproximadas
function calculateWordCount(post: BlogPost): number {
  const introWords = post.content.introduction.split(' ').length;
  const sectionsWords = post.content.sections.reduce((acc, section) => {
    return acc + section.title.split(' ').length + section.content.split(' ').length;
  }, 0);
  const conclusionWords = post.content.conclusion.split(' ').length;
  
  return introWords + sectionsWords + conclusionWords;
}

// Helper para generar el cuerpo del artículo
function generateArticleBody(post: BlogPost): string {
  const parts = [
    post.content.introduction,
    ...post.content.sections.map(s => `${s.title}: ${s.content}`),
    post.content.conclusion
  ];
  
  return parts.join(' ').substring(0, 500) + '...';
}

export default BlogPostSchema;

