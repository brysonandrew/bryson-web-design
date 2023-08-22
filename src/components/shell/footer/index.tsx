import { AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import {
  PRESENCE_X_LEFT,
  SCROLL_DECORATION_PRESENCE,
} from '@constants/animation';
import { useContext } from '@context/domains/gallery/Context';
import { useContext as useScrollContext } from '@context/scroll/Context';
import { useContext as useDarkModeContext } from '@context/dark-mode/Context';
import { FadeUp } from '@components/vertical-fade/FadeUp';
import { Links } from './links';
import { Settings } from './settings';
import { RADIUS_Z } from '@hooks/media/fake-3D/useZ';

const Root = styled.footer``;

export const Footer = () => {
    const {
    darkMode: { isDarkMode },
  } = useDarkModeContext();

  const { isScroll } = useScrollContext();
  return (
    <Root
      className='fixed bottom-0 left-0 w-full h-0'
      style={{
        zIndex: RADIUS_Z,
        transform: `translateZ(${RADIUS_Z})`,
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
