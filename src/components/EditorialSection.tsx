import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { readyWearImg, fabricDetailImg } from '../data/products';

interface EditorialSectionProps {
  onDiscover: () => void;
}

export const EditorialSection: React.FC<EditorialSectionProps> = ({ onDiscover }) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-[#FBF7F2]">
      {/* Delicate floral line art SVG */}
      <div className="absolute top-12 left-6 text-[#E9B7BD]/30 pointer-events-none hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M50 10 C30 30 10 50 10 80 C40 80 70 50 90 10 Z" />
          <path d="M50 10 C70 30 90 50 90 80 C60 80 30 50 10 10 Z" />
          <circle cx="50" cy="50" r="15" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Side A: Editorial Image Composition (7 columns on lg) */}
          <div className="lg:col-span-7 relative">
            <div className="relative">
              {/* Main Large Lifestyle Photograph */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/80 aspect-4/5 max-h-[580px] w-full bg-[#E9B7BD]/20">
                <img
                  src={readyWearImg}
                  alt="Crafted for Every Occasion — UK by Usman Khalid Pakistani Lawn & Pret"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-103"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Floating Overlapping Detail Photo (Collage element) */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 w-44 sm:w-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFFDFC] hidden sm:block aspect-square">
                <img
                  src={fabricDetailImg}
                  alt="Fine Resham and Zari Embroidery Detail"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-xs py-1 px-2 rounded-lg text-center">
                  <span className="text-[10px] font-serif font-bold text-[#42172F] tracking-wide">
                    Artisanal Resham Work
                  </span>
                </div>
              </div>

              {/* Decorative Accent Tag */}
              <div className="absolute top-6 left-6 bg-[#42172F]/90 backdrop-blur-md text-[#F5D9DC] px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase shadow-md">
                Pret & Unstitched Edits
              </div>
            </div>
          </div>

          {/* Side B: Editorial Copy (5 columns on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B9965B] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>UK BY USMAN KHALID</span>
            </div>

            <p className="font-script text-3xl text-[#C9687D] -mb-1">
              Crafted for Every Occasion
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#42172F] tracking-tight leading-[1.12] mb-6">
              From everyday elegance to special celebrations
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#746D70] font-normal leading-relaxed mb-8">
              <p>
                In the vibrant landscape of Pakistani fashion, lawn is not merely a seasonal fabric—it is an enduring art form woven into the rhythm of life.
              </p>
              <p>
                Each piece in our collection bridges centuries of artisanal embroidery traditions with refined, tailored silhouettes designed for the contemporary woman. From breezy morning errands to intimate family dinners and festive gatherings, UK by Usman Khalid clothes you in quiet distinction.
              </p>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-[#E9B7BD]/30 mb-8">
              <div>
                <p className="font-serif text-2xl font-bold text-[#42172F]">100%</p>
                <p className="text-xs text-[#746D70]">Natural breathable cotton lawn & pure silk</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-[#42172F]">Handcrafted</p>
                <p className="text-xs text-[#746D70]">Intricate neckline & border embroidery</p>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={onDiscover}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#42172F] hover:bg-[#6E2948] text-[#FFFDFC] text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg group cursor-pointer"
              >
                <span>DISCOVER THE COLLECTION</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
