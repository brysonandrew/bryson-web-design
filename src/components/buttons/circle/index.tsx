import { MetalGlow } from '@components/metal/MetalGlow';
import styled from '@emotion/styled';
import { TMotionDivProps } from '@t/dom';
import { TChildrenProps, TClassValueProps } from '@t/index';
import { resolveParentAnimateConfig } from '@utils/effects';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

const Root = styled(motion.div)``;

type TPosition = 'relative' | 'absolute';

type TProps = TMotionDivProps &
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
  return (
    <Root
      className={clsx(
        position,
        'center w-10 h-10 rounded-full glow-interactive-lg',
        classValue,
      )}
      {...resolveParentAnimateConfig({isHover})}
      {...props}
    >
      <MetalGlow
        drop={1}
        isDarkest
        classValue='rounded-full glow-baby-blue'
      />
      {children}
    </Root>
  );
};
