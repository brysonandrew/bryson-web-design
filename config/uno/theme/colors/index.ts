import {
  GRAYSCALE_COLOR_VARIABLES,
  GRAYSCALE_RGB_RECORD,
} from './grayscale';
import {
  OPACITY_RANGE_RGB_RECORD,
  RGB_RECORD,
  VARIABLES_RECORD,
} from '../../../app/colors';
import { TColorKey, TCssVar } from './types';
import { resolveCssVar } from './utils/resolveCssVar';
import { rgbToOpacityRangeRecord } from './utils/rgbToOpacityRangeRecord';
import { rgbToVarRecord } from './utils/rgbToVarRecord';

export const CUSTOM_RGB_RECORD = {
  ...RGB_RECORD,
  ...OPACITY_RANGE_RGB_RECORD,
} as const;

const COLOR_RECORD =
  rgbToVarRecord<keyof typeof RGB_RECORD>(RGB_RECORD);
const OPACITY_RANGE_RECORD = rgbToOpacityRangeRecord<
  keyof typeof OPACITY_RANGE_RGB_RECORD
>(OPACITY_RANGE_RGB_RECORD);

export const COLOR_RGB_RECORD = {
  ...CUSTOM_RGB_RECORD,
  ...GRAYSCALE_RGB_RECORD,
} as const;

export const COLOR_LOOKUP = {
  ...VARIABLES_RECORD,
  ...COLOR_RECORD,
  ...OPACITY_RANGE_RECORD,
  ...GRAYSCALE_COLOR_VARIABLES,
  current: 'currentColor',
  transparent: 'rgba(0, 0, 0, 0)',
} as const;

const entries = Object.entries(COLOR_LOOKUP) as [
  TColorKey,
  string,
][];
export const COLOR_VARIABLES_CSS = entries.reduce(
  (a, [key, value]) => {
    return `${a}
--${key}: ${value};`;
  },
  ``,
);

const keys = Object.keys(COLOR_LOOKUP) as TColorKey[];
export const COLOR_VARIABLES_LOOKUP = keys.reduce(
  (a: Record<TColorKey, TCssVar>, key: TColorKey) => {
    const value: TCssVar = resolveCssVar(key);
    return {
      [key]: value,
      ...a,
    };
  },
  {} as Record<TColorKey, TCssVar>,
);
