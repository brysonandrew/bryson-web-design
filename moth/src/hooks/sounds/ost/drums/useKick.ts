import { useMothContext } from "@moth-state/Context";
import { useBufferFromSrcHandler } from "@moth-hooks/useBufferFromSrcHandler";
import type { THandlerConfig } from "./types";
import { useGain } from "../useGain";

export const useKick = () => {
  const { context, master } = useMothContext();
  const handleSample = useBufferFromSrcHandler(context);
  const gain = useGain()
  const play = async ({
    startTime,
    volume,
  }: THandlerConfig) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 400,
      type: "lowpass",
    });

    gain.gain.value = volume ?? 0.1;

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

  return { gain, play };
};
