import { SHORTCUTS as DEFAULT_SHORTCUTS } from '@brysonandrew/uno-shortcuts';
import { CONTACT_FORM_GLOW_SHORTCUTS } from '@brysonandrew/contact/variants/glow';
import { StaticShortcutMap } from 'unocss';
import { DARK_MODE_UNO_SHORTCUTS } from '@brysonandrew/dark-mode/config/animation';

const TYPOGRAPHY_SHORTCUTS: StaticShortcutMap = {
  'text-title': 'text-gray dark:text-accent',
  typography: 'relative text-main font-sans',
  title:
    'relative text-title px-1 text-3xl text-shadow-inherit lg:text-4xl',
  'title-base': 'font-normal char-gap-1',
  'title-header': 'title-base uppercase',
  'title-header-active': 'text-title title-header',
  'title-main': 'text-title title-base text-2xl',
  'title-page':
    'relative uppercase text-4xl text-shadow-inherit px-2 md:text-5xl xl:px-4',
  'title-section':
    'relative text-xl text-shadow-inherit char-gap-6 md:text-2xl',
  'title-pricing':
    'font-semibold text-main capitalize char-gap-1',
  'text-pricing': 'text-white-7',
};

const CONTACT_FORM_SHORTCUTS: StaticShortcutMap = {
  ...CONTACT_FORM_GLOW_SHORTCUTS,
  'name-text': 'title-section capitalize',
};

const SHORTCUTS: StaticShortcutMap = {
  ...DEFAULT_SHORTCUTS,
  ...TYPOGRAPHY_SHORTCUTS,
  ...CONTACT_FORM_SHORTCUTS,
  ...DARK_MODE_UNO_SHORTCUTS,
};

export { SHORTCUTS };
