import { useEffect, useRef, useState } from "react";
import type { FC } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import type { TVoiceStateKey } from "./config";
import { VOICE_STATE } from "./config";
import {
  resolveStateColor,
  resolveStateIcon,
} from "./resolveStateConfig";
import COLORS from "@windi/config-colors.json";
import { CENTER, LG } from "@moth-constants/styles";
import { NUMBERS, resolveNumber } from "@moth-constants/numbers";

declare const window: any;

type TProps = {
  isFocused: boolean | null;
  children(value: number | null): JSX.Element;
};
export const VoiceControl: FC<TProps> = ({
  isFocused,
  children,
}) => {
  const [state, setState] = useState<TVoiceStateKey>(
    VOICE_STATE[0],
  );
  const [value, setValue] = useState<number | null>(null);
  const recognitionRef = useRef<any | null>(null);

  useEffect(() => {
    recognitionRef.current =
      new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
    const SpeechGrammarList =
      window.SpeechGrammarList ||
      window.webkitSpeechGrammarList;

    if (SpeechGrammarList) {
      // This code is provided as a demonstration of possible capability. You may choose not to use it.
      const speechRecognitionList = new SpeechGrammarList();
      const grammar = `#JSGF V1.0; grammar numbers; public <number> = ${NUMBERS.join(
        " | ",
      )} ;`;
      speechRecognitionList.addFromString(grammar, 1);
      recognitionRef.current.grammars =
        speechRecognitionList;
    }
    recognitionRef.current.continuous = false;
    recognitionRef.current.lang = "en-US";
    recognitionRef.current.interimResults = false;
    recognitionRef.current.maxAlternatives = 1;

    recognitionRef.current.onresult = (event: any) => {
      // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
      // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
      // It has a getter so it can be accessed like an array
      // The first [0] returns the SpeechRecognitionResult at the last position.
      // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
      // These also have getters so they can be accessed like arrays.
      // The second [0] returns the SpeechRecognitionAlternative at position 0.
      // We then return the transcript property of the SpeechRecognitionAlternative object

      const transcript = event.results[0][0].transcript;
      const result = resolveNumber(transcript);

      setValue(result);
    };
    recognitionRef.current.onspeechstart = () => {
      setState("receiving");
    };

    recognitionRef.current.onstart = () => {
      setState("ready");
    };

    recognitionRef.current.onend = () => {
      setState("idle");
    };

    recognitionRef.current.onspeechend = () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
    recognitionRef.current.onnomatch = () => {
      setState("no-match");
    };
    recognitionRef.current.onerror = () => {
      setState("error");
    };
  }, []);

  const handleStart = () => {
    if (recognitionRef.current) {
      if (state === "idle") {
        recognitionRef.current.start();
      }
    }
  };

  const handleStop = () => {
    if (recognitionRef.current) {
      if (state !== "idle") {
        recognitionRef.current.stop();
      }
    }
  };

  useEffect(() => {
    if (typeof isFocused === "boolean") {
      if (isFocused) {
        handleStart();
      } else {
        handleStop();
      }
    }
  }, [isFocused]);

  return (
    <motion.div className={clsx("relative pl-7")}>
      <motion.button
        className={clsx(
          "absolute left-0 translate-x-0 top-1/2 -translate-y-1/2",
          CENTER,
          LG,
        )}
        whileHover={{
          color: resolveStateColor(state),
          opacity: 1,
        }}
        animate={{
          opacity: state === "idle" ? 0.5 : 1,
          color:
            state === "idle"
              ? COLORS["gray"]
              : COLORS["purple-04"],
        }}
        onTap={state === "idle" ? handleStart : handleStop}
      >
        {resolveStateIcon(state)}
      </motion.button>
      {children(value)}
    </motion.div>
  );
};
