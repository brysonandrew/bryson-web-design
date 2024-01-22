import type { StaticShortcutMap } from 'unocss';
import { SHORTCUTS as COLOR } from './color';

const TEXT_CUSTOM: StaticShortcutMap = {
  'title-pricing':
    'font-semibold capitalize c-gap-0_006725',
};

export const SHORTCUTS: StaticShortcutMap = {
  ...COLOR,
  ...TEXT_CUSTOM,
  title:
    'relative text-title text-3xl px-1 text-shadow-inherit lg:text-4xl',
  'title-base': 'font-normal c-gap-0_006725',
  'title-header': 'title-base uppercase',
  'title-header-active': 'text-title title-header',
  'title-main': 'text-title title-base text-2xl',
  'title-page':
    'relative uppercase text-3xl text-shadow-inherit px-2 md:text-4xl xl:px-4',
  'title-home':
    'title-page uppercase c-gap-0_0675 text-4xl sm:text-5xl md:text-5.5xl lg:text-6xl xl:text-8xl',
  'title-section':
    'relative text-xl text-shadow-inherit c-gap-0_025 md:text-2xl',
};
