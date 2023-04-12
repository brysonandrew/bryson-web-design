import { useMothContext } from "@moth-state/Context";
import {
  CYMBAL_SPEED,
  CYMBAL_STEPS,
  KICK_SPEED,
  KICK_STEPS,
  SNARE_SPEED,
  SNARE_STEPS,
  STEPS_3,
  STEPS_SPEED,
} from "../constants";
import { useArpeggio } from "../../sounds/useArpeggio";
import { useCymbal } from "../../sounds/useCymbal";
import { useKick } from "../../sounds/useKick";
import { useSnare } from "../../sounds/useSnare";

export const usePhase3 = () => {
  const arpeggio = useArpeggio();

  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();

  const { context } = useMothContext();

  const loop = () => {
    STEPS_3.forEach((v, index) => {
      arpeggio.play({
        startTime:
          context.currentTime + index * STEPS_SPEED,
        pitch: v + 39,
        duration: STEPS_SPEED * 0.72,
        volume: 0.04,
      });
      arpeggio.play({
        startTime:
          context.currentTime + index * STEPS_SPEED,
        pitch: v + 39 + 24,
        duration: STEPS_SPEED * 0.72,
        volume: 0.04,
        type: "sine",
      });
    });

    CYMBAL_STEPS.forEach((v, index) => {
      if (!v) return;
      cymbal({
        startTime:
          context.currentTime + index * CYMBAL_SPEED,
          volume: 0.2,
        });
    });
    SNARE_STEPS.forEach((v, index) => {
      if (!v) return;
      snare({
        startTime:
          context.currentTime + index * SNARE_SPEED,
          volume: 0.2,
        });
    });
    KICK_STEPS.forEach((v, index) => {
      if (!v) return;
      kick({
        startTime: context.currentTime + index * KICK_SPEED,
        volume: 0.2,
      });
    });
  };

  return loop;
};
