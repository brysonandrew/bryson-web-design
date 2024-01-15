import { TRgb, TRgbRecord } from '../../types';
import { resolveColorOpacityRange } from '../../utils/resolveColorOpacityRange';
import { resolveColorSeries } from '../../utils/resolveColorSeries';
import { resolveGrayscaleRange } from '../../utils/resolveGrayscaleRange';
import { resolveRgbRecord } from '../../utils/resolveRgbRecord';

const WHITE_RGBS: TRgb[] = resolveGrayscaleRange(170, 255);

export const WHITE = {
  ...resolveColorOpacityRange('white', WHITE_RGBS[9]),
  ...resolveColorSeries('white', WHITE_RGBS),
} as const;

export const WHITE_RGB_RECORD: TRgbRecord<'white'> =
  resolveRgbRecord<'white'>(WHITE_RGBS, 'white');
