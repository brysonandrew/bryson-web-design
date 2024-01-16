import { BASE_COLOR_RECORD } from '../constants';
import { BLACK_RGBS } from '../constants/grayscale/black';
import {
  WHITE_RGBS,
  WHITE_RGB_RECORD,
} from '../constants/grayscale/white';
import { resolveGlowRecord } from './glow/resolveGlowRecord';
import { resolveColorRecord } from './resolveColorRecord';
import { resolveVarCssRecord } from './resolveCssVarRecord';
import { rgbToOpacityRangeRecord } from './rgbToOpacityRangeRecord';

export const resolveCustomRecords = <
  A extends object,
  B extends object,
>(
  customOpacityRgbRecord: A,
  customColorRecord: B,
) => {
  const opacityRangeColorRecord = rgbToOpacityRangeRecord<
    typeof customOpacityRgbRecord
  >(customOpacityRgbRecord);

  const colorRecord = {
    ...opacityRangeColorRecord,
    ...customColorRecord,
    ...BASE_COLOR_RECORD,
  } as const;

  const glowColorRecord = {
    ...customOpacityRgbRecord,
    black: BLACK_RGBS[0],
    'white-9': WHITE_RGBS[9],
  } as const;

  const glowRecord = resolveGlowRecord(glowColorRecord);

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
  };
};
