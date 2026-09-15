import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard, Banknote, Building2, Sparkles, ArrowRight, Printer } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotal: number;
  discountAmount: number;
  shippingFee: number;
  total: number;
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  subtotal,
  discountAmount,
  shippingFee,
  total,
  onOrderSuccess,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Lahore',
    postalCode: '',
    notes: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card' | 'bank'>('cod');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const pakistaniCities = [
    'Lahore', 'Karachi', 'Islamabad', 'Rawalpindi', 'Faisalabad', 
    'Multan', 'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala', 
    'Hyderabad', 'Abbottabad', 'Bahawalpur', 'Sargodha', 'Sukkur'
  ];

  const formatPrice = (val: number) => `PKR ${val.toLocaleString('en-PK')}`;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Please enter a valid email address';
    if (!formData.phone.trim() || formData.phone.length < 10) errs.phone = 'Please enter a valid 11-digit phone number (e.g. 03001234567)';
    if (!formData.address.trim()) errs.address = 'Please provide your full delivery address';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = `NOR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setOrderId(generatedId);
      setIsSubmitting(false);
      setOrderConfirmed(true);
      onOrderSuccess();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#27232A]/70 backdrop-blur-xs overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} />

      <div
        className="relative w-full max-w-3xl bg-[#FFFDFC] rounded-3xl shadow-2xl border border-[#E9B7BD]/40 overflow-hidden z-10 my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#E9B7BD]/30 bg-[#FBF7F2] flex items-center justify-between">
          <div>
            <span className="font-serif text-2xl font-bold text-[#42172F]">UK by Usman Khalid</span>
            <span className="text-xs text-[#B9965B] block uppercase tracking-widest font-semibold">
              Checkout & Delivery Concierge
            </span>
          </div>

          {!orderConfirmed && (
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full text-[#746D70] hover:bg-[#F5D9DC]/40"
              aria-label="Close checkout"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {orderConfirmed ? (
          /* Confirmation Screen */
          <div className="p-6 sm:p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-[#94A38E]/20 text-[#94A38E] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5D9DC] text-[#6E2948] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Order Successfully Received</span>
            </div>

            <h2 className="font-serif text-3xl font-bold text-[#42172F] mb-1">
              Thank You, {formData.fullName}!
            </h2>

            <p className="text-sm text-[#746D70] max-w-md mx-auto mb-6">
              Your order has been logged into our order dispatch queue. A confirmation SMS and email have been dispatched to <strong>{formData.phone}</strong>.
            </p>

            {/* Order Slip Card */}
            <div className="bg-[#FBF7F2] border border-[#E9B7BD]/50 rounded-2xl p-5 max-w-md mx-auto text-left mb-6 text-xs space-y-2">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-[#746D70]">Order Reference:</span>
                <span className="font-mono font-bold text-[#42172F] text-sm">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#746D70]">Payment Method:</span>
                <span className="font-semibold text-[#42172F] uppercase">
                  {paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : paymentMethod === 'card' ? 'Online Card' : 'Direct Bank Transfer'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#746D70]">Delivery To:</span>
                <span className="font-semibold text-[#42172F] text-right truncate max-w-[200px]">
                  {formData.address}, {formData.city}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#746D70]">Estimated Delivery:</span>
                <span className="font-semibold text-[#94A38E]">3-4 Business Days via TCS Express</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-200 font-bold text-sm text-[#42172F]">
                <span>Payable Amount:</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-6 py-3 rounded-full border border-gray-300 text-xs font-semibold text-[#42172F] hover:bg-gray-50 flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print Receipt</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="px-8 py-3 rounded-full bg-[#42172F] hover:bg-[#6E2948] text-white text-xs font-semibold tracking-wider uppercase shadow-md transition-colors"
              >
                Return to Boutique
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmitOrder} className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Form details (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#42172F] mb-3">
                    1. Shipping & Contact Information
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block text-[#42172F] font-semibold mb-1">Full Name *</label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Ayesha Khan"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9B7BD]/60 bg-white text-sm focus:outline-hidden focus:border-[#42172F]"
                      />
                      {errors.fullName && <p className="text-red-500 text-[11px] mt-1">{errors.fullName}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[#42172F] font-semibold mb-1">Email Address *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ayesha@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9B7BD]/60 bg-white text-sm focus:outline-hidden focus:border-[#42172F]"
                        />
                        {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-[#42172F] font-semibold mb-1">Mobile / WhatsApp (+92) *</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="0322 0011325"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9B7BD]/60 bg-white text-sm focus:outline-hidden focus:border-[#42172F]"
                        />
                        {errors.phone && <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#42172F] font-semibold mb-1">Street Address & House No. *</label>
                      <textarea
                        rows={2}
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="House / Apartment number, Street, Phase, Area"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9B7BD]/60 bg-white text-sm focus:outline-hidden focus:border-[#42172F]"
                      />
                      {errors.address && <p className="text-red-500 text-[11px] mt-1">{errors.address}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[#42172F] font-semibold mb-1">City *</label>
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9B7BD]/60 bg-white text-sm focus:outline-hidden focus:border-[#42172F]"
                        >
                          {pakistaniCities.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[#42172F] font-semibold mb-1">Postal Code</label>
                        <input
                          type="text"
                          value={formData.postalCode}
                          onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                          placeholder="e.g. 54000"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9B7BD]/60 bg-white text-sm focus:outline-hidden focus:border-[#42172F]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#42172F] mb-3">
                    2. Select Payment Method
                  </h3>

                  <div className="space-y-2.5">
                    <label
                      className={`flex items-center gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        paymentMethod === 'cod'
                          ? 'border-[#42172F] bg-[#F5D9DC]/30 shadow-2xs'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'cod'}
                        onChange={() => setPaymentMethod('cod')}
                        className="text-[#42172F]"
                      />
                      <Banknote className="w-5 h-5 text-[#6E2948]" />
                      <div className="text-xs flex-1">
                        <span className="font-bold text-[#42172F] block">Cash on Delivery (COD)</span>
                        <span className="text-[#746D70]">Pay cash upon parcel arrival at your doorstep</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase text-[#94A38E] bg-[#94A38E]/20 px-2 py-0.5 rounded">
                        Most Popular
                      </span>
                    </label>

                    <label
                      className={`flex items-center gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        paymentMethod === 'card'
                          ? 'border-[#42172F] bg-[#F5D9DC]/30 shadow-2xs'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="text-[#42172F]"
                      />
                      <CreditCard className="w-5 h-5 text-[#6E2948]" />
                      <div className="text-xs">
                        <span className="font-bold text-[#42172F] block">Credit / Debit Card</span>
                        <span className="text-[#746D70]">Visa, Mastercard, PayPak (3D Secure)</span>
                      </div>
                    </label>

                    <label
                      className={`flex items-center gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        paymentMethod === 'bank'
                          ? 'border-[#42172F] bg-[#F5D9DC]/30 shadow-2xs'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'bank'}
                        onChange={() => setPaymentMethod('bank')}
                        className="text-[#42172F]"
                      />
                      <Building2 className="w-5 h-5 text-[#6E2948]" />
                      <div className="text-xs">
                        <span className="font-bold text-[#42172F] block">Direct Bank Transfer</span>
                        <span className="text-[#746D70]">HBL, Meezan Bank, Bank Alfalah, Raast</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Right Column: Order Summary (5 cols) */}
              <div className="lg:col-span-5 bg-[#FBF7F2] p-5 rounded-2xl border border-[#E9B7BD]/30 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold text-[#42172F] mb-3">
                    Order Summary ({items.length} items)
                  </h3>

                  <div className="max-h-48 overflow-y-auto space-y-2.5 mb-4 pr-1">
                    {items.map((it) => (
                      <div key={it.id} className="flex gap-2.5 text-xs">
                        <img
                          src={it.product.images[0]}
                          alt={it.product.name}
                          className="w-12 h-14 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-serif font-bold text-[#42172F] truncate">{it.product.name}</p>
                          <p className="text-[11px] text-[#746D70]">Qty: {it.quantity} • Size: {it.selectedSize}</p>
                          <p className="font-semibold text-[#6E2948]">{formatPrice(it.product.price * it.quantity)}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 text-xs pt-3 border-t border-[#E9B7BD]/40 text-[#746D70]">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-[#42172F] font-semibold">{formatPrice(subtotal)}</span>
                    </div>

                    {discountAmount > 0 && (
                      <div className="flex justify-between text-[#94A38E]">
                        <span>Discount Applied</span>
                        <span>-{formatPrice(discountAmount)}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span>Nationwide Delivery</span>
                      <span>
                        {shippingFee === 0 ? (
                          <strong className="text-[#94A38E]">Complimentary</strong>
                        ) : (
                          formatPrice(shippingFee)
                        )}
                      </span>
                    </div>

                    <div className="flex justify-between pt-2 border-t border-gray-200 text-sm font-bold text-[#42172F]">
                      <span>Grand Total</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-full bg-[#42172F] hover:bg-[#6E2948] text-white text-xs font-semibold tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Securing Order...</span>
                    ) : (
                      <>
                        <span>PLACE ORDER • {formatPrice(total)}</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-[#746D70]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B9965B]" />
                    <span>7-Day Return & Exchange Guarantee across Pakistan</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
