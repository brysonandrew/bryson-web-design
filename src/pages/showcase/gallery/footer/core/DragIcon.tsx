import { Drag } from '@components/icons/Drag';
import { resolveDropShadow } from '@pages/index/constants';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import COLORS from '@windi/config-colors.json';
import { PADDING_X } from './config';

type TProps = {
  classValue?: ClassValue;
};
export const DragIcon: FC<TProps> = ({ classValue }) => (
  <motion.div
    className={clsx(
      'absolute flex items-center justify-center h-full z-50',
      classValue,
    )}
    initial={false}
    animate='animate'
    whileHover='hover'
    whileTap='tap'
    style={{
      width: PADDING_X,
    }}
    variants={{
      animate: {
        cursor: 'grab',
        color: COLORS['gray'],
        filter: resolveDropShadow(0),
      },
      hover: {
        cursor: 'grab',
        filter: resolveDropShadow(2, 'white'),
        color: COLORS['white'],
      },
      tap: {
        filter: resolveDropShadow(4, 'teal-bright'),
        color: COLORS['teal-bright'],
        cursor: 'grabbing',
      },
    }}
  >
    <Drag classValue='cursor-grab' />
  </motion.div>
);
