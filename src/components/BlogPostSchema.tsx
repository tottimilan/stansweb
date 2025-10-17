'use client';

import { useEffect } from 'react';
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

export default function BlogPostSchema({ post, language = 'es', faqs = [] }: BlogPostSchemaProps) {
  
  useEffect(() => {
    const schemaId = `schema-blog-${post.slug}`;
    
    // Verificar si ya existe (prevenir duplicados GARANTIZADO)
    const existing = document.getElementById(schemaId);
    if (existing) {
      console.log(`[BlogPostSchema] Schema already exists for ${post.slug}, skipping to prevent duplicate`);
      return;
    }
    
    // Calcular word count
    const calculateWordCount = (post: BlogPost): number => {
      const introWords = post.content.introduction.split(' ').length;
      const sectionsWords = post.content.sections.reduce((acc, section) => {
        return acc + section.title.split(' ').length + section.content.split(' ').length;
      }, 0);
      const conclusionWords = post.content.conclusion.split(' ').length;
      return introWords + sectionsWords + conclusionWords;
    };
    
    // Generar article body
    const generateArticleBody = (post: BlogPost): string => {
      const parts = [
        post.content.introduction,
        ...post.content.sections.map(s => `${s.title}: ${s.content}`),
        post.content.conclusion
      ];
      return parts.join(' ').substring(0, 500) + '...';
    };
    
    // Crear schema completo
    const schema = faqs.length > 0 ? {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "image": post.image ? `https://www.stansabogados.com${post.image}` : undefined,
          "datePublished": post.date,
          "dateModified": post.date,
          "author": {
            "@type": post.author === 'Equipo STANS Abogados' ? "Organization" : "Person",
            "name": post.author,
            ...(post.author === 'Equipo STANS Abogados' ? {
              "url": "https://www.stansabogados.com"
            } : {})
          },
          "publisher": {
            "@type": "Organization",
            "name": "STANS ABOGADOS",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.stansabogados.com/images/logos/logo-horizontal.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.stansabogados.com/blog/${post.slug}`
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
    } : {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.image ? `https://www.stansabogados.com${post.image}` : undefined,
      "datePublished": post.date,
      "dateModified": post.date,
      "author": {
        "@type": post.author === 'Equipo STANS Abogados' ? "Organization" : "Person",
        "name": post.author,
        ...(post.author === 'Equipo STANS Abogados' ? {
          "url": "https://www.stansabogados.com"
        } : {})
      },
      "publisher": {
        "@type": "Organization",
        "name": "STANS ABOGADOS",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.stansabogados.com/images/logos/logo-horizontal.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.stansabogados.com/blog/${post.slug}`
      },
      "keywords": post.tags.join(', '),
      "articleSection": post.category,
      "inLanguage": language === 'ar' ? 'ar' : 'es-ES',
      "wordCount": calculateWordCount(post),
      "timeRequired": post.readTime,
      "isAccessibleForFree": true,
      "articleBody": generateArticleBody(post)
    };
    
    // Crear e inyectar script en el DOM
    const script = document.createElement('script');
    script.id = schemaId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    
    console.log(`[BlogPostSchema] Schema created successfully for ${post.slug}`);
    
    // Cleanup al desmontar componente
    return () => {
      const scriptToRemove = document.getElementById(schemaId);
      if (scriptToRemove) {
        scriptToRemove.remove();
        console.log(`[BlogPostSchema] Schema removed for ${post.slug}`);
      }
    };
  }, [post.slug, post.title, post.excerpt, post.date, post.author, post.category, post.tags, post.readTime, post.image, post.content, faqs, language]);
  
  // No renderiza nada en el DOM visible - todo se inyecta via useEffect
  return null;
}
