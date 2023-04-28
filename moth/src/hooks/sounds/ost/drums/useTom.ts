import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "../tracks/cordyceptaera/types";
import { useBufferFromSrcHandler } from "@moth-hooks/useBufferFromSrcHandler";
import { useGain } from "../useGain";

export const useTom = () => {
  const { context, master } = useMothContext();
  const handleSample = useBufferFromSrcHandler(context);
  const gain = useGain();

  const play = async ({ startTime }: THandlerConfig) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 800,
      type: "lowpass",
    });
    gain.gain.value = 0.4;

    const sampleBuffer: AudioBuffer = await handleSample(
      "/sounds/toms/ludwig-mahogany-low-tom.wav",
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
