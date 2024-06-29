import styled from '@emotion/styled';
import { Settings } from './settings';
import { Network } from '@brysonandrew/network';
import { BackBlur } from '@brysonandrew/layout-back';
import { Position } from './Position';
import { useApp } from '@brysonandrew/app';
import { OfflineFc } from '@shell/footer/OfflineFc';

const Root = styled.footer``;

export const Footer = () => {
  const { COLOR, BORDER_RADIUS, LIGHT, Glow } = useApp();
  const GlowWrap = LIGHT?.GlowWrap ?? Glow;
  return (
    <Root className='fixed bottom-0 left-0 w-full h-0 z-0'>
      <div className='absolute left-1/2 -translate-x-1/2 bottom-0 w-shell'>
        <Position position='left-6'>
          <Network OfflineFc={OfflineFc} />
        </Position>
        <Position position='right-6'>
          <GlowWrap
            box={6}
            color={COLOR.accent}
            style={{
              backgroundColor:'transparent',
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
