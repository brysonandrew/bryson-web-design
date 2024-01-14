import { TRgb, TRgbRecord } from '../../../types/color';
import { resolveColorOpacityRange } from '../../../utils/color/resolveColorOpacityRange';
import { resolveColorSeries } from '../../../utils/color/resolveColorSeries';
import { resolveGrayscaleRange } from '../../../utils/color/resolveGrayscaleRange';
import { resolveRgbRecord } from '../../../utils/color/resolveRgbRecord';

const WHITE_RGBS: TRgb[] = resolveGrayscaleRange(170, 255);

export const WHITE = {
  ...resolveColorOpacityRange('white', WHITE_RGBS[9]),
  ...resolveColorSeries('white', WHITE_RGBS),
} as const;

export const WHITE_RGB_RECORD: TRgbRecord<'white'> =
  resolveRgbRecord<'white'>(WHITE_RGBS, 'white');
