
import { defineConfig, presetWebFonts, presetUno, presetAttributify } from 'unocss';
import { SPACING } from './uno.config-spacing';


const config = defineConfig({
  theme: {
    breakpoints: {
      sm: '480px',
      md: '768px',
      lg: '1100px',
      xl: '1440px',
    },
    width: {
      '+core': '480px',
      '++core': '768px',
      '+++core': '900px',
      '++++core': '1100px',
    },
    colors: {
      "teal": "var(--teal)",
      "teal-01": "var(--teal-01)",
      "teal-02": "var(--teal-02)",
      "teal-04": "var(--teal-04)",

      "teal-bright": "rgb(207, 250, 254)",
      "teal-bright-04": "rgba(207, 250, 254, 0.4)",
      "teal-bright-01": "rgba(207, 250, 254, 0.1)",

      "baby-blue": "rgb(153, 204, 255)",
      "baby-blue-01": "rgba(153, 204, 255, 0.1)",

      "black": "rgb(0, 0, 0)",
      "black-04": "rgba(0, 0, 0, 0.4)",
      "black-1": "#111",
      "black-2": "#161616",

      "gray": "var(--gray)",
      "gray-1": "var(--gray-light)",
      "gray-2": "#ddd",

      "white": "var(--white)",
      "white-01": "rgba(255,255,255,0.1)",
      "white-02": "rgba(255,255,255,0.2)",

      "current": "currentColor",
      "transparent": "rgba(0,0,0,0)"
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
  ],
  shortcuts: {
    "w-core": "w-full sm:w-+core md:w-++core lg:w-+++core",
    "row": "flex items-center",
    "row-space": "row justify-between",
    'input-label': 'relative flex flex-col items-start w-full p-2 bg-black-04 md:flex-row',
    'input-textarea': 'relative text-baby-blue text-2xl px-4 py-2 w-full tracking-widest bg-black-04',
    "input-text": 'input-textarea px-4'
  },
  presets: [
    presetAttributify(),
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
