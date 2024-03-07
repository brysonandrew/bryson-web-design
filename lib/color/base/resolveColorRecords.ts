import {
  TBaseColorRecord,
  TRgb,
  TRgbaValue,
} from '@brysonandrew/color-base/config/types';
import { resolveVarCssColorRecord } from './resolveVarCssColorRecord';
import { rgbToOpacityRangeRecord } from './rgbToOpacityRangeRecord';
import { BASE_COLOR_RECORD } from '@brysonandrew/color-base';
import { resolveVarsCssRecord } from '@brysonandrew/utils-css/resolveVarsCssRecord';

export const resolveColorRecords = <
  A extends Record<string, TRgb>,
  B extends Record<string, TRgbaValue | string>,
>(
  customOpacityRgbRecord: A,
  customColorRecord: B,
) => {
  const opacityRangeColorRecord = rgbToOpacityRangeRecord<
    typeof customOpacityRgbRecord
  >(customOpacityRgbRecord);

  const colorRecord: B &
    typeof opacityRangeColorRecord &
    TBaseColorRecord = {
    ...BASE_COLOR_RECORD,
    ...customColorRecord,
    ...opacityRangeColorRecord,
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
