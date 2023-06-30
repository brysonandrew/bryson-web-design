import {
  useMotionTemplate,
  useTransform,
} from 'framer-motion';
import {
  MAX_SCROLL,
  TBaseConfig,
  TVisibilityRange,
} from './config';
import { SCROLL_START } from '@hooks/scroll/useScrollControl';

export const useVisibility = ({
  scrollY,
  input = ({ startScroll }) => [
    startScroll + SCROLL_START,
    startScroll + MAX_SCROLL,
  ],
  blur: blurRange = [0, 4],
  ...inputConfig
}: TBaseConfig & TVisibilityRange) => {
  const inputRange = input(inputConfig);
  const blur = useTransform(scrollY, inputRange, blurRange);
  const grayscale = useTransform(
    scrollY,
    inputRange,
    [0, 100],
  );
  const opacity = useTransform(
    scrollY,
    inputRange,
    [1, 0.4],
  );
  const visibility = useMotionTemplate`blur(${blur}px) grayscale(${grayscale}%) opacity(${opacity})`;

  return visibility;
};
