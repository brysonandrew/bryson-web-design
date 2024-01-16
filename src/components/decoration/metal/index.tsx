import type { FC } from 'react';
import styled from '@emotion/styled';
import {
  TClassValueProps,
  TDivMotionProps,
} from '@lib/types/dom';
import {
  metalRadialDarkCss,
  metalRadialLightCss,
} from '@components/decoration/metal/css';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const Root = styled(motion.div)`
  background-color: var(--white-9);
  html.dark & {
    background-color: var(--black);
  }
`;

const Effect = styled(motion.div)`
  ${metalRadialLightCss}
  html.dark & {
    ${metalRadialDarkCss}
  }
`;

type TProps = TDivMotionProps & TClassValueProps;
export const Metal: FC<TProps> = ({
  classValue,
  ...rest
}) => {
  const props = {
    className: clsx('absolute inset-0', classValue),
    ...rest,
  };
  return (
    <Root {...props}>
      <Effect {...props} />
    </Root>
  );
};
