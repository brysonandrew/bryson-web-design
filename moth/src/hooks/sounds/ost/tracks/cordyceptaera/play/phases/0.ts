import { useMothContext } from "@moth-state/Context";
import { STEPS, ARPEGGIO_STEPS } from "../../constants";
import { useBass } from "../../sounds/useBass";
import { useTom } from "../../sounds/useTom";
import { useArpeggio } from "../../sounds/useArpeggio";

const SPEED = 1;

const bassSteps = STEPS;
const stepsCount = bassSteps.length;

export const usePhase0 = () => {
  const bass = useBass();
  const arpeggio = useArpeggio();
  const tom = useTom();
  const { context } = useMothContext();

  const loop = () => {
    bass.play({
      startTime: context.currentTime,
      pitch: 12,
      duration: SPEED * stepsCount,
      volume: 0.01,
      type: "triangle",
    });
    bass.play({
      startTime: context.currentTime,
      pitch: 24,
      duration: SPEED * stepsCount,
      volume: 0.01,
      type: "sine",
    });

    bassSteps.forEach((v, index) => {
      if (!v) return;
      bass.play({
        startTime: context.currentTime + index * SPEED,
        pitch: v,
        duration: SPEED,
        volume: 0.06,
      });
    });

    tom({
      startTime: context.currentTime,
    });

    const apreggioSpeed = SPEED / 4;

    ARPEGGIO_STEPS.forEach((v, index) => {
      if (!v) return;
      arpeggio.play({
        startTime:
          context.currentTime + index * apreggioSpeed,
        pitch: v + 1 + 12 * 4,
        duration: apreggioSpeed,
        type: "triangle",
        volume: 0.28,
      });
    });
  };

  return loop;
};
