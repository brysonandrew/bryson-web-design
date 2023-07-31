import { Drag } from '@components/icons/Drag';
import { resolveDropShadow } from '@constants/colors';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import * as unoConfig from '@uno/config';
const COLORS = unoConfig.default.theme.colors;
import { PADDING_X } from './config';
import { useHover } from '@hooks/useHover';
import { useContext } from '@state/Context';

type TProps = {
  classValue?: ClassValue;
};
export const DragIcon: FC<TProps> = ({ classValue }) => {
  const {
    darkMode: { isDarkMode },
  } = useContext();
  const { isHover, ...handlers } = useHover();
  return (
    <motion.div
      className={clsx(
        'absolute center h-full z-0',
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
          color: isDarkMode
            ? COLORS['white']
            : COLORS['gray'],
          filter: resolveDropShadow(0),
        },
        hover: {
          cursor: 'grab',
          filter: isDarkMode
            ? resolveDropShadow(2, 'white')
            : resolveDropShadow(0),
          color: isDarkMode
            ? COLORS['gray']
            : COLORS['white'],
        },
        tap: {
          filter: isDarkMode
            ? resolveDropShadow(4, 'teal-bright')
            : resolveDropShadow(0),
          color: isDarkMode
            ? COLORS['gray']
            : COLORS['teal-bright'],
          cursor: 'grabbing',
        },
      }}
      {...handlers}
    >
      <Drag classValue='cursor-grab' />
    </motion.div>
  );
};
