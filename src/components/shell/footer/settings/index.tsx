import styled from '@emotion/styled';
import clsx from 'clsx';
import { Sound } from './Sound';
import { DarkMode } from './DarkMode';
import { isMobile } from 'react-device-detect';
import { HTMLMotionProps, motion } from 'framer-motion';
import { FC } from 'react';

const Root = styled(motion.div)``;

type TProps = HTMLMotionProps<'div'>;
export const Settings: FC<TProps> = (props) => {
  return (
    <Root
      className={clsx('absolute bottom-6 right-6 row z-10')}
      {...props}
    >
      <DarkMode />
      {!isMobile && (
        <>
          <motion.div className='px-2' />
          <Sound />
        </>
      )}
    </Root>
  );
};
