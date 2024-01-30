import type { FC } from 'react';
import styled from '@emotion/styled';
import {
  TClassValueProps,
  TDivMotionProps,
} from '@brysonandrew/types/dom';
import {
  metalRadialDarkCss,
  metalRadialLightCss,
} from '@components/layout/metal/css';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { BackgroundFill } from '@brysonandrew/dark-mode';

const Dark = styled(motion.div)`
  ${metalRadialDarkCss}
`;

const Light = styled(motion.div)`
  ${metalRadialLightCss}
`;

type TProps = TDivMotionProps & TClassValueProps;
export const Metal: FC<TProps> = ({
  classValue,
  ...rest
}) => {
  const sharedClassValue = clsx('fill', classValue);
  return (
    <motion.div className={sharedClassValue} {...rest}>
      <BackgroundFill {...rest} />
      <Dark
        className={clsx(
          sharedClassValue,
          'fill opacity-dark',
        )}
        {...rest}
      />
      <Light
        className={clsx(
          'fill opacity-light',
          sharedClassValue,
        )}
        {...rest}
      />
    </motion.div>
  );
};
