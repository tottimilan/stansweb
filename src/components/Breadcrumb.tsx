'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  // Generar datos estructurados para Google
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href && {
        "item": `https://www.stansabogados.com${item.href}`
      })
    }))
  };

  return (
    <>
      {/* Schema.org Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {/* Visual Breadcrumb */}
      <nav 
        aria-label="Breadcrumb"
        className={`flex items-center space-x-2 text-sm ${isRTL ? 'flex-row-reverse space-x-reverse' : ''} ${className}`}
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <ChevronRight 
                className={`w-4 h-4 text-gray-400 ${isRTL ? 'rotate-180' : ''}`} 
              />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-gray-600 hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
}