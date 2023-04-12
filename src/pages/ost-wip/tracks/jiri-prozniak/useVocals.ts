import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "./types";
import { useBufferFromSrcHandler } from "../useBufferFromSrcHandler";

export const useVocals = () => {
  const { context, master } = useMothContext();
  const handleSample = useBufferFromSrcHandler(context);

  const play = async ({ startTime, volume }: THandlerConfig) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 400,
      type: "allpass",
    });
    const gain = new GainNode(context, { gain:volume ?? 1 });

    const sampleBuffer: AudioBuffer = await handleSample(
      "/sounds/vocals/superman.mp4",
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
