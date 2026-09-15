import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { heroFashionImg } from '../data/products';

interface HeroProps {
  onShopClick: () => void;
  onExploreCollection: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick, onExploreCollection }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FBF7F2] via-[#FFFDFC] to-[#FBF7F2] py-8 sm:py-12 lg:py-16">
      {/* Delicate background decorative elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#F5D9DC]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#E9B7BD]/20 blur-3xl pointer-events-none" />

      {/* Subtle floral SVG botanical illustration in corner */}
      <svg
        className="absolute bottom-8 right-6 w-32 h-32 text-[#E9B7BD]/20 pointer-events-none hidden lg:block"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 0 C55 25 75 45 100 50 C75 55 55 75 50 100 C45 75 25 55 0 50 C25 45 45 25 50 0 Z" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: 45% (5 cols on lg, or 5-6 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left pt-2 lg:pt-0 order-1">
            {/* Season Badge */}
            <div className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full bg-[#F5D9DC]/80 border border-[#E9B7BD]/60 text-[#6E2948] text-xs font-semibold tracking-wider uppercase mb-5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B9965B]" />
              <span>UK BY USMAN KHALID • NEW SEASON 2026</span>
            </div>

            {/* Handwritten decorative accent */}
            <p className="font-script text-2xl sm:text-3xl text-[#C9687D] -mb-1 select-none">
              Made to be remembered
            </p>

            {/* Main Serif Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-bold text-[#42172F] tracking-tight leading-[1.08] mb-6">
              Elegance, <br className="hidden sm:inline" />
              Designed for You
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#746D70] font-normal leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10">
              Explore our latest collection of refined Pakistani silhouettes, delicate prints, and effortless everyday luxury crafted from breathable combed lawn and rich festive fabrics.
            </p>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5">
              <button
                type="button"
                onClick={onShopClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#42172F] hover:bg-[#6E2948] text-[#FFFDFC] text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>SHOP NEW ARRIVALS</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onExploreCollection}
                className="w-full sm:w-auto px-7 py-4 rounded-full border border-[#42172F]/30 hover:border-[#6E2948] text-[#42172F] hover:text-[#6E2948] bg-white/40 hover:bg-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer"
              >
                EXPLORE COLLECTION
              </button>
            </div>

            {/* Key feature pills */}
            <div className="mt-10 pt-8 border-t border-[#E9B7BD]/30 flex items-center justify-center lg:justify-start gap-6 text-xs text-[#746D70]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B9965B]" />
                <span>100% Combed Lawn</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C9687D]" />
                <span>Fine Resham Zari</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#42172F]" />
                <span>Fast Nationwide COD</span>
              </div>
            </div>
          </div>

          {/* Right Column: 55% (7 cols on lg) */}
          <div className="lg:col-span-7 relative order-2">
            <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
              {/* Asymmetrical soft decorative frame */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-[#E9B7BD]/30 via-[#F5D9DC]/40 to-transparent rounded-3xl sm:rounded-[36px] -rotate-1 pointer-events-none" />

              {/* Main Fashion Model Image */}
              <div className="relative rounded-2xl sm:rounded-[32px] overflow-hidden shadow-xl border border-white/80 aspect-3/4 max-h-[640px] w-full bg-[#F5D9DC]/20">
                <img
                  src={heroFashionImg}
                  alt="UK by Usman Khalid Haute Couture Pakistani Lawn Fashion Campaign 2026"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle soft gradient scrim at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#42172F]/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Circular Badge: "UK BY USMAN KHALID NEW EDIT 2026" */}
              <div className="absolute -bottom-5 -left-4 sm:bottom-6 sm:-left-6 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#FFFDFC] text-[#42172F] p-2 shadow-xl border-2 border-[#B9965B]/60 flex flex-col items-center justify-center text-center animate-pulse-slow">
                <div className="w-full h-full rounded-full border border-dashed border-[#C9687D]/50 flex flex-col items-center justify-center p-1.5">
                  <span className="text-[7.5px] sm:text-[8.5px] uppercase font-bold tracking-widest text-[#B9965B]">
                    UK BY
                  </span>
                  <span className="font-serif text-xs sm:text-sm font-bold text-[#42172F] uppercase leading-tight tracking-wide">
                    USMAN KHALID
                  </span>
                  <span className="text-[8.5px] sm:text-[9.5px] font-semibold text-[#6E2948] uppercase tracking-wider mt-0.5">
                    NEW EDIT 2026
                  </span>
                </div>
              </div>

              {/* Floating Quality Tag */}
              <div className="absolute top-6 right-4 sm:-right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-[#E9B7BD]/40 text-left hidden sm:block">
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#B9965B]">Signature Fabric</p>
                <p className="text-xs font-serif font-bold text-[#42172F]">Luxury Swiss Lawn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
