import clsx from 'clsx';
import styled from '@emotion/styled';
import {
  TButtonMotionProps,
  TClassValueProps,
} from '@brysonandrew/types/dom';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { resolveInteractiveLabels } from '@brysonandrew/utils/attributes/resolveInteractiveLabels';

const Root = styled(motion.button)``;

export type TButtonProps = TButtonMotionProps &
  TClassValueProps;
export const Button: FC<TButtonProps> = ({
  classValue,
  children,
  title,
  ...props
}) => {
  return (
    <Root
      className={clsx(
        'circle-interactive shrink-0 w-14 h-14',
        classValue,
      )}
      {...resolveInteractiveLabels(title)}
      {...props}
    >
      <>{children}</>
    </Root>
  );
};
