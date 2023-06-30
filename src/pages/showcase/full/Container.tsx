import styled from '@emotion/styled';
import type { TChildren } from '@t/index';
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<'div'> & {
  children?: TChildren;
  classValue: ClassValue;
};
export const Container: FC<TProps> = ({
  classValue,
  children,
  style,
  ...props
}) => (
  <Root
    className={clsx("inset-0", classValue)}
    style={{
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(12,12,12, 0.9)',
      zIndex: 999,
      ...style,
    }}
    {...props}
  >
    {children}
  </Root>
);
