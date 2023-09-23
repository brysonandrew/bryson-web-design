export type TConfig = {
  analyzer: AnalyserNode;
  values: any;
  values2: any;
  bufferLength: number;
};

export const BYTE_METHODS = ["getByteFrequencyData", "getByteTimeDomainData"] as const;
export type TByteMethods = typeof BYTE_METHODS;
export type TByteMethod = typeof BYTE_METHODS[number];

export const FLOAT_METHODS = ["getFloatFrequencyData", "getFloatTimeDomainData"] as const;
export type TFloatMethods = typeof FLOAT_METHODS;
export type TFloatMethod = typeof FLOAT_METHODS[number];

export type TConfigInit = {
  bufferLength: number;
  canvasContext: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
};

export type TConfigLoop = {
  method: TByteMethod;
  values: Uint8Array;
  bufferLength: number;
  canvasContext: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  metadata: any;
};

export type TReturn = {
  init: (config: TConfigInit) => any;
  loop: (config: TConfigLoop) => void;
};

export const DEFAULTS = {
  focus: 5.1,
  speed: 20,
  aperture: 1.8,
  fov: 60,
  curl: 0.25,
  size: 512,
};

export const LEVA_DEFAULTS = {
  focus: { value: DEFAULTS.focus, min: 3, max: 7, step: 0.01 },
  speed: { value: DEFAULTS.speed, min: 0.1, max: 10, step: 0.01 },
  aperture: { value: DEFAULTS.aperture, min: 1, max: 5.6, step: 0.1 },
  fov: { value: DEFAULTS.fov, min: 0, max: 200 },
  curl: { value: DEFAULTS.curl, min: 0.01, max: 0.5, step: 0.01 },
  size: DEFAULTS.size,
};
