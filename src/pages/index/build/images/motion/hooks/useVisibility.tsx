import {
  useMotionTemplate,
  useTransform,
} from 'framer-motion';
import { MAX_SCROLL, TBaseConfig } from './config';
import { SCROLL_START } from '@hooks/scroll/useScrollControl';

export const useVisibility = ({ scrollY }: TBaseConfig) => {
  const blur = useTransform(
    scrollY,
    [SCROLL_START, MAX_SCROLL],
    [0, 6],
  );
  const grayscale = useTransform(
    scrollY,
    [SCROLL_START, MAX_SCROLL],
    [0, 100],
  );
  const opacity = useTransform(
    scrollY,
    [SCROLL_START, MAX_SCROLL],
    [1, 0.1],
  );
  const visibility = useMotionTemplate`blur(${blur}px) grayscale(${grayscale}%) opacity(${opacity})`;

  return visibility;
};
