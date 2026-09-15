import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { promoBannerImg } from '../data/products';

interface PromoBannerProps {
  onShopClick: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onShopClick }) => {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl sm:rounded-[36px] bg-gradient-to-r from-[#F5D9DC] via-[#E9B7BD]/60 to-[#FBF7F2] border border-[#E9B7BD]/50 shadow-xl">
        {/* Subtle decorative floral SVG */}
        <div className="absolute top-0 right-1/3 w-64 h-64 text-white/30 pointer-events-none -mt-16">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C55 25 75 45 100 50 C75 55 55 75 50 100 C45 75 25 55 0 50 C25 45 45 25 50 0 Z" opacity="0.4" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left / Center Copy (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-left z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#E9B7BD]/60 text-[#6E2948] text-xs font-semibold tracking-wider uppercase mb-4 self-start shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B9965B]" />
              <span>LIMITED MID-SEASON EDIT</span>
            </div>

            <p className="font-script text-2xl sm:text-3xl text-[#C9687D] -mb-1">
              Pure Grace & Distinction
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#42172F] tracking-tight leading-[1.12] mb-4">
              Your Next Favorite Look Awaits
            </h2>

            <p className="text-sm sm:text-base text-[#746D70] max-w-lg mb-8 leading-relaxed">
              Explore refined prints, graceful silhouettes, and effortless seasonal style crafted for contemporary women who appreciate the beauty in fine detail.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onShopClick}
                className="px-8 py-4 rounded-full bg-[#42172F] hover:bg-[#6E2948] text-[#FFFDFC] text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>SHOP COLLECTION</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <div className="text-xs text-[#6E2948] font-medium flex items-center gap-2 justify-center sm:justify-start">
                <span className="w-2 h-2 rounded-full bg-[#B9965B]" />
                <span>Complimentary Delivery Above PKR 5,000</span>
              </div>
            </div>
          </div>

          {/* Right Fashion Model Image (5 cols) */}
          <div className="lg:col-span-5 h-72 sm:h-96 lg:h-[420px] relative overflow-hidden">
            <img
              src={promoBannerImg}
              alt="UK by Usman Khalid Seasonal Fashion Campaign"
              className="w-full h-full object-cover object-center lg:object-left-top"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            {/* Soft fade overlay on left edge for desktop */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#E9B7BD]/60 to-transparent hidden lg:block pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
