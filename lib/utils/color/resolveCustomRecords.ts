import {
  BASE_COLOR_RECORD,
  BASE_RGB_RECORD,
} from '@lib/constants/color';
import { TBaseColorKey } from '@lib/types/color';
import { resolveColorRecord } from './resolveColorRecord';
import { resolveCssVarRecord } from './resolveCssVarRecord';
import { rgbToOpacityRangeRecord } from './rgbToOpacityRangeRecord';
import { rgbToVarRecord } from './rgbToVarRecord';

export const resolveCustomRecords = <
  A extends object,
  B extends object,
  C extends object,
>(
  customRgbRecord: A,
  customOpacityRangeRgbRecord: B,
  customLookup: C,
) => {
  const customRgb = {
    ...customRgbRecord,
    ...customOpacityRangeRgbRecord,
    ...BASE_RGB_RECORD,
  } as const;
  type TCustomRgb = typeof customRgb;

  const colorRecord = rgbToVarRecord<TCustomRgb>(customRgb);

  const opacityRangeRecord = rgbToOpacityRangeRecord<B>(
    customOpacityRangeRgbRecord,
  );

  const allColors = {
    ...colorRecord,
    ...opacityRangeRecord,
    ...BASE_COLOR_RECORD,
  } as const;

  const colorVariablesCss = resolveCssVarRecord(allColors);

  const lookup = {
    ...customLookup,
    ...allColors,
  } as const;

  const colorVariablesLookup = resolveColorRecord(lookup);

  return {
    lookup,
    colorRecord,
    colorVariablesCss,
    colorVariablesLookup,
  };
};
