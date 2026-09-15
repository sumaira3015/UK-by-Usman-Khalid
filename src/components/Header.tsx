import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { ActiveView } from '../types';

interface HeaderProps {
  activeView: string;
  setActiveView?: (view: any) => void;
  selectedCategory?: string;
  setSelectedCategory?: (cat: string) => void;
  onNavigateHome?: () => void;
  onNavigateShop?: (category?: string, mood?: string) => void;
  onNavigateAbout?: () => void;
  onNavigateContact?: () => void;
  onNavigateFaqs?: () => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  setActiveView,
  selectedCategory = '',
  setSelectedCategory,
  onNavigateHome,
  onNavigateShop,
  onNavigateAbout,
  onNavigateContact,
  onNavigateFaqs,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: string, category?: string) => {
    if (category !== undefined && setSelectedCategory) {
      setSelectedCategory(category);
    }
    if (view === 'home') {
      if (onNavigateHome) onNavigateHome();
      else if (setActiveView) setActiveView('home');
    } else if (view === 'shop') {
      if (onNavigateShop) onNavigateShop(category || '');
      else if (setActiveView) setActiveView('shop');
    } else if (view === 'about') {
      if (onNavigateAbout) onNavigateAbout();
      else if (setActiveView) setActiveView('about');
    } else if (view === 'contact') {
      if (onNavigateContact) onNavigateContact();
      else if (setActiveView) setActiveView('contact');
    } else if (view === 'faqs' || view === 'faq') {
      if (onNavigateFaqs) onNavigateFaqs();
      else if (setActiveView) setActiveView('faqs');
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-[#FFFDFC]/95 backdrop-blur-md shadow-xs py-3 border-[#E9B7BD]/30'
            : 'bg-[#FBF7F2] py-4 md:py-5 border-[#E9B7BD]/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Hamburger Menu */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 -ml-2 text-[#42172F] hover:text-[#6E2948] focus:outline-hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-2 ml-1 text-[#42172F] hover:text-[#6E2948] focus:outline-hidden"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Brand Logo */}
            <div className="text-center lg:text-left flex-1 lg:flex-initial">
              <button
                type="button"
                onClick={() => handleNavClick('home')}
                className="inline-flex flex-col items-center lg:items-start group text-left focus:outline-hidden"
              >
                <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wide text-[#42172F] transition-colors duration-200 group-hover:text-[#6E2948]">
                  UK <span className="font-light text-lg sm:text-xl lowercase tracking-normal italic text-[#B9965B] font-serif">by</span> Usman Khalid
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#B9965B] -mt-0.5 font-medium">
                  Clothing Brand • Lahore
                </span>
              </button>
            </div>

            {/* Desktop Center Navigation */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
              <button
                type="button"
                onClick={() => handleNavClick('shop', '')}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#6E2948] relative py-1 ${
                  activeView === 'shop' && selectedCategory === ''
                    ? 'text-[#42172F] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#6E2948]'
                    : 'text-[#42172F]/80'
                }`}
              >
                All Collections
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('shop', 'lawn')}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#6E2948] relative py-1 ${
                  activeView === 'shop' && selectedCategory === 'lawn'
                    ? 'text-[#42172F] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#6E2948]'
                    : 'text-[#42172F]/80'
                }`}
              >
                Lawn Collection
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('shop', 'ready-to-wear')}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#6E2948] relative py-1 ${
                  activeView === 'shop' && selectedCategory === 'ready-to-wear'
                    ? 'text-[#42172F] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#6E2948]'
                    : 'text-[#42172F]/80'
                }`}
              >
                Ready to Wear
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('shop', 'festive')}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#6E2948] relative py-1 ${
                  activeView === 'shop' && selectedCategory === 'festive'
                    ? 'text-[#42172F] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#6E2948]'
                    : 'text-[#42172F]/80'
                }`}
              >
                Festive Edit
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('about')}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#6E2948] relative py-1 ${
                  activeView === 'about'
                    ? 'text-[#42172F] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#6E2948]'
                    : 'text-[#42172F]/80'
                }`}
              >
                Our Story
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('contact')}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#6E2948] relative py-1 ${
                  activeView === 'contact'
                    ? 'text-[#42172F] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#6E2948]'
                    : 'text-[#42172F]/80'
                }`}
              >
                Concierge
              </button>
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button
                type="button"
                onClick={onOpenSearch}
                className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E9B7BD]/40 text-xs text-[#746D70] hover:text-[#42172F] hover:border-[#6E2948]/40 transition-colors bg-white/60"
                aria-label="Search collection"
              >
                <Search className="w-3.5 h-3.5 text-[#6E2948]" />
                <span className="hidden xl:inline">Search lawn, festive...</span>
              </button>

              <button
                type="button"
                onClick={onOpenWishlist}
                className="relative p-2 text-[#42172F] hover:text-[#6E2948] transition-colors focus:outline-hidden"
                aria-label={`View wishlist (${wishlistCount} items)`}
              >
                <Heart className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
                {wishlistCount > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-[#C9687D] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                    {wishlistCount}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={onOpenCart}
                className="relative p-2 text-[#42172F] hover:text-[#6E2948] transition-colors focus:outline-hidden group"
                aria-label={`Shopping bag (${cartCount} items)`}
              >
                <ShoppingBag className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-[#42172F] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs group-hover:bg-[#6E2948] transition-colors">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#27232A]/50 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-4/5 max-w-xs bg-[#FFFDFC] h-full shadow-2xl flex flex-col z-10 border-r border-[#E9B7BD]/30">
            <div className="p-5 border-b border-[#E9B7BD]/30 flex items-center justify-between bg-[#FBF7F2]">
              <div>
                <span className="font-serif text-lg font-semibold tracking-[0.08em] text-[#42172F]">
                  UK <span className="font-light text-base lowercase tracking-normal italic text-[#B9965B]">by</span> Usman Khalid
                </span>
                <p className="text-[9px] uppercase tracking-widest text-[#B9965B]">Clothing Brand • Lahore</p>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full text-[#42172F] hover:bg-[#F5D9DC]/50 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 px-5 space-y-1">
              <button
                type="button"
                onClick={() => handleNavClick('home')}
                className="w-full flex items-center justify-between py-3 text-left text-sm font-medium text-[#42172F] border-b border-gray-100"
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-[#C9687D]" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('shop', '')}
                className="w-full flex items-center justify-between py-3 text-left text-sm font-medium text-[#42172F] border-b border-gray-100"
              >
                <span>All Collections</span>
                <ChevronRight className="w-4 h-4 text-[#C9687D]" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('shop', 'lawn')}
                className="w-full flex items-center justify-between py-3 text-left text-sm font-medium text-[#42172F] border-b border-gray-100"
              >
                <span>Lawn Collection</span>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-[#F5D9DC] text-[#6E2948]">
                  New
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('shop', 'ready-to-wear')}
                className="w-full flex items-center justify-between py-3 text-left text-sm font-medium text-[#42172F] border-b border-gray-100"
              >
                <span>Ready to Wear</span>
                <ChevronRight className="w-4 h-4 text-[#C9687D]" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('shop', 'festive')}
                className="w-full flex items-center justify-between py-3 text-left text-sm font-medium text-[#42172F] border-b border-gray-100"
              >
                <span>Festive Edit</span>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-[#42172F] text-[#F5D9DC]">
                  Luxury
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('about')}
                className="w-full flex items-center justify-between py-3 text-left text-sm font-medium text-[#42172F] border-b border-gray-100"
              >
                <span>Our Story</span>
                <ChevronRight className="w-4 h-4 text-[#C9687D]" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('faqs')}
                className="w-full flex items-center justify-between py-3 text-left text-sm font-medium text-[#42172F] border-b border-gray-100"
              >
                <span>Frequently Asked Questions</span>
                <ChevronRight className="w-4 h-4 text-[#C9687D]" />
              </button>

              <button
                type="button"
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-between py-3 text-left text-sm font-medium text-[#42172F] border-b border-gray-100"
              >
                <span>Contact & Concierge</span>
                <ChevronRight className="w-4 h-4 text-[#C9687D]" />
              </button>
            </div>

            <div className="p-5 border-t border-[#E9B7BD]/30 bg-[#FBF7F2] space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#746D70]">
                <Sparkles className="w-3.5 h-3.5 text-[#B9965B]" />
                <span>Complimentary Delivery over PKR 5,000</span>
              </div>
              <a
                href="https://wa.me/923220011325"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#42172F] font-medium hover:text-[#B9965B] transition-colors block"
              >
                WhatsApp / Call: 0322 0011325
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
