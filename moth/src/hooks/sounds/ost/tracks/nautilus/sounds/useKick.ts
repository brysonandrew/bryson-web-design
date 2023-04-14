import { useMothContext } from "@moth-state/Context";
import { useBufferFromSrcHandler } from "../../../../../useBufferFromSrcHandler";
import type { THandlerConfig } from "../types";

export const useKick = () => {
  const { context, master } = useMothContext();
  const handleSample = useBufferFromSrcHandler(context);

  const play = async ({
    startTime,
    volume = 0.05,
  }: THandlerConfig) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 1200,
      type: "lowpass",
    });
    const gain = new GainNode(context, { gain: volume });

    const sampleBuffer: AudioBuffer = await handleSample(
      "/sounds/kicks/saev.wav",
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
