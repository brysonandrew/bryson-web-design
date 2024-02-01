import { Dispatch, SetStateAction } from 'react';
import { TClipboardContext } from './clipboard/useClipboardContext';

export type TState<S> = [S, Dispatch<SetStateAction<S>>];

export type TSpeechSynthesis = SpeechSynthesis | null;
export type TSelectedVoice = string | null;
export type TPlayMode = boolean | null;
export type TLang = string | null;
export type TVoices = SpeechSynthesisVoice[] | null;
export type TPhrase = string | null;
export type TUtterance = SpeechSynthesisUtterance | null;

export type TContext = {
  context: AudioContext;
  master: GainNode;
  speechSynthesisState: TState<TSpeechSynthesis>;
  selectedVoiceState: TState<TSelectedVoice>;
  phraseState: TState<TPhrase>;
  utteranceState: TState<TUtterance>;
  playModeState: TState<TPlayMode>;
  volumeState: TState<number>;
  rateState: TState<number>;
  pitchState: TState<number>;
  langState: TState<TLang>;
  voicesState: TState<TVoices>;
  clipboardContext: TClipboardContext;
};
