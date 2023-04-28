import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "../types";

type TFromTo = {
  from: number;
  to: number;
};
export type TGeistHandlerConfig = THandlerConfig & {
  pain?: TFromTo;
  writhe?: TFromTo;
  glitch?: number;
};
export const useGeist = () => {
  const { context, master } = useMothContext();
  const { play, stop } = useSynthMulti(context);

  const handler = (config: TGeistHandlerConfig) => {
    const {
      type = "triangle",
      startTime,
      duration = 1,
      pitch = 0,
      volume = 0.01,
      writhe = { from: 4, to: 10 },
      pain = { from: 0, to: 4000 },
      glitch = 0,
    } = config;

    const lfo = new OscillatorNode(context, {
      frequency: writhe.from,
    });
    lfo.frequency.setValueAtTime(writhe.from, startTime);
    const lfoGain = new GainNode(context, {
      gain: pain.from,
    });
    lfoGain.gain.setValueAtTime(pain.from, startTime);
    lfo.connect(lfoGain);

    const filterFrequency = pain.to;
    const filter = new BiquadFilterNode(context, {
      frequency: filterFrequency,
      type: "bandpass",
    });
    filter.frequency.setValueAtTime(
      filterFrequency,
      startTime,
    );
    lfoGain.connect(filter.frequency);

    const gain = new GainNode(context, { gain: volume });

    const end = startTime + duration * 2;

    const options: TMultiOptions = {
      type,
      midi: 64 + pitch,
      count: 10,
      spread: 2,
      stagger: 0.1,
      attack: duration * 0.5,
      decay: 0, // duration * 0.5,
      start: startTime,
      end,
      output: filter,
    };

    gain.gain.setValueAtTime(volume, startTime);
    gain.gain.exponentialRampToValueAtTime(
      volume * 0.5,
      end,
    );

    lfo.start(startTime + 0.01);
    lfo.stop(end - 0.01);

    if (glitch > 0) {
      const delay = new DelayNode(context, {
        delayTime: glitch,
      });
      delay.delayTime.setValueAtTime(glitch, startTime);
      delay.delayTime.exponentialRampToValueAtTime(
        10,
        end,
      );
      const feedback = new GainNode(context, {
        gain: 0.99,
      });
      feedback.gain.setValueAtTime(0.99, startTime);
      feedback.gain.exponentialRampToValueAtTime(0.001, end);
      feedback.gain.setValueAtTime(0, end);

      delay.connect(filter);
      filter.connect(feedback);
      feedback.connect(delay);

      feedback.connect(gain);
    } else {
      filter.connect(gain);
    }

    gain.connect(master);

    play(options);
  };

  return { play: handler, stop };
};
