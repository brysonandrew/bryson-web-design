import { useTaser } from "@moth-hooks/sounds/ost/robos/useTaser";
import { useSynth3 } from "@moth-hooks/sounds/ost/synths/useSynth3";
import { ARPEGGIO_VOLUME, ARPEGGIO_ASCENDING_STEPS_1 } from "@moth-hooks/sounds/ost/tracks/cordyceptaera/constants";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";

const VOLUME = ARPEGGIO_VOLUME * 0.4;

export const useIntro1 = () => {
  const arpeggio = useTaser();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    arpeggio.play({
      startTime:
        context.currentTime,
      pitch: 24,
      duration,
      type: "triangle",
      volume: VOLUME,
    });
  };

  return loop;
};
