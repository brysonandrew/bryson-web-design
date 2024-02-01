import type { TChildren } from '@brysonandrew/types/dom';
import { motion } from 'framer-motion';
import type { FC } from 'react';

type TProps = { children: TChildren };
export const Margin: FC<TProps> = ({ children }) => (
  <motion.div className='relative w-3/4'>
    {children}
  </motion.div>
);
