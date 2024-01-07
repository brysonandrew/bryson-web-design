import { TTheme } from '@uno/theme';
import { Rule } from 'unocss';
import { COLORS } from '../theme/colors';

const resolveShadow = (
  colorKey: keyof typeof COLORS,
  blur: number,
) => `0 0 ${blur}px ${COLORS[colorKey]}`;

export const GLOW_TEAL_2 = resolveShadow('teal', 2);
export const GLOW_TEAL_4 = resolveShadow('teal', 4);

export const GLOW_BABY_BLUE_1 = resolveShadow(
  'baby-blue',
  1,
);

export const GLOW_BABY_BLUE_4 = resolveShadow(
  'baby-blue',
  4,
);

export const GLOW_WHITE_1 = resolveShadow('white-9', 1);

export const GLOW_BLACK_1 = resolveShadow('black', 1);

export const GLOW_WHITE_2 = resolveShadow('white-9', 2);

export const GLOW_BLACK_2 = resolveShadow('black', 2);

export const GLOW_BLACK_4 = resolveShadow('black', 4);

export const GLOW_BLACK_1_BABY_BLUE_1 = `${GLOW_BLACK_1}, ${GLOW_BABY_BLUE_1}`;

export const GLOW_BLACK_2_BABY_BLUE_4 = `${GLOW_BLACK_2}, ${GLOW_BABY_BLUE_4}`;

export const GLOW_CURSOR_LIGHT_4 = resolveShadow('gray', 4);

export const GLOW_TEAL_BRIGHT_4 = resolveShadow(
  'teal-bright',
  4,
);

export const GLOW_TEAL_BRIGHT_12 = resolveShadow(
  'teal-bright',
  12,
);

export const RULE_MAP = {
  'glow-black': GLOW_BLACK_2,
  'glow-white': GLOW_WHITE_2,
  'glow-interactive-dark': GLOW_TEAL_2,
  'glow-interactive-dark-lg': GLOW_TEAL_4,
  'glow-baby-blue': GLOW_BABY_BLUE_4,
  'glow-interactive-light': GLOW_BLACK_1_BABY_BLUE_1,
  'glow-interactive-light-lg': GLOW_BLACK_2_BABY_BLUE_4,
  'glow-cursor-light': GLOW_CURSOR_LIGHT_4,
} as const;
type TShadowRule = [string, { 'box-shadow': string }];
type TEntry = [string, string];
const entries = Object.entries(RULE_MAP) as TEntry[];
export const RULES: Rule<TTheme>[] = entries.reduce(
  (a: Rule<TTheme>[], [key, value]: TEntry) => {
    const rule = [
      key,
      { 'box-shadow': value },
    ] as TShadowRule;
    a.push(rule);
    return a;
  },
  [],
);
