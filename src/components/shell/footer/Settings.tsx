import styled from '@emotion/styled';
import clsx from 'clsx';
import { Sound } from './Sound';
import { DarkMode } from './DarkMode';
import { isMobile } from 'react-device-detect';

const Root = styled.div``;

export const Settings = () => {
  return (
    <Root
      className={clsx('absolute bottom-6 right-6 row z-10')}
    >
      <DarkMode />
      {!isMobile && (
        <>
          <div className='px-2' />
          <Sound />
        </>
      )}
    </Root>
  );
};
