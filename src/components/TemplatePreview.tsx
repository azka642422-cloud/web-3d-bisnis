import { useEffect, useRef, useState } from 'react';
import { Eye, Check, Sparkles, X, Heart, GraduationCap, Cake, Gem } from 'lucide-react';
import { templates } from '../data/templates';
import { Template } from '../types';

interface TemplatePreviewProps {
  onSelectTemplate: (templateTitle: string) => void;
}

export function TemplatePreview({ onSelectTemplate }: TemplatePreviewProps) {
  const [modalTemplate, setModalTemplate] = useState<Template | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const previewDialogRef = useRef<HTMLDivElement>(null);
  const previewCloseRef = useRef<HTMLButtonElement>(null);
  const toastTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!modalTemplate) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => previewCloseRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setModalTemplate(null);
      if (event.key !== 'Tab' || !previewDialogRef.current) return;
      const focusable = Array.from(
        previewDialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
        )
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [modalTemplate]);

  const handlePreviewClick = (tpl: Template) => {
    setModalTemplate(tpl);
  };

  const previewIcon = (id: string) => {
    if (id === 'sweet-memories') return <Heart className="w-8 h-8" />;
    if (id === 'graduation-night') return <GraduationCap className="w-8 h-8" />;
    if (id === 'birthday-universe') return <Cake className="w-8 h-8" />;
    return <Gem className="w-8 h-8" />;
  };

  const handleChooseTemplate = (tplTitle: string) => {
    onSelectTemplate(tplTitle);
    setModalTemplate(null);
    setToastMessage(`Template "${tplTitle}" berhasil dipilih untuk konsultasi!`);
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <section id="template" className="py-24 bg-[#0c101c] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toast Notification */}
        {toastMessage && (
          <div role="status" aria-live="polite" className="fixed bottom-6 right-6 z-50 bg-amber-500 text-slate-950 px-5 py-3 rounded-xl shadow-2xl font-medium text-sm flex items-center gap-3 animate-fadeIn">
            <Sparkles className="w-4 h-4" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3 block">
            PILIHAN GAYA & TEMPLATE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-['Playfair_Display',serif] mb-4">
            Pilih Cerita yang Cocok
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Setiap template dirancang dengan estetika sinematik dan nuansa warna yang sesuai dengan emosi momenmu.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((tpl) => (
            <div
              key={tpl.id}
              className="relative rounded-2xl bg-[#131b2e] border border-amber-500/20 shadow-xl overflow-hidden flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 group hover:-translate-y-1.5"
            >
              {/* Top Accent Gradient */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${tpl.accentColor}`}></div>

              <div className="p-6">
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-wider text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2.5 py-1 rounded-full uppercase font-semibold">
                    {tpl.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {tpl.suitableFor}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 font-['Playfair_Display',serif]">
                  {tpl.title}
                </h3>

                {/* Theme subtext */}
                <p className="text-xs text-amber-200/80 font-medium mb-3">
                  Visual: {tpl.visualTheme}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {tpl.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                <button
                  onClick={() => handlePreviewClick(tpl)}
                  className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-700"
                >
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>Lihat Preview</span>
                </button>
                <button
                  onClick={() => handleChooseTemplate(tpl.title)}
                  className="py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-amber-500/20"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Pilih Template</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Demo Segera Hadir */}
      {modalTemplate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setModalTemplate(null);
          }}
        >
          <div
            ref={previewDialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="template-preview-title"
            className="relative w-full max-w-md bg-[#131b2e] border border-amber-500/30 rounded-2xl p-6 sm:p-8 text-slate-100 shadow-2xl"
          >
            <button
              ref={previewCloseRef}
              type="button"
              onClick={() => setModalTemplate(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/80"
              aria-label="Tutup preview template"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
              <Sparkles className="w-6 h-6" />
            </div>

            <h3 id="template-preview-title" className="text-2xl font-bold font-['Playfair_Display',serif] text-white mb-2">
              {modalTemplate.title}
            </h3>
            <p className="text-xs text-amber-300 font-mono mb-4">
              {modalTemplate.suitableFor}
            </p>

            <div className={`relative overflow-hidden rounded-2xl p-5 mb-5 ${modalTemplate.bgGradient} border border-white/10`}>
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${modalTemplate.accentColor}`}></div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-300">
                  {previewIcon(modalTemplate.id)}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Contoh tampilan</p>
                  <p className="font-semibold text-white">{modalTemplate.visualTheme}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4" aria-hidden="true">
                <div className="aspect-[4/5] rounded-lg bg-white/10 border border-white/10 rotate-[-3deg]"></div>
                <div className="aspect-[4/5] rounded-lg bg-amber-300/10 border border-amber-300/20 translate-y-2"></div>
                <div className="aspect-[4/5] rounded-lg bg-white/10 border border-white/10 rotate-[3deg]"></div>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">{modalTemplate.description}</p>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-6">
              <span className="text-sm font-semibold text-amber-200">
                Preview konsep template
              </span>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Preview ini menunjukkan arah visual dan suasana template. Foto, pesan, musik, dan detail animasi pada hasil akhir akan dipersonalisasi untuk penerima.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setModalTemplate(null)}
                className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors"
              >
                Tutup
              </button>
              <button
                type="button"
                onClick={() => handleChooseTemplate(modalTemplate.title)}
                className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-amber-500/20"
              >
                Pilih Template Ini
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
