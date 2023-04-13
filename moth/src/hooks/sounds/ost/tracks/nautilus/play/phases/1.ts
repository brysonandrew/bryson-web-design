import { useMothContext } from "@moth-state/Context";
import { useRef } from "react";
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
import { useCymbal } from "../../sounds/useCymbal";
import { useKick } from "../../sounds/useKick";
import { useSnare } from "../../sounds/useSnare";

export const usePhase1 = () => {
  const indexRef = useRef<number>(0);

  const arpeggio = useArpeggio();
  const snare = useSnare();
  const kick = useKick();
  const cymbal = useCymbal();

  const { context } = useMothContext();

  const loop = () => {
    ARPEGGIO_STEPS.forEach((v, index) => {
      const isSecond = indexRef.current % 2 === 0;
      const pitch = isSecond ? v + 24 : v + 36;
      arpeggio.play({
        startTime:
          context.currentTime + index * ARPEGGIO_SPEED,
        pitch,
        duration: ARPEGGIO_SPEED * 2,
        volume: 0.02,
        type: isSecond ? "square" : "triangle",
      });
    });
    CYMBAL_STEPS.forEach((v, index) => {
      if (!v) return;
      cymbal({
        startTime:
          context.currentTime + index * CYMBAL_SPEED,
        volume: 0.12,
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
        volume: 0.15,
      });
    });
  };

  return loop;
};
