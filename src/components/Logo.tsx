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
      
      {/* Abstract Art Elements */}
      <div className="relative w-16 h-16 ml-6">
        {/* Mountain (Triangle) */}
        <div 
          className="absolute top-2 left-2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-mountain transform rotate-12"
          style={{ filter: 'blur(0.5px)' }}
        />
        
        {/* Moon (Circle) */}
        <div 
          className="absolute top-4 right-1 w-6 h-6 rounded-full bg-indigo-800 transform -rotate-6 opacity-90"
          style={{ filter: 'blur(0.3px)' }}
        />
        
        {/* River (Converging Lines) */}
        <div className="absolute bottom-2 left-4">
          <div 
            className="w-8 h-[2px] bg-ink transform rotate-[15deg] origin-left"
            style={{ filter: 'blur(0.2px)' }}
          />
          <div 
            className="w-6 h-[2px] bg-ink-light transform rotate-[25deg] origin-left translate-y-1"
            style={{ filter: 'blur(0.2px)' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Logo;