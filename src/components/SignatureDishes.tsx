import React from 'react';
import { SIGNATURE_DISHES } from '../data/menuData';
import { HalfFullPrice } from './HalfFullPrice';

export const SignatureDishes: React.FC = () => {
  return (
    <section id="signature-dishes" className="pt-2 pb-8 sm:py-10 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading with Bold Typography */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 sm:w-12 bg-[#C5A059]/60" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#800000] uppercase">
              SIGNATURE DISHES
            </h2>
            <span className="h-px w-8 sm:w-12 bg-[#C5A059]/60" />
          </div>
          <p className="mt-1.5 text-xs sm:text-sm font-serif italic text-[#6B6661]">
            Distinctive culinary traditions prepared with authentic ingredients
          </p>
        </div>

        {/* 2 Signature Dishes Grid / Cards with bold food imagery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {SIGNATURE_DISHES.map((dish) => (
            <div
              key={dish.id}
              className="bg-white border border-[#C5A059]/30 rounded-lg overflow-hidden shadow-xs hover:border-[#800000]/50 transition-all flex flex-col justify-between"
            >
              {dish.image && (
                <div className="relative aspect-16/10 overflow-hidden bg-[#F4F1DE]/40">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-3.5 right-3.5 text-white">
                    <span className="font-serif text-lg sm:text-xl font-bold block drop-shadow-xs">
                      {dish.name}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#800000] tracking-tight mb-1.5">
                    {dish.name}
                  </h3>
                  {dish.description && (
                    <p className="text-xs sm:text-sm text-[#6B6661] leading-relaxed font-sans mb-3">
                      {dish.description}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-[#C5A059]/20 flex items-center justify-end">
                  <HalfFullPrice pricing={dish.pricing} size="md" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

