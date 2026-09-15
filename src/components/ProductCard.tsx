import React, { useState } from 'react';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  // Format currency helper
  const formatPrice = (amount: number) => {
    return `PKR ${amount.toLocaleString('en-PK')}`;
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultSize = product.sizes[0] || 'M';
    const defaultColor = product.colors[0]?.name || 'Standard';
    onAddToCart(product, defaultSize, defaultColor);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleWishlist(product);
  };

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickView(product);
  };

  // Image source with fallback
  const displayImage = isHovered && product.images[1] ? product.images[1] : product.images[0];

  return (
    <article
      className="group relative flex flex-col bg-[#FFFDFC] rounded-2xl overflow-hidden border border-[#E9B7BD]/30 hover:border-[#6E2948]/30 transition-all duration-300 hover:shadow-lg cursor-pointer"
      onClick={() => onSelectProduct(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-3/4 w-full overflow-hidden bg-[#F5D9DC]/20">
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#42172F] text-[#F5D9DC] shadow-xs">
              {product.badge}
            </span>
          )}
          {product.compareAtPrice && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#C9687D] text-white shadow-xs">
              SAVE {Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleWishlistClick}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-200 z-10 ${
            isWishlisted
              ? 'bg-[#42172F] text-[#E9B7BD] shadow-md scale-105'
              : 'bg-white/85 text-[#42172F] hover:bg-white hover:text-[#C9687D] shadow-xs'
          }`}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className="w-4 h-4 transition-transform duration-200"
            fill={isWishlisted ? '#E9B7BD' : 'none'}
            strokeWidth={isWishlisted ? 2.5 : 2}
          />
        </button>

        {/* Quick View Button Hover Overlay (Desktop) */}
        <div className="absolute inset-x-3 bottom-3 hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10">
          <button
            type="button"
            onClick={handleQuickViewClick}
            className="w-full py-2.5 px-4 rounded-xl bg-white/95 backdrop-blur-md text-[#42172F] hover:bg-[#42172F] hover:text-white text-xs font-semibold tracking-wider uppercase shadow-md transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-[11px] uppercase tracking-wider text-[#B9965B] font-medium">
            {product.categoryLabel}
          </span>
          <div className="flex items-center gap-1 text-[#B9965B] text-xs">
            <Star className="w-3 h-3 fill-[#B9965B]" />
            <span className="font-medium text-[#27232A] text-[11px]">{product.rating.toFixed(1)}</span>
            <span className="text-[#746D70] text-[10px]">({product.reviewCount})</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif text-base sm:text-lg font-bold text-[#42172F] line-clamp-1 group-hover:text-[#6E2948] transition-colors mb-2">
          {product.name}
        </h3>

        {/* Pricing */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-sm sm:text-base font-bold text-[#42172F] tracking-tight">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-xs text-[#746D70] line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>

        {/* Color swatches preview */}
        <div className="flex items-center gap-1.5 mb-4">
          {product.colors.map((c, i) => (
            <span
              key={i}
              title={c.name}
              className={`w-3.5 h-3.5 rounded-full border border-gray-300 ${c.bgClass}`}
            />
          ))}
          <span className="text-[10px] text-[#746D70] ml-1">
            {product.sizes.length} sizes
          </span>
        </div>

        {/* Action Button */}
        <div className="mt-auto pt-2 border-t border-gray-100 flex items-center gap-2">
          <button
            type="button"
            onClick={handleQuickAdd}
            className={`w-full py-2.5 px-3 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 ${
              justAdded
                ? 'bg-[#94A38E] text-white shadow-xs'
                : 'bg-[#F5D9DC]/70 hover:bg-[#42172F] text-[#42172F] hover:text-white'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{justAdded ? 'Added to Bag' : 'Add to Bag'}</span>
          </button>
        </div>
      </div>
    </article>
  );
};
