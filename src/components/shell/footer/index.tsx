import { AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import { SCROLL_DECORATION_PRESENCE } from '@constants/animation';
import { useScroll as useScrollContext } from '@context/scroll';
import { useDarkMode } from '@context/dark-mode';
import { useViewport as useViewportContext } from '@context/viewport';
import { FadeUp } from '@components/vertical-fade/FadeUp';
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
      <AnimatePresence initial={false} mode='sync'>
        {isScroll && (
          <FadeUp
            key={`FADE_UP_${isDarkMode ? 'DARK' : 'LIGHT'}`}
            style={{ height: '24vh' }}
            {...SCROLL_DECORATION_PRESENCE}
          />
        )}
      </AnimatePresence>
      <Settings />
    </Root>
  );
};

export default Footer;
