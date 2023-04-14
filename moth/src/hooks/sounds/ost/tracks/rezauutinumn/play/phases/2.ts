import { useMothContext } from "@moth-state/Context";
import {
  CYMBAL_SPEED,
  CYMBAL_STEPS,
  KICK_SPEED,
  KICK_STEPS,
  SNARE_SPEED,
  SNARE_STEPS,
  STEPS_2,
  STEPS_SPEED,
  SPEED,
} from "../constants";
import { useArpeggio } from "../../sounds/useArpeggio";
import { useKick } from "@moth-hooks/sounds/ost/sounds/drums/useKick";
import { useSnare } from "@moth-hooks/sounds/ost/sounds/drums/useSnare";
import { useCymbal } from "@moth-hooks/sounds/ost/sounds/drums/useCymbal";

export const usePhase2 = () => {
  const arpeggio = useArpeggio();

  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();

  const { context } = useMothContext();

  const loop = () => {
    STEPS_2.forEach((v, index) => {
      arpeggio.play({
        startTime:
          context.currentTime + index * STEPS_SPEED,
        pitch: v + 38,
        duration: SPEED * 0.6,
        volume: 0.02,
      });
    });

    CYMBAL_STEPS.forEach((v, index) => {
      if (!v) return;
      cymbal({
        startTime:
          context.currentTime + index * CYMBAL_SPEED,
        volume: 0.1,
      });
    });
    SNARE_STEPS.forEach((v, index) => {
      if (!v) return;
      snare({
        startTime:
          context.currentTime + index * SNARE_SPEED,
        volume: 0.1,
      });
    });
    KICK_STEPS.forEach((v, index) => {
      if (!v) return;
      kick({
        startTime: context.currentTime + index * KICK_SPEED,
        volume: 0.1,
      });
    });
  };

  return loop;
};
