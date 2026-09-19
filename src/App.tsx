import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatIsIt } from './components/WhatIsIt';
import { OccasionCategories } from './components/OccasionCategories';
import { TemplatePreview } from './components/TemplatePreview';
import { HowItWorks } from './components/HowItWorks';
import { WhatsIncluded } from './components/WhatsIncluded';
import { PricingSection } from './components/PricingSection';
import { PriceCalculator } from './components/PriceCalculator';
import { MusicSection } from './components/MusicSection';
import { PrivacySection } from './components/PrivacySection';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('Sweet Memories');
  const [selectedOccasion, setSelectedOccasion] = useState('Pasangan');

  const handleOpenConsultation = () => {
    setConsultationModalOpen(true);
  };

  const handleSelectTemplate = (templateTitle: string) => {
    setSelectedTemplate(templateTitle);
    setConsultationModalOpen(true);
  };

  const handleSelectOccasion = (occasionName: string) => {
    setSelectedOccasion(occasionName);
    setConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
      {/* 01 — Header */}
      <Header onOpenConsultation={handleOpenConsultation} />

      <main>
        {/* 02 — Hero */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* 03 — What Is It? */}
        <WhatIsIt />

        {/* 04 — Occasion Categories */}
        <OccasionCategories onSelectOccasion={handleSelectOccasion} />

        {/* 05 — Template Preview */}
        <TemplatePreview onSelectTemplate={handleSelectTemplate} />

        {/* 06 — How It Works */}
        <HowItWorks />

        {/* 07 — What's Included */}
        <WhatsIncluded />

        {/* 08 — Pricing */}
        <PricingSection onOpenConsultation={handleOpenConsultation} />

        {/* 09 — Price Calculator */}
        <PriceCalculator
          onOrderWithDetails={(photoCount, estPrice) => {
            setConsultationModalOpen(true);
          }}
        />

        {/* 10 & 11 — Music & Privacy Sections */}
        <MusicSection />
        <PrivacySection />

        {/* 13 — FAQ */}
        <FAQ />

        {/* 14 — Final CTA */}
        <FinalCTA onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* 15 — Footer */}
      <Footer />

      {/* WhatsApp Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialTemplate={selectedTemplate}
        initialOccasion={selectedOccasion}
      />
    </div>
  );
}
