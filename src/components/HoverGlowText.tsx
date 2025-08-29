'use client';

import { useEffect, useState, useRef } from 'react';
import React from 'react';

interface HoverGlowTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function HoverGlowText({ text, className = '', delay = 0 }: HoverGlowTextProps) {
  const [spans, setSpans] = useState<React.ReactElement[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Efecto de aparición completa
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    // Detectar si es móvil
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
         if (isMobile) {
       // En móvil: dividir por palabras para evitar cortes
       const words = text.split(' ');
       const spanizedText = words.map((word, wordIndex) => {
         if (word === '\n') {
           return <br key={wordIndex} />;
         }
         
         return (
           <span
             key={wordIndex}
             className="inline-block cursor-pointer transition-all duration-300 ease-out"
             style={{
               opacity: isVisible ? 1 : 0,
               animation: isVisible ? `letter-glow 0.5s ${delay + (wordIndex * 0.04)}s ease both` : 'none',
               textShadow: hoveredIndex === wordIndex 
                 ? '0px 0px 30px rgba(255,255,255,1), 0px 0px 60px rgba(255,255,255,0.8), 0px 0px 90px rgba(255,255,255,0.4)' 
                 : 'none',
               transform: hoveredIndex === wordIndex ? 'scale(1.15)' : 'scale(1)',
               filter: hoveredIndex === wordIndex ? 'brightness(1.5)' : 'brightness(1)',
               zIndex: hoveredIndex === wordIndex ? 10 : 1,
               position: 'relative'
             }}
             onMouseEnter={() => setHoveredIndex(wordIndex)}
             onMouseLeave={() => setHoveredIndex(null)}
           >
             {word}{wordIndex < words.length - 1 ? '\u00A0' : ''}
           </span>
         );
       });
      
      setSpans(spanizedText);
    } else {
      // En desktop: mantener el comportamiento original
      const spanizedText = text.split('').map((char, index) => {
        if (char === '\n') {
          return <br key={index} />;
        }
        
        return (
          <span
            key={index}
            className="inline-block cursor-pointer transition-all duration-300 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible ? `letter-glow 0.7s ${delay}s ease both` : 'none',
              textShadow: hoveredIndex === index 
                ? '0px 0px 30px rgba(255,255,255,1), 0px 0px 60px rgba(255,255,255,0.8), 0px 0px 90px rgba(255,255,255,0.4)' 
                : 'none',
              transform: hoveredIndex === index ? 'scale(1.15)' : 'scale(1)',
              filter: hoveredIndex === index ? 'brightness(1.5)' : 'brightness(1)',
              zIndex: hoveredIndex === index ? 10 : 1,
              position: 'relative'
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      });
      
      setSpans(spanizedText);
    }
  }, [text, delay, hoveredIndex, isVisible]);

  return (
    <div ref={containerRef} className={className}>
      {spans}
    </div>
  );
}
