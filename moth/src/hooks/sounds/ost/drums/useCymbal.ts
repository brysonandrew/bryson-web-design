import { useMothContext } from "@moth-state/Context";
import { useBufferFromSrcHandler } from "@moth-hooks/useBufferFromSrcHandler";
import type { THandlerConfig } from "./types";
import { useGain } from "../useGain";

export const useCymbal = () => {
  const { context, master } = useMothContext();
  const handleSample = useBufferFromSrcHandler(context);
  const gain = useGain();
  const play = async ({
    startTime,
    version = 4,
    volume,
  }: THandlerConfig & { version?: 1 | 4 | 10 }) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 800,
      type: "highpass",
    });
    gain.gain.value = volume ?? 0.04;

    const sampleBuffer: AudioBuffer = await handleSample(
      `/sounds/cymbals/saev_${version}.wav`,
    );

    const source = context.createBufferSource();
    source.buffer = sampleBuffer;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    source.start(startTime);
  };

  return { gain, play };
};
