import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { TDivMotionProps } from '@brysonandrew/config/types/dom/motion';
import { TClassValueProps } from '@brysonandrew/config/types/dom';

const Root = styled(motion.div)``;

type TProps = TDivMotionProps &
  TClassValueProps & { position: 'left-6' | 'right-6' };
export const Position: FC<TProps> = ({
  children,
  position,
  classValue,
  ...props
}) => {
  return (
    <Root
      className={clsx(
        'absolute bottom-6 z-10',
        position,
        classValue,
      )}
      {...props}
    >
      {children}
    </Root>
  );
};
