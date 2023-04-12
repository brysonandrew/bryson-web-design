import { useInterval } from "@moth-hooks/useInterval";
import { useMothContext } from "@moth-state/Context";
import { useRef, useState } from "react";
import { useCymbal } from "../sounds/useCymbal";
import { useArpeggio } from "../sounds/useArpeggio";
import { useSnare } from "../sounds/useSnare";
import { useKick } from "../sounds/useKick";
import { useDrone } from "../sounds/useDrone";
import {
  CYMBAL_STEPS,
  CYMBAL_SPEED,
  SNARE_STEPS,
  SNARE_SPEED,
  KICK_STEPS,
  KICK_SPEED,
  ARPEGGIO_STEPS,
  ARPEGGIO_SPEED,
  TIME,
  SPEED,
} from "../constants";

export const usePlay = () => {
  const [time, setTime] = useState<number | null>(null);
  const indexRef = useRef<number>(0);

  const arpeggio = useArpeggio();
  const drone = useDrone();

  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();

  const { context } = useMothContext();

  const loop = () => {
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
        volume: 0.28,
      });
    });
    KICK_STEPS.forEach((v, index) => {
      if (!v) return;
      kick({
        startTime: context.currentTime + index * KICK_SPEED,
      });
    });
    ARPEGGIO_STEPS.forEach((v, index) => {
      arpeggio.play({
        startTime:
          context.currentTime + index * ARPEGGIO_SPEED,
        pitch: v + 36,
        duration: ARPEGGIO_SPEED,
      });
      // if (index === 0) {
      //   drone.play({
      //     startTime:
      //       context.currentTime + index * ARPEGGIO_SPEED,
      //     pitch: 24,
      //     duration: 2 * ARPEGGIO_SPEED,
      //     volume: 0.04,
      //   });
      // }
      // if (index === 2) {
      //   drone.play({
      //     startTime:
      //       context.currentTime +
      //       (index + 2) * ARPEGGIO_SPEED,
      //     pitch: 66,
      //     duration: (ARPEGGIO_COUNT - 2) * ARPEGGIO_SPEED,
      //     volume: 0.04,
      //   });
      // }
    });

    indexRef.current++;
  };

  useInterval(loop, time);

  const play = () => {
    loop();
    setTime(TIME * SPEED * 1000);
  };

  const stop = () => {
    drone.stop();
    arpeggio.stop();
  };

  return { play, stop };
};
