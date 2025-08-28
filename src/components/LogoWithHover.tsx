'use client';

import Image from 'next/image';
import { useState } from 'react';

interface LogoWithHoverProps {
  src: string;
  hoverSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function LogoWithHover({ 
  src, 
  hoverSrc,
  alt, 
  width, 
  height, 
  className = '', 
  priority = false 
}: LogoWithHoverProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={isHovered ? hoverSrc : src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto object-contain drop-shadow-xl transition-all duration-300"
        style={{
          filter: isHovered ? 'none' : 'brightness(0) invert(1)' // Mantiene el logo normal brillante
        }}
        priority={priority}
      />
    </div>
  );
}
