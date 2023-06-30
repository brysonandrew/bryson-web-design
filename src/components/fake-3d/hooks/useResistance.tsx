import { useTransform } from 'framer-motion';
import {
  MAX_SCROLL,
  TBaseConfig,
  TTransformRange,
} from './config';

export const useResistance = ({
  scrollY,
  input = ({ startScroll }) => [
    startScroll,
    startScroll + MAX_SCROLL,
  ],
  output = [0, -440],
  ...inputConfig
}: TBaseConfig & TTransformRange) => {
  const dispersion = useTransform(
    scrollY,
    input(inputConfig),
    output,
  );

  return dispersion;
};
