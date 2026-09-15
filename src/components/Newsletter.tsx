import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setIsSubscribed(true);
  };

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-[#F5D9DC]/70 via-[#FBF7F2] to-[#FFFDFC] border border-[#E9B7BD]/50 p-8 sm:p-14 lg:p-16 text-center overflow-hidden shadow-sm">
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#E9B7BD]/20 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-[#F5D9DC]/30 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="font-script text-3xl text-[#C9687D] mb-1">
            Stay in the Style Circle
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#42172F] tracking-tight mb-3">
            Privileged Access & Curations
          </h2>

          <p className="text-sm sm:text-base text-[#746D70] mb-8 leading-relaxed">
            Be the first to discover new collections, limited edits, and exclusive offers delivered directly to your inbox.
          </p>

          {isSubscribed ? (
            <div className="bg-[#FFFDFC] p-6 rounded-2xl border border-[#94A38E]/50 max-w-md mx-auto shadow-xs text-center">
              <CheckCircle2 className="w-8 h-8 text-[#94A38E] mx-auto mb-2" />
              <h3 className="font-serif text-xl font-bold text-[#42172F]">Welcome to NOORÉA</h3>
              <p className="text-xs text-[#746D70] mt-1">
                Thank you for subscribing. Use code <span className="font-bold text-[#6E2948] bg-[#F5D9DC] px-2 py-0.5 rounded">NOOREA10</span> at checkout for 10% off your first order!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#746D70]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white border border-[#E9B7BD]/60 focus:border-[#6E2948] focus:outline-hidden text-sm text-[#27232A] placeholder:text-[#746D70]/60 shadow-2xs"
                  />
                </div>
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-full bg-[#42172F] hover:bg-[#6E2948] text-[#FFFDFC] text-xs font-semibold tracking-widest uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                >
                  <span>SUBSCRIBE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {error && (
                <p className="text-xs text-[#C9687D] mt-2 text-left sm:text-center font-medium">
                  {error}
                </p>
              )}

              <p className="text-[11px] text-[#746D70] mt-4">
                By subscribing, you agree to receive occasional updates from us. You may unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
