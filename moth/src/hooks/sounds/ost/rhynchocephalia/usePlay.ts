import { useMothContext } from "@moth-state/Context";
import { useRef, useState } from "react";
import {
  CYMBAL_STEPS,
  SNARE_STEPS,
  KICK_STEPS,
  STEPS,
} from "./constants";
import { useCymbal } from "./useCymbal";
import { useBass } from "./useBass";
import { useSnare } from "./useSnare";
import { useKick } from "./useKick";
import { useInterval } from "@moth-hooks/useInterval";

const SPEED = 0.28;
const TIME = 8;

const CYMBAL_COUNT = CYMBAL_STEPS.length;
const SNARE_COUNT = SNARE_STEPS.length;
const KICK_COUNT = KICK_STEPS.length;

const CYMBAL_SPEED = (SPEED / CYMBAL_COUNT) * TIME;
const SNARE_SPEED = (SPEED / SNARE_COUNT) * TIME;
const KICK_SPEED = (SPEED / KICK_COUNT) * TIME;

export const usePlay = () => {
  const indexRef = useRef<number>(0);
  const [time, setTime] = useState<number | null>(null);

  const bass = useBass();

  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();

  const { context } = useMothContext();

  const loop = () => {
    STEPS.forEach((v, stepsIndex) => {
      bass.play({
        startTime: context.currentTime + stepsIndex * SPEED,
        pitch: v + 36,
        duration: SPEED,
        volume: 0.028,
      });
    });
    CYMBAL_STEPS.forEach((v, index) => {
      if (!v) return;
      cymbal({
        startTime:
          context.currentTime + index * CYMBAL_SPEED,
        volume: 0.2,
      });
    });
    SNARE_STEPS.forEach((v, index) => {
      if (!v) return;
      snare({
        startTime:
          context.currentTime + index * SNARE_SPEED,
        volume: 0.2,
        version: 2,
      });
    });
    KICK_STEPS.forEach((v, index) => {
      if (!v) return;
      kick({
        startTime: context.currentTime + index * KICK_SPEED,
        volume: 0.4,
      });
    });

    indexRef.current++;
  };

  useInterval(loop, time);

  const preload = async () => {
    console.log("PRELOAD");
  };

  const play = async () => {
    await context.resume();
    await preload();
    loop();
    setTime(TIME * SPEED * 1000);
  };

  const stop = () => {
    bass.stop();
  };

  return { play, stop };
};
