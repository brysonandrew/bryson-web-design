import styled from '@emotion/styled';
import { metalRadialCss, metalRadialLightCss } from '@css/metal';
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type { FC } from 'react';
import { Center } from './Center';
import { HTMLMotionProps, motion } from 'framer-motion';

const Root = styled(motion.div)`
  ${metalRadialLightCss}
`;

type TProps = HTMLMotionProps<'div'> & {
  classValue?: ClassValue;
  inset?: number;
};
export const FillLight: FC<TProps> = ({
  classValue,
  inset,
  ...props
}) => (
  <Root
    className={clsx(`absolute inset-0`, classValue)}
    {...props}
  >
    {typeof inset === 'number' ? (
      <Center inset={inset} />
    ) : null}
  </Root>
);
