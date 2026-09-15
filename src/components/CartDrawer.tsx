import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Sparkles, Tag, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
  onContinueShopping: () => void;
  discountCode: string;
  onApplyDiscount: (code: string) => boolean;
  discountPercentage: number;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onContinueShopping,
  discountCode,
  onApplyDiscount,
  discountPercentage,
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState('');
  const [isError, setIsError] = useState(false);

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 5000;
  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercentage) / 100);
  const discountedSubtotal = subtotal - discountAmount;
  const isFreeShipping = discountedSubtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingFee = items.length === 0 ? 0 : isFreeShipping ? 0 : 250;
  const total = discountedSubtotal + shippingFee;
  const progressPercent = Math.min(100, Math.round((discountedSubtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const amountNeeded = Math.max(0, FREE_SHIPPING_THRESHOLD - discountedSubtotal);

  const formatPrice = (val: number) => `PKR ${val.toLocaleString('en-PK')}`;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const success = onApplyDiscount(promoInput.trim());
    if (success) {
      setPromoMessage('Promo code applied successfully!');
      setIsError(false);
    } else {
      setPromoMessage('Invalid promo code. Try NOOREA10');
      setIsError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#27232A]/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#FFFDFC] h-full shadow-2xl flex flex-col z-10 border-l border-[#E9B7BD]/30">
        {/* Header */}
        <div className="p-5 border-b border-[#E9B7BD]/30 flex items-center justify-between bg-[#FBF7F2]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#42172F]" />
            <h2 className="font-serif text-xl font-bold text-[#42172F]">Your Shopping Bag</h2>
            <span className="text-xs bg-[#42172F] text-white px-2 py-0.5 rounded-full font-semibold">
              {items.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#42172F] hover:bg-[#F5D9DC]/50 transition-colors"
            aria-label="Close bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="bg-[#F5D9DC]/30 p-3.5 border-b border-[#E9B7BD]/30">
          <div className="flex items-center justify-between text-xs mb-1.5 font-medium text-[#42172F]">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#B9965B]" />
              {isFreeShipping ? (
                <span className="font-semibold text-[#6E2948]">You qualify for Complimentary Delivery!</span>
              ) : (
                <span>
                  Add <strong className="text-[#6E2948]">{formatPrice(amountNeeded)}</strong> for Complimentary Delivery
                </span>
              )}
            </span>
            <span className="text-[11px] font-bold">{progressPercent}%</span>
          </div>
          <div className="w-full h-1.5 bg-white/70 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#C9687D] to-[#42172F] transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#F5D9DC]/40 flex items-center justify-center text-[#6E2948] mb-4">
                <ShoppingBag className="w-8 h-8 opacity-60" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#42172F] mb-1">Your bag is empty</h3>
              <p className="text-xs text-[#746D70] max-w-xs mb-6">
                Discover our Summer Lawn & Festive collections to add timeless elegance to your wardrobe.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onContinueShopping();
                }}
                className="px-6 py-3 rounded-full bg-[#42172F] hover:bg-[#6E2948] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                Shop New Arrivals
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3.5 p-3 rounded-2xl bg-[#FBF7F2]/60 border border-[#E9B7BD]/30"
              >
                {/* Thumbnail */}
                <div className="w-20 h-24 rounded-xl overflow-hidden bg-white shrink-0 border border-gray-100">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#42172F] line-clamp-1">
                        {item.product.name}
                      </h4>
                      <div className="flex items-center gap-2 text-[11px] text-[#746D70] mt-0.5">
                        <span>Size: <strong className="text-[#42172F]">{item.selectedSize}</strong></span>
                        <span>•</span>
                        <span>{item.selectedColor}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[#746D70] hover:text-[#C9687D] p-1 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-[#E9B7BD]/60 rounded-lg bg-white">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-0.5 text-xs font-bold text-[#42172F] hover:bg-[#F5D9DC]/30 rounded-l-lg"
                      >
                        -
                      </button>
                      <span className="px-2.5 py-0.5 text-xs font-bold text-[#42172F]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-0.5 text-xs font-bold text-[#42172F] hover:bg-[#F5D9DC]/30 rounded-r-lg"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-sm font-bold text-[#42172F]">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer calculation & actions */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#E9B7BD]/30 bg-[#FBF7F2] space-y-3">
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#746D70]" />
                <input
                  type="text"
                  placeholder="Promo Code (e.g. NOOREA10)"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 text-xs rounded-xl bg-white border border-[#E9B7BD]/60 uppercase focus:outline-hidden focus:border-[#6E2948]"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-[#42172F] text-white text-xs font-semibold hover:bg-[#6E2948] transition-colors"
              >
                Apply
              </button>
            </form>

            {promoMessage && (
              <p className={`text-[11px] font-medium ${isError ? 'text-[#C9687D]' : 'text-[#94A38E]'}`}>
                {promoMessage}
              </p>
            )}

            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs text-[#746D70] pt-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-[#42172F]">{formatPrice(subtotal)}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-[#94A38E]">
                  <span>Promo Discount ({discountPercentage}%)</span>
                  <span>-{formatPrice(discountAmount)}</span>
                </div>
              )}

              <div className="flex justify-between items-center">
                <span>Shipping across Pakistan</span>
                <span className="font-semibold text-[#42172F]">
                  {shippingFee === 0 ? (
                    <span className="text-[#94A38E] font-bold">Complimentary</span>
                  ) : (
                    formatPrice(shippingFee)
                  )}
                </span>
              </div>

              <div className="flex justify-between text-sm font-bold text-[#42172F] pt-2 border-t border-gray-200">
                <span>Estimated Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={onCheckout}
                className="w-full py-3.5 px-4 rounded-full bg-[#42172F] hover:bg-[#6E2948] text-white text-xs font-semibold tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onContinueShopping();
                }}
                className="w-full py-2.5 px-4 rounded-full border border-gray-300 text-xs font-semibold text-[#42172F] hover:bg-white transition-colors"
              >
                CONTINUE SHOPPING
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] text-[#746D70] pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B9965B]" />
              <span>Cash on Delivery & Secure Bank Transfers Accepted</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
