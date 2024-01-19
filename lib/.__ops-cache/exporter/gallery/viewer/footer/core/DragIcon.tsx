import { Drag } from '@brysonandrew/gallery/viewer/icons/Drag';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { PADDING_X } from './config';
import { useHoverKey } from '@brysonandrew/cursor/hooks/useHoverKey';
import { BIG_CURSOR_KEY } from '@brysonandrew/cursor/switch/config';
import { useApp } from '@brysonandrew/context/app/useApp';
import { useDarkMode } from '@brysonandrew/context';

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
