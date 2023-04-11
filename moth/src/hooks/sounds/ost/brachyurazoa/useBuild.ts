import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "./types";

export const useBuild = () => {
  const { context, master } = useMothContext();
  const multiSynth = useSynthMulti(context);

  const handler = ({
    startTime,
    pitch,
    duration,
    volume
  }: THandlerConfig) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 400,
      type: "lowpass",
    });
    const lfo = new OscillatorNode(context, {
      frequency: duration,
    });
    lfo.start(startTime);
    const lfoGain = new GainNode(context, { gain: volume });
    lfo.connect(lfoGain);

    const gain = new GainNode(context, { gain: 0 });
    const options: TMultiOptions = {
      type: "sawtooth",
      midi: 0 + (pitch ?? 0),
      count: 10,
      spread: 0,
      stagger: 0.5,
      decay: 1,
      start: startTime,
      output: filter,
    };
    lfoGain.connect(gain.gain);

    filter.connect(gain);
    gain.connect(master);

    multiSynth.play(options);
  };

  return {
    play: handler,
    stop: stop.bind(multiSynth.stop),
  };
};
