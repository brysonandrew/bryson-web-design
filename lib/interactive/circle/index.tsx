import styled from '@emotion/styled';
import {
  TChildrenProps,
  TClassValueProps,
  TDivMotionProps,
} from '@brysonandrew/types/dom';
import { R } from '@brysonandrew/animation';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { Background } from './Background';
import { useApp } from '@brysonandrew/app';

const Root = styled(motion.div)``;

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
    <Root
      className={clsx(
        position,
        'center w-10 h-10',
        classValue,
      )}
      style={{
        borderRadius: BORDER_RADIUS.XL,
        filter: GLOW_DROP.accent,
      }}
      {...R.resolveParentAnimateConfig({ isHover })}
      {...props}
    >
      <>
        <Background />
        {children}
      </>
    </Root>
  );
};
