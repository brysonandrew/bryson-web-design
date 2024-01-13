import { resolveColorOpacityRange } from '../../../utils/color/resolveColorOpacityRange';
import { resolveColorSeries } from '../../../utils/color/resolveColorSeries';
import { resolveGrayscaleRange } from '../../../utils/color/resolveGrayscaleRange';
import { resolveRgbRecord } from '../../../utils/color/resolveRgbRecord';

export const BLACK_RGBS = resolveGrayscaleRange(0, 85);

const OPACITY_VARIATIONS = resolveColorOpacityRange(
  'black',
  BLACK_RGBS[0],
);
const COLOR_SERIES = resolveColorSeries(
  'black',
  BLACK_RGBS,
);

export const BLACK = {
  ...COLOR_SERIES,
  ...OPACITY_VARIATIONS,
} as const;

export const BLACK_RGB_RECORD = resolveRgbRecord<'black'>(
  BLACK_RGBS,
  'black',
);
