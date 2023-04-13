import { KICK_STEPS } from "@moth-hooks/sounds/ost/amynthasraptor/constants";
import { useMothContext } from "@moth-state/Context";
import { useBass } from "../../sounds/useBass";
import { useKick } from "../../sounds/useKick";
import {
  ARPEGGIO_SPEED,
  ARPEGGIO_STEPS,
  CYMBAL_SPEED,
  CYMBAL_STEPS,
  KICK_SPEED,
  SNARE_SPEED,
  SNARE_STEPS,
  SPEED,
} from "../constants";
import { useClang } from "../../sounds/useClang";
import { useCymbal } from "../../sounds/useCymbal";
import { useSnare } from "../../sounds/useSnare";

export const usePhase0 = () => {
  const bass = useBass();
  const clang = useClang();
  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();
  const { context } = useMothContext();

  const loop = () => {
    ARPEGGIO_STEPS.forEach((v, index) => {
      bass.play({
        startTime:
          context.currentTime + index * ARPEGGIO_SPEED,
        pitch: v + 36,
        duration: ARPEGGIO_SPEED,
        volume: 0.1,
      });
    });
    ARPEGGIO_STEPS.forEach((v, index) => {
      clang.play({
        startTime:
          context.currentTime + index * ARPEGGIO_SPEED,
        pitch: v + 36,
        duration: ARPEGGIO_SPEED,
        volume: 0.4,
      });
    });
    KICK_STEPS.forEach((v, index) => {
      if (!v) return;
      kick({
        startTime: context.currentTime + index * KICK_SPEED,
        volume: 0.2,
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
        version: 2,
      });
    });
  };

  return loop;
};
