import type { FC } from 'react';
import { TDivMotionProps } from '@brysonandrew/config-types/dom/motion';
import {
  DURATION,
  resolvePresence,
} from '@brysonandrew/animation';
import { motion } from 'framer-motion';
import { useApp } from '@brysonandrew/app';
import clsx from 'clsx';

type TProps = TDivMotionProps;
export const Background: FC<TProps> = ({
  style,
  ...props
}) => {
  const { BackBlur, BORDER_RADIUS, GLOW_BOX } = useApp();
  return (
    <motion.div
      className='absolute w-10 h-10 backdrop-blur-sm bg-black-08 pointer-events-none'
      style={{
        borderRadius: BORDER_RADIUS.XL,
      }}
      transition={{ duration: DURATION * 3 }}
      {...props}
    >
      <BackBlur
        style={{ borderRadius: BORDER_RADIUS.XL }}
      />
      <motion.div
        className={clsx('absolute inset-0')}
        {...resolvePresence(
          { opacity: 0.5 },
          { opacity: 1 },
        )}
        style={{
          borderRadius: BORDER_RADIUS.XL,
          boxShadow: GLOW_BOX.highlight,
          ...style,
        }}
      />
    </motion.div>
  );
};
