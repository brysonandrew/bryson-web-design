import { Theme } from '@emotion/react';

export const resolveTheme = <T extends Theme>(
  partial: Partial<T>,
) => ({
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
  fontSize: {
    xxs: ['0.625rem', '0.75rem'],
    xs: ['0.75rem', '1rem'],
    sm: ['0.875rem', '1.25rem'],
    base: ['1rem', '1.5rem'],
    lg: ['1.125rem', '1.75rem'],
    xl: ['1.25rem', '1.75rem'],
    '2xl': ['1.5rem', '2rem'],
    '3xl': ['1.875rem', '2.25rem'],
    '4xl': ['2.25rem', '2.5rem'],
    '5xl': ['3rem', '1'],
    '5.5xl': ['3.5rem', '1'],
    '6xl': ['4rem', '1'],
    '7xl': ['4.5rem', '1'],
    '8xl': ['6rem', '1'],
    '9xl': ['8rem', '1'],
  },
  ...partial,
});



























