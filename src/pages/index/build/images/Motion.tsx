import { MotionValue, useScroll, useTransform } from 'framer-motion';
import { type FC } from 'react';

type TProps = {
  children(rotateX: MotionValue): void;
};
export const Motion: FC<TProps> = ({ children }) => {
  const { scrollY } = useScroll();
  const rotateX = useTransform(scrollY, [0, 400], [0, 28]);
  return <>{children(rotateX)}</>;
};
