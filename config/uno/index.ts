import { defineConfig } from 'unocss';
import { THEME } from './theme';
import { RULES } from './rules';
import { PRE_FLIGHTS } from './preflights';
import { SHORTCUTS } from './shortcuts';
import { PRESETS } from './presets';
import type { TTheme } from './theme';
import { TRANSFORMERS } from './transformers';

const config = defineConfig<TTheme>({
  theme: THEME,
  rules: RULES,
  shortcuts: SHORTCUTS,
  presets: PRESETS,
  preflights: PRE_FLIGHTS,
  transformers: TRANSFORMERS,
});

export default config;
