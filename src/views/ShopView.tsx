import React, { useState, useMemo } from 'react';
import { Filter, X, ChevronDown, SlidersHorizontal, ArrowUpDown, Sparkles, Check } from 'lucide-react';
import { Product, FilterState } from '../types';
import { ProductCard } from '../components/ProductCard';
import { MOOD_COLORS } from '../data/products';

interface ShopViewProps {
  products: Product[];
  initialCategory?: string;
  initialMood?: string;
  onQuickView: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  onNavigateHome: () => void;
}

export const ShopView: React.FC<ShopViewProps> = ({
  products,
  initialCategory = '',
  initialMood = '',
  onQuickView,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onNavigateHome,
}) => {
  const [filters, setFilters] = useState<FilterState>({
    category: initialCategory,
    minPrice: 0,
    maxPrice: 10000,
    size: '',
    color: '',
    moodColor: initialMood,
    inStockOnly: false,
    sortBy: 'featured',
    searchQuery: '',
  });

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync initial props
  React.useEffect(() => {
    if (initialCategory !== undefined) {
      setFilters((prev) => ({ ...prev, category: initialCategory }));
    }
  }, [initialCategory]);

  React.useEffect(() => {
    if (initialMood !== undefined) {
      setFilters((prev) => ({ ...prev, moodColor: initialMood }));
    }
  }, [initialMood]);

  const categories = [
    { id: '', name: 'All Collections' },
    { id: 'lawn', name: 'Lawn Collection' },
    { id: 'ready-to-wear', name: 'Ready to Wear' },
    { id: 'festive', name: 'Festive Edit' },
    { id: 'accessories', name: 'Accessories' },
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'Unstitched'];

  // Filter and Sort logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category
        if (filters.category && product.category !== filters.category) return false;
        // Mood / Color
        if (filters.moodColor && product.moodColor !== filters.moodColor) return false;
        // Size
        if (filters.size && !product.sizes.includes(filters.size as any)) return false;
        // Price
        if (product.price < filters.minPrice || product.price > filters.maxPrice) return false;
        // Search
        if (
          filters.searchQuery &&
          !product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
          !product.description.toLowerCase().includes(filters.searchQuery.toLowerCase())
        ) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (filters.sortBy === 'newest') return (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0);
        if (filters.sortBy === 'price-asc') return a.price - b.price;
        if (filters.sortBy === 'price-desc') return b.price - a.price;
        if (filters.sortBy === 'rating') return b.rating - a.rating;
        // featured default
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [products, filters]);

  const clearAllFilters = () => {
    setFilters({
      category: '',
      minPrice: 0,
      maxPrice: 10000,
      size: '',
      color: '',
      moodColor: '',
      inStockOnly: false,
      sortBy: 'featured',
      searchQuery: '',
    });
  };

  const hasActiveFilters =
    filters.category !== '' ||
    filters.size !== '' ||
    filters.moodColor !== '' ||
    filters.maxPrice < 10000;

  return (
    <div className="py-8 sm:py-12 bg-[#FBF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#746D70] mb-4">
          <button type="button" onClick={onNavigateHome} className="hover:text-[#42172F]">
            Home
          </button>
          <span>/</span>
          <span className="text-[#42172F] font-medium">Shop</span>
          {filters.category && (
            <>
              <span>/</span>
              <span className="capitalize font-semibold text-[#6E2948]">{filters.category.replace('-', ' ')}</span>
            </>
          )}
          {filters.moodColor && (
            <>
              <span>/</span>
              <span className="font-semibold text-[#6E2948]">{filters.moodColor}</span>
            </>
          )}
        </nav>

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E9B7BD]/30 pb-6 mb-8 gap-4">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#42172F] tracking-tight">
              Shop the Collection
            </h1>
            <p className="text-xs sm:text-sm text-[#746D70] mt-1.5">
              Showing {filteredProducts.length} curated design{filteredProducts.length === 1 ? '' : 's'} across Pakistan
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile Filter Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#E9B7BD]/50 text-xs font-semibold text-[#42172F]"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters {hasActiveFilters && '• Active'}</span>
            </button>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as any })}
                className="appearance-none bg-white border border-[#E9B7BD]/50 rounded-full py-2.5 pl-4 pr-9 text-xs font-semibold text-[#42172F] focus:outline-hidden cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="newest">Sort: Newest First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-3.5 top-1/2 -translate-y-1/2 text-[#746D70] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Active filter badges */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-6 text-xs">
            <span className="text-[#746D70]">Active Filters:</span>
            {filters.category && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5D9DC] text-[#6E2948] font-medium">
                {filters.category.replace('-', ' ')}
                <X
                  className="w-3 h-3 cursor-pointer"
                  onClick={() => setFilters({ ...filters, category: '' })}
                />
              </span>
            )}
            {filters.moodColor && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5D9DC] text-[#6E2948] font-medium">
                Color: {filters.moodColor}
                <X
                  className="w-3 h-3 cursor-pointer"
                  onClick={() => setFilters({ ...filters, moodColor: '' })}
                />
              </span>
            )}
            {filters.size && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5D9DC] text-[#6E2948] font-medium">
                Size: {filters.size}
                <X
                  className="w-3 h-3 cursor-pointer"
                  onClick={() => setFilters({ ...filters, size: '' })}
                />
              </span>
            )}
            {filters.maxPrice < 10000 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5D9DC] text-[#6E2948] font-medium">
                Under PKR {filters.maxPrice.toLocaleString()}
                <X
                  className="w-3 h-3 cursor-pointer"
                  onClick={() => setFilters({ ...filters, maxPrice: 10000 })}
                />
              </span>
            )}
            <button
              type="button"
              onClick={clearAllFilters}
              className="text-[#C9687D] hover:underline font-semibold ml-2"
            >
              Reset All
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Left Sidebar Filters (3 cols) */}
          <aside className="hidden lg:block lg:col-span-3 bg-[#FFFDFC] p-6 rounded-3xl border border-[#E9B7BD]/40 sticky top-24 shadow-2xs space-y-6">
            <div className="flex items-center justify-between border-b border-[#E9B7BD]/30 pb-3">
              <h2 className="font-serif text-lg font-bold text-[#42172F]">Refine Selection</h2>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="text-xs text-[#C9687D] hover:underline font-semibold"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#B9965B] mb-2.5">
                Collection
              </h3>
              <div className="space-y-1 text-xs">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setFilters({ ...filters, category: cat.id })}
                    className={`w-full text-left py-1.5 px-2.5 rounded-lg transition-colors flex items-center justify-between ${
                      filters.category === cat.id
                        ? 'bg-[#F5D9DC] text-[#42172F] font-bold'
                        : 'text-[#746D70] hover:text-[#42172F] hover:bg-[#FBF7F2]'
                    }`}
                  >
                    <span>{cat.name}</span>
                    {filters.category === cat.id && <Check className="w-3.5 h-3.5 text-[#6E2948]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Signature Shades Filter */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#B9965B] mb-2.5">
                Signature Shade
              </h3>
              <div className="grid grid-cols-2 gap-1.5 text-xs">
                {MOOD_COLORS.map((mood) => (
                  <button
                    key={mood.name}
                    type="button"
                    onClick={() =>
                      setFilters({
                        ...filters,
                        moodColor: filters.moodColor === mood.name ? '' : mood.name,
                      })
                    }
                    className={`flex items-center gap-2 p-1.5 rounded-lg border text-left transition-all ${
                      filters.moodColor === mood.name
                        ? 'border-[#42172F] bg-[#F5D9DC]/40 font-bold text-[#42172F]'
                        : 'border-transparent text-[#746D70] hover:bg-[#FBF7F2]'
                    }`}
                  >
                    <span
                      className={`w-3.5 h-3.5 rounded-full border border-gray-300 ${mood.bgClass}`}
                    />
                    <span className="truncate">{mood.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#B9965B] mb-2.5">
                Size
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {sizes.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() =>
                      setFilters({ ...filters, size: filters.size === sz ? '' : sz })
                    }
                    className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                      filters.size === sz
                        ? 'border-[#42172F] bg-[#42172F] text-white shadow-2xs'
                        : 'border-[#E9B7BD]/50 text-[#42172F] hover:bg-[#F5D9DC]/30'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter Slider */}
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold uppercase tracking-wider text-[#B9965B]">Max Price</span>
                <span className="font-semibold text-[#42172F]">PKR {filters.maxPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={3000}
                max={10000}
                step={500}
                value={filters.maxPrice}
                onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
                className="w-full accent-[#42172F] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#746D70] mt-1">
                <span>PKR 3,000</span>
                <span>PKR 10,000</span>
              </div>
            </div>
          </aside>

          {/* Product Grid Area (9 cols) */}
          <main className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="bg-[#FFFDFC] rounded-3xl p-12 text-center border border-[#E9B7BD]/40 max-w-md mx-auto my-12">
                <p className="font-serif text-2xl font-bold text-[#42172F] mb-2">No matching pieces</p>
                <p className="text-xs text-[#746D70] mb-6">
                  Try clearing some filter tags to explore our wider collection.
                </p>
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="px-6 py-2.5 rounded-full bg-[#42172F] text-white text-xs font-semibold uppercase tracking-wider"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
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
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex justify-end lg:hidden">
          <div
            className="fixed inset-0 bg-[#27232A]/50 backdrop-blur-xs"
            onClick={() => setMobileFilterOpen(false)}
          />

          <div className="relative w-full max-w-xs bg-[#FFFDFC] h-full shadow-2xl flex flex-col z-10 p-6 overflow-y-auto space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <h2 className="font-serif text-xl font-bold text-[#42172F]">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 rounded-full text-gray-500 hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#B9965B] mb-2">Category</h3>
              <div className="space-y-1 text-xs">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setFilters({ ...filters, category: cat.id })}
                    className={`w-full text-left py-2 px-3 rounded-lg ${
                      filters.category === cat.id ? 'bg-[#F5D9DC] text-[#42172F] font-bold' : 'text-[#746D70]'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#B9965B] mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {sizes.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setFilters({ ...filters, size: filters.size === sz ? '' : sz })}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-semibold ${
                      filters.size === sz ? 'bg-[#42172F] text-white' : 'border-gray-200 text-[#42172F]'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileFilterOpen(false)}
              className="w-full py-3 rounded-full bg-[#42172F] text-white text-xs font-semibold tracking-wider uppercase mt-4"
            >
              Apply Filters ({filteredProducts.length})
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
