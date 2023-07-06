import { Drag } from '@components/icons/Drag';
import { resolveDropShadow } from '@pages/index/constants';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import COLORS from '@windi/config-colors.json';
import { PADDING_X } from './config';
import { useHover } from '@hooks/useHover';

type TProps = {
  classValue?: ClassValue;
};
export const DragIcon: FC<TProps> = ({ classValue }) => {
  const { isHover, ...handlers } = useHover();
  return (
    <motion.div
      className={clsx(
        'absolute flex items-center justify-center h-full z-0',
        classValue,
      )}
      initial={false}
      animate={isHover ? 'hover' : 'animate'}
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
      {...handlers}
    >
      <Drag classValue='cursor-grab' />
    </motion.div>
  );
};
