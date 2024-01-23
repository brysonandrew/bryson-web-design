import { Drag } from '@brysonandrew/gallery-viewer/icons/Drag';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { useHoverKey } from '@brysonandrew/cursor';
import { BIG_CURSOR_KEY } from '@brysonandrew/cursor/config/constants';
import { useApp } from '@brysonandrew/app';
import { useDarkMode } from '@brysonandrew/dark-mode';
import { PADDING_X } from '@brysonandrew/gallery/viewer/ready/footer/core/config';

type TProps = {
  classValue?: ClassValue;
};
export const DragIcon: FC<TProps> = ({ classValue }) => {
  const { COLOR, GLOW_DROP } = useApp();
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
        filter: GLOW_DROP['accent'],
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
