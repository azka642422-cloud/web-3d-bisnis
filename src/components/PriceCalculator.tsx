import { useState } from 'react';
import { MessageCircle, Sliders } from 'lucide-react';
import { calculatePrice, formatIDR, pricingConfig } from '../config/pricing';

interface PriceCalculatorProps {
  onOrderWithDetails: (photoCount: number, estimatedPrice: number) => void;
}

export function PriceCalculator({ onOrderWithDetails }: PriceCalculatorProps) {
  const [photoCount, setPhotoCount] = useState<number>(7);

  const { estimatedPrice, additionalBlocks } = calculatePrice(photoCount);

  const handleOrder = () => {
    onOrderWithDetails(photoCount, estimatedPrice);
  };

  return (
    <section id="kalkulator" className="py-24 bg-[#0c101c] relative border-t border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3 block">
            SIMULASI BIAYA
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Playfair_Display',serif] mb-4">
            Kalkulator Estimasi Harga
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Sesuaikan jumlah foto yang ingin kamu tampilkan dan ketahui estimasi biayanya secara instan.
          </p>
        </div>

        {/* Calculator Box */}
        <div className="bg-[#131b2e] border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls */}
            <div className="md:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <label htmlFor="photo-slider" className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-amber-400" />
                  <span>Jumlah Foto yang Digunakan</span>
                </label>
                <span className="px-3 py-1 rounded-xl bg-amber-500/25 text-amber-300 font-bold text-sm border border-amber-500/40">
                  {photoCount} Foto
                </span>
              </div>

              {/* Slider Input */}
              <input
                id="photo-slider"
                type="range"
                min="1"
                max="50"
                value={photoCount}
                onChange={(e) => setPhotoCount(parseInt(e.target.value) || 1)}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />

              <div className="flex justify-between text-xs text-slate-400 font-mono">
                <span>1 Foto</span>
                <span>25 Foto</span>
                <span>50 Foto</span>
              </div>

              {/* Quick Preset Buttons */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[7, 15, 25, 35].map((count) => (
                  <button
                    key={count}
                    onClick={() => setPhotoCount(count)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      photoCount === count
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    {count} Foto
                  </button>
                ))}
              </div>

              <div className="text-xs text-slate-400 space-y-1 pt-2">
                <p>• Paket awal mencakup s.d. {pricingConfig.includedPhotos} foto ({formatIDR(pricingConfig.basePrice)}).</p>
                <p>• Setiap penambahan hingga 10 foto berikutnya dikenakan biaya {formatIDR(pricingConfig.additionalPhotoBlockPrice)}.</p>
              </div>
            </div>

            {/* Right Summary */}
            <div className="md:col-span-5 bg-gradient-to-br from-[#182236] to-[#0d1320] border border-amber-500/20 rounded-2xl p-6 flex flex-col justify-between text-center">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-300 block mb-2">
                  Estimasi Biaya Total
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-white font-['Playfair_Display',serif] my-3 text-amber-200">
                  {formatIDR(estimatedPrice)}
                </div>
                <div className="text-xs text-slate-300 mb-6">
                  Untuk <span className="font-bold text-white">{photoCount} foto</span> pilihan
                  {additionalBlocks > 0 && ` (${additionalBlocks} blok tambahan)`}
                </div>
              </div>

              <button
                onClick={handleOrder}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-950" />
                <span>Lanjutkan Pesanan</span>
              </button>
            </div>

          </div>

          {/* Note */}
          <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-400">
            <strong>Estimasi harga.</strong> Permintaan custom dapat memiliki biaya berbeda setelah konsultasi.
          </div>

        </div>

      </div>
    </section>
  );
}
