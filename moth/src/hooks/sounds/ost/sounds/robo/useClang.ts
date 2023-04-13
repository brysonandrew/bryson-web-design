import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
import { THandlerConfig } from "../../rezauutinumn/types";

export const useClang = () => {
  const { context, master } = useMothContext();
  const { play, stop } = useSynthMulti(context);

  const handler = (config: THandlerConfig) => {
    const {
      type = "sawtooth",
      startTime,
      duration = 1,
      pitch = 0,
      volume = 0.01
    } = config;
    const delay = new DelayNode(context, {
      delayTime: 1,
    });
    const lfo = new OscillatorNode(context, {
      frequency: 1200,
    });
    const lfoGain = new GainNode(context, { gain: 5000 });
    const filter = new BiquadFilterNode(context, {
      frequency: 400,
      type: "lowpass",
    });
    lfo.connect(lfoGain);
    lfoGain.connect(filter.detune);

    const gain = new GainNode(context, { gain: volume });
    const end = startTime + duration;
    const options: TMultiOptions = {
      type,
      midi: 28 + pitch,
      count: 20,
      spread: 0.4,
      stagger: 0.1,
      start: startTime,
      end,
      output: filter,
    };

    lfo.start(startTime);
    lfo.stop(end);

    delay.delayTime.setValueAtTime(1, startTime);
    delay.delayTime.exponentialRampToValueAtTime(
      0.001,
      end,
    );

    delay.connect(filter);
    filter.connect(gain);
    gain.connect(master);

    play(options);
  };

  return { play: handler, stop };
};
