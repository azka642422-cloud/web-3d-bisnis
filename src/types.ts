export interface SiteConfig {
  brandName: string;
  tagline: string;
  description: string;
  whatsappNumber: string;
  whatsappDisplay: string;
}

export interface PricingConfig {
  basePrice: number;
  includedPhotos: number;
  additionalPhotoBlock: number;
  additionalPhotoBlockPrice: number;
  promoLabel: string;
  promoSubtext: string;
}

export interface Template {
  id: string;
  title: string;
  suitableFor: string;
  visualTheme: string;
  accentColor: string;
  bgGradient: string;
  description: string;
  badge?: string;
}

export interface Occasion {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface OrderDraft {
  occasion: string;
  templateId: string;
  photoCount: number;
  soundtrackRequest: string;
  privacyPreference: string;
}
