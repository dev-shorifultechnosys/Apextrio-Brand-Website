import React from 'react';
import logoImage from 'figma:asset/c4a4afce3696badd152a6f47b551895dc9a75ee1.png';

export function Logo() {
  return (
    <div className="flex items-center">
      <img 
        src={logoImage} 
        alt="Apextrio" 
        className="h-10 w-auto transition-transform hover:scale-105"
      />
    </div>
  );
}