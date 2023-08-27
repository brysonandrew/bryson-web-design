import type { StaticShortcutMap } from 'unocss';

const BACKGROUND: StaticShortcutMap = {
  'background-color': 'dark:bg-teal-bright bg-white-1',
  'background-color-1': 'dark:bg-teal bg-gray',
  'background-color-2': 'dark:bg-black-2 bg-white',
  'background-color-3': 'dark:bg-teal-bright bg-baby-blue',
};
const TEXT: StaticShortcutMap = {
  '+++text':
    'text-color text-left text-3xl tracking-wide px-1 text-shadow-inherit lg:text-4xl',
  '++text':
    'text-color text-color-stroke relative uppercase px-2 tracking-widest text-3xl text-shadow-inherit md:text-4xl xl:px-4',
  '+text':
    'text-color text-left text-xl text-shadow-inherit md:text-2xl',
  'text-color': 'dark:text-teal-bright text-gray-1',
  'text-color-1': 'dark:text-baby-blue text-gray',
  'text-color-2': 'dark:text-teal-bright text-gray',
  'text-color-3': 'dark:text-white text-black-2',
  'text-color-4': 'dark:text-black text-white',
  'text-color-5': 'dark:text-teal-bright text-gray-2',
  'text-color-stroke':
    'dark:text-stroke-baby-blue text-stroke-baby-blue-02',
  'text-color-stroke-1':
    'dark:text-stroke-baby-blue-02 text-stroke-baby-blue-02',
  'text-color-stroke-2':
    'dark:text-stroke-baby-blue-01 text-stroke-baby-blue-01',
};

const FLEX: StaticShortcutMap = {
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
};

const INPUT: StaticShortcutMap = {
  'input-background': 'dark:bg-black-04 bg-white-2',
  'input-label':
    'relative flex flex-col items-start w-full p-2 md:flex-row',
  'input-textarea':
    'relative text-color-1 text-2xl px-4 py-2 w-full tracking-widest input-background',
  'input-text': 'input-textarea px-4',
};

export const SHORTCUTS: StaticShortcutMap = {
  ...BACKGROUND,
  ...TEXT,
  ...FLEX,
  ...INPUT,
  'circle-interactive':
    'relative p-3 cursor-pointer text-color-1',
  'glow-interactive':
    'dark:glow-interactive-dark glow-interactive-light',
  'glow-interactive-lg':
    'dark:glow-interactive-dark-lg glow-interactive-light-lg',
  'w-core':
    'w-full sm:w-+core md:w-++core lg:w-+++core xl:w-++++core',
  'cover-fixed': 'fixed inset-0',
  cover: 'absolute inset-0',
  'dragger-screen': 'absolute h-screen row-end',
  'dragger-foot':
    'relative h-auto row dark:glow-baby-blue glow-interactive-light-lg',
} as const;
