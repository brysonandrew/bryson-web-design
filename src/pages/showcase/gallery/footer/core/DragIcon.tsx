import { Drag } from '@components/icons/Drag';
import { resolveDropShadow } from '@pages/index/constants';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import COLORS from '@windi/config-colors.json';

type TProps = {
  classValue?: ClassValue;
};
export const DragIcon: FC<TProps> = ({ classValue }) => (
  <motion.div
    className={clsx(
      'flex items-center absolute h-full',
      classValue,
    )}
    variants={{
      hover: {
        filter: resolveDropShadow(10, 'teal'),
        color: COLORS['teal'],
      },
      tap: {
        filter: resolveDropShadow(100, 'teal-bright'),
        color: COLORS['teal-bright'],
      },
    }}
  >
    <Drag />
  </motion.div>
);
