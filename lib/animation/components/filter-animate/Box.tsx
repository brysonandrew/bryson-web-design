import styled from '@emotion/styled';
import { TDivMotionProps } from '@brysonandrew/lib/types/dom/motion';
import {
  TChildren,
  TClassValueProps,
} from '@brysonandrew/lib/types/dom/main';
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
      className={clsx('relative', classValue)}
      {...props}
    >
      {children}
    </Root>
  );
};
