import { motion } from 'framer-motion';
import { ReactNode, type FC } from 'react';
import clsx from 'clsx';
import { TClassValueProps } from '@brysonandrew/config-types/dom/main';
import { useCursor } from '@brysonandrew/motion-cursor';
import { useApp } from '@brysonandrew/app';
import { DURATION } from '@brysonandrew/motion/config/constants';

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
  const { BackFill, LIGHT, BORDER_RADIUS, COLOR } =
    useApp();
  const { cursorLabel } = useCursor();
  const Background = LIGHT ? LIGHT.MOTION.Back : BackFill;
  const initExit = {
    opacity: 0,
    transition: {
      duration: DURATION * 2,
      delay: 0 + exitDelay,
    },
  };

  return (
    <motion.div
      className={clsx(
        'absolute top-1/2 left-1/2 px-3 group',
        classValue
      )}
      style={{
        ...cursorLabel,
        borderRadius: BORDER_RADIUS.MD,
      }}
      initial={initExit}
      animate={{
        opacity: 1,
        transition: {
          duration: DURATION * 2,
          delay: delay,
        },
      }}
      exit={initExit}
    >
      <Background color={COLOR.accent} />
      {children}
    </motion.div>
  );
};
