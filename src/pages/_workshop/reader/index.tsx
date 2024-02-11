import type { FC } from 'react';
import { Buttons } from './controls/buttons';
import { Voices } from './controls/voices';
import { Settings } from './controls/settings';
import { P2 } from '@brysonandrew/space/P2';
import { TextInput } from './components/TextInput';
import { ReaderShell } from './components/ReaderShell';

export const Reader: FC = () => {
  return (
    <ReaderShell>
      <div className='column bg-grey p-4 w-full h-screen'>
        <div className='column w-full gap-4 md:row-space'>
          <Buttons />
          <div className='row w-full gap-4'>
            <Voices />
            <Settings />
          </div>
        </div>
        <P2 classValue='grow-0' />
        <TextInput />
      </div>
    </ReaderShell>
  );
};
