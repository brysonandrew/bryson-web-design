import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "./types";
import { useBufferFromSrcHandler } from "../useBufferFromSrcHandler";

export const useCymbal = () => {
  const { context, master } = useMothContext();
  const handleSample = useBufferFromSrcHandler(context);

  const play = async ({
    startTime,
    version = 4,
    volume
  }: THandlerConfig & { version?: 1|4|10 }) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 800,
      type: "highpass",
    });
    const gain = new GainNode(context, { gain: volume ?? 0.04 });

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

  return play;
};
