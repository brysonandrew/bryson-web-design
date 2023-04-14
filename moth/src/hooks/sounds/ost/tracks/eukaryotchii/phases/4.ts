import { useTundra } from "@moth-hooks/sounds/ost/sounds/wails/useTundra";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";

export const usePhase4 = () => {
  const { context } = useMothContext();
  const tundra = useTundra();

  const play = ({ duration, start }: TPlayerConfig) => {
    const pitch = -64;
    tundra.play({
      startTime: context.currentTime + start,
      duration,
      volume: 1,
      pitch,
      glitch: 0.5,
      type: "sawtooth",
    });
    // tundra.play({
    //   startTime: context.currentTime + start,
    //   duration: INTERVAL,
    //   volume: 0.1,
    //   pitch,
    //   type: "sawtooth",
    // });
    // tundra.play({
    //   startTime: context.currentTime + start,
    //   duration: INTERVAL,
    //   volume: 0.1,
    //   pitch,
    //   type: "sine",
    // });
  };

  return play;
};
