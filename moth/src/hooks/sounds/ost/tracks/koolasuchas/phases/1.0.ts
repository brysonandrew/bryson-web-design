import { useTundra } from "@moth-hooks/sounds/ost/sounds/wails/useTundra";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { TUNDRA_STEPS_0 } from "../constants";

export const usePhase10 = () => {
  const { context } = useMothContext();
  const tundra = useTundra();

  const play = ({ duration, start }: TPlayerConfig) => {
    [...TUNDRA_STEPS_0].forEach((v, index, { length }) => {
      const d = duration / length;
      const pitch = v;
      tundra.play({
        startTime: context.currentTime + index * d + start,
        duration: d,
        volume: 0.06,
        pitch,
      });
      tundra.play({
        startTime: context.currentTime + index * d + start,
        duration: d,
        volume: 0.08,
        pitch,
        type: "sawtooth",
      });
      // tundra.play({
      //   startTime: context.currentTime + index * d + start,
      //   duration: d,
      //   volume: 0.05,
      //   pitch,
      //   type: "sine",
      // });
    });
  };

  return play;
};
