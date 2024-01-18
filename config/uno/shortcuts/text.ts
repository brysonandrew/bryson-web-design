import type { StaticShortcutMap } from 'unocss';

const TEXT_COLOR_DARK_MODE: StaticShortcutMap = {
  'text-main':
    'text-black-7 dark:text-white-9 dark-mode-transition',
  'text-main-inverted':
    'text-white-9 dark:text-black-7 dark-mode-transition',
  'text-bg-main':
    'text-white-9 dark:text-black dark-mode-transition',
  'text-bg-main-inverted':
    'text-black dark:text-white-9 dark-mode-transition',
};

export const TEXT: StaticShortcutMap = {
  ...TEXT_COLOR_DARK_MODE,
  title:
    'relative text-3xl tracking-wide px-1 text-shadow-inherit lg:text-4xl',
  'page-title':
    'relative uppercase text-3xl tracking-widest text-shadow-inherit px-2 md:text-4xl xl:px-4',
  'section-title':
    'relative text-xl text-shadow-inherit md:text-2xl',
  'pricing-title':
    'text-white-7 tracking-wider font-semibold capitalize',
  'main-title':
    'text-gray dark:text-accent dark-mode-transition',
};
