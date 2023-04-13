import { useTundra } from "@moth-hooks/sounds/ost/sounds/wails/useTundra";
import { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { INTERVAL } from "../constants";

export const usePhase2 = () => {
  const { context } = useMothContext();
  const tundra = useTundra();

  const play = ({ duration, start }: TPlayerConfig) => {
    const pitch = 25;
    tundra.play({
      startTime: context.currentTime + start,
      duration: INTERVAL,
      volume: 0.1,
      pitch,
    });
    tundra.play({
      startTime: context.currentTime + start,
      duration: INTERVAL,
      volume: 0.05,
      pitch,
      type: "sawtooth",
    });
    tundra.play({
      startTime: context.currentTime + start,
      duration: INTERVAL,
      volume: 0.05,
      pitch,
      type: "sine",
    });
  };

  return play;
};
