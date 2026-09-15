import React from 'react';
import { Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside 
      aria-label="Announcement"
      className="bg-[#42172F] text-[#F5D9DC] text-xs sm:text-[13px] py-2 px-4 transition-colors duration-200 border-b border-[#6E2948]/40"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden md:flex items-center gap-2 text-[#E9B7BD]/90">
          <Sparkles className="w-3.5 h-3.5 text-[#B9965B]" />
          <span className="font-semibold text-white tracking-wide">UK by Usman Khalid</span>
          <span className="text-[#B9965B]">•</span>
          <span>Complimentary Delivery on Orders Above PKR 5,000</span>
        </div>

        <div className="w-full md:w-auto text-center font-medium tracking-wide">
          <span className="font-semibold text-white">UK by Usman Khalid</span>
          <span className="mx-2 text-[#B9965B]">•</span>
          <span>Complimentary Delivery Across Pakistan</span>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-xs text-[#E9B7BD]/80">
          <a href="tel:03220011325" className="hover:text-white transition-colors cursor-pointer">Concierge: 0322 0011325</a>
          <span className="w-1 h-1 rounded-full bg-[#B9965B]"></span>
          <span className="font-serif tracking-wider text-[#B9965B]">PKR (Rs.)</span>
        </div>
      </div>
    </aside>
  );
};
