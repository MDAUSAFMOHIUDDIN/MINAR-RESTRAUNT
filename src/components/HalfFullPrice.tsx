import React from 'react';
import { PriceStructure } from '../types/menu';

interface HalfFullPriceProps {
  pricing: PriceStructure;
  size?: 'sm' | 'md' | 'lg';
}

export const HalfFullPrice: React.FC<HalfFullPriceProps> = ({ pricing, size = 'md' }) => {
  const isHalfFull = pricing.half !== undefined && pricing.full !== undefined;

  if (isHalfFull) {
    return (
      <div className={`inline-flex items-baseline gap-1.5 font-sans font-bold text-[#2D2926] ${
        size === 'lg' ? 'text-base sm:text-lg' : size === 'sm' ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'
      }`}>
        <span className="text-[#6B6661] text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Half</span>
        <span className="font-bold tracking-tight text-[#800000]">₹{pricing.half}</span>
        <span className="text-[#C5A059] font-light px-0.5">|</span>
        <span className="text-[#6B6661] text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Full</span>
        <span className="font-bold tracking-tight text-[#800000]">₹{pricing.full}</span>
      </div>
    );
  }

  if (pricing.single !== undefined) {
    return (
      <div className={`inline-flex items-baseline font-sans font-bold text-[#800000] ${
        size === 'lg' ? 'text-lg sm:text-xl' : size === 'sm' ? 'text-xs sm:text-sm' : 'text-base'
      }`}>
        <span>₹{pricing.single}</span>
      </div>
    );
  }

  return null;
};

