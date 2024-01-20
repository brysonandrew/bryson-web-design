import {
  BASE_COLOR_RECORD,
  BASE_GLOW_RECORD,
} from '../constants';
import { TRgb, TRgbaValue } from '../types';
import { resolveGlowRecord } from './glow/resolveGlowRecord';
import { resolveColorRecord } from './resolveColorRecord';
import { resolveVarCssRecord } from './resolveCssVarRecord';
import { rgbToOpacityRangeRecord } from './rgbToOpacityRangeRecord';

export const resolveCustomRecords = <
  A extends Record<string, TRgb>,
  B extends Record<string, TRgbaValue | string>,
>(
  customOpacityRgbRecord: A,
  customColorRecord: B,
) => {
  const opacityRgbRecord = {
    ...customOpacityRgbRecord,
  } as const;

  const opacityRangeColorRecord = rgbToOpacityRangeRecord<
    typeof customOpacityRgbRecord
  >(opacityRgbRecord);

  const colorRecord = {
    ...opacityRangeColorRecord,
    ...customColorRecord,
    ...BASE_COLOR_RECORD,
  } as const;

  const customGlowRecord = resolveGlowRecord(
    customOpacityRgbRecord,
  );

  const glowRecord = {
    ...customGlowRecord,
    ...BASE_GLOW_RECORD,
  } as const;

  const colorCssVariablesRecord =
    resolveColorRecord<typeof colorRecord>(colorRecord);

  const colorCssVariables =
    resolveVarCssRecord(colorRecord);

  return {
    colorRecord,
    colorCssVariablesRecord,
    colorCssVariables,
    opacityRangeColorRecord,
    glowRecord,
  } as const;
};
