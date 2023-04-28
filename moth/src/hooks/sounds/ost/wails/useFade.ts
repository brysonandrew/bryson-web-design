import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "../tracks/brachyurazoa/types";

export const useFade = () => {
  const { context, master } = useMothContext();
  const multiSynth = useSynthMulti(context);

  const handler = ({
    startTime,
    pitch = 0,
    duration = 0,
    volume = 0.04,
    type = "sawtooth",
  }: THandlerConfig) => {
    const filterFrequencyStart = 1200;
    const filter = new BiquadFilterNode(context, {
      frequency: filterFrequencyStart,
      type: "lowpass",
    });
    filter.frequency.setValueAtTime(
      filterFrequencyStart,
      startTime,
    );

    const gainStart = volume;
    const gain = new GainNode(context, {
      gain: gainStart,
    });
    gain.gain.setValueAtTime(gainStart, startTime);
    const end = startTime + duration;
    const options: TMultiOptions = {
      type,
      midi: 10 + pitch,
      count: 4,
      spread: 20,
      stagger: 0,
      decay: 0,
      start: startTime,
      end,
      output: filter,
    };

    filter.frequency.linearRampToValueAtTime(10, end);

    filter.connect(gain);
    gain.connect(master);

    multiSynth.play(options);
  };

  return {
    play: handler,
    stop: stop,
  };
};
