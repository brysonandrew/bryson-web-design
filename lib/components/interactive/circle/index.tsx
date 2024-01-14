import styled from '@emotion/styled';
import { useCurrName } from '@pages/projects/gallery/hooks/params/useCurrName';
import { TChildrenProps, TClassValueProps, TDivMotionProps } from '@lib/types/dom';
import { resolveParentAnimateConfig } from '@lib/utils/effect';
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
