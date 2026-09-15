import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';

interface CategoryCardsProps {
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryCards: React.FC<CategoryCardsProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-12 sm:py-16 bg-[#FFFDFC]/60 border-y border-[#E9B7BD]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="font-script text-2xl text-[#C9687D] mb-1">Curated with Intention</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#42172F] tracking-tight">
            Explore by Category
          </h2>
          <p className="text-sm sm:text-base text-[#746D70] mt-2">
            Each collection is thoughtfully designed to celebrate traditional artistry with contemporary ease.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className="group relative h-96 sm:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 flex flex-col justify-end p-6 border border-[#E9B7BD]/30"
            >
              {/* Background Image with Zoom */}
              <div className="absolute inset-0 bg-[#42172F]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 opacity-90 group-hover:opacity-80"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#42172F]/90 via-[#42172F]/40 to-transparent group-hover:from-[#42172F]/95 transition-colors duration-300" />

              {/* Content Box with subtle upward slide */}
              <div className="relative z-10 transform transition-transform duration-300 group-hover:-translate-y-1">
                <span className="inline-block text-[11px] font-semibold tracking-widest uppercase text-[#E9B7BD] mb-1.5">
                  {category.count}
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFFDFC] tracking-tight mb-1">
                  {category.name}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#F5D9DC]/90 font-light mb-4 line-clamp-2">
                  {category.tagline}
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#B9965B] uppercase group-hover:text-white transition-colors">
                  <span>Explore Collection</span>
                  <ArrowUpRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
