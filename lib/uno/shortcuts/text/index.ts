import type { StaticShortcutMap } from 'unocss';
import { SHORTCUTS as COLOR } from './color';

export const SHORTCUTS: StaticShortcutMap = {
  ...COLOR,
  title:
    'relative text-title text-3xl px-1 text-shadow-inherit lg:text-4xl',
  'title-base': 'font-normal char-gap-1',
  'title-header': 'title-base uppercase',
  'title-header-active': 'text-title title-header',
  'title-main': 'text-title title-base text-2xl',
  'title-page':
    'relative uppercase text-4xl text-shadow-inherit px-2 md:text-5xl xl:px-4',
  'title-section':
    'relative text-xl text-shadow-inherit char-gap-6 md:text-2xl',
};
