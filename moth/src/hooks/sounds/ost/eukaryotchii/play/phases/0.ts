import { useMothContext } from "@moth-state/Context";
import { useMech } from "@moth-hooks/sounds/ost/sounds/robo/useMech";
import { useKick } from "../../sounds/useKick";
import {
  ARPEGGIO_COUNT,
  ARPEGGIO_SPEED,
  ARPEGGIO_STEPS,
  TIME,
} from "../constants";
import { useCymbal } from "../../sounds/useCymbal";
import { useSnare } from "../../sounds/useSnare";
import { useClang } from "../../sounds/useClang";
import { useBass } from "../../sounds/useBass";

export const usePhase0 = () => {
  const mech = useMech();
  const bass = useBass();
  const clang = useClang();
  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();
  const { context } = useMothContext();

  const loop = () => {
    console.log(ARPEGGIO_STEPS);
    ARPEGGIO_STEPS.forEach((v, index) => {
      const pitch = ~~(index / TIME) * 12;
      const config = {
        startTime:
          context.currentTime + index * ARPEGGIO_SPEED,
        pitch: v + 24,
        duration: ARPEGGIO_SPEED,
        volume: 0.04,
      };
       bass.play(config);
      //mech.play(config);
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
