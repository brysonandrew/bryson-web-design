import { TTheme } from '../../theme';
import { Rule } from 'unocss';
import { resolveShadow } from './resolveShadow';

export const GLOW_BABY_BLUE_1 = resolveShadow('accent', 1);

export const GLOW_BABY_BLUE_4 = resolveShadow('accent', 4);

export const GLOW_WHITE_1 = resolveShadow('white-9', 1);

export const GLOW_BLACK = resolveShadow('black', 1);

export const GLOW_TEAL_1 = resolveShadow('secondary', 2);

export const GLOW_WHITE_2 = resolveShadow('white-9', 2);

export const GLOW_TEAL_2 = resolveShadow('secondary', 4);

export const GLOW_TEAL_4 = resolveShadow('secondary', 8);

export const GLOW_TEAL_1_BABY_BLUE_1 = `${GLOW_TEAL_1}, ${GLOW_BABY_BLUE_1}`;

export const GLOW_TEAL_2_BABY_BLUE_4 = `${GLOW_TEAL_2}, ${GLOW_BABY_BLUE_4}`;

export const GLOW_CURSOR_LIGHT_4 = GLOW_TEAL_2;

export const GLOW_TEAL_BRIGHT_4 = resolveShadow(
  'highlight',
  4,
);

export const GLOW_TEAL_BRIGHT_12 = resolveShadow(
  'highlight',
  12,
);

export const RULE_MAP = {
  'glow-black': GLOW_BLACK,
  'glow-secondary': GLOW_TEAL_2,
  'glow-white': GLOW_WHITE_2,
  'glow-dark': GLOW_TEAL_2,
  'glow-dark-lg': GLOW_TEAL_4,
  'glow-accent': GLOW_BABY_BLUE_4,
  'glow-light': GLOW_TEAL_1_BABY_BLUE_1,
  'glow-light-lg': GLOW_TEAL_2_BABY_BLUE_4,
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
