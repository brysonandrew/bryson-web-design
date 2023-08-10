import styled from '@emotion/styled';
import { TClassValueProps, TTitleProps } from '@t/index';
import { TMotionAnchorProps } from '@t/dom';
import { motion } from 'framer-motion';
import { FC } from 'react';

const Root = styled(motion.a)``;

type TProps = TMotionAnchorProps &
  TClassValueProps &
  TTitleProps;
export const Anchor: FC<TProps> = ({
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
