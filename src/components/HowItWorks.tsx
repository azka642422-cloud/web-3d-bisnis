import { LayoutTemplate, ImagePlus, Wand2, Share2 } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      stepNumber: '01',
      title: 'Pilih Template',
      description: 'Pilih tampilan dan nuansa visual yang paling cocok dengan momen spesialmu.',
      icon: LayoutTemplate,
    },
    {
      stepNumber: '02',
      title: 'Kirim Foto & Cerita',
      description: 'Siapkan foto, nama penerima, ucapan personal, dan informasi yang ingin dimasukkan.',
      icon: ImagePlus,
    },
    {
      stepNumber: '03',
      title: 'Kami Buatkan',
      description: 'Kontenmu akan disusun secara profesional menjadi pengalaman web hadiah interaktif.',
      icon: Wand2,
    },
    {
      stepNumber: '04',
      title: 'Kirim Link-nya',
      description: 'Setelah selesai, kamu mendapatkan tautan personal yang siap diberikan kepada orang spesial.',
      icon: Share2,
    },
  ];

  return (
    <section id="cara-pesan" className="py-24 bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3 block">
            PROSES PEMESANAN MUDAH
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Playfair_Display',serif] mb-4">
            Cara Pesannya Gampang
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Hanya butuh 4 langkah mudah dari ide hingga hadiah digital siap dikirim.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => {
            const IconC = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#111726]/80 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/40 transition-all duration-300 group shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <IconC className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-extrabold font-['Playfair_Display',serif] text-amber-400/40 group-hover:text-amber-400 transition-colors">
                      {item.stepNumber}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 font-['Playfair_Display',serif]">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-slate-400">
                  <span>Langkah {idx + 1} dari 4</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
