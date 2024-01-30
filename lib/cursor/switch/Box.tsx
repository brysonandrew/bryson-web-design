import { motion } from 'framer-motion';
import { ReactNode, type FC } from 'react';
import clsx from 'clsx';
import { TClassValueProps } from '@brysonandrew/types/dom/main';
import { useCursor } from '@brysonandrew/cursor';
import {
  DURATION,
  resolvePresence,
} from '@brysonandrew/animation';
import { useApp } from '@brysonandrew/app';

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
  const { Back, LIGHT, BORDER_RADIUS, COLOR } = useApp();
  const { cursorLabel } = useCursor();
  const Background = LIGHT ? LIGHT.Back : Back;
  return (
    <motion.div
      className={clsx(
        'absolute top-1/2 left-1/2 px-2',
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
            duration: DURATION * 2,
            delay: 0 + exitDelay,
          },
        },
        {
          opacity: 1,
          transition: {
            duration: DURATION * 2,
            delay: 0 + delay,
          },
        },
      )}
    >
      <Background
        style={{
          borderRadius: BORDER_RADIUS.MD,
        }}
      />
      {children}
    </motion.div>
  );
};
