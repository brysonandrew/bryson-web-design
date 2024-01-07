import type { StaticShortcutMap } from 'unocss';

export const TEXT: StaticShortcutMap = {
  'text-t-bb': 'text-teal dark:text-baby-blue',
  'text-g-bb': 'text-gray dark:text-baby-blue',
  'text-g-tb': 'text-gray dark:text-teal-bright',
  'text-t-tb': 'text-black dark:text-teal-bright',
  'text-g2-tb': 'text-gray-2 dark:text-teal-bright',
  'text-b2-w9': 'text-black-2 dark:text-white-9',
  'text-b-w9': 'text-black dark:text-white-9',
  'text-w9-b': 'text-white-9 dark:text-black',
  'text-stroke-bb02-bb':
    'text-stroke-baby-blue-01 dark:text-stroke-baby-blue',
  'text-stroke-b01-bb02':
    'text-stroke-black-01 dark:text-stroke-baby-blue-02',
  'text-stroke-bb02-bb02':
    'text-stroke-baby-blue-02 dark:text-stroke-baby-blue-02',
  'text-main':
    'text-gray dark:text-white-9 dark-mode-transition',
  'text-main-inverted':
    'text-white-9 dark:text-black dark-mode-transition',
  '+++text':
    'text-g-tb text-left text-3xl tracking-wide px-1 text-shadow-inherit lg:text-4xl',
  '++text':
    'text-t-tb text-stroke-bb02-bb relative uppercase px-2 tracking-widest text-3xl text-shadow-inherit md:text-4xl xl:px-4',
  '+text':
    'text-stroke-b01-bb02 text-left text-xl text-shadow-inherit md:text-2xl',
};

export const BACKGROUND: StaticShortcutMap = {
  'bg-main':
    'bg-white-9 dark:bg-black dark-mode-transition',
  'bg-main-inverted':
    'bg-black dark:bg-white-9 dark-mode-transition',
};

export const COLORS = {
  'dark-mode-transition': 'transition-colors duration-1000',
  ...TEXT,
  ...BACKGROUND,
};
