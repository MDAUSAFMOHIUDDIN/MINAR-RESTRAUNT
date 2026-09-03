import React, { useRef, useEffect } from 'react';
import { MenuCategory } from '../types/menu';
import { Search, X } from 'lucide-react';

interface CategoryNavProps {
  categories: MenuCategory[];
  activeCategoryId: string;
  onSelectCategory: (categoryId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  categories,
  activeCategoryId,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll active tab into view in horizontal container
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.querySelector(
        `[data-category-id="${activeCategoryId}"]`
      ) as HTMLElement;
      if (activeElement) {
        const container = scrollContainerRef.current;
        const scrollLeft =
          activeElement.offsetLeft -
          container.offsetWidth / 2 +
          activeElement.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeCategoryId]);

  return (
    <div id="menu-index" className="sticky top-16 sm:top-18 z-30 bg-[#FDFCF0]/95 backdrop-blur-md border-y border-[#C5A059]/30 shadow-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2.5 space-y-2.5">
        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-3.5 w-3.5 text-[#6B6661]" />
          </div>
          <input
            id="dish-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search dishes (e.g. Balochi Chicken, Mandi, Paneer, Biryani...)"
            className="w-full pl-8.5 pr-8 py-1.5 text-xs sm:text-sm rounded-xs bg-white border border-[#C5A059]/40 text-[#2D2926] placeholder-[#6B6661] focus:outline-none focus:ring-1 focus:ring-[#800000] focus:border-[#800000] transition-all font-sans"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-[#6B6661] hover:text-[#800000]"
              aria-label="Clear search"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Horizontal Category Nav / Menu Index */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5"
        >
          {categories.map((cat) => {
            const isActive = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                data-category-id={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-xs text-xs font-sans tracking-wider uppercase transition-all shrink-0 cursor-pointer font-bold ${
                  isActive
                    ? 'bg-[#800000] text-white shadow-xs'
                    : 'text-[#6B6661] hover:text-[#800000] hover:bg-[#F4F1DE]/60 border border-transparent hover:border-[#C5A059]/30'
                }`}
              >
                {cat.shortTitle || cat.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

