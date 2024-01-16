import { Drag } from '@pages/projects/gallery/icons/Drag';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { PADDING_X } from './config';
import { useDarkMode } from '@lib/hooks/dark-mode/context';
import { useHoverKey } from '@lib/cursor/hooks/useHoverKey';
import { BIG_CURSOR_KEY } from '@lib/cursor/switch/config';
import { useApp } from '@lib/context/app/useApp';

type TProps = {
  classValue?: ClassValue;
};
export const DragIcon: FC<TProps> = ({ classValue }) => {
  const {
    COLOR,
    GLOW: { DROP },
  } = useApp();
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
        filter: DROP['accent'],
        width: PADDING_X,
      }}
      variants={{
        animate: {
          cursor: 'grab',
          color: COLOR['white'],
        },
        hover: {
          cursor: 'grab',
          color: isDarkMode
            ? COLOR['white-9']
            : COLOR['gray'],
        },
        tap: {
          color: isDarkMode
            ? COLOR['highlight']
            : COLOR['gray'],
          cursor: 'grabbing',
        },
      }}
      {...handlers}
    >
      <Drag />
    </motion.div>
  );
};
