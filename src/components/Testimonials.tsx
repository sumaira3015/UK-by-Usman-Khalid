import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FBF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="font-script text-2xl text-[#C9687D] mb-1">Words from Our Clients</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#42172F] tracking-tight">
            Her Style Stories
          </h2>
          <p className="text-sm sm:text-base text-[#746D70] mt-2">
            Real experiences from women across Pakistan who wear UK by Usman Khalid for everyday grace and celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between bg-[#FFFDFC] p-6 rounded-2xl sm:rounded-3xl border border-[#E9B7BD]/30 shadow-xs hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* Quote mark and stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#B9965B]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#B9965B]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E9B7BD]/50" />
                </div>

                <p className="text-sm text-[#27232A] leading-relaxed mb-6 font-normal italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="font-serif font-bold text-[#42172F] text-base">{item.author}</span>
                  {item.verified && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#94A38E]" />
                  )}
                </div>
                <p className="text-xs text-[#746D70]">{item.city}</p>
                <div className="mt-2 inline-block px-2.5 py-1 rounded-full bg-[#F5D9DC]/60 text-[10px] font-medium text-[#6E2948]">
                  {item.outfit}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
