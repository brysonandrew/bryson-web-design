import {
  defineConfig,
  presetWebFonts,
  presetUno,
} from 'unocss';
import { THEME } from './uno.config-theme';
import {
  GLOW_INTERACTIVE_DARK,
  GLOW_INTERACTIVE_DISABLED,
  GLOW_INTERACTIVE_LIGHT,
} from './uno.config-shadows';

const SANS = 'Bodoni Moda';
const MONO = 'Cutive Mono';

const config = defineConfig({
  theme: THEME,
  rules: [
    [
      'glow-interactive-dark',
      {
        'box-shadow': GLOW_INTERACTIVE_DARK,
      },
    ],
    [
      'glow-interactive-light',
      {
        'box-shadow': GLOW_INTERACTIVE_LIGHT,
      },
    ],
    [
      'glow-disabled',
      { 'box-shadow': GLOW_INTERACTIVE_DISABLED },
    ],
    ['placeholder', { transform: 'scale(8)' }],
    ['+placeholder', { transform: 'scale(16)' }],
    ['++placeholder', { transform: 'scale(28)' }],
    [
      'text-stroke-baby-blue',
      { '-webkit-text-stroke': '1px var(--baby-blue)' },
    ],
    [
      'text-stroke-baby-blue-02',
      { '-webkit-text-stroke': '1px var(--baby-blue-02)' },
    ],
    [
      'text-stroke-baby-blue-01',
      { '-webkit-text-stroke': '1px var(--baby-blue-01)' },
    ],
    [
      'text-stroke-gray',
      { '-webkit-text-stroke': '1px var(--gray-1)' },
    ],
  ],
  shortcuts: {
    'background-color': 'dark:bg-teal-bright bg-white-1',
    'background-color-1': 'dark:bg-teal bg-gray',
    'background-color-2': 'dark:bg-black-2 bg-white',
    'background-color-3': 'dark:bg-baby-blue bg-gray-2',
    'background-color-4': 'dark:bg-black-09 bg-white-09',
    'background-color-5': 'dark:bg-teal bg-black',
    'background-color-6': 'dark:bg-baby-blue bg-white-3',
    'background-color-7': 'dark:bg-teal-bright bg-black',
    'text-color': 'dark:text-teal-bright text-gray-1',
    'text-color-1': 'dark:text-baby-blue text-gray',
    'text-color-2': 'dark:text-teal-bright text-gray',
    'text-color-3': 'dark:text-white text-black',
    'text-color-4': 'dark:text-black text-white',
    'text-color-5': 'dark:text-teal-bright text-gray-2',
    'text-color-stroke':
      'dark:text-stroke-baby-blue text-stroke-baby-blue-02',
    'text-color-stroke-1':
      'dark:text-stroke-baby-blue-02 text-stroke-baby-blue-02',
    'text-color-stroke-2':
      'dark:text-stroke-baby-blue-01 text-stroke-baby-blue-01',
    'circle-interactive':
      'relative p-3 cursor-pointer text-color-1',
    'glow-interactive':
      'dark:glow-interactive-dark glow-interactive-light',
    'w-core':
      'w-full sm:w-+core md:w-++core lg:w-+++core xl:w-++++core',
    row: 'flex flex-row items-center',
    'row-wrap': 'flex flex-row items-center flex-wrap',
    'row-start': 'flex flex-row items-start',
    'row-end': 'flex flex-row items-end',
    'row-space': 'row justify-between',
    'row-start-space': 'row-start justify-between',
    column: 'flex flex-col items-center',
    'column-start': 'flex flex-col items-start',
    'column-end': 'flex flex-col items-end',
    'column-space': 'column justify-between',
    center: 'flex items-center justify-center',
    'input-background': 'dark:bg-black-04 bg-white-2',
    'input-label':
      'relative flex flex-col items-start w-full p-2 md:flex-row',
    'input-textarea':
      'relative text-color-1 text-2xl px-4 py-2 w-full tracking-widest input-background',
    'input-text': 'input-textarea px-4',
    '+++text':
      'text-color text-left text-3xl tracking-wide px-1 text-shadow-inherit lg:text-4xl',
    '++text':
      'text-color text-color-stroke relative uppercase px-2 tracking-widest text-3xl text-shadow-inherit md:text-4xl xl:px-4',
    '+text':
      'text-color text-left text-xl text-shadow-inherit md:text-2xl',
    'cover-fixed': 'fixed inset-0',
    cover: 'absolute inset-0',
    'dragger-screen': 'absolute h-screen row-end',
    'dragger-foot': 'relative h-auto row glow-interactive',
  },
  presets: [
    presetUno({ dark: 'class' }),
    presetWebFonts({
      fonts: {
        sans: SANS,
        mono: MONO,
      },
    }),
  ],
  preflights: [
    {
      getCSS: ({ theme }) => `
        html, body {
          font-family: ${SANS}, Chakra Petch, Rubik, Noto Kufi Arabic, Noto Sans JP, -apple-system,
          BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
          Helvetica Neue, sans-serif;
        }

        body:not(.dark) {
          color: ${theme.colors.gray};
          background-color: ${theme.colors['white']};
        }

        html.dark body {
          background-color: ${theme.colors.black};
          color: ${theme.colors['teal-bright']};
        } 

        code,
        kbd,
        samp,
        pre, 
        tt {
          font-family: ${MONO}, Courier, Menlo, and Consolas, monospace;
        }

        ::-webkit-scrollbar {
          background-color: ${theme.colors['white-2']};
        }

        html.dark ::-webkit-scrollbar {
          background-color: ${theme.colors['black-2']};
        }

        ::-webkit-scrollbar-thumb {
          background-color: ${theme.colors['gray']};
          border: 1px solid ${theme.colors['gray-1']};
        }

        html.dark ::-webkit-scrollbar-thumb {
          background-color: ${theme.colors['teal-bright']};
          border: 1px solid ${theme.colors['baby-blue']};
        }

        ::-webkit-scrollbar-thumb:hover {
          background-color: ${theme.colors['gray-3']};
        }

        html.dark ::-webkit-scrollbar-thumb:hover {
          background-color: ${theme.colors['white-08']};
        }

        input:-webkit-autofill {
          -webkit-text-fill-color: ${theme.colors['black']} !important;
        }

        html.dark input:-webkit-autofill {
          -webkit-text-fill-color: ${theme.colors['baby-blue']} !important;
        }

      `,
    },
  ],
});

export default config;
