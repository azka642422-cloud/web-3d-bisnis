import { Music, Headphones, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site';

export function MusicSection() {
  const handleMusicWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo, saya ingin konsultasi mengenai request backsound lagu khusus untuk Web Hadiah 3D di ${siteConfig.brandName}.`
    );
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="py-24 bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium">
              <Music className="w-3.5 h-3.5" />
              <span>SOUNDTRACK & ATMOSPHERE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Playfair_Display',serif]">
              Pakai Lagu Favoritmu
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Musik adalah pengikat emosi terbaik. Setiap hadiah digital interaktif dapat diiringi oleh alunan melodi atau lagu yang memiliki kenangan khusus bagi kalian.
            </p>

            <div className="p-5 rounded-2xl bg-[#131b2e] border border-amber-500/20 space-y-3">
              <div className="flex items-center gap-3 text-amber-300 font-semibold text-sm">
                <Headphones className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Konsultasi Lagu & Backsound</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong>Punya lagu yang punya cerita khusus?</strong> Sampaikan saat konsultasi dan kami akan menyesuaikan opsi backsound yang dapat digunakan.
              </p>
            </div>

            <button
              onClick={handleMusicWhatsApp}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 text-xs font-bold transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>Konsultasi Request Lagu</span>
            </button>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#131b2e] to-[#0c1220] border border-amber-500/30 p-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Music className="w-48 h-48 text-amber-300" />
              </div>
              <h3 className="text-xl font-bold text-white font-['Playfair_Display',serif] mb-4">
                Suasana yang Dihidupkan Lewat Musik
              </h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-2"></span>
                  <span>Musik dapat dimulai setelah penerima berinteraksi dengan halaman, sesuai aturan autoplay browser.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-2"></span>
                  <span>Tombol kontrol audio yang elegan dan mudah dimatikan/dihidupkan oleh penerima.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 mt-2"></span>
                  <span>Pemilihan backsound disesuaikan dengan suasana cerita dan opsi penggunaan audio yang tersedia.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
