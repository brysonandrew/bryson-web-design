import type { FC } from 'react';
import { motion } from 'framer-motion';
import {
  TDivMotionProps,
  TChildren,
} from '@brysonandrew/config-types';
import { useHover } from '@brysonandrew/hooks-events';

type TProps = Omit<TDivMotionProps, 'children'> & {
  children(isHover: boolean | null): TChildren;
};
export const Hover: FC<TProps> = ({
  children,
  ...props
}) => {
  const { isHover, ...handlers } = useHover();
  return (
    <motion.div {...handlers} {...props}>
      {children(isHover)}
    </motion.div>
  );
};
