import { Drag } from '@pages/projects/gallery/icons/Drag';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { PADDING_X } from './config';
import { useDarkMode } from '@lib/hooks/dark-mode/context';
import { useHoverKey } from '@lib/components/cursor/hooks/useHoverKey';
import { COLOR_LOOKUP } from '@uno/theme/colors';
import { resolveDropShadow } from '@uno/rules/glow/resolveDropShadow';

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
            ? COLOR_LOOKUP['white-9']
            : COLOR_LOOKUP['gray'],
          filter: resolveDropShadow(0),
        },
        hover: {
          cursor: 'grab',
          filter: isDarkMode
            ? resolveDropShadow(2, 'white-9')
            : resolveDropShadow(2, 'secondary'),
          color: isDarkMode
            ? COLOR_LOOKUP['white-9']
            : COLOR_LOOKUP['gray'],
        },
        tap: {
          filter: isDarkMode
            ? resolveDropShadow(4, 'highlight')
            : resolveDropShadow(4, 'secondary'),
          color: isDarkMode
            ? COLOR_LOOKUP['highlight']
            : COLOR_LOOKUP['gray'],
          cursor: 'grabbing',
        },
      }}
      {...handlers}
    >
      <Drag />
    </motion.div>
  );
};
