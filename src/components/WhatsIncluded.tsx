import { Check, ShieldAlert, Sparkles } from 'lucide-react';

export function WhatsIncluded() {
  const inclusions = [
    { title: 'Web personal', desc: 'Situs web interaktif khusus untuk penerima hadiah' },
    { title: 'Animasi interaktif', desc: 'Transisi halus, galeri mengambang, dan efek sinematik' },
    { title: 'Maksimal 7 foto', desc: 'Koleksi foto pilihan terbaik untuk paket promo awal' },
    { title: 'Pesan/ucapan personal', desc: 'Teks surat cinta atau ucapan mendalam dari hati' },
    { title: 'Background music', desc: 'Alunan melodi pengiring suasana yang hangat' },
    { title: 'Request backsound', desc: 'Konsultasi pilihan lagu atau musik khusus' },
    { title: 'Link personal', desc: 'Tautan unik siap dibagikan via WhatsApp' },
    { title: 'Mobile friendly', desc: 'Dirancang responsif untuk browser smartphone modern' },
  ];

  return (
    <section className="py-24 bg-[#0c101c] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3 block">
            FASILITAS LENGKAP
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Playfair_Display',serif] mb-4">
            Yang Kamu Dapatkan
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Setiap pemesanan dirancang untuk memberikan kesan mendalam bagi orang spesialmu.
          </p>
        </div>

        {/* Inclusions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {inclusions.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#131b2e] border border-slate-800 rounded-2xl p-6 flex items-start gap-4 shadow-md hover:border-amber-500/30 transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1 font-['Playfair_Display',serif]">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Private PIN Coming Soon Card */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 border border-amber-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 mx-auto sm:mx-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <h4 className="text-lg font-bold text-white font-['Playfair_Display',serif]">Opsi Private / PIN Keamanan</h4>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full font-semibold border border-amber-500/30">
                  Segera tersedia
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Fitur perlindungan sandi/PIN khusus untuk privasi ekstra foto dan pesan personalmu akan segera hadir dalam waktu dekat.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Coming Soon
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
