import styled from '@emotion/styled';
import clsx from 'clsx';
import { Sound } from './Sound';
import { DarkMode } from './DarkMode';
import { isMobile } from 'react-device-detect';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { TDivMotionProps } from '@brysonandrew/types/dom/motion';
import { R } from '@app/animation';

const Root = styled(motion.div)``;

type TProps = TDivMotionProps;
export const Settings: FC<TProps> = (props) => {
  return (
    <Root
      className={clsx('row z-10', !isMobile && 'gap-2')}
      {...props}
    >
      <DarkMode resolveOrigin={R.resolveRotateXPresence} />
      {!isMobile && <Sound />}
    </Root>
  );
};
