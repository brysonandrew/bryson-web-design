import { useInterval } from "@moth-hooks/useInterval";
import { useMothContext } from "@moth-state/Context";
import { useRef, useState } from "react";
import {
  CYMBAL_STEPS,
  SNARE_STEPS,
  KICK_STEPS,
  ARPEGGIO_STEPS,
  VERSES,
} from "./constants";
import { useCymbal } from "./useCymbal";
import { useArpeggio } from "./useArpeggio";
import { useSnare } from "./useSnare";
import { useKick } from "./useKick";

const SPEED = 1;
const TIME = 8;

const VERSES_COUNT = VERSES.length;

const CYMBAL_COUNT = CYMBAL_STEPS.length;
const SNARE_COUNT = SNARE_STEPS.length;
const KICK_COUNT = KICK_STEPS.length;
const ARPEGGIO_COUNT = ARPEGGIO_STEPS.length;

const CYMBAL_SPEED = (SPEED / CYMBAL_COUNT) * TIME;
const SNARE_SPEED = (SPEED / SNARE_COUNT) * TIME;
const KICK_SPEED = (SPEED / KICK_COUNT) * TIME;
const ARPEGGIO_SPEED = (SPEED / ARPEGGIO_COUNT) * TIME;

const baseSpeed = TIME * 1000;

export const usePlay = () => {
  const [time, setTime] = useState<number | null>(null);
  const indexRef = useRef<number>(0);

  const arpeggio = useArpeggio();

  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();

  const { context } = useMothContext();

  const loop = () => {
    VERSES.forEach((v, verseIndex) => {
      CYMBAL_STEPS.forEach((v, index) => {
        if (!v) return;
        cymbal({
          startTime:
            context.currentTime +
            index * CYMBAL_SPEED +
            verseIndex * CYMBAL_SPEED * CYMBAL_COUNT,
        });
      });
      SNARE_STEPS.forEach((v, index) => {
        if (!v) return;
        snare({
          startTime:
            context.currentTime +
            index * SNARE_SPEED +
            verseIndex * SNARE_SPEED * SNARE_COUNT,
        });
      });
      KICK_STEPS.forEach((v, index) => {
        if (!v) return;
        kick({
          startTime:
            context.currentTime +
            index * KICK_SPEED +
            verseIndex * KICK_SPEED * KICK_COUNT,
        });
      });
      ARPEGGIO_STEPS.forEach((v, index) => {
        arpeggio.play({
          startTime:
            context.currentTime +
            index * ARPEGGIO_SPEED +
            verseIndex * ARPEGGIO_SPEED * ARPEGGIO_COUNT,
          pitch: v + 36,
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
