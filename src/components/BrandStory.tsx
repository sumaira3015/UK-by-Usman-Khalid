import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { heroFashionImg, fabricDetailImg, lawnCollectionImg } from '../data/products';

export const BrandStory: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FFFDFC] border-y border-[#E9B7BD]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Collage (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4 sm:space-y-6">
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#E9B7BD]/30 aspect-3/4 bg-[#F5D9DC]/30">
                  <img
                    src={heroFashionImg}
                    alt="UK by Usman Khalid Silhouette Craftsmanship"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 rounded-2xl bg-[#FBF7F2] border border-[#E9B7BD]/40 text-center">
                  <p className="font-serif text-base font-bold text-[#42172F]">Pure Combed Yarn</p>
                  <p className="text-xs text-[#746D70] mt-0.5">Tested for enduring softness & breathability</p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-10">
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#E9B7BD]/30 aspect-square bg-[#F5D9DC]/30">
                  <img
                    src={fabricDetailImg}
                    alt="Resham and Zari Embroidery Close-up"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#E9B7BD]/30 aspect-3/4 bg-[#F5D9DC]/30">
                  <img
                    src={lawnCollectionImg}
                    alt="Artisanal Hand Drape"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Central Floating Emblem */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FFFDFC] shadow-2xl border-2 border-[#B9965B] p-1.5 flex items-center justify-center text-center">
              <div className="w-full h-full rounded-full bg-[#42172F] flex flex-col items-center justify-center text-[#F5D9DC]">
                <Sparkles className="w-4 h-4 text-[#B9965B] mb-0.5" />
                <span className="text-[10px] font-bold tracking-widest uppercase">LAHORE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B9965B] uppercase mb-3">
              <Heart className="w-3.5 h-3.5 text-[#C9687D]" />
              <span>THE BRAND JOURNEY</span>
            </div>

            <p className="font-script text-3xl text-[#C9687D] -mb-1">
              Rooted in Heritage, Styled for Today
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#42172F] tracking-tight leading-[1.12] mb-6">
              Designed with Grace in Every Detail
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#746D70] font-normal leading-relaxed mb-8">
              <p>
                UK by Usman Khalid was born from a deep admiration for the rich textile heritage of Pakistan—where intricate botanical embroideries, delicate Schiffli eyelets, and whisper-light lawn weaves form a living tapestry of culture.
              </p>
              <p>
                We believe that modern modesty should never compromise on effortless ease or tailored contemporary flair. Our design studio in Lahore works meticulously with expert craftsmen to translate hand-drawn floral motifs into delicate resham threadwork, balanced by clean modern drape and generous fabric allowances.
              </p>
              <p>
                Whether you choose an unstitched 3-piece canvas to tailor to your individual silhouette, or slip into our ready-to-wear luxury pret, every piece is created with dignity, comfort, and timeless beauty.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E9B7BD]/30 text-center sm:text-left">
              <div>
                <p className="font-serif text-2xl font-bold text-[#42172F]">100%</p>
                <p className="text-xs text-[#746D70]">Fine Combed Cotton Lawn</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-[#42172F]">Artisanal</p>
                <p className="text-xs text-[#746D70]">Zari, Tilla & Resham Detailing</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-[#42172F]">Ethical</p>
                <p className="text-xs text-[#746D70]">Crafted by Skilled Artisans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
