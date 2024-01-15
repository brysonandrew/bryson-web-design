import { Drag } from '@pages/projects/gallery/icons/Drag';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { PADDING_X } from './config';
import { useDarkMode } from '@lib/hooks/dark-mode/context';
import { useHoverKey } from '@lib/cursor/hooks/useHoverKey';
import { resolveDropShadow } from '@uno/rules/glow/resolveDropShadow';
import { COLOR_VARS_RECORD } from '@app/colors/constants';
import { BIG_CURSOR_KEY } from '@lib/cursor/switch/config';

type TProps = {
  classValue?: ClassValue;
};
export const DragIcon: FC<TProps> = ({ classValue }) => {
  const { isDarkMode } = useDarkMode();

  const { isHover, ...handlers } = useHoverKey(
    BIG_CURSOR_KEY,
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
            ? COLOR_VARS_RECORD['white-9']
            : COLOR_VARS_RECORD['gray'],
          filter: resolveDropShadow(0),
        },
        hover: {
          cursor: 'grab',
          filter: isDarkMode
            ? resolveDropShadow(2, 'white-9')
            : resolveDropShadow(2, 'secondary'),
          color: isDarkMode
            ? COLOR_VARS_RECORD['white-9']
            : COLOR_VARS_RECORD['gray'],
        },
        tap: {
          filter: isDarkMode
            ? resolveDropShadow(4, 'highlight')
            : resolveDropShadow(4, 'secondary'),
          color: isDarkMode
            ? COLOR_VARS_RECORD['highlight']
            : COLOR_VARS_RECORD['gray'],
          cursor: 'grabbing',
        },
      }}
      {...handlers}
    >
      <Drag />
    </motion.div>
  );
};
