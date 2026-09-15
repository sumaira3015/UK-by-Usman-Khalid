/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { BenefitStrip } from './components/BenefitStrip';
import { NewArrivals } from './components/NewArrivals';
import { CategoryCards } from './components/CategoryCards';
import { EditorialSection } from './components/EditorialSection';
import { ColorMoodSection } from './components/ColorMoodSection';
import { Bestsellers } from './components/Bestsellers';
import { PromoBanner } from './components/PromoBanner';
import { Lookbook } from './components/Lookbook';
import { BrandStory } from './components/BrandStory';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';

import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { CheckoutModal } from './components/CheckoutModal';

import { ShopView } from './views/ShopView';
import { ProductDetailView } from './views/ProductDetailView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { FaqView } from './views/FaqView';

import { PRODUCTS } from './data/products';
import { Product, CartItem } from './types';

export default function App() {
  // Navigation State
  const [activeView, setActiveView] = useState<'home' | 'shop' | 'product-detail' | 'about' | 'contact' | 'faqs'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedMoodColor, setSelectedMoodColor] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Cart & Wishlist with LocalStorage fallback
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('uk_cart_v1') || localStorage.getItem('noorea_cart_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('uk_wishlist_v1') || localStorage.getItem('noorea_wishlist_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modal & Drawer visibility
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Promo Code State
  const [discountCode, setDiscountCode] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState(0);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Persist cart to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('uk_cart_v1', JSON.stringify(cartItems));
    } catch {
      // Storage unavailable or quota exceeded
    }
  }, [cartItems]);

  // Persist wishlist to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('uk_wishlist_v1', JSON.stringify(wishlistIds));
    } catch {
      // Storage unavailable
    }
  }, [wishlistIds]);

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView, selectedProduct]);

  // Cart Management
  const handleAddToCart = (
    product: Product,
    selectedSize: string = 'M',
    selectedColor: string = product.colors[0]?.name || 'Standard',
    quantity: number = 1
  ) => {
    const itemId = `${product.id}-${selectedSize}-${selectedColor}`;
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id: itemId,
          product,
          quantity,
          selectedSize,
          selectedColor,
        },
      ];
    });

    showToast(`Added "${product.name}" (${selectedSize}) to bag`);
  };

  const handleBuyNow = (
    product: Product,
    selectedSize: string = 'M',
    selectedColor: string = product.colors[0]?.name || 'Standard',
    quantity: number = 1
  ) => {
    handleAddToCart(product, selectedSize, selectedColor, quantity);
    setIsCheckoutOpen(true);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Wishlist Management
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(product.id);
      if (exists) {
        showToast(`Removed "${product.name}" from wishlist`);
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Saved "${product.name}" to wishlist`);
        return [...prev, product.id];
      }
    });
  };

  const handleRemoveWishlist = (productId: string) => {
    setWishlistIds((prev) => prev.filter((id) => id !== productId));
  };

  // Promo Code Validation
  const handleApplyDiscount = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === 'UK10' || clean === 'USMAN10' || clean === 'NOOREA10') {
      setDiscountCode('UK10');
      setDiscountPercentage(10);
      return true;
    }
    if (clean === 'EID2026' || clean === 'FESTIVE15') {
      setDiscountCode(clean);
      setDiscountPercentage(15);
      return true;
    }
    return false;
  };

  // Navigation Handlers
  const navigateToHome = () => {
    setActiveView('home');
    setSelectedCategory('');
    setSelectedMoodColor('');
    setSelectedProduct(null);
  };

  const navigateToShop = (category: string = '', mood: string = '') => {
    setSelectedCategory(category);
    setSelectedMoodColor(mood);
    setSelectedProduct(null);
    setActiveView('shop');
  };

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setActiveView('product-detail');
  };

  const navigateToAbout = () => {
    setActiveView('about');
    setSelectedProduct(null);
  };

  const navigateToContact = () => {
    setActiveView('contact');
    setSelectedProduct(null);
  };

  const navigateToFaqs = () => {
    setActiveView('faqs');
    setSelectedProduct(null);
  };

  // Cart Calculations for Checkout
  const FREE_SHIPPING_THRESHOLD = 5000;
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercentage) / 100);
  const discountedSubtotal = subtotal - discountAmount;
  const isFreeShipping = discountedSubtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingFee = cartItems.length === 0 ? 0 : isFreeShipping ? 0 : 250;
  const total = discountedSubtotal + shippingFee;

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDFC] text-[#27232A] selection:bg-[#F5D9DC] selection:text-[#42172F]">
      {/* 1. Global Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Global Header */}
      <Header
        activeView={activeView}
        selectedCategory={selectedCategory}
        onNavigateHome={navigateToHome}
        onNavigateShop={navigateToShop}
        onNavigateAbout={navigateToAbout}
        onNavigateContact={navigateToContact}
        onNavigateFaqs={navigateToFaqs}
        cartCount={cartItems.reduce((acc, it) => acc + it.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 3. Main Dynamic Content */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            {/* Hero Banner with Slides */}
            <Hero
              onShopCollection={() => navigateToShop('')}
              onExploreLawn={() => navigateToShop('lawn')}
              onSelectProduct={navigateToProduct}
            />

            {/* Nationwide Trust Strip */}
            <BenefitStrip />

            {/* New Arrivals with Category Tabs */}
            <NewArrivals
              products={PRODUCTS}
              onQuickView={(p) => setQuickViewProduct(p)}
              onSelectProduct={navigateToProduct}
              onAddToCart={(p, sz, col) => handleAddToCart(p, sz, col, 1)}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlistIds}
              onViewAll={() => navigateToShop('')}
            />

            {/* Category Cards with Hover Glow */}
            <CategoryCards onSelectCategory={(cat) => navigateToShop(cat)} />

            {/* Editorial Showcase with Hotspots */}
            <EditorialSection
              onQuickView={(p) => setQuickViewProduct(p)}
              onShopCollection={() => navigateToShop('lawn')}
            />

            {/* Shop by Color Mood Palette */}
            <ColorMoodSection onSelectMood={(mood) => navigateToShop('', mood)} />

            {/* Trending Bestsellers Carousel / Grid */}
            <Bestsellers
              products={PRODUCTS}
              onQuickView={(p) => setQuickViewProduct(p)}
              onSelectProduct={navigateToProduct}
              onAddToCart={(p, sz, col) => handleAddToCart(p, sz, col, 1)}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlistIds}
              onViewAll={() => navigateToShop('')}
            />

            {/* Seasonal Promotional Banner */}
            <PromoBanner onShopFestive={() => navigateToShop('festive')} />

            {/* Interactive Lookbook */}
            <Lookbook onQuickView={(p) => setQuickViewProduct(p)} />

            {/* Brand Story & Heritage */}
            <BrandStory onLearnMore={navigateToAbout} />

            {/* Customer Testimonials & Verified Reviews */}
            <Testimonials />

            {/* VIP Club Newsletter */}
            <Newsletter />
          </>
        )}

        {activeView === 'shop' && (
          <ShopView
            products={PRODUCTS}
            initialCategory={selectedCategory}
            initialMood={selectedMoodColor}
            onQuickView={(p) => setQuickViewProduct(p)}
            onSelectProduct={navigateToProduct}
            onAddToCart={(p, sz, col) => handleAddToCart(p, sz, col, 1)}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            onNavigateHome={navigateToHome}
          />
        )}

        {activeView === 'product-detail' && selectedProduct && (
          <ProductDetailView
            product={selectedProduct}
            allProducts={PRODUCTS}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={wishlistIds.includes(selectedProduct.id)}
            onSelectProduct={navigateToProduct}
            onBackToShop={() => navigateToShop(selectedProduct.category)}
            onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
            wishlistIds={wishlistIds}
          />
        )}

        {activeView === 'about' && (
          <AboutView onShopClick={() => navigateToShop('')} />
        )}

        {activeView === 'contact' && (
          <ContactView />
        )}

        {activeView === 'faqs' && (
          <FaqView />
        )}
      </main>

      {/* 4. Global Footer */}
      <Footer
        onNavigateHome={navigateToHome}
        onNavigateShop={navigateToShop}
        onNavigateAbout={navigateToAbout}
        onNavigateContact={navigateToContact}
        onNavigateFaqs={navigateToFaqs}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* 5. Modals and Slide-out Drawers */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={quickViewProduct ? wishlistIds.includes(quickViewProduct.id) : false}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onContinueShopping={() => {
          setIsCartOpen(false);
          navigateToShop('');
        }}
        discountCode={discountCode}
        onApplyDiscount={handleApplyDiscount}
        discountPercentage={discountPercentage}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        products={PRODUCTS}
        wishlistIds={wishlistIds}
        onRemoveWishlist={handleRemoveWishlist}
        onAddToCart={(p, sz, col) => {
          handleAddToCart(p, sz, col, 1);
          setIsWishlistOpen(false);
          setIsCartOpen(true);
        }}
        onSelectProduct={(p) => {
          setIsWishlistOpen(false);
          navigateToProduct(p);
        }}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={navigateToProduct}
      />

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        subtotal={subtotal}
        discountAmount={discountAmount}
        shippingFee={shippingFee}
        total={total}
        onOrderSuccess={() => {
          setCartItems([]);
          localStorage.removeItem('uk_cart_v1');
          localStorage.removeItem('noorea_cart_v1');
        }}
      />

      {/* Floating Action / Toast feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#42172F] text-white px-5 py-3 rounded-2xl shadow-xl border border-[#E9B7BD]/40 text-xs font-medium flex items-center gap-2 animate-bounce-short">
          <span className="w-2 h-2 rounded-full bg-[#94A38E]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
