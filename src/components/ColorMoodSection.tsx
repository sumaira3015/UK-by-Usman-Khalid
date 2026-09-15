import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { MOOD_COLORS } from '../data/products';

interface ColorMoodSectionProps {
  onSelectMood: (colorName: string) => void;
}

export const ColorMoodSection: React.FC<ColorMoodSectionProps> = ({ onSelectMood }) => {
  return (
    <section className="py-14 sm:py-18 bg-[#FFFDFC] border-b border-[#E9B7BD]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-[#B9965B] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Harmonies & Palettes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#42172F] tracking-tight">
            Find Your Signature Shade
          </h2>
          <p className="text-sm sm:text-base text-[#746D70] mt-2">
            Explore our thoughtfully calibrated color moods, blended specifically to compliment warm South Asian skin tones.
          </p>
        </div>

        {/* 6 Mood Color Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {MOOD_COLORS.map((mood) => (
            <button
              key={mood.name}
              type="button"
              onClick={() => onSelectMood(mood.name)}
              className="group flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-[#FBF7F2] hover:bg-[#F5D9DC]/40 border border-[#E9B7BD]/30 hover:border-[#6E2948]/40 transition-all duration-300 hover:shadow-md cursor-pointer"
            >
              {/* Swatch circle with border */}
              <div className="relative mb-3.5">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-inner transition-transform duration-300 group-hover:scale-110 border-2 ${mood.borderClass}`}
                  style={{ backgroundColor: mood.hex }}
                />
                <div className="absolute inset-0 rounded-full border border-black/10 pointer-events-none" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-base font-bold text-[#42172F] group-hover:text-[#6E2948] transition-colors mb-0.5">
                {mood.name}
              </h3>

              {/* Mood attribute */}
              <p className="text-[11px] text-[#746D70] mb-3">
                {mood.text}
              </p>

              {/* Tiny shop link */}
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#B9965B] group-hover:text-[#6E2948] transition-colors uppercase tracking-wider mt-auto">
                <span>View</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
