import { TColorVariablesLookup } from '@t/colors';
import {
  resolveColorOpacityVariations,
  resolveColorSeries,
} from '@utils/colors/variables';

export const HEADER_OFFSET_Y = 240;

export { COLORS } from '@uno/config-colors';

export const WHITE_FILTER = {
  filter: 'grayscale(100%) brightness(400%)',
};

export const COLOR_RGB_RECORD = {
  white: '230,227,225',
  gray: '68,68,68',
  'baby-blue': '153,204,255',
  teal: '45,212,191',
  'teal-bright': '202,248,255',
};

export const BABY_BLUE = resolveColorOpacityVariations(
  'baby-blue',
  '153, 204, 255',
);
export const TEAL = resolveColorOpacityVariations(
  'teal',
  '45, 212, 191',
);
export const TEAL_BRIGHT = resolveColorOpacityVariations(
  'teal-bright',
  '207, 250, 254',
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
    '240, 247, 245',
  ),
  ...resolveColorSeries('white', [
    null,
    '220, 217, 215',
    '200, 197, 195',
    '184, 184, 184',
  ]),
};
export const GRAY = resolveColorSeries('gray', [
  '55, 50, 50',
  '77, 72, 72',
  '135, 130, 130',
  '155, 150, 150',
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
