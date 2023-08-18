import { TChildrenProps } from '@t/index';
import { motion } from 'framer-motion';
import { FC } from 'react';

export const TITLE_HEIGHT = 88;
type TProps = Partial<TChildrenProps>;
export const TitleRoot: FC<TProps> = ({ children }) => (
  <motion.div
    className={'column w-core'}
    style={{ height: TITLE_HEIGHT }}
  >
    {children}
  </motion.div>
);
