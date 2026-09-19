import { HeartHandshake, Sparkles, Share2 } from 'lucide-react';

export function WhatIsIt() {
  const benefits = [
    {
      title: 'Lebih Personal',
      description: 'Foto dan pesan dibuat khusus untuk penerima, mencerminkan cerita dan kenangan berharga kalian.',
      icon: HeartHandshake,
      badge: 'Personalized',
    },
    {
      title: 'Lebih Berkesan',
      description: 'Cerita disampaikan melalui animasi interaktif dan visual sinematik yang jauh melampaui kartu ucapan biasa.',
      icon: Sparkles,
      badge: 'Cinematic Experience',
    },
    {
      title: 'Mudah Dibagikan',
      description: 'Cukup kirimkan satu tautan personal via WhatsApp atau media sosial, penerima bisa langsung membuka di HP.',
      icon: Share2,
      badge: 'Instant Access',
    },
  ];

  return (
    <section id="tentang" className="py-24 bg-[#0c101c] relative border-t border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3 block">
            TENTANG LAYANAN KAMI
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Playfair_Display',serif] mb-4">
            Apa itu Web Hadiah 3D?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Daripada hanya mengirim ucapan teks biasa atau foto statis, berikan pengalaman digital interaktif berisi koleksi foto kenangan, pesan personal, musik latar, dan sentuhan animasi 3D yang memukau.
          </p>
        </div>

        {/* 3 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#131b2e] border border-amber-500/15 rounded-2xl p-8 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider text-amber-400/80 bg-amber-500/10 px-2.5 py-1 rounded-full uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-['Playfair_Display',serif]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 flex items-center text-xs font-medium text-amber-400/90 group-hover:text-amber-300">
                  <span>Dibuat khusus untuk momenmu</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
