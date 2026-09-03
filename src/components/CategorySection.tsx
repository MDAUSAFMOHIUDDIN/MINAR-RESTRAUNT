import React from 'react';
import { MenuCategory } from '../types/menu';
import { MenuItemRow } from './MenuItemRow';
import { ArrowRight } from 'lucide-react';

interface CategorySectionProps {
  category: MenuCategory;
  onOpenCategoryDetail: (categorySlug: string) => void;
  searchQuery?: string;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  category,
  onOpenCategoryDetail,
  searchQuery = '',
}) => {
  // Filter items if search query is active
  const filteredItems = searchQuery.trim()
    ? category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.description &&
            item.description.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : category.items;

  // Don't render category section if searching and no items match
  if (searchQuery.trim() && filteredItems.length === 0) {
    return null;
  }

  return (
    <section
      id={`section-${category.id}`}
      className="py-6 sm:py-8 border-b border-[#C5A059]/20 scroll-mt-36"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Category Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 mb-4 pb-2.5 border-b-2 border-[#800000]">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#800000] uppercase">
                {category.title}
              </h3>
            </div>
            {category.description && (
              <p className="mt-0.5 text-xs sm:text-sm font-serif italic text-[#6B6661]">
                {category.description}
              </p>
            )}
          </div>

          {/* View Full Section Link */}
          <button
            onClick={() => onOpenCategoryDetail(category.slug)}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs font-serif italic text-[#C5A059] hover:text-[#800000] transition-colors py-1 cursor-pointer group font-semibold"
          >
            <span>View Full Section</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform text-[#800000]" />
          </button>
        </div>

        {/* Optional Category Image Accent */}
        {category.image && !searchQuery && (
          <div className="mb-4 rounded-md overflow-hidden border border-[#C5A059]/30 max-h-40 sm:max-h-48 w-full bg-[#F4F1DE]/40">
            <img
              src={category.image}
              alt={category.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        )}

        {/* Menu Items List */}
        <div className="divide-y divide-[#C5A059]/20">
          {filteredItems.map((item) => (
            <MenuItemRow
              key={item.id}
              item={item}
              highlightQuery={searchQuery}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

