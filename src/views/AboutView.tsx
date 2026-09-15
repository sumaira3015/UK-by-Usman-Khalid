import React from 'react';
import { Sparkles, Heart, Compass, ShieldCheck, ArrowRight } from 'lucide-react';
import { heroFashionImg, lawnCollectionImg, festiveEditImg, fabricDetailImg, promoBannerImg } from '../data/products';

interface AboutViewProps {
  onShopClick: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onShopClick }) => {
  return (
    <div className="py-12 sm:py-16 bg-[#FBF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-[#B9965B] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE MAISON & PHILOSOPHY</span>
          </div>
          <p className="font-script text-3xl text-[#C9687D] -mb-1">
            Made to be remembered
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#42172F] tracking-tight leading-[1.08] mb-4">
            The Story of UK by Usman Khalid
          </h1>
          <p className="text-sm sm:text-base text-[#746D70] leading-relaxed">
            Founded with a vision to redefine contemporary Pakistani women's fashion through timeless lawn textures, delicate embroidery, and modern silhouette tailoring.
          </p>
        </div>

        {/* Hero Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-center">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl aspect-4/5 bg-[#F5D9DC]/30 border border-white">
            <img
              src={heroFashionImg}
              alt="UK by Usman Khalid Editorial Campaign"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-6 space-y-6 text-sm sm:text-base text-[#746D70] leading-relaxed">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#42172F] leading-tight">
              An Ode to Pakistani Textile Heritage
            </h2>
            <p>
              In Pakistan, clothing has always been an intimate expression of grace and warmth. From the historic looms of Punjab to the vibrant artisan pockets of Sindh, every thread tells a story of devotion, patience, and intricate aesthetic sensibility.
            </p>
            <p>
              At UK by Usman Khalid, we honor this heritage by pairing classical resham threadwork and delicate tilla borders with understated modern color palettes: dusty rose, blush, muted sage, and warm ivory.
            </p>
            <p>
              Our collections are designed for the modern woman who seeks effortless daywear that transitions gracefully into festive evenings—uncompromising in comfort and modest in spirit.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={onShopClick}
                className="px-8 py-3.5 rounded-full bg-[#42172F] hover:bg-[#6E2948] text-white text-xs font-semibold tracking-widest uppercase transition-all shadow-md flex items-center gap-2"
              >
                <span>EXPLORE COLLECTIONS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Craftsmanship */}
        <div className="bg-[#FFFDFC] rounded-3xl sm:rounded-[36px] p-8 sm:p-14 border border-[#E9B7BD]/40 shadow-sm mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-serif text-3xl font-bold text-[#42172F]">The Cornerstones of Our Craft</h3>
            <p className="text-xs sm:text-sm text-[#746D70] mt-1.5">Every garment undergoes meticulous scrutiny from raw combed yarn to final packaging.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#FBF7F2] border border-[#E9B7BD]/30 text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#F5D9DC] text-[#6E2948] flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#42172F] mb-2">Combed Swiss Lawn</h4>
              <p className="text-xs text-[#746D70] leading-relaxed">
                We select only long-staple combed cotton fibers woven to fine counts, yielding lightweight, breathable fabric that resists pilling and stays cool in tropical heat.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBF7F2] border border-[#E9B7BD]/30 text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#F5D9DC] text-[#6E2948] flex items-center justify-center mx-auto mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#42172F] mb-2">Artisan Embroidery</h4>
              <p className="text-xs text-[#746D70] leading-relaxed">
                Our motifs are drawn by hand in our Lahore studio before being transformed into high-density Schiffli, multi-head resham, and metallic zari work with clean finished backings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBF7F2] border border-[#E9B7BD]/30 text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#F5D9DC] text-[#6E2948] flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#42172F] mb-2">Thoughtful Drape</h4>
              <p className="text-xs text-[#746D70] leading-relaxed">
                Whether you select unstitched yardage or ready-to-wear pret, our silhouettes provide generous fabric allowances for graceful motion, modesty, and lasting comfort.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-3xl overflow-hidden shadow-sm">
          <img src={fabricDetailImg} alt="Detail" className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
          <img src={lawnCollectionImg} alt="Lawn" className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
          <img src={festiveEditImg} alt="Festive" className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
          <img src={promoBannerImg} alt="Banner" className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
        </div>
      </div>
    </div>
  );
};
