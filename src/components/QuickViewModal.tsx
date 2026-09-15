import React, { useState } from 'react';
import { X, Star, Heart, ShoppingBag, Check, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string, quantity: number) => void;
  onBuyNow: (product: Product, size: string, color: string, quantity: number) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
  onOpenSizeGuide: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isWishlisted,
  onOpenSizeGuide,
}) => {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  const formatPrice = (val: number) => `PKR ${val.toLocaleString('en-PK')}`;

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 1800);
  };

  const handleBuy = () => {
    onBuyNow(product, selectedSize, selectedColor, quantity);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#27232A]/60 backdrop-blur-sm transition-opacity duration-300 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#FFFDFC] rounded-3xl shadow-2xl border border-[#E9B7BD]/40 overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 text-[#42172F] hover:bg-[#42172F] hover:text-white flex items-center justify-center shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Product Images */}
          <div className="p-6 bg-[#FBF7F2] flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden aspect-3/4 max-h-[460px] bg-white border border-[#E9B7BD]/30 shadow-inner">
              <img
                src={product.images[selectedImage] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#42172F] text-[#F5D9DC]">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail Selector */}
            {product.images.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-20 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                      selectedImage === idx ? 'border-[#6E2948] scale-102 shadow-xs' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} angle ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details & Options */}
          <div className="p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh]">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-widest text-[#B9965B] font-semibold">
                  {product.categoryLabel}
                </span>
                <div className="flex items-center gap-1 text-[#B9965B] text-xs">
                  <Star className="w-3.5 h-3.5 fill-[#B9965B]" />
                  <span className="font-semibold text-[#27232A]">{product.rating.toFixed(1)}</span>
                  <span className="text-[#746D70]">({product.reviewCount} reviews)</span>
                </div>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#42172F] leading-tight mb-2">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-xl sm:text-2xl font-bold text-[#42172F]">
                  {formatPrice(product.price)}
                </span>
                {product.compareAtPrice && (
                  <span className="text-sm text-[#746D70] line-through">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-[#746D70] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Color Selection */}
              <div className="mb-5">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-[#42172F]">Color:</span>
                  <span className="text-[#746D70]">{selectedColor}</span>
                </div>
                <div className="flex gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs transition-all ${
                        selectedColor === c.name
                          ? 'border-[#42172F] bg-[#F5D9DC]/40 text-[#42172F] font-semibold'
                          : 'border-gray-200 text-[#746D70] hover:border-gray-300'
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-full ${c.bgClass} border border-black/10`} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-[#42172F]">Select Size:</span>
                  <button
                    type="button"
                    onClick={onOpenSizeGuide}
                    className="text-[#6E2948] hover:underline font-medium"
                  >
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-11 py-2 px-3 rounded-xl border text-xs font-semibold tracking-wider transition-all ${
                        selectedSize === size
                          ? 'border-[#42172F] bg-[#42172F] text-white shadow-xs'
                          : 'border-[#E9B7BD]/50 text-[#42172F] hover:bg-[#F5D9DC]/30'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center border border-[#E9B7BD]/60 rounded-xl bg-[#FBF7F2]">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-[#42172F] hover:bg-[#F5D9DC]/40 rounded-l-xl text-sm font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-xs font-bold text-[#42172F]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-[#42172F] hover:bg-[#F5D9DC]/40 rounded-r-xl text-sm font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAdd}
                  className={`flex-1 py-3.5 px-4 rounded-xl text-xs font-semibold tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2 ${
                    addedNotice
                      ? 'bg-[#94A38E] text-white'
                      : 'bg-[#42172F] hover:bg-[#6E2948] text-white'
                  }`}
                >
                  {addedNotice ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                  <span>{addedNotice ? 'Added to Bag!' : 'Add to Bag'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onToggleWishlist(product)}
                  className={`p-3.5 rounded-xl border transition-all ${
                    isWishlisted
                      ? 'bg-[#42172F] text-[#E9B7BD] border-[#42172F]'
                      : 'border-[#E9B7BD]/60 text-[#42172F] hover:bg-[#F5D9DC]/30'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart
                    className="w-4 h-4"
                    fill={isWishlisted ? '#E9B7BD' : 'none'}
                  />
                </button>
              </div>

              <button
                type="button"
                onClick={handleBuy}
                className="w-full py-3 px-4 rounded-xl bg-[#F5D9DC] hover:bg-[#E9B7BD] text-[#42172F] text-xs font-bold tracking-widest uppercase transition-colors"
              >
                Buy Now with 1-Click
              </button>
            </div>

            {/* Micro Benefits Strip */}
            <div className="mt-6 pt-4 border-t border-gray-100 grid grid-cols-2 gap-3 text-[11px] text-[#746D70]">
              <div className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-[#B9965B]" />
                <span>Complimentary Delivery over PKR 5,000</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B9965B]" />
                <span>Cash on Delivery across Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
