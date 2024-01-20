import { AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import {
  PRESENCE_OPACITY,
  TRANSITION_DARK_MODE,
} from '@brysonandrew/animation/config/constants';
import { useScroll as useScrollContext } from '@brysonandrew/scroll/useScroll';
import { useViewport as useViewportContext } from '@brysonandrew/viewport/useViewport';
import { FadeUp } from '@brysonandrew/base/components/layout/vertical-fade/FadeUp';
import { Settings } from './settings';
import { Network } from '@brysonandrew/base/network';
import { BackdropBlur } from '@brysonandrew/base/components/layout/backdrop-blur';
import { Position } from './Position';
import { useDarkMode } from '@brysonandrew/dark-mode';

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
        <Network key='Network' />
      </Position>
      <Position position='right-6'>
        <BackdropBlur>
          <Settings />
        </BackdropBlur>
      </Position>
    </Root>
  );
};
