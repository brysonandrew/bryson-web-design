import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  type FC,
} from 'react';
import {
  TContext,
  TLang,
  TPhrase,
  TPlayMode,
  TSelectedVoice,
  TSpeechSynthesis,
  TUtterance,
} from './types';
import { useListeners } from '../hooks/useListeners';
import { useSynthesis } from '../hooks/useSynthesis';
import { useClipboardState } from '@brysonandrew/notifications';
import { NOOP } from '@brysonandrew/utils-function';

export const context = new AudioContext();
const master = context.createGain();

const EMPTY_STATE = [null, NOOP];
const EMPTY_NUMBER_STATE = [1, NOOP];

export const CONTEXT = {
  context,
  master,
  speechSynthesisState: EMPTY_STATE,
  selectedVoiceState: EMPTY_STATE,
  phraseState: EMPTY_STATE,
  utteranceState: EMPTY_STATE,
  playModeState: EMPTY_STATE,
  volumeState: EMPTY_NUMBER_STATE,
  rateState: EMPTY_NUMBER_STATE,
  pitchState: EMPTY_NUMBER_STATE,
  langState: EMPTY_STATE,
  voicesState: EMPTY_STATE,
} as TContext;

export const Reader = createContext<TContext>(CONTEXT);

export const useReader = () => useContext(Reader);

export const ReaderProvider: FC<PropsWithChildren> = ({
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

  const clipboardState = useClipboardState();

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
    clipboardState,
  };

  return (
    <Reader.Provider value={value}>
      {children}
    </Reader.Provider>
  );
};
