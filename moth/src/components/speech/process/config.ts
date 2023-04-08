import type { TParamsProps } from "./params";

export type TParam = {
  value: number;
  min: number;
  max: number;
  step: number;
};
export type TParamRecord = Record<string, TParam>;
export type TBaseProcessorOptions = {
  gain: number;
};
export type TProcessor = TBaseProcessorOptions & {
  name: string;
  paramRecord: TParamRecord;
};
export type TProcessors = TProcessor[];

export type TNode = TProcessor & {
  node: AudioWorkletNode;
  gainNode: GainNode;
};
export type TNodeRecord = Record<string, TParamsProps>;

export type TProcessorsConfig = {
  arrayBuffer: ArrayBuffer
  processors: TProcessors;
};
export const PROCESSORS: TProcessor[] = [
  {
    name: "ring-mod",
    gain: 1,
    paramRecord: {
      gain: {
        value: 1,
        min: 0,
        max: 2,
        step: 0.01,
      },
      rate: {
        value: 0.5,
        min: -10,
        max: 10,
        step: 0.01,
      },
      blend: {
        value: 0.5,
        min: -10,
        max: 10,
        step: 0.01,
      },
      modulator: {
        value: 0,
        min: 0,
        max: 10,
        step: 1,
      },
    },
  },
  {
    name: "bitcrusher",
    gain: 1,
    paramRecord: {
      bits: {
        value: 16,
        min: 0,
        max: 128,
        step: 1,
      },
      frequency: {
        value: 0.5,
        min: 0,
        max: 2,
        step: 0.01,
      },
    },
  },
  {
    name: "phaze-vocoder",
    gain: 1,
    paramRecord: {
      pitchFactor: {
        value: 0.5,
        min: 0,
        max: 8,
        step: 0.001,
      },
    },
  },
];
