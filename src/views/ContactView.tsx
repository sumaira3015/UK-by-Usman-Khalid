import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import { heroFashionImg } from '../data/products';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Order Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in your name, email, and message.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16 bg-[#FBF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-[#B9965B] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CLIENT CONCIERGE</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#42172F] tracking-tight">
            Let’s Talk
          </h1>
          <p className="text-sm sm:text-base text-[#746D70] mt-2">
            Whether you have a query regarding sizing, styling advice, or order tracking across Pakistan, our concierge team is at your service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-[#FFFDFC] rounded-3xl sm:rounded-[36px] p-6 sm:p-12 border border-[#E9B7BD]/40 shadow-sm">
          {/* Left Column: Contact Form (7 cols on lg) */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-2xl font-bold text-[#42172F] mb-6">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="bg-[#F5D9DC]/30 border border-[#94A38E]/50 rounded-2xl p-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#94A38E] mx-auto mb-3" />
                <h3 className="font-serif text-2xl font-bold text-[#42172F] mb-1">Message Received</h3>
                <p className="text-sm text-[#746D70] max-w-md mx-auto mb-6">
                  Thank you, <strong>{formData.name}</strong>. Our personal shopping concierge will get back to you within 2 to 4 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: 'Order Inquiry', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#42172F] text-white text-xs font-semibold uppercase tracking-wider"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {error && (
                  <p className="p-3 rounded-xl bg-red-50 text-red-600 font-medium">
                    {error}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#42172F] font-semibold mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ayesha Khan"
                      className="w-full px-4 py-3 rounded-xl border border-[#E9B7BD]/60 bg-white text-sm focus:outline-hidden focus:border-[#42172F]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#42172F] font-semibold mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ayesha@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#E9B7BD]/60 bg-white text-sm focus:outline-hidden focus:border-[#42172F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#42172F] font-semibold mb-1.5">Mobile / WhatsApp Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 1234567"
                      className="w-full px-4 py-3 rounded-xl border border-[#E9B7BD]/60 bg-white text-sm focus:outline-hidden focus:border-[#42172F]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#42172F] font-semibold mb-1.5">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E9B7BD]/60 bg-white text-sm focus:outline-hidden focus:border-[#42172F]"
                    >
                      <option value="Order Inquiry">Order Inquiry & Tracking</option>
                      <option value="Sizing Advice">Sizing & Tailoring Advice</option>
                      <option value="Exchanges">Returns & Exchanges</option>
                      <option value="Bridal Customization">Festive & Custom Inquiries</option>
                      <option value="General Feedback">General Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#42172F] font-semibold mb-1.5">Your Message *</label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How may we assist you today?"
                    className="w-full px-4 py-3 rounded-xl border border-[#E9B7BD]/60 bg-white text-sm focus:outline-hidden focus:border-[#42172F]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-4 rounded-full bg-[#42172F] hover:bg-[#6E2948] text-white text-xs font-semibold tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>SEND MESSAGE</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Details & Map Info (5 cols on lg) */}
          <div className="lg:col-span-5 bg-[#FBF7F2] rounded-2xl p-6 sm:p-8 border border-[#E9B7BD]/40 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#42172F] mb-1">
                  Flagship Boutique & Store
                </h3>
                <p className="text-xs text-[#746D70]">
                  Visit our physical store for personal styling and fabric drape consultations.
                </p>
              </div>

              <div className="space-y-4 text-xs text-[#27232A]">
                <div className="flex gap-3">
                  <MapPin className="w-4 h-4 text-[#B9965B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#42172F] block">Lahore Boutique & Store:</strong>
                    <span>Shahdara Town, Main Bazar, Lahore, Pakistan</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="w-4 h-4 text-[#B9965B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#42172F] block">Direct Concierge / WhatsApp:</strong>
                    <a href="tel:03220011325" className="hover:text-[#6E2948] transition-colors block">
                      0322 0011325 (+92 322 0011325)
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail className="w-4 h-4 text-[#B9965B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#42172F] block">Email Support:</strong>
                    <a href="mailto:care@ukbyusmankhalid.com" className="hover:text-[#6E2948] transition-colors">
                      care@ukbyusmankhalid.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock className="w-4 h-4 text-[#B9965B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#42172F] block">Client Hours:</strong>
                    <span>Monday – Saturday: 10:00 AM – 8:00 PM PST</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Help Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/923220011325"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd5a] text-white text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp (0322 0011325)</span>
                </a>
              </div>
            </div>

            {/* Campaign atmosphere image */}
            <div className="mt-6 rounded-2xl overflow-hidden aspect-16/9 border border-white/60 shadow-xs">
              <img
                src={heroFashionImg}
                alt="UK by Usman Khalid Fashion"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
