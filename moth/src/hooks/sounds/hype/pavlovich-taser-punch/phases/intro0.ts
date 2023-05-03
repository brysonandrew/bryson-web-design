import { useMothContext } from "@moth-state/Context";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useTaser } from "@moth-hooks/sounds/ost/robos/useTaser";
const VOLUME = 0.025;
export const useIntro0 = () => {
  const taser = useTaser();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    taser.play({
      startTime: context.currentTime + start,
      pitch: 40,
      duration: duration,
      volume: VOLUME,
      type: "sawtooth",
    });
  };

  return loop;
};
