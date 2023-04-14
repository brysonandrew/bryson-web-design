import { useMothContext } from "@moth-state/Context";
import {
  ARPEGGIO_SPEED,
  ARPEGGIO_STEPS,
  CYMBAL_SPEED,
  CYMBAL_STEPS,
  KICK_SPEED,
  KICK_STEPS,
  SNARE_SPEED,
  SNARE_STEPS,
} from "../../constants";
import { useArpeggio } from "../../sounds/useArpeggio";
import { useCymbal } from "@moth-hooks/sounds/ost/sounds/drums/useCymbal";
import { useSnare } from "@moth-hooks/sounds/ost/sounds/drums/useSnare";
import { useKick } from "@moth-hooks/sounds/ost/sounds/drums/useKick";

export const usePhase0 = () => {
  const { context } = useMothContext();

  const arpeggio = useArpeggio();

  const cymbal = useCymbal();
  const snare = useSnare();
  const kick = useKick();

  const loop = () => {
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
        volume: 0.28,
      });
    });
    KICK_STEPS.forEach((v, index) => {
      if (!v) return;
      kick({
        startTime: context.currentTime + index * KICK_SPEED,
      });
    });
    ARPEGGIO_STEPS.forEach((v, index) => {
      arpeggio.play({
        startTime:
          context.currentTime + index * ARPEGGIO_SPEED,
        pitch: v + 36,
        duration: ARPEGGIO_SPEED,
      });
      // if (index === 0) {
      //   drone.play({
      //     startTime:
      //       context.currentTime + index * ARPEGGIO_SPEED,
      //     pitch: 24,
      //     duration: 2 * ARPEGGIO_SPEED,
      //     volume: 0.04,
      //   });
      // }
      // if (index === 2) {
      //   drone.play({
      //     startTime:
      //       context.currentTime +
      //       (index + 2) * ARPEGGIO_SPEED,
      //     pitch: 66,
      //     duration: (ARPEGGIO_COUNT - 2) * ARPEGGIO_SPEED,
      //     volume: 0.04,
      //   });
      // }
    });
  };

  return loop;
};
