import { useMothContext } from "@moth-state/Context";
import {
  ARPEGGIO_SPEED,
  STEPS_2,
  KICK_SPEED,
  TIME,
  APRPEGGIOS_0,
} from "./constants";
import { useArpeggio } from "../../sounds/useArpeggio";
import { useBass } from "../../sounds/useBass";
import { useKick } from "@moth-hooks/sounds/ost/sounds/drums/useKick";

export const usePhase0 = () => {
  const arpeggio = useArpeggio();
  const bass = useBass();

  const kick = useKick();

  const { context } = useMothContext();

  const arpeggioLoop = () => {
    APRPEGGIOS_0.forEach((steps, index) => {
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
      kick({
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
