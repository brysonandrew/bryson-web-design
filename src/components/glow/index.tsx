import {
  TPartialGlowConfigOptions,
  resolveGlowProps,
} from '@constants/colors';
import styled from '@emotion/styled';
import { TChildren, TClassValueProps } from '@t/index';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

const Effect = styled(motion.div)``;

type TProps = TPartialGlowConfigOptions &
  TClassValueProps & {
    children?: TChildren;
  };
export const Glow: FC<TProps> = ({
  classValue,
  children,
  ...options
}) => {
  return (
    <>
      {children && (
        <>
          {children}
          <Effect
            className={clsx('absolute inset-0', classValue)}
            {...resolveGlowProps(options)}
          >
            {children}
          </Effect>
        </>
      )}
    </>
  );
};
