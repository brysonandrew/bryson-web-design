import { AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import { PRESENCE_OPACITY } from '@app/animation';
import { useScroll } from '@brysonandrew/scroll';
import { useViewport } from '@brysonandrew/viewport';
import { FadeUp } from '@brysonandrew/fade/FadeUp';
import { Settings } from './settings';
import { Network } from '@brysonandrew/network';
import { BackdropBlur } from '@brysonandrew/layout/backdrop-blur';
import { Position } from './Position';
import {
  TRANSITION_DARK_MODE,
  useDarkMode,
} from '@brysonandrew/dark-mode';
import { OfflineFC } from './OfflineFC';

const Root = styled.footer``;

export const Footer = () => {
  const { isDarkMode } = useDarkMode();
  const { isScroll } = useScroll();
  const { width } = useViewport();
  return (
    <Root
      className='fixed bottom-0 left-0 w-full h-0'
      style={{
        zIndex: width,
        transform: `translateZ(${width})`,
      }}
    >
      <AnimatePresence>
        {isScroll && (
          <FadeUp
            key={`FADE_UP_${isDarkMode ? 'DARK' : 'LIGHT'}`}
            style={{ height: '24vh' }}
            transition={TRANSITION_DARK_MODE}
            {...PRESENCE_OPACITY}
          />
        )}
      </AnimatePresence>
      <Position position='left-6'>
        <Network OfflineFC={OfflineFC} />
      </Position>
      <Position position='right-6'>
        <BackdropBlur>
          <Settings />
        </BackdropBlur>
      </Position>
    </Root>
  );
};
