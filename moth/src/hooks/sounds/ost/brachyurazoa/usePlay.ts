import { useInterval } from "@moth-hooks/useInterval";
import { useMothContext } from "@moth-state/Context";
import { useRef, useState } from "react";
import { STEPS_2, STEPS_ARPEGGIO } from "./constants";
import { useArpeggio } from "./useArpeggio";
import { useBass } from "./useBass";
import { useKick } from "./useKick";

const SPEED = 1;
const ARPEGGIO_SPEED = 0.125;

const bassSteps = STEPS_2;
const arpeggioSteps = STEPS_ARPEGGIO;
const stepsCount = bassSteps.length;
const baseSpeed = stepsCount * 1000;

export const usePlay = () => {
  const [time, setTime] = useState<number | null>(null);

  const bass = useBass();
  const arpeggio = useArpeggio();
  const kick = useKick();

  const { context } = useMothContext();
  const arpeggioLoop = () => {
    arpeggioSteps.forEach((v, index) => {
      arpeggio.play({
        startTime:
          context.currentTime + index * ARPEGGIO_SPEED,
        pitch: v + 38 + 36,
        duration: ARPEGGIO_SPEED * 2,
        volume: 0.4,
      });
    });
  };

  const bassLoop = () => {
    bassSteps.forEach((v, index) => {
      if (!v) return;
      kick({
        startTime: context.currentTime + index * SPEED,
        volume: 1.2,
      });
      bass.play({
        startTime: context.currentTime + index * SPEED,
        pitch: v,
        duration: SPEED,
        volume: 0.2,
      });
    });
  };

  const loop = () => {
    arpeggioLoop();
    bassLoop();
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
