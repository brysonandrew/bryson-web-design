import styled from '@emotion/styled';
import { Settings } from './settings';
import { Network } from '@brysonandrew/network';
import { BackBlur } from '@brysonandrew/layout-back';
import { Position } from './Position';
import { OfflineFC } from './OfflineFC';

const Root = styled.footer``;

export const Footer = () => {
  return (
    <Root className='fixed bottom-0 left-0 w-full h-0 z-0'>
      <div className='relative w-shell'>
        <Position position='left-6'>
          <Network OfflineFC={OfflineFC} />
        </Position>
        <Position position='right-6'>
          <BackBlur>
            <Settings />
          </BackBlur>
        </Position>
      </div>
    </Root>
  );
};
