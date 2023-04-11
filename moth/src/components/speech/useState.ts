import { useState as useReactState } from "react";
import type {
  TSavedSpeechState,
  TSpeechState,
} from "./settings/config";
import {
  VOICE_KEY_NAME,
  resolveRandomItemFromArray,
  resolveLangs,
  resolveFirstVoice,
  _SPEECH_STORAGE_KEY,
  resolveVoiceKey,
  LANG_KEY_NAME,
} from "./settings/config";
import {
  DEFAULT_LANG_KEY,
  DEFAULT_PITCH,
  DEFAULT_RATE,
  DEFAULT_VOICE_KEY,
} from "./constants";
import { useInterval } from "@moth-hooks/useInterval";

type TConfig = {
  text: string;
  [VOICE_KEY_NAME]?: string;
  [LANG_KEY_NAME]?: string;
};
export const useState = (config?: TConfig) => {
  const text = config?.text ?? "";

  const resolveVoices = (langKey: string): string[] => {
    const voices = speechSynthesis.getVoices();
    return voices
      .filter((v: SpeechSynthesisVoice) =>
        langKey === "all" ? true : v.lang === langKey,
      )
      .map(resolveVoiceKey);
  };

  const langKey =
    config?.[LANG_KEY_NAME] ?? DEFAULT_LANG_KEY;
  const [state, setState] = useReactState<TSpeechState>({
    text,
    [VOICE_KEY_NAME]:
      config?.[VOICE_KEY_NAME] ??
      DEFAULT_VOICE_KEY ??
      resolveFirstVoice() ??
      null,
    langKey,
    volume: 2,
    rate: DEFAULT_RATE,
    pitch: DEFAULT_PITCH,
    isPlaying: false,
    isPaused: false,
    isPending: false,
    voices: speechSynthesis.getVoices(),
    langs: resolveLangs(),
    activeVoices: resolveVoices(langKey),
  });

  const handleCheckVoices = () => {
    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
      setState((prev) => ({
        ...prev,
        voices,
        langs: resolveLangs(),
        activeVoices: resolveVoices(prev.langKey),
      }));
    }
  };

  useInterval(
    handleCheckVoices,
    state.voices.length > 0 ? null : 200,
  );

  const updateState = (
    next: Partial<TSavedSpeechState>,
  ) => {
    const langs = resolveLangs();
    const activeVoices =
      typeof next.langKey === "undefined"
        ? state.activeVoices
        : resolveVoices(next.langKey);

    const isVoiceKey = activeVoices.some(
      (v) => v === state.voiceKey,
    );

    setState({
      ...state,
      ...next,
      langs,
      activeVoices,
      voiceKey:
        next.voiceKey ??
        (isVoiceKey ? state.voiceKey : activeVoices[0]),
    });
  };

  const random = () =>
    updateState({
      text: resolveRandomItemFromArray(),
    });
  return {
    state,
    updateState,
    random,
  };
};
