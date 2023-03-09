import type { TState } from "./types";

export const STATE: TState = {
  isInit: true,
  isCursorReady: false,
  selectId: null,
  mode:
    //"instant",
    "stagger",
  isThreshold: false,
  motionValuePairs: [],
};
