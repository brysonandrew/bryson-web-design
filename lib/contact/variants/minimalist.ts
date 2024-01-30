import { StaticShortcutMap } from 'unocss';
import { BASE } from './base';

export const CONTACT_FORM_MINIMALIST_SHORTCUTS: StaticShortcutMap =
  {
    ...BASE,
    'title-input':
      'text-2xl sm:text-2.5xl md:text-3xl md:text-3.5xl lg:text-4xl xl:text-4.5xl',
    'bg-input': 'bg-white-9 border-1 border-black-04',
    root: 'column gap-box-2 text-black text-4xl w-full',
    inputs: 'relative column gap-box w-full',
    clear:
      'absolute top-0.5 right-0 z-10 md:(top-3.5 right-2) lg:top-3 xl:top-4',
    'clear-button':
      'relative text-gray-2 lg:text-gray backdrop-blur-sm bg-white-01',
    'clear-icon': 'w-8 h-8 md:(w-9 h-9) lg:(w-10 h-10)',
    shell:
      'relative column-start w-full gap-2 md:(row-start-space gap-0)',
    'shell-texture-glow': 'hidden',
    'input-base':
      'title-input relative pl-4 w-full tracking-widest rounded-md leading-none shrink-0 disabled:cursor-not-allowed',
    'input-textarea': 'input-base py-4 pr-10 lg:pr-12',
    autosize: 'bg-input relative w-full md:w-9/12',
    'input-text':
      'bg-input input-base py-2 pr-12 md:w-9/12 lg:pr-14',
    name: 'title-input relative shrink-0 w-full py-2 pl-0 leading-none md:(w-3/12 justify-start)',
    'name-text':
      'title-input text-accent inline-flex capitalize whitespace-nowrap',
    submit: 'bg-input center input-base py-3 pr-3',
    'submit-text': 'italic',
  };
