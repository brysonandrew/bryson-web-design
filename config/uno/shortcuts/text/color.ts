import type { StaticShortcutMap } from 'unocss';

const CUSTOM: StaticShortcutMap = {
  'text-pricing': 'text-white-7',
};

export const SHORTCUTS: StaticShortcutMap = {
  ...CUSTOM,
  'text-title':
    'text-gray dark:text-accent dark-mode-transition',
  'text-main':
    'text-black-7 dark:text-white-9 dark-mode-transition',
  'text-main-inverted':
    'text-white-9 dark:text-black-7 dark-mode-transition',
  'text-bg-main':
    'text-white-9 dark:text-black dark-mode-transition',
  'text-bg-main-inverted':
    'text-black dark:text-white-9 dark-mode-transition',
};
