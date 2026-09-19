import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site';

interface FinalCTAProps {
  onOpenConsultation: () => void;
}

export function FinalCTA({ onOpenConsultation }: FinalCTAProps) {
  const handleWhatsAppFinal = () => {
    const text = encodeURIComponent(
      `Halo, saya ingin konsultasi gratis mengenai pembuatan Web Hadiah 3D di ${siteConfig.brandName}.`
    );
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#090D16] to-[#0c101c] relative overflow-hidden border-t border-slate-800/60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0,transparent_75%)] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>MULAI BUAT KEJUTANMU SEKARANG</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Playfair_Display',serif] mb-6 max-w-3xl mx-auto leading-tight">
          Ada cerita yang ingin kamu buat lebih berkesan?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Ceritakan momennya. Kami bantu mengubahnya menjadi hadiah digital yang bisa dibuka, dilihat, dan dikenang.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleWhatsAppFinal}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/30 flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 text-emerald-950" />
            <span>Konsultasi Gratis via WhatsApp</span>
          </button>

          <a
            href="#template"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-base flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <span>Lihat Template</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
