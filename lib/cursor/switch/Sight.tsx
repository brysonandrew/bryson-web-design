import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import {
  TChildren,
  TClassValueProps,
} from '@brysonandrew/config-types/dom/main';
import { TDivMotionProps } from '@brysonandrew/config-types/dom/motion';
import { useCursor } from '@brysonandrew/cursor';

const DEFAULT_ANIMATE = {
  opacity: 1,
  scale: 1,
};

const resolveSize = (size: number) => {
  return {
    width: size,
    height: size,
  };
};

type TProps = TDivMotionProps &
  TClassValueProps & {
    size?: number;
    children?: TChildren;
  };
export const Sight: FC<TProps> = ({
  classValue,
  style,
  size = 8,
  animate,
  children,
  ...props
}) => {
  const { cursor, cursorLabel } = useCursor();

  return (  
    <motion.div
      style={{
        left: cursor.x,
        top: cursor.y,
        originX: '50%',
        originY: '50%',
        opacity: 1,
        scale: 1,
        ...resolveSize(size),
        ...cursorLabel,
        ...style,
      }}
      className={clsx(
        'fixed center dark:bg-highlight bg-accent glow pointer-events-none rounded-full cursor-default z-50',
        classValue,
      )}
      animate={{
        ...DEFAULT_ANIMATE,
        ...(typeof animate === 'object' ? animate : {}),
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
