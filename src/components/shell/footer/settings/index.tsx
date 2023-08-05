import styled from '@emotion/styled';
import clsx from 'clsx';
import { Sound } from './Sound';
import { DarkMode } from './DarkMode';
import { isMobile } from 'react-device-detect';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { TMotionDivProps } from '@t/dom';

const Root = styled(motion.div)``;

type TProps = TMotionDivProps;
export const Settings: FC<TProps> = (props) => {
  return (
    <Root
      className={clsx('absolute bottom-6 right-6 row z-10')}
      {...props}
    > 
      <DarkMode />  
      {!isMobile && (
        <>
          <motion.div className='px-1' />
          <Sound />
        </>
      )}
    </Root>
  );
};
