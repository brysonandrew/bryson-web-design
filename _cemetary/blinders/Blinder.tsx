import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { TChildrenProps } from '@t/index';
import { SLOW_MOTION_CONFIG } from '@constants/animation';

const Root = styled(motion.div)``;

type TProps = Partial<TChildrenProps>;
export const Blinder: FC<TProps> = () => (
  <Root
    className={clsx(
      'absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-black z-10 pointer-events-none opacity-60',
    )}
    variants={{ hover: { opacity: 0 } }}
    transition={SLOW_MOTION_CONFIG}
  />
); 
