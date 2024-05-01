import { TStateEntry } from '@brysonandrew/config-types/state';
import { TClipboardState } from '@brysonandrew/notifications';

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
  speechSynthesisState: TStateEntry<TSpeechSynthesis>;
  selectedVoiceState: TStateEntry<TSelectedVoice>;
  phraseState: TStateEntry<TPhrase>;
  utteranceState: TStateEntry<TUtterance>;
  playModeState: TStateEntry<TPlayMode>;
  volumeState: TStateEntry<number>;
  rateState: TStateEntry<number>;
  pitchState: TStateEntry<number>;
  langState: TStateEntry<TLang>;
  voicesState: TStateEntry<TVoices>;
  clipboardState: TClipboardState;
};
