import { motion } from 'framer-motion';
import { ReactNode, type FC } from 'react';
import { resolvePresence } from '@lib/utils/animation';
import clsx from 'clsx';
import { TClassValueProps } from '@lib/types/dom/main';
import {
  GLOW_TEAL_BRIGHT_4,
  GLOW_TEAL_1_BABY_BLUE_1,
} from '@uno/rules/glow';
import { useCursor } from '@lib/components/cursor/context';
import { useDarkMode } from '@lib/hooks/dark-mode/context';
import { DURATION_MID } from '@lib/constants/animation';

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
  const { cursorLabel, Background } = useCursor();
  const { isDarkMode } = useDarkMode();

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
          : GLOW_TEAL_1_BABY_BLUE_1,
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
      <Background />
      {children}
    </motion.div>
  );
};
