import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "../types";

export type TTaserHandlerConfig = THandlerConfig & {
  volts?: number;
  current?: number;
};

export const useTaser = () => {
  const { context, master } = useMothContext();
  const { play, stop } = useSynthMulti(context);

  const handler = (config: TTaserHandlerConfig) => {
    const {
      type = "sawtooth",
      startTime,
      duration = 1,
      pitch = 0,
      volume = 0.01,
      volts = 1200,
      current = 2400,
    } = config;

    const delayTime = {
      start: 1,
      end: 0.001,
    };

    const lfo = new OscillatorNode(context, {
      frequency: current,
    });
    lfo.frequency.setValueAtTime(current, startTime);
    const lfoGain = new GainNode(context, { gain: volts });
    lfoGain.gain.setValueAtTime(volts, startTime);
    lfo.connect(lfoGain);
    const lowpass = new BiquadFilterNode(context, {
      frequency: 800,
      type: "allpass",
    });
    const filter = new BiquadFilterNode(context, {
      frequency: 1400,
      type: "highpass",
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
      midi: 24 + pitch,
      count: 40,
      spread: 0.1,
      stagger: 0.04,
      start: startTime + 0.01,
      end: end - 0.01,
      output: filter,
    };

    lfo.start(startTime + 0.01);
    lfo.stop(end - 0.01);

    delay.delayTime.exponentialRampToValueAtTime(
      delayTime.end,
      end, // if delayTime.end > delayTime.start can use buffer (delayTime.end) to stop it zipping back up
    );
    filter.connect(delay);
    delay.connect(lowpass);
    lowpass.connect(gain);
    gain.connect(master);

    play(options);
  };

  return { play: handler, stop };
};
