import { PricingConfig } from '../types';

export const pricingConfig: PricingConfig = {
  basePrice: 10000,
  includedPhotos: 7,
  additionalPhotoBlock: 10,
  additionalPhotoBlockPrice: 5000,
  promoLabel: 'PROMO LAUNCHING',
  promoSubtext: 'Harga promo untuk periode launching.',
};

export function calculatePrice(photoCount: number): { estimatedPrice: number; additionalBlocks: number } {
  const maxPhotos = Math.max(1, photoCount);
  const additionalBlocks = Math.ceil(Math.max(0, maxPhotos - pricingConfig.includedPhotos) / pricingConfig.additionalPhotoBlock);
  const estimatedPrice = pricingConfig.basePrice + additionalBlocks * pricingConfig.additionalPhotoBlockPrice;
  return { estimatedPrice, additionalBlocks };
}

export function formatIDR(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}
