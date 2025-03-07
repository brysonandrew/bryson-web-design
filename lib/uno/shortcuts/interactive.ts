import {
  NEU_CLASSES_RECORD,
  TNewClassesRecord,
} from '@brysonandrew/uno-shortcuts/neu/constants';
import { StaticShortcutMap } from 'unocss';

export const SHAPES: StaticShortcutMap = {
  'interactive-sq-sm': 'p-1 w-7 h-7 rounded-sm',
  'interactive-sq-md': 'p-1 w-10 h-10 rounded-sm',
  'interactive-sq-lg': 'p-1 w-14 h-14 rounded-sm',
  'interactive-rect-sm': 'py-1 px-3 rounded-sm',
  'interactive-rect': 'py-2.5 px-4 rounded-sm',
  'interactive-circ-sm': 'w-7 h-7 p-1 rounded-full',
  'interactive-circ-md': 'w-10 h-10 p-2 rounded-full',
  'interactive-circ-lg': 'w-14 h-14 p-3 rounded-full',
};

export const LOOKS: StaticShortcutMap = {
  'interactive-circ': 'bg-black-2 border-1 border-gray',
  'interactive-circ-light':
    'bg-white-2 border-1 border-gray',
  ...(NEU_CLASSES_RECORD),
} as const;

export const INTERACTIVE: StaticShortcutMap = {
  'circle-interactive': 'relative center cursor-pointer',
  interactive:
    'relative center hover:interactive-hover disabled:interactive-disabled',
  'interactive-disabled':
    'text-gray-1 cursor-not-allowed opacity-90',
  'interactive-hover': 'opacity-60',
  ...SHAPES,
  ...LOOKS,
} as const;
