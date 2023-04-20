export type TPlayerConfig = {
  start: number;
  duration: number;
};
export type TPlayer = (
  config: TPlayerConfig,
) => void;
export type TPlayers = TPlayer[];
export type TPhaseOptions = {
  sustain?: number;
  repeat?: number;
};
export type TPhase = TPhaseOptions &
  Partial<TPlayerConfig> & {
    sounds?: TPlayers[];
  };
export type THandlerConfig = {
  startTime: number;
  pitch?: number;
  duration?: number;
  volume?: number;
  type?: OscillatorType;
};
