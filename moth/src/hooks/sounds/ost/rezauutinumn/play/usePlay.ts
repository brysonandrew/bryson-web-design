import { useInterval } from "@moth-hooks/useInterval";
import { useMothContext } from "@moth-state/Context";
import { useRef, useState } from "react";
import { useArpeggio } from "../sounds/useArpeggio";
import { usePhase0 } from "./phases/0";
import { usePhase1 } from "./phases/1";

import { PHASES, SPEED, TIME } from "./constants";
import { usePhase2 } from "./phases/2";
import { usePhase3 } from "./phases/3";
import { useIntro } from "./phases/intro";

export const usePlay = () => {
  const [time, setTime] = useState<number | null>(null);

  const indexRef = useRef<number>(0);
  const repeatRef = useRef<number>(0);

  const arpeggio = useArpeggio();

  const { context } = useMothContext();

  const intro = useIntro();
  const phase0 = usePhase0();
  const phase1 = usePhase1();
  const phase2 = usePhase2();
  const phase3 = usePhase3();

  const phases = [intro, phase0, phase1, phase2, phase3];

  const loop = () => {
    const { repeat } = PHASES[indexRef.current];

    phases[indexRef.current]();

    if (repeat !== repeatRef.current) {
      repeatRef.current++;
    } else {
      indexRef.current =
        (indexRef.current + 1) % phases.length;
      repeatRef.current = 0;
    }
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
    arpeggio.stop();
  };

  return { play, stop };
};
