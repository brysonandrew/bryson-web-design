import {
  TRgb,
  TRgbaValue,
} from '@brysonandrew/color-main/config/types';
import { resolveVarCssColorRecord } from './resolveVarCssColorRecord';
import { rgbToOpacityRangeRecord } from './rgbToOpacityRangeRecord';
import { resolveVarsCssRecord } from '@brysonandrew/utils/css/resolveVarsCssRecord';
import { BASE_COLOR_RECORD } from '@brysonandrew/color-main';

export const resolveColorRecords = <
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

  const colorCssVariablesRecord =
    resolveVarCssColorRecord<typeof colorRecord>(
      colorRecord,
    );

  const colorVarsCss = resolveVarsCssRecord(colorRecord);

  return {
    colorRecord,
    colorCssVariablesRecord,
    colorVarsCss,
    opacityRangeColorRecord,
  } as const;
};
