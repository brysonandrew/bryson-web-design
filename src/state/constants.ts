import type { TState } from "./types";

export const STATE: TState = {
  isInit: true,
  isCursorReady: false,
  isSound: true,
  context: new AudioContext(),
  selectId: null,
  mode:
    //"instant",
    "stagger",
  isThreshold: false,
  motionValuePairs: [],
};
