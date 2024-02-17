import { CONTACT_FORM_BASE } from '@brysonandrew/contact/variants/base';
import {
  prefixContact,
  TResolvePartial,
} from './prefixContact';

const record = {
  ...CONTACT_FORM_BASE,
  'bg-input': 'bg-white border-1 border-black-04',
  form: 'column gap-box-2 text-black w-full',
  inputs: 'relative column gap-box w-full',
  clear: 'absolute top-0.5 right-0 z-10 md:(top-2 right-2)',
  'clear-button':
    'relative text-gray-2 lg:text-gray backdrop-blur-sm bg-white-01',
  'clear-icon': 'w-8 h-8 md:(w-9 h-9) lg:(w-10 h-10)',
  label:
    'relative column-start w-full gap-2 md:(row-start-space gap-0)',
  'label-texture-glow': 'hidden',
  'input-base':
    'title-input relative pl-4 w-full tracking-widest rounded-md leading-none shrink-0 disabled:cursor-not-allowed',
  autosize: 'bg-input relative w-full md:w-9/12',
  'input-textarea':
    'block bg-transparent input-base py-4 pr-10 lg:pr-12',
  'input-text':
    'bg-input input-base py-2 pr-12 md:w-9/12 lg:pr-14',
  name: 'title-input relative shrink-0 w-full py-2 pl-0 leading-none md:(w-3/12 justify-start)',
} as const;

type TRecord = typeof record;
export const resolveContactFormMinimalistShortcuts = (
  resolvePartial?: TResolvePartial<TRecord>,
) => prefixContact({ record, resolvePartial });
