import { ShieldCheck, Lock } from 'lucide-react';

export function PrivacySection() {
  return (
    <section className="py-24 bg-[#0c101c] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#131b2e] to-[#0c1220] border border-amber-500/30 p-8 shadow-2xl">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6"><Lock className="w-6 h-6" /></div>
              <h3 className="text-xl font-bold text-white font-['Playfair_Display',serif] mb-3">Private PIN — Segera Tersedia</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">Kami menghargai privasi momen dan foto pribadi kamu. Fitur pengamanan PIN belum tersedia pada MVP dan direncanakan untuk versi mendatang.</p>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold"><span>🔒 Dalam Pengembangan</span></div>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium"><ShieldCheck className="w-3.5 h-3.5" /><span>PRIVASI & KEAMANAN</span></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Playfair_Display',serif]">Cerita Personal Tetap Personal</h2>
            <p className="text-base text-slate-300 leading-relaxed">Untuk versi produksi hadiah, pendekatan privasi berikut direncanakan dan akan diterapkan sesuai kebutuhan sebelum fitur tersebut ditawarkan kepada pelanggan.</p>
            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-amber-400"></span><span>Direncanakan: tautan personal dengan alamat yang sulit ditebak.</span></li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-amber-400"></span><span>Direncanakan: pengaturan noindex untuk halaman hadiah pelanggan.</span></li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-amber-400"></span><span>Direncanakan: perlindungan PIN melalui sistem server-side yang aman.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
