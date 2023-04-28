import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { useBass5 } from "../../../basses/useBass5";
import { useTom } from "../../../drums/useTom";
import { BASS_STEPS } from "../constants";

export const useBass = () => {
  const bass = useBass5();
  const tom = useTom();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    bass.play({
      startTime: context.currentTime,
      pitch: 12,
      duration,
      volume: 0.01,
      type: "triangle",
    });
    bass.play({
      startTime: context.currentTime,
      pitch: 24,
      duration,
      volume: 0.01,
      type: "sine",
    });

    BASS_STEPS.forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      bass.play({
        startTime: context.currentTime + index * d + start,
        pitch: v,
        duration: d,
        volume: 0.04,
      });
    });

    tom({
      startTime: context.currentTime + start,
    });
  };

  return loop;
};
