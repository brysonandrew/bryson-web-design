
import { defineConfig, presetWebFonts, presetUno } from 'unocss';
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
      "teal": "var(--teal)",
      "teal-01": "var(--teal-01)",
      "teal-02": "var(--teal-02)",
      "teal-04": "var(--teal-04)",

      "teal-bright": "var(--teal-bright)",
      "teal-bright-04": "var(--teal-bright-04)",
      "teal-bright-01": "var(--teal-bright-01)",

      "baby-blue": "var(--baby-blue)",
      "baby-blue-01": "var(--baby-blue-01)",
      "baby-blue-09": "var(--baby-blue-09)",

      "black": "var(--black)",
      "black-04": "var(--black-04)",
      "black-1": "var(--black-1)",
      "black-2": "var(--black-2)",
      "black-3": "var(--black-3)",

      "gray": "var(--gray)",
      "gray-1": "var(--gray-1)",
      "gray-2": "var(--gray-2)",

      "white": "var(--white)",
      "white-01": "var(white-01)",
      "white-02": "var(white-02)",

      "current": "var(--current)",
      "transparent": "var(--transparent)"
    },
    spacing: SPACING,
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
  },
  rules: [
    ["glow-interactive", { "box-shadow": "0 0 1px 1px var(--teal-02), 0 0 1px 2px var(--teal-01)" }],
    ["glow-disabled", { "box-shadow": "0 0 1px 1px var(--gray)" }],
    ['placeholder', { transform: 'scale(8)' }],
    ['+placeholder', { transform: 'scale(16)' }],
    ['++placeholder', { transform: 'scale(28)' }],
    ['text-baby-blue-stroke', { '-webkit-text-stroke': '1px var(--baby-blue)' }],
    ['text-baby-blue-stroke-09', { '-webkit-text-stroke': '1px var(--baby-blue)' }],
    ['text-gray-stroke', { '-webkit-text-stroke': '1px var(--gray)' }],
  ],
  shortcuts: {
    "w-core": "w-full sm:w-+core md:w-++core lg:w-+++core xl:w-++++core",
    "row": "flex items-center",
    "row-space": "row justify-between",
    "column": "flex flex-col items-center",
    "column-space": "column justify-between",
    "center": "flex items-center justify-center",
    'input-label': 'relative flex flex-col items-start w-full p-2 bg-black-04 md:flex-row',
    'input-textarea': 'relative text-baby-blue text-2xl px-4 py-2 w-full tracking-widest bg-black-04',
    "input-text": 'input-textarea px-4',
    "+++text": 'text-teal-bright text-left text-3xl tracking-wide px-1 lg:text-4xl',
    "++text": 'relative uppercase text-teal-bright px-2 tracking-widest text-baby-blue-stroke text-3xl md:text-4xl xl:px-4',
    "+text": "text-left text-teal-bright text-xl md:text-2xl",
    "cover-fixed": 'fixed inset-0',
    "cover": 'absolute inset-0',
  },
  presets: [
    presetUno(),
    presetWebFonts({
      fonts: {
        sans: 'Bodoni Moda',
        mono: 'Nova Mono',
      },
    })
  ],
});

export default config;
