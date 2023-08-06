import styled from '@emotion/styled';
import { TChildren, TClassValueProps } from '@t/index';
import clsx from 'clsx';
import { HTMLMotionProps, motion } from 'framer-motion';
import { FC } from 'react';

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<'div'> &
  TClassValueProps & {
    children?: TChildren;
  };
export const Box: FC<TProps> = ({
  classValue,
  children,
  ...props
}) => {
  return (
    <Root
      className={clsx(
        'relative glow-interactive',
        classValue,
      )}
      {...props}
    >
      {children}
    </Root>
  );
};
