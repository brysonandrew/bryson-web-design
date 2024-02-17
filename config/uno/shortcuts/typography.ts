import { StaticShortcutMap } from 'unocss';

export const TYPOGRAPHY_SHORTCUTS: StaticShortcutMap = {
  'text-main': 'text-black-7 dark:text-white',
  'text-main-inverted': 'text-white dark:text-black-7',
  typography: 'text-main font-sans',
  'title-header': 'uppercase char-gap-1',
  'title-header-active': 'title-header',
  'title-main': 'char-gap-1 text-2xl',
  'title-page':
    'relative text-shadow-inherit uppercase text-4xl md:text-5xl',
  'title-section':
    'relative text-xl text-shadow-inherit char-gap-2 md:text-2xl',
  'title-pricing':
    'text-main capitalize font-semibold char-gap-1',
};
