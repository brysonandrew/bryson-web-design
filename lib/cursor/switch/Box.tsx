import { motion } from 'framer-motion';
import { ReactNode, type FC } from 'react';
import clsx from 'clsx';
import { resolvePresence } from 'lib/animation/utils';
import { TClassValueProps } from 'lib/types/dom/main';
import { useCursor } from 'lib/cursor/context';
import {
  DURATION_MID,
  PRESENCE_OPACITY,
} from 'lib/animation/constants';
import { useApp } from 'lib/context/app/useApp';

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
  const { Texture, Glow, BORDER_RADIUS, COLOR } = useApp();
  const { cursorLabel } = useCursor();

  return (
    <motion.div
      className={clsx(
        'absolute top-1/2 left-1/2 text-xl px-2',
        classValue,
      )}
      style={{
        ...cursorLabel,
        borderRadius: BORDER_RADIUS.MD,
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
      <Glow
        box={4}
        color={COLOR.accent}
        {...PRESENCE_OPACITY}
      >
        <Texture />
      </Glow>
      {children}
    </motion.div>
  );
};
