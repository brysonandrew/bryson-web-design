import styled from '@emotion/styled';
import { TClassValueProps, TTitleProps } from '@t/index';
import { TMotionButtonProps } from '@t/dom';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { resolveInteractiveLabels } from '@utils/attributes/resolveInteractiveLabels';
import clsx from 'clsx';

const Root = styled(motion.button)``;

type TProps = TMotionButtonProps &
  TClassValueProps &
  TTitleProps;
export const Button: FC<TProps> = ({
  classValue,
  children,
  title,
  ...props
}) => {
  return (
    <Root
      className={clsx('circle-interactive', classValue)}
      {...resolveInteractiveLabels(title)}
      {...props}
    >
      <>{children}</>
    </Root>
  );
};
