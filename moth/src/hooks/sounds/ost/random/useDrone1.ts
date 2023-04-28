import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "@moth-hooks/sounds/ost/types";

export const useDrone1 = () => {
  const { context, master } = useMothContext();
  const { play, stop } = useSynthMulti(context);

  const handler = ({
    startTime,
    duration = 0,
    pitch = 0,
    type = "sawtooth",
    volume = 0.01,
  }: THandlerConfig) => {
    const delayTime = {
      start: 1,
      end: 0.001,
    };
    const delay = new DelayNode(context, {
      delayTime: delayTime.start,
    });
    // const lfo = new OscillatorNode(context, {
    //   frequency: 0.5,
    // });
    // const lfoGain = new GainNode(context, { gain: 500 });
    const filter = new BiquadFilterNode(context, {
      frequency: 400,
      type: "lowpass",
    });
    // lfo.connect(lfoGain);
    // lfoGain.connect(filter.frequency);

    const end = startTime + duration;

    const gain = new GainNode(context, { gain: volume });
    const options: TMultiOptions = {
      type,
      midi: 64 + pitch,
      count: 200,
      spread: 0.4,
      stagger: 0.1,
      start: startTime,
      end,
      output: delay,
    };

    // lfo.start(startTime);
    // lfo.stop(end);

    delay.delayTime.setValueAtTime(
      delayTime.start,
      startTime,
    );
    delay.delayTime.exponentialRampToValueAtTime(
      delayTime.end,
      end,
    );

    delay.connect(filter);
    filter.connect(gain);
    gain.connect(master);

    play(options);
  };

  return { play: handler, stop };
};
