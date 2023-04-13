import {
  CYMBAL_STEPS,
  CYMBAL_SPEED,
  SNARE_STEPS,
  SNARE_SPEED,
  KICK_STEPS,
  KICK_SPEED,
} from "@moth-hooks/sounds/ost/tracks/amynthasraptor/constants";
import { useCymbal } from "@moth-hooks/sounds/ost/tracks/amynthasraptor/sounds/useCymbal";
import { useSnare } from "@moth-hooks/sounds/ost/tracks/amynthasraptor/sounds/useSnare";
import { STEPS_SPEED } from "@moth-hooks/sounds/ost/rezauutinumn/play/constants";
import { useMothContext } from "@moth-state/Context";
import { SPEED } from "@moth-state/constants";
import { STEPS_2 } from "./constants";
import { useArpeggio } from "../../sounds/useArpeggio";
import { useKick } from "../../sounds/useKick";

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
