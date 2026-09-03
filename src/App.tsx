import React, { useState, useEffect } from 'react';
import { MENU_CATEGORIES } from './data/menuData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SignatureDishes } from './components/SignatureDishes';
import { CategoryNav } from './components/CategoryNav';
import { CategorySection } from './components/CategorySection';
import { CategoryDetailView } from './components/CategoryDetailView';
import { RestaurantInfo } from './components/RestaurantInfo';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string | null>(null);
  const [activeCategoryId, setActiveCategoryId] = useState<string>(MENU_CATEGORIES[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Handle URL hash or category selection on initial load / popstate
  useEffect(() => {
    const handleUrlChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('category/')) {
        const slug = hash.replace('category/', '');
        const found = MENU_CATEGORIES.find((c) => c.slug === slug);
        if (found) {
          setSelectedCategorySlug(slug);
          return;
        }
      }
      setSelectedCategorySlug(null);
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  // Update hash when category page is selected
  const handleOpenCategoryDetail = (categorySlug: string) => {
    setSelectedCategorySlug(categorySlug);
    window.history.pushState(null, '', `#category/${categorySlug}`);
  };

  const handleBackToMenu = () => {
    setSelectedCategorySlug(null);
    window.history.pushState(null, '', window.location.pathname);
  };

  // Scroll spy to update active category in horizontal nav
  useEffect(() => {
    if (selectedCategorySlug) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const cat of MENU_CATEGORIES) {
        const el = document.getElementById(
          cat.id === 'signature-dishes' ? 'signature-dishes' : `section-${cat.id}`
        );
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveCategoryId(cat.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedCategorySlug]);

  const handleSelectCategoryFromNav = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    const targetElement = document.getElementById(
      categoryId === 'signature-dishes' ? 'signature-dishes' : `section-${categoryId}`
    );
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (sectionId: string) => {
    if (selectedCategorySlug) {
      setSelectedCategorySlug(null);
      window.history.pushState(null, '', window.location.pathname);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchFocus = () => {
    if (selectedCategorySlug) {
      setSelectedCategorySlug(null);
    }
    setTimeout(() => {
      const input = document.getElementById('dish-search-input');
      if (input) {
        input.focus();
        input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  // If a dedicated category view is active
  if (selectedCategorySlug) {
    const currentCategory = MENU_CATEGORIES.find(
      (c) => c.slug === selectedCategorySlug
    );
    if (currentCategory) {
      return (
        <div className="min-h-screen bg-[#FDFCF0] text-[#2D2926] flex flex-col justify-between selection:bg-[#800000] selection:text-[#FDFCF0]">
          <Header
            onSearchClick={handleSearchFocus}
            onNavigateHome={handleBackToMenu}
            isDetailPage={true}
          />
          <main className="flex-1">
            <CategoryDetailView
              category={currentCategory}
              allCategories={MENU_CATEGORIES}
              onBackToMenu={handleBackToMenu}
              onSelectCategory={handleOpenCategoryDetail}
            />
          </main>
          <Footer
            onNavigateHome={handleBackToMenu}
            onScrollToSection={handleScrollToSection}
          />
        </div>
      );
    }
  }

  // Normal Full Homepage View (The primary digital menu)
  return (
    <div className="min-h-screen bg-[#FDFCF0] text-[#2D2926] flex flex-col justify-between selection:bg-[#800000] selection:text-[#FDFCF0]">
      {/* Minimal Header */}
      <Header
        onSearchClick={handleSearchFocus}
        onNavigateHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        isDetailPage={false}
      />

      <main className="flex-1 pb-10">
        {/* Customized Hero Banner with Balochi Chicken centerpiece */}
        <Hero
          onViewMenuClick={() => handleScrollToSection('signature-dishes')}
        />

        {/* Prominent Signature Dishes Section */}
        <SignatureDishes />

        {/* Horizontal Category Nav / Menu Index with Search */}
        <CategoryNav
          categories={MENU_CATEGORIES}
          activeCategoryId={activeCategoryId}
          onSelectCategory={handleSelectCategoryFromNav}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Search Results Summary Banner when active */}
        {searchQuery.trim() && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-4">
            <div className="p-3 bg-white border border-[#C5A059]/40 rounded-xs text-xs sm:text-sm font-sans flex items-center justify-between text-[#800000] shadow-xs">
              <span>
                Showing search results for: <strong>"{searchQuery}"</strong>
              </span>
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs uppercase font-bold tracking-wider text-[#800000] hover:text-[#C5A059] underline"
              >
                Clear
              </button>
            </div>
          </div>
        )}

        {/* All Menu Categories in specified order on the Homepage */}
        <div id="menu-categories" className="divide-y-0">
          {MENU_CATEGORIES.filter((cat) => cat.id !== 'signature-dishes').map(
            (category) => (
              <CategorySection
                key={category.id}
                category={category}
                onOpenCategoryDetail={handleOpenCategoryDetail}
                searchQuery={searchQuery}
              />
            )
          )}
        </div>

        {/* Restaurant Information Section */}
        <RestaurantInfo />
      </main>

      {/* Minimal Footer */}
      <Footer
        onNavigateHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onScrollToSection={handleScrollToSection}
      />
    </div>
  );
}
