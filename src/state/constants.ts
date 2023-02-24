import type { TState } from "./types";

export const STATE: TState = {
  isCursorReady: false,
  selectId: null,
  mode:
    //"instant",
    "stagger",
  isThreshold: false,
  motionValuePairs: [],
};
