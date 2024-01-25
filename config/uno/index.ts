import { defineConfig } from 'unocss';
import { resolveRules } from './rules';
import { resolvePreflights } from './preflights';
import { SHORTCUTS } from './shortcuts';
import { TRANSFORMERS } from './transformers';
import { COLOR_CSS_VARS_RECORD } from '../app/colors/constants';
import { resolvePresets } from './presets';
import { resolveTheme } from '@brysonandrew/uno-theme';
import { SPACING } from '@brysonandrew/uno-spacing';
import { CUSTOM_SHORTCUTS } from '../app/shortcuts';

export const theme = resolveTheme({
  colors: COLOR_CSS_VARS_RECORD,
  spacing: SPACING,
});

type TTheme = typeof theme;

const rules = resolveRules<TTheme>();

export type TColor = typeof COLOR_CSS_VARS_RECORD;

const shortcuts = {
  ...SHORTCUTS,
  ...CUSTOM_SHORTCUTS,
} as const;

const presets = resolvePresets<TTheme>();

const preflights = resolvePreflights<TTheme>(
  COLOR_CSS_VARS_RECORD,
);

const transformers = TRANSFORMERS;

const config = defineConfig<TTheme>({
  theme,
  rules,
  shortcuts,
  presets,
  preflights,
  transformers,
  layers: {
    reset: -1,
  },
});

export default config;
