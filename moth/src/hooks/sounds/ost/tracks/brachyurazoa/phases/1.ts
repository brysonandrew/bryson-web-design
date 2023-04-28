import { useMothContext } from "@moth-state/Context";
import { useKick } from "@moth-hooks/sounds/ost/drums/useKick";
import {
  ARPEGGIO_SPEED,
  STEPS_2,
  KICK_SPEED,
  TIME,
  APRPEGGIOS_1,
} from "./constants";
import { useBass2 } from "../../../basses/useBass2";
import { useFade } from "@moth-hooks/sounds/ost/wails/useFade";

export const usePhase1 = () => {
  const arpeggio = useFade();
  const bass = useBass2();

  const kick = useKick();

  const { context } = useMothContext();

  const arpeggioLoop = () => {
    APRPEGGIOS_1.forEach((steps, index) => {
      steps.forEach((v, stepIndex) => {
        arpeggio.play({
          startTime:
            context.currentTime +
            stepIndex * ARPEGGIO_SPEED * 0.125 +
            index * TIME * 0.5,
          pitch: v + 38 + 36,
          duration: ARPEGGIO_SPEED * 2,
          volume: 0.2,
        });
      });
    });
  };
  const bassLoop = () => {
    STEPS_2.forEach((v, index) => {
      if (!v) return;
      kick.play({
        startTime: context.currentTime + index * KICK_SPEED,
        volume: 1.4,
      });
      bass.play({
        startTime: context.currentTime + index * KICK_SPEED,
        pitch: v,
        duration: KICK_SPEED,
        volume: 0.4,
      });
    });
  };

  const loop = () => {
    arpeggioLoop();
    bassLoop();
  };

  return loop;
};
