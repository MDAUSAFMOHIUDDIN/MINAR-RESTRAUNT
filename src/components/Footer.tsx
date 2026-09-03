import React from 'react';
import { Navigation } from 'lucide-react';

interface FooterProps {
  onNavigateHome: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onScrollToSection,
}) => {
  return (
    <footer className="bg-[#FDFCF0] border-t-2 border-[#C5A059]/40 pt-8 pb-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center space-y-5">
        {/* Brand identity */}
        <div>
          <button
            onClick={onNavigateHome}
            className="focus:outline-none cursor-pointer inline-block"
          >
            <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#800000] uppercase">
              MINAR RESTAURANT
            </h3>
            <p className="font-serif italic text-xs sm:text-sm text-[#C5A059] tracking-wide mt-0.5 font-medium">
              Taste That Stays With You
            </p>
          </button>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-sans uppercase font-bold tracking-wider text-[#2D2926]">
          <button
            onClick={() => onScrollToSection('menu-index')}
            className="hover:text-[#800000] transition-colors cursor-pointer"
          >
            Menu
          </button>
          <span className="text-[#C5A059]">•</span>
          <button
            onClick={() => onScrollToSection('signature-dishes')}
            className="hover:text-[#800000] transition-colors cursor-pointer"
          >
            Signature Dishes
          </button>
          <span className="text-[#C5A059]">•</span>
          <button
            onClick={() => onScrollToSection('location')}
            className="hover:text-[#800000] transition-colors cursor-pointer"
          >
            Location
          </button>
        </div>

        {/* Location & Google Maps Link */}
        <div className="pt-3 border-t border-[#C5A059]/20 max-w-md mx-auto space-y-2.5">
          <p className="text-xs sm:text-sm font-serif font-bold text-[#2D2926]">
            MINAR RESTAURANT — Hyderabad, Telangana
          </p>
          <div>
            <a
              href="https://maps.app.goo.gl/JTyTPKjQX1sv1dhLA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-[#800000] hover:text-[#C5A059] underline underline-offset-4 transition-colors"
            >
              <span>Open in Google Maps</span>
              <Navigation className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-2 text-[11px] text-[#6B6661] font-sans tracking-wide">
          © {new Date().getFullYear()} MINAR RESTAURANT. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
