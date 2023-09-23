import type { FC } from 'react';
import styled from '@emotion/styled';
import { useReader } from './context';
import { Buttons } from './controls/buttons';
import { Voices } from './controls/Voices';
import { Settings } from './controls/settings';
import { P2 } from '@components/space/P2';
import { P4 } from '@components/space/P4';
import { useListeners } from './hooks/useListeners';
import { useSynthesis } from './hooks/useSynthesis';
import { Lang } from './controls/Lang';
import { TextInput } from './TextInput';

const Root = styled.div``;

export const Main: FC = () => {
  useSynthesis();
  useListeners();

  return (
    <Root className='column bg-grey p-4 w-full h-screen'>
      <div className='row-space w-full p-4'>
        <div className='row'>
          <Buttons />
          <P4 />
          <Settings />
        </div>
        <div className='column-end'>
          <Lang />
          <P2 />
          <Voices />
        </div>
      </div>
      <P2 classValue='grow-0' />
      <TextInput />
    </Root>
  );
};
