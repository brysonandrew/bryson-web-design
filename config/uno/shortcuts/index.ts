import { SHORTCUTS as DEFAULT_SHORTCUTS } from '@brysonandrew/uno-shortcuts';
import { StaticShortcutMap } from 'unocss';
import { DARK_MODE_UNO_SHORTCUTS } from '@brysonandrew/dark-mode/config/constants/animation';
import { CONTACT_FORM_SHORTCUTS } from './contact-form';

const TYPOGRAPHY_SHORTCUTS: StaticShortcutMap = {
  'text-main': 'text-black-7 dark:text-white',
  'text-main-inverted': 'text-white dark:text-black-7',
  'text-title': 'text-gray-5 dark:text-accent',
  typography: 'text-main font-sans',
  'title-tech':
    'relative text-title text-3xl text-shadow-inherit lg:text-4xl',
  'title-header': 'uppercase char-gap-1',
  'title-header-active': 'title-header text-title',
  'title-main': 'text-title char-gap-1 text-2xl',
  'title-page':
    'relative text-shadow-inherit uppercase text-4xl md:text-5xl',
  'title-section':
    'relative text-xl text-shadow-inherit char-gap-6 md:text-2xl',
  'title-pricing':
    'text-main capitalize font-semibold char-gap-1',
  'text-pricing': 'text-white-7',
};

const SHORTCUTS: StaticShortcutMap = {
  ...DEFAULT_SHORTCUTS,
  ...TYPOGRAPHY_SHORTCUTS,
  ...CONTACT_FORM_SHORTCUTS,
  ...DARK_MODE_UNO_SHORTCUTS,
};

export { SHORTCUTS };
