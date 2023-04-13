import { useMothContext } from "@moth-state/Context";
import {
  ARPEGGIO_SPEED,
  SPEED,
  STEPS_2,
  ARPEGGIO_STEPS,
  KICK_SPEED,
  TIME,
} from "./constants";
import { useArpeggio } from "../../sounds/useArpeggio";
import { useBass } from "../../sounds/useBass";
import { useKick } from "../../sounds/useKick";

export const usePhase0 = () => {
  const arpeggio = useArpeggio();
  const bass = useBass();

  const kick = useKick();

  const { context } = useMothContext();

  const arpeggioLoop = () => {
    ARPEGGIO_STEPS.forEach((v, index) => {
      arpeggio.play({
        startTime:
          context.currentTime +
          index * ARPEGGIO_SPEED * 0.125,
        pitch: v + 38 + 36,
        duration: ARPEGGIO_SPEED * 2,
        volume: 0.1,
      });
    });
    ARPEGGIO_STEPS.forEach((v, index) => {
      arpeggio.play({
        startTime:
          context.currentTime +
          index * ARPEGGIO_SPEED * 0.125 +
          TIME * 0.5,
        pitch: v + 38 + 36,
        duration: ARPEGGIO_SPEED * 2,
        volume: 1,
      });
    });
  };

  const bassLoop = () => {
    STEPS_2.forEach((v, index) => {
      if (!v) return;
      kick({
        startTime: context.currentTime + index * KICK_SPEED,
        volume: 1.2,
      });
      bass.play({
        startTime: context.currentTime + index * KICK_SPEED,
        pitch: v,
        duration: KICK_SPEED,
        volume: 0.2,
      });
    });
  };

  const loop = () => {
    arpeggioLoop();
    bassLoop();
  };

  return loop;
};
