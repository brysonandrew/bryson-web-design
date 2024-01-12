import type { StaticShortcutMap } from 'unocss';

const TEXT_COLOR: StaticShortcutMap = {
  'text-t-bb':
    'text-secondary dark:text-accent dark-mode-transition',
  'text-g-bb':
    'text-gray dark:text-accent dark-mode-transition',
  'text-g-tb':
    'text-gray-5 dark:text-highlight dark-mode-transition',
  'text-t-tb':
    'text-gray dark:text-highlight dark-mode-transition',
  'text-b2-w9':
    'text-gray dark:text-white-9 dark-mode-transition',
  'text-b-w9':
    'text-gray dark:text-white-9 dark-mode-transition',
  'text-main':
    'text-black-7 dark:text-white-9 dark-mode-transition',
  'text-main-inverted':
    'text-white-9 dark:text-black-7 dark-mode-transition',
};

export const TEXT: StaticShortcutMap = {
  ...TEXT_COLOR,
  'title':
    'text-g-tb text-left text-3xl tracking-wide px-1 text-shadow-inherit lg:text-4xl',
  'page-title':
    'text-t-tb relative uppercase px-2 tracking-widest text-3xl text-shadow-inherit md:text-4xl xl:px-4',
  'section-title':
    'text-left text-xl text-shadow-inherit md:text-2xl',
};
