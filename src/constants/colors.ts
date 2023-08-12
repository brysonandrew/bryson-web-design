import { TColorVariablesLookup, TRgb } from '@t/colors';
import { TColorKey } from '@t/css';
import {
  resolveColorOpacityVariations,
  resolveColorSeries,
} from '@utils/colors/variables';

export const HEADER_OFFSET_Y = 240;

export { COLORS } from '@uno/config-colors';

export const WHITE_FILTER = {
  filter: 'grayscale(100%) brightness(400%)',
};

const GRAY_1 = '68, 68, 68';
const GRAY_2 = '120, 120, 120';
const GRAY_3 = '155, 150, 150';

export const COLOR_RGB_RECORD: Record<
  Extract<
    TColorKey,
    | 'teal'
    | 'white'
    | 'gray'
    | 'gray-1'
    | 'gray-2'
    | 'gray-3'
    | 'baby-blue'
    | 'teal-bright'
  >,
  TRgb
> = {
  white: '230, 227, 225',
  gray: '68, 68, 68',
  'gray-1': GRAY_1,
  'gray-2': GRAY_2,
  'gray-3': GRAY_3,
  'baby-blue': '153, 204, 255',
  teal: '45, 212, 191',
  'teal-bright': '207, 250, 254',
};

export const BABY_BLUE = resolveColorOpacityVariations(
  'baby-blue',
  COLOR_RGB_RECORD['baby-blue'],
);
export const TEAL = resolveColorOpacityVariations(
  'teal',
  COLOR_RGB_RECORD.teal,
);
export const TEAL_BRIGHT = resolveColorOpacityVariations(
  'teal-bright',
  COLOR_RGB_RECORD['teal-bright'],
);
export const BLACK = {
  ...resolveColorOpacityVariations('black', '0, 0, 0'),
  ...resolveColorSeries('black', [
    null,
    '17, 17, 17',
    '28, 28, 28',
    '66, 66, 66',
  ]),
};

export const WHITE = {
  ...resolveColorOpacityVariations(
    'white',
    COLOR_RGB_RECORD['white'],
  ),
  ...resolveColorSeries('white', [
    null,
    '222, 219, 217',
    '210, 207, 205',
    '184, 184, 184',
  ]),
};
export const GRAY = resolveColorSeries('gray', [
  COLOR_RGB_RECORD['gray'],
  GRAY_1,
  GRAY_2,
  GRAY_3,
]);

export const COLOR_VARIABLES_LOOKUP: TColorVariablesLookup =
  {
    ...BABY_BLUE,
    ...TEAL,
    ...TEAL_BRIGHT,
    ...BLACK,
    ...WHITE,
    ...GRAY,
    current: 'currentColor',
    transparent: 'rgba(0, 0, 0, 0)',
  };

export const COLOR_VARIABLES_CSS = Object.entries(
  COLOR_VARIABLES_LOOKUP,
).reduce((a, [key, value]) => {
  return `${a}
--${key}: ${value};`;
}, ``);
