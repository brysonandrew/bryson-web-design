import { DEFAULT_STYLE } from '@brysonandrew/app/config/constants/style';
import * as DEFAULT_BACKS from '@brysonandrew/layout-back';
import * as DEFAULT_BLANKS from '@brysonandrew/layout-blank';
import * as DEFAULT_EFFECTS from '@brysonandrew/layout-effects';
import { GlowHoverGroup } from '@brysonandrew/glow';

import { FadeV } from '@brysonandrew/fade-edge/pairs/FadeV';

export const DEFAULT_LAYOUT = {
  ...DEFAULT_BACKS,
  ...DEFAULT_BLANKS,
  GlowHoverGroup,
  Brighten: DEFAULT_EFFECTS.Brighten,
  FadeV,
} as const;

export const DEFAULT_SOUNDS = {
  sounds: {},
};

const DEFAULT_CONFIG = {
  ...DEFAULT_STYLE,
  ...DEFAULT_LAYOUT,
};

export {
  DEFAULT_BACKS,
  DEFAULT_BLANKS,
  DEFAULT_EFFECTS,
  DEFAULT_CONFIG,
  DEFAULT_STYLE,
  GlowHoverGroup,
};
