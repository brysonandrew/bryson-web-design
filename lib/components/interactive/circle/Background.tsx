import type { FC } from 'react';
import { TDivMotionProps } from '@lib/types/dom';
import { DURATION } from '@lib/animation/constants';
import { motion } from 'framer-motion';
import { useApp } from '@lib/context/app/useApp';
import { resolvePresence } from '@lib/animation/utils';

type TProps = TDivMotionProps;
export const Background: FC<TProps> = ({
  style,
  ...props
}) => {
  const { Texture, BORDER_RADIUS, GLOW } = useApp();
  return (
    <motion.div
      className='absolute w-10 h-10 pointer-events-none'
      style={{
        borderRadius: BORDER_RADIUS.XL,
      }}
      transition={{ duration: DURATION * 3 }}
      {...props}
    >
      <Texture style={{ borderRadius: BORDER_RADIUS.XL }} />
      <motion.div
        className='absolute inset-0'
        {...resolvePresence(
          { opacity: 0.5 },
          { opacity: 1 },
        )}
        style={{
          borderRadius: BORDER_RADIUS.XL,
          boxShadow: GLOW.highlight,
          ...style,
        }}
      />
    </motion.div>
  );
};
