import React, { useEffect } from 'react';
import { MenuCategory } from '../types/menu';
import { MenuItemRow } from './MenuItemRow';
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';

interface CategoryDetailViewProps {
  category: MenuCategory;
  allCategories: MenuCategory[];
  onBackToMenu: () => void;
  onSelectCategory: (slug: string) => void;
}

export const CategoryDetailView: React.FC<CategoryDetailViewProps> = ({
  category,
  allCategories,
  onBackToMenu,
  onSelectCategory,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [category.slug]);

  const currentIndex = allCategories.findIndex((c) => c.slug === category.slug);
  const prevCategory = currentIndex > 0 ? allCategories[currentIndex - 1] : null;
  const nextCategory =
    currentIndex < allCategories.length - 1 ? allCategories[currentIndex + 1] : null;

  return (
    <div className="min-h-screen pb-16 pt-4 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back navigation button */}
        <div className="mb-4">
          <button
            onClick={onBackToMenu}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs bg-white border border-[#C5A059]/40 text-xs sm:text-sm font-sans font-bold text-[#800000] hover:bg-[#F4F1DE]/50 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#800000]" />
            <span>Back to Full Menu</span>
          </button>
        </div>

        {/* Menu Page Card Container */}
        <div className="bg-white border border-[#C5A059]/30 rounded-lg p-5 sm:p-8 shadow-xs relative">
          
          {/* Top Brand & Category Header */}
          <div className="text-center pb-6 mb-6 border-b-2 border-[#800000]">
            <span className="font-serif text-xs sm:text-sm font-bold tracking-[0.2em] text-[#C5A059] uppercase block mb-1">
              MINAR RESTAURANT
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#800000] tracking-tight uppercase">
              {category.title}
            </h1>
            {category.description && (
              <p className="mt-1 text-sm font-serif italic text-[#6B6661]">
                {category.description}
              </p>
            )}
          </div>

          {/* Optional Category Image */}
          {category.image && (
            <div className="mb-6 rounded-md overflow-hidden border border-[#C5A059]/30 max-h-56 sm:max-h-64 w-full bg-[#F4F1DE]/40">
              <img
                src={category.image}
                alt={category.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}

          {/* Dish items list */}
          <div className="divide-y divide-[#C5A059]/20">
            {category.items.map((item) => (
              <MenuItemRow key={item.id} item={item} />
            ))}
          </div>

          {/* Page Bottom Navigation / Next & Previous Category Switcher */}
          <div className="mt-10 pt-6 border-t border-[#C5A059]/20">
            <div className="flex items-center justify-between gap-2 text-xs sm:text-sm font-sans font-bold">
              {prevCategory ? (
                <button
                  onClick={() => onSelectCategory(prevCategory.slug)}
                  className="flex items-center gap-1.5 text-[#800000] hover:text-[#C5A059] transition-colors text-left uppercase tracking-wider"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span className="truncate max-w-[120px] sm:max-w-none">
                    {prevCategory.shortTitle || prevCategory.title}
                  </span>
                </button>
              ) : (
                <span />
              )}

              {nextCategory ? (
                <button
                  onClick={() => onSelectCategory(nextCategory.slug)}
                  className="flex items-center gap-1.5 text-[#800000] hover:text-[#C5A059] transition-colors text-right ml-auto uppercase tracking-wider"
                >
                  <span className="truncate max-w-[120px] sm:max-w-none">
                    {nextCategory.shortTitle || nextCategory.title}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <span />
              )}
            </div>

            {/* Other Categories Quick List */}
            <div className="mt-6 pt-4 border-t border-[#C5A059]/20 text-center">
              <div className="flex items-center justify-center gap-1.5 text-xs text-[#6B6661] uppercase font-sans tracking-widest font-bold mb-3">
                <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Explore Other Menu Categories</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-1.5">
                {allCategories
                  .filter((c) => c.slug !== category.slug)
                  .map((c) => (
                    <button
                      key={c.id}
                      onClick={() => onSelectCategory(c.slug)}
                      className="px-3 py-1 text-xs rounded-xs bg-[#F4F1DE]/60 border border-[#C5A059]/30 text-[#800000] hover:bg-[#800000] hover:text-white transition-all font-sans font-semibold uppercase tracking-wider"
                    >
                      {c.shortTitle || c.title}
                    </button>
                  ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

