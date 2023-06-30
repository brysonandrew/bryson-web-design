import { HOVER_GLOW_PROPS } from "../constants";

const INTERACTIVE_CLASS = "flex relative px-4 py-2 w-full cursor-pointer";

export const INTERACTIVE_PROPS = {
  className: INTERACTIVE_CLASS,
  ...HOVER_GLOW_PROPS
};