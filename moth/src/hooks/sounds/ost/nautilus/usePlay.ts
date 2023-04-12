import { useInterval } from "@moth-hooks/useInterval";
import { useMothContext } from "@moth-state/Context";
import { useRef, useState } from "react";
import {
  ARPEGGIO_STEPS,
  CYMBAL_STEPS,
  KICK_STEPS,
  MACHINE_GUN_STEPS,
  SNARE_STEPS,
} from "./constants";
import { useArpeggio } from "./useArpeggio";
import { useSnare } from "./useSnare";
import { useKick } from "./useKick";
import { useCymbal } from "./useCymbal";

const SPEED = 2;
const TIME = 1;

const CYMBAL_COUNT = CYMBAL_STEPS.length;
const SNARE_COUNT = SNARE_STEPS.length;
const KICK_COUNT = KICK_STEPS.length;
const ARPEGGIO_COUNT = ARPEGGIO_STEPS.length;
const MACHINE_GUN_COUNT = MACHINE_GUN_STEPS.length;

const CYMBAL_SPEED = (SPEED / CYMBAL_COUNT) * TIME;
const CYMBAL_OFFSET = 0;
const SNARE_SPEED = (SPEED / SNARE_COUNT) * TIME;
const SNARE_OFFSET = 0;
const KICK_SPEED = (SPEED / KICK_COUNT) * TIME;
const MACHINE_GUN_SPEED = (2 / MACHINE_GUN_COUNT) * TIME;
const ARPEGGIO_SPEED = (SPEED / ARPEGGIO_COUNT) * TIME;

export const usePlay = () => {
  const [time, setTime] = useState<number | null>(null);
  const indexRef = useRef<number>(0);

  const arpeggio = useArpeggio();
  const snare = useSnare();
  const kick = useKick();
  const cymbal = useCymbal();

  const { context } = useMothContext();

  const oneTwoLoop = () => {
    ARPEGGIO_STEPS.forEach((v, index) => {
      const isSecond = indexRef.current % 2 === 0;
      const pitch = isSecond ? v + 24 : v + 36;
      arpeggio.play({
        startTime:
          context.currentTime + index * ARPEGGIO_SPEED,
        pitch,
        duration: ARPEGGIO_SPEED * 2,
        volume: 0.02,
        type: isSecond ? "square" : "triangle",
      });
    });
    CYMBAL_STEPS.forEach((v, index) => {
      if (!v) return;
      cymbal({
        startTime:
          context.currentTime + index * CYMBAL_SPEED,
        volume: 0.12,
      });
    });
    SNARE_STEPS.forEach((v, index) => {
      if (!v) return;
      snare({
        startTime:
          context.currentTime + index * SNARE_SPEED,
        volume: 0.1,
      });
    });
    KICK_STEPS.forEach((v, index) => {
      if (!v) return;
      kick({
        startTime: context.currentTime + index * KICK_SPEED,
        volume: 0.15,
      });
    });
  };

  const machineGun = () => {
    MACHINE_GUN_STEPS.forEach((v, index) => {
      snare({
        startTime:
          context.currentTime + index * MACHINE_GUN_SPEED,
        volume: 0.2,
      });
      kick({
        startTime:
          context.currentTime + index * MACHINE_GUN_SPEED,
        volume: 0.2,
      });
    });
  };

  const loop = () => {
    if (indexRef.current % 8 === 0) {
      machineGun();
    } else {
      oneTwoLoop();
    }
    indexRef.current++;
  };

  useInterval(loop, time);

  const preload = async () => {
    console.log("PRELOAD")
  };

  const play = async () => {
    await context.resume();
    await preload();
    loop();
    setTime(TIME * SPEED * 1000);
  };

  const stop = () => {
    arpeggio.stop();
  };

  return { play, stop };
};
