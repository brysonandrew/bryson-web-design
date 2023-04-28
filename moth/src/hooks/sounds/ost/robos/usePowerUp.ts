import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "../tracks/rezauutinumn/types";

export const usePowerUp = () => {
  const { context, master } = useMothContext();
  const multiSynth = useSynthMulti(context);

  const handler = ({
    startTime,
    pitch = 0,
    duration = 0,
    type = "sawtooth",
    volume = 0.1,
  }: THandlerConfig) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 1200,
      type: "lowpass",
    });

    const gain = new GainNode(context, { gain: volume });
    const end = startTime + duration;
    const options: TMultiOptions = {
      type,
      midi: 24 + pitch,
      count: 24,
      spread: 2,
      stagger: 0.04,
      decay: 0,
      start: startTime,
      end,
      output: filter,
    };

    filter.frequency.linearRampToValueAtTime(200, end);
    gain.gain.linearRampToValueAtTime(volume, end);

    filter.connect(gain);
    gain.connect(master);

    multiSynth.play(options);
  };

  return {
    play: handler,
    stop: stop.bind(multiSynth.stop),
  };
};
