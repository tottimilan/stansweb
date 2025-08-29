'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function AnimatedText({ text, className = '', delay = 0 }: AnimatedTextProps) {
  const [spans, setSpans] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    // Detectar si es móvil
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
         if (isMobile) {
       // En móvil: dividir por palabras para evitar cortes
       const words = text.split(' ');
       const spanizedText = words.map((word, wordIndex) => (
         <span
           key={wordIndex}
           className="inline-block"
           style={{
             animation: `letter-glow 0.5s ${delay + (wordIndex * 0.04)}s ease both`
           }}
         >
           {word}{wordIndex < words.length - 1 ? '\u00A0' : ''}
         </span>
       ));
       setSpans(spanizedText);
    } else {
      // En desktop: mantener el comportamiento original
      const spanizedText = text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            animation: `letter-glow 0.7s ${delay + (index * 0.05)}s ease both`
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
      setSpans(spanizedText);
    }
  }, [text, delay]);

  return (
    <div className={className}>
      {spans}
    </div>
  );
}
