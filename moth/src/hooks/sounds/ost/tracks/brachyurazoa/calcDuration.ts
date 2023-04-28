import type { TLoopConfig } from "./types";

export const calcDuration = (config: TLoopConfig) => {
  let time = 0;
  const { interval, phases } = config;

  for (const phase of phases) {
    time +=
      (phase.repeat ?? 1) * (phase.sustain ?? 1) * interval;
  }

  return time;
};
