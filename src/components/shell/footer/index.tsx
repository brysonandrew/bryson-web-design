import { AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import {
  PRESENCE_X_LEFT,
  SCROLL_DECORATION_PRESENCE,
} from '@constants/animation';
import { useScroll as useScrollContext } from '@context/scroll';
import { useContext as useDarkModeContext } from '@context/dark-mode';
import { useContext as useViewportContext } from '@context/viewport/Context';
import { FadeUp } from '@components/vertical-fade/FadeUp';
import { Links } from './links';
import { Settings } from './settings';

const Root = styled.footer``;

export const Footer = () => {
  const {
     isDarkMode ,
  } = useDarkModeContext();
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
        {isScroll ? (
          <FadeUp
            key={`FADE_UP_${isDarkMode ? 'DARK' : 'LIGHT'}`}
            style={{ height: '24vh' }}
            {...SCROLL_DECORATION_PRESENCE}
          />
        ) : (
          <Links key='LINKS' {...PRESENCE_X_LEFT} />
        )}
      </AnimatePresence>
      <Settings />
    </Root>
  );
};

export default Footer;
