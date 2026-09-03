import React from 'react';
import { MenuItem } from '../types/menu';
import { HalfFullPrice } from './HalfFullPrice';

interface MenuItemRowProps {
  item: MenuItem;
  highlightQuery?: string;
}

export const MenuItemRow: React.FC<MenuItemRowProps> = ({ item, highlightQuery }) => {
  // Simple highlight helper for searched terms
  const renderHighlightedText = (text: string, query?: string) => {
    if (!query || !query.trim()) return text;
    const parts = text.split(new RegExp(`(${query.trim()})`, 'gi'));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === query.trim().toLowerCase() ? (
            <mark key={i} className="bg-[#FAF0D7] text-[#800000] font-bold px-0.5 rounded-xs">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div id={`item-${item.id}`} className="group py-3.5 sm:py-4 border-b border-[#C5A059]/20 last:border-b-0 transition-colors duration-150">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5 sm:gap-4">
        {/* Dish title and veg indicator */}
        <div className="flex items-start gap-2 flex-1 min-w-0">
          {item.isVeg !== undefined && (
            <span
              className={`mt-1 inline-flex items-center justify-center w-3.5 h-3.5 rounded-xs border shrink-0 ${
                item.isVeg
                  ? 'border-emerald-700 bg-emerald-50/70'
                  : 'border-[#800000] bg-red-50/70'
              }`}
              title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  item.isVeg ? 'bg-emerald-700' : 'bg-[#800000]'
                }`}
              />
            </span>
          )}

          <div className="flex-1 min-w-0">
            <h4 className="font-serif text-[17px] sm:text-[19px] text-[#2D2926] font-bold tracking-tight leading-snug">
              {renderHighlightedText(item.name, highlightQuery)}
            </h4>
            {item.description && (
              <p className="mt-1 text-[13px] sm:text-[14px] text-[#6B6661] leading-relaxed font-sans pr-2">
                {renderHighlightedText(item.description, highlightQuery)}
              </p>
            )}
          </div>
        </div>

        {/* Pricing component */}
        <div className="self-end sm:self-baseline mt-1 sm:mt-0 shrink-0 pt-0.5 sm:pt-0">
          <HalfFullPrice pricing={item.pricing} size="md" />
        </div>
      </div>
    </div>
  );
};

