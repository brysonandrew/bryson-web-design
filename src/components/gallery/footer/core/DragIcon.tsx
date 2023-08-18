import { Drag } from '@components/icons/gallery/Drag';
import { COLORS } from '@constants/colors';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

import { PADDING_X } from './config';
import { useHover } from '@hooks/cursor/useHover';
import { useContext } from '@state/Context';
import { resolveDropShadow } from '@utils/effects/glow';

type TProps = {
  classValue?: ClassValue;
};
export const DragIcon: FC<TProps> = ({ classValue }) => {
  const {
    darkMode: { isDarkMode },
  } = useContext();
  const { isHover, ...handlers } = useHover();
  const variant = isHover ? 'hover' : 'animate';
  return (
    <motion.div
      className={clsx(
        'hidden center absolute bottom-0 h-full md:flex',
        classValue,
      )}
      initial={false}
      animate={variant}
      whileTap='tap'
      style={{
        width: PADDING_X,
      }}
      variants={{
        animate: {
          cursor: 'grab',
          color: isDarkMode
            ? COLORS['white']
            : COLORS['gray'],
          filter: resolveDropShadow(0),
        },
        hover: {
          cursor: 'grab',
          filter: isDarkMode
            ? resolveDropShadow(2, 'white')
            : resolveDropShadow(2, 'gray'),
          color: isDarkMode
            ? COLORS['white']
            : COLORS['gray'],
        },
        tap: {
          filter: isDarkMode
            ? resolveDropShadow(4, 'teal-bright')
            : resolveDropShadow(4, 'gray'),
          color: isDarkMode
            ? COLORS['teal-bright']
            : COLORS['gray'],
          cursor: 'grabbing',
        },
      }}
      {...handlers}
    >
      <Drag />
    </motion.div>
  );
};
