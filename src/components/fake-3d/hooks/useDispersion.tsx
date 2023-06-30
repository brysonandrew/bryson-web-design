import { useTransform } from 'framer-motion';
import {
  MAX_SCROLL,
  TBaseConfig,
  TTransformRange,
} from './config';

export const useDispersion = ({
  scrollY,
  input = ({ startScroll }) => [
    startScroll,
    startScroll + MAX_SCROLL,
  ],
  output = [0, 28],
  ...inputConfig
}: TBaseConfig & TTransformRange) => {
  const dispersion = useTransform(
    scrollY,
    input(inputConfig),
    output,
  );

  return dispersion;
};
