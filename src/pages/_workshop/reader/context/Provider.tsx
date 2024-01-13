import {
  PropsWithChildren,
  useState,
  type FC,
} from 'react';
import { Reader, useReader } from '.';
import {
  TContext,
  TLang,
  TPhrase,
  TPlayMode,
  TSelectedVoice,
  TSpeechSynthesis,
  TUtterance,
} from './types';
import { useClipboardContext } from './clipboard/useClipboardContext';
import { useListeners } from '../hooks/useListeners';
import { useSynthesis } from '../hooks/useSynthesis';

export const Provider: FC<PropsWithChildren> = ({
  children,
}) => {
  const context = useReader();

  const speechSynthesisState =
    useState<TSpeechSynthesis>(null);
  const selectedVoiceState = useState<TSelectedVoice>(null);
  const phraseState = useState<TPhrase>(null);
  const playModeState = useState<TPlayMode>(null);
  const utteranceState = useState<TUtterance>(null);
  const volumeState = useState<number>(1);
  const rateState = useState<number>(1);
  const pitchState = useState<number>(1);
  const langState = useState<TLang>(null);
  const voicesState = useState<
    SpeechSynthesisVoice[] | null
  >(null);

  const clipboardContext = useClipboardContext();

  useSynthesis({
    selectedVoiceState,
    speechSynthesisState,
    voicesState,
  });
  useListeners({
    playModeState,
    utteranceState,
    volumeState,
    rateState,
    pitchState,
  });

  const value: TContext = {
    ...context,
    speechSynthesisState,
    selectedVoiceState,
    phraseState,
    playModeState,
    utteranceState,
    volumeState,
    rateState,
    pitchState,
    langState,
    voicesState,
    clipboardContext,
  };

  return (
    <Reader.Provider value={value}>
      {children}
    </Reader.Provider>
  );
};
