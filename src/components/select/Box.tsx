import { motion } from 'framer-motion';
import { ReactNode, type FC } from 'react';
import { resolvePresence } from '@utils/animation';
import clsx from 'clsx';
import { TClassValueProps } from '@t/index';
import {
  GLOW_BOX,
  GLOW_INTERACTIVE_LIGHT,
} from '@uno/config-shadows';
import { useContext } from '@state/Context';
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
  delay = 0,
  exitDelay = 0,
}) => {
  const {
    cursorLabelX,
    cursorLabelY,
    darkMode: { isDarkMode },
  } = useContext();

  return (
    <motion.div
      className={clsx(
        'absolute top-1/2 left-1/2 text-xl px-2 rounded-md',
        classValue,
      )}
      style={{
        x: cursorLabelX,
        y: cursorLabelY,
        boxShadow: isDarkMode
          ? GLOW_BOX
          : GLOW_INTERACTIVE_LIGHT,
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
