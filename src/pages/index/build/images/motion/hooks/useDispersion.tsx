import { useTransform } from 'framer-motion';
import { MAX_SCROLL, TBaseConfig } from './config';

export const useDispersion = ({ scrollY }: TBaseConfig) => {
  const dispersion = useTransform(
    scrollY,
    [0, MAX_SCROLL],
    [0, 28],
  );

  return dispersion;
};
