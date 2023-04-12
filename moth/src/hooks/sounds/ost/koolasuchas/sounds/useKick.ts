import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "../../amynthasraptor/types";
import { useBufferFromSrcHandler } from "../../useBufferFromSrcHandler";

export const useKick = () => {
  const { context, master } = useMothContext();
  const handleSample = useBufferFromSrcHandler(context);

  const play = async ({
    startTime,
    volume,
  }: THandlerConfig) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 800,
      type: "lowpass",
    });
    const gain = new GainNode(context, {
      gain: volume ?? 0.2,
    });

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
