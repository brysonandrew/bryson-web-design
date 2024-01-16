import { PROJECT_KEY } from '@lib/gallery/config/constants';
import { useSearchParams } from 'react-router-dom';

export const useCurrProject = <T extends string>() => {
  const [searchParams] = useSearchParams();
  const path = searchParams.get(PROJECT_KEY);
  return path as T | null;
};
