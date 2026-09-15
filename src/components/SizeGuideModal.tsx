import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const [unit, setUnit] = useState<'in' | 'cm'>('in');
  const [tab, setTab] = useState<'shirt' | 'trouser' | 'unstitched'>('shirt');

  if (!isOpen) return null;

  const shirtData = [
    { size: 'XS', bustIn: '36', bustCm: '91', waistIn: '34', waistCm: '86', hipIn: '38', hipCm: '96', lengthIn: '40', lengthCm: '101' },
    { size: 'S', bustIn: '38', bustCm: '96', waistIn: '36', waistCm: '91', hipIn: '40', hipCm: '101', lengthIn: '41', lengthCm: '104' },
    { size: 'M', bustIn: '40', bustCm: '101', waistIn: '38', waistCm: '96', hipIn: '43', hipCm: '109', lengthIn: '42', lengthCm: '106' },
    { size: 'L', bustIn: '43', bustCm: '109', waistIn: '41', waistCm: '104', hipIn: '46', hipCm: '117', lengthIn: '43', lengthCm: '109' },
    { size: 'XL', bustIn: '46', bustCm: '117', waistIn: '44', waistCm: '112', hipIn: '49', hipCm: '124', lengthIn: '44', lengthCm: '112' },
  ];

  const trouserData = [
    { size: 'XS', waistIn: '26-28', waistCm: '66-71', hipIn: '38', hipCm: '96', lengthIn: '37', lengthCm: '94' },
    { size: 'S', waistIn: '28-30', waistCm: '71-76', hipIn: '40', hipCm: '101', lengthIn: '38', lengthCm: '96' },
    { size: 'M', waistIn: '30-33', waistCm: '76-84', hipIn: '42', hipCm: '106', lengthIn: '38.5', lengthCm: '98' },
    { size: 'L', waistIn: '33-36', waistCm: '84-91', hipIn: '45', hipCm: '114', lengthIn: '39', lengthCm: '99' },
    { size: 'XL', waistIn: '36-39', waistCm: '91-99', hipIn: '48', hipCm: '122', lengthIn: '39.5', lengthCm: '100' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#27232A]/60 backdrop-blur-xs">
      <div className="fixed inset-0" onClick={onClose} />

      <div
        className="relative w-full max-w-2xl bg-[#FFFDFC] rounded-3xl shadow-2xl border border-[#E9B7BD]/40 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#E9B7BD]/30 pb-4 mb-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#42172F]">Interactive Size Guide</h2>
            <p className="text-xs text-[#746D70] mt-0.5">Accurate garment dimensions for tailored Pakistani silhouettes</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#746D70] hover:bg-[#F5D9DC]/40"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Units Toggle and Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex bg-[#FBF7F2] p-1 rounded-xl border border-[#E9B7BD]/40 text-xs">
            <button
              type="button"
              onClick={() => setTab('shirt')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                tab === 'shirt' ? 'bg-[#42172F] text-white' : 'text-[#42172F]'
              }`}
            >
              Ready to Wear Shirts
            </button>
            <button
              type="button"
              onClick={() => setTab('trouser')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                tab === 'trouser' ? 'bg-[#42172F] text-white' : 'text-[#42172F]'
              }`}
            >
              Trousers & Pants
            </button>
            <button
              type="button"
              onClick={() => setTab('unstitched')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                tab === 'unstitched' ? 'bg-[#42172F] text-white' : 'text-[#42172F]'
              }`}
            >
              Unstitched 3-Piece
            </button>
          </div>

          {tab !== 'unstitched' && (
            <div className="flex bg-white p-1 rounded-xl border border-[#E9B7BD]/50 text-xs">
              <button
                type="button"
                onClick={() => setUnit('in')}
                className={`px-2.5 py-1 rounded-lg font-bold ${unit === 'in' ? 'bg-[#6E2948] text-white' : 'text-[#746D70]'}`}
              >
                Inches
              </button>
              <button
                type="button"
                onClick={() => setUnit('cm')}
                className={`px-2.5 py-1 rounded-lg font-bold ${unit === 'cm' ? 'bg-[#6E2948] text-white' : 'text-[#746D70]'}`}
              >
                CM
              </button>
            </div>
          )}
        </div>

        {/* Table Content */}
        {tab === 'shirt' && (
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-[#E9B7BD]/50 bg-[#FBF7F2] text-[#42172F] font-serif">
                  <th className="py-3 px-3">Size</th>
                  <th className="py-3 px-3">Bust ({unit})</th>
                  <th className="py-3 px-3">Waist ({unit})</th>
                  <th className="py-3 px-3">Hip ({unit})</th>
                  <th className="py-3 px-3">Shirt Length ({unit})</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-[#27232A]">
                {shirtData.map((row) => (
                  <tr key={row.size} className="hover:bg-[#F5D9DC]/20">
                    <td className="py-3 px-3 font-bold text-[#42172F]">{row.size}</td>
                    <td className="py-3 px-3">{unit === 'in' ? row.bustIn : row.bustCm}</td>
                    <td className="py-3 px-3">{unit === 'in' ? row.waistIn : row.waistCm}</td>
                    <td className="py-3 px-3">{unit === 'in' ? row.hipIn : row.hipCm}</td>
                    <td className="py-3 px-3">{unit === 'in' ? row.lengthIn : row.lengthCm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === 'trouser' && (
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-[#E9B7BD]/50 bg-[#FBF7F2] text-[#42172F] font-serif">
                  <th className="py-3 px-3">Size</th>
                  <th className="py-3 px-3">Waist Elastic ({unit})</th>
                  <th className="py-3 px-3">Hip ({unit})</th>
                  <th className="py-3 px-3">Trouser Length ({unit})</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-[#27232A]">
                {trouserData.map((row) => (
                  <tr key={row.size} className="hover:bg-[#F5D9DC]/20">
                    <td className="py-3 px-3 font-bold text-[#42172F]">{row.size}</td>
                    <td className="py-3 px-3">{unit === 'in' ? row.waistIn : row.waistCm}</td>
                    <td className="py-3 px-3">{unit === 'in' ? row.hipIn : row.hipCm}</td>
                    <td className="py-3 px-3">{unit === 'in' ? row.lengthIn : row.lengthCm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === 'unstitched' && (
          <div className="space-y-3 text-xs text-[#27232A]">
            <div className="p-3.5 rounded-xl bg-[#FBF7F2] border border-[#E9B7BD]/30">
              <span className="font-bold text-[#42172F] block mb-1">Shirt Fabric:</span>
              <p className="text-[#746D70]">
                3.0 to 3.25 Meters full cut (Generous allowance suitable for straight kurtas, A-line kalidar silhouettes, and tailored sleeve cuffs).
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FBF7F2] border border-[#E9B7BD]/30">
              <span className="font-bold text-[#42172F] block mb-1">Trouser Fabric:</span>
              <p className="text-[#746D70]">
                2.5 Meters dyed solid cambric cotton (Suitable for culottes, shalwar, or cigarette pants).
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FBF7F2] border border-[#E9B7BD]/30">
              <span className="font-bold text-[#42172F] block mb-1">Dupatta:</span>
              <p className="text-[#746D70]">
                2.5 Meters pure silk chiffon, organza jacquard, or lightweight Swiss voile.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[11px] text-[#746D70]">
            Need personal guidance? Chat with our fashion concierge via WhatsApp.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#42172F] text-white text-xs font-semibold hover:bg-[#6E2948]"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
