import { useInterval } from "@moth-hooks/useInterval";
import { useMothContext } from "@moth-state/Context";
import { useRef, useState } from "react";
import {
  CYMBAL_STEPS,
  SNARE_STEPS,
  KICK_STEPS,
  STEPS,
} from "./constants";
import { useCymbal } from "./useCymbal";
import { useArpeggio } from "./useArpeggio";
import { useSnare } from "./useSnare";
import { useKick } from "./useKick";

const SPEED = 0.4;
const TIME = 8;

const CYMBAL_COUNT = CYMBAL_STEPS.length;
const SNARE_COUNT = SNARE_STEPS.length;
const KICK_COUNT = KICK_STEPS.length;

const CYMBAL_SPEED = (SPEED / CYMBAL_COUNT) * TIME;
const SNARE_SPEED = (SPEED / SNARE_COUNT) * TIME;
const KICK_SPEED = (SPEED / KICK_COUNT) * TIME;

export const usePlay = () => {
  const [time, setTime] = useState<number | null>(null);

  const indexRef = useRef<number>(0);

  const arpeggio = useArpeggio();
  

  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();

  const { context } = useMothContext();

  const loop = () => {
    STEPS.forEach((v, stepsIndex) => {
      arpeggio.play({
        startTime:
          context.currentTime + (stepsIndex * SPEED) / TIME,
        pitch: v + 36,
        duration: TIME,
      });
      CYMBAL_STEPS.forEach((v, index) => {
        if (!v) return;
        cymbal({
          startTime:
            context.currentTime +
            index * CYMBAL_SPEED +
            stepsIndex * CYMBAL_SPEED * CYMBAL_COUNT,
        });
      });
      SNARE_STEPS.forEach((v, index) => {
        if (!v) return;
        snare({
          startTime:
            context.currentTime +
            index * SNARE_SPEED +
            stepsIndex * SNARE_SPEED * SNARE_COUNT,
        });
      });
      KICK_STEPS.forEach((v, index) => {
        if (!v) return;
        kick({
          startTime:
            context.currentTime +
            index * KICK_SPEED +
            stepsIndex * KICK_SPEED * KICK_COUNT,
        });
      });

      indexRef.current++;
    });
  };

  useInterval(
    loop,
    time === null ? null : time * STEPS.length,
  );


  const play = () => {
    loop();
    setTime(SPEED * TIME * 1000);
  };

  useInterval(loop, time);

  const stop = () => {
    arpeggio.stop();
  };

  return { play, stop };
};
