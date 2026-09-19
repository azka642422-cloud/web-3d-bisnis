import { useState } from 'react';
import { X, MessageCircle, Sparkles, Gift } from 'lucide-react';
import { siteConfig } from '../config/site';
import { occasions } from '../data/occasions';
import { templates } from '../data/templates';
import { calculatePrice, formatIDR } from '../config/pricing';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTemplate?: string;
  initialOccasion?: string;
  initialPhotoCount?: number;
}

export function ConsultationModal({
  isOpen,
  onClose,
  initialTemplate = 'Sweet Memories',
  initialOccasion = 'Pasangan',
  initialPhotoCount = 7,
}: ConsultationModalProps) {
  const [selectedOccasion, setSelectedOccasion] = useState(initialOccasion);
  const [selectedTemplate, setSelectedTemplate] = useState(initialTemplate);
  const [photoCount, setPhotoCount] = useState(initialPhotoCount);
  const [soundtrackReq, setSoundtrackReq] = useState('');
  const [privacyPref, setPrivacyPref] = useState('Tertarik (Segera tersedia)');

  if (!isOpen) return null;

  const { estimatedPrice } = calculatePrice(photoCount);

  const handleSendWhatsApp = () => {
    const message = encodeURIComponent(
      `Halo, saya tertarik membuat Web Hadiah 3D di ${siteConfig.brandName}.\n\n` +
      `Momen: ${selectedOccasion}\n` +
      `Template: ${selectedTemplate}\n` +
      `Jumlah foto: ${photoCount} foto\n` +
      `Estimasi harga: ${formatIDR(estimatedPrice)}\n` +
      `Backsound: ${soundtrackReq || 'Belum ditentukan / ingin konsultasi'}\n` +
      `Private/PIN: ${privacyPref}\n\n` +
      `Saya ingin konsultasi lebih lanjut.`
    );
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#131b2e] border border-amber-500/30 rounded-3xl p-6 sm:p-8 text-slate-100 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800/80 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Gift className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-['Playfair_Display',serif] text-white">
              Formulir Konsultasi WhatsApp
            </h3>
            <p className="text-xs text-amber-300/90">
              Sesuaikan preferensi hadiahmu sebelum terhubung ke WhatsApp.
            </p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 mb-6">
          
          {/* Occasion Selection */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Pilih Momen / Occasion
            </label>
            <select
              value={selectedOccasion}
              onChange={(e) => setSelectedOccasion(e.target.value)}
              className="w-full bg-[#0c1220] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
            >
              {occasions.map((occ) => (
                <option key={occ.id} value={occ.name}>
                  {occ.name}
                </option>
              ))}
            </select>
          </div>

          {/* Template Selection */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Pilihan Template
            </label>
            <select
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(e.target.value)}
              className="w-full bg-[#0c1220] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
            >
              {templates.map((tpl) => (
                <option key={tpl.id} value={tpl.title}>
                  {tpl.title} ({tpl.suitableFor})
                </option>
              ))}
            </select>
          </div>

          {/* Photo Count */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Jumlah Foto
              </label>
              <span className="text-xs text-amber-300 font-bold">
                {photoCount} Foto ({formatIDR(estimatedPrice)})
              </span>
            </div>
            <input
              type="number"
              min="1"
              max="50"
              value={photoCount}
              onChange={(e) => setPhotoCount(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full bg-[#0c1220] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Soundtrack Request */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Request Backsound / Lagu (Opsional)
            </label>
            <input
              type="text"
              placeholder="Contoh: Judul lagu atau artis favorit"
              value={soundtrackReq}
              onChange={(e) => setSoundtrackReq(e.target.value)}
              className="w-full bg-[#0c1220] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Privacy Preference */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Preferensi Private / PIN (Segera Tersedia)
            </label>
            <select
              value={privacyPref}
              onChange={(e) => setPrivacyPref(e.target.value)}
              className="w-full bg-[#0c1220] border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
            >
              <option value="Tertarik (Segera tersedia)">Tertarik (Segera tersedia)</option>
              <option value="Tidak">Tidak Perlu</option>
            </select>
          </div>

        </div>

        {/* WhatsApp Send Button */}
        <button
          onClick={handleSendWhatsApp}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>Kirim Konsultasi ke WhatsApp</span>
        </button>

        <p className="text-[11px] text-slate-400 text-center mt-4">
          Anda akan diarahkan ke WhatsApp resmi {siteConfig.whatsappDisplay} dengan pesan terformat otomatis.
        </p>

      </div>
    </div>
  );
}
