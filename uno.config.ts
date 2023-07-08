import { defineConfig, presetWind, presetWebFonts, presetUno, presetAttributify } from 'unocss';
import inspector from "@unocss/inspector";

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
      'core-xs': '375px',
      'core-sm': '480px',
      'core-md': '768px',
      'core-lg': '900px',
      'core-xl': '1100px',
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

      "black-dark": "#000",
      "black-dark-04": "rgba(0,0,0,0.4)",
      "black": "#111",
      "black-light": "#161616",

      "gray": "var(--gray)",
      "gray-light": "var(--gray-light)",

      "white-dark": "#ddd",
      "white": "var(--white)",
      "white-01": "rgba(255,255,255,0.1)",
      "white-02": "rgba(255,255,255,0.2)",

      "current": "currentColor",
      "transparent": "rgba(0,0,0,0)"
    },
    spacing: SPACING,
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '3.5xl': '2.0675rem',
      '4xl': '2.25rem',
      '7xl': '5rem',
    },
    backgroundColor: {
      current: 'currentColor',
    },
  },
  rules: [
    ["glow-interactive", { "box-shadow": "0 0 1px 1px var(--teal-02), 0 0 1px 2px var(--teal-01)" }],
    ["glow-disabled", { "box-shadow": "0 0 1px 1px var(--gray)" }],
    ['placeholder', { transform: 'var(--placeholder)' }],
    ['placeholder-sm', { transform: 'var(--placeholder-sm)' }],
    ['placeholder-md', { transform: 'var(--placeholder-md)' }],
  ],
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
