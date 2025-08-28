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
    // Spanize the text - wrap each character in a span
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
  }, [text, delay]);

  return (
    <div className={className}>
      {spans}
    </div>
  );
}
