import { useMothContext } from "@moth-state/Context";
import { useBufferFromSrcHandler } from "@moth-hooks/useBufferFromSrcHandler";
import type { THandlerConfig } from "./types";
import { useGain } from "../useGain";

export const useSnare = () => {
  const { context, master } = useMothContext();
  const handleSample = useBufferFromSrcHandler(context);
  const gain = useGain();

  const play = async ({
    startTime,
    version = 7,
    volume,
    type = "allpass",
  }: THandlerConfig & {
    version?: 2 | 7 | 9 | 11;
  }) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 800,
      type,
    });
    gain.gain.value = volume ?? 0.028;
    const sampleBuffer: AudioBuffer = await handleSample(
      `/sounds/snares/saev_${version}.wav`,
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
