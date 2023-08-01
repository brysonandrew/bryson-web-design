import {
  defineConfig,
  presetWebFonts,
  presetUno,
} from 'unocss';
import { SPACING } from './uno.config-spacing';

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: '480px',
      md: '768px',
      lg: '900px',
      xl: '1100px',
    },
    width: {
      '+core': '480px',
      '++core': '700px',
      '+++core': '840px',
      '++++core': '1000px',
    },
    colors: {
      teal: 'var(--teal)',
      'teal-01': 'var(--teal-01)',
      'teal-02': 'var(--teal-02)',
      'teal-04': 'var(--teal-04)',

      'teal-bright': 'var(--teal-bright)',
      'teal-bright-04': 'var(--teal-bright-04)',
      'teal-bright-01': 'var(--teal-bright-01)',

      'baby-blue': 'var(--baby-blue)',
      'baby-blue-01': 'var(--baby-blue-01)',
      'baby-blue-09': 'var(--baby-blue-09)',

      black: 'var(--black)',
      'black-04': 'var(--black-04)',
      'black-1': 'var(--black-1)',
      'black-2': 'var(--black-2)',
      'black-3': 'var(--black-3)',

      gray: 'var(--gray)',
      'gray-1': 'var(--gray-1)',
      'gray-2': 'var(--gray-2)',
      'gray-3': 'var(--gray-3)',

      white: 'var(--white)',
      'white-01': 'var(--white-01)',
      'white-02': 'var(--white-02)',
      'white-04': 'var(--white-04)',
      'white-1': 'var(--white-1)',
      'white-2': 'var(--white-2)',

      current: 'var(--current)',
      transparent: 'var(--transparent)',
    },
    spacing: SPACING,
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1'],
      '7xl': ['4.5rem', '1'],
      '8xl': ['6rem', '1'],
      '9xl': ['8rem', '1'],
    },
  },
  rules: [
    [
      'glow-interactive-dark',
      {
        'box-shadow':
          '0 0 1px 1px var(--teal-02), 0 0 1px 2px var(--teal-01)',
      },
    ],
    [
      'glow-interactive-light',
      {
        'box-shadow':
          '0 0 1px 1px var(--gray-2), 0 0 1px 2px var(--white)',
      },
    ],
    [
      'glow-disabled',
      { 'box-shadow': '0 0 1px 1px var(--gray)' },
    ],
    ['placeholder-scale-4', { transform: 'scale(4)' }],
    ['placeholder', { transform: 'scale(8)' }],
    ['+placeholder', { transform: 'scale(16)' }],
    ['++placeholder', { transform: 'scale(28)' }],
    [
      'text-baby-blue-stroke',
      { '-webkit-text-stroke': '1px var(--baby-blue)' },
    ],
    [
      'text-gray-stroke',
      { '-webkit-text-stroke': '0.5px var(--gray)' },
    ],
  ],
  shortcuts: {
    'background-color': 'dark:bg-teal-bright bg-white',
    'background-color-1': 'dark:bg-teal bg-gray-1',
    'background-color-2': 'dark:bg-black-1 bg-white',
    'background-color-3': 'dark:bg-baby-blue bg-white',
    'text-color': 'dark:text-teal-bright text-gray-1',
    'text-color-1': 'dark:text-baby-blue text-gray',
    'text-color-stroke':
      'dark:text-baby-blue-stroke text-gray-stroke',
    'glow-interactive':
      'dark:glow-interactive-dark glow-interactive-light',
    'w-core':
      'w-full sm:w-+core md:w-++core lg:w-+++core xl:w-++++core',
    row: 'flex flex-row items-center',
    'row-start': 'flex flex-row items-start',
    'row-space': 'row justify-between',
    'row-start-space': 'row-start justify-between',
    column: 'flex flex-col items-center',
    'column-end': 'flex flex-col items-end',
    'column-space': 'column justify-between',
    center: 'flex items-center justify-center',
    'label-background': 'dark:bg-black-04 bg-white',
    'input-background': 'dark:bg-black-04 bg-white-1',
    'input-label':
      'relative flex flex-col items-start w-full p-2 label-background md:flex-row',
    'input-textarea':
      'relative text-color-1 text-2xl px-4 py-2 w-full tracking-widest input-background',
    'input-text': 'input-textarea px-4',
    '+++text':
      'text-color text-left text-3xl tracking-wide px-1 lg:text-4xl',
    '++text':
      'text-color text-color-stroke relative uppercase px-2 tracking-widest text-3xl md:text-4xl xl:px-4',
    '+text': 'text-color text-left text-xl md:text-2xl',
    'cover-fixed': 'fixed inset-0',
    cover: 'absolute inset-0',
  },
  presets: [
    presetUno({ dark: 'class' }),
    presetWebFonts({
      fonts: {
        sans: 'Bodoni Moda',
        mono: 'Nova Mono',
      },
    }),
  ],
});

export default config;
