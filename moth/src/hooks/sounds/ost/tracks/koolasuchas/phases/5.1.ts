import { useTundra } from "@moth-hooks/sounds/ost/wails/useTundra";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { SYNTH_VOLUME, TUNDRA_STEPS_3 } from "../constants";

export const usePhase51 = () => {
  const { context } = useMothContext();
  const tundra = useTundra();

  const play = ({ duration, start }: TPlayerConfig) => {
    TUNDRA_STEPS_3.forEach((v, index, { length }) => {
      const d = duration / length;
      const pitch = v;
      const config = {
        startTime: context.currentTime + index * d + start,
        duration: d,
        volume: SYNTH_VOLUME,
        pitch,
      };
      tundra.play(config);
      tundra.play({
        ...config,
        type: "sawtooth",
      });
    });
  };

  return play;
};
