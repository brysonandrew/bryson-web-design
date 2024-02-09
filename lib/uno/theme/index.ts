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
    sm: '480px',
    md: '700px',
    lg: '900px',
    xl: '1100px',
    xxl: '1200px',
  },
  fontSize: {
    xxs: ['0.625rem', '1rem'],
    xs: ['0.75rem', '1.25rem'],
    sm: ['0.875rem', '1.5rem'],
    base: ['1rem', '1.75rem'],
    lg: ['1.125rem', '2rem'],
    xl: ['1.25rem', '2.25rem'],
    '2xl': ['1.5rem', '2.5rem'],
    '2.5xl': ['1.675rem', '2.75rem'],
    '3xl': ['1.875rem', '3rem'],
    '3.5xl': ['2rem', '3.25rem'],
    '4xl': ['2.25rem', '3.5rem'],
    '4.5xl': ['2.5rem', '3.75rem'],
    '5xl': ['3rem', '4rem'],
    '5.5xl': ['3.5rem', '4.5rem'],
    '6xl': ['4rem', '5rem'],
    '7xl': ['4.5rem', '5.5rem'],
    '8xl': ['6rem', '7.5rem'],
    '9xl': ['8rem', '10rem'],
  },
  ...partial,
});







































































