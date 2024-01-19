import { resolveCustomRecords } from '../../../../lib/config/color/utils/resolveCustomRecords';
import { PLANS_COLOR_VARIABLES } from './pricing';

const SECONDARY = '45, 212, 191';
const ACCENT = '153, 204, 255';

export const OPACITY_RANGE_RGB_RECORD = {
  secondary: SECONDARY,
  highlight: '207, 250, 254',
  accent: ACCENT,
  ...PLANS_COLOR_VARIABLES,
} as const;

type TOpacityRangeRgbRecord =
  typeof OPACITY_RANGE_RGB_RECORD;

export const VARIABLES_RECORD = {
  red: '#f87171',
} as const;
type TVariablesRecord = typeof VARIABLES_RECORD;

const {
  colorRecord,
  colorCssVariablesRecord,
  colorCssVariables,
  opacityRangeColorRecord,
  glowRecord,
} = resolveCustomRecords<
  TOpacityRangeRgbRecord,
  TVariablesRecord
>(OPACITY_RANGE_RGB_RECORD, VARIABLES_RECORD);

export const COLOR_RECORD = colorRecord;
export const COLOR_VARS_RECORD = colorCssVariablesRecord;
export const COLOR_VARS_CSS = colorCssVariables;
export const COLOR_SHADE_RECORD = opacityRangeColorRecord;
export const GLOW_DROP = glowRecord.drop;
export const GLOW_BOX = glowRecord.box;
