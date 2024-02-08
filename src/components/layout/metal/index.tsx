import type { FC } from 'react';
import styled from '@emotion/styled';
import {
  metalRadialDarkCss,
  metalRadialLightCss,
} from '@components/layout/metal/css';
import clsx from 'clsx';
import {
  BackFillMotion,
  TBackMotionProps,
} from '@brysonandrew/layout';
import { motion } from 'framer-motion';

const Dark = styled(motion.div)`
  ${metalRadialDarkCss}
`;

const Light = styled(motion.div)`
  ${metalRadialLightCss}
`;

type TProps = TBackMotionProps;
export const Metal: FC<TProps> = ({
  classValue,
  children,
  ...rest
}) => {
  const sharedClassValue = clsx('metal fill', classValue);
  return (
    <motion.div className={sharedClassValue} {...rest}>
      <BackFillMotion {...rest} />
      <Dark
        className={clsx('opacity-dark', sharedClassValue)}
        {...rest}
      />
      <Light
        className={clsx('opacity-light', sharedClassValue)}
        {...rest}
      />
    </motion.div>
  );
};
