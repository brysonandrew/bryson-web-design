import { useInterval } from "@moth-hooks/useInterval";
import { useMothContext } from "@moth-state/Context";
import { useRef, useState } from "react";
import { ARPEGGIO_STEPS, VERSES } from "./constants";
import { useArpeggio } from "./useArpeggio";

const SPEED = 2;
const TIME = 8;

const VERSES_COUNT = VERSES.length;
const ARPEGGIO_COUNT = ARPEGGIO_STEPS.length;
const ARPEGGIO_SPEED = (SPEED / ARPEGGIO_COUNT) * TIME;

const baseSpeed = TIME * 1000;

export const usePlay = () => {
  const [time, setTime] = useState<number | null>(null);
  const indexRef = useRef<number>(0);

  const arpeggio = useArpeggio();

  const { context } = useMothContext();

  const loop = () => {
    VERSES.forEach((v, verseIndex) => {
      ARPEGGIO_STEPS.forEach((v, index) => {
        arpeggio.play({
          startTime:
            context.currentTime +
            index * ARPEGGIO_SPEED +
            verseIndex * ARPEGGIO_SPEED * ARPEGGIO_COUNT,
          pitch: v + 24,
          duration: ARPEGGIO_SPEED,
        });
      });

      indexRef.current++;
    });
  };

  useInterval(
    loop,
    time === null ? null : time * VERSES_COUNT,
  );

  const play = () => {
    loop();
    setTime(baseSpeed * SPEED);
  };

  const stop = () => {
    arpeggio.stop();
  };

  return { play, stop };
};
