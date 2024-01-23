import { useTransform } from 'framer-motion';
import {
  TBaseConfig,
  TTransformRange,
} from '@brysonandrew/parallax/config';

export const useResistance = ({
  scrollY,
  input,
  output,
  ...inputConfig
}: TBaseConfig & TTransformRange) => {
  const dispersion = useTransform(
    scrollY,
    input(inputConfig),
    output,
  );

  return dispersion;
};
