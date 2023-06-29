import { SCROLL_START } from '@hooks/scroll/useScrollControl';
import {
  MotionValue,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';
import { type FC } from 'react';

const MAX_SCROLL = 600;

export type TChildrenProps = {
  rotateX: MotionValue;
  filter: MotionValue<string>;
};
type TProps = {
  children(props: TChildrenProps): void;
};
export const Motion: FC<TProps> = ({ children }) => {
  const { scrollY } = useScroll();
  const rotateX = useTransform(scrollY, [0, MAX_SCROLL], [0, 28]);
  const blur = useTransform(scrollY, [SCROLL_START, MAX_SCROLL], [0, 6]);
  const grayscale = useTransform(scrollY, [SCROLL_START, MAX_SCROLL], [0, 100]);
  const opacity = useTransform(scrollY, [SCROLL_START, MAX_SCROLL], [1, 0.1]);

  const filter = useMotionTemplate`blur(${blur}px) grayscale(${grayscale}%) opacity(${opacity})`;

  return <>{children({ rotateX, filter })}</>;
};
