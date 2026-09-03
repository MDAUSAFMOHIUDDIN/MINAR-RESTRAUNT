import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export const RestaurantInfo: React.FC = () => {
  return (
    <section
      id="location"
      className="py-8 sm:py-12 px-4 sm:px-6 bg-[#F8F7E8] border-t border-[#C5A059]/30 scroll-mt-24"
    >
      {/* Anchor alias for compatibility */}
      <span id="restaurant-info" className="sr-only">
        VISIT MINAR RESTAURANT
      </span>

      <div className="max-w-3xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="font-serif text-xs uppercase tracking-[0.2em] text-[#C5A059] font-bold block mb-1">
            MINAR RESTAURANT
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#800000] uppercase">
            VISIT MINAR RESTAURANT
          </h2>
          <div className="w-12 h-1 bg-[#800000] mx-auto mt-2" />
        </div>

        {/* Location Card */}
        <div className="bg-white border border-[#C5A059]/30 rounded-lg p-5 sm:p-7 shadow-xs space-y-6 text-center">
          {/* Location Name */}
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F4F1DE] text-[#800000] border border-[#C5A059]/30 mb-1 shadow-xs">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#2D2926]">
              MINAR RESTAURANT — Hyderabad, Telangana
            </h3>
            <p className="text-xs sm:text-sm text-[#6B6661] font-sans">
              Experience authentic flavours and culinary traditions
            </p>
          </div>

          {/* Primary Action: Open in Google Maps */}
          <div className="pt-1">
            <a
              href="https://maps.app.goo.gl/JTyTPKjQX1sv1dhLA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-xs bg-[#800000] text-white text-xs sm:text-sm font-sans font-bold tracking-widest uppercase hover:bg-[#600000] transition-colors shadow-xs active:scale-98"
            >
              <Navigation className="w-4 h-4 text-[#C5A059]" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Compact Responsive Google Maps Preview */}
          <div className="pt-2">
            <div className="rounded-lg overflow-hidden border border-[#C5A059]/30 bg-[#F4F1DE]/40 shadow-xs relative">
              <iframe
                title="MINAR RESTAURANT Location on Google Maps"
                src="https://maps.google.com/maps?q=17.3459333,78.5508991&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-44 sm:h-56 block"
              />
              <div className="p-2.5 bg-[#FDFCF0] border-t border-[#C5A059]/20 flex items-center justify-between text-xs text-[#6B6661] font-sans px-4">
                <span className="font-medium text-[#2D2926]">17.3459333, 78.5508991</span>
                <a
                  href="https://maps.app.goo.gl/JTyTPKjQX1sv1dhLA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#800000] hover:text-[#C5A059] uppercase tracking-wider text-[11px] inline-flex items-center gap-1"
                >
                  <span>Get Directions</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
