import React, { useState } from 'react';
import { Search, MapPin, Menu as MenuIcon, X } from 'lucide-react';

interface HeaderProps {
  onSearchClick: () => void;
  onNavigateHome: () => void;
  isDetailPage?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onSearchClick,
  onNavigateHome,
  isDetailPage = false,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (isDetailPage) {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FDFCF0]/95 backdrop-blur-md border-b border-[#C5A059]/30 transition-all">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand identity */}
        <button
          onClick={onNavigateHome}
          className="text-left group cursor-pointer focus:outline-none"
          aria-label="MINAR RESTAURANT Home"
        >
          <span className="block font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#800000] uppercase leading-none">
            MINAR RESTAURANT
          </span>
          <span className="block text-[11px] sm:text-xs font-serif italic text-[#C5A059] mt-0.5">
            Taste That Stays With You
          </span>
        </button>

        {/* Minimal header actions */}
        <div className="flex items-center gap-1 sm:gap-3">
          {/* Quick Search trigger */}
          <button
            onClick={onSearchClick}
            className="p-2.5 rounded-sm text-[#800000] hover:bg-[#F4F1DE]/60 transition-colors focus:outline-none focus:ring-1 focus:ring-[#800000]"
            aria-label="Search dishes"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#800000]" />
          </button>

          {/* Quick jump to location */}
          <button
            onClick={() => scrollToSection('location')}
            className="hidden xs:flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider text-[#800000] hover:bg-[#F4F1DE]/60 transition-colors border border-[#C5A059]/30"
            aria-label="Location"
          >
            <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="hidden sm:inline">Location</span>
          </button>

          {/* Mobile drawer toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-sm text-[#800000] hover:bg-[#F4F1DE]/60 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Slide-down minimal mobile navigation drawer */}
      {isMobileMenuOpen && (
        <div className="border-t border-[#C5A059]/30 bg-[#FDFCF0] px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 font-serif text-base text-[#2D2926]">
            <button
              onClick={() => {
                onNavigateHome();
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left py-1 text-[#800000] font-bold hover:text-[#C5A059] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('signature-dishes')}
              className="text-left py-1 hover:text-[#800000] transition-colors"
            >
              Signature Dishes
            </button>
            <button
              onClick={() => scrollToSection('menu-categories')}
              className="text-left py-1 hover:text-[#800000] transition-colors"
            >
              All Menu Categories
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-left py-1 hover:text-[#800000] transition-colors"
            >
              Location
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
