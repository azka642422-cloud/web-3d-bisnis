import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { pricingConfig } from '../config/pricing';
import { siteConfig } from '../config/site';

interface PricingSectionProps {
  onOpenConsultation: () => void;
}

export function PricingSection({ onOpenConsultation }: PricingSectionProps) {
  const handleWhatsAppPricing = () => {
    const text = encodeURIComponent(
      `Halo, saya ingin memesan paket ${pricingConfig.promoLabel} seharga Rp10.000 di ${siteConfig.brandName}. Mohon informasi selanjutnya.`
    );
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  const features = [
    '1 Web hadiah digital interaktif',
    'Pilihan template sinematik',
    'Maksimal 7 foto untuk paket awal',
    'Pesan atau surat cinta personal',
    'Animasi 3D & efek visual',
    'Background music & request backsound',
    'Link personal siap dibagikan',
    'Optimal dibuka di semua HP',
  ];

  return (
    <section id="harga" className="py-24 bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3 block">
            INVESTASI KESAN TERBAIK
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Playfair_Display',serif] mb-4">
            Harga Spesial Launching
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {pricingConfig.promoSubtext} Penawaran terbaik untuk memberikan kejutan tak terlupakan.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-xl mx-auto bg-gradient-to-br from-[#131b2e] to-[#0c1220] border-2 border-amber-500/40 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Top glowing banner */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-600 text-slate-950 text-xs font-extrabold px-6 py-1.5 rounded-bl-2xl shadow-md uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{pricingConfig.promoLabel}</span>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white font-['Playfair_Display',serif] mb-2">
              Paket Eksklusif Digital 3D
            </h3>
            <p className="text-xs text-slate-300">
              Cocok untuk segala momen: pasangan, wisuda, ulang tahun, maupun pernikahan.
            </p>
          </div>

          {/* Price display */}
          <div className="mb-8 pb-8 border-b border-slate-800 flex items-baseline gap-2">
            <span className="text-xs text-slate-400 font-medium">Mulai dari</span>
            <span className="text-4xl sm:text-5xl font-extrabold text-amber-300 font-['Playfair_Display',serif]">
              Rp10.000
            </span>
            <span className="text-xs text-slate-400">/ web gift</span>
          </div>

          {/* Additional info badge */}
          <div className="mb-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-center justify-between">
            <span>Penambahan foto berikutnya:</span>
            <span className="font-bold text-amber-300">+10 foto — Rp5.000</span>
          </div>

          {/* Features list */}
          <div className="space-y-3.5 mb-10">
            {features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-sm text-slate-200 font-medium">{feat}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={onOpenConsultation}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 transition-all group"
          >
            <span>Konsultasi & Pesan Sekarang</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-[11px] text-slate-400 text-center mt-4">
            Tidak ada biaya tersembunyi. Konsultasi awal gratis via WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
}
