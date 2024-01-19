import { useCurrName } from '../params/useCurrName';
import { useTo } from './useTo';

export const useNext = (max: number) => {
  const index = useCurrName();
  const next = useTo({ next: (Number(index) % max) + 1 });
  if (!index) return '';
  return next;
};
