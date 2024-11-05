import type { FC } from 'react';
import { TDivMotionProps } from '@brysonandrew/config-types/dom/motion';
import { motion } from 'framer-motion';
import { useApp } from '@brysonandrew/app';
import { cx } from 'class-variance-authority';
import { DURATION, PRESENCE_OPACITY } from '@brysonandrew/motion-config-constants';

type TProps = TDivMotionProps;
export const Background: FC<TProps> = ({
  style,
  ...props
}) => {
  const { BackBlur, BORDER_RADIUS, GLOW_BOX } = useApp();
  return (
    <motion.div
      className='absolute w-10 h-10 backdrop-blur-sm bg-gray-01 pointer-events-none'
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
        className={cx('absolute inset-0')}
        {...PRESENCE_OPACITY}
        style={{
          borderRadius: BORDER_RADIUS.XL,
          boxShadow: GLOW_BOX.secondary,
          ...style,
        }}
      />
    </motion.div>
  );
};
