import { AnimatePresence, motion } from 'framer-motion';
import styled from '@emotion/styled';
import { PRESENCE_X_LEFT } from '@constants/animation';
import { useContext } from '@state/Context';
import { FadeUp } from '@components/vertical-fade/FadeUp';
import { Links } from './links';
import { Settings } from './settings';

const Root = styled(motion.footer)``;

export const Footer = () => {
  const { isScroll } = useContext();

  return (
    <Root className='fixed bottom-0 left-0 w-full h-0'>
      <AnimatePresence initial={false} mode='sync'>
        {isScroll ? (
          <FadeUp key='FADE_UP' />
        ) : (
          <Links key='LINKS' {...PRESENCE_X_LEFT} />
        )}
      </AnimatePresence> 
      <Settings
        initial={false}
        style={{ originX: '100%', originY: '100%' }}
        animate={{ scale: isScroll ? 0.6 : 1 }}
      />
    </Root>
  );
};
