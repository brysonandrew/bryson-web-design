import { motion } from 'framer-motion';
import { ReactNode, type FC } from 'react';
import { resolvePresence } from '@utils/animation';
import clsx from 'clsx';
import { TClassValueProps } from '@t/index';
import { Metal } from '@components/metal';
import {
  GLOW_BOX,
  GLOW_INTERACTIVE_LIGHT,
} from '@uno/config-shadows';
import { useContext } from '@state/Context';

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
    darkMode: { isDarkMode },
  } = useContext();
  return (
    <motion.div
      layout='size'
      className={clsx(
        'relative text-xl pl-3 pr-4 pb-1',
        classValue,
      )}
      style={{
        boxShadow: isDarkMode
          ? GLOW_BOX
          : GLOW_INTERACTIVE_LIGHT,
      }}
      {...resolvePresence(
        {
          opacity: 0,
          transition: {
            duration: 0.4,
            delay: 0 + exitDelay,
          },
        },
        {
          opacity: 1,
          transition: { duration: 0.4, delay: 0 + delay },
        },
      )}
    >
      <Metal />
      {children}
    </motion.div>
  );
};
