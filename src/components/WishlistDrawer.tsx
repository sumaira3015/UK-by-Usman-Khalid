import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  wishlistIds: string[];
  onRemoveWishlist: (productId: string) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  products,
  wishlistIds,
  onRemoveWishlist,
  onAddToCart,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  const wishlistedProducts = products.filter((p) => wishlistIds.includes(p.id));
  const formatPrice = (val: number) => `PKR ${val.toLocaleString('en-PK')}`;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="fixed inset-0 bg-[#27232A]/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-[#FFFDFC] h-full shadow-2xl flex flex-col z-10 border-l border-[#E9B7BD]/30">
        {/* Header */}
        <div className="p-5 border-b border-[#E9B7BD]/30 flex items-center justify-between bg-[#FBF7F2]">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#C9687D]" fill="#C9687D" />
            <h2 className="font-serif text-xl font-bold text-[#42172F]">Saved Favorites</h2>
            <span className="text-xs bg-[#42172F] text-white px-2 py-0.5 rounded-full font-semibold">
              {wishlistedProducts.length}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#42172F] hover:bg-[#F5D9DC]/50 transition-colors"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {wishlistedProducts.length === 0 ? (
            <div className="text-center py-16 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#F5D9DC]/40 flex items-center justify-center text-[#C9687D] mb-4">
                <Heart className="w-8 h-8 opacity-60" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#42172F] mb-1">Your wishlist is empty</h3>
              <p className="text-xs text-[#746D70] max-w-xs mb-6">
                Save your favorite lawn ensembles and festive pieces by tapping the heart icon on any card.
              </p>
            </div>
          ) : (
            wishlistedProducts.map((product) => (
              <div
                key={product.id}
                className="flex gap-3.5 p-3 rounded-2xl bg-[#FBF7F2]/60 border border-[#E9B7BD]/30"
              >
                <div
                  className="w-20 h-24 rounded-xl overflow-hidden bg-white shrink-0 cursor-pointer"
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <h4
                        className="font-serif text-sm font-bold text-[#42172F] line-clamp-1 hover:text-[#6E2948] cursor-pointer"
                        onClick={() => {
                          onSelectProduct(product);
                          onClose();
                        }}
                      >
                        {product.name}
                      </h4>
                      <button
                        type="button"
                        onClick={() => onRemoveWishlist(product.id)}
                        className="text-[#746D70] hover:text-[#C9687D] p-1"
                        aria-label="Remove from wishlist"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-xs font-bold text-[#42172F] mt-1">
                      {formatPrice(product.price)}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      onAddToCart(product, product.sizes[0] || 'M', product.colors[0]?.name || 'Standard');
                    }}
                    className="mt-3 w-full py-1.5 px-3 rounded-lg bg-[#42172F] hover:bg-[#6E2948] text-white text-[11px] font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>Move to Bag</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
