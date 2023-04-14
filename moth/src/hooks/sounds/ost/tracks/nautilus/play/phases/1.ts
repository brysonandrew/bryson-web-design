import { useMothContext } from "@moth-state/Context";
import { useRef } from "react";
import {
  ARPEGGIO_SPEED,
  ARPEGGIO_STEPS,
} from "../../constants";
import { useArpeggio } from "../../sounds/useArpeggio";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";

export const usePhase1 = () => {
  const arpeggio = useArpeggio();
  const { context } = useMothContext();

  const loop = ({ start, duration }: TPlayerConfig) => {
    ARPEGGIO_STEPS.forEach((v, index, { length }) => {
      const d = duration / length;

      const isSecond = index % 2 === 0;
      const pitch = isSecond ? v + 24 : v + 36;
      arpeggio.play({
        startTime: context.currentTime + index * d + start,
        pitch,
        duration: ARPEGGIO_SPEED * 2,
        volume: 0.02,
        type: isSecond ? "square" : "triangle",
      });
    });
  };

  return loop;
};
