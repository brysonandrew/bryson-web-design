import styled from '@emotion/styled';
import clsx from 'clsx';
import { Sound } from './Sound';
import { DarkMode } from './DarkMode';
import { isMobile } from 'react-device-detect';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { TDivMotionProps } from '@t/dom';

const Root = styled(motion.div)``;

type TProps = TDivMotionProps;
export const Settings: FC<TProps> = (props) => {
  return (
    <Root
      className={clsx(
        'absolute bottom-6 right-6 row gap-1 z-10 backdrop-blur-sm rounded-full overflow-hidden p-1 border border-gray-02',
      )}
      {...props}
    >
      <DarkMode />
      {!isMobile && <Sound />}
    </Root>
  );
};
