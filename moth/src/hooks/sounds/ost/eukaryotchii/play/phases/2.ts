import { useMothContext } from "@moth-state/Context";
import {
  TMechHandlerConfig,
  useMech,
} from "@moth-hooks/sounds/ost/sounds/robo/useMech";
import { useKick } from "../../sounds/useKick";
import {
  ARPEGGIO_COUNT,
  ARPEGGIO_SPEED,
  ARPEGGIO_STEPS,
  CYMBAL_SPEED,
  CYMBAL_STEPS,
  KICK_SPEED,
  KICK_STEPS,
  SNARE_SPEED,
  SNARE_STEPS,
  TIME,
} from "../constants";
import { useCymbal } from "../../sounds/useCymbal";
import { useSnare } from "../../sounds/useSnare";
import { useBass } from "../../sounds/useBass";
import { useClang } from "@moth-hooks/sounds/ost/sounds/robo/useClang";

export const usePhase2 = () => {
  const mech = useMech();
  const bass = useBass();
  const clang = useClang();
  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();
  const { context } = useMothContext();

  const loop = () => {
    ARPEGGIO_STEPS.forEach((v, index) => {
      const pitch = index + 12;
      const config: TMechHandlerConfig = {
        startTime:
          context.currentTime + index * ARPEGGIO_SPEED,
        pitch,
        duration: ARPEGGIO_SPEED * 2,
        volume: 0.05,
        torque: 1200,
        revs: 2400 / pitch,
      };
      clang.play(config);
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
