import type { InputHTMLAttributes } from "react";
import { QUOTES } from "../quotes";
import { LYRICS } from "../lyrics";

export const _SPEECH_STORAGE_KEY = "_SPEECH_STORAGE_KEY";

export const LANG_KEY_NAME = "langKey";
export const VOICE_KEY_NAME = "voiceKey";

export const resolveRandomQuote = () =>
  QUOTES[~~(QUOTES.length * Math.random())];

export const resolveRandomItemFromArray = (
  source: any[] = LYRICS,
) => source[~~(source.length * Math.random())];

export type TSliderOptions = Pick<
  SpeechSynthesisUtterance,
  "volume" | "rate" | "pitch"
>;

export type TEntry = [keyof TSliderOptions, number];
export const SLIDER_ATTRIBUTES: Record<
  keyof TSliderOptions,
  Pick<
    InputHTMLAttributes<HTMLInputElement>,
    "min" | "max" | "step"
  >
> = {
  volume: {
    min: 0.01,
    max: 1,
    step: 0.01,
  },
  rate: {
    min: 0,
    max: 2,
    step: 0.01,
  },
  pitch: {
    min: 0,
    max: 5,
    step: 0.01,
  },
};

export type TSavedSpeechState = TSliderOptions & {
  text: string;
  voiceKey: string | null;
  langKey: string;
};

export type TDynamicState = {
  isPlaying: boolean;
  isPaused: boolean;
  isPending: boolean;
  voices: SpeechSynthesisVoice[];
  activeVoices: string[];
  langs: string[];
};

export type TSpeechState = TSavedSpeechState &
  TDynamicState;

export const resolveVoiceKey = (
  voice: SpeechSynthesisVoice,
) => (voice ? `${voice.name} (${voice.lang})` : "");

export const resolveFirstVoice = () => {
  const voices = speechSynthesis.getVoices();
  return resolveVoiceKey(voices?.[2]);
};

export const resolveLangs = () => {
  const voices = speechSynthesis.getVoices();
  return [...new Set(voices.map(({ lang }) => lang))];
};
