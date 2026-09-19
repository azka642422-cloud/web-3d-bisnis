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
  const [selectedPhotoCount, setSelectedPhotoCount] = useState(7);

  const handleOpenConsultation = () => setConsultationModalOpen(true);

  const handleSelectTemplate = (templateTitle: string) => {
    setSelectedTemplate(templateTitle);
    setConsultationModalOpen(true);
  };

  const handleSelectOccasion = (occasionName: string) => {
    setSelectedOccasion(occasionName);
    setConsultationModalOpen(true);
  };

  const handleOrderWithDetails = (photoCount: number, _estimatedPrice: number) => {
    setSelectedPhotoCount(photoCount);
    setConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
      <Header onOpenConsultation={handleOpenConsultation} />
      <main>
        <Hero onOpenConsultation={handleOpenConsultation} />
        <WhatIsIt />
        <OccasionCategories onSelectOccasion={handleSelectOccasion} />
        <TemplatePreview onSelectTemplate={handleSelectTemplate} />
        <HowItWorks />
        <WhatsIncluded />
        <PricingSection onOpenConsultation={handleOpenConsultation} />
        <PriceCalculator onOrderWithDetails={handleOrderWithDetails} />
        <MusicSection />
        <PrivacySection />
        <FAQ />
        <FinalCTA onOpenConsultation={handleOpenConsultation} />
      </main>
      <Footer />
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialTemplate={selectedTemplate}
        initialOccasion={selectedOccasion}
        initialPhotoCount={selectedPhotoCount}
      />
    </div>
  );
}
