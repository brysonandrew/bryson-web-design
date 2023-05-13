import type { TMultiOptions } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "../types";
import { useEffect } from "react";

export const useGuitar = () => {
  const { context, master } = useMothContext();

  const initWorklets = async () => {
    try {
      await context.audioWorklet.addModule(
        "worklets/karplus-strong",
      );
      await context.audioWorklet.addModule(
        "worklets/noise-white",
      );
      console.log("ALL WORKLETS INIT");
    } catch (error) {
      console.log(error);
    }
  };

  const handler = async (config: THandlerConfig) => {
    const {
      startTime,
      duration = 1,
      pitch = 0,
      volume = 0.01,
    } = config;

    await initWorklets();

    const whiteNoise = new AudioWorkletNode(
      context,
      "noise-white",
    );

    const karplusStrong = new AudioWorkletNode(
      context,
      "karplus-strong",
    );

    const gain = new GainNode(context, { gain: volume });

    const end = startTime + duration * 2;

    gain.gain.setValueAtTime(volume, startTime);
    gain.gain.exponentialRampToValueAtTime(
      volume * 0.5,
      end,
    );

    whiteNoise.connect(karplusStrong);

    karplusStrong.connect(gain);

    gain.connect(master);
  };

  return { play: handler, stop };
};
