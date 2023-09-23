import type { FC } from 'react';
import styled from '@emotion/styled';
import { TextInput } from './components/Inputs';
import { useReader } from './context';
import { Buttons } from './controls/Buttons';
import { Voices } from './controls/Voices';
import { Settings } from './controls/Settings';
import { P2 } from '@components/space/P2';
import { P6 } from '@components/space/P6';
import { P4 } from '@components/space/P4';
import { useListeners } from './hooks/useListeners';
import { useSynthesis } from './hooks/useSynthesis';
import { Lang } from './controls/Lang';

const Root = styled.div``;

export const Main: FC = () => {
  const {
    speechSynthesisState: [speechSynthesis, setSynthesis],
    selectedVoiceState: [selectedVoice, setSelectedVoice],
    phraseState: [phrase, setPhrase],
    playModeState: [playMode, setPlaying],
    utteranceState: [utterance, setUtterance],
    langState: [lang, setLang],
    voicesState: [voices, setVoices],
  } = useReader();

  useSynthesis();
  useListeners();

  return (
    <Root className='column bg-grey p-4 w-full h-screen'>
      <div className='row-space w-full p-4'>
        <div className='row'>
          <Buttons />
          <P2 />
          <Settings />
        </div>
        <div className='column-end'>
          <Lang />
          <P2 />
          <Voices />
        </div>
      </div>
      <P2 classValue='grow-0' />
      <label className='w-full bg-black-1 grow'>
        <TextInput
          className='w-full h-full p-4'
          name='phrase'
          placeholder='Enter a phrase'
          value={phrase ?? ''}
          onChange={({ currentTarget }) =>
            setPhrase(currentTarget.value)
          }
        />
      </label>
    </Root>
  );
};
