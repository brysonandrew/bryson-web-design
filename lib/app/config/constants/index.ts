import { DEFAULT_STYLE } from '@brysonandrew/app/config/constants/style';
import * as DEFAULT_BACK from '@brysonandrew/layout-back';
import * as DEFAULT_BLANK from '@brysonandrew/layout-blank';
import * as DEFAULT_EFFECTS from '@brysonandrew/layout-effects';
import { FadeV } from '@brysonandrew/fade-edge/pairs/FadeV';

const DEFAULT_LAYOUT = {
  ...DEFAULT_BACK,
  ...DEFAULT_BLANK,
  Brighten: DEFAULT_EFFECTS.Brighten,
  FadeV,
} as const;

const DEFAULT_CONFIG = {
  ...DEFAULT_STYLE,
  ...DEFAULT_LAYOUT,
};

export {
  DEFAULT_BACK,
  DEFAULT_BLANK,
  DEFAULT_EFFECTS,
  DEFAULT_CONFIG,
  DEFAULT_STYLE,
};
