import styled from '@emotion/styled';
import { TDivMotionProps } from '@lib/types/dom/motion';
import { TChildren, TClassValueProps } from '@lib/types/dom/main';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

const Root = styled(motion.div)``;

type TProps = TDivMotionProps &
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
        'relative glow',
        classValue,
      )}
      {...props}
    >
      {children}
    </Root>
  );
};
