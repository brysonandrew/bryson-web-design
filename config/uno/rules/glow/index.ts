import { TTheme } from '../../theme';
// import { Rule } from 'unocss';

// export const GLOW_ACCENT_1 = resolveShadow('accent', 1);

// export const GLOW_ACCENT_4 = resolveShadow('accent', 4);

// export const GLOW_WHITE_1 = resolveShadow('white-9', 1);

// export const GLOW_BLACK = resolveShadow('black', 1);

// export const GLOW_SECONDARY_1 = resolveShadow('secondary', 2);

// export const GLOW_WHITE_2 = resolveShadow('white-9', 2);

// export const GLOW_SECONDARY_2 = resolveShadow('secondary', 4);

// export const GLOW_SECONDARY_4 = resolveShadow('secondary', 8);

// export const GLOW_SECONDARY_1_ACCENT_1 = `${GLOW_SECONDARY_1}, ${GLOW_ACCENT_1}`;

// export const GLOW_SECONDARY_2_ACCENT_4 = `${GLOW_SECONDARY_2}, ${GLOW_ACCENT_4}`;

// export const GLOW_CURSOR_LIGHT_4 = GLOW_SECONDARY_2;

// export const GLOW_HIGHLIGHT_4 = resolveShadow(
//   'highlight',
//   4,
// );

// export const GLOW_HIGHLIGHT_8 = resolveShadow(
//   'highlight',
//   8,
// );

// export const GLOW_HIGHLIGHT_12 = resolveShadow(
//   'highlight',
//   12,
// );

// export const RULE_MAP = {
//   'glow-black': GLOW_BLACK,
//   'glow-secondary': GLOW_SECONDARY_2,
//   'glow-white': GLOW_WHITE_2,
//   'glow-dark': GLOW_SECONDARY_2,
//   'glow-dark-lg': GLOW_SECONDARY_4,
//   'glow-accent': GLOW_ACCENT_4,
//   'glow-light': GLOW_SECONDARY_1_ACCENT_1,
//   'glow-light-lg': GLOW_SECONDARY_2_ACCENT_4,
//   'glow-cursor-light': GLOW_CURSOR_LIGHT_4,
// } as const;
// type TShadowRule = [string, { 'box-shadow': string }];
// type TEntry = [string, string];
// const entries = Object.entries(RULE_MAP) as TEntry[];
// export const RULES: Rule<TTheme>[] = entries.reduce(
//   (a: Rule<TTheme>[], [key, value]: TEntry) => {
//     const rule = [
//       key,
//       { 'box-shadow': value },
//     ] as TShadowRule;
//     a.push(rule);
//     return a;
//   },
//   [],
// );
