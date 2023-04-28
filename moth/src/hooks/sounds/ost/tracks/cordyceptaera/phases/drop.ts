import { useDistruptor } from "@moth-hooks/sounds/ost/termini/useDistruptor";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import {
  ARPEGGIO_VOLUME,
  DROP,
  DROP_2,
} from "../constants";

export const useDrop = () => {
  const clang = useDistruptor();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    [
     ...DROP, 
      ...DROP_2
    ].forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      clang.play({
        startTime: context.currentTime + index * d + start,
        pitch: v + 1,
        duration: d * 1.2,
        volume: 0.01,
        fromTo: {
          from: 0.1,
          to: 0.5,
        },
      });
    });
  };

  return loop;
};
