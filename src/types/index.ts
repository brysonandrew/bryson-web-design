type TBaseChildren = JSX.Element | null
export type TChildrenElement = TBaseChildren | TBaseChildren[];
export type TChildren = string | TChildrenElement | null;
export type TError = any | unknown;
export type TEmptyRecord = Record<string, unknown>;
export type TAnyRecord = Record<string, any>;

export type TAdsr = {
  attack?: number;
  release?: number;
};

export type TBaseConfig = TAdsr & {
  time: number;
  midi: number;
  duration: number;
  wave: string;
};

export type TEndConfig<T> = {
  ref: T;
  e: number;
  count: number;
  prev?: TAnyRecord;
};

export type TTrackRefValue =
  | OscillatorNode
  | DelayNode
  | AudioNode
  | AudioWorkletNode
  | BiquadFilterNode ;

export type TTrackRef = Record<string, TTrackRefValue>;

export type TNoop<T> = () => T;
