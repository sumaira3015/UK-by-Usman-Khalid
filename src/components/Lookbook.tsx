import React, { useState } from 'react';
import { Eye, Heart, X, Sparkles } from 'lucide-react';
import { heroFashionImg, lawnCollectionImg, festiveEditImg, readyWearImg, fabricDetailImg, promoBannerImg } from '../data/products';

export const Lookbook: React.FC = () => {
  const [activeImage, setActiveImage] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  const lookbookItems = [
    {
      src: heroFashionImg,
      title: 'Rosé Garden Editorial',
      subtitle: 'Summer Lawn Edition',
      aspect: 'aspect-3/4'
    },
    {
      src: fabricDetailImg,
      title: 'Handcrafted Resham',
      subtitle: 'Close-up Artistry',
      aspect: 'aspect-square'
    },
    {
      src: festiveEditImg,
      title: 'Burgundy Tilla Edit',
      subtitle: 'Evening Glamour',
      aspect: 'aspect-3/4'
    },
    {
      src: readyWearImg,
      title: 'Contemporary Sage Kurtis',
      subtitle: 'Everyday Pret',
      aspect: 'aspect-3/4'
    },
    {
      src: promoBannerImg,
      title: 'Dusty Rose Silhouette',
      subtitle: 'Modern Modesty',
      aspect: 'aspect-4/3'
    },
    {
      src: lawnCollectionImg,
      title: 'Pearl Mist Voile Drape',
      subtitle: 'Chiffon & Lawn Harmony',
      aspect: 'aspect-3/4'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDFC] border-b border-[#E9B7BD]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-[#B9965B] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EDITORIAL GALLERY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#42172F] tracking-tight">
            Style Inspiration
          </h2>
          <p className="text-sm sm:text-base text-[#746D70] mt-2">
            Explore the world of UK by Usman Khalid — real silhouettes, light, and fabric in natural movement.
          </p>
        </div>

        {/* Responsive Editorial Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {lookbookItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(item)}
              className="group relative rounded-2xl overflow-hidden aspect-3/4 bg-[#F5D9DC]/20 cursor-pointer shadow-2xs hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#42172F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-left">
                <div className="flex items-center justify-between text-[#F5D9DC] mb-1">
                  <span className="text-[10px] tracking-wider uppercase font-medium text-[#E9B7BD]">
                    {item.subtitle}
                  </span>
                  <Eye className="w-3.5 h-3.5 text-white" />
                </div>
                <h4 className="font-serif text-sm font-bold text-white leading-tight">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-[#27232A]/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-lg w-full bg-[#FFFDFC] rounded-3xl overflow-hidden shadow-2xl p-4 border border-[#E9B7BD]/40"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md text-[#42172F] flex items-center justify-center shadow-md hover:bg-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-2xl overflow-hidden max-h-[70vh] bg-black/5 aspect-3/4 mb-4">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="px-2 pb-2">
              <span className="text-xs uppercase tracking-widest text-[#B9965B] font-semibold">
                {activeImage.subtitle}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#42172F] mt-0.5">
                {activeImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
