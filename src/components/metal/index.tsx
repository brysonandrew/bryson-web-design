import styled from '@emotion/styled';
import { metalRadialDarkCss } from '@css/metal';
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type { FC } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

const DefaultRoot = styled(motion.div)`
  background-color: var(--white-1);
  filter: none;
  html.dark & {
    ${metalRadialDarkCss}
  }
`;

export type TRootProps = HTMLMotionProps<'div'> & {
  classValue?: ClassValue;
};
type TProps = TRootProps & {
  Root?: FC<TRootProps>;
};
export const Metal: FC<TProps> = ({
  Root = DefaultRoot,
  classValue,
  ...props
}) => (
  <Root
    className={clsx(`absolute inset-0`, classValue)}
    {...props}
  />
);
