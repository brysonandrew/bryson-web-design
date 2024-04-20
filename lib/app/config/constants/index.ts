import { DEFAULT_STYLE } from '@brysonandrew/app/config/constants/style';
import * as DEFAULT_BACKS from '@brysonandrew/layout-back';
import * as DEFAULT_BLANKS from '@brysonandrew/layout-blank';
import * as DEFAULT_EFFECTS from '@brysonandrew/layout-effects';
import { FadeV } from '@brysonandrew/fade/edge/pairs/FadeV';

const DEFAULT_LAYOUT = {
  ...DEFAULT_BACKS,
  ...DEFAULT_BLANKS,
  FadeV,
} as const;

const DEFAULT_SOUNDS = {
  sounds: {},
};

const DEFAULT_CONFIG = {
  ...DEFAULT_STYLE,
  ...DEFAULT_LAYOUT,
  ...DEFAULT_EFFECTS,
};

export {
  DEFAULT_LAYOUT,
  DEFAULT_SOUNDS,
  DEFAULT_CONFIG,
  DEFAULT_BACKS,
  DEFAULT_BLANKS,
  DEFAULT_EFFECTS,
  DEFAULT_STYLE,
};
