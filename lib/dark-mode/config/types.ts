import { TMotionProps } from '@brysonandrew/animation';
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

export type TWithDark<C extends TElementProps | TMotionProps> = C & {
  dark?: C;
};
