import { useInterval } from "@moth-hooks/useInterval";
import { useMothContext } from "@moth-state/Context";
import { useRef, useState } from "react";
import { STEPS, STEPS_ARPEGGIO } from "./constants";
import { useBass } from "./useBass";
import { useTom } from "./useTom";
import { useArpeggio } from "./useArpeggio";

const SPEED = 1;

const bassSteps = STEPS;
const stepsCount = bassSteps.length;
const baseSpeed = stepsCount * 1000;

export const usePlay = () => {
  const [time, setTime] = useState<number | null>(null);
  const indexRef = useRef<number>(0);

  const bass = useBass();
  const arpeggio = useArpeggio();

  const tom = useTom();

  const { context } = useMothContext();

  const loop = () => {
    bass.play({
      startTime: context.currentTime,
      pitch: 12,
      duration: SPEED * stepsCount,
      volume: 0.01,
      type: "triangle",
    });
    bass.play({
      startTime: context.currentTime,
      pitch: 24,
      duration: SPEED * stepsCount,
      volume: 0.01,
      type: "sine",
    });

    bassSteps.forEach((v, index) => {
      if (!v) return;
      bass.play({
        startTime: context.currentTime + index * SPEED,
        pitch: v,
        duration: SPEED,
        volume: 0.06,
      });
    });

    tom({
      startTime: context.currentTime,
    });

    const apreggioSpeed = SPEED / 4;

    STEPS_ARPEGGIO.forEach((v, index) => {
      if (!v) return;
      arpeggio.play({
        startTime:
          context.currentTime + index * apreggioSpeed,
        pitch: v + 1 + 12 * 4,
        duration: apreggioSpeed,
        type: "triangle",
        volume: 0.1,
      });
    });

    indexRef.current++;
  };

  useInterval(loop, time);

  const play = () => {
    loop();
    setTime(baseSpeed * SPEED);
  };

  const stop = () => {
    bass.stop();
    arpeggio.stop();
  };

  return { play, stop };
};
