import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { HeroVisual } from './HeroVisual';
import { siteConfig } from '../config/site';
import { formatIDR, pricingConfig } from '../config/pricing';

interface HeroProps {
  onOpenConsultation: () => void;
}

export function Hero({ onOpenConsultation }: HeroProps) {
  const handleWhatsAppHero = () => {
    const text = encodeURIComponent(
      `Halo, saya tertarik berkonsultasi mengenai pembuatan Web Hadiah 3D di ${siteConfig.brandName}.`
    );
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="beranda" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background radial lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{siteConfig.tagline}</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 font-['Playfair_Display',serif]">
              Bukan Sekadar Ucapan.{' '}
              <span className="block mt-2 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Buat Mereka Masuk ke Dalam Ceritanya.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-10">
              {siteConfig.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#template"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 group"
              >
                <span>Lihat Contoh</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={handleWhatsAppHero}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900/90 hover:bg-slate-800 text-amber-300 border border-amber-500/30 hover:border-amber-500/60 font-semibold text-base transition-all flex items-center justify-center gap-2.5 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>Konsultasi via WhatsApp</span>
              </button>
            </div>

            {/* Trust highlights */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Buka langsung di HP</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>Musik & Animasi 3D</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span>Promo Launching {formatIDR(pricingConfig.basePrice)}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Graphic */}
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
