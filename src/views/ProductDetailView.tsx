import React, { useState } from 'react';
import { Star, Heart, ShoppingBag, Truck, ShieldCheck, ArrowLeft, Check, Sparkles, ChevronRight, Share2 } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';

interface ProductDetailViewProps {
  product: Product;
  allProducts: Product[];
  onAddToCart: (product: Product, size: string, color: string, quantity: number) => void;
  onBuyNow: (product: Product, size: string, color: string, quantity: number) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
  onSelectProduct: (product: Product) => void;
  onBackToShop: () => void;
  onOpenSizeGuide: () => void;
  wishlistIds: string[];
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  allProducts,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isWishlisted,
  onSelectProduct,
  onBackToShop,
  onOpenSizeGuide,
  wishlistIds,
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'care' | 'delivery' | 'reviews'>('description');
  const [addedNotice, setAddedNotice] = useState(false);

  const formatPrice = (val: number) => `PKR ${val.toLocaleString('en-PK')}`;

  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id && (p.category === product.category || p.featured))
    .slice(0, 4);

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  const handleBuyNow = () => {
    onBuyNow(product, selectedSize, selectedColor, quantity);
  };

  return (
    <div className="py-8 sm:py-12 bg-[#FBF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between mb-6 text-xs text-[#746D70]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2">
            <button type="button" onClick={onBackToShop} className="hover:text-[#42172F] flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Shop</span>
            </button>
            <span>/</span>
            <span className="capitalize text-[#42172F]">{product.category.replace('-', ' ')}</span>
            <span>/</span>
            <span className="font-semibold text-[#6E2948] truncate max-w-[200px]">{product.name}</span>
          </nav>

          <button
            type="button"
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: product.name, url: window.location.href });
              }
            }}
            className="flex items-center gap-1.5 hover:text-[#42172F]"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-[#FFFDFC] rounded-3xl sm:rounded-[36px] p-6 sm:p-10 border border-[#E9B7BD]/40 shadow-sm mb-16">
          {/* Left Column: Gallery (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex sm:flex-col gap-2.5 overflow-x-auto sm:overflow-y-auto sm:w-24 shrink-0">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(idx)}
                    className={`w-18 h-24 sm:w-20 sm:h-28 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                      selectedImage === idx
                        ? 'border-[#42172F] shadow-sm scale-102'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Main Featured Image */}
            <div className="relative flex-1 rounded-2xl sm:rounded-3xl overflow-hidden aspect-3/4 max-h-[640px] bg-[#F5D9DC]/20 border border-[#E9B7BD]/30 shadow-inner">
              <img
                src={product.images[selectedImage] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {product.badge && (
                <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#42172F] text-[#F5D9DC] shadow-sm">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Right Column: Garment Specs & Ordering (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-widest text-[#B9965B] font-semibold">
                  {product.categoryLabel}
                </span>
                <div className="flex items-center gap-1 text-[#B9965B] text-xs">
                  <Star className="w-4 h-4 fill-[#B9965B]" />
                  <span className="font-bold text-[#27232A]">{product.rating.toFixed(1)}</span>
                  <span className="text-[#746D70]">({product.reviewCount} reviews)</span>
                </div>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#42172F] tracking-tight mb-3">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-2xl sm:text-3xl font-bold text-[#42172F] tracking-tight">
                  {formatPrice(product.price)}
                </span>
                {product.compareAtPrice && (
                  <span className="text-base text-[#746D70] line-through">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                )}
                {product.compareAtPrice && (
                  <span className="px-2 py-0.5 rounded-full bg-[#F5D9DC] text-[#6E2948] text-xs font-bold uppercase">
                    Save PKR {(product.compareAtPrice - product.price).toLocaleString()}
                  </span>
                )}
              </div>

              <p className="text-sm text-[#746D70] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Color Swatches */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="font-semibold text-[#42172F]">Signature Shade:</span>
                  <span className="text-[#6E2948] font-bold">{selectedColor}</span>
                </div>
                <div className="flex gap-2.5">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs transition-all ${
                        selectedColor === c.name
                          ? 'border-[#42172F] bg-[#F5D9DC]/40 text-[#42172F] font-bold'
                          : 'border-gray-200 text-[#746D70] hover:border-gray-300'
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-full ${c.bgClass} border border-black/10`} />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="font-semibold text-[#42172F]">Select Size:</span>
                  <button
                    type="button"
                    onClick={onOpenSizeGuide}
                    className="text-[#6E2948] hover:underline font-semibold flex items-center gap-1"
                  >
                    <span>View Size Guide</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-12 py-2.5 px-3.5 rounded-xl border text-xs font-semibold tracking-wider transition-all ${
                        selectedSize === size
                          ? 'border-[#42172F] bg-[#42172F] text-white shadow-xs'
                          : 'border-[#E9B7BD]/60 text-[#42172F] hover:bg-[#F5D9DC]/30'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-[#E9B7BD]/60 rounded-xl bg-[#FBF7F2]">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3.5 py-2.5 text-[#42172F] hover:bg-[#F5D9DC]/40 rounded-l-xl text-sm font-bold"
                    >
                      -
                    </button>
                    <span className="px-3.5 py-2.5 text-xs font-bold text-[#42172F]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3.5 py-2.5 text-[#42172F] hover:bg-[#F5D9DC]/40 rounded-r-xl text-sm font-bold"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className={`flex-1 py-3.5 px-6 rounded-xl text-xs font-semibold tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2 ${
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
                    <Heart className="w-5 h-5" fill={isWishlisted ? '#E9B7BD' : 'none'} />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="w-full py-3 px-6 rounded-xl bg-[#F5D9DC] hover:bg-[#E9B7BD] text-[#42172F] text-xs font-bold tracking-widest uppercase transition-colors"
                >
                  Buy Now • Instant Checkout
                </button>
              </div>

              {/* Benefits Highlights */}
              <div className="pt-4 border-t border-gray-100 space-y-2 text-xs text-[#746D70]">
                <div className="flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-[#B9965B]" />
                  <span>Complimentary Nationwide Delivery on Orders Above PKR 5,000</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#B9965B]" />
                  <span>Cash on Delivery (COD) across all cities in Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs & Accordion Section */}
        <div className="bg-[#FFFDFC] rounded-3xl p-6 sm:p-10 border border-[#E9B7BD]/40 shadow-xs mb-16">
          <div className="flex border-b border-[#E9B7BD]/40 gap-6 sm:gap-8 overflow-x-auto text-xs sm:text-sm font-semibold mb-6">
            <button
              type="button"
              onClick={() => setActiveTab('description')}
              className={`pb-3 border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'description'
                  ? 'border-[#42172F] text-[#42172F]'
                  : 'border-transparent text-[#746D70] hover:text-[#42172F]'
              }`}
            >
              Fabric Cut & Details
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('care')}
              className={`pb-3 border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'care'
                  ? 'border-[#42172F] text-[#42172F]'
                  : 'border-transparent text-[#746D70] hover:text-[#42172F]'
              }`}
            >
              Fabric Care & Laundry
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('delivery')}
              className={`pb-3 border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'delivery'
                  ? 'border-[#42172F] text-[#42172F]'
                  : 'border-transparent text-[#746D70] hover:text-[#42172F]'
              }`}
            >
              Delivery & Shipping
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('reviews')}
              className={`pb-3 border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'reviews'
                  ? 'border-[#42172F] text-[#42172F]'
                  : 'border-transparent text-[#746D70] hover:text-[#42172F]'
              }`}
            >
              Client Reviews ({product.reviewCount})
            </button>
          </div>

          {/* Tab Content */}
          <div className="text-sm text-[#746D70] leading-relaxed">
            {activeTab === 'description' && (
              <div className="space-y-4">
                <p>{product.description}</p>
                {product.details && product.details.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h3 className="font-serif text-base font-bold text-[#42172F] mb-3">Ensemble Breakdown:</h3>
                    <ul className="space-y-1.5 list-disc list-inside text-xs">
                      {product.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'care' && (
              <div className="space-y-3 text-xs sm:text-sm">
                <p>
                  <strong>Maintenance Advice:</strong> {product.fabricCare}
                </p>
                <p>
                  Do not shrink or soak embroidered garments in water with bleaching agents. Always iron printed lawn fabrics on the reverse side on low to medium steam heat to maintain fiber luster.
                </p>
              </div>
            )}

            {activeTab === 'delivery' && (
              <div className="space-y-3 text-xs sm:text-sm">
                <p>
                  {product.deliveryInfo}
                </p>
                <div className="p-4 rounded-2xl bg-[#FBF7F2] border border-[#E9B7BD]/40 mt-3">
                  <h4 className="font-bold text-[#42172F] mb-1">Exchange Policy:</h4>
                  <p className="text-xs">
                    7-day return and exchange window. Garments must be unworn with all tags and original presentation packaging intact.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex text-[#B9965B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#B9965B]" />
                    ))}
                  </div>
                  <span className="font-serif text-xl font-bold text-[#42172F]">{product.rating.toFixed(1)} out of 5</span>
                  <span className="text-xs text-[#746D70]">Based on {product.reviewCount} verified client ratings</span>
                </div>

                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="p-4 rounded-2xl bg-[#FBF7F2] border border-gray-100 text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-[#42172F]">Maryam Z. (Lahore)</span>
                      <span className="text-[#B9965B]">★★★★★</span>
                    </div>
                    <p className="text-[#746D70]">
                      The fabric has an exceptionally soft touch, and the embroidery on the neckline is so fine and neat. Highly recommended!
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FBF7F2] border border-gray-100 text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-[#42172F]">Fatima N. (Karachi)</span>
                      <span className="text-[#B9965B]">★★★★★</span>
                    </div>
                    <p className="text-[#746D70]">
                      Delivery arrived in 2 days in Karachi via TCS. Beautiful luxury presentation box.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* You May Also Like */}
        <div>
          <div className="flex items-center justify-between mb-8 border-b border-[#E9B7BD]/30 pb-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#42172F]">
              You May Also Like
            </h3>
            <button
              type="button"
              onClick={onBackToShop}
              className="text-xs font-semibold uppercase tracking-wider text-[#6E2948] hover:text-[#42172F]"
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard
                key={rel.id}
                product={rel}
                onQuickView={() => onSelectProduct(rel)}
                onSelectProduct={onSelectProduct}
                onAddToCart={(p, sz, col) => onAddToCart(p, sz, col, 1)}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlistIds.includes(rel.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
