import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface NewArrivalsProps {
  products: Product[];
  onQuickView: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  onViewAll: () => void;
}

export const NewArrivals: React.FC<NewArrivalsProps> = ({
  products,
  onQuickView,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onViewAll,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'lawn' | 'ready-to-wear' | 'festive'>('all');

  const filteredProducts = products.filter((p) => {
    if (activeTab === 'all') return p.newArrival;
    return p.category === activeTab;
  }).slice(0, 8);

  return (
    <section className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 border-b border-[#E9B7BD]/30 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B9965B] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Summer & Festive 2026</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#42172F] tracking-tight">
            New Arrivals
          </h2>
          <p className="text-sm sm:text-base text-[#746D70] mt-2 max-w-xl">
            Fresh silhouettes. Beautiful details. Made for your moments.
          </p>
        </div>

        {/* Category Filter Pills & View All */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="flex bg-[#FFFDFC] p-1 rounded-full border border-[#E9B7BD]/40 text-xs shadow-2xs">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-full font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-[#42172F] text-white'
                  : 'text-[#42172F] hover:text-[#6E2948]'
              }`}
            >
              All Edits
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('lawn')}
              className={`px-3.5 py-1.5 rounded-full font-medium transition-all ${
                activeTab === 'lawn'
                  ? 'bg-[#42172F] text-white'
                  : 'text-[#42172F] hover:text-[#6E2948]'
              }`}
            >
              Lawn
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('ready-to-wear')}
              className={`px-3.5 py-1.5 rounded-full font-medium transition-all ${
                activeTab === 'ready-to-wear'
                  ? 'bg-[#42172F] text-white'
                  : 'text-[#42172F] hover:text-[#6E2948]'
              }`}
            >
              Ready to Wear
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('festive')}
              className={`px-3.5 py-1.5 rounded-full font-medium transition-all ${
                activeTab === 'festive'
                  ? 'bg-[#42172F] text-white'
                  : 'text-[#42172F] hover:text-[#6E2948]'
              }`}
            >
              Festive
            </button>
          </div>

          <button
            type="button"
            onClick={onViewAll}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wider text-[#6E2948] hover:text-[#42172F] uppercase transition-colors px-3 py-1.5"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 4-column responsive product grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={onQuickView}
            onSelectProduct={onSelectProduct}
            onAddToCart={onAddToCart}
            onToggleWishlist={onToggleWishlist}
            isWishlisted={wishlistIds.includes(product.id)}
          />
        ))}
      </div>
    </section>
  );
};
