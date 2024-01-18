import clsx from 'clsx';
import styled from '@emotion/styled';
import { TButtonMotionProps, TClassValueProps, TTitleProps } from '@brysonandrew/lib/types/dom';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { resolveInteractiveLabels } from '@brysonandrew/lib/utils/attributes/resolveInteractiveLabels';

const Root = styled(motion.button)``;

type TProps = TButtonMotionProps &
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
      className={clsx(
        'circle-interactive shrink-0 w-12 h-12',
        classValue,
      )}
      {...resolveInteractiveLabels(title)}
      {...props}
    >
      <>{children}</>
    </Root>
  );
};
