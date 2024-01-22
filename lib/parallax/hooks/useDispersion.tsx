import { useTransform } from 'framer-motion';
import { TBaseConfig, TTransformRange } from '../config';

export const useDispersion = ({
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
