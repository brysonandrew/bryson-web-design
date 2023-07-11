import { NAME_KEY } from '@pages/projects/config';
import { useSearchParams } from 'react-router-dom';
import { useTo } from './useTo';

export const useNext = (max: number) => {
  const [searchParams] = useSearchParams();
  const index = searchParams.get(NAME_KEY);
  const next = useTo({ next: (Number(index) % max) + 1 });
  if (!index) return '';
  return next;
};
