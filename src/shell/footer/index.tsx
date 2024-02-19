import styled from '@emotion/styled';
import { Settings } from './settings';
import { Network } from '@brysonandrew/network';
import { BackBlur } from '@brysonandrew/layout-back';
import { Position } from './Position';
import { OfflineFC } from './OfflineFC';
import { useApp } from '@brysonandrew/app';

const Root = styled.footer``;

export const Footer = () => {
  const { BORDER_RADIUS, LIGHT, Glow } = useApp();
  const GlowWrap = LIGHT?.GlowWrap ?? Glow;
  return (
    <Root className='fixed bottom-0 left-0 w-full h-0 z-0'>
      <div className='absolute left-1/2 -translate-x-1/2 bottom-0 w-shell'>
        <Position position='left-6'>
          <Network OfflineFC={OfflineFC} />
        </Position>
        <Position position='right-6'>
          <GlowWrap 
          box={10}
            style={{
              borderRadius: BORDER_RADIUS.XL,
            }} 
          >
            <BackBlur
              style={{
                borderRadius: BORDER_RADIUS.XL,
              }}
            >
              <Settings />
            </BackBlur>
          </GlowWrap>
        </Position>
      </div>
    </Root>
  );
};
