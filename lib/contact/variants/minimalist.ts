import { StaticShortcutMap } from 'unocss';

export const MINIMALIST: StaticShortcutMap = {
  'gap-box': 'gap-6',
  'gap-box-1_5': 'gap-8',
  'gap-box-2': 'gap-12',
  'title-input':
    'text-2xl sm:text-2.5xl md:text-3xl md:text-3.5xl lg:text-4xl xl:text-4.5xl',

  root: 'column gap-box-2 text-4xl w-full',
  inputs: 'relative column gap-box w-full',
  autosize: 'w-full',
  clear:
    'absolute top-4.5 sm:top-4 right-3.75 md:top-3.5 lg:top-3 xl:top-4 z-10',
  'clear-button':
    'relative text-gray-2 lg:text-gray backdrop-blur-sm bg-white-01',
  'clear-icon': 'w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10',
  shell: 'relative column-start w-full md:row-start-space',
  'shell-texture-glow': 'hidden',
  'input-base':
    'title-input relative pl-4 w-full bg-gray-3 text-black tracking-widest rounded-md leading-none disabled:cursor-not-allowed',
  'input-textarea': 'input-base py-4 pr-10 lg:pr-12',
  'input-text': 'input-base py-2 pr-12 lg:pr-14',
  'input-name':
    'title-input relative shrink-0 w-full pt-1 pb-4 pl-0 md:w-3/12 md:pb-2 md:pl-0 md:justify-start',
  'name-text': 'title-input inline-flex whitespace-nowrap',
  'input-button': 'input-base py-3 pr-3 italic',
  // input: 'input-base w-full shrink-0 md:w-9/12',
};
