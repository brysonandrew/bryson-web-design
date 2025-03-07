import { CONTACT_FORM_BASE } from '@brysonandrew/contact/variants/base';
import {
  prefixContact,
  TResolvePartial,
} from './prefixContact';

const record = {
  ...CONTACT_FORM_BASE,
  'bg-input': 'bg-gray-01',
  form: 'column-stretch gap-box-2 mt-1',
  inputs: 'column-stretch gap-box',
  clear: 'absolute top-4 md:top-3.75 right-3.75 z-10',
  'clear-button': 'relative dark:text-gray-3 text-gray-1',
  'clear-icon': 'w-6 h-6 md:(w-7 h-7) lg:(w-8 h-8)',
  label: 'relative column-start w-full p-2 md:row-start',
  'label-back': '',
  'input-base': 'title-input relative text-2xl px-4 w-full',
  autosize:
    'bg-input border border-transparent relative w-full overflow-hidden',
  'input-textarea':
    'block bg-transparent input-base py-2 left-0 top-0 m-0',
  'input-text':
    'bg-input border border-transparent input-base py-2',
  name: 'relative flex justify-center shrink-0 w-full py-2 pl-0 md:(w-40 pl-6 justify-start)',
} as const;
type TRecord = typeof record;
export const resolveContactFormGlowShortcuts = (
  resolvePartial?: TResolvePartial<TRecord>,
) => prefixContact({ record, resolvePartial });
