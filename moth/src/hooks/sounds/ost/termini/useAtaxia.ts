import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "../types";
import { midiToHz } from "@moth-utils/sound";

const OFFSET = 0.01;

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
    const start = startTime + OFFSET;
    const end = startTime + duration - OFFSET;

    const delay = context.createDelay();
    delay.delayTime.setValueAtTime(0.01, start);
    if (delayRamp !== null) {
      delay.delayTime.exponentialRampToValueAtTime(
        delayRamp,
        end,
      );
    }

    const gain = context.createGain();
    gain.gain.setValueAtTime(0, end);
    gain.gain.exponentialRampToValueAtTime(0.001, end);
    gain.gain.setValueAtTime(0, end);

    const gain2 = context.createGain();
    gain2.gain.setValueAtTime(volume, start);
    gain2.gain.exponentialRampToValueAtTime(0.001, end);
    gain2.gain.setValueAtTime(0, end);

    const o = context.createOscillator();
    o.frequency.setValueAtTime(midiToHz(pitch), start);
    if (frequencyRamp !== null) {
      o.frequency.exponentialRampToValueAtTime(
        frequencyRamp,
        end,
      );
    }

    const feedback = context.createGain();
    feedback.gain.setValueAtTime(1.1, start);
    feedback.gain.exponentialRampToValueAtTime(0.001, end);
    feedback.gain.setValueAtTime(0, end);

    o.connect(gain);
    o.start(start);
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
