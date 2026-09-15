import React from 'react';
import { Sparkles, Phone, Mail, MapPin, Instagram, Facebook, Share2 } from 'lucide-react';
import { ActiveView } from '../types';

interface FooterProps {
  onNavigate?: (view: ActiveView, category?: string) => void;
  onNavigateHome?: () => void;
  onNavigateShop?: (category?: string) => void;
  onNavigateAbout?: () => void;
  onNavigateContact?: () => void;
  onNavigateFaqs?: () => void;
  onOpenSizeGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onNavigateHome,
  onNavigateShop,
  onNavigateAbout,
  onNavigateContact,
  onNavigateFaqs,
  onOpenSizeGuide,
}) => {
  const handleNav = (view: string, category?: string) => {
    if (onNavigate) {
      onNavigate(view as any, category);
      return;
    }
    if (view === 'home') {
      onNavigateHome?.();
    } else if (view === 'shop') {
      onNavigateShop?.(category || '');
    } else if (view === 'about') {
      onNavigateAbout?.();
    } else if (view === 'contact') {
      onNavigateContact?.();
    } else if (view === 'faq' || view === 'faqs') {
      onNavigateFaqs?.();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-[#42172F] text-[#FBF7F2] border-t border-[#6E2948] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#6E2948]">
          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="font-serif text-3xl font-bold tracking-[0.08em] text-[#FFFDFC] uppercase">
                UK <span className="font-light text-2xl lowercase tracking-normal italic text-[#B9965B]">by</span> Usman Khalid
              </span>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#B9965B] mt-0.5 font-medium">
                Clothing Brand • Lahore
              </p>
            </div>

            <p className="text-xs text-[#F5D9DC]/80 leading-relaxed max-w-sm">
              Discover thoughtfully designed lawn and women’s wear that brings together timeless Pakistani elegance, contemporary style, and everyday comfort.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-[#E9B7BD]">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#B9965B] shrink-0" />
                <span>Shahdara Town, Main Bazar, Lahore</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B9965B] shrink-0" />
                <a href="https://wa.me/923220011325" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Concierge & WhatsApp: 0322 0011325
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B9965B] shrink-0" />
                <a href="mailto:care@ukbyusmankhalid.com" className="hover:text-white transition-colors">
                  care@ukbyusmankhalid.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-[#FFFDFC] tracking-wider uppercase">
              Shop Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#F5D9DC]/80">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('shop', '')}
                  className="hover:text-[#FFFDFC] transition-colors"
                >
                  New Arrivals 2026
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('shop', 'lawn')}
                  className="hover:text-[#FFFDFC] transition-colors"
                >
                  Lawn 3-Piece Edit
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('shop', 'ready-to-wear')}
                  className="hover:text-[#FFFDFC] transition-colors"
                >
                  Ready to Wear Pret
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('shop', 'festive')}
                  className="hover:text-[#FFFDFC] transition-colors"
                >
                  Festive Silk & Zari
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('shop', 'accessories')}
                  className="hover:text-[#FFFDFC] transition-colors"
                >
                  Accessories & Shawls
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-[#FFFDFC] tracking-wider uppercase">
              Client Concierge
            </h4>
            <ul className="space-y-2 text-xs text-[#F5D9DC]/80">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#FFFDFC] transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('faq')}
                  className="hover:text-[#FFFDFC] transition-colors"
                >
                  Shipping & Delivery Info
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('faq')}
                  className="hover:text-[#FFFDFC] transition-colors"
                >
                  Exchange & Return Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenSizeGuide}
                  className="hover:text-[#FFFDFC] transition-colors"
                >
                  Interactive Size Guide
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('faq')}
                  className="hover:text-[#FFFDFC] transition-colors"
                >
                  FAQs & Order Tracking
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: About & Follow */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-bold text-[#FFFDFC] tracking-wider uppercase">
              The Maison
            </h4>
            <ul className="space-y-2 text-xs text-[#F5D9DC]/80">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about')}
                  className="hover:text-[#FFFDFC] transition-colors"
                >
                  Our Heritage Story
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('about')}
                  className="hover:text-[#FFFDFC] transition-colors"
                >
                  Artisan Communities
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#FFFDFC] transition-colors"
                >
                  Boutique Locations
                </button>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-widest text-[#B9965B] block mb-2 font-medium">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="#instagram"
                  className="w-8 h-8 rounded-full bg-[#6E2948] hover:bg-[#B9965B] flex items-center justify-center text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#facebook"
                  className="w-8 h-8 rounded-full bg-[#6E2948] hover:bg-[#B9965B] flex items-center justify-center text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#social"
                  className="w-8 h-8 rounded-full bg-[#6E2948] hover:bg-[#B9965B] flex items-center justify-center text-white transition-colors"
                  aria-label="Pinterest"
                >
                  <Share2 className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle gold line & Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5D9DC]/70">
          <p>© 2026 UK by Usman Khalid Clothing Brand. All rights reserved. Designed for Pakistani women’s fashion.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="w-1 h-1 rounded-full bg-[#B9965B]" />
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="w-1 h-1 rounded-full bg-[#B9965B]" />
            <span className="hover:text-white cursor-pointer">Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
