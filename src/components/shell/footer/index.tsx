import { AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import {
  PRESENCE_OPACITY,
  TRANSITION_DARK_MODE,
} from '@constants/animation';
import { useScroll as useScrollContext } from '@context/scroll';
import { useDarkMode } from '@hooks/dark-mode/context';
import { useViewport as useViewportContext } from '@context/viewport';
import { FadeUp } from '@components/decoration/vertical-fade/FadeUp';
import { Settings } from './settings';

const Root = styled.footer``;

export const Footer = () => {
  const { isDarkMode } = useDarkMode();
  const { isScroll } = useScrollContext();
  const { width } = useViewportContext();
  return (
    <Root
      className='fixed bottom-0 left-0 w-full h-0'
      style={{
        zIndex: width,
        transform: `translateZ(${width})`,
      }}
    >
      <AnimatePresence initial={false} mode='wait'>
        {isScroll && (
          <FadeUp
            key={`FADE_UP_${isDarkMode ? 'DARK' : 'LIGHT'}`}
            style={{ height: '24vh' }}
            transition={TRANSITION_DARK_MODE}
            {...PRESENCE_OPACITY}
          />
        )}
      </AnimatePresence>
      <Settings />
    </Root>
  );
};

export default Footer;
