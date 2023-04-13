import { useMech } from "@moth-hooks/sounds/ost/sounds/robo/useMech";
import { useMothContext } from "@moth-state/Context";
import { useCymbal } from "../../sounds/useCymbal";
import { useKick } from "../../sounds/useKick";
import { useSnare } from "../../sounds/useSnare";
import {
  ARPEGGIO_COUNT,
  ARPEGGIO_SPEED,
  ARPEGGIO_STEPS,
  TIME,
} from "../constants";
import { useClang } from "@moth-hooks/sounds/ost/sounds/robo/useClang";

export const usePhase1 = () => {
  const mech = useMech();
  const clang = useClang();

  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();
  const { context } = useMothContext();

  const loop = () => {
    ARPEGGIO_STEPS.forEach((v, index) => {
      const inc = ~~(index / TIME) * 12;
      const config = {
        startTime:
          context.currentTime + index * ARPEGGIO_SPEED,
        pitch: v + 24,
        torque:
          v + inc * 1000,
        duration: ARPEGGIO_SPEED,
        volume: 0.04,
      };
      clang.play(config);
    });
    // KICK_STEPS.forEach((v, index) => {
    //   if (!v) return;
    //   kick({
    //     startTime: context.currentTime + index * KICK_SPEED,
    //     volume: 0.2,
    //   });
    // });
    // CYMBAL_STEPS.forEach((v, index) => {
    //   if (!v) return;
    //   cymbal({
    //     startTime:
    //       context.currentTime + index * CYMBAL_SPEED,
    //     volume: 0.2,
    //   });
    // });
    // SNARE_STEPS.forEach((v, index) => {
    //   if (!v) return;
    //   snare({
    //     startTime:
    //       context.currentTime + index * SNARE_SPEED,
    //     volume: 0.2,
    //     version: 2,
    //   });
    // });
  };

  return loop;
};
