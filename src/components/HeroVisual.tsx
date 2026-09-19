import { useState, useEffect } from 'react';
import { Heart, Sparkles, Music, Play, Layers } from 'lucide-react';

export function HeroVisual() {
  const [activeTab, setActiveTab] = useState<'preview' | '3d'>('preview');
  const [isHovered, setIsHovered] = useState(false);

  // Simulated floating tilt effect on mouse move
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div
      className="relative w-full max-w-lg mx-auto lg:max-w-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
    >
      {/* Glow Backdrop */}
      <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-blue-600/10 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>

      {/* Main Card Container */}
      <div
        style={{
          transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${
            -mousePos.y * 12
          }deg)`,
          transition: 'transform 0.1s ease-out',
        }}
        className="relative rounded-2xl bg-gradient-to-br from-[#121929] to-[#0a0d16] border border-amber-500/20 shadow-2xl p-5 sm:p-6 text-slate-100 overflow-hidden"
      >
        {/* Top bar of mock browser */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="ml-2 text-xs text-slate-400 font-mono tracking-wider">
              lumina.gift/preview/our-story
            </span>
          </div>
          <div className="flex items-center gap-2 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs text-amber-300 font-medium">3D Interactive</span>
          </div>
        </div>

        {/* Scene Content Preview */}
        <div className="relative aspect-[4/3] rounded-xl bg-gradient-to-b from-[#182236] to-[#0d1320] border border-slate-700/50 flex flex-col items-center justify-center p-6 overflow-hidden shadow-inner">
          {/* Background Ambient Particles/Light */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0,transparent_70%)]"></div>
          
          {/* Floating Photo Frames Mockup */}
          <div className="relative z-10 w-full flex items-center justify-center gap-3 sm:gap-4 my-auto">
            {/* Left Photo Card */}
            <div className="w-24 sm:w-32 h-36 sm:h-48 rounded-lg bg-slate-800 border border-slate-600/60 p-2 shadow-xl -rotate-6 transform hover:rotate-0 transition-all duration-300 group cursor-pointer">
              <div className="w-full h-24 sm:h-32 rounded bg-gradient-to-tr from-amber-900/40 to-rose-900/40 flex items-center justify-center text-slate-400 text-xs">
                <span className="italic font-serif text-amber-200">Memory #1</span>
              </div>
              <div className="mt-2 text-[10px] text-slate-300 text-center font-medium">First Meet</div>
            </div>

            {/* Center Featured Frame */}
            <div className="w-32 sm:w-40 h-44 sm:h-56 rounded-xl bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-amber-500/40 p-2.5 shadow-2xl z-20 transform hover:scale-105 transition-all duration-300">
              <div className="w-full h-32 sm:h-40 rounded-lg bg-gradient-to-tr from-amber-500/20 via-rose-500/20 to-blue-600/20 flex flex-col items-center justify-center text-center p-2">
                <Heart className="w-8 h-8 text-amber-400 animate-pulse mb-1" />
                <span className="text-xs font-semibold text-white">For You</span>
                <span className="text-[10px] text-amber-200/80">Interactive 3D</span>
              </div>
              <div className="mt-2 text-[11px] font-['Playfair_Display',serif] text-amber-300 text-center truncate">
                Our Special Day
              </div>
            </div>

            {/* Right Photo Card */}
            <div className="w-24 sm:w-32 h-36 sm:h-48 rounded-lg bg-slate-800 border border-slate-600/60 p-2 shadow-xl rotate-6 transform hover:rotate-0 transition-all duration-300 group cursor-pointer">
              <div className="w-full h-24 sm:h-32 rounded bg-gradient-to-tr from-blue-900/40 to-purple-900/40 flex items-center justify-center text-slate-400 text-xs">
                <span className="italic font-serif text-amber-200">Memory #2</span>
              </div>
              <div className="mt-2 text-[10px] text-slate-300 text-center font-medium">Endless Joy</div>
            </div>
          </div>

          {/* Audio Player bar mockup */}
          <div className="relative z-10 w-full mt-4 bg-slate-900/80 backdrop-blur border border-slate-700/60 rounded-full px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 shadow">
                <Play className="w-3.5 h-3.5 fill-current" />
              </div>
              <div className="text-left">
                <div className="text-xs font-medium text-slate-200">Backsound Spesial.mp3</div>
                <div className="text-[10px] text-amber-400/90">Playing memory soundtrack</div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1 h-3 bg-amber-400 rounded-full animate-bounce"></span>
              <span className="w-1 h-5 bg-amber-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1 h-2 bg-amber-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        </div>

        {/* Caption bottom */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-amber-400" /> Layered 3D Depth View
          </span>
          <span className="text-amber-300 font-medium">Buka di Browser HP / Laptop</span>
        </div>
      </div>
    </div>
  );
}
