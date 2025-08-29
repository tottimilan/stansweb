'use client';

import { useState, useEffect } from 'react';

export function useScrollHighlight(sectionId: string) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= 100 && rect.bottom >= 100;
        
        if (isInView && !isHighlighted) {
          setIsHighlighted(true);
          setTimeout(() => setIsHighlighted(false), 2000);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionId, isHighlighted]);

  return isHighlighted;
}
