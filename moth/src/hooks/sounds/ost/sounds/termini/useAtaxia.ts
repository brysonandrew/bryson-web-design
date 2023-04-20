import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "../../types";
import { midiToHz } from "@moth-utils/sound";
import { useGain } from "../useGain";

type TAtaxiaHandlerConfig = THandlerConfig & {
  delayRamp?: number | null;
  frequencyRamp?: number | null;
};

export const useAtaxia = () => {
  const { context, master } = useMothContext();

  const handler = ({
    startTime,
    pitch = 0,
    duration = 0,
    volume = 1,
    delayRamp = null,
    frequencyRamp = null,
  }: TAtaxiaHandlerConfig) => {
    const end = startTime + duration;

    const delay = context.createDelay();
    delay.delayTime.setValueAtTime(0.01, startTime);
    if (delayRamp !== null) {
      delay.delayTime.exponentialRampToValueAtTime(
        delayRamp,
        end,
      );
    }

    const gain = context.createGain();
    gain.gain.exponentialRampToValueAtTime(0.001, end);
    gain.gain.setValueAtTime(0, end);

    const gain2 = context.createGain();
    gain2.gain.setValueAtTime(volume, startTime);
    gain2.gain.exponentialRampToValueAtTime(0.001, end);
    gain2.gain.setValueAtTime(0, end);

    const o = context.createOscillator();
    o.frequency.setValueAtTime(midiToHz(pitch), startTime);
    if (frequencyRamp !== null) {
      o.frequency.exponentialRampToValueAtTime(
        frequencyRamp,
        end,
      );
    }

    const feedback = context.createGain();
    feedback.gain.setValueAtTime(1.1, startTime);
    feedback.gain.exponentialRampToValueAtTime(0.001, end);
    feedback.gain.setValueAtTime(0, end);

    o.connect(gain);
    o.start(startTime);
    o.stop(end);

    gain.connect(delay);

    feedback.connect(delay);
    delay.connect(feedback);

    feedback.connect(gain2);
    gain2.connect(master);
  };

  return {
    play: handler,
    stop,
  };
};
