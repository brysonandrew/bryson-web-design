import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "../../tracks/eukaryotchii/types";
import { useBufferFromSrcHandler } from "../../../../useBufferFromSrcHandler";

export const useSnare = () => {
  const { context, master } = useMothContext();
  const handleSample = useBufferFromSrcHandler(context);

  const play = async ({
    startTime,
    version = 7,
    volume,
  }: THandlerConfig & { version?: 2 | 7 | 9 | 11 }) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 800,
      type: "allpass",
    });
    const gain = new GainNode(context, {
      gain: volume ?? 0.028,
    });

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

  return play;
};
