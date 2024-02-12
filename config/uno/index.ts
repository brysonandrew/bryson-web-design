import { defineConfig } from 'unocss';
import { resolvePreflights } from './preflights';
import { SHORTCUTS } from './shortcuts';
import { TRANSFORMERS } from './transformers';
import { resolvePresets } from './presets';
import { resolveTheme } from '@brysonandrew/uno-theme';
import { SPACING } from '@brysonandrew/uno-spacing';
import { resolveRules } from './rules';
import { COLOR_VARS_RECORD } from '../app/color/index';

export const theme = resolveTheme({
  colors: COLOR_VARS_RECORD,
  spacing: SPACING,
  maxWidth: {
    shell: '1480px',
  },
});

type TTheme = typeof theme;

const rules = resolveRules<TTheme>();

export type TColor = typeof COLOR_VARS_RECORD;

const shortcuts = SHORTCUTS;

const presets = resolvePresets<TTheme>();

const preflights = resolvePreflights<TTheme>(
  COLOR_VARS_RECORD,
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
