import { COLOR_VARIABLES_LOOKUP_PACKAGES } from './custom';
import { BLACK, BLACK_RGB_RECORD } from './grayscale/black';
import { GRAY, GRAY_RGB_RECORD } from './grayscale/gray';
import { WHITE, WHITE_RGB_RECORD } from './grayscale/white';
import { TRgb } from './types';
import { resolveColorOpacityVariations } from './utils/resolveColorOpacityVariations';

export const WHITE_FILTER = {
  filter: 'grayscale(100%) brightness(400%)',
};

export const COLOR_RGB_RECORD: Record<string, TRgb> = {
  red: '221, 45, 68',
  'baby-blue': '153, 204, 255',
  teal: '45, 212, 191',
  'teal-bright': '207, 250, 254',
  ...WHITE_RGB_RECORD,
  ...GRAY_RGB_RECORD,
  ...BLACK_RGB_RECORD,
} as const;

export const PRIMARY = resolveColorOpacityVariations(
  'primary',
  COLOR_RGB_RECORD['red'],
);

export const HIGHLIGHT = resolveColorOpacityVariations(
  'highlight',
  COLOR_RGB_RECORD.teal,
);
export const TEAL = resolveColorOpacityVariations(
  'teal',
  COLOR_RGB_RECORD.teal,
);
export const HIGHLIGHT_1 = resolveColorOpacityVariations(
  'highlight-1',
  COLOR_RGB_RECORD['teal-bright'],
);
export const TEAL_BRIGHT = resolveColorOpacityVariations(
  'teal-bright',
  COLOR_RGB_RECORD['teal-bright'],
);
export const HIGHLIGHT_2 = resolveColorOpacityVariations(
  'highlight-2',
  COLOR_RGB_RECORD['baby-blue'],
);
export const BABY_BLUE = resolveColorOpacityVariations(
  'baby-blue',
  COLOR_RGB_RECORD['baby-blue'],
);

export const COLOR_VARIABLES_LOOKUP_GRAYSCALE = {
  ...BLACK,
  ...GRAY,
  ...WHITE,
} as const;

export const COLOR_VARIABLES_LOOKUP: any = {
  ...PRIMARY,
  ...HIGHLIGHT,
  ...HIGHLIGHT_1,
  ...HIGHLIGHT_2,
  ...TEAL,
  ...TEAL_BRIGHT,
  ...BABY_BLUE,
  ...COLOR_VARIABLES_LOOKUP_GRAYSCALE,
  ...COLOR_VARIABLES_LOOKUP_PACKAGES,
  current: 'currentColor',
  transparent: 'rgba(0, 0, 0, 0)',
  border: 'rgba(64, 70, 40, .2)',
} as const;

export type TColorKey =
  | Extract<
      keyof (keyof typeof COLOR_VARIABLES_LOOKUP),
      string
    >
  | string;

export const COLOR_VARIABLES_CSS = Object.entries(
  COLOR_VARIABLES_LOOKUP,
).reduce((a, [key, value]) => {
  return `${a}
--${key}: ${value};`;
}, ``);
