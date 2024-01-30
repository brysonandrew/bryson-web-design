import { StaticShortcutMap } from 'unocss';
import { BASE } from './base';

export const CONTACT_FORM_GLOW_SHORTCUTS: StaticShortcutMap =
  {
    ...BASE,
    'bg-input': 'bg-gray-01',
    'title-input': 'title-section title-main',
    root: 'column-stretch gap-box-2 mt-1',
    inputs: 'column-stretch gap-box',
    clear: 'absolute top-4 md:top-3.75 right-3.75 z-10',
    'clear-button': 'relative dark:text-gray-3 text-gray-1',
    'clear-icon': 'w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8',
    shell: 'relative column-start w-full p-2 md:row-start',
    'shell-texture-glow': '',
    'input-base':
      'title-input relative text-2xl px-4 w-full',
    autosize:
      'bg-input border border-transparent relative w-full overflow-hidden',
    'input-textarea':
      'bg-transparent input-base py-2 block left-0 top-0 m-0',
    'input-text':
      'bg-input border border-transparent input-base py-2',
    name: 'relative flex justify-center shrink-0 w-full py-2 pl-0 md:(w-40 pl-6 justify-start)',
    'name-text':
      'flex title-input capitalize whitespace-nowrap',
    submit: 'relative p-2 w-full',
    'submit-text':
      'center relative title-input pointer-events-none',
  };
