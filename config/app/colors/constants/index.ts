import { resolveCustomRecords } from '../../../../lib/color/utils/resolveCustomRecords';
import { PLANS_COLOR_VARIABLES } from './pricing';

export const RGB_RECORD = {} as const;
type TRgbRecord = typeof RGB_RECORD;

export const OPACITY_RANGE_RGB_RECORD = {
  accent: '153, 204, 255',
  secondary: '45, 212, 191',
  highlight: '207, 250, 254',
} as const;

type TOpacityRangeRgbRecord =
  typeof OPACITY_RANGE_RGB_RECORD;

export const VARIABLES_RECORD = {
  ...PLANS_COLOR_VARIABLES,
  red: '#f87171',
  'dark-highlight': '#00aba9',
  'light-highlight': '#5bbad5',
} as const;
type TVariablesRecord = typeof VARIABLES_RECORD;

const {
  colorRecord,
  colorVariablesLookup,
  colorVariablesCss,
} = resolveCustomRecords<
  TRgbRecord,
  TOpacityRangeRgbRecord,
  TVariablesRecord
>(RGB_RECORD, OPACITY_RANGE_RGB_RECORD, VARIABLES_RECORD);

export const COLOR_RECORD = colorRecord;
export const COLOR_VARS_RECORD = colorVariablesLookup;
export const COLOR_VARS_CSS = colorVariablesCss;
