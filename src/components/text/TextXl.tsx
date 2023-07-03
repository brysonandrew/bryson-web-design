import styled from '@emotion/styled';
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';

const Root = styled(motion.h3)`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgb(153, 204, 255);
`;

type TProps = HTMLMotionProps<'h3'> & {
  classValue?: ClassValue;
};
export const TextXl: FC<TProps> = ({
  classValue,
  style,
  children,
  ...props
}) => (
  <Root
    className={clsx(
      'uppercase text-teal text-left px-2 tracking-widest text-3xl md:text-4xl xl:px-4',
      classValue,
    )}
    {...props}
  >
    {children}
  </Root>
);
