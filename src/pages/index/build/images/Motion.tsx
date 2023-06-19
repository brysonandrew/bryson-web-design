import {
  MotionValue,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';
import { type FC } from 'react';

export type TChildrenProps = {
  rotateX: MotionValue;
  filter: MotionValue<string>;
};
type TProps = {
  children(props: TChildrenProps): void;
};
export const Motion: FC<TProps> = ({ children }) => {
  const { scrollY } = useScroll();
  const rotateX = useTransform(scrollY, [0, 400], [0, 28]);
  const blur = useTransform(scrollY, [100, 400], [0, 4]);
  const grayscale = useTransform(scrollY, [100, 400], [0, 100]);
  const opacity = useTransform(scrollY, [100, 400], [1, 0.5]);

  const filter = useMotionTemplate`blur(${blur}px) grayscale(${grayscale}%) opacity(${opacity})`;

  return <>{children({ rotateX, filter })}</>;
};
