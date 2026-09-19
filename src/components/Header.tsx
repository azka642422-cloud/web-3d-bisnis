import { useState, useEffect } from 'react';
import { Menu, X, Gift } from 'lucide-react';
import { siteConfig } from '../config/site';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export function Header({ onOpenConsultation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Template', href: '#template' },
    { name: 'Cara Pesan', href: '#cara-pesan' },
    { name: 'Harga', href: '#harga' },
    { name: 'Kalkulator', href: '#kalkulator' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090D16]/90 backdrop-blur-md border-b border-amber-500/10 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#beranda"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-white group focus:outline-none focus:ring-2 focus:ring-amber-500/50 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Gift className="w-5 h-5" />
            </div>
            <span className="font-['Playfair_Display',serif] tracking-wide text-amber-100">
              {siteConfig.brandName}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-amber-300 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50 rounded-md px-1 py-0.5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-sm shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              Pesan Sekarang
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg"
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0c1220] border-b border-amber-500/20 shadow-2xl py-6 px-6 animate-fadeIn">
          <nav id="mobile-navigation" className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-amber-300 py-1 transition-colors border-b border-slate-800/60 pb-2"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold text-sm shadow-md text-center"
              >
                Pesan Sekarang via WhatsApp
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
