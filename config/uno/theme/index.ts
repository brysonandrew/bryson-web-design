export const resolveRemFromPx = (px: number, base = 16) => `${px / base}rem`;
import { COLOR_VARS_RECORD } from '../../app/colors/constants';
import { SPACING } from './spacing';

export const THEME = {
  sm: '480px',
  md: '700px',
  lg: '900px',
  xl: '1100px',
  xxl: '1200px',
  breakpoints: {
    sm: '480px',
    md: '700px',
    lg: '900px',
    xl: '1100px',
    xxl: '1200px',
  },
  width: {
    '+core': '480px',
    '++core': '700px',
    '+++core': '900px',
    '++++core': '1100px',
    '+++++core': '1200px',
  },
  colors: COLOR_VARS_RECORD,
  spacing: SPACING,
  // fontSize: {
  //   xxs: ['0.625rem', '0.75rem'],
  //   xs: ['0.75rem', '1rem'],
  //   sm: ['0.875rem', '1.25rem'],
  //   base: ['1rem', '1.5rem'],
  //   lg: ['1.125rem', '1.75rem'],
  //   xl: ['1.25rem', '1.75rem'],
  //   '2xl': ['1.5rem', '2rem'],
  //   '3xl': ['1.875rem', '2.25rem'],
  //   '4xl': ['2.25rem', '2.5rem'],
  //   '5xl': ['3rem', '1'],
  //   '6xl': ['3.75rem', '1'],
  //   '7xl': ['4.5rem', '1'],
  //   '8xl': ['6rem', '1'],
  //   '9xl': ['8rem', '1'],
  // },
  fontSize: {
    xs: resolveRemFromPx(12),
    sm: resolveRemFromPx(14),
    base: resolveRemFromPx(16),
    lg: resolveRemFromPx(18),
    xl: resolveRemFromPx(20),
    '1.5xl': resolveRemFromPx(22),
    '2xl': resolveRemFromPx(24),
    '2.5xl': resolveRemFromPx(27),
    '3xl': resolveRemFromPx(30),
    '3.5xl': resolveRemFromPx(33),
    '4xl': resolveRemFromPx(36),
    '4.5xl': resolveRemFromPx(42),
    '5xl': resolveRemFromPx(48),
    '5.5xl': resolveRemFromPx(54),
    '6xl': resolveRemFromPx(60),
    '6.5xl': resolveRemFromPx(66),
  },
} as const;

export type TTheme = typeof THEME;
export type TPartialTheme = Partial<TTheme>;
