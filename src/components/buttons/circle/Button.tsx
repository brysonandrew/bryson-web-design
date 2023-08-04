import styled from '@emotion/styled';
import { TClassValueProps } from '@t/index';
import { TMotionButtonProps } from '@t/react';
import { motion } from 'framer-motion';
import { FC } from 'react';

const Root = styled(motion.button)``;

type TProps = TMotionButtonProps & TClassValueProps;
export const Button: FC<TProps> = ({
  classValue,
  children,
  ...props
}) => {
  return (
    <Root
      className='circle-interactive'
      {...props}
    >
      <>{children}</>
    </Root>
  );
};
