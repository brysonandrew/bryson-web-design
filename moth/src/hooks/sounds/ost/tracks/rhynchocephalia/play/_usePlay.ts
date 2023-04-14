import { useMothContext } from "@moth-state/Context";
import { useRef, useState } from "react";
import { useCymbal } from "../sounds/useCymbal";
import { useBass } from "../sounds/useBass";
import { useSnare } from "../sounds/useSnare";
import { useKick } from "../sounds/useKick";
import { useInterval } from "@moth-hooks/useInterval";
import {
  STEPS,
  SPEED,
  CYMBAL_STEPS,
  CYMBAL_SPEED,
  SNARE_STEPS,
  SNARE_SPEED,
  KICK_STEPS,
  KICK_SPEED,
  TIME,
} from "../constants";

export const usePlay = () => {
  const indexRef = useRef<number>(0);
  const [time, setTime] = useState<number | null>(null);

  const bass = useBass();

  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();

  const { context } = useMothContext();

  const loop = () => {
    STEPS.forEach((v, index) => {
      bass.play({
        startTime: context.currentTime + index * SPEED,
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
