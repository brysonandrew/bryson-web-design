import {
  TChildrenProps,
  TClassValueProps,
  TDivMotionProps,
} from '@brysonandrew/config-types/dom';
import { cx } from 'class-variance-authority';
import { FC } from 'react';
import { Background } from './Background';
import { useApp } from '@brysonandrew/app';
import { motion } from 'framer-motion';
import { resolveParentAnimateConfig } from '@brysonandrew/motion-core';

type TPosition = 'relative' | 'absolute';

type TProps = TDivMotionProps &
  TClassValueProps &
  TChildrenProps & {
    isHover?: boolean;
    position?: TPosition;
  };
export const Circle: FC<TProps> = ({
  position = 'relative',
  isHover,
  classValue,
  children,
  ...props
}) => {
  const { BORDER_RADIUS, GLOW_DROP } = useApp();

  return (
    <motion.div
      className={cx(
        position,
        'center w-10 h-10',
        classValue
      )}
      style={{
        borderRadius: BORDER_RADIUS.XL,
        filter: GLOW_DROP.accent,
      }}
      {...resolveParentAnimateConfig({ isHover })}
      {...props}
    >
      <>
        <Background />
        {children}
      </>
    </motion.div>
  );
};
