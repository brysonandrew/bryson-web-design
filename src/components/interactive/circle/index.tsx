import styled from '@emotion/styled';
import { useCurrName } from '@hooks/params/useCurrName';
import { TDivMotionProps } from '@t/dom';
import { TChildrenProps, TClassValueProps } from '@t/index';
import { resolveParentAnimateConfig } from '@utils/effects';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { Background } from './Background';

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
  const name = useCurrName();
  const isGallery = Boolean(name);

  return (
    <Root
      className={clsx(
        position,
        'center w-10 h-10 rounded-full',
        [isGallery ? 'dark:glow-accent glow' : 'glow'],
        classValue,
      )}
      {...resolveParentAnimateConfig({ isHover })}
      {...props}
    >
      <Background />
      {children}
    </Root>
  );
};
