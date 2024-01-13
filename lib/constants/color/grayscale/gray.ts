import { TRgbRecord } from '@lib/types/color';
import { resolveColorOpacityRange } from '../../../utils/color/resolveColorOpacityRange';
import { resolveColorSeries } from '../../../utils/color/resolveColorSeries';
import { resolveGrayscaleRange } from '../../../utils/color/resolveGrayscaleRange';
import { resolveRgbRecord } from '../../../utils/color/resolveRgbRecord';

export const GRAY_RGBS = resolveGrayscaleRange(85, 170);

export const GRAY = {
  ...resolveColorSeries('gray', GRAY_RGBS),
  ...resolveColorOpacityRange('gray', GRAY_RGBS[5]),
} as const;

export const GRAY_RGB_RECORD: TRgbRecord<'gray'> =
  resolveRgbRecord(GRAY_RGBS, 'gray');
