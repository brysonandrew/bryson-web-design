import { motion } from 'framer-motion';
import { ReactNode, type FC } from 'react';
import { resolvePresence } from '@utils/animation';
import clsx from 'clsx';
import { TClassValueProps } from '@t/index';
import {
  GLOW_TEAL_BRIGHT_4,
  GLOW_BLACK_1_BABY_BLUE_1,
} from '@uno/shadows';
import { useContext } from '@context/cursor';
import { useContext as useDarkModeContext } from '@context/dark-mode';
import { Metal } from '@components/metal';
import { DURATION_MID } from '@constants/animation';

type TProps = TClassValueProps & {
  children: ReactNode;
  delay?: number;
  exitDelay?: number;
};
export const Box: FC<TProps> = ({
  classValue,
  children,
  delay = 0.2,
  exitDelay = 0,
}) => {
  const { cursorLabel } = useContext();
  const { isDarkMode } = useDarkModeContext();

  return (
    <motion.div
      className={clsx(
        'absolute top-1/2 left-1/2 text-xl px-2 rounded-md',
        classValue,
      )}
      style={{
        ...cursorLabel,
        boxShadow: isDarkMode
          ? GLOW_TEAL_BRIGHT_4
          : GLOW_BLACK_1_BABY_BLUE_1,
      }}
      {...resolvePresence(
        {
          opacity: 0,
          transition: {
            duration: DURATION_MID,
            delay: 0 + exitDelay,
          },
        },
        {
          opacity: 1,
          transition: {
            duration: DURATION_MID,
            delay: 0 + delay,
          },
        },
      )}
    >
      <Metal classValue='rounded-md' />
      {children}
    </motion.div>
  );
};
