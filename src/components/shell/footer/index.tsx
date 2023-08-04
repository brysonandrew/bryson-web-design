import { AnimatePresence, motion } from 'framer-motion';
import styled from '@emotion/styled';
import { PRESENCE_X_LEFT } from '@constants/animation';
import { useContext } from '@state/Context';
import { FadeUp } from '@components/vertical-fade/FadeUp';
import { Links } from './links';
import { Settings } from './settings';
import { RANGE_Z } from '@pages/index/build/images/hooks/useZ';

const Root = styled(motion.footer)``;

export const Footer = () => {
  const { isScroll } = useContext();

  return (
    <Root
      className='fixed bottom-0 left-0 w-full h-0'
      style={{ zIndex: RANGE_Z, z: RANGE_Z }}
    >
      <AnimatePresence initial={false} mode='sync'>
        {isScroll ? (
          <FadeUp key='FADE_UP' />
        ) : (
          <Links key='LINKS' {...PRESENCE_X_LEFT} />
        )}
      </AnimatePresence>
      <Settings />
    </Root>
  );
};
