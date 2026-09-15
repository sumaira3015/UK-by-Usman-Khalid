import React, { useState } from 'react';
import { ChevronDown, Sparkles, Search, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/products';

export const FaqView: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState('');

  const filteredFaqs = FAQS.filter(
    (f) =>
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-12 sm:py-16 bg-[#FBF7F2] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-[#B9965B] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HELP & GUIDELINES</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#42172F] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-[#746D70] mt-2">
            Everything you need to know about shopping our lawn, unstitched, and ready-to-wear collections in Pakistan.
          </p>

          {/* FAQ Search Bar */}
          <div className="relative max-w-md mx-auto mt-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#746D70]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search delivery, payments, sizing..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-[#E9B7BD]/60 text-xs sm:text-sm focus:outline-hidden focus:border-[#42172F] shadow-2xs text-[#27232A]"
            />
          </div>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-3.5 mb-12">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl p-8 border border-[#E9B7BD]/40">
              <p className="font-serif text-xl font-bold text-[#42172F]">No matching questions found</p>
              <p className="text-xs text-[#746D70] mt-1">Try typing "COD", "shipping", or "exchange".</p>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-[#FFFDFC] rounded-2xl border border-[#E9B7BD]/40 overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-[#42172F] hover:text-[#6E2948] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#C9687D] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#746D70] leading-relaxed border-t border-gray-100">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions banner */}
        <div className="bg-[#F5D9DC]/40 border border-[#E9B7BD]/50 rounded-3xl p-6 sm:p-8 text-center">
          <h3 className="font-serif text-2xl font-bold text-[#42172F] mb-1">
            Still Have Questions?
          </h3>
          <p className="text-xs sm:text-sm text-[#746D70] mb-5 max-w-md mx-auto">
            Our styling and client support team is available on WhatsApp to assist with fabric choices and delivery updates.
          </p>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#42172F] hover:bg-[#6E2948] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-[#B9965B]" />
            <span>Connect with Concierge</span>
          </a>
        </div>
      </div>
    </div>
  );
};
