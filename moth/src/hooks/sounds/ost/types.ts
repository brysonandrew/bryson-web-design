export type TPhase = {
  sustain?: number;
  repeat?: number;
  sound: () => void;
};
export type THandlerConfig = {
  startTime: number;
  pitch?: number;
  duration?: number;
  volume?: number;
  type?: OscillatorType
};
