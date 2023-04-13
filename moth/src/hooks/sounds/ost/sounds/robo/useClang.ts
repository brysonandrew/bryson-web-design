import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
import { THandlerConfig } from "../../rezauutinumn/types";

export type TClangHandlerConfig = THandlerConfig & {
  torque?: number;
  revs?: number;
};

export const useClang = () => {
  const { context, master } = useMothContext();
  const { play, stop } = useSynthMulti(context);

  const handler = (config: TClangHandlerConfig) => {
    const {
      type = "sawtooth",
      startTime,
      duration = 1,
      pitch = 0,
      volume = 0.01,
      torque = 1200,
      revs = 2400,
    } = config;

    const delayTime = {
      start: 1,
      end: 0.001,
    };

    const lfo = new OscillatorNode(context, {
      frequency: revs,
    });
    lfo.frequency.setValueAtTime(revs, startTime);
    const lfoGain = new GainNode(context, { gain: torque });
    lfoGain.gain.setValueAtTime(torque, startTime);
    lfo.connect(lfoGain);

    const filter = new BiquadFilterNode(context, {
      frequency: 1200,
      type: "lowpass",
    });
    filter.frequency.setValueAtTime(1200, startTime);
    filter.detune.setValueAtTime(0, startTime);
    lfoGain.connect(filter.detune);

    const delay = new DelayNode(context, {
      delayTime: delayTime.start,
    });
    delay.delayTime.setValueAtTime(
      delayTime.start,
      startTime,
    );

    const gain = new GainNode(context, { gain: volume });
    gain.gain.setValueAtTime(volume, startTime);

    const end = startTime + duration;

    const options: TMultiOptions = {
      type,
      midi: 28 + pitch,
      count: 12,
      spread: 0.1,
      stagger: 0.01,
      start: startTime,
      end,
      output: filter,
    };

    lfo.start(startTime);
    lfo.stop(end);

    delay.delayTime.exponentialRampToValueAtTime(
      delayTime.end,
      end, // if delayTime.end > delayTime.start can use buffer (delayTime.end) to stop it zipping back up
    );
    filter.connect(delay);
    delay.connect(gain);
    gain.connect(master);

    play(options);
  };

  return { play: handler, stop };
};
