import { Drag } from '@components/icons/gallery/Drag';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { PADDING_X } from './config';
import { useDarkMode } from '@context/dark-mode';
import { resolveDropShadow } from '@utils/effects/glow';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { COLORS } from '@uno/theme/colors';

type TProps = {
  classValue?: ClassValue;
};
export const DragIcon: FC<TProps> = ({ classValue }) => {
  const {
     isDarkMode ,
  } = useDarkMode();

  const { isHover, ...handlers } = useHoverKey(
    'big',
    'drag',
  );
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
            ? COLORS['white-9']
            : COLORS['gray'],
          filter: resolveDropShadow(0),
        },
        hover: {
          cursor: 'grab',
          filter: isDarkMode
            ? resolveDropShadow(2, 'white-9')
            : resolveDropShadow(2, 'teal'),
          color: isDarkMode
            ? COLORS['white-9']
            : COLORS['gray'],
        },
        tap: {
          filter: isDarkMode
            ? resolveDropShadow(4, 'teal-bright')
            : resolveDropShadow(4, 'teal'),
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
