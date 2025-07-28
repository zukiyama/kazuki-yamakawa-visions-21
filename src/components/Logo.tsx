import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {/* Text Logo */}
      <div className="flex flex-col">
        <span className="text-2xl font-bold tracking-wider text-ink font-japanese">
          KAZUKI
        </span>
        <span className="text-lg font-light tracking-[0.3em] text-ink-light font-japanese">
          YAMAKAWA
        </span>
      </div>
      
      {/* Modern Abstract Art Elements */}
      <div className="relative w-16 h-16 ml-6">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Wavy converging lines */}
          <path d="M8 20 Q32 16 56 24" stroke="hsl(var(--ink))" strokeWidth="2" fill="none"/>
          <path d="M8 44 Q32 48 56 40" stroke="hsl(var(--ink-light))" strokeWidth="2" fill="none"/>
          
          {/* Overlapping triangle and circle with modern blend */}
          <defs>
            <filter id="modernBlend">
              <feBlend mode="multiply"/>
            </filter>
          </defs>
          
          {/* Triangle */}
          <polygon points="35,20 47,20 41,32" fill="hsl(var(--mountain))" opacity="0.8" transform="rotate(12 41 26)"/>
          
          {/* Circle with overlap effect */}
          <circle cx="44" cy="28" r="8" fill="rgb(67, 56, 202)" opacity="0.7"/>
          
          {/* Overlap blend area creates color shift */}
          <polygon points="38,24 42,20 46,24 42,28" fill="hsl(var(--ink))" opacity="0.5"/>
        </svg>
      </div>
    </div>
  );
};

export default Logo;