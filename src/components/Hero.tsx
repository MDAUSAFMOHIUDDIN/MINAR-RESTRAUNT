import React from 'react';
import { ArrowDown } from 'lucide-react';
import balochiChickenImg from '../assets/images/balochi_chicken_1788206620585.jpg';

interface HeroProps {
  onViewMenuClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewMenuClick }) => {
  return (
    <section className="relative pt-4 pb-8 sm:pt-6 sm:pb-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Menu Cover Styled Container with Bold Typography aesthetic */}
        <div className="relative rounded-lg bg-white border border-[#C5A059]/30 p-6 sm:p-8 md:p-10 shadow-xs overflow-hidden">
          
          {/* Subtle antique gold border inlay */}
          <div className="absolute inset-2 sm:inset-3 border border-[#C5A059]/20 rounded-md pointer-events-none" />

          {/* Watermark typographic background layer */}
          <div className="absolute -top-4 -left-4 text-[#C5A059]/8 font-serif text-[100px] sm:text-[140px] leading-none select-none pointer-events-none z-0">
            MINAR
          </div>

          {/* Top Brand Header */}
          <div className="text-center relative z-10 space-y-1 mb-6 sm:mb-8">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#800000] tracking-tight leading-none uppercase">
              MINAR RESTAURANT
            </h1>
            <p className="font-serif italic text-base sm:text-lg text-[#C5A059] mt-1.5">
              Taste That Stays With You
            </p>
            <div className="h-1 w-12 bg-[#800000] mx-auto mt-3"></div>
          </div>

          {/* Featured Balochi Chicken Visual Centerpiece */}
          <div className="relative z-10 max-w-lg mx-auto">
            {/* Dish Image Container */}
            <div className="relative rounded-md overflow-hidden shadow-xs border border-[#C5A059]/30 aspect-4/3 sm:aspect-16/10">
              <img
                src={balochiChickenImg}
                alt="Balochi Chicken at MINAR RESTAURANT"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />
              
              {/* Dish title on image */}
              <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-5 text-white">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide">
                  Balochi Chicken
                </span>
              </div>
            </div>

            {/* Dish Name, Pricing and View Menu Call to Action */}
            <div className="mt-5 sm:mt-6 text-center space-y-4">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#800000] tracking-tight leading-tight">
                  Balochi Chicken
                </h3>
                <p className="text-[#6B6661] uppercase tracking-[0.2em] text-[11px] sm:text-xs font-bold mt-1 mb-3">
                  Fresh Ingredients • Authentic Flavours
                </p>

                <div className="inline-flex items-baseline justify-center gap-3 font-sans text-base sm:text-lg">
                  <span className="text-xs sm:text-sm text-[#6B6661] uppercase tracking-wider font-semibold">Half</span>
                  <span className="text-xl sm:text-2xl font-bold text-[#2D2926]">₹250</span>
                  <span className="text-[#C5A059] font-light">|</span>
                  <span className="text-xs sm:text-sm text-[#6B6661] uppercase tracking-wider font-semibold">Full</span>
                  <span className="text-xl sm:text-2xl font-bold text-[#2D2926]">₹500</span>
                </div>
              </div>

              {/* View Menu Button */}
              <div>
                <button
                  id="hero-view-menu-btn"
                  onClick={onViewMenuClick}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xs bg-[#800000] text-white font-sans font-bold text-xs tracking-widest uppercase hover:bg-[#600000] active:scale-98 transition-colors shadow-xs cursor-pointer focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                >
                  <span>VIEW MENU</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#C5A059] animate-bounce" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-[#C5A059]/20 text-center text-[10px] uppercase tracking-[0.2em] text-[#6B6661] font-semibold">
            Established Quality • Digital Menu Foundation
          </div>

        </div>
      </div>
    </section>
  );
};

