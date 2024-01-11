import styled from '@emotion/styled';
import { metalRadialDarkCss } from '@components/decoration/metal/css';
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { TDivMotionProps } from '@t/dom';

const DefaultRoot = styled(motion.div)`
  background-color: var(--white-9);
  html.dark & {
    ${metalRadialDarkCss}
  }
`;

export type TRootProps = TDivMotionProps & {
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
  <Root className={clsx(`absolute inset-0`, classValue)} {...props} />
);
