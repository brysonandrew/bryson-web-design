import { useMothContext } from "@moth-state/Context";
import {
  CYMBAL_STEPS_1,
  KICK_SPEED,
  KICK_STEPS_1,
  SNARE_SPEED,
  SNARE_STEPS,
  STEPS_1,
  STEPS_SPEED,
} from "../constants";
import { useArpeggio } from "../../sounds/useArpeggio";
import { useCymbal } from "../../sounds/useCymbal";
import { useKick } from "../../sounds/useKick";
import { useSnare } from "../../sounds/useSnare";
import { SPEED } from "../constants";

export const usePhase1 = () => {
  const arpeggio = useArpeggio();

  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();

  const { context } = useMothContext();

  const loop = () => {
    STEPS_1.forEach((v, stepsIndex) => {
      arpeggio.play({
        startTime: context.currentTime + stepsIndex * SPEED,
        pitch: v + 39,
        duration: STEPS_SPEED * 0.4,
        volume: 0.01,
      });
      arpeggio.play({
        startTime: context.currentTime + stepsIndex * SPEED,
        pitch: v + 39 + 24,
        duration: STEPS_SPEED * 0.4,
        volume: 0.01,
        type: "triangle",
      });
    });

    CYMBAL_STEPS_1.forEach((v, index) => {
      if (!v) return;
      cymbal({
        startTime:
          context.currentTime + index * STEPS_SPEED,
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
    KICK_STEPS_1.forEach((v, index) => {
      if (!v) return;
      kick({
        startTime: context.currentTime + index * KICK_SPEED,
        volume: 0.1,
      });
    });
  };

  return loop;
};
