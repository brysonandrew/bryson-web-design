import { TRgbRecord } from '@brysonandrew/config/color/types';
import { resolveColorOpacityRange } from '../../utils/resolveColorOpacityRange';
import { resolveColorSeries } from '../../utils/resolveColorSeries';
import { resolveGrayscaleRange } from '../../utils/resolveGrayscaleRange';
import { resolveRgbRecord } from '../../utils/resolveRgbRecord';

export const GRAY_RGBS = resolveGrayscaleRange(85, 170);

export const GRAY = {
  ...resolveColorSeries('gray', GRAY_RGBS),
  ...resolveColorOpacityRange('gray', GRAY_RGBS[5]),
} as const;

export const GRAY_RGB_RECORD: TRgbRecord<'gray'> =
  resolveRgbRecord(GRAY_RGBS, 'gray');
