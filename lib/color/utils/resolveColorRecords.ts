import {
  TRgb,
  TRgbaValue,
} from '@brysonandrew/color/config/types';
import { resolveGlowRecord } from './glow/resolveGlowRecord';
import { resolveVarCssColorRecord } from './resolveVarCssColorRecord';
import { resolveVarCssRecord } from '../../utils/css/resolveVarCssRecord';
import { rgbToOpacityRangeRecord } from './rgbToOpacityRangeRecord';
import {
  BASE_COLOR_RECORD,
  BASE_GLOW_RECORD,
} from '@brysonandrew/color/config/constants';
import { Global, css } from '@emotion/react';
import { createElement, FC } from 'react';

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

  const customGlowRecord = resolveGlowRecord(
    customOpacityRgbRecord,
  );

  const glowRecord = {
    ...customGlowRecord,
    ...BASE_GLOW_RECORD,
  } as const;

  const colorCssVariablesRecord =
    resolveVarCssColorRecord<typeof colorRecord>(
      colorRecord,
    );

  const colorCssVariables =
    resolveVarCssRecord(colorRecord);

  const GlobalColor: FC = () =>
    createElement(Global, {
      styles: css`
        :root {
          ${colorCssVariables};
        }
      `,
    });

  return {
    colorRecord,
    colorCssVariablesRecord,
    colorCssVariables,
    opacityRangeColorRecord,
    glowRecord,
    GlobalColor,
  } as const;
};
