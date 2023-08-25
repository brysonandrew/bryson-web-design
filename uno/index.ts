import { defineConfig } from 'unocss';
import { THEME } from './theme';
import { RULES } from './rules';
import { PRE_FLIGHT } from './preflights';
import { SHORTCUTS } from './shortcuts';
import { PRESETS } from './presets';
import type { TTheme } from './theme';
import transformerVariantGroup from '@unocss/transformer-variant-group';

const config = defineConfig<TTheme>({
  theme: THEME,
  rules: RULES,

  shortcuts: [
    SHORTCUTS,
    // [
    //   /^s-(.*)$/,
    //   ([, c]) =>
    //     `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`,
    // ],
    // [
    //   /^s-(\d)$/,
    //   (...args: any[]) => {
    //     console.log(args);
    //     const [, d] = args[0];
    //     return `w-${d} h-${d}`;
    //   },
    // ],
  ],
  presets: PRESETS,
  preflights: [PRE_FLIGHT],
  transformers: [transformerVariantGroup()],
});

export default config;
