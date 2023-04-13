import { useInterval } from "@moth-hooks/useInterval";
import { useMothContext } from "@moth-state/Context";
import { useState } from "react";
import { STEPS_2, ARPEGGIO_STEPS } from "../constants";
import { useArpeggio } from "../sounds/useArpeggio";
import { useBass } from "../sounds/useBass";
import { useKick } from "../sounds/useKick";

const SPEED = 1;
const ARPEGGIO_SPEED = 0.125;

const bassSteps = STEPS_2;
const arpeggioSteps = ARPEGGIO_STEPS;
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
