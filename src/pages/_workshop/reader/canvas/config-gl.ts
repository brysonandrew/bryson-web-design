import type { TByteMethod } from './config';

export type TConfig = {
  analyzer: AnalyserNode;
  values: // Float32Array;
  Uint8Array;
  bufferLength: number;
};

export type TConfigInit = {
  context: AudioContext;
  bufferLength: number;
  gl: WebGLRenderingContext;
  canvas: HTMLCanvasElement;
};

export type TConfigLoop = {
  context: AudioContext;
  method: //TFloatMethod;
  TByteMethod;
  values: // Float32Array;
  Uint8Array;
  bufferLength: number;
  gl: WebGLRenderingContext;
  canvas: HTMLCanvasElement;
  metadata?: any;
};

export type TReturn = {
  init: (config: TConfigInit) => any;
  loop: (config: TConfigLoop) => void;
};
