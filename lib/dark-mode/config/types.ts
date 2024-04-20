import { TMotionProps } from '@brysonandrew/motion/core/config';
import { TElementProps } from '@brysonandrew/config-types';
import { MODES } from './constants';

export type TDarkKey = (typeof MODES)[number];
export type TUseDarkMode = {
  isDarkMode: boolean;
  darkKey: TDarkKey;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
};

export type TWithDark<P extends TElementProps> = P & {
  dark?: P;
};

export type TWithDarkMotion<P extends TMotionProps> = P & {
  dark?: P;
};
