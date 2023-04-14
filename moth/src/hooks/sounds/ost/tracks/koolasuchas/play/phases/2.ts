import { useTundra } from "@moth-hooks/sounds/ost/sounds/wails/useTundra";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";

export const usePhase2 = () => {
  const { context } = useMothContext();
  const tundra = useTundra();

  const play = ({ duration, start }: TPlayerConfig) => {
    const pitch = 25;
    tundra.play({ // change to make tremelo
      startTime: context.currentTime + start,
      duration,
      volume: 0.4,
      pitch,
      glitch: 0.1,
    });
    // tundra.play({
    //   startTime: context.currentTime + start,
    //   duration: INTERVAL,
    //   volume: 0.1,
    //   pitch,
    //   type: "sawtooth",
    //   glitch: 0.001,
    // });
    // tundra.play({
    //   startTime: context.currentTime + start,
    //   duration: INTERVAL,
    //   volume: 0.1,
    //   pitch,
    //   type: "sine",
    //   glitch: 0.001,
    // });
  };

  return play;
};
