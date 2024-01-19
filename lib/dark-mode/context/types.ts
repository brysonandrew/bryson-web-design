import { MODES } from "./constants";

export type TDarkKey = (typeof MODES)[number];
export type TUseDarkMode = {
  isDarkMode: boolean;
  darkKey: TDarkKey;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
};