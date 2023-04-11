import { useEffect, useRef } from "react";
import type { TSpeechState } from "./settings/config";
import {
  resolveLangs,
  resolveVoiceKey,
  _SPEECH_STORAGE_KEY,
  resolveFirstVoice,
} from "./settings/config";
import { useKey } from "@moth-hooks/useKey";
import { NOOP } from "@moth-constants/index";
import { DEFAULT_VOICE_KEY } from "./constants"; 

type TConfig = {
  state: TSpeechState;
  onUpdateState(next: TSpeechState): void;
  onEnd?(e: SpeechSynthesisEvent): void;
};
export const useController = ({
  state,
  onUpdateState,
  onEnd,
}: TConfig) => {
  const current = state;
  const currentRef = useRef(current);
  currentRef.current = current;

  const pause = () => {
    window.speechSynthesis.pause();
  };

  const cancel = () => {
    window.speechSynthesis.cancel();
  };

  const resume = () => {
    window.speechSynthesis.resume();
  };

  const handleEnd = (e: SpeechSynthesisEvent) => {
    if (onEnd) {
      onEnd(e);
    }
    playState(e);
  };

  useEffect(() => {
    const handleVoices = (x: any) => {
      const voices = speechSynthesis.getVoices();
      const langs = resolveLangs();
      const voiceKey =
        currentRef.current.voiceKey ||
        resolveFirstVoice() ||
        DEFAULT_VOICE_KEY;
      const langKey =
        voiceKey.split(" ")[1].replace(/[()]/gi, "") ??
        "all";
      const next = {
        ...currentRef.current,
        voices,
        langs,
        langKey,
        voiceKey,
      };
      onUpdateState(next);
    };

    window.speechSynthesis.addEventListener<"voiceschanged">(
      "voiceschanged",
      handleVoices,
    );

    return () => {
      window.speechSynthesis.removeEventListener(
        "voiceschanged",
        handleVoices,
      );
      cancel();
    };
  }, [state.voiceKey, state.langKey, state.voices]);

  const playState = (e: SpeechSynthesisEvent) => {
    const next = {
      isPlaying: window.speechSynthesis.speaking,
      isPaused: window.speechSynthesis.paused,
      isPending: window.speechSynthesis.pending,
    };

    onUpdateState({
      ...currentRef.current,
      ...next,
    });
  };

  const speak = (text?: string) => {
    const voiceKey = currentRef.current.voiceKey;

    try {
      const utterance = new SpeechSynthesisUtterance();

      if (text) {
        utterance.text = text;
      } else {
        utterance.text = currentRef.current.text;
      }
      utterance.volume = currentRef.current.volume;
      utterance.rate = currentRef.current.rate;
      utterance.pitch = currentRef.current.pitch;

      if (voiceKey) {
        utterance.voice = speechSynthesis
          .getVoices()
          .filter(
            (voice: SpeechSynthesisVoice) =>
              resolveVoiceKey(voice) === voiceKey,
          )[0];
      }

      utterance.onpause = playState;
      utterance.onresume = playState;
      utterance.onstart = playState;
      utterance.onerror = playState;
      utterance.onend = handleEnd;
      utterance.onmark = playState;
      utterance.onboundary = playState;

      window.speechSynthesis.speak(utterance);
    } catch (error) {
      cancel();
    }
  };

  const play = (text?: string) => {
    if (window.speechSynthesis.paused) {
      resume();
    } else {
      speak(text);
    }
  };

  useKey({
    handlers: {
      onKeyDown: ({ altKey }) => (altKey ? speak() : null),
      onKeyUp: NOOP,
    },
    isActive: true,
  });

  return {
    play,
    pause,
    cancel,
  };
};
