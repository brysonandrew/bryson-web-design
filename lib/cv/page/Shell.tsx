import type { TChildren } from '@brysonandrew/types/dom';
import { motion } from 'framer-motion';
import type { CSSProperties, FC } from 'react';

type TProps = {
  children: TChildren;
  style?: CSSProperties;
};
export const Shell: FC<TProps> = ({ style, children }) => (
  <motion.div style={style}>{children}</motion.div>
);
