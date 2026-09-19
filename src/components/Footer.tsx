import { Gift, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/site';

export function Footer() {
  const handleWhatsAppFooter = () => {
    const text = encodeURIComponent(
      `Halo, saya ingin konsultasi mengenai pembuatan Web Hadiah 3D di ${siteConfig.brandName}.`
    );
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-[#070a13] border-t border-slate-800/80 py-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Brand & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-md">
                <Gift className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold font-['Playfair_Display',serif] text-white">
                {siteConfig.brandName}
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>

            <div className="pt-2">
              <button
                onClick={handleWhatsAppFooter}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {siteConfig.whatsappDisplay}</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-300 font-mono">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#beranda" className="hover:text-amber-300 transition-colors">Beranda</a></li>
              <li><a href="#tentang" className="hover:text-amber-300 transition-colors">Tentang Layanan</a></li>
              <li><a href="#template" className="hover:text-amber-300 transition-colors">Pilihan Template</a></li>
              <li><a href="#cara-pesan" className="hover:text-amber-300 transition-colors">Cara Pesan</a></li>
            </ul>
          </div>

          {/* Pricing & Support Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-300 font-mono">
              Informasi & Harga
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#harga" className="hover:text-amber-300 transition-colors">Paket Promo Launching</a></li>
              <li><a href="#kalkulator" className="hover:text-amber-300 transition-colors">Kalkulator Harga Foto</a></li>
              <li><a href="#faq" className="hover:text-amber-300 transition-colors">Pertanyaan Umum (FAQ)</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
          </div>
          <div className="text-slate-400 font-serif italic">
            "{siteConfig.tagline}"
          </div>
        </div>

      </div>
    </footer>
  );
}
