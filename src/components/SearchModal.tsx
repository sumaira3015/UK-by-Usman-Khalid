import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const popularTerms = ['Lawn 3-Piece', 'Ivory Bloom', 'Ready to Wear', 'Blush Rose', 'Embroidered', 'Festive Zari'];

  const results = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
          (p.moodColor && p.moodColor.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const formatPrice = (val: number) => `PKR ${val.toLocaleString('en-PK')}`;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#27232A]/60 backdrop-blur-sm">
      <div
        className="fixed inset-0"
        onClick={onClose}
      />

      <div
        className="relative w-full max-w-2xl bg-[#FFFDFC] rounded-3xl shadow-2xl border border-[#E9B7BD]/50 overflow-hidden z-10 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center justify-between border-b border-[#E9B7BD]/30 pb-4 mb-5">
          <div className="flex items-center gap-3 flex-1">
            <Search className="w-5 h-5 text-[#6E2948]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by lawn, embroidery, color, silhouette..."
              className="w-full text-base sm:text-lg bg-transparent text-[#42172F] placeholder:text-[#746D70]/60 focus:outline-hidden"
            />
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-[#746D70] hover:text-[#42172F] hover:bg-[#F5D9DC]/40 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular searches suggestions */}
        {!query.trim() && (
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B9965B] block mb-3">
              Popular Searches
            </span>
            <div className="flex flex-wrap gap-2 mb-6">
              {popularTerms.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setQuery(term)}
                  className="px-3.5 py-1.5 rounded-full bg-[#FBF7F2] hover:bg-[#F5D9DC]/60 text-xs text-[#42172F] border border-[#E9B7BD]/40 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#F5D9DC]/20 border border-[#E9B7BD]/30 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-[#B9965B] shrink-0" />
              <p className="text-xs text-[#746D70]">
                Explore high-grade combed lawn 3-piece sets, ready-to-wear kurtas, and luxury festive edits.
              </p>
            </div>
          </div>
        )}

        {/* Results List */}
        {query.trim() && (
          <div className="max-h-96 overflow-y-auto space-y-2.5 pr-1">
            <div className="text-xs text-[#746D70] mb-2 font-medium">
              Found {results.length} piece{results.length === 1 ? '' : 's'} matching "{query}"
            </div>

            {results.length === 0 ? (
              <div className="text-center py-12">
                <p className="font-serif text-lg font-bold text-[#42172F]">No matching pieces found</p>
                <p className="text-xs text-[#746D70] mt-1">
                  Try searching for general keywords like "lawn", "rose", "festive", or "silk".
                </p>
              </div>
            ) : (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center gap-4 p-2.5 rounded-2xl hover:bg-[#FBF7F2] border border-transparent hover:border-[#E9B7BD]/40 cursor-pointer transition-colors"
                >
                  <div className="w-14 h-16 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase font-semibold text-[#B9965B] tracking-wider block">
                      {product.categoryLabel}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-[#42172F] truncate">
                      {product.name}
                    </h4>
                    <span className="text-xs font-bold text-[#6E2948]">
                      {formatPrice(product.price)}
                    </span>
                  </div>

                  <ArrowRight className="w-4 h-4 text-[#746D70] opacity-60" />
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
