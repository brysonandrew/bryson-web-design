import styled from '@emotion/styled';
import {
  TChildrenProps,
  TClassValueProps,
  TDivMotionProps,
} from '@lib/types/dom';
import { resolveParentAnimateConfig } from '@lib/animation/components/filter-animate/utils';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { Background } from './Background';
import { useApp } from '@lib/context/app/useApp';

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
  const { BORDER_RADIUS, GLOW, Glow, COLOR } = useApp();

  return (
    <Root
      className={clsx(
        position,
        'center w-10 h-10',
        classValue,
      )}
      style={{
        borderRadius: BORDER_RADIUS.XL,
        filter: GLOW.DROP.accent,
      }}
      {...resolveParentAnimateConfig({ isHover })}
      {...props}
    >
      <>
        <Background />
        {children}
      </>
    </Root>
  );
};
