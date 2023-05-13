import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "../types";
const OFFSET = 0.01;

export const usePunisher = () => {
  const { context, master } = useMothContext();
  const multiSynth = useSynthMulti(context);

  const handler = ({
    startTime,
    pitch = 0,
    duration = 0,
    type = "sawtooth",
    volume = 0.1,
  }: THandlerConfig) => {
    const filterFrequencyStart = 100;
    const filter = new BiquadFilterNode(context, {
      frequency: filterFrequencyStart,
      type: "lowpass",
    });
    filter.frequency.setValueAtTime(
      filterFrequencyStart,
      startTime,
    );

    const gain = new GainNode(context, { gain: volume });
    gain.gain.setValueAtTime(volume, startTime);
    const end = startTime + duration;

    const options: TMultiOptions = {
      type,
      midi: 24 + pitch,
      count: 24,
      spread: 2.2,
      stagger: 0.00099,
      start: startTime + OFFSET,
      end: end - OFFSET,
      output: filter,
    };

    filter.frequency.linearRampToValueAtTime(200, end);
    gain.gain.exponentialRampToValueAtTime(0.01, end);
    gain.gain.setValueAtTime(0, end);

    filter.connect(gain);
    gain.connect(master);

    multiSynth.play(options);
  };

  return {
    play: handler,
    stop: stop.bind(multiSynth.stop),
  };
};
