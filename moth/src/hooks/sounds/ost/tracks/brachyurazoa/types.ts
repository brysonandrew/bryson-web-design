import type { TPhase } from "../../types";

export type THandlerConfig = {
  startTime: number;
  pitch?: number;
  duration?: number;
  volume?: number;
  type?: OscillatorType;
};

export type TLoopConfig = {
  interval: number;
  phases: TPhase[];
};
