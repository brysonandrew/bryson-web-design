import { MetalGlow } from '@components/metal/MetalGlow';
import styled from '@emotion/styled';
import { TMotionDivProps } from '@t/dom';
import { TChildrenProps, TClassValueProps } from '@t/index';
import { PARENT_GLOW_PROPS } from '@utils/effects/glow';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

const Root = styled(motion.div)``;

type TProps = TClassValueProps &
  TChildrenProps &
  TMotionDivProps;
export const Circle: FC<TProps> = ({
  classValue,
  children,
  ...props
}) => {
  return (
    <Root
      className={clsx(
        'center glow-interactive-lg w-10 h-10 rounded-full',
        classValue,
      )}
      {...PARENT_GLOW_PROPS}
      {...props}
    >
      <MetalGlow isDarkest classValue='rounded-full glow-baby-blue' />
      {children}
    </Root>
  );
};
