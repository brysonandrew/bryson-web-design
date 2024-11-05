import type { FC } from 'react';
import styled from '@emotion/styled';
import {
  metalRadialDarkCss,
  metalRadialLightCss,
} from '@brysonandrew/texture-metal/css';
import { cx } from 'class-variance-authority';
import { TDivMotionProps } from '@brysonandrew/config-types';
import { motion } from 'framer-motion';
import { BackMotionFill } from '@brysonandrew/layout-back/motion/Fill';

const Dark = styled(motion.div)`
  ${metalRadialDarkCss}
`;

const Light = styled(motion.div)`
  ${metalRadialLightCss}
`;

type TProps = TDivMotionProps;
export const TextureMetalMotion: FC<TProps> = ({
  classValue,
  children,
  ...rest
}) => {
  const sharedClassValue = cx('fill', classValue);
  return (
    <motion.div className={sharedClassValue} {...rest}>
      <BackMotionFill {...rest} />
      <Dark
        className={cx('opacity-dark', sharedClassValue)}
        {...rest}
      />
      <Light
        className={cx('opacity-light', sharedClassValue)}
        {...rest}
      />
    </motion.div>
  );
};
