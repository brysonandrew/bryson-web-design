import styled from '@emotion/styled';
import clsx from 'clsx';
import { Sound } from './Sound';
import { DarkMode } from './DarkMode';
import { isMobile } from 'react-device-detect';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { TDivMotionProps } from '@brysonandrew/config/types/dom/motion';

const Root = styled(motion.div)``;

type TProps = TDivMotionProps;
export const Settings: FC<TProps> = (props) => {
  return (
    <Root
      className={clsx('row z-10', !isMobile && 'gap-1')}
      {...props}
    >
      <DarkMode  />
      {!isMobile && <Sound />}
    </Root>
  ); 
};
