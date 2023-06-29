import { useTransform } from 'framer-motion';
import { TBaseConfig } from './config';

export const useResistance = ({ scrollY }: TBaseConfig) => {
  const dispersion = useTransform(scrollY, (v) => {
    return -v * 0.6;
  });

  return dispersion;
};
