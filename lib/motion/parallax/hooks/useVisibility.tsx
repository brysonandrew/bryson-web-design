import { useTransform } from 'framer-motion';
import { TBaseConfig, TVisibilityRange } from '@brysonandrew/motion-parallax/config';

export const useVisibility = ({
  scrollY,
  input,
  opacity: opacityRange,
  ...inputConfig
}: TBaseConfig & TVisibilityRange) => {
  const inputRange = input(inputConfig);

  const opacity = useTransform(
    scrollY,
    inputRange,
    opacityRange ?? inputRange,
  );

  return opacity;
};
