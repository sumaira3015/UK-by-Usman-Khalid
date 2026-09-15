import React from 'react';
import { Sparkles, Compass, ShieldCheck, Truck } from 'lucide-react';

export const BenefitStrip: React.FC = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: 'Premium Fabrics',
      description: 'Comfortable fabrics, thoughtfully selected',
      highlight: '100% Combed Lawn'
    },
    {
      icon: Compass,
      title: 'Elegant Designs',
      description: 'Contemporary silhouettes with timeless appeal',
      highlight: 'Artisanal Embroidery'
    },
    {
      icon: ShieldCheck,
      title: 'Secure Shopping',
      description: 'Safe and reliable checkout experience',
      highlight: 'Encrypted & Guaranteed'
    },
    {
      icon: Truck,
      title: 'Easy Delivery',
      description: 'Fast delivery across Pakistan with COD',
      highlight: 'Free over PKR 5,000'
    }
  ];

  return (
    <section className="bg-[#FFFDFC] border-y border-[#E9B7BD]/30 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 sm:gap-4 p-2"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F5D9DC]/60 border border-[#E9B7BD]/40 flex items-center justify-center text-[#6E2948] shrink-0 shadow-2xs">
                  <Icon className="w-5 h-5 text-[#6E2948]" strokeWidth={1.75} />
                </div>
                <div>
                  <h2 className="font-serif text-base sm:text-lg font-semibold text-[#42172F] tracking-tight mb-1">
                    {item.title}
                  </h2>
                  <p className="text-xs text-[#746D70] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
