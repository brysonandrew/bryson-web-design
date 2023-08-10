import styled from '@emotion/styled';
import { TClassValueProps, TTitleProps } from '@t/index';
import { TMotionButtonProps } from '@t/dom';
import { motion } from 'framer-motion';
import { FC } from 'react';

const Root = styled(motion.button)``;

type TProps = TMotionButtonProps &
  TClassValueProps &
  TTitleProps;
export const Button: FC<TProps> = ({
  classValue,
  children,
  ...props
}) => {
  return (
    <Root
      className='circle-interactive'
      aria-label={props.title}
      {...props}
    >
      <>{children}</>
    </Root>
  );
};
