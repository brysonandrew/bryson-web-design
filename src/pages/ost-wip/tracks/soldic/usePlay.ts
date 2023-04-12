import { useMothContext } from "@moth-state/Context";
import { useRef, useState } from "react";
import {
  CYMBAL_STEPS,
  SNARE_STEPS,
  KICK_STEPS,
  BASS_STEPS,
  VERSE,
} from "./constants";
import { useCymbal } from "./useCymbal";
import { useBass } from "./useBass";
import { useHeavyBass } from "./useHeavyBass";
import { useSnare } from "./useSnare";
import { useKick } from "./useKick";
import { useInterval } from "@moth-hooks/useInterval";
import { useVocals } from "./useVocals";
import { CHORUS } from "../miracles/constants";

const SPEED = 0.4;
const TIME = VERSE.length * 1.2;

const CYMBAL_COUNT = CYMBAL_STEPS.length;
const SNARE_COUNT = SNARE_STEPS.length;
const KICK_COUNT = KICK_STEPS.length;
const BASS_STEP_COUNT = BASS_STEPS.length;

const CYMBAL_SPEED = (SPEED / CYMBAL_COUNT) * TIME;
const SNARE_SPEED = (SPEED / SNARE_COUNT) * TIME;
const KICK_SPEED = (SPEED / KICK_COUNT) * TIME;
const BASS_STEP_SPEED = (SPEED / BASS_STEP_COUNT) * TIME;

export const usePlay = () => {
  const [time, setTime] = useState<number | null>(null);

  const indexRef = useRef<number>(0);

  const bass = useBass();
  const heavyBass = useHeavyBass();

  const vocals = useVocals();

  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();

  const { context } = useMothContext();

  const loop = () => {
    indexRef.current++;
    if (
      (indexRef.current > 0 && indexRef.current < 4) ||
      (indexRef.current > 8 && indexRef.current < 10)
    ) {
      CHORUS.forEach((v, stepsIndex) => {
        bass.play({
          startTime:
            context.currentTime +
            stepsIndex * BASS_STEP_SPEED,
          pitch: v + 36,
          duration: (BASS_STEP_COUNT / TIME) * 0.1,
        });
      });
      return;
    }

    if (indexRef.current === 1) {
      BASS_STEPS.forEach((v, stepsIndex) => {
        bass.play({
          startTime:
            context.currentTime +
            stepsIndex * BASS_STEP_SPEED,
          pitch: v + 36,
          duration: (BASS_STEP_COUNT / TIME) * 0.1,
        });
      });
    }

    BASS_STEPS.forEach((v, stepsIndex) => {
      bass.play({
        startTime:
          context.currentTime +
          stepsIndex * BASS_STEP_SPEED,
        pitch: v + 36,
        duration: (BASS_STEP_COUNT / TIME) * 0.1,
      });
    });
    CYMBAL_STEPS.forEach((v, index) => {
      if (!v) return;
      cymbal({
        startTime:
          context.currentTime + index * CYMBAL_SPEED,
        // + stepsIndex * CYMBAL_SPEED * CYMBAL_COUNT,
      });
    });
    SNARE_STEPS.forEach((v, index) => {
      if (!v) return;
      snare({
        startTime:
          context.currentTime + index * SNARE_SPEED,
        // + stepsIndex * SNARE_SPEED * SNARE_COUNT,
      });
    });
    KICK_STEPS.forEach((v, index) => {
      if (!v) return;
      kick({
        startTime: context.currentTime + index * KICK_SPEED,
        //  +   stepsIndex * KICK_SPEED * KICK_COUNT,
      });
    });
  };

  const play = () => {
    loop();
    setTime(SPEED * TIME * 1000);
  };

  useInterval(loop, time);

  const stop = () => {
    bass.stop();
  };

  return { play, stop };
};
