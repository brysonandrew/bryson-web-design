import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "../tracks/brachyurazoa/types";
import { TIME } from "../tracks/brachyurazoa/phases/constants";

export const useGlitch = () => {
  const { context, master } = useMothContext();
  const { play, stop } = useSynthMulti(context);

  const handler = ({
    startTime,
    pitch = 0,
    volume = 0.01,
    duration = 0,
    type = "sawtooth",
  }: THandlerConfig) => {
    const delay = new DelayNode(context, {
      delayTime: 0.001,
    });
    const lfo = new OscillatorNode(context, {
      frequency: TIME,
    });
    const lfoGain = new GainNode(context, { gain: 1200 });
    const filter = new BiquadFilterNode(context, {
      frequency: 400,
      type: "allpass",
    });
    lfo.connect(lfoGain);
    lfoGain.connect(delay.delayTime);

    const gain = new GainNode(context, {
      gain: volume * 0.1,
    });
    const end = startTime + duration;
    const options: TMultiOptions = {
      type,
      midi: 24 + pitch ,
      count: 20,
      spread: 2,
      stagger: 0.4,
      start: startTime,
      end,
      output: delay,
    };

    lfo.start(startTime);
    lfo.stop(end);

    delay.delayTime.setValueAtTime(1, startTime);
    delay.delayTime.exponentialRampToValueAtTime(1, end);
    gain.gain.exponentialRampToValueAtTime(
      volume * 0.1,
      end,
    );
    gain.gain.setValueAtTime(0, end);
    delay.connect(filter);
    filter.connect(gain);
    gain.connect(master);

    play(options);
  };

  return { play: handler, stop };
};
