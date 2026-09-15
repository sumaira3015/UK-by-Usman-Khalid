import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface BestsellersProps {
  products: Product[];
  onQuickView: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  onViewAll: () => void;
}

export const Bestsellers: React.FC<BestsellersProps> = ({
  products,
  onQuickView,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onViewAll,
}) => {
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 4);

  return (
    <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4 border-b border-[#E9B7BD]/30 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-[#B9965B] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CLIENT FAVORITES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#42172F] tracking-tight">
            Loved by Her
          </h2>
          <p className="text-sm sm:text-base text-[#746D70] mt-2">
            Pieces customers keep coming back to season after season.
          </p>
        </div>

        <button
          type="button"
          onClick={onViewAll}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wider text-[#6E2948] hover:text-[#42172F] uppercase transition-colors"
        >
          <span>Explore All Bestsellers</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {bestsellers.map((product) => (
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
