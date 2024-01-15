import {
  BASE_COLOR_RECORD,
  BASE_OPACITY_RGB_RECORD,
  BASE_RGB_RECORD,
} from '../constants';
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
  customOpacityRgbRecord: B,
  customColorRecord: C,
) => {
  const rgbRecord = {
    ...customRgbRecord,
    ...customOpacityRgbRecord,
    ...BASE_RGB_RECORD,
  } as const;
  type TRgbRecord = typeof rgbRecord;

  const rgbColorRecord =
    rgbToVarRecord<TRgbRecord>(rgbRecord);

  const opacityRgbRecord = {
    ...customOpacityRgbRecord,
    ...BASE_OPACITY_RGB_RECORD,
  } as const;

  const opacityRangeColorRecord = rgbToOpacityRangeRecord<
    typeof opacityRgbRecord
  >(opacityRgbRecord);
 
  const colorRecord = {
    ...rgbColorRecord,
    ...opacityRangeColorRecord,
    ...customColorRecord,
    ...BASE_COLOR_RECORD,
  } as const;

  const colorVariablesLookup =
    resolveColorRecord<typeof colorRecord>(colorRecord);

  const colorVariablesCss =
    resolveCssVarRecord(colorRecord);

  return {
    opacityRangeColorRecord,
    colorRecord,
    colorVariablesCss,
    colorVariablesLookup,
  };
};
