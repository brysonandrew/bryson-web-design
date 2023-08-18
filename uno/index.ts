import { defineConfig } from 'unocss';
import { THEME } from './theme';
import { RULES } from './rules';
import { PRE_FLIGHT } from './preflights';
import { SHORTCUTS } from './shortcuts';
import { PRESETS } from './presets';
import type { TTheme } from './theme';
console.log(RULES);

const config = defineConfig<TTheme>({
  theme: THEME,
  rules: RULES,
  shortcuts: SHORTCUTS,
  presets: PRESETS,
  preflights: [PRE_FLIGHT],
});

export default config;
